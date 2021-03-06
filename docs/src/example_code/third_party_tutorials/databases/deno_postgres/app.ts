import Drash from "https://deno.land/x/drash/mod.ts";

// Set up the server

import HomeResource from "./home_resource.ts";

const server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [HomeResource]
});

server.run();

// Set up the database

import { Client } from "https://deno.land/x/postgres/mod.ts";

const denoPostgres = new Client({
  database: "deno_postgres",
  host: "localhost",
  port: "5432",
  user: "user", // specify your db user
});

export {
  denoPostgres
}
