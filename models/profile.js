import mongoose from 'mongoose'
const ProfileSchema = new mongoose.Schema({

    firstName: {type:String, default:"Hello", trim:true},

    lastName: {type:String, default:"world", trim:true},

    age: {type:Number, default:100},

    team: {type:String, default:"none", trim:true},

    position: {type:String, default:"none", trim:true},
    createdAt:{
        type:Date,
        default:Date.now
    }

})
const profile =mongoose.model('profile',ProfileSchema)
export default profile