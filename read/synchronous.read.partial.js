const fs = require("fs");

module.exports.read = () => {
  const fd = fs.openSync("./data/app.log");

  let count = 0;

  do {
    const buffer = Buffer.alloc(200);

    count = fs.readSync(fd, buffer, 0, buffer.length, null); // null allows the function to keep track of last read location

    console.log(buffer.toString());
  } while (count > 0);
};
