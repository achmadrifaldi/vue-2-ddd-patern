export default [
  {
    path: '/todo',
    name: 'Todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todos" */ '../ui/TodoUI.vue'),
  },
];
