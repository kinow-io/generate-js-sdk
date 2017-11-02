const {UserApi, User} = require('./src')

main()

async function main () {

  try {
    let userApi = new UserApi()
    let users = await userApi.getUsers()
    console.log(users)
  } catch (e) {
    console.log(e)
  }

  /*
  let userApi = new UserApi()



  try {
    let user = await userApi.getUser('d20def20-835c-11e7-b02b-11144545dd95')
  } catch (e) {
    console.log(e)
  }

  try {
    let createUser = new User()
    createUser.meta = {firstname: 'Vincent', lastname: 'vincent'}
    createUser.password = 'Hello'
    createUser.email = 'vincent+blabla@kinow.com'
    createUser.status = 'ACTIVE'
    let user = await userApi.createUser(createUser)
  } catch (e) {
    console.log(e)
  }

  try {
    let createUser = new User()
    createUser.status = 'PENDING'
    createUser.meta = {firstname: 'VincentA', lastname: 'Avincent'}
    let user = await userApi.updateUser('11433fd0-a9e7-11e7-b66e-1f895f63316a', createUser)
    console.log(user)
  } catch (e) {
    console.log(e)
  }

  try {
    let user = await userApi.deleteUser('11433fd0-a9e7-11e7-b66e-1f895f63316a')
    console.log(user)
  } catch (e) {
    console.log(e)
  }
  */
}
