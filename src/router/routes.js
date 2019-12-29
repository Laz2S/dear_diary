
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        name: 'Home',
        meta: {
          title: 'Home',
          icon: 'home',
          caption: 'Página Inicial'
        },
        path: 'Home',
        component: () => import('pages/Index.vue')
      },
      {
        name: 'Bookmark',
        meta: {
          title: 'Bookmarks',
          icon: 'bookmarks',
          caption: 'Favoritas'
        },
        path: 'Bookmarks',
        component: () => import('pages/Bookmark/List.vue')
      },
      {
        name: 'Book',
        meta: {
          title: 'Books',
          icon: 'book',
          caption: 'Livro'
        },
        path: 'Book',
        component: () => import('layouts/BookLayout.vue'),
        children: [
          {
            name: 'BookList',
            meta: {
              title: 'List',
              icon: 'library_books',
              caption: 'Lista'
            },
            path: 'List',
            component: () => import('pages/Book/List.vue')
          },
          {
            name: 'BookForm',
            meta: {
              title: 'Form',
              icon: 'library_add',
              caption: 'Formulario'
            },
            path: 'Form',
            component: () => import('pages/Book/Form.vue')
          }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
