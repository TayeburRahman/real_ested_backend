
import { Types } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';

export interface IServiceCategory {
  name: string;
}

export interface ICommentData {
  taskId: string;
  fileId?: string | null;
  replayId?: string | null;
  isRevision?: boolean | null;
  comment: {
    text: string;
    userId: Types.ObjectId;
    // userType: 'Member' | 'Client';
  };
}


export interface ITodoList extends Document {
  member: Types.ObjectId[];
  description: string;
  task: Types.ObjectId;
  dueDate: Date;
  status: string | null;
  createdAt: Date;
  updatedAt: Date;
}
