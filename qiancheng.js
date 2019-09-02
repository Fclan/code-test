// import {ctFunTypeAss} from './DictTable'
const data = require('./DictTable')
let {ctFunTypeAss, ctIndTypeAss, ctJobareaAss} = data
// console.log(ctFunTypeAss)


const request = require('request');
const fs = require('fs')
//==============================地区
/*request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let citys = ctJobareaAss
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    citys.forEach(v=>{
        code.push(v.code)
        let _value = v.value.split('-')
        name.push(_value[_value.length-1])
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name.replace(/[省市]/,'')
        if(['62', '14', '46','63'].indexOf(v.id)>-1) _name = v.name
        else if(v.id === '81' || v.id === '82') _name = v.name.slice(0, 2)
        if(name.indexOf(_name)>-1){
            ret[v.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name.replace(/[市]/,'')
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
                }
                if(v2.list.length>0){
                    v2.list.forEach(v3=>{
                        if(name.indexOf(v3.name)>-1){
                            ret[v3.id] = citys[name.indexOf(v3.name)].value + '|' + code[name.indexOf(v3.name)]
                        }
                    })
                }
            })
        }
    })
    console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", Object.keys(citys).length)
    fs.writeFile('./json51job/cities.json', JSON.stringify(ret), err=>console.log(err))
})*/

// 转换成功： 665
// 待转换： 830

//================================行业

/*request('http://192.168.3.99:9000/api/Home/Industry', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let citys = ctIndTypeAss
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    citys.forEach(v=>{
        code.push(v.code)
        name.push(v.value)
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
                }
            })
        }
    })
    let obj = {
        '005001': '快速消费品(食品、饮料、化妆品)|05',
        '005002':'服装/纺织/皮革|06',
        '004001':'专业服务(咨询、人力资源、财会)|07$法律|18',
        '007007':'制药/生物工程|08',
        '003001':'建筑/建材/工程|09$房地产|26',
        '009002':'餐饮业|11$酒店/旅游|53',
        '004002':'广告|12$公关/市场推广/会展|48',
        '010001':'文字媒体/出版|13$影视/媒体/艺术/文化传播|49',
        '007002':'机械/设备/重工|14',
        '011001':'采掘业/冶炼|16$新能源|61',
        '010002':'娱乐/休闲/体育|17',
        '011002':'石油/化工/矿产/地质|19',
        '008001':'交通/运输/物流|21',
        '008002':'交通/运输/物流|21',
        '005004':'批发/零售|22',
        '012001':'政府/公共事业|28$非营利组织|57',
        '007001':'汽车及零配件|33',
        '007004':'仪器仪表/工业自动化|35',
        '001003':'计算机服务(系统、数据服务、维修)|38',
        '009001':'医疗/护理/卫生|46$美容/保健|54',
        '003002':'家居/室内设计/装潢|50',
        '004004':'检测，认证|52',
        '009003':'酒店/旅游|53',
        '007009':'航天/航空|55',
        '007003':'原材料和加工|56',
        '006002':'奢侈品/收藏品/工艺品/珠宝|60'
    }
    let newObj = {...obj, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", Object.keys(citys).length)
    fs.writeFile('./json51job/industry.json', JSON.stringify(newObj), err=>console.log(err))
})*/
// 转换成功： 49
// 待转换： 60

//================================职能

request('http://192.168.3.99:9000/api/Home/Position', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let citys = ctFunTypeAss
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    citys.forEach(v=>{
        code.push(v.code)
        let _value = v.value.split('-')
        name.push(_value[_value.length-1])
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = citys[name.indexOf(_name)].value + '|' + code[name.indexOf(_name)]
                }
            })
        }
    })
    let tmp = {
        '018012': '计算机硬件|2400'
    }
    let newObj = {...tmp, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", Object.keys(citys).length)
    fs.writeFile('./json51job/position.json', JSON.stringify(newObj), err=>console.log(err))
})

// 转换成功： 485
// 待转换： 1017

