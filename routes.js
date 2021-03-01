/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },

    'post /payments/charges': 'PaymentsController.charges',

    'get /webobjects/get': 'WebobjectsController.web-object-get',
    'get /delivery-returns': 'WebobjectsController.about',

    'get /home': 'WebobjectsController.home',
    'get /stock': 'WebobjectsController.stock-all',
    'get /stock/latest-arrivals': 'WebobjectsController.stock',
    'get /product/:item': 'WebobjectsController.product',
    'get /login': 'WebobjectsController.login',
    'get /stock/featured': 'WebobjectsController.featured',
    'get /stock/all/:category/:permalink': 'WebobjectsController.category-all',
    'get /archive/all/:category/:permalink': 'WebobjectsController.archive-category-all',
    'get /stock/:category/:permalink': 'WebobjectsController.category',
    'get /archive/:category/:permalink': 'WebobjectsController.archive-category',
    'get /makers-index': 'WebobjectsController.artists',
    'get /makers-index/:permalink': 'WebobjectsController.artist',
    'get /pages/:page': 'WebobjectsController.pages',
    'get /blog': 'WebobjectsController.blog',
    'get /blog/:blog_id': 'WebobjectsController.single-blog',
    'get /events': 'WebobjectsController.events',
    'get /event/:event_id': 'WebobjectsController.single-event',
    'get /press': 'WebobjectsController.press',
    'get /product-compare': 'WebobjectsController.compare',
    'get /registration': 'WebobjectsController.register',

    'post /files/file-upload': 'FilesController.file-upload',
    'post /files/file-delete': 'FilesController.file-delete',
    'post /files/images-add': 'FilesController.images-add',
    'post /files/images-delete': 'FilesController.images-delete',


    'get /stocks/get': 'StocksController.get',
    'get /stocks/get-by-featured-item': 'StocksController.get-by-featured-item',
    'post /stocks/get-by-list': 'StocksController.get-by-list',

    'get /artists/get': 'ArtistsController.get',

    'post /contacts/add': 'ContactsController.add',
    'post /contacts/login': 'ContactsController.login',
    'post /contacts/logout': 'ContactsController.logout',
    'post /contacts/shopping-cart-add': 'ContactsController.shopping-cart-item-add',
    'post /contacts/shopping-cart-items-get': 'ContactsController.shopping-cart-items-get',
    'post /contacts/event-get-by-id': 'ContactsController.event-get-by-id',
    'post /contacts/blog-get-by-id': 'ContactsController.blog-get-by-id',

    'get /categories/get': 'CategoriesController.get',



/***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
