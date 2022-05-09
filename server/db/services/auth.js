const jwt = require('jsonwebtoken')
const {queryDataWhere} = require('../query')

const auth = async(req, res, next) => {
  try{
    // console.log(req.headers)
    const token = await req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'thisismysecret')
    // console.log(decoded.role)
    if(decoded.role===0){
      const res = await queryDataWhere('*', 'admin', `Account='${decoded.account}' AND Role=${decoded.role}`)
      if(res.length===0){
        throw new Error("No such admin")
      }
      req.userAccount = decoded.account
      req.userId = res[0].Aid
      req.role = 0
    }else if(decoded.role===1){
      const resData = await queryDataWhere('*', 'teacher', `Account='${decoded.account}' AND Role=${decoded.role}`)
      if(resData.length===0){
        throw new Error("No such teacher")
      }
      // console.log(resData)
      req.userAccount = decoded.account
      req.userId = resData[0].Tid
      req.role = 1
    }else if(decoded.role===2){
      const resData = await queryDataWhere('*', 'student', `Account='${decoded.account}' AND Role=${decoded.role}`)
      if(resData.length===0){
        throw new Error("No such student")
      }
      req.userAccount = decoded.account
      req.userId = resData[0].Stuid
      req.role = 2
    }else{
      throw new Error("No such Role")
    }

    next()
  }catch(e){
    res.status(401).send({ error: 'Please authenticate.' })
  }
}

module.exports = {auth}