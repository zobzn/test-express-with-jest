const request = require("supertest");

describe("app", function() {
  let server;

  beforeEach(() => {
    server = require("../server");
  });

  afterEach(() => {
    server.close && server.close();
  });

  it("should respond with status code 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello");
  });
});
