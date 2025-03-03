import express from 'express';
import uploadC from '../../middlewares/cloudinaryUpload';
import { MemberController } from './member.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { uploadFile } from '../../middlewares/fileUploader';

const router = express.Router();


router.get("/get-all-member", MemberController.getAllMembersWithOutPagination);
router.get("/get-team-member", MemberController.getAllMembers);

// Media===========================
router.post(
    '/create-adds',
    auth(ENUM_USER_ROLE.MEMBER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    uploadFile(),
    MemberController.createMediaUpload,
);
router.get('/get-adds', MemberController.getAdds);
router.patch(
    '/edit-adds/:id',
    auth(ENUM_USER_ROLE.MEMBER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    uploadFile(),
    MemberController.updateAdds,
);
router.delete(
    '/delete-adds/:id',
    auth(ENUM_USER_ROLE.MEMBER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    MemberController.deleteAdds,
);

// router.patch("/get-all", ClientController.getAllTasks);




export const MemberRoutes = router;
