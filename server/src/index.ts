import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { CamoRouter } from './routes/camos'
import { WeaponRouter } from './routes/weapons'
import { CategoryRouter } from './routes/categories'


dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/camos', CamoRouter)
app.use('/weapons', WeaponRouter)
app.use('/categories', CategoryRouter)

const
  dbUser = process.env.MONGODB_USER,
  dbUserPwd = process.env.MONGODB_PASSWORD,
  dbServer = process.env.MONGODB_SERVER,
  dbPort = process.env.MONGODB_PORT,
  db = process.env.MONGODB_DB

mongoose.connect(`mongodb://${dbUser}:${dbUserPwd}@${dbServer}:${dbPort}/${db}`)


// only when you want to feed the DB
// mw2MultiplayerCamosList.forEach(family => {
//   addToCamoDB(family)
// });

app.listen(process.env.PORT, () => console.log(`SERVER STARTED ON PORT ${process.env.PORT}`))