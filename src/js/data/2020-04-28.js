dataSetVersion = "2020-04-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter",
    key: "attributes",
    tooltip: "Check this to restrict to certain attributes",
    checked: true,
    sub: [
			{ name: "刚(강)", key: "tough", checked: true },
			{ name: "巧(교)", key: "deft", checked: true },
			{ name: "灵(영)", key: "spirit", checked: true },
			{ name: "战士(전사)", key: "warrior", checked: true },
			{ name: "坦克(탱커)", key: "tank", checked: true },
			{ name: "法师(법사)", key: "mage", checked: true },
			{ name: "影袭(암살)", key: "assassin", checked: true },
			{ name: "射手(사수)", key: "shooter", checked: true },
			{ name: "辅助(보조)", key: "support", checked: true },
			{ name: "物理(물리)", key: "physical", checked: true },
			{ name: "法术(마법)", key: "magic", checked: true },
			{ name: "觉醒(각성)", key: "awaken", tooltip: "characters who have 觉醒(각성) version", checked: true },
			{ name: "Collab", key: "collab", checked: true },
			{ name: "Female", key: "female", checked: true },
			{ name: "Male", key: "male", checked: true },
			{ name: "Initial rank S", key: "ranks", checked: true },
			{ name: "Initial rank A", key: "ranka", checked: true },
			{ name: "Initial rank B", key: "rankb", checked: true },
			{ name: "Initial rank C", key: "rankc", checked: true },
			{ name: "NPC", key: "npc", tooltip: "ex: 指挥使(지휘사), 希罗(히로), 霞(카스미)", checked: true },
			{ name: "CN server only", key: "cnonly", tooltip: "characters who are in only Chinese server", checked: true }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "指挥使(女) / 지휘사(여)",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "指挥使(男) / 지휘사(남)",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "希罗 / 히로",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "雷切尔 / 레이첼",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "弗兰克丽丝 / 프랑크리스",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "霞 / 카스미",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "赛拉菲姆 / 세라핌",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "埃索林 / 아이솔린",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "艾芙·奈奈 / 나나코",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "莉莉娜 / 리리나",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "活骸零 / 유해 누르",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "克洛斯 / 클로스",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "安杰丽卡 / 안젤리카",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "史龙 / 사룡",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "拉奥拉 / 라오라",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["npc"]
    }
  },
  {
    name: "安 / 안",
    img: "1uLpuoE.png",
    opts: { 
      attribute: ["deft", "assassin", "physical", "awaken", "female", "rankb"]
    }
  },
  {
    name: "安托涅瓦 / 앙투아네트",
    img: "AAE6TUa.png",
    opts: {
      attribute: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
  {
    name: "珈儿 / 카지",
    img: "Kg08ML1.png",
    opts: {
      attributes: [  ]
    }
  },
  {
    name: "西比尔 / 시비르",
    img: "a48YYnr.png",
    opts: {
      attributes: [  ]
    }
  },
  {
    name: "晏华 / 안화",
    img: "I6vzxkF.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "爱缪莎 / 에뮤사",
    img: "qyvtAAP.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "奥露西娅 / 오로시아",
    img: "2fe0ury.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "罗纳克 / 로나크",
    img: "0XgLAON.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "芙罗拉 / 플로라",
    img: "LDzx5iY.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "达尔维拉 / 달비라",
    img: "rHFVaDh.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "雯梓 / 웬시",
    img: "lGdLIzC.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "钟函谷 / 종한구",
    img: "ccm0Xwj.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "阿岚 / 아라시",
    img: "r28PfSj.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "伽梨耶 / 가리에",
    img: "nZZ0mJQ.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "赛斯 / 세츠",
    img: "HDm0zdn.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "羽弥 / 와타리",
    img: "J2Gt6Xm.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "米菈 / 미라",
    img: "vC1YLyq.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "泰丝拉 / 테슬라",
    img: "4QKJ6RK.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "艾露比 / 에루비",
    img: "qme8ivx.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "薇拉 / 베라",
    img: "CyFZxdc.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "妮维 / 니유",
    img: "iLUO5ik.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "濑由衣 / 세이유이",
    img: "nBMSHYR.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "幽桐 / 유우토",
    img: "XCXThLs.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "乌鹭 / 우류",
    img: "PrtWnJV.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "达格 / 더그",
    img: "s9KV2pz.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "璐璐 / 룰루",
    img: "sbHS0jh.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "丽 / 레이",
    img: "NU5ggG3.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "莱奥斯 / 레오스",
    img: "eVMBODw.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "赛哈姆 / 사하무",
    img: "qgMi8WP.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "瞬 / 슌",
    img: "6BItCqM.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "千藻诗歌 / 치모시카",
    img: "pxedL6Y.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "虎彻 / 호체",
    img: "Lr9Qxnp.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "穆娅 / 뮤아",
    img: "sQLQ1V6.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "李若胤 / 리로이",
    img: "xlKr3zc.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "夏狩 / 샤슈",
    img: "4H5EVSr.png",
    opts: {
      attributes: [  ]
    }
  },
	{
     name: "巴裘拉 / 바쿠라",
     img: "m7a3Ofs.png",
     opts: {
	attributes: [  ],
     }
  },
	{
    name: "巫殷 / 우윈",
    img: "EVEQks9.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "白 / 시로",
    img: "NLhPu1N.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "零 / 누르",
    img: "Z5MvXGn.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "拉比 / 라비",
    img: "yRbrX9c.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "初音未来 / 하츠네 미쿠",
    img: "WbzPN5j.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "巡音流歌 / 메구리네 루카",
    img: "hyUHyu7.png",
    opts: {
      attributes: [  ]
    }
  },

	{
    name: "镜音铃・连 / 카가미네 린, 렌",
    img: "jo5rLTS.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "菲尼克 / 피닉",
    img: "lY6ophn.png",
    opts: {
      attributes: [  ]
    }
  },
	{
     name: "璃璃子 / 리리코",
     img: "F1a7fdb.png",
     opts: {
       attributes: [  ]
     }
  },
	{
    name: "尤梨 / 유리",
    img: "xa2PgEO.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "柯路诺 / 크루노",
    img: "af1EKEw.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "雷克特 / 렉터",
    img: "7SuHV3w.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "夜 / 나이트",
    img: "whUTpHI.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "屠怯怯 / 토쿄쿄",
    img: "RrlVRB2.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "牧濑红莉栖 / 마키세 크리스",
    img: "ad80FW0.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "椎名真由理 / 시이나 마유리",
    img: "wh25GF5.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "冈部伦太郎 / 오카베 린타로",
    img: "8le2MoJ.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "艾莉兹 / 아리즈",
    img: "88UyZXE.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "维恩 / 비엔",
    img: "3CuJ6qV.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "莉米亚 / 리미아",
    img: "Wp7kKcM.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "初音未来 / 하츠네 미쿠",
    img: "iZYVrG1.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "KAITO",
    img: "RzP0DUe.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "初音未来 / 하츠네 미쿠",
    img: "ohOxEQe.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "MEIKO",
    img: "vUqRnTw.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "伊萨克 / 이자크",
    img: "71H4dba.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "黑尔加 / 헬가",
    img: "Aq2EqyD.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "格蕾莎 / 그레이사",
    img: "fVJx9m3.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "亚修 / 아슈",
    img: "BN2Ovyn.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "青檀 / 칭탄",
    img: "furXsU0.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "阮颜 / 루안 옌",
    img: "mZvOIde.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "阮羽 / 루안 유",
    img: "ojNsbRl.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "凛雾 / 린무",
    img: "7wF4ekx.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "朵朵 / 도도",
    img: "Dlm45RD.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "格雷穆 / 그레이무",
    img: "RctxyjS.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "瑟雷斯 / 세레스",
    img: "s2qRx1v.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "伊斯卡里奥 / 이스카리오",
    img: "0vZOYg8.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "朝奈 / 아사나",
    img: "DVrB86K.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "韦迪 / 웨이디",
    img: "ReEoeyV.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "阿希莉亚 / 아실리아",
    img: "obccmpx.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "重渊 / 중연",
    img: "fPWzr6c.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "萝月 / 라게츠",
    img: "5xtBaAw.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "蕾娜 / 레나",
    img: "SAAMAu1.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "白歌 / 핫카",
    img: "4pjxxzA.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "木之本樱 / 체리",
    img: "bzQVkpk.png",
    opts: {
      attributes: [  ]
    }
  },
	{
     name: "月 / 유에",
     img: "VIJC2UW.png",
     opts: {
       attributes: [  ]
     }
  },
	{
    name: "李小狼 / 샤오랑",
    img: "lMrA7KF.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "木之本樱 / 체리",
    img: "7LE9AYz.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "十玖 / 쥬쿠",
    img: "Ur3rGdT.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "奥德里奇 / 알드리치",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
		{
    name: "苍澜 / 소우란",
    img: "a5xuZ9N.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "宝妮 / 보니",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "源千雪 / 치유키",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "美咲 / 미사키",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "维尔特 / 빌트",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "雷音 / 라이온",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },

	{
    name: "西莉 / 시리",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "司篁 / 사황",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "钟遥 / 종야오",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "黑死 / 페스트",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "雏雨 / 히나사메",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },

	{
    name: "千式 / 천식",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "罗修 / 라슈",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "杰诺尔 / 괴아노르",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "四枫院凛 / 시호인 린",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "片瑚 / 헨코",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },

	{
    name: "星灼 / 세이샤쿠",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "邵言 / 소언",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "莉娅 / 리아",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "天海奏 / 아마미 카나데",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "纳华特 / 나월트",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },

	{
    name: "希格莉法 / 시글리파",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "早川百咏 / 하야카와 모에",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  },
	{
    name: "摩卡 / 모카",
    img: "jI0Fp4r.png",
    opts: {
      attributes: [  ]
    }
  }
]
