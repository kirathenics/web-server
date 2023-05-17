import { ProfileSchema, FacultySchema, DepartmentSchema, TitleSchema } from '../models/index.js'

export const getTop3 = async (request, response) => {
    try {
        //const profiles = await ProfileSchema.find({}).select('-citationArray -faculty -department -title -hIndex -i10Index').sort({'hIndex': -1 }).limit(3)
        const profiles = await ProfileSchema.find().select('_id fullName profileLink imageLink cited __v').sort({'cited': -1 }).limit(3)
        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getProfiles = async (request, response) => {
    try {
        const profiles = await ProfileSchema.find().select('-citationArray').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getProfilesFiltered = async (request, response) => {
    try {
        //console.log(request.body)
        //const { arrDepartments, arrFaculties, arrTitles } = await request.body
        const arrDepartments = await (request.query.arrDepartments ? request.query.arrDepartments : [])
        const arrFaculties = await (request.query.arrFaculties ? request.query.arrFaculties : [])
        const arrTitles = await (request.query.arrTitles ? request.query.arrTitles : [])
        let query = {}
        
        /*console.log(arrDepartments)
        console.log(arrFaculties)
        console.log(arrTitles)*/
        if (arrDepartments.length !== 0) query['department'] = { $in: arrDepartments }
        if (arrFaculties.length !== 0) query['faculty'] = { $in: arrFaculties }
        if (arrTitles.length !== 0) query['title'] = { $in: arrTitles }


        /*console.log(arr1)
        console.log(arr1.length)
        console.log(arr2)
        console.log(arr3)*/
        //response.status(200).json({ success: true })
        const profiles = await ProfileSchema.find(query).select('-citationArray').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getFaculties = async (request, response) => {
    try {
        const profiles = await FacultySchema.find().select('-citationArray').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getDepartments = async (request, response) => {
    try {
        const profiles = await DepartmentSchema.find().select('-citationArray').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getTitles = async (request, response) => {
    try {
        const profiles = await TitleSchema.find().select('-citationArray').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getFacultiesCharts = async (request, response) => {
    try {
        const profiles = await FacultySchema.find().select('name cited hIndex').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getDepartmentsCharts = async (request, response) => {
    try {
        const profiles = await DepartmentSchema.find().select('name cited hIndex').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getTitlesCharts = async (request, response) => {
    try {
        const profiles = await TitleSchema.find().select('name cited hIndex').sort({'hIndex': -1 })

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getFacultiesGraphs = async (request, response) => {
    try {
        const profiles = await FacultySchema.find().select('name citationArray')

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getDepartmentsGraphs = async (request, response) => {
    try {
        const profiles = await DepartmentSchema.find().select('name citationArray')

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}

export const getTitlesGraphs = async (request, response) => {
    try {
        const profiles = await TitleSchema.find().select('name citationArray')

        if (!profiles) return response.status(400).json({
            message: 'Данные не найдены'
        })

        response.status(200).json(profiles)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: 'Не удалось считать данные'
        })
    }
}
