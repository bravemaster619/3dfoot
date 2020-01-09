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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// legacy subscription flow
Route.post('email', 'EmailController.store');
// Contacts
Route.post('contacts', 'ContactController.store');
// Answer
Route.post('answer', 'AnswerController.newAnswer');
// for future auth flow using AuthController
Route.post('signin', 'AuthController.login');
Route.post('signup', 'AuthController.signup');
// for admin routes
Route.group(() => {
  // Binds '/users' to 'App/Controllers/Http/Admin/UserController'
  Route.get('/users/export', 'UserController.export2Excel')
}).prefix('admin')
  .namespace('Admin')
