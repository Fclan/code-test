const request = require('request');
const fs = require('fs')
let data = require('./constantJson')
let {cityMap, industryMap2, funcode} = data
//==============================地区
/*request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    let citys = cityMap
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    Object.keys(citys).forEach(v=>{
        citys[v].forEach(v2=>{
            code.push(v2.id)
            let _name = v2.name.replace(/[省市]/,'')
            name.push(_name)
        })
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name.replace(/[省市]/,'')
        // if(['62', '14', '46','63','51'].indexOf(v.id)>-1) _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name.replace(/[市]/,'')
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
                }
                if(v2.list.length>0){
                    v2.list.forEach(v3=>{
                        if(name.indexOf(v3.name)>-1){
                            ret[v3.id] = name[name.indexOf(v3.name)] + '|' + code[name.indexOf(v3.name)]
                        }
                    })
                }
            })
        }
    })
    console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
    fs.writeFile('./jsonRencaia/cities.json', JSON.stringify(ret), err=>console.log(err))
})*/
// 转换成功： 433
// 待转换： 500

//================================行业

/*request('http://192.168.3.99:9000/api/Home/Industry', {json: true}, (err, res, body) => {
    if (err) return console.log(err)
    let citys = industryMap2
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    Object.keys(citys).forEach(v => {
        citys[v].forEach(v2 => {
            code.push(v2.id)
            name.push(v2.name)
        })
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if (name.indexOf(_name) > -1) {
            ret[v.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
        }
        if (v.list.length > 0) {
            v.list.forEach(v2 => {
                let _name = v2.name
                if (name.indexOf(_name) > -1) {
                    ret[v2.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
                }
            })
        }
    })
    let tmp = {
        "001003": 'IT服务(系统、数据、维护)|3',
        "007004": '仪器仪表/工业自动化|10',
        "003001": '房地产开发|15$建筑/建材/工程|16',
        "003002": '家居/室内设计/装潢|17',
        "004001": '专业服务/咨询（财会/法律/人力资源）|19',
        "004004": '检测/检验/认证|21',
        "004002": '广告/公关/会展|22',
        "005001": '快速消费品(食品/饮料/烟酒/日化)|27',
        "005002": '耐用消费品（服装/纺织/皮革/家具/家电）|28',
        "007002": '机械/设备/重工|32',
        "009002": '餐饮业|42$酒店|43',
        "009003": '旅游|44',
        "012001": '政府/公共事业|54$非盈利机构|55',
    }
    let newObj = {...tmp, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", code.length)
    fs.writeFile('./jsonRencaia/industry.json', JSON.stringify(newObj), err => console.log(err))
})*/
// 转换成功： 51
// 待转换： 58

//================================职能
request('http://192.168.3.99:9000/api/Home/Position', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let citys = funcode["0"]
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    Object.keys(citys).forEach(v=>{
        code.push(v)
        name.push(citys[v].zhongwen)
    })
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
                }
            })
        }
    })
    let tmp = {}
    let newObj = {...tmp, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", code.length)
    fs.writeFile('./jsonRencaia/position.json', JSON.stringify(newObj), err=>console.log(err))
})
// 转换成功： 692
// 待转换： 774

