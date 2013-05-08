exports.routes = [
  {
      url: '/{controller}/{action}/{id}/',
      data: {}
  },
  {
      url: '/{controller}/{action}/',
      data: {}
  },
  {
      url: '/{controller}/',
      data: {
        action: 'index'
      }
  },
  {
      url: '/',
      data: {
        controller: 'Bootstrap',
        action: 'index'
      }
  }
];
exports.statics = [
  '/Content'
];
