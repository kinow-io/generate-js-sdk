const fs = require('fs')
const yaml = require('js-yaml')
const Mustache = require('mustache')

const staticFiles = {
  'templates/ModelClass.mustache': 'Model/Model.js',
  'templates/ResponseError.mustache': 'Api/ResponseError.js',
  'templates/.gitignore.mustache': '.gitignore'
}

const directories = [
  'src',
  'src/Api',
  'src/Model',
  'src/doc',
  'src/doc/Api',
  'src/doc/Model',
]

main(getParameters(process.argv))

function getParameters (argv) {
  let params = {}
  let reg = /^--([a-z0-9\-_]*)/
  argv.forEach((arg, index) => {
    if (reg.test(arg)) {
      params[arg.match(reg)[1]] = argv[index + 1]
    }
  })
  return params;
}

function main (params) {
  const file = fs.readFileSync(params.swagger, 'utf8')
  const swagger = yaml.safeLoad(file)
  cleanSourceDirectory()
  createModels(swagger.definitions, params.output)
  createApis(swagger.paths, params.output)
  createService(swagger.host, swagger.basePath, params.output)
  createApiIndex(swagger.paths, swagger.definitions, params.output)
  createPackageJson(params.service, params.output)
  createDoc(params.service, swagger, params.output)
  copyStaticFiles(staticFiles, params.output)
}

function cleanSourceDirectory () {
  // Delete Api directory
  directories.reverse().forEach(directory => {
    if (fs.existsSync(directory)) {
      const files = fs.readdirSync(directory)
      files.forEach(file => fs.unlinkSync(`${directory}/${file}`))
      fs.rmdirSync(directory)
    }
  })

  directories.reverse().forEach(directory => {
    fs.mkdirSync(directory)
  })
}

function createModels (definitions, output) {
  for (let definition in definitions) {
    const source = getModelSource(definition, definitions[definition])
    fs.writeFileSync(`${output}/Model/${definition}.js`, source, 'utf8')
  }
}

function getModelSource (definition, model) {
  const template = fs.readFileSync('templates/Model.mustache', 'utf8')
  return Mustache.render(template, {
    className: definition,
    properties: Object.keys(model.properties).map(snakeToCamel)
  })
}

function createApis (paths, output) {
  const apis = getApis(paths)
  for (let api in apis) {
    let source = getApiSource(api, apis[api])
    fs.writeFileSync(`${output}/Api/${api}Api.js`, source, 'utf8')
  }
}

function getApis (paths) {
  let apis = {}
  for (let initalPath in paths) {
    let pathParameters = paths[initalPath].parameters || []

    pathParameters = pathParameters.map(param => param.name)

    let path = parsePath(initalPath)

    for (let method in paths[initalPath]) {
      for (let index in paths[initalPath][method].tags) {
        let tag = paths[initalPath][method].tags[index]
        if (!apis[tag]) {
          apis[tag] = []
        }

        let restParameters = paths[initalPath][method].parameters || []
        restParameters = restParameters.map(param => param.name).map(snakeToCamel)

        let strParameters = [...pathParameters, ...restParameters].join(', ')
        let strRestParameters = restParameters.length ? `, ${restParameters.join(', ')}` : ''

        apis[tag].push({
          strParameters,
          strRestParameters,
          method,
          path,
          ... paths[initalPath][method]
        })
      }
    }
  }
  return apis
}

function getApiSource (className, methods) {
  const template = fs.readFileSync('templates/Api.mustache', 'utf8')
  return Mustache.render(template, {
    className,
    methods
  })
}

function createService (host, basePath, output) {
  const template = fs.readFileSync('templates/Service.mustache', 'utf8')
  const rendered = Mustache.render(template, {
    host, basePath
  })
  fs.writeFileSync(`${output}/Api/Service.js`, rendered, 'utf8')
}

function createApiIndex (paths, definitions, output) {
  const apis = getApis(paths)
  const source = getApiIndexSource(apis, definitions)
  fs.writeFileSync(`${output}/index.js`, source, 'utf8')
}

function getApiIndexSource (apis, definitions) {
  const template = fs.readFileSync('templates/Api_index.mustache', 'utf8')
  return Mustache.render(template, {
    apis: Object.keys(apis),
    models: Object.keys(definitions)
  })
}

function createPackageJson (service, output) {
  const template = fs.readFileSync('templates/package.mustache', 'utf8');
  const rendered = Mustache.render(template, {
    service
  })
  fs.writeFileSync(`${output}/package.json`, rendered, 'utf8')
}

function createDoc (service, swagger, output) {
  // Create README.md
  const apis = getApis(swagger.paths)
  const models = []

  for (let definition in swagger.definitions) {
    models.push({
      className: definition
    })
  }

  createReadme(service, swagger.info, apis, models, output)
  createApiDoc(service, apis, output)
}

function createReadme (service, infos, apis, models, output) {

  let methods = []

  for (let api in apis) {
    apis[api].forEach(method => {
      method.method = method.method.toUpperCase()
      methods.push({
        className: `${api}Api`,
        ...method
      })
    })
  }

  const source = getReadmeSource({
    service,
    version: infos.version,
    description: infos.description,
    date: new Date().toISOString(),
    methods,
    models
  })
  fs.writeFileSync(`${output}/README.md`, source, 'utf8')
}

function getReadmeSource (infos) {
  const template = fs.readFileSync('templates/README.mustache', 'utf8')
  return Mustache.render(template, infos)
}

function createApiDoc (service, apis, output) {
  for (let api in apis) {
    apis[api] = apis[api].map(api => {
      return {
        ...api,
        path: api.path.replace('$', ''),
      }
    })
    const source = getApiDocSource(service, `${api}Api`, apis[api])
    fs.writeFileSync(`${output}/doc/Api/${api}Api.md`, source, 'utf8')
  }
}

function getApiDocSource (service, className, api) {
  const template = fs.readFileSync('templates/ApiDoc.mustache', 'utf8')
  return Mustache.render(template, {
    service,
    className,
    methods: api
  })
}

function copyStaticFiles (files, output) {
  for (let source in files) {
    const dest = files[source]
    fs.copyFileSync(source, `${output}/${dest}`)
  }
}

function parsePath (path) {
  const matches = path.match(/\{([0-9a-z\-]*)\}/gi)
  for (let match in matches) {
    path = path.replace(matches[match], `$${matches[match]}`)
  }
  return path
}

function snakeToCamel (s) {
  return s.replace(/(\_\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}
