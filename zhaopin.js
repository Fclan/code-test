const request = require('request');
const fs = require('fs')
let data = require('./jquery.industry_dic.62035')
let {industry_zp_json} = data
let data2 = require('./position_dic_plugin.62870')
let {zhaopin_position} = data2

//================================行业
// let industry = industry_zp_json
// let list = {}
// industry.forEach(item => {
//    list[item[0]] = item[2]
// })
// fs.writeFile('./jsonZhilian/industry2.json', JSON.stringify(list), err => console.log(err))

//===============================职位
let postion = zhaopin_position
let list = {}
postion.forEach(item => {
   list[item[0]] = item[2]
})
fs.writeFile('./jsonZhilian/jobType2.json', JSON.stringify(list), err => console.log(err))
