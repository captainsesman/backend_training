const http = require("http");

let person = {
  firstName: "sesugh",
  lastName: "Abenga",
};
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader();
  res.setHeader();
  res.statusCode(200).end("Welcome to mpaye");

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(person));
});

server.listen(3000, () => {
  console.log("App running on http//localhost:3000");
});
