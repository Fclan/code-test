const request = require('request');
const fs = require('fs')

request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    // console.log(body)
    // fs.writeFile('./jsonZhilian/data.jsonZhilian', JSON.stringify(body.result), err=>console.log(err))
    let citys = fs.readFileSync('./jsonZhilian/cities.json', 'utf-8')
    citys = JSON.parse(citys)
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    Object.keys(citys).forEach(key=>{
        code.push(key)
        name.push(citys[key])
    })
    // console.log(code, name)
    let ret = {}
    data.forEach(v => {
        let _name
        if(v.id === '71') _name = v.name
        else if(v.id === '81' || v.id === '82') _name = v.name.slice(0, 2)
        else _name = v.name.replace(/[省市]/,'')
        if(name.indexOf(_name)>-1){
            ret[v.id] = code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name.replace(/[市]/,'')
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = code[name.indexOf(_name)]
                }
                if(v2.list.length>0){
                    v2.list.forEach(v3=>{
                        if(name.indexOf(v3.name)>-1){
                            ret[v3.id] = code[name.indexOf(v3.name)]
                        }
                    })
                }
            })
        }
    })
    console.log("链链：", Object.keys(ret).length, "\n智联：", Object.keys(citys).length)
    fs.writeFile('./jsonZhilian/result.json', JSON.stringify(ret), err=>console.log(err))
})