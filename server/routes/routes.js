
var fs = require("fs");

module.exports = function(app){
  var FS_PATH_SERVICES = './routes/services/';
  var REQUIRE_PATH_SERVICES = './services/';


  fs.readdir(FS_PATH_SERVICES, function(err, list){
  console.log("init services....");
    if(err){
      throw '没有找到该文件夹，请检查......'
    }
    for (var e; list.length && (e = list.shift());){
      var service = require(REQUIRE_PATH_SERVICES + e);
      service.init && service.init(app);
    }
  });
};