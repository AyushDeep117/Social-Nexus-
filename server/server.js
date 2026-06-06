const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");

const server = require("./socket");

const port = process.env.PORT;

const DB = process.env.DATABASE_STRING;
try {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: true
    })
    .then(() => console.log("DB connection successful!"));
} catch (error) {
  console.log("DATABASE CONNECTION FAILED:", error);
}

// Socket connection



// server.use(cors(corsOptions))
server.listen(port, () => {
  console.log(`Server listening on port : ${port}`);
});
