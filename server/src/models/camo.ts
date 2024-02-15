import { Schema, model } from 'mongoose'

import { ECamoFamily, ECamoType, ECondition, EGame, EGameMode } from '../common/enums';

export interface ICamo {
  _id?: string;
  condition: ECondition;
  conditionAmount: number;
  family: ECamoFamily;
  game: EGame;
  gameMode: EGameMode;
  imageUrl?: string;
  name: string;
  type: ECamoType;
  weapon?: string;
}

const CamoSchema = new Schema<ICamo>({
  _id: { type: String, required: false },
  condition: { type: String, required: true },
  conditionAmount: { type: Number, required: true },
  family: { type: String, required: true },
  game: { type: String, required: true},
  gameMode: { type: String, required: true },
  imageUrl: { type: String },
  name: { type: String, required: true },
  type: { type: String, required: true },
  weapon: { type: String, required: false, ref: 'weapons' }
})

export const CamoModel = model<ICamo>('camos', CamoSchema)
