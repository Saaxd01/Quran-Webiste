// Minimal routes module for the start manifest builder.
// Provide at least one route entry so Object.entries(...) has something to iterate.

export const routes = {
  index: {
    id: "index",
    path: "/",
    // meta can be empty; the manifest builder only needs a plain object structure
    meta: {},
  },
};

export default routes;
