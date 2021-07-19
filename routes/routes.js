const {Router} =require('express')
const {findAll, create}=require('../controllers/controller')
const router=Router();

router.get('/api/',findAll)

router.post('/api/',create)

module.exports=router