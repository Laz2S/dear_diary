
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
            name: 'BookForm-new',
            meta: {
              title: 'New Book',
              icon: 'library_add',
              caption: 'Novo Livro'
            },
            path: 'Form',
            component: () => import('pages/Book/Form.vue')
          },
          {
            name: 'BookForm-edit',
            hidden: true,
            meta: {
              title: 'Edit Book',
              icon: 'library_add',
              caption: 'Editar Livro'
            },
            path: 'Form/:book',
            component: () => import('pages/Book/Form.vue')
          },
          {
            name: 'BookPage-new',
            hidden: true,
            meta: {
              title: 'New Page',
              icon: 'library_add',
              caption: 'Nova Página'
            },
            path: 'Form/:book/Page',
            component: () => import('pages/Book/Page/Form.vue')
          },
          {
            name: 'BookPage-edit',
            hidden: true,
            meta: {
              title: 'Edit Page',
              icon: 'library_add',
              caption: 'Editar Página'
            },
            path: 'Form/:book/Page',
            component: () => import('pages/Book/Page/Form.vue')
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
