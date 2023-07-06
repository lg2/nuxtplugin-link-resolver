import linkResolverJSON from "./../../../assets/jsons/link-resolver.json";
const linkResolver = (data) => {
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
export default ({ app }, inject) => {
  inject("lr", linkResolver);
};
