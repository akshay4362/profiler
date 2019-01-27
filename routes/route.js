import express from 'express'
import{getAllProfile,postAnItem,getprofileById,updateprofileById,deleteProfile} from '../helpers/helper'
const router =express.Router()

router.route('/')
    .get(getAllProfile)
    .post(postAnItem)
    .put(updateprofileById)

router.route('/:id')
    .get(getprofileById)
    .delete(deleteProfile)
    

export default router