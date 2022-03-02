const { constants, writeFile } = require("fs");

/*writeFile(
  "./data/app.log",
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  { flag: "wx" }, //exclusive flag
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  }
);*/

/*writeFile(
  "./data/newapp.log",
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  { mode: 0o600 }, //can use fs constants or octal values
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  }
);*/
writeFile(
  "./data/newapp.log",
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  { encoding: "base64" }, //exclusive flag
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  }
);
