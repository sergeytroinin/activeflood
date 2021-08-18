const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("It's alive"));

app.listen(8080, () => {
  console.log(`Webhook URL: ${process.env.URL}${secretPath}`);
  console.log("Example app listening on port 8080!");
});
