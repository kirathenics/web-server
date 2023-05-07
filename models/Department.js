import mongoose from 'mongoose'

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        default: 0,
    },
    cited: {
        type: Number,
        default: 0,
    },
    hIndex: {
        type: Number,
        default: 0,
    },
    i10Index: {
        type: Number,
        default: 0,
    },
    citationArray: [
        {
            year: {
                type: Number,
                default: 0,
            },
            cited: {
                type: Number,
                default: 0,
            }
        }
    ],
}, { collection: 'departments' })

export default mongoose.model('DepartmentSchema', DepartmentSchema)