export default [
  {
      method: 'DELETE',
      path: '/product',
      handler: (request, h) => {
          return 'delete one';
      }
  },
  {
      method: 'DELETE',
      path: '/products',
      handler: (request, h) => {
          return 'delete many';
      }
  }
]