const request = require('request');
const fs = require('fs')
//链链： 63
// 要转的数据： 65
request('http://192.168.3.99:9000/api/Home/Industry', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let data1 = fs.readFileSync('./jsonZhilian/industry.json', 'utf-8')
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
    fs.writeFile('./jsonZhilian/industryResult.json', JSON.stringify(ret), err=>console.log(err))
})