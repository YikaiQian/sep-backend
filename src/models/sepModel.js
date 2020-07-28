import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
   username:{
       type:String,
       required: 'User: Username is required'
   },
   salt: {
       type:String,
       required: 'User: salt is required'
   },
   hash: {
       type:String,
       required: 'User: hash is required'
   }
});

export const SepSessionSchema = new Schema({
    sepSessionId: {
        type: Number,
        unique:true,
        dropDups:true
    },
    sessionName: String,
    imageSrc: String,
    description: String,
    date: String,
    speaker: String
});






