const { convertCsv } = require("./csv.parse");
const fs = require("fs");
const { promisify } = require("util");

module.exports.read = () => {
  const readFile = promisify(fs.readFile);

  /*
readFile("./data/pulitzer-circulation-data.csv", "utf-8")
  .then((data) => console.table(convertCsv(data)))
  .catch((err) => console.log(`File error: ${err}`));
*/

  const read = async () => {
    const data = await readFile(
      "./data/pulitzer-circulation-data.csv",
      "utf-8"
    );
    console.table(convertCsv(data));
  };
  read();
};
