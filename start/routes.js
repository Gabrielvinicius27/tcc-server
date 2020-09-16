'use strict'

const Route = use("Route")

Route.post('/users', 'UserController.create')
Route.get('/users', 'UserController.index')
Route.post('/sessions', 'SessionController.create')