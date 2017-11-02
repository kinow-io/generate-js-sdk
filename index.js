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

main('../catalog-service/resources/swagger.yaml', 'catalog')

function main (swaggerFile, service) {
  const file = fs.readFileSync(swaggerFile, 'utf8')
  const swagger = yaml.safeLoad(file)
  cleanSourceDirectory()
  createModels(swagger.definitions)
  createApis(swagger.paths)
  createService(swagger.host, swagger.basePath)
  createApiIndex(swagger.paths, swagger.definitions)
  createPackageJson(service)
  createDoc(service, swagger)
  copyStaticFiles(staticFiles)
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

function createModels (definitions) {
  for (let definition in definitions) {
    const source = getModelSource(definition, definitions[definition])
    fs.writeFileSync(`src/Model/${definition}.js`, source, 'utf8')
  }
}

function getModelSource (definition, model) {
  const template = fs.readFileSync('templates/Model.mustache', 'utf8')
  return Mustache.render(template, {
    className: definition,
    properties: Object.keys(model.properties).map(snakeToCamel)
  })
}

function createApis (paths) {
  const apis = getApis(paths)
  for (let api in apis) {
    let source = getApiSource(api, apis[api])
    fs.writeFileSync(`src/Api/${api}Api.js`, source, 'utf8')
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

function createService (host, basePath) {
  const template = fs.readFileSync('templates/Service.mustache', 'utf8')
  const rendered = Mustache.render(template, {
    host, basePath
  })
  fs.writeFileSync('src/Api/Service.js', rendered, 'utf8')
}

function createApiIndex (paths, definitions) {
  const apis = getApis(paths)
  const source = getApiIndexSource(apis, definitions)
  fs.writeFileSync('src/index.js', source, 'utf8')
}

function getApiIndexSource (apis, definitions) {
  const template = fs.readFileSync('templates/Api_index.mustache', 'utf8')
  return Mustache.render(template, {
    apis: Object.keys(apis),
    models: Object.keys(definitions)
  })
}

function createPackageJson (service) {
  const template = fs.readFileSync('templates/package.mustache', 'utf8');
  const rendered = Mustache.render(template, {
    service
  })
  fs.writeFileSync('src/package.json', rendered, 'utf8')
}

function createDoc (service, swagger) {
  // Create README.md
  const apis = getApis(swagger.paths)
  const models = []

  for (let definition in swagger.definitions) {
    models.push({
      className: definition
    })
  }

  createReadme(service, swagger.info, apis, models)
  createApiDoc(service, apis)
}

function createReadme (service, infos, apis, models) {

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
  fs.writeFileSync('src/README.md', source, 'utf8')
}

function getReadmeSource (infos) {
  const template = fs.readFileSync('templates/README.mustache', 'utf8')
  return Mustache.render(template, infos)
}

function createApiDoc (service, apis) {
  for (let api in apis) {
    apis[api] = apis[api].map(api => {
      return {
        ...api,
        path: api.path.replace('$', ''),
      }
    })
    const source = getApiDocSource(service, `${api}Api`, apis[api])
    fs.writeFileSync(`src/doc/Api/${api}Api.md`, source, 'utf8')
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

function copyStaticFiles (files) {
  for (let source in files) {
    const dest = files[source]
    fs.copyFileSync(source, `src/${dest}`)
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
