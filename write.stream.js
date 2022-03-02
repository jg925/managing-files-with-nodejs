const { createReadStream, createWriteStream } = require("fs");

const stream = createReadStream("./data/app.log", {
  highWaterMark: 95,
  encoding: "utf-8",
});

const writer = createWriteStream("./data/output.log");

let iter = 0;
stream.on("data", (data) => {
  stream.pause();
  console.log(++iter);
  writer.write(data);
  setTimeout(() => {
    stream.resume();
  }, 1000);
});
