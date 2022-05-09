const express = require('express')
const router = new express.Router()
const {updateData} = require('../../db/update')
const {insertData, insertMany} = require('../../db/insert')
const {queryDataWhere, queryDataGroupBy} = require('../../db/query')
const {auth} = require('../../db/services/auth')
const {deleteData} = require('../../db/delete');

router.get('/callingclass/:stuid', auth, async (req, res) => {
  try {
    const stuid = req.params.stuid
    // console.log(stuid)
    const classes = await queryDataWhere('teacher.Name, attentance.Clsid, class.ClassName, class.StartAt, class.EndAt, attentance.Rcid, attentance.AttenStatus, rollcall.Rollcalltype', 'attentance, rollcall, teacher, class', 
    `rollcall.State=1 AND attentance.Rcid=rollcall.Rcid AND Date(rollcall.callTime)="${new Date().toISOString().split('T')[0]}" AND attentance.Stuid=${stuid} AND class.Clsid=attentance.Clsid AND teacher.Tid=class.Tid`)
    console.log(classes)
    res.status(200).send(classes)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
})

router.post('/responCall', auth, async(req, res) => {
  try {
    // console.log(req.body)
    // 0表示已點名，其他的點名狀態要等佈屬後才有辦法
    req.body.AttenStatus=0
    req.body.CheckIpAddr = req.socket.remoteAddress

    console.log(req.body)
    await updateData('attentance', req.body,`Stuid=${req.body.Stuid} AND Rcid=${req.body.Rcid}`)
    res.status(200).send("Got it")
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
})

module.exports = router;