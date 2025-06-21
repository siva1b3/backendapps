import { describe, it, expect, vi } from "vitest";
import { Request, Response, NextFunction } from "express";
import { statusController } from "../../src/controllers/controller";
import { statusService } from "../../src/services/services";

vi.mock("../../src/services/services");

describe("getStstusListController", () => {
  it("should return 200 and status list", async () => {
    const mockStatuses = [{ id: 1, name: "Active" }];
    (statusService.getStatusListService as any).mockResolvedValue(mockStatuses);

    const req = {} as Request;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
    const next = vi.fn() as NextFunction;

    await statusController.getStstusListController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockStatuses);
    expect(next).not.toHaveBeenCalled();
  });
});
