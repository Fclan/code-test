const request = require('request');
const fs = require('fs')
//链链： 1093
// 要转的数据： 1093
/*request('https://rd5.zhaopin.com/api/rd/resume/filter/meta?_=1553066409546&id=metaJobType&hasChildren=true&hasLeaf=false&x-zp-page-request-id=9fbb010c12d64de6b5c08c916119b893-1553066402904-692067', {jsonZhilian: true},  (err, res, body) => {
    let _data = {}
    let tmp1 = body.data.parents
    body.data.children.forEach(v=>{
        v.forEach(v2=>{
            tmp1.push(v2)
        })
    })
    tmp1.forEach(v=>{
        console.log(v[0], v[2])
        _data[v[0]] = v[2]
    })
    fs.writeFile('./jsonZhilian/position.jsonZhilian', JSON.stringify(_data), err=>console.log(err))
    console.log(tmp1.length, _data)
})*/

request('http://192.168.3.99:9000/api/Home/Position', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    let data1 = fs.readFileSync('./jsonZhilian/position.json', 'utf-8')
    data1 = JSON.parse(data1)
    // console.log(data1)
    let code = []
    let name = []
    let data = body.result
    Object.keys(data1).forEach(key=>{
        code.push(key)
        name.push(data1[key])
    })
    // console.log(code, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name
        if(name.indexOf(_name)>-1){
            ret[v.id] = code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = code[name.indexOf(_name)]
                }
            })
        }
    })
    console.log("链链：", Object.keys(ret).length, "\n要转的数据：", Object.keys(data1).length)
    fs.writeFile('./jsonZhilian/positionResult.json', JSON.stringify(ret), err=>console.log(err))
})
