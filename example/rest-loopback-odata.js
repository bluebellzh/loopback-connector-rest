var loopback = require("loopback");

var username = 'haizhang';
var password = '';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var ds = loopback.createDataSource({
  connector: require("../index"),
  debug: false,
  operations: [
    {
      template: {
        'url': 'http://sapngd.rim.net:8000/sap/opu/odata/sap/ZSV_GET_SUBMIT_LEAVE_REQUEST/',
        "method": "GET",
        "headers": {
          'Content-Type': 'application/json;odata=verbose',
          'accept': 'application/json',
          'Authorization': auth
        }
      },
      functions: {
        "query": []
      }
    }
  ]});

var model = ds.createModel('dummy');

model.query(function (err, result) {
  if (result && result[0]) {
    console.log(result);
  } else {
    console.log("err:" + err);
  }
});
