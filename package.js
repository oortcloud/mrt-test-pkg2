Package.describe({
  summary: "mrt test package 2"
});

Package.on_use(function (api) {
  api.add_files('server.js', 'server');
});
