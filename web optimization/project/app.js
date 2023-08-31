function perf(type, name, data) {
    //TODO: send the data to the server
    console.log(`%c${type}: %c${name} | %c${data?Math.round(data)+'ms':''}`, "color: red",
                "color: green", "color: gray");
}

window.addEventListener("load", () => {
  const navEntries = performance.getEntriesByType("navigation");
  //a new version
  navEntries.forEach((entry) => {
    perf("navigation", "fetch-start", entry.fetchStart);
    const firstbite = entry.responseStart - entry.fetchStart;
    perf("navigation", "firstbite", firstbite);
  });
  //an old version
  if (navEntries.length == 0) {
    // old version
    perf("navigation", "fetch-start", performance.timing.fetchStart);
    const firstbite =
      performance.timing.responseStart - performance.timing.fetchStart;
    perf("navigation", "firstbite", firstbite);
  }
  // Resource Timing API
  const resEntries = performance.getEntriesByType("resource");
  resEntries.forEach((entry) => {
    const size = `${Math.round(entry.encodedBodySize / 1024)}Kb`;
    const ttfb = entry.responseStart - entry.fetchStart;
    perf(entry.initiatorType, entry.name, ttfb, size);
  });
});