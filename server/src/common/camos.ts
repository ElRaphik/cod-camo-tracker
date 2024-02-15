import { CamoModel, ICamo } from "../models/camo";


export const addToCamoDB = async (family: ICamo[]) => {
  family.forEach(async member => {
    const {_id, name, condition, conditionAmount, type, family, gameMode, game} = member
  
    const newMember = new CamoModel({
      _id,
      name,
      condition,
      conditionAmount,
      game,
      type,
      family,
      gameMode
    })

    await newMember.save()
  });
}

