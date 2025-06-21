import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { statusService } from "../../src/services/services";
import prisma from "../../src/prismaClient/Prisma";

// Mock the Prisma client module
vi.mock("../../src/prismaClient/Prisma", () => {
  return {
    default: {
      stc_status: {
        findMany: vi.fn(),
        findUnique: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
      },
    },
  };
});

const mockedFindMany = prisma.stc_status.findMany as ReturnType<typeof vi.fn>;
const mockedFindUnique = prisma.stc_status.findUnique as ReturnType<
  typeof vi.fn
>;
const mockedCreate = prisma.stc_status.create as ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("getStatusListService", () => {
  it("should return statuses if found", async () => {
    const mockStatuses = [
      {
        app_status: "active",
        created_date: new Date(),
        updated_date: null,
        update_reason: null,
      },
      {
        app_status: "inactive",
        created_date: new Date(),
        updated_date: null,
        update_reason: null,
      },
    ];

    mockedFindMany.mockResolvedValue(mockStatuses);

    const result = await statusService.getStatusListService();
    expect(result).toEqual(mockStatuses);
    expect(mockedFindMany).toHaveBeenCalledTimes(1);
  });

  it("should throw 404 error if no statuses found", async () => {
    mockedFindMany.mockResolvedValue([]);

    await expect(statusService.getStatusListService()).rejects.toMatchObject({
      message: "No statuses found",
      statusCode: 404,
    });

    expect(mockedFindMany).toHaveBeenCalledTimes(1);
  });

  it("should throw 500 error on unexpected failure", async () => {
    mockedFindMany.mockRejectedValue(new Error("DB error"));

    await expect(statusService.getStatusListService()).rejects.toMatchObject({
      message: "Failed to fetch status list",
      statusCode: 500,
    });

    expect(mockedFindMany).toHaveBeenCalledTimes(1);
  });
});

describe("createStatusService", () => {
  const mockData = {
    app_status: "active",
    created_date: new Date("2025-06-21T10:00:00Z"),
    updated_date: null,
    update_reason: null,
  };

  it("should create new status if it doesn't exist", async () => {
    mockedFindUnique.mockResolvedValue(null);
    mockedCreate.mockResolvedValue({ ...mockData });

    const result = await statusService.createStatusService(mockData);
    expect(result).toEqual(mockData);

    expect(mockedFindUnique).toHaveBeenCalledWith({
      where: { app_status: mockData.app_status },
    });
    expect(mockedCreate).toHaveBeenCalledWith({ data: mockData });
  });

  it("should throw 400 error if status already exists", async () => {
    mockedFindUnique.mockResolvedValue({ ...mockData });

    await expect(
      statusService.createStatusService(mockData)
    ).rejects.toMatchObject({
      message: "Status already exists",
      statusCode: 400,
    });

    expect(mockedFindUnique).toHaveBeenCalledTimes(1);
    expect(mockedCreate).not.toHaveBeenCalled();
  });

  it("should throw 500 error on unexpected error", async () => {
    mockedFindUnique.mockRejectedValue(new Error("Unexpected DB error"));

    await expect(
      statusService.createStatusService(mockData)
    ).rejects.toMatchObject({
      message: "Failed to create status",
      statusCode: 500,
    });

    expect(mockedFindUnique).toHaveBeenCalledTimes(1);
  });
});
