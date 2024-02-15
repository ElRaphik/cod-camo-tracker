import { Schema, model } from 'mongoose'

export interface IUser {
  _id?: string;
  username: string;
  password: string;
  unlockedCamos: string[];
  completedWeapons: string[];
  completedCategories: string[];
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  unlockedCamos: [ { type: Schema.Types.ObjectId, ref: 'camos', default: [] } ],
  completedWeapons: [ { type: Schema.Types.ObjectId, ref: 'weapons', default: [] } ], 
  completedCategories: [ { type: Schema.Types.ObjectId, ref: 'categories', default: [] } ] 
})

export const UserModel = model<IUser>('users', UserSchema)
