import Server from "https://deno.land/x/drash/src/http/server.ts";
import Resource from "https://deno.land/x/drash/src/http/resource.ts";

class HomeResource extends Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello!";
    return this.response;
  }
}

const server = new Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [HomeResource]
});

server.run();
