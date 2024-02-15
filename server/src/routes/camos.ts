import { Router, Response, Request } from "express";
import { CamoModel, ICamo } from "../models/camo";

const router = Router()

router.get('/', async (_, res: Response) => {
  try {
    const camos = await CamoModel.find({})

    res.json({camos})
  } catch (error) {
    res.status(400).json({error})
  }
})

router.get('/get-family/:family', async (req: Request, res: Response) => {
  const { family } = req.params

  try {
    const camos = await CamoModel.find({family})

    res.json({camos})
  } catch (error) {
    res.status(400).json({error})
  }
})

router.get('/get-gameMode/:gameMode', async (req: Request, res: Response) => {
  const { gameMode } = req.params

  try {
    const camos = await CamoModel.find({gameMode})

    res.json({camos})
  } catch (error) {
    res.status(400).json({error})
  }
})






router.post('/add-many', async (req: Request, res: Response) => {
  try {
    const camos = req.body as ICamo[]

    camos.forEach(async camo => {
      const { name, condition, conditionAmount, imageUrl, type, family, gameMode } = camo

      const newCamo = new CamoModel({
        name,
        condition,
        conditionAmount,
        imageUrl,
        type,
        family,
        gameMode
      })

      await newCamo.save()
    });
    res.json({ message: 'Camos added successfully.'})

  } catch (error) {
    res.status(400).json({error})
  }
})

export { router as CamoRouter }

