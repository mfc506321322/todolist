const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages/ToDoList/ToDoList' }
    ]
  }
];
export default routes;
