import { Router, Response, Request } from "express";

import { WeaponModel, IWeapon } from "../models/weapon";



const router = Router()

router.get('/', async (_, res: Response) => {
  try {
    const guns = await WeaponModel.find({})

    res.json({ guns })
  } catch (e) {
    res.status(400).json({e})
  }
})

router.post('/add-many', async (req:Request, res: Response) => {
  const gunsList = req.body as IWeapon[]

  try {
    gunsList.forEach(async gun => {
      const { name, game, camos } = gun

      const newGun = new WeaponModel({
        name,
        game,
        camos
      })

      await newGun.save();
    });
    res.json({ message: 'Weapons added successfully.' })

  } catch (error) {
    res.status(400).json({ error })
  }
})

export { router as WeaponRouter }