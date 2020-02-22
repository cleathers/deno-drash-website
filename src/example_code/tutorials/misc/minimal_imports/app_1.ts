import Server from "https://deno.land/x/drash/src/http/server.ts";

const server = new Server({
  address: "localhost:1447",
  response_output: "application/json",
});

server.run();
