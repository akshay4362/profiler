import {profile} from '../models/config'
const getAllProfile =async(req,res)=>{
    try{
        const datas=await profile.find()
        res.json(datas)
    }catch (error){
        res.json(error)
    }
}
const  postAnItem =async (req,res)=>{
    try{
        const Profile={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            team:req.body.team,
            position:req.body.position
        }
        // console.log(req.body)
        const datas=await profile.create(Profile)
        res.json(datas)
    }catch(error){
        res.json(error)
    }
}
const getprofileById = async (req,res)=>{
    try{
        const datas= await profile.findById(req.params.id)
        res.json(datas)
    }catch (error){
        res.json(error)
    }
}
const updateprofileById = async (req,res)=>{
    try{
        const datas= await profile.findOneAndUpdate({_id:req.body._id},
            {firstName:req.body.name},{new:true})   
        console.log(req.body)
        res.json(datas)
    }catch (error){
        res.json(error)
    }
}

const deleteProfile = async (req,res)=>{
    try{
        const datas= await profile.findOneAndDelete({_id:req.params.id})
        res.json(`item deleted ${datas.firstName}`)
    }catch (error){
        res.json(error)
    }
}

export{getAllProfile,postAnItem,getprofileById,updateprofileById,deleteProfile}