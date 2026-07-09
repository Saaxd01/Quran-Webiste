// Minimal getRouter export expected by start-client-core.
// Return a router-like object with routes that include children.

export function getRouter() {
  return {
    routes: {
      index: {
        id: "index",
        path: "/",
        children: {},
      },
    },
  };
}

export default getRouter;
