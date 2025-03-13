const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ["src/domain/*.js"],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => console.log("📦 Database connected"))
  .catch((error) => console.error("❌ Database connection error:", error));

module.exports = { AppDataSource };
