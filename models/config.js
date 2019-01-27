import mongoose from 'mongoose'
mongoose.set('debug',true)
import profile from './profile'

const connection = mongoose.connect('mongodb://localhost/profileApi')

export {connection,profile}
