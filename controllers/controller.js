const Location=require('../models/location.model')
const findAll=(req,res)=>{
Location.findAll(function(err, location){
    if(err){
        return res.status(400).json({msg:'Fail'})
    }
    return res.status(200).json({location})
})
}
const create=(req, res)=>{
    
    const newLocation= new Location(req.body)
 
    Location.create(newLocation, function(err, location){
        if(err){
            return res.status(400).json({msg:'Fail'})
        }
        else{
            return res.status(201).json({
                msg:'add Location'
            })
        }
    })
}
module.exports={findAll, create}