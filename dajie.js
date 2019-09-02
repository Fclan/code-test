const request = require('request');
const fs = require('fs')
let data = require('./jquery.industry_dic.62035')
let {industry_dic_json} = data
let data2 = require('./position_dic_plugin.62870')
let {position_data} = data2

//================================行业

/*request('http://192.168.3.99:9000/api/Home/Industry', {json: true}, (err, res, body) => {
    if (err) return console.log(err)
    let citys = industry_dic_json
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    citys.forEach(v => {
        v["items"].forEach(v2 => {
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
        '001001': '互联网/移动互联网/电子商务|3101',
        "001003": 'IT服务/系统集成|3105',
        "001007": '通信(设备/运营/增值)|3202',
        "001005": '计算机硬件/网络设备|3203',
        "001006": '计算机硬件/网络设备|3203',
        "003002": '规划/设计/装饰装潢|3402',
        "003003": '房地产服务(物业管理/地产经纪)|3403',
        "005001": '食品/饮料/烟酒/日化|3501',
        "005004": '百货/批发/零售|3502',
        "005002": '服装服饰/纺织/皮革|3503$家具/家电|3504',
        "006002": '奢侈品/收藏品|3506$工艺品/珠宝/玩具|3507',
        "007002": '机械制造/机电/重工|3602',
        "007003": '加工制造(原料加工/模具)|3604',
        "007004": '仪器/仪表/工业自动化/电气|3605',
        "004001": '专业服务(人力/咨询/法律/翻译)|3701',
        "009002": '旅游/酒店/餐饮/生活服务|3706',
        "009003": '旅游/酒店/餐饮/生活服务|3706',
        "010002": '娱乐/休闲/体育|3707',
        "004002": '广告/公关/市场推广/会展|3801',
        "010001": '影视/媒体/艺术/文化/出版|3802',
        "006001": '教育/培训/学术/科研/院校|3803',
        "008001": '交通/运输/物流/仓储|3901',
        "008002": '交通/运输/物流/仓储|3901',
        "007009": '航空/航天|3903',
        "007007": '制药/生物工程|4001',
        "009001": '医疗/保健/美容/卫生服务|4002',
        "011001": '采掘/冶炼/矿产|4013$新能源|4014',
        "012001": '政府/公共事业/非营利机构|4201',
    }
    let newObj = {...tmp, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", code.length)
    fs.writeFile('./jsonDajie/industry.json', JSON.stringify(newObj), err => console.log(err))
})*/
// 转换成功： 50
// 待转换： 53


let cityList = {
    0: {name: "北京", type: "leafNode", value: 110000},
    1: {name: "上海", type: "leafNode", value: 310000},
    2: {name: "天津", type: "leafNode", value: 120000},
    3: {name: "重庆", type: "leafNode", value: 500000},
    4: {name: "安徽", type: "next", value: 340000},
    5: {name: "福建", type: "next", value: 350000},
    6: {name: "甘肃", type: "next", value: 620000},
    7: {name: "广东", type: "next", value: 440000},
    8: {name: "广西", type: "next", value: 450000},
    9: {name: "贵州", type: "next", value: 520000},
    10: {name: "海南", type: "next", value: 460000},
    11: {name: "河北", type: "next", value: 130000},
    12: {name: "河南", type: "next", value: 410000},
    13: {name: "黑龙江", type: "next", value: 230000},
    14: {name: "湖北", type: "next", value: 420000},
    15: {name: "湖南", type: "next", value: 430000},
    16: {name: "吉林", type: "next", value: 220000},
    17: {name: "江苏", type: "next", value: 320000},
    18: {name: "江西", type: "next", value: 360000},
    19: {name: "辽宁", type: "next", value: 210000},
    20: {name: "内蒙古", type: "next", value: 150000},
    21: {name: "宁夏", type: "next", value: 640000},
    22: {name: "青海", type: "next", value: 630000},
    23: {name: "山东", type: "next", value: 370000},
    24: {name: "山西", type: "next", value: 140000},
    25: {name: "陕西", type: "next", value: 610000},
    26: {name: "四川", type: "next", value: 510000},
    27: {name: "西藏", type: "next", value: 540000},
    28: {name: "新疆", type: "next", value: 650000},
    29: {name: "云南", type: "next", value: 530000},
    30: {name: "浙江", type: "next", value: 330000},
    31: {name: "港澳台", type: "next", value: 800000},
    32: {name: "海外", type: "next", value: 810000},
    33: {name: "其它", type: "leafNode", value: 999999}
}
let nextCity = [{
    "name": "港澳台",
    "type": "leafNode",
    "value": 800100
}, {
    "name": "杭州",
    "type": "leafNode",
    "value": 330100
},
    {
        "name": "宁波",
        "type": "leafNode",
        "value": 330200
    },
    {
        "name": "温州",
        "type": "leafNode",
        "value": 330300
    },
    {
        "name": "嘉兴",
        "type": "leafNode",
        "value": 330400
    },
    {
        "name": "湖州",
        "type": "leafNode",
        "value": 330500
    },
    {
        "name": "绍兴",
        "type": "leafNode",
        "value": 330600
    },
    {
        "name": "金华",
        "type": "leafNode",
        "value": 330700
    },
    {
        "name": "衢州",
        "type": "leafNode",
        "value": 330800
    },
    {
        "name": "舟山",
        "type": "leafNode",
        "value": 330900
    },
    {
        "name": "台州",
        "type": "leafNode",
        "value": 331000
    },
    {
        "name": "丽水",
        "type": "leafNode",
        "value": 331100
    },
    {
        "name": "慈溪",
        "type": "leafNode",
        "value": 331200
    },
    {
        "name": "萧山",
        "type": "leafNode",
        "value": 331300
    },
    {
        "name": "海宁",
        "type": "leafNode",
        "value": 331400
    },
    {
        "name": "义乌",
        "type": "leafNode",
        "value": 331500
    },
    {
        "name": "余姚",
        "type": "leafNode",
        "value": 331600
    }, {
        "name": "昆明",
        "type": "leafNode",
        "value": 530100
    },
    {
        "name": "曲靖",
        "type": "leafNode",
        "value": 530300
    },
    {
        "name": "玉溪",
        "type": "leafNode",
        "value": 530400
    },
    {
        "name": "保山",
        "type": "leafNode",
        "value": 530500
    },
    {
        "name": "昭通",
        "type": "leafNode",
        "value": 530600
    },
    {
        "name": "丽江",
        "type": "leafNode",
        "value": 530700
    },
    {
        "name": "普洱",
        "type": "leafNode",
        "value": 530800
    },
    {
        "name": "临沧",
        "type": "leafNode",
        "value": 530900
    },
    {
        "name": "楚雄",
        "type": "leafNode",
        "value": 532300
    },
    {
        "name": "红河",
        "type": "leafNode",
        "value": 532500
    },
    {
        "name": "文山",
        "type": "leafNode",
        "value": 532600
    },
    {
        "name": "西双版纳",
        "type": "leafNode",
        "value": 532800
    },
    {
        "name": "大理",
        "type": "leafNode",
        "value": 532900
    },
    {
        "name": "德宏",
        "type": "leafNode",
        "value": 533100
    },
    {
        "name": "怒江",
        "type": "leafNode",
        "value": 533300
    },
    {
        "name": "迪庆",
        "type": "leafNode",
        "value": 533400
    },
    {
        "name": "景洪",
        "type": "leafNode",
        "value": 533500
    },
    {
        "name": "思茅",
        "type": "leafNode",
        "value": 533600
    },
    {
        "name": "蒙自",
        "type": "leafNode",
        "value": 533700
    }, {
        "name": "乌鲁木齐",
        "type": "leafNode",
        "value": 650100
    },
    {
        "name": "克拉玛依",
        "type": "leafNode",
        "value": 650200
    },
    {
        "name": "吐鲁番",
        "type": "leafNode",
        "value": 652100
    },
    {
        "name": "哈密",
        "type": "leafNode",
        "value": 652200
    },
    {
        "name": "昌吉",
        "type": "leafNode",
        "value": 652300
    },
    {
        "name": "博尔塔拉",
        "type": "leafNode",
        "value": 652700
    },
    {
        "name": "巴音郭楞",
        "type": "leafNode",
        "value": 652800
    },
    {
        "name": "阿克苏",
        "type": "leafNode",
        "value": 652900
    },
    {
        "name": "克孜勒苏",
        "type": "leafNode",
        "value": 653000
    },
    {
        "name": "喀什",
        "type": "leafNode",
        "value": 653100
    },
    {
        "name": "和田",
        "type": "leafNode",
        "value": 653200
    },
    {
        "name": "伊犁",
        "type": "leafNode",
        "value": 654000
    },
    {
        "name": "塔城",
        "type": "leafNode",
        "value": 654200
    },
    {
        "name": "阿勒泰",
        "type": "leafNode",
        "value": 654300
    },
    {
        "name": "石河子",
        "type": "leafNode",
        "value": 659100
    },
    {
        "name": "阿拉尔",
        "type": "leafNode",
        "value": 659200
    },
    {
        "name": "图木舒克",
        "type": "leafNode",
        "value": 659300
    },
    {
        "name": "五家渠",
        "type": "leafNode",
        "value": 659400
    }, {
        "name": "拉萨",
        "type": "leafNode",
        "value": 540100
    },
    {
        "name": "昌都",
        "type": "leafNode",
        "value": 542100
    },
    {
        "name": "山南",
        "type": "leafNode",
        "value": 542200
    },
    {
        "name": "日喀则",
        "type": "leafNode",
        "value": 542300
    },
    {
        "name": "那曲",
        "type": "leafNode",
        "value": 542400
    },
    {
        "name": "阿里",
        "type": "leafNode",
        "value": 542500
    },
    {
        "name": "林芝",
        "type": "leafNode",
        "value": 542600
    }, {
        "name": "成都",
        "type": "leafNode",
        "value": 510100
    },
    {
        "name": "自贡",
        "type": "leafNode",
        "value": 510300
    },
    {
        "name": "攀枝花",
        "type": "leafNode",
        "value": 510400
    },
    {
        "name": "泸州",
        "type": "leafNode",
        "value": 510500
    },
    {
        "name": "德阳",
        "type": "leafNode",
        "value": 510600
    },
    {
        "name": "绵阳",
        "type": "leafNode",
        "value": 510700
    },
    {
        "name": "广元",
        "type": "leafNode",
        "value": 510800
    },
    {
        "name": "遂宁",
        "type": "leafNode",
        "value": 510900
    },
    {
        "name": "内江",
        "type": "leafNode",
        "value": 511000
    },
    {
        "name": "乐山",
        "type": "leafNode",
        "value": 511100
    },
    {
        "name": "南充",
        "type": "leafNode",
        "value": 511300
    },
    {
        "name": "眉山",
        "type": "leafNode",
        "value": 511400
    },
    {
        "name": "宜宾",
        "type": "leafNode",
        "value": 511500
    },
    {
        "name": "广安",
        "type": "leafNode",
        "value": 511600
    },
    {
        "name": "达州",
        "type": "leafNode",
        "value": 511700
    },
    {
        "name": "雅安",
        "type": "leafNode",
        "value": 511800
    },
    {
        "name": "巴中",
        "type": "leafNode",
        "value": 511900
    },
    {
        "name": "资阳",
        "type": "leafNode",
        "value": 512000
    },
    {
        "name": "阿坝",
        "type": "leafNode",
        "value": 513200
    },
    {
        "name": "甘孜",
        "type": "leafNode",
        "value": 513300
    },
    {
        "name": "凉山",
        "type": "leafNode",
        "value": 513400
    }, {
        "name": "西安",
        "type": "leafNode",
        "value": 610100
    },
    {
        "name": "铜川",
        "type": "leafNode",
        "value": 610200
    },
    {
        "name": "宝鸡",
        "type": "leafNode",
        "value": 610300
    },
    {
        "name": "咸阳",
        "type": "leafNode",
        "value": 610400
    },
    {
        "name": "渭南",
        "type": "leafNode",
        "value": 610500
    },
    {
        "name": "延安",
        "type": "leafNode",
        "value": 610600
    },
    {
        "name": "汉中",
        "type": "leafNode",
        "value": 610700
    },
    {
        "name": "榆林",
        "type": "leafNode",
        "value": 610800
    },
    {
        "name": "安康",
        "type": "leafNode",
        "value": 610900
    },
    {
        "name": "商洛",
        "type": "leafNode",
        "value": 611000
    }, {
        "name": "太原",
        "type": "leafNode",
        "value": 140100
    },
    {
        "name": "大同",
        "type": "leafNode",
        "value": 140200
    },
    {
        "name": "阳泉",
        "type": "leafNode",
        "value": 140300
    },
    {
        "name": "长治",
        "type": "leafNode",
        "value": 140400
    },
    {
        "name": "晋城",
        "type": "leafNode",
        "value": 140500
    },
    {
        "name": "朔州",
        "type": "leafNode",
        "value": 140600
    },
    {
        "name": "晋中",
        "type": "leafNode",
        "value": 140700
    },
    {
        "name": "运城",
        "type": "leafNode",
        "value": 140800
    },
    {
        "name": "忻州",
        "type": "leafNode",
        "value": 140900
    },
    {
        "name": "临汾",
        "type": "leafNode",
        "value": 141000
    },
    {
        "name": "吕梁",
        "type": "leafNode",
        "value": 141100
    },
    {
        "name": "榆次",
        "type": "leafNode",
        "value": 141200
    },
    {
        "name": "其他",
        "type": "leafNode",
        "value": 141300
    }, {
        "name": "济南",
        "type": "leafNode",
        "value": 370100
    },
    {
        "name": "青岛",
        "type": "leafNode",
        "value": 370200
    },
    {
        "name": "淄博",
        "type": "leafNode",
        "value": 370300
    },
    {
        "name": "枣庄",
        "type": "leafNode",
        "value": 370400
    },
    {
        "name": "东营",
        "type": "leafNode",
        "value": 370500
    },
    {
        "name": "烟台",
        "type": "leafNode",
        "value": 370600
    },
    {
        "name": "潍坊",
        "type": "leafNode",
        "value": 370700
    },
    {
        "name": "济宁",
        "type": "leafNode",
        "value": 370800
    },
    {
        "name": "泰安",
        "type": "leafNode",
        "value": 370900
    },
    {
        "name": "威海",
        "type": "leafNode",
        "value": 371000
    },
    {
        "name": "日照",
        "type": "leafNode",
        "value": 371100
    },
    {
        "name": "莱芜",
        "type": "leafNode",
        "value": 371200
    },
    {
        "name": "临沂",
        "type": "leafNode",
        "value": 371300
    },
    {
        "name": "德州",
        "type": "leafNode",
        "value": 371400
    },
    {
        "name": "聊城",
        "type": "leafNode",
        "value": 371500
    },
    {
        "name": "滨州",
        "type": "leafNode",
        "value": 371600
    },
    {
        "name": "菏泽",
        "type": "leafNode",
        "value": 371700
    },
    {
        "name": "青州",
        "type": "leafNode",
        "value": 371800
    },
    {
        "name": "曲阜",
        "type": "leafNode",
        "value": 371900
    }, {
        "name": "西宁",
        "type": "leafNode",
        "value": 630100
    },
    {
        "name": "海东",
        "type": "leafNode",
        "value": 632100
    },
    {
        "name": "海北",
        "type": "leafNode",
        "value": 632200
    },
    {
        "name": "黄南",
        "type": "leafNode",
        "value": 632300
    },
    {
        "name": "海南州",
        "type": "leafNode",
        "value": 632500
    },
    {
        "name": "果洛",
        "type": "leafNode",
        "value": 632600
    },
    {
        "name": "玉树",
        "type": "leafNode",
        "value": 632700
    },
    {
        "name": "海西",
        "type": "leafNode",
        "value": 632800
    }, {
        "name": "银川",
        "type": "leafNode",
        "value": 640100
    },
    {
        "name": "石嘴山",
        "type": "leafNode",
        "value": 640200
    },
    {
        "name": "吴忠",
        "type": "leafNode",
        "value": 640300
    },
    {
        "name": "固原",
        "type": "leafNode",
        "value": 640400
    },
    {
        "name": "中卫",
        "type": "leafNode",
        "value": 640500
    }, {
        "name": "呼和浩特",
        "type": "leafNode",
        "value": 150100
    },
    {
        "name": "包头",
        "type": "leafNode",
        "value": 150200
    },
    {
        "name": "乌海",
        "type": "leafNode",
        "value": 150300
    },
    {
        "name": "赤峰",
        "type": "leafNode",
        "value": 150400
    },
    {
        "name": "通辽",
        "type": "leafNode",
        "value": 150500
    },
    {
        "name": "鄂尔多斯",
        "type": "leafNode",
        "value": 150600
    },
    {
        "name": "呼伦贝尔",
        "type": "leafNode",
        "value": 150700
    },
    {
        "name": "巴彦淖尔",
        "type": "leafNode",
        "value": 150800
    },
    {
        "name": "乌兰察布",
        "type": "leafNode",
        "value": 150900
    },
    {
        "name": "兴安",
        "type": "leafNode",
        "value": 152200
    },
    {
        "name": "锡林郭勒",
        "type": "leafNode",
        "value": 152500
    },
    {
        "name": "阿拉善",
        "type": "leafNode",
        "value": 152900
    }, {
        "name": "沈阳",
        "type": "leafNode",
        "value": 210100
    },
    {
        "name": "大连",
        "type": "leafNode",
        "value": 210200
    },
    {
        "name": "鞍山",
        "type": "leafNode",
        "value": 210300
    },
    {
        "name": "抚顺",
        "type": "leafNode",
        "value": 210400
    },
    {
        "name": "本溪",
        "type": "leafNode",
        "value": 210500
    },
    {
        "name": "丹东",
        "type": "leafNode",
        "value": 210600
    },
    {
        "name": "锦州",
        "type": "leafNode",
        "value": 210700
    },
    {
        "name": "营口",
        "type": "leafNode",
        "value": 210800
    },
    {
        "name": "阜新",
        "type": "leafNode",
        "value": 210900
    },
    {
        "name": "辽阳",
        "type": "leafNode",
        "value": 211000
    },
    {
        "name": "盘锦",
        "type": "leafNode",
        "value": 211100
    },
    {
        "name": "铁岭",
        "type": "leafNode",
        "value": 211200
    },
    {
        "name": "朝阳",
        "type": "leafNode",
        "value": 211300
    },
    {
        "name": "葫芦岛",
        "type": "leafNode",
        "value": 211400
    },
    {
        "name": "瓦房店",
        "type": "leafNode",
        "value": 211500
    },
    {
        "name": "海城",
        "type": "leafNode",
        "value": 211600
    }, {
        "name": "南昌",
        "type": "leafNode",
        "value": 360100
    },
    {
        "name": "景德镇",
        "type": "leafNode",
        "value": 360200
    },
    {
        "name": "萍乡",
        "type": "leafNode",
        "value": 360300
    },
    {
        "name": "九江",
        "type": "leafNode",
        "value": 360400
    },
    {
        "name": "新余",
        "type": "leafNode",
        "value": 360500
    },
    {
        "name": "鹰潭",
        "type": "leafNode",
        "value": 360600
    },
    {
        "name": "赣州",
        "type": "leafNode",
        "value": 360700
    },
    {
        "name": "吉安",
        "type": "leafNode",
        "value": 360800
    },
    {
        "name": "宜春",
        "type": "leafNode",
        "value": 360900
    },
    {
        "name": "抚州",
        "type": "leafNode",
        "value": 361000
    },
    {
        "name": "上饶",
        "type": "leafNode",
        "value": 361100
    },
    {
        "name": "庐山",
        "type": "leafNode",
        "value": 361200
    },
    {
        "name": "井冈山",
        "type": "leafNode",
        "value": 361300
    }, {
        "name": "南京",
        "type": "leafNode",
        "value": 320100
    },
    {
        "name": "无锡",
        "type": "leafNode",
        "value": 320200
    },
    {
        "name": "徐州",
        "type": "leafNode",
        "value": 320300
    },
    {
        "name": "常州",
        "type": "leafNode",
        "value": 320400
    },
    {
        "name": "苏州",
        "type": "leafNode",
        "value": 320500
    },
    {
        "name": "南通",
        "type": "leafNode",
        "value": 320600
    },
    {
        "name": "连云港",
        "type": "leafNode",
        "value": 320700
    },
    {
        "name": "淮安",
        "type": "leafNode",
        "value": 320800
    },
    {
        "name": "盐城",
        "type": "leafNode",
        "value": 320900
    },
    {
        "name": "扬州",
        "type": "leafNode",
        "value": 321000
    },
    {
        "name": "镇江",
        "type": "leafNode",
        "value": 321100
    },
    {
        "name": "泰州",
        "type": "leafNode",
        "value": 321200
    },
    {
        "name": "宿迁",
        "type": "leafNode",
        "value": 321300
    },
    {
        "name": "常熟",
        "type": "leafNode",
        "value": 321400
    },
    {
        "name": "昆山",
        "type": "leafNode",
        "value": 321500
    },
    {
        "name": "淮阴",
        "type": "leafNode",
        "value": 321600
    },
    {
        "name": "太仓",
        "type": "leafNode",
        "value": 321800
    },
    {
        "name": "吴江",
        "type": "leafNode",
        "value": 321900
    },
    {
        "name": "张家港",
        "type": "leafNode",
        "value": 322000
    },
    {
        "name": "江阴",
        "type": "leafNode",
        "value": 322100
    },
    {
        "name": "丹阳",
        "type": "leafNode",
        "value": 322200
    },
    {
        "name": "泰兴",
        "type": "leafNode",
        "value": 322300
    },
    {
        "name": "溧阳",
        "type": "leafNode",
        "value": 322400
    },
    {
        "name": "其他",
        "type": "leafNode",
        "value": 329900
    }, {
        "name": "长春",
        "type": "leafNode",
        "value": 220100
    },
    {
        "name": "吉林市",
        "type": "leafNode",
        "value": 220200
    },
    {
        "name": "四平",
        "type": "leafNode",
        "value": 220300
    },
    {
        "name": "辽源",
        "type": "leafNode",
        "value": 220400
    },
    {
        "name": "通化",
        "type": "leafNode",
        "value": 220500
    },
    {
        "name": "白山",
        "type": "leafNode",
        "value": 220600
    },
    {
        "name": "松原",
        "type": "leafNode",
        "value": 220700
    },
    {
        "name": "白城",
        "type": "leafNode",
        "value": 220800
    },
    {
        "name": "延边",
        "type": "leafNode",
        "value": 222400
    },
    {
        "name": "延吉",
        "type": "leafNode",
        "value": 222500
    },
    {
        "name": "梅河口",
        "type": "leafNode",
        "value": 222600
    },
    {
        "name": "公主岭",
        "type": "leafNode",
        "value": 222700
    }, {
        "name": "长沙",
        "type": "leafNode",
        "value": 430100
    },
    {
        "name": "株洲",
        "type": "leafNode",
        "value": 430200
    },
    {
        "name": "湘潭",
        "type": "leafNode",
        "value": 430300
    },
    {
        "name": "衡阳",
        "type": "leafNode",
        "value": 430400
    },
    {
        "name": "邵阳",
        "type": "leafNode",
        "value": 430500
    },
    {
        "name": "岳阳",
        "type": "leafNode",
        "value": 430600
    },
    {
        "name": "常德",
        "type": "leafNode",
        "value": 430700
    },
    {
        "name": "张家界",
        "type": "leafNode",
        "value": 430800
    },
    {
        "name": "益阳",
        "type": "leafNode",
        "value": 430900
    },
    {
        "name": "郴州",
        "type": "leafNode",
        "value": 431000
    },
    {
        "name": "永州",
        "type": "leafNode",
        "value": 431100
    },
    {
        "name": "怀化",
        "type": "leafNode",
        "value": 431200
    },
    {
        "name": "娄底",
        "type": "leafNode",
        "value": 431300
    },
    {
        "name": "湘西",
        "type": "leafNode",
        "value": 433100
    },
    {
        "name": "吉首",
        "type": "leafNode",
        "value": 433200
    },
    {
        "name": "绥宁",
        "type": "leafNode",
        "value": 433300
    }, {
        "name": "武汉",
        "type": "leafNode",
        "value": 420100
    },
    {
        "name": "黄石",
        "type": "leafNode",
        "value": 420200
    },
    {
        "name": "十堰",
        "type": "leafNode",
        "value": 420300
    },
    {
        "name": "宜昌",
        "type": "leafNode",
        "value": 420500
    },
    {
        "name": "襄阳",
        "type": "leafNode",
        "value": 420600
    },
    {
        "name": "鄂州",
        "type": "leafNode",
        "value": 420700
    },
    {
        "name": "荆门",
        "type": "leafNode",
        "value": 420800
    },
    {
        "name": "孝感",
        "type": "leafNode",
        "value": 420900
    },
    {
        "name": "荆州",
        "type": "leafNode",
        "value": 421000
    },
    {
        "name": "黄冈",
        "type": "leafNode",
        "value": 421100
    },
    {
        "name": "咸宁",
        "type": "leafNode",
        "value": 421200
    },
    {
        "name": "随州",
        "type": "leafNode",
        "value": 421300
    },
    {
        "name": "恩施",
        "type": "leafNode",
        "value": 422800
    },
    {
        "name": "仙桃",
        "type": "leafNode",
        "value": 422900
    },
    {
        "name": "潜江",
        "type": "leafNode",
        "value": 423000
    },
    {
        "name": "天门",
        "type": "leafNode",
        "value": 423100
    },
    {
        "name": "神农架",
        "type": "leafNode",
        "value": 423200
    },
    {
        "name": "其他",
        "type": "leafNode",
        "value": 423300
    }, {
        "name": "哈尔滨",
        "type": "leafNode",
        "value": 230100
    },
    {
        "name": "齐齐哈尔",
        "type": "leafNode",
        "value": 230200
    },
    {
        "name": "鸡西",
        "type": "leafNode",
        "value": 230300
    },
    {
        "name": "鹤岗",
        "type": "leafNode",
        "value": 230400
    },
    {
        "name": "双鸭山",
        "type": "leafNode",
        "value": 230500
    },
    {
        "name": "大庆",
        "type": "leafNode",
        "value": 230600
    },
    {
        "name": "伊春",
        "type": "leafNode",
        "value": 230700
    },
    {
        "name": "佳木斯",
        "type": "leafNode",
        "value": 230800
    },
    {
        "name": "七台河",
        "type": "leafNode",
        "value": 230900
    },
    {
        "name": "牡丹江",
        "type": "leafNode",
        "value": 231000
    },
    {
        "name": "黑河",
        "type": "leafNode",
        "value": 231100
    },
    {
        "name": "绥化",
        "type": "leafNode",
        "value": 231200
    },
    {
        "name": "大兴安岭",
        "type": "leafNode",
        "value": 232700
    },
    {
        "name": "加格达奇",
        "type": "leafNode",
        "value": 232900
    }, {
        "name": "郑州",
        "type": "leafNode",
        "value": 410100
    },
    {
        "name": "开封",
        "type": "leafNode",
        "value": 410200
    },
    {
        "name": "洛阳",
        "type": "leafNode",
        "value": 410300
    },
    {
        "name": "平顶山",
        "type": "leafNode",
        "value": 410400
    },
    {
        "name": "安阳",
        "type": "leafNode",
        "value": 410500
    },
    {
        "name": "鹤壁",
        "type": "leafNode",
        "value": 410600
    },
    {
        "name": "新乡",
        "type": "leafNode",
        "value": 410700
    },
    {
        "name": "焦作",
        "type": "leafNode",
        "value": 410800
    },
    {
        "name": "濮阳",
        "type": "leafNode",
        "value": 410900
    },
    {
        "name": "许昌",
        "type": "leafNode",
        "value": 411000
    },
    {
        "name": "漯河",
        "type": "leafNode",
        "value": 411100
    },
    {
        "name": "三门峡",
        "type": "leafNode",
        "value": 411200
    },
    {
        "name": "南阳",
        "type": "leafNode",
        "value": 411300
    },
    {
        "name": "商丘",
        "type": "leafNode",
        "value": 411400
    },
    {
        "name": "信阳",
        "type": "leafNode",
        "value": 411500
    },
    {
        "name": "周口",
        "type": "leafNode",
        "value": 411600
    },
    {
        "name": "驻马店",
        "type": "leafNode",
        "value": 411700
    },
    {
        "name": "济源",
        "type": "leafNode",
        "value": 419000
    }, {
        "name": "石家庄",
        "type": "leafNode",
        "value": 130100
    },
    {
        "name": "唐山",
        "type": "leafNode",
        "value": 130200
    },
    {
        "name": "秦皇岛",
        "type": "leafNode",
        "value": 130300
    },
    {
        "name": "邯郸",
        "type": "leafNode",
        "value": 130400
    },
    {
        "name": "邢台",
        "type": "leafNode",
        "value": 130500
    },
    {
        "name": "保定",
        "type": "leafNode",
        "value": 130600
    },
    {
        "name": "张家口",
        "type": "leafNode",
        "value": 130700
    },
    {
        "name": "承德",
        "type": "leafNode",
        "value": 130800
    },
    {
        "name": "沧州",
        "type": "leafNode",
        "value": 130900
    },
    {
        "name": "廊坊",
        "type": "leafNode",
        "value": 131000
    },
    {
        "name": "衡水",
        "type": "leafNode",
        "value": 131100
    },
    {
        "name": "辛集",
        "type": "leafNode",
        "value": 131200
    },
    {
        "name": "北戴河",
        "type": "leafNode",
        "value": 131300
    },
    {
        "name": "涿州",
        "type": "leafNode",
        "value": 131400
    }, {
        "name": "海口",
        "type": "leafNode",
        "value": 460100
    },
    {
        "name": "三亚",
        "type": "leafNode",
        "value": 460200
    },
    {
        "name": "五指山",
        "type": "leafNode",
        "value": 460300
    },
    {
        "name": "琼海",
        "type": "leafNode",
        "value": 460400
    },
    {
        "name": "儋州",
        "type": "leafNode",
        "value": 460500
    },
    {
        "name": "文昌",
        "type": "leafNode",
        "value": 469100
    },
    {
        "name": "万宁",
        "type": "leafNode",
        "value": 469200
    },
    {
        "name": "东方",
        "type": "leafNode",
        "value": 469300
    }, {
        "name": "贵阳",
        "type": "leafNode",
        "value": 520100
    },
    {
        "name": "六盘水",
        "type": "leafNode",
        "value": 520200
    },
    {
        "name": "遵义",
        "type": "leafNode",
        "value": 520300
    },
    {
        "name": "安顺",
        "type": "leafNode",
        "value": 520400
    },
    {
        "name": "铜仁",
        "type": "leafNode",
        "value": 522200
    },
    {
        "name": "黔西南",
        "type": "leafNode",
        "value": 522300
    },
    {
        "name": "毕节",
        "type": "leafNode",
        "value": 522400
    },
    {
        "name": "黔东南",
        "type": "leafNode",
        "value": 522600
    },
    {
        "name": "黔南",
        "type": "leafNode",
        "value": 522700
    },
    {
        "name": "都匀",
        "type": "leafNode",
        "value": 522800
    },
    {
        "name": "兴义",
        "type": "leafNode",
        "value": 522900
    },
    {
        "name": "凯里",
        "type": "leafNode",
        "value": 523000
    }, {
        "name": "南宁",
        "type": "leafNode",
        "value": 450100
    },
    {
        "name": "柳州",
        "type": "leafNode",
        "value": 450200
    },
    {
        "name": "桂林",
        "type": "leafNode",
        "value": 450300
    },
    {
        "name": "梧州",
        "type": "leafNode",
        "value": 450400
    },
    {
        "name": "北海",
        "type": "leafNode",
        "value": 450500
    },
    {
        "name": "防城港",
        "type": "leafNode",
        "value": 450600
    },
    {
        "name": "钦州",
        "type": "leafNode",
        "value": 450700
    },
    {
        "name": "贵港",
        "type": "leafNode",
        "value": 450800
    },
    {
        "name": "玉林",
        "type": "leafNode",
        "value": 450900
    },
    {
        "name": "百色",
        "type": "leafNode",
        "value": 451000
    },
    {
        "name": "贺州",
        "type": "leafNode",
        "value": 451100
    },
    {
        "name": "河池",
        "type": "leafNode",
        "value": 451200
    },
    {
        "name": "来宾",
        "type": "leafNode",
        "value": 451300
    },
    {
        "name": "崇左",
        "type": "leafNode",
        "value": 451400
    }, {
        "name": "广州",
        "type": "leafNode",
        "value": 440100
    },
    {
        "name": "韶关",
        "type": "leafNode",
        "value": 440200
    },
    {
        "name": "深圳",
        "type": "leafNode",
        "value": 440300
    },
    {
        "name": "珠海",
        "type": "leafNode",
        "value": 440400
    },
    {
        "name": "汕头",
        "type": "leafNode",
        "value": 440500
    },
    {
        "name": "佛山",
        "type": "leafNode",
        "value": 440600
    },
    {
        "name": "江门",
        "type": "leafNode",
        "value": 440700
    },
    {
        "name": "湛江",
        "type": "leafNode",
        "value": 440800
    },
    {
        "name": "茂名",
        "type": "leafNode",
        "value": 440900
    },
    {
        "name": "肇庆",
        "type": "leafNode",
        "value": 441200
    },
    {
        "name": "惠州",
        "type": "leafNode",
        "value": 441300
    },
    {
        "name": "梅州",
        "type": "leafNode",
        "value": 441400
    },
    {
        "name": "汕尾",
        "type": "leafNode",
        "value": 441500
    },
    {
        "name": "河源",
        "type": "leafNode",
        "value": 441600
    },
    {
        "name": "阳江",
        "type": "leafNode",
        "value": 441700
    },
    {
        "name": "清远",
        "type": "leafNode",
        "value": 441800
    },
    {
        "name": "东莞",
        "type": "leafNode",
        "value": 441900
    },
    {
        "name": "中山",
        "type": "leafNode",
        "value": 442000
    },
    {
        "name": "潮州",
        "type": "leafNode",
        "value": 445100
    },
    {
        "name": "揭阳",
        "type": "leafNode",
        "value": 445200
    },
    {
        "name": "云浮",
        "type": "leafNode",
        "value": 445300
    },
    {
        "name": "顺德",
        "type": "leafNode",
        "value": 445400
    },
    {
        "name": "从化",
        "type": "leafNode",
        "value": 445500
    },
    {
        "name": "开平",
        "type": "leafNode",
        "value": 445600
    },
    {
        "name": "南海",
        "type": "leafNode",
        "value": 445700
    },
    {
        "name": "新会",
        "type": "leafNode",
        "value": 445800
    },
    {
        "name": "增城",
        "type": "leafNode",
        "value": 445900
    },
    {
        "name": "其他",
        "type": "leafNode",
        "value": 446000
    }, {
        "name": "兰州",
        "type": "leafNode",
        "value": 620100
    },
    {
        "name": "嘉峪关",
        "type": "leafNode",
        "value": 620200
    },
    {
        "name": "金昌",
        "type": "leafNode",
        "value": 620300
    },
    {
        "name": "白银",
        "type": "leafNode",
        "value": 620400
    },
    {
        "name": "天水",
        "type": "leafNode",
        "value": 620500
    },
    {
        "name": "武威",
        "type": "leafNode",
        "value": 620600
    },
    {
        "name": "张掖",
        "type": "leafNode",
        "value": 620700
    },
    {
        "name": "平凉",
        "type": "leafNode",
        "value": 620800
    },
    {
        "name": "酒泉",
        "type": "leafNode",
        "value": 620900
    },
    {
        "name": "庆阳",
        "type": "leafNode",
        "value": 621000
    },
    {
        "name": "定西",
        "type": "leafNode",
        "value": 621100
    },
    {
        "name": "陇南",
        "type": "leafNode",
        "value": 621200
    },
    {
        "name": "临夏",
        "type": "leafNode",
        "value": 622900
    },
    {
        "name": "甘南",
        "type": "leafNode",
        "value": 623000
    }, {
        "name": "合肥",
        "type": "leafNode",
        "value": 340100
    }, {
        "name": "芜湖",
        "type": "leafNode",
        "value": 340200
    },
    {
        "name": "蚌埠",
        "type": "leafNode",
        "value": 340300
    },
    {
        "name": "淮南",
        "type": "leafNode",
        "value": 340400
    },
    {
        "name": "马鞍山",
        "type": "leafNode",
        "value": 340500
    },
    {
        "name": "淮北",
        "type": "leafNode",
        "value": 340600
    },
    {
        "name": "铜陵",
        "type": "leafNode",
        "value": 340700
    },
    {
        "name": "安庆",
        "type": "leafNode",
        "value": 340800
    },
    {
        "name": "黄山",
        "type": "leafNode",
        "value": 341000
    },
    {
        "name": "滁州",
        "type": "leafNode",
        "value": 341100
    },
    {
        "name": "阜阳",
        "type": "leafNode",
        "value": 341200
    },
    {
        "name": "宿州",
        "type": "leafNode",
        "value": 341300
    },
    {
        "name": "巢湖",
        "type": "leafNode",
        "value": 341400
    },
    {
        "name": "六安",
        "type": "leafNode",
        "value": 341500
    },
    {
        "name": "亳州",
        "type": "leafNode",
        "value": 341600
    },
    {
        "name": "池州",
        "type": "leafNode",
        "value": 341700
    },
    {
        "name": "宣城",
        "type": "leafNode",
        "value": 341800
    },
    {
        "name": "宁国",
        "type": "leafNode",
        "value": 341900
    }, {
        "name": "福州",
        "type": "leafNode",
        "value": 350100
    },
    {
        "name": "厦门",
        "type": "leafNode",
        "value": 350200
    },
    {
        "name": "莆田",
        "type": "leafNode",
        "value": 350300
    },
    {
        "name": "三明",
        "type": "leafNode",
        "value": 350400
    },
    {
        "name": "泉州",
        "type": "leafNode",
        "value": 350500
    },
    {
        "name": "漳州",
        "type": "leafNode",
        "value": 350600
    },
    {
        "name": "南平",
        "type": "leafNode",
        "value": 350700
    },
    {
        "name": "龙岩",
        "type": "leafNode",
        "value": 350800
    },
    {
        "name": "宁德",
        "type": "leafNode",
        "value": 350900
    },
    {
        "name": "石狮",
        "type": "leafNode",
        "value": 351000
    }];

//==============================地区
/*request('http://192.168.3.99:9000/api/Home/Area', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    let code = []
    let name = []
    Object.keys(cityList).forEach(v=>{
        code.push(cityList[v].value)
        name.push(cityList[v].name)
    })
    nextCity.forEach(v=>{
        code.push(v.value)
        name.push(v.name)
    })
    let data = body.result
    // console.log(code.length, name)
    let ret = {}
    data.forEach(v => {
        let _name = v.name.replace(/[省市]/,'')
        if(name.indexOf(_name)>-1){
            ret[v.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
        }
        if(v.list.length>0){
            v.list.forEach(v2=>{
                let _name = v2.name.replace(/[市]/,'')
                if(name.indexOf(_name)>-1){
                    ret[v2.id] = name[name.indexOf(_name)] + '|' + code[name.indexOf(_name)]
                }
            })
        }
    })
    console.log("\n转换成功：", Object.keys(ret).length, "\n待转换：", code.length)
    fs.writeFile('./jsonDajie/cities.json', JSON.stringify(ret), err=>console.log(err))
})*/
// 转换成功： 335
// 待转换： 432

//================================职能
request('http://192.168.3.99:9000/api/Home/Position', {json: true},  (err, res, body) => {
    if(err) return console.log(err)
    let citys = position_data
    // console.log(citys)
    let code = []
    let name = []
    let data = body.result
    citys.forEach(v=>{
        v.level2.forEach(v2=>{
            v2.level3.forEach(v3=>{
                code.push(v3.id)
                name.push(v3.name)
            })
        })
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
    let tmp = {
        '003004': '渠道/分销专员/助理|110102',
        '002012': '大客户销售|110105',
        '003007': '大客户销售|110105',
        '003016': '招商专员/助理|110113',
        '021006': '房地产销售/中介|110114',
        '021007': '房地产销售/中介|110114',
        '021010': '房地产销售/中介|110114',
        '021008': '房地产销售/中介|110114',
        '026015': '保险销售|110115',
        '038005': '医药/医疗器械销售|110116'
    }
    let newObj = {...tmp, ...ret}
    console.log("\n转换成功：", Object.keys(newObj).length, "\n待转换：", code.length)
    fs.writeFile('./jsonDajie/position.json', JSON.stringify(newObj), err=>console.log(err))
})
// 转换成功： 352
// 待转换： 732



