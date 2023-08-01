import mysql from "mysql2";
import config from "../config";

//connect to database
const connection = mysql.createPool(config.mysql);

export default connection;