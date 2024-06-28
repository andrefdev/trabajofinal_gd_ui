// Extintor controller
import executeQuery from "../connection";

export async function getExtintores() {
  const query = "SELECT * FROM extintor";
  return await executeQuery(query);
}
