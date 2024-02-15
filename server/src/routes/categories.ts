import { Router, Response, Request } from "express";

import { CategoryModel, ICategory } from "../models/category";



const router = Router()

router.get('/getall', async (_, res: Response) => {
  try {
    const categories = await CategoryModel.find({})

    res.json({ categories })
  } catch (e) {
    res.status(400).json({e})
  }
})


router.post('/add-many', async (req:Request, res: Response) => {
  const categoriesList = req.body as ICategory[]

  try {
    categoriesList.forEach(async category => {
      const { name, game } = category

      const newCategory = new CategoryModel({
        name,
        game
      })

      await newCategory.save();
    });
    res.json({ message: 'Categories added successfully.' })

  } catch (error) {
    res.status(400).json({ error })
  }
})

router.post('/add-many-by-game/:game', async (req:Request, res: Response) => {
  const { game } = req.params
  const categoriesList = req.body as ICategory[]

  try {
    categoriesList.forEach(async category => {
      const { name } = category

      const newCategory = new CategoryModel({
        name,
        game
      })

      await newCategory.save();
    });
    res.json({ message: 'Categories added successfully.' })

  } catch (error) {
    res.status(400).json({ error })
  }
})

router.post('/add-weapons/:categoryID', async (req:Request, res: Response) => {
  const { categoryID } = req.params
  const weaponIDs = req.body as string[]

  try {
    const category = await CategoryModel.findOne({_id: categoryID})
    const tmp: string[] = category.weapons

    weaponIDs.forEach(async weaponID => {

      tmp.push(weaponID)

    });

    category.weapons = tmp.filter((id, i) => category.weapons.indexOf(id) === i);
    await category.save();
    res.json({ message: `Weapons added to category ${category.name.toUpperCase()} successfully.` })

  } catch (error) {
    res.status(400).json({ error })
  }
})

export { router as CategoryRouter }