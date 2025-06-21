import { describe, it, expect, vi } from "vitest";
import { statusService } from "../../src/services/services";
import prisma from "../../src/prismaClient/Prisma";

vi.mock("../../src/prismaClient/Prisma", () => ({
  default: {
    stc_status: {
      findMany: vi.fn(),
    },
  },
}));

describe("getStatusListService", () => {
  it("should return statuses from database", async () => {
    const mockData = [{ id: 1, name: "Active" }];
    (prisma.stc_status.findMany as any).mockResolvedValue(mockData);

    const result = await statusService.getStatusListService();
    expect(result).toEqual(mockData);
  });

  it("should throw 404 error if no statuses found", async () => {
    (prisma.stc_status.findMany as any).mockResolvedValue([]);

    await expect(statusService.getStatusListService()).rejects.toHaveProperty(
      "statusCode",
      404
    );
  });
});
