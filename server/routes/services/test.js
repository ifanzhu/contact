
var Test = {
  init: function(app){
   console.log("init test service begin");
    app.get('/test/test', this.doTest);
    app.get('/test/show', this.doShow);
     console.log("init test service end");
  },

  doTest: function(req, res){
  console.log("doTest");
    res.send({
      status: 1,
      info: '测试服务doTest'
    });
  },

  doShow: function(req, res){
  console.log("doShow");
    res.json({
      status: 1,
      info: '测试服务doShow'
    });
  }
};

module.exports = Test;