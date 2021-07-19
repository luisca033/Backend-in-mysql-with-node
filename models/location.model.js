var dbConn=require('../db/db')
var Location= function(loc){
    this.name=loc.name
    this.area=loc.area
    this.location=loc.location
}

Location.create=function(newLoc,result){
    console.log(newLoc);
    const{name,area,location}=newLoc;
    if(name===undefined|| location===undefined){
        result('Error');
    }
    dbConn.query("INSERT INTO location set ?", newLoc, (err,res)=>{
        if(err){
            result(err,null)
        }
        else{
            result(null,res.insertId)
        }
    })
}
Location.findAll=(result)=>{
    dbConn.query("Select * from location", (err, res)=>{
        if(err){
            result(err,null)
        }
        else{
            result(null,res)
        }
    })
}
module.exports=Location
