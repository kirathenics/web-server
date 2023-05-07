import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as Controller from './controllers/Controller.js'

//const dataBaseURL = 'mongodb+srv://admin:eeeeee@clustercitations.isavmzv.mongodb.net/scholarData?retryWrites=true&w=majority'
mongoose.connect(dataBaseURL)
.catch(error => console.log(`Database connection error\n${error}`))

const app = express()
app.use(express.json())
app.use(cors())

// создать папку controllers и routes

app.get('/', (request, response) => {
    response.send('Hello world');
})

app.get('/profiles', Controller.getProfiles)
app.get('/profiles/filter', Controller.getProfilesFiltered)
app.get('/faculties', Controller.getFaculties)
app.get('/departments', Controller.getDepartments)
app.get('/titles', Controller.getTitles)

app.get('/faculties/charts', Controller.getFacultiesCharts)
app.get('/departments/charts', Controller.getDepartmentsCharts)
app.get('/titles/charts', Controller.getTitlesCharts)

app.get('/faculties/charts', Controller.getFacultiesGraphs)
app.get('/departments/charts', Controller.getDepartmentsGraphs)
app.get('/titles/charts', Controller.getTitlesGraphs)

app.listen(4444, (err) => {
    if (err) return console.log(err)
    console.log('Server OK')
})