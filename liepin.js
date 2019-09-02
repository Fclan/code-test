const request = require('request');
const fs = require('fs')
let data = require('./jquery.industry_dic.62035')
let {industry_lp_json} = data
let data2 = require('./position_dic_plugin.62870')
let {liepin_position,liepin_position2} = data2
let data3 = require('./jquery.area_dic')
let {liepin_city} = data3

//================================行业
// request('http://192.168.3.99:9000/api/Home/Industry', {json: true}, (err, res, body) => {
//     if (err) return console.log(err)
//     let industry = industry_lp_json
//     let code = []
//     let name = []
//     let data = body.result
//     Object.keys(industry).forEach(key => {
//         code.push(key)
//         name.push(industry[key][0])
//     })
//     console.log(code.length)
//     let ret = {}
//     // console.log(data)
//     data.forEach(v => {
//         let _name = v.name
//         if(name.indexOf(_name)>-1){
//             ret[v.id] = code[name.indexOf(_name)]
//         }
//         if(v.list.length>0){
//             v.list.forEach(v2=>{
//                 let _name = v2.name
//                 if(name.indexOf(_name)>-1){
//                     ret[v2.id] = code[name.indexOf(_name)]
//                 }
//             })
//         }
//     })
//     let tmp = {
//         "008001":'250',
//         "008002":'250',
//         "003001":'080',
//         "003002":'100',
//         "003003":'090',
//         "001001":'040',
//         "001003":'030',
//         "001007":'060',
//         "001006":'020',
//         "005004":'240',
//         "005002":'200',
//         "006002":'460',
//         "006002":'470',
//         "007002":'360',
//         "007003":'370',
//         "007004":'340',
//         "004001":'120',
//         "004004":'450',
//         "009002":'230',
//         "009003":'230',
//         "010002":'260',
//         "004002":'070',
//         "010001":'170',
//         "006001":'380',
//         "007007":'270',
//         "009001":'280',
//         "011003":'330',
//         "011001":'320',
//     }
//     let newObj = {...tmp, ...ret}
//     console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", code.length)
//     fs.writeFile('./jsonLiepin/industry.json', JSON.stringify(newObj), err => console.log(err))
// })

//==============================地区
// request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
//     if(err) return console.log(err)
//     let code = []
//     let name = []
//     Object.keys(liepin_city).forEach(key=>{
//         code.push(key)
//         name.push(liepin_city[key][0])
//     })
//     let data = body.result
//     // console.log(code.length, name)
//     let ret = {}
//     data.forEach(v => {
//         let _name = v.name.replace(/[省市]/,'')
//         if(name.indexOf(_name)>-1){
//             ret[v.id] = code[name.indexOf(_name)]
//         }
//         if(v.list.length>0){
//             v.list.forEach(v2=>{
//                 let _name = v2.name.replace(/[市]/,'')
//                 if(name.indexOf(_name)>-1){
//                     ret[v2.id] = code[name.indexOf(_name)]
//                 }
//             })
//         }
//     })
//     console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
//     fs.writeFile('./jsonLiepin/cities.json', JSON.stringify(ret), err=>console.log(err))
// })

//================================职能
request('http://120.55.13.190:9000/api/Home/Position', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    let postion = liepin_position2
    let code = []
    let name = []
    let data = body.result
    Object.keys(postion).forEach(key => {
        code.push(key)
        name.push(postion[key][0])
    })
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name
                name.forEach((m,i) => {
                    if(m.indexOf(_name) > -1) {
                        ret[v2.id] = code[i]
                    }
                })
                // if(name.indexOf(_name)>-1){
                //     ret[v2.id] = code[name.indexOf(_name)]
                // }
            })
        }
    })
    console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
    fs.writeFile('./jsonLiepin/position2.json', JSON.stringify(ret), err=>console.log(err))
})