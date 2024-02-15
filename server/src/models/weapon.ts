import { Schema, model } from 'mongoose'

import { EGame } from '../common/enums';

export interface IWeapon {
  _id?: string;
  camos: string[];
  category: string;
  game: EGame;
  name: string;
  weapon_completion: string;
  category_completion: string;
  all_categories_completion: string;
}

const WeaponSchema = new Schema<IWeapon>({
  _id: String,
  camos: [{ type: String, ref: 'camos', default: [] }],
  category: { type: String, ref: 'categories', required: true },
  game: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  weapon_completion: { type: String, required: true, ref: 'camos' },
  category_completion: { type: String, required: true, ref: 'camos' },
  all_categories_completion: { type: String, required: true, ref: 'camos' }
})

export const WeaponModel = model<IWeapon>('weapons', WeaponSchema)

