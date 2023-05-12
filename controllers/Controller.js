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
        const { facultiesArr, departmentsArr, titlesArr } = await request.body
        let query = {}
        if (facultiesArr.length !== 0) query['faculty'] = { $in: facultiesArr }
        if (departmentsArr.length !== 0) query['department'] = { $in: departmentsArr }
        if (titlesArr.length !== 0) query['title'] = { $in: titlesArr }
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
