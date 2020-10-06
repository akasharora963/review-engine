'use strict';

var routes = require('next-routes')();

routes.add('/', '/') //index route
.add('/users/register', '/users/register') // register route
.add('/users/show', '/users/show') //users home page
.add('/users/voter-details', '/users/voter-details').add('/products/', '/products/') // products home page
.add('/products/show', '/products/show') //show products route
.add('/products/voter-details', '/products/user-details'); //voter details route

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNPLEFBRFAsSUFDVyxBQURYLEtBQ2UsQUFEZixLQUNvQixBQURwQjtDQUVPLEFBRlAsSUFFVyxBQUZYLG1CQUU2QixBQUY3QixtQkFFZ0QsQUFGaEQ7Q0FHTyxBQUhQLElBR1csQUFIWCxlQUd5QixBQUh6QixlQUd3QyxBQUh4QztDQUlPLEFBSlAsSUFJVyxBQUpYLHdCQUlrQyxBQUpsQyx3QkFLTyxBQUxQLElBS1csQUFMWCxjQUt3QixBQUx4QixjQUtzQyxBQUx0QztDQU1PLEFBTlAsSUFNVyxBQU5YLGtCQU00QixBQU41QixrQkFNOEMsQUFOOUM7Q0FPTyxBQVBQLElBT1csQUFQWCwyQkFPcUMsQUFQckMsQSwyQkFPZ0U7O0FBRWhFLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWthc2gvRGVza3RvcC9ibG9ja2NoYWluLWludGVybi9CbG9ja2NoYWluLVJldmlldy1FbmdpbmUifQ==