const request = require('request');
const fs = require('fs')
let data = require('./jquery.industry_dic.62035')
let {industry_zp_json} = data

//================================行业
request('http://192.168.3.99:9000/api/Home/Industry', {json: true}, (err, res, body) => {
    if (err) return console.log(err)
    let industry = industry_zp_json
    let code = []
    let name = []
    let list = {}
    let data = body.result
    industry.forEach(item => {
        // code.push(item[0])
        // name.push(item[2])
       list[item[0]] = item[2]
    })
    // console.log(list,industry.length,Object.keys(list).length)
    // console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
    fs.writeFile('./jsonZhilian/industry2.json', JSON.stringify(list), err => console.log(err))
})