const { richie } = require("@cresteem/richie-js");
const { mkdirSync } = require("fs");
const { join, dirname } = require("path");

const testSets = {
  article: "pages/article.html",
  breadcrumb: "pages/breadcrumb/sub-breadcrumb/notindex.html",
  recipe: "pages/carousels/recipies.html",
  movie: "pages/carousels/movies.html",
  restaurant: "pages/carousels/restaurants.html",
  course: "pages/carousels/courses.html",
  event: "pages/events.html",
  faq: "pages/faq.html",
  video: "pages/videos.html",
  localbusiness: "pages/localbusiness.html",
  organization: "pages/org.html",
  product: "pages/productVarient/productColor.html",
  productwv: "pages/productVarient/productCombined.html",
  profile: "pages/profilepage.html",
  searchbox: "pages/Sitesearch/searchpage.html",
  software: "pages/softwareapp.html",
};

const testSets2 = {
  crecipe: "pages/carousels/recipies.html",
  cmovie: "pages/carousels/movies.html",
  crestaurant: "pages/carousels/restaurants.html",
  ccourse: "pages/carousels/courses.html",
};

async function testAll() {
  for (const richieType of Object.keys(testSets2)) {
    const source = testSets2[richieType];
    const destination = join("newtest", source);
    console.log(source, destination);
    //making dest folder
    mkdirSync(dirname(destination), { recursive: true });
    try {
      await richie(richieType, source, destination);
    } catch (err) {
      console.log(err);
      console.log(richieType);
      process.exit(1);
    }
  }
}

testAll();
