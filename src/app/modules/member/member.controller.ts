import catchAsync from "../../../shared/catchasync";
import sendResponse from "../../../shared/sendResponse";
import { IReqUser } from "../auth/auth.interface";
import { Request, RequestHandler, Response } from 'express';
import { MemberService } from "./member.service";
import { RequestData } from "../../../interfaces/common";
import { GetAllGetQuery } from "../service/service.interface";
import { IAdds } from "./member.interface";

const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.updateMyProfile(req as any);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.updateProfile(req as any);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});


const myProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as IReqUser;
  const result = await MemberService.myProfile(user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

const getAllMembersWithOutPagination = catchAsync(async (req: Request, res: Response) => {
  const query = req.query as GetAllGetQuery;
  const result = await MemberService.getAllMembersWithOutPagination(query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const query = req.query as GetAllGetQuery;
  const user = req.user as IReqUser;
  const result = await MemberService.getAllMembers(user, query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get successfully",
    data: result,
  });
});
// =================================
const createMediaUpload = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMediaUpload(req.files, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Adds create successfully',
    data: result,
  });
});

const updateAdds = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.updateAdds(req);
  sendResponse<IAdds>(res, {
    statusCode: 200,
    success: true,
    message: 'Adds update successfully',
    data: result,
  });
});

const deleteAdds = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.deleteAdds(req.params.id);
  sendResponse<IAdds>(res, {
    statusCode: 200,
    success: true,
    message: 'Adds delete successfully',
    data: result,
  });
});

const getAdds = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.findOneImage();
  sendResponse<IAdds>(res, {
    statusCode: 200,
    success: true,
    message: 'Get Adds Successfully',
    data: result,
  });
});



export const MemberController = {
  myProfile,
  updateProfile,
  getAllMembersWithOutPagination,
  getAllMembers,
  updateMyProfile,
  createMediaUpload,
  updateAdds,
  deleteAdds,
  getAdds
};
