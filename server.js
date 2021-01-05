const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require ("path")

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
     
