const request = require('request');
const fs = require('fs')
const cheerio = require('cheerio')

let myHtml = fs.readFileSync("geek.html")
let $ = cheerio.load(myHtml)
let a = $('html').find('li')
let a2 = a.nextAll()
console.log(a2.length)
let citys = {}
a2.each(function (i, elem) {
    // getContent($(this));
    // console.log(i, elem);
    let name = $(elem).text()
    let value = $(elem).find('a')[0].attribs["data-val"]
    citys[value] = name
    // console.log('name:',  name, 'value:', value)
})

// fs.writeFileSync('boss_citys.json', JSON.stringify(citys))

request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
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
        if(v.id === '81' || v.id === '82') _name = v.name.slice(0, 2)
        else _name = v.name.replace(/[省市]/,'')
        if(name.indexOf(_name)>-1){
            ret[v.id] = name[name.indexOf(_name)]+'|'+code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name.replace(/[市]/,'')
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = name[name.indexOf(_name)]+'|'+code[name.indexOf(_name)]
                }
            })
        }
    })
    console.log("转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
    fs.writeFile('./jsonBoss/citys.json', JSON.stringify(ret), err=>console.log(err))
})
// 转换成功： 296
// 待转换： 351

