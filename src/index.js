const dotenv = require("dotenv");
const path = require("path");
const app = require("./app");
const { connectDB } = require("./db");
dotenv.config({ path: path.join(__dirname, "..", ".env") });

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
