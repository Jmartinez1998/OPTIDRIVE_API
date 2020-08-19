'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  //Route register
  Route.post('users/register','UserController.register')
  //Route Login
  Route.post('login','UserController.login')
  //Route logout
  Route.post('/logout', 'UserController.logout')
}).prefix('api');

// Routes Dashboard
Route.group(() => {
  /** ROUTES BY USERS */
  //Show all users
  Route.get('showUs', 'UserController.show')
  //Delete user
  Route.delete('users/delete/:id','UserController.destroy')

  /** ROUTES BY ROLES */
  //Show all roles
  Route.get('roles','UserToleController.show')
  //Route crated new role
  Route.post('addrole','UserRoleController.store')

  /** ROUTES BY OPTICS */
  // Show all optics
  Route.get('viewOptic/:id','OpticController.show')
  // New optic
  Route.post('new-optic','OpticController.CreateOptic')
  // Show optic
  Route.get('viewOptic/:id','OpticController.show')

  // ROUTE BY PRODUCTS
  Route.post('new-product','ProductController.New')
  //Show all products
  Route.get('view_products','ProductController.showall')
  //Show one product
  Route.get('product/:id','ProductController.show')
})./*middleware(['auth:jwt', 'cors']).*/prefix('api')