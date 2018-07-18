'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

//V0 of BrewLog API
Route.group(() => {
  //Authentication
  Route.post('auth/register', 'UserController.register')
  Route.post('auth/login', 'UserController.login')

  //Posts
  Route.resource('posts', 'PostController')

  //Test path
  Route.any('test', ({ request }) => {
  })
}).prefix('v0')
