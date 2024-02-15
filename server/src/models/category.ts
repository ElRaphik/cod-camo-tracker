import { Schema, model } from 'mongoose'

import { EGame } from '../common/enums';


export interface ICategory {
  _id?: string;
  name: string;
  game: EGame;
  weapons: string[];
}

const CategorySchema = new Schema<ICategory>({
  _id: String,
  name: { type: String, required: true },
  game: { type: String, required: true },
  weapons: [{ type: String, ref: 'weapons', default: [] }]
})

export const CategoryModel = model<ICategory>('categories', CategorySchema)
