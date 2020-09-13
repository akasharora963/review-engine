const routes = require('next-routes')();

routes
      .add('/','/') //index route
      .add('/users/register','/users/register') // register route
      .add('/users/show','/users/show') //users home page
      .add('/users/voter-details','/users/voter-details')
      .add('/products/','/products/') // products home page
      .add('/products/show','/products/show') //show products route
      .add('/products/voter-details','/products/user-details'); //voter details route

module.exports = routes;
