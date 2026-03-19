import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "Yu-14052547",
  port: 5432,
});

export default pool;
