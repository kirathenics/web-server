import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as Controller from './controllers/Controller.js'

const dataBaseURL = 'mongodb+srv://admin:eeeeee@clustercitations.isavmzv.mongodb.net/scholarData?retryWrites=true&w=majority'
mongoose.connect(dataBaseURL)
.catch(error => console.log(`Database connection error\n${error}`))

const app = express()
app.use(express.json())
app.use(cors())


app.get('/top3', Controller.getTop3)
app.get('/profiles', Controller.getProfiles)
app.get('/profiles/filter', Controller.getProfilesFiltered)
app.post('/profiles/filter', Controller.getProfilesFiltered)
app.get('/faculties', Controller.getFaculties)
app.get('/departments', Controller.getDepartments)
app.get('/titles', Controller.getTitles)

app.get('/faculties/pies', Controller.getFacultiesPies)
app.get('/departments/pies', Controller.getDepartmentsPies)
app.get('/titles/pies', Controller.getTitlesPies)

app.get('/faculties/graphs', Controller.getFacultiesGraphs)
app.get('/departments/graphs', Controller.getDepartmentsGraphs)
app.get('/titles/graphs', Controller.getTitlesGraphs)

app.listen(4444, (err) => {
    if (err) return console.log(err)
    console.log('Server started!')
})