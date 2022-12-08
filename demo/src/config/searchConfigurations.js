//default config for the unbxdWrapper class
const searchConfigurations = {
  searchEndPoint: "https://search.unbxd.io/",
  // searchEndPoint: "https://wingman-argocd.unbxd.io/",
  searchQueryParam: "q",
  browseQueryParam: "p",
  // defaultFilters: {},
  // pageSize: 10,
  facetMultiSelect: true,
  updateUrls: true,
  extraParams: {
    version: "V2",
  },
  facetMultilevel: true,
  facetDepth: 6,
  applyMultipleFilters: false,
  hashMode: true,
  enableUnbxdAnalytics: true,
  allowExternalUrlParams: true,
  defaultFilters: null,
  pageSize: 30,
  allowExternalUrlParams: true,
};

export default searchConfigurations;
