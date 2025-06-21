import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Request, Response, NextFunction } from "express";
import { statusService } from "../../src/services/services";
import { statusController } from "../../src/controllers/controller";
import { customError } from "../../src/errors/errors";

vi.mock("../../src/services/services");

describe("getStstusListController", () => {
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
    next = vi.fn();
  });

  it("should return 200 and status list", async () => {
    const mockStatuses = [{ id: 1, name: "Active" }];
    (statusService.getStatusListService as any).mockResolvedValue(mockStatuses);

    await statusController.getStstusListController(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockStatuses);
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next with error if service throws", async () => {
    const error = customError("Service failed", 500);
    (statusService.getStatusListService as any).mockRejectedValue(error);

    await statusController.getStstusListController(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
  });
});

describe("createStatusController", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {} as Request;
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;
    next = vi.fn();
  });

  it("should call statusService.createStatusService and return 201 with result", async () => {
    const mockData = { name: "active" };
    const mockResult = { id: 1, name: "active" };

    req.body = mockData;
    (statusService.createStatusService as any).mockResolvedValue(mockResult);

    await statusController.createStatusController(
      req as Request,
      res as Response,
      next
    );

    expect(statusService.createStatusService).toHaveBeenCalledWith(mockData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockResult);
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next with an error from statusService.createStatusService", async () => {
    const mockData = { name: "inactive" };
    const mockError = new Error("DB error");

    req.body = mockData;
    (statusService.createStatusService as any).mockRejectedValue(mockError);

    await statusController.createStatusController(
      req as Request,
      res as Response,
      next
    );

    expect(statusService.createStatusService).toHaveBeenCalledWith(mockData);
    expect(next).toHaveBeenCalledWith(mockError);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it("should call next with custom error if req.body is undefined", async () => {
    req.body = undefined;

    await statusController.createStatusController(
      req as Request,
      res as Response,
      next
    );

    expect(next).toHaveBeenCalledWith(
      customError("Request body is required", 400)
    );
    expect(statusService.createStatusService).not.toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
