const linkResolverJSON = require("./../../../assets/jsons/link-resolver.json")
const linkResolver = function(data)  {
  let route = { ...linkResolverJSON[data.__typename] };
  if (route) {
    return route;
  } else {
    console.warn(
      "no route for : ",
      data,
      "in route",
      process.client && window.location.href
    );
    return {};
  }
};

module.exports = linkResolver
