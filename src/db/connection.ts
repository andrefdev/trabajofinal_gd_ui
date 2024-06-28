import sql from "mssql";

// connection configs
const config = {
  user: "test",
  password: "1000",
  server: "localhost", // Usa 'localhost' o la dirección IP del servidor
  database: "test",
  port: 1433,
  options: {
    instanceName: "SQLEXPRESS", // Corrige 'instancename' a 'instanceName'
    trustedConnection: true, // Corrige 'trustedconnection' a 'trustedConnection'
    trustServerCertificate: true,
  },
};

export default async function executeQuery(query, options = {}) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
