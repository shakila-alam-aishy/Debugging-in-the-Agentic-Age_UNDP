// Tiny local server for the lab. No dependencies. Run: node server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILES = {
  "/": ["index.html", "text/html"],
  "/index.html": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/donation.js": ["donation.js", "text/javascript"],
  "/app.js": ["app.js", "text/javascript"],
};

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && FILES[req.url]) {
    const [file, type] = FILES[req.url];
    res.writeHead(200, { "Content-Type": type });
    res.end(fs.readFileSync(path.join(__dirname, file)));
    return;
  }

  if (req.method === "POST" && req.url === "/api/charge") {
    let raw = "";
    req.on("data", (chunk) => (raw += chunk));
    req.on("end", () => {
      let body;
      try {
        body = JSON.parse(raw);
      } catch (e) {
        return sendJson(res, 400, { error: "Invalid JSON" });
      }
      const amount = Number(body.amount);
      if (!Number.isFinite(amount) || amount <= 0 || amount > 10000) {
        console.log("Rejected charge: invalid amount", body.amount);
        return sendJson(res, 400, { error: "Invalid amount" });
      }
      console.log("Charged", amount, "for", body.name);
      sendJson(res, 200, { ok: true, id: "ch_" + Date.now(), charged: amount });
    });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

if (require.main === module) {
  server.listen(PORT, () => console.log("Donation page: http://localhost:" + PORT));
}
module.exports = server;
