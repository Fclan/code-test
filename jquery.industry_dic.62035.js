const industry_dic_json = [{
        id: 3100,
        name: "IT/互联网/游戏",
        items: [{id: 3101, name: "互联网/移动互联网/电子商务"}, {id: 3102, name: "网络游戏"}, {id: 3103, name: "互联网金融"}, {
            id: 3104,
            name: "计算机软件"
        }, {id: 3105, name: "IT服务/系统集成"}]
    }, {
        id: 3200,
        name: "电子/通信/硬件",
        items: [{id: 3201, name: "电子技术/半导体/集成电路"}, {id: 3202, name: "通信(设备/运营/增值)"}, {id: 3203, name: "计算机硬件/网络设备"}]
    }, {
        id: 3300,
        name: "金融",
        items: [{id: 3301, name: "银行"}, {id: 3302, name: "保险"}, {id: 3303, name: "基金/证券/期货/投资"}, {
            id: 3304,
            name: "会计/审计"
        }, {id: 3305, name: "信托/担保/拍卖/典当"}]
    }, {
        id: 3400,
        name: "房地产/建筑",
        items: [{id: 3401, name: "房地产/建筑/建材/工程"}, {id: 3402, name: "规划/设计/装饰装潢"}, {id: 3403, name: "房地产服务(物业管理/地产经纪)"}]
    }, {
        id: 3500,
        name: "消费品",
        items: [{id: 3501, name: "食品/饮料/烟酒/日化"}, {id: 3502, name: "百货/批发/零售"}, {
            id: 3503,
            name: "服装服饰/纺织/皮革"
        }, {id: 3504, name: "家具/家电"}, {id: 3505, name: "办公用品及设备"}, {id: 3506, name: "奢侈品/收藏品"}, {
            id: 3507,
            name: "工艺品/珠宝/玩具"
        }]
    }, {
        id: 3600,
        name: "汽车/机械/制造",
        items: [{id: 3601, name: "汽车/摩托车"}, {id: 3602, name: "机械制造/机电/重工"}, {id: 3603, name: "印刷/包装/造纸"}, {
            id: 3604,
            name: "加工制造(原料加工/模具)"
        }, {id: 3605, name: "仪器/仪表/工业自动化/电气"}]
    }, {
        id: 3700,
        name: "商业服务/生活服务",
        items: [{id: 3701, name: "专业服务(人力/咨询/法律/翻译)"}, {id: 3702, name: "中介服务"}, {id: 3703, name: "外包服务"}, {
            id: 3704,
            name: "检验/检测/认证"
        }, {id: 3705, name: "租赁服务"}, {id: 3706, name: "旅游/酒店/餐饮/生活服务"}, {id: 3707, name: "娱乐/休闲/体育"}]
    }, {
        id: 3800,
        name: "广告/传媒/教育/文化",
        items: [{id: 3801, name: "广告/公关/市场推广/会展"}, {id: 3802, name: "影视/媒体/艺术/文化/出版"}, {
            id: 3803,
            name: "教育/培训/学术/科研/院校"
        }]
    }, {
        id: 3900,
        name: "交通/贸易/物流",
        items: [{id: 3901, name: "交通/运输/物流/仓储"}, {id: 3902, name: "贸易/进出口"}, {id: 3903, name: "航空/航天"}]
    }, {
        id: 4000,
        name: "制药/医疗",
        items: [{id: 4001, name: "制药/生物工程"}, {id: 4002, name: "医疗/保健/美容/卫生服务"}, {id: 4003, name: "医疗设备/器械"}]
    }, {
        id: 4100,
        name: "能源/化工/环保",
        items: [{id: 4101, name: "电气/电力/水利"}, {id: 4102, name: "石油/石化/化工"}, {id: 4103, name: "采掘/冶炼/矿产"}, {
            id: 4104,
            name: "新能源"
        }, {id: 4105, name: "环保"}]
    }, {
        id: 4200,
        name: "政府/农林牧渔/多元化",
        items: [{id: 4201, name: "政府/公共事业/非营利机构"}, {id: 4202, name: "农/林/牧/渔"}, {id: 4203, name: "多元化集团公司"}, {
            id: 4204,
            name: "其他"
        }]
    }]
const industry_lp_json = {
    "040": [
        "互联网/移动互联网/电子商务",
        "Internet/Mobile Internet/E-Business"
    ],
    "420": [
        "网络游戏",
        "Online Game"
    ],
    "010": [
        "计算机软件",
        "Computer Software"
    ],
    "030": [
        "IT服务/系统集成",
        "IT Services/Systems Integration"
    ],
    "050": [
        "电子技术/半导体/集成电路",
        "Electronics/Microelectronics"
    ],
    "060": [
        "通信(设备/运营/增值)",
        "Communications (Equipment/Sales/Value-Added)"
    ],
    "020": [
        "计算机硬件/网络设备",
        "Computer Hardware/Network Equipment"
    ],
    "080": [
        "房地产开发/建筑/建材/工程",
        "Real Estate Development/Architectural Services/Building Materials/Construction"
    ],
    "100": [
        "规划/设计/装潢",
        "Construction Planning/Interior Design/Decoration"
    ],
    "090": [
        "房地产服务(物业管理/地产经纪)",
        "Real Estate Services"
    ],
    "130": [
        "银行",
        "Banking"
    ],
    "140": [
        "保险",
        "Insurance"
    ],
    "150": [
        "基金/证券/期货/投资",
        "Securities/Futures/Investment Funds"
    ],
    "430": [
        "会计/审计",
        "Accounting/Auditing"
    ],
    "500": [
        "信托/担保/拍卖/典当",
        "Trust/Guarantee/Auction/Pawn Business"
    ],
    "190": [
        "食品/饮料/烟酒/日化",
        "Food/Drink/Wine/Commodity"
    ],
    "240": [
        "百货/批发/零售",
        "General Merchandise/Wholesale/Retail"
    ],
    "200": [
        "服装服饰/纺织/皮革",
        "Clothing/Textiles/Furniture"
    ],
    "210": [
        "家具/家电",
        "Furniture/Home Appliances"
    ],
    "220": [
        "办公用品及设备",
        "Office Equipment/Supplies"
    ],
    "460": [
        "奢侈品/收藏品",
        "Luxury/Collection"
    ],
    "470": [
        "工艺品/珠宝/玩具",
        "Arts & Craft/Toys/Jewelry"
    ],
    "350": [
        "汽车/摩托车",
        "Automobiles/Motorcycles"
    ],
    "360": [
        "机械制造/机电/重工",
        "Machine Manufacturing/Heavy Electrical"
    ],
    "180": [
        "印刷/包装/造纸",
        "Printing/Packaging/Papermaking"
    ],
    "370": [
        "原材料及加工",
        "Raw Materials Processing"
    ],
    "340": [
        "仪器/仪表/工业自动化/电气",
        "Instrumentation/Industrial Automation/Electrical"
    ],
    "120": [
        "专业服务(咨询/财会/法律/翻译等)",
        "Professional Services (Consult/Accounting/Legal/Translate)"
    ],
    "110": [
        "中介服务",
        "Intermediate Services"
    ],
    "440": [
        "外包服务",
        "Outsourcing Services"
    ],
    "450": [
        "检测/认证",
        "Testing/Certification"
    ],
    "230": [
        "旅游/酒店/餐饮服务/生活服务",
        "Tourism/Hospitality/Restaurant & Food Services/Personal Care & Services"
    ],
    "260": [
        "娱乐/休闲/体育",
        "Entertainment/Leisure/Sports & Fitness"
    ],
    "510": [
        "租赁服务",
        "Leasing Service"
    ],
    "070": [
        "广告/公关/市场推广/会展",
        "Advertising/Public Relations/Marketing/Exhibitions"
    ],
    "170": [
        "影视/媒体/艺术/文化/出版",
        "Film & Television/Media/Arts/Communication"
    ],
    "380": [
        "教育/培训/学术/科研/院校",
        "Education/Training/Science/Research/Universities and Colleges"
    ],
    "250": [
        "交通/物流/运输",
        "Transportation/Shipping/Logistics"
    ],
    "160": [
        "贸易/进出口",
        "Trade/Import-Export"
    ],
    "480": [
        "航空/航天",
        "Aerospace/Aviation/Airlines"
    ],
    "270": [
        "制药/生物工程",
        "Pharmaceuticals/Biotechnology"
    ],
    "280": [
        "医疗/保健/美容/卫生服务",
        "Medical/Health and Beauty Services"
    ],
    "290": [
        "医疗设备/器械",
        "Medical Equipment/Devices"
    ],
    "330": [
        "能源(电力/水利)",
        "Energy (Electricity/Water Conservation)"
    ],
    "310": [
        "石油/石化/化工",
        "Rock oil/Chemical Industry"
    ],
    "320": [
        "采掘/冶炼/矿产",
        "Mining/Metallurgy"
    ],
    "300": [
        "环保",
        "Environmental Protection"
    ],
    "490": [
        "新能源",
        "New Energy"
    ],
    "390": [
        "政府/公共事业/非营利机构",
        "Government/public service/Non-Profit"
    ],
    "410": [
        "农/林/牧/渔",
        "Farming/Forestry/Animal Husbandry and Fishery"
    ],
    "400": [
        "其他",
        "Other"
    ]
};
module.exports = {industry_dic_json,industry_lp_json}
