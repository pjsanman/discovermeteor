Package.describe({
  summary: "Google Analytics"
});

Package.on_use(function (api) {
  api.add_files('google_analytics.js', 'client');
});
