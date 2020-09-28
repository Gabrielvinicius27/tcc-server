'use strict'

const Route = use("Route")

Route.post('/users', 'UserController.create')
Route.get('/users', 'UserController.index')
Route.post('/sessions', 'SessionController.create')
Route.post('/imageUpload','ImageController.create')
Route.resource('temperatura', 'TemperaturaController')
  .apiOnly()
  .middleware('auth')
Route.resource('sensor', 'SensorController')
  .apiOnly()
  .middleware('auth')
Route.resource('estoque', 'EstoqueController')
  .apiOnly()
  .middleware('auth')