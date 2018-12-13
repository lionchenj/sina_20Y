var config = {};

config.welcome = {
  "timeout": 3000,
  get version () {return app.storage.read("version")},
  set version (val) {app.storage.write("version", val)},
  "url": "http://mybrowseraddon.com/instagram-app.html"
};

config.UI = {
  set size (o) {if (o) app.storage.write("size", o)},
  get size () {
    var _size = app.storage.read("size");
    if (_size) return _size;
    else {
      var tmp = {"width": 900, "height": 650};
      config.UI.size = tmp;
      return tmp;
    }
  }
};