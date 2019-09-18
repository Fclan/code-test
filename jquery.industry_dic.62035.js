const industry_dic_json = [{
    id: 3100,
    name: "IT/互联网/游戏",
    items: [{ id: 3101, name: "互联网/移动互联网/电子商务" }, { id: 3102, name: "网络游戏" }, { id: 3103, name: "互联网金融" }, {
        id: 3104,
        name: "计算机软件"
    }, { id: 3105, name: "IT服务/系统集成" }]
}, {
    id: 3200,
    name: "电子/通信/硬件",
    items: [{ id: 3201, name: "电子技术/半导体/集成电路" }, { id: 3202, name: "通信(设备/运营/增值)" }, { id: 3203, name: "计算机硬件/网络设备" }]
}, {
    id: 3300,
    name: "金融",
    items: [{ id: 3301, name: "银行" }, { id: 3302, name: "保险" }, { id: 3303, name: "基金/证券/期货/投资" }, {
        id: 3304,
        name: "会计/审计"
    }, { id: 3305, name: "信托/担保/拍卖/典当" }]
}, {
    id: 3400,
    name: "房地产/建筑",
    items: [{ id: 3401, name: "房地产/建筑/建材/工程" }, { id: 3402, name: "规划/设计/装饰装潢" }, { id: 3403, name: "房地产服务(物业管理/地产经纪)" }]
}, {
    id: 3500,
    name: "消费品",
    items: [{ id: 3501, name: "食品/饮料/烟酒/日化" }, { id: 3502, name: "百货/批发/零售" }, {
        id: 3503,
        name: "服装服饰/纺织/皮革"
    }, { id: 3504, name: "家具/家电" }, { id: 3505, name: "办公用品及设备" }, { id: 3506, name: "奢侈品/收藏品" }, {
        id: 3507,
        name: "工艺品/珠宝/玩具"
    }]
}, {
    id: 3600,
    name: "汽车/机械/制造",
    items: [{ id: 3601, name: "汽车/摩托车" }, { id: 3602, name: "机械制造/机电/重工" }, { id: 3603, name: "印刷/包装/造纸" }, {
        id: 3604,
        name: "加工制造(原料加工/模具)"
    }, { id: 3605, name: "仪器/仪表/工业自动化/电气" }]
}, {
    id: 3700,
    name: "商业服务/生活服务",
    items: [{ id: 3701, name: "专业服务(人力/咨询/法律/翻译)" }, { id: 3702, name: "中介服务" }, { id: 3703, name: "外包服务" }, {
        id: 3704,
        name: "检验/检测/认证"
    }, { id: 3705, name: "租赁服务" }, { id: 3706, name: "旅游/酒店/餐饮/生活服务" }, { id: 3707, name: "娱乐/休闲/体育" }]
}, {
    id: 3800,
    name: "广告/传媒/教育/文化",
    items: [{ id: 3801, name: "广告/公关/市场推广/会展" }, { id: 3802, name: "影视/媒体/艺术/文化/出版" }, {
        id: 3803,
        name: "教育/培训/学术/科研/院校"
    }]
}, {
    id: 3900,
    name: "交通/贸易/物流",
    items: [{ id: 3901, name: "交通/运输/物流/仓储" }, { id: 3902, name: "贸易/进出口" }, { id: 3903, name: "航空/航天" }]
}, {
    id: 4000,
    name: "制药/医疗",
    items: [{ id: 4001, name: "制药/生物工程" }, { id: 4002, name: "医疗/保健/美容/卫生服务" }, { id: 4003, name: "医疗设备/器械" }]
}, {
    id: 4100,
    name: "能源/化工/环保",
    items: [{ id: 4101, name: "电气/电力/水利" }, { id: 4102, name: "石油/石化/化工" }, { id: 4103, name: "采掘/冶炼/矿产" }, {
        id: 4104,
        name: "新能源"
    }, { id: 4105, name: "环保" }]
}, {
    id: 4200,
    name: "政府/农林牧渔/多元化",
    items: [{ id: 4201, name: "政府/公共事业/非营利机构" }, { id: 4202, name: "农/林/牧/渔" }, { id: 4203, name: "多元化集团公司" }, {
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
const industry_zp_json = [
    [
        "100000000",
        "0",
        "互联网/IT/电子/通信",
        "Information"
    ],
    [
        "200000000",
        "0",
        "房地产",
        "Real Estate"
    ],
    [
        "300000000",
        "0",
        "金融业",
        "Finance"
    ],
    [
        "400000000",
        "0",
        "建筑业",
        "Construction"
    ],
    [
        "500000000",
        "0",
        "制造业",
        "Manufacturing"
    ],
    [
        "600000000",
        "0",
        "农林牧渔",
        "Agriculture, Forestry & Fishing"
    ],
    [
        "700000000",
        "0",
        "批发/零售/贸易",
        "Wholesale & Retail Trade"
    ],
    [
        "800000000",
        "0",
        "专业服务",
        "Professional Services"
    ],
    [
        "900000000",
        "0",
        "文化/体育/娱乐",
        "Arts, Entertainment, & Recreation"
    ],
    [
        "1000000000",
        "0",
        "交通运输/仓储/物流",
        "Transportation & Warehousing"
    ],
    [
        "1100000000",
        "0",
        "能源/环保/矿产",
        "Mining, Quarrying, & Environmental Protection"
    ],
    [
        "1200000000",
        "0",
        "教育培训/科研",
        "Educational & Scientific Research"
    ],
    [
        "1300000000",
        "0",
        "卫生及社会工作",
        "Health Care & Social Assistance"
    ],
    [
        "1400000000",
        "0",
        "公共管理/社会保障",
        "Government & Non-Profit Organizations"
    ],
    [
        "1500000000",
        "0",
        "生活服务",
        "Residential Services"
    ],
    [
        "100010000",
        "100000000",
        "电子/半导体/集成电路",
        "Electronics/Semiconductor/IC"
    ],
    [
        "200010000",
        "200000000",
        "房地产开发与经营",
        "Real Estate Development"
    ],
    [
        "300010000",
        "300000000",
        "保险业",
        "Insurance"
    ],
    [
        "400010000",
        "400000000",
        "房屋建筑/建筑设备安装",
        "Construction & Installation of buildings"
    ],
    [
        "500010000",
        "500000000",
        "船舶/航空/航天/火车制造",
        "Manufacture of Other Transport Equipment"
    ],
    [
        "600010000",
        "600000000",
        "农林牧渔",
        "Agriculture, Forestry & Fishing"
    ],
    [
        "700010000",
        "700000000",
        "快速消费品",
        "Fast Moving Consumer Goods"
    ],
    [
        "800010000",
        "800000000",
        "财务/审计/税务",
        "Accounting/Auditing/Tax"
    ],
    [
        "900010000",
        "900000000",
        "广播/电视/电影/录音制作",
        "Broadcast/TV/film/recording production"
    ],
    [
        "1000010000",
        "1000000000",
        "火车站/港口/汽车站/路政",
        "L& Transportation for Passengers"
    ],
    [
        "1100010000",
        "1100000000",
        "电力/水利/热力/燃气",
        "Electricity/Water Supply/Gas/Heating"
    ],
    [
        "1200010000",
        "1200000000",
        "科学技术推广服务业",
        "Science & Technology Promotion Services"
    ],
    [
        "1300010000",
        "1300000000",
        "卫生服务",
        "Health care"
    ],
    [
        "1400010000",
        "1400000000",
        "国家机构",
        "Government"
    ],
    [
        "1500010000",
        "1500000000",
        "餐饮业",
        "Food & Beverage Services"
    ],
    [
        "100020000",
        "100000000",
        "电子商务",
        "E-commerce"
    ],
    [
        "200020000",
        "200000000",
        "房地产中介",
        "Real Estate Agency & Leasing"
    ],
    [
        "300020000",
        "300000000",
        "典当",
        "Pawn"
    ],
    [
        "400020000",
        "400000000",
        "公共建筑装饰装修",
        "Decoration of Non-residential Buildings"
    ],
    [
        "500020000",
        "500000000",
        "电气机械/器材制造",
        "Manufacture of Electrical Equipment"
    ],
    [
        "700020000",
        "700000000",
        "贸易/进出口代理/拍卖",
        "Trading & Related Services"
    ],
    [
        "800020000",
        "800000000",
        "法律服务",
        "Legal Services"
    ],
    [
        "900020000",
        "900000000",
        "体育",
        "Sports"
    ],
    [
        "1000020000",
        "1000000000",
        "货运/物流仓储",
        "Freight/Logistics & Warehousing"
    ],
    [
        "1100020000",
        "1100000000",
        "环保",
        "Environmental Protection"
    ],
    [
        "1200020000",
        "1200000000",
        "培训/课外教育/教育辅助",
        "Training/After School Education"
    ],
    [
        "1300020000",
        "1300000000",
        "养老/孤儿/看护等社会服务",
        "Social Assistance"
    ],
    [
        "1400020000",
        "1400000000",
        "社团/组织/社会保障",
        "Non-profit Organizations"
    ],
    [
        "1500020000",
        "1500000000",
        "酒店/民宿",
        "Accommodation"
    ],
    [
        "100030000",
        "100000000",
        "互联网",
        "Internet"
    ],
    [
        "300030000",
        "300000000",
        "互联网金融/小额贷款",
        "Internet Finance"
    ],
    [
        "400030000",
        "400000000",
        "土木工程建筑",
        "Civil engineering"
    ],
    [
        "500030000",
        "500000000",
        "电子设备制造",
        "Manufacture of Electronic Products"
    ],
    [
        "700030000",
        "700000000",
        "耐用消费品",
        "Durable Goods"
    ],
    [
        "800030000",
        "800000000",
        "工程技术与设计服务",
        "Engineering & Related Technical Services"
    ],
    [
        "900030000",
        "900000000",
        "文化艺术/娱乐",
        "Arts/Entertainment"
    ],
    [
        "1000030000",
        "1000000000",
        "民航/铁路/公路/水路客运",
        "Air & Water Transportation for Passengers"
    ],
    [
        "1100030000",
        "1100000000",
        "矿产/采掘",
        "Mining"
    ],
    [
        "1200030000",
        "1200000000",
        "学术/科研",
        "Research & experimental development"
    ],
    [
        "1300030000",
        "1300000000",
        "医院",
        "Hospitals"
    ],
    [
        "1500030000",
        "1500000000",
        "居民服务",
        "Personal Care & Services"
    ],
    [
        "100040000",
        "100000000",
        "IT服务",
        "IT Services"
    ],
    [
        "200040000",
        "200000000",
        "土地与公共设施管理",
        "Management of L& & Public Properties"
    ],
    [
        "300040000",
        "300000000",
        "基金/风投",
        "Funds/Venture Capital"
    ],
    [
        "400040000",
        "400000000",
        "住宅装饰装修",
        "Decoration of Residential Buildings"
    ],
    [
        "500040000",
        "500000000",
        "纺织业/服饰产品加工制造",
        "Manufacture of Textiles & Wearing Apparel"
    ],
    [
        "700040000",
        "700000000",
        "零售/批发",
        "Retail/Wholesale"
    ],
    [
        "800040000",
        "800000000",
        "广告业",
        "Advertising"
    ],
    [
        "900040000",
        "900000000",
        "新闻/出版",
        "News/Publishing"
    ],
    [
        "1000040000",
        "1000000000",
        "邮政/快递",
        "Postal & Express Services"
    ],
    [
        "1100040000",
        "1100000000",
        "石油/石化",
        "Petroleum & Petrochemical"
    ],
    [
        "1200040000",
        "1200000000",
        "学校教育",
        "School Education"
    ],
    [
        "1500040000",
        "1500000000",
        "旅游业",
        "Tourism"
    ],
    [
        "100050000",
        "100000000",
        "计算机软件",
        "Computer Software"
    ],
    [
        "200050000",
        "200000000",
        "物业服务",
        "Property Services"
    ],
    [
        "300050000",
        "300000000",
        "汽车金融服务",
        "Auto Finance"
    ],
    [
        "500050000",
        "500000000",
        "非金属矿物制品业",
        "Manufacture of Non-metallic Mineral Products"
    ],
    [
        "800050000",
        "800000000",
        "会议/展览服务",
        "Exhibition Services"
    ],
    [
        "1100050000",
        "1100000000",
        "新能源",
        "Clean Energy"
    ],
    [
        "100060000",
        "100000000",
        "计算机硬件",
        "Computer Hardware"
    ],
    [
        "300060000",
        "300000000",
        "信托投资",
        "Trust"
    ],
    [
        "500060000",
        "500000000",
        "钢铁和有色金属冶炼及加工",
        "Metallurgy"
    ],
    [
        "800060000",
        "800000000",
        "检测/认证",
        "Testing/Certification"
    ],
    [
        "100070000",
        "100000000",
        "企业服务",
        "Corporate Services"
    ],
    [
        "300070000",
        "300000000",
        "银行",
        "Bank"
    ],
    [
        "500070000",
        "500000000",
        "化学纤维制造业",
        "Manufacture of Chemical Fiber"
    ],
    [
        "800070000",
        "800000000",
        "景区/商业/市场等综合管理",
        "Public Property Management"
    ],
    [
        "100080000",
        "100000000",
        "人工智能",
        "AI/Artificial Intelligence"
    ],
    [
        "300080000",
        "300000000",
        "证券/期货",
        "Securities & Futures"
    ],
    [
        "500080000",
        "500000000",
        "化学原料/化学制品",
        "Manufacture of Chemicals & Chemical Products"
    ],
    [
        "800080000",
        "800000000",
        "人力资源服务",
        "Human Resources"
    ],
    [
        "100090000",
        "100000000",
        "通信/网络设备",
        "Telecom & Network Equipment"
    ],
    [
        "500090000",
        "500000000",
        "金属制品业",
        "Manufacture of Metallic Mineral Products"
    ],
    [
        "800090000",
        "800000000",
        "商业代理服务",
        "Agency Services"
    ],
    [
        "100100000",
        "100000000",
        "网络/信息安全",
        "Network/Information Security"
    ],
    [
        "500100000",
        "500000000",
        "农副产品加工制造",
        "Agricultural Processing"
    ],
    [
        "800100000",
        "800000000",
        "专利/商标/知识产权",
        "Patents/Trademarks/Copyrights"
    ],
    [
        "100110000",
        "100000000",
        "新媒体",
        "New Media"
    ],
    [
        "500110000",
        "500000000",
        "汽车制造",
        "Automobile Manufacturing"
    ],
    [
        "800110000",
        "800000000",
        "专业技术服务",
        "Technique Services"
    ],
    [
        "100120000",
        "100000000",
        "游戏",
        "Game"
    ],
    [
        "500120000",
        "500000000",
        "燃料资源加工制造",
        "Fuel Manufacturing & Processing"
    ],
    [
        "800120000",
        "800000000",
        "咨询服务",
        "Consultancy"
    ],
    [
        "100130000",
        "100000000",
        "云计算/大数据",
        "Cloud Computing/Big Data"
    ],
    [
        "500130000",
        "500000000",
        "日化产品制造",
        "Manufacture of Household Chemical Products"
    ],
    [
        "800130000",
        "800000000",
        "租赁服务",
        "Leasing Services"
    ],
    [
        "100140000",
        "100000000",
        "运营商/增值服务",
        "Telecom Operators/Service Providers"
    ],
    [
        "500140000",
        "500000000",
        "通用设备制造",
        "Manufacture of General-purpose Machinery"
    ],
    [
        "500150000",
        "500000000",
        "橡胶和塑料制品",
        "Manufacture of Rubber & Plastic Products"
    ],
    [
        "500170000",
        "500000000",
        "医药制造",
        "Manufacture of Pharmaceutical Products"
    ],
    [
        "500180000",
        "500000000",
        "仪器仪表制造",
        "Manufacture of Instruments & Appliances"
    ],
    [
        "500190000",
        "500000000",
        "印刷/文体用品制造",
        "Printing/Manufacture of Stationary & Sports Goods"
    ],
    [
        "500200000",
        "500000000",
        "造纸/家具制造",
        "Manufacture of Paper, Furniture, etc."
    ],
    [
        "500220000",
        "500000000",
        "专用设备制造",
        "Manufacture of Specific-purpose Machinery"
    ],
    [
        "500210000",
        "500000000",
        "医疗设备/器械",
        "Manufacture of Medical Equipment & Facilities"
    ]
]
module.exports = { industry_dic_json, industry_lp_json, industry_zp_json }
