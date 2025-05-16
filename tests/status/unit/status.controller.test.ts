// tests/status.controller.test.ts

// Testing utilities and setup
import { describe, it, expect, vi, beforeEach } from "vitest";

// Module under test
import { statusController } from "../../../src/controllers/index.controller.js";

// Dependencies used by the module under test
import { Request, Response, NextFunction } from "express";
import { statusService } from "../../../src/service/index.service.js";
import { stc_status } from "../../../generated/client.js";

vi.mock("../../../src/service/index.service.js", () => ({
  statusService: {
    getStatusList: vi.fn(),
  },
}));

const mockStatuses: stc_status[] = [
  {
    app_status: "Pending",
    created_date: new Date("2024-01-01T10:00:00Z"),
    updated_date: new Date("2024-01-02T12:00:00Z"),
    update_reason: "Initial status",
  },
];

describe("statusController.getStatusList", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    next = vi.fn();
    vi.clearAllMocks();
  });

  it("should return 200 and status list", async () => {
    (statusService.getStatusList as any).mockResolvedValue(mockStatuses);

    await statusController.getStatusList(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockStatuses);
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next with error if service fails", async () => {
    const error = new Error("DB error");
    (statusService.getStatusList as any).mockRejectedValue(error);

    await statusController.getStatusList(req as Request, res as Response, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
