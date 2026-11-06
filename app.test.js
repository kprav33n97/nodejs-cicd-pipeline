const request = require("supertest");
const app = require("./app");

describe("DevOps Practice App", () => {
    test("Health endpoint returns healthy", async () => {
        const response = await request(app).get("/health");

        expect(response.status).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

    test("Root endpoint returns application name", async () => {
        const response = await request(app).get("/");

        expect(response.status).toBe(200);
        expect(response.body.app).toBe("DevOps Practice App");
    });
});