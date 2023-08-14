export default function ({ route, app, store }) {
  if (route.path === "/") {
    if (!store.$auth.$state.loggedIn) {
      return app.router.push({
        path: "/login/",
      });
    }
    return app.router.push({
      path: "/",
    });
  }
}
