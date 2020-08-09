const routes = require('next-routes')();

routes
      .add('/','/') //index route
      .add('/users/register','/users/register')
      .add('/products/','/products/')
      .add('/products/show','/products/show') //show products route
      .add('/products/voter-details','/products/user-details'); //voter details route

module.exports = routes;
