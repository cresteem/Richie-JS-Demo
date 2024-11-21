/** @type {import("@cresteem/richie-js").rjsOptions} */
const config = {
  domainAddress: "cresteem.com",
  preference: {
    isCarousals: {
      movie: false,
      course: false,
      recipe: true,
      restaurant: true,
    },
    isProductVar: false,
    breadcrumb: false,
    siteSearchBoxFieldName: "query",
  },
};

exports.default = config;
