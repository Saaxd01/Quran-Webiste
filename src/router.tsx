// Minimal getRouter export expected by start-client-core.
// This returns a simple object with a routes property that the start plugin can read.

export function getRouter() {
  return {
    routes: {
      index: {
        id: "index",
        path: "/",
      },
    },
  };
}

export default getRouter;
