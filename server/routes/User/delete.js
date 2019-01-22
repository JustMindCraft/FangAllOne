export default [
    {
        method: 'DELETE',
        path: '/user',
        handler: (request, h) => {
            return 'delete one';
        }
    },
    {
        method: 'DELETE',
        path: '/users',
        handler: (request, h) => {
            return 'delete many';
        }
    }
]