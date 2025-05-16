// tests/status.service.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { statusService } from "../../../src/service/index.service.js";
import prisma from "../../../src/PrismaComponet/Prisma.js";
import { stc_status } from "../../../generated/client.js";

vi.mock("../../../src/PrismaComponet/Prisma.js", () => ({
  default: {
    stc_status: {
      findMany: vi.fn(),
    },
  },
}));

const mockStatuses: stc_status[] = [
  {
    app_status: "Pending",
    created_date: new Date("2024-01-01T10:00:00Z"),
    updated_date: new Date("2024-01-02T12:00:00Z"),
    update_reason: "Initial status",
  },
  {
    app_status: "In Progress",
    created_date: new Date("2024-01-03T09:30:00Z"),
    updated_date: null,
    update_reason: null,
  },
  {
    app_status: "Completed",
    created_date: new Date("2024-01-05T08:15:00Z"),
    updated_date: new Date("2024-01-06T14:45:00Z"),
    update_reason: "All tasks done",
  },
  {
    app_status: "Failed",
    created_date: new Date("2024-01-07T07:00:00Z"),
    updated_date: null,
    update_reason: "Error during execution",
  },
  {
    app_status: "Cancelled",
    created_date: new Date("2024-01-08T11:20:00Z"),
    updated_date: new Date("2024-01-08T15:00:00Z"),
    update_reason: "User requested",
  },
];

describe("statusService.getStatusList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return a list of statuses", async () => {
    (prisma.stc_status.findMany as any).mockResolvedValue(mockStatuses);

    const result = await statusService.getStatusList();
    expect(result).toEqual(mockStatuses);
    expect(prisma.stc_status.findMany).toHaveBeenCalledOnce();
  });

  it("should throw an error if no statuses are found", async () => {
    (prisma.stc_status.findMany as any).mockResolvedValue([]);

    await expect(statusService.getStatusList()).rejects.toThrow(
      "No status found"
    );
    expect(prisma.stc_status.findMany).toHaveBeenCalledOnce();
  });

  it("should throw a descriptive error on fetch failure", async () => {
    (prisma.stc_status.findMany as any).mockRejectedValue(
      new Error("DB error")
    );

    await expect(statusService.getStatusList()).rejects.toThrow(
      "Error fetching status list: DB error"
    );
    expect(prisma.stc_status.findMany).toHaveBeenCalledOnce();
  });

  it("should throw unknown error for non-Error rejections", async () => {
    (prisma.stc_status.findMany as any).mockRejectedValue("Something weird");

    await expect(statusService.getStatusList()).rejects.toThrow(
      "Unknown error fetching status list"
    );
    expect(prisma.stc_status.findMany).toHaveBeenCalledOnce();
  });

  it("should call findMany with no arguments", async () => {
    (prisma.stc_status.findMany as any).mockResolvedValue(mockStatuses);

    await statusService.getStatusList();
    expect(prisma.stc_status.findMany).toHaveBeenCalledWith();
  });
});
