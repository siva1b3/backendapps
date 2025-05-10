import request from "supertest";
import app from "../src/app";
import { PrismaClient } from "../generated";

const prisma = new PrismaClient();

beforeEach(async () => {
  await prisma.a0_task.findMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Task API", () => {
  it("should create a task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test task", description: "test desc" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});
