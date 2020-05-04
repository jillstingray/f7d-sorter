dataSetVersion = "2020-05-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter",
    key: "attributes",
    tooltip: "Check this to restrict to certain attributes",
    checked: false,
    sub: [
			{ name: "刚(강)", key: "tough", checked: false },
			{ name: "巧(교)", key: "deft", checked: false },
			{ name: "灵(영)", key: "spirit", checked: false },
			{ name: "战士(전사)", key: "warrior", checked: false },
			{ name: "坦克(탱커)", key: "tank", checked: false },
			{ name: "法师(법사)", key: "mage", checked: false },
			{ name: "影袭(암살)", key: "assassin", checked: false },
			{ name: "射手(사수)", key: "shooter", checked: false },
			{ name: "辅助(보조)", key: "support", checked: false },
			{ name: "物理(물리)", key: "physical", checked: false },
			{ name: "法术(마법)", key: "magic", checked: false },
			{ name: "觉醒(각성)", key: "awaken", tooltip: "characters who have 觉醒(각성) version", checked: false },
			{ name: "Collab", key: "collab", checked: false },
			{ name: "Female", key: "female", checked: false },
			{ name: "Male", key: "male", checked: false },
			{ name: "Initial rank S", key: "ranks", checked: false },
			{ name: "Initial rank A", key: "ranka", checked: false },
			{ name: "Initial rank B", key: "rankb", checked: false },
			{ name: "Initial rank C", key: "rankc", checked: false },
			{ name: "NPC", key: "npc", tooltip: "ex: 指挥使(지휘사), 希罗(히로), 霞(카스미)", checked: false },
			{ name: "CN server only", key: "cnonly", tooltip: "characters who are in only Chinese server", checked: false }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "指挥使(女) / 지휘사(여)",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "指挥使(男) / 지휘사(남)",
    img: "",
    opts: { 
      attribute: ["male", "npc"]
    }
  },
  {
    name: "希罗 / 히로",
    img: "",
    opts: { 
      attribute: ["male", "npc"]
    }
  },
  {
    name: "雷切尔 / 레이첼",
    img: "",
    opts: { 
      attribute: ["male", "npc"]
    }
  },
  {
    name: "弗兰克丽丝 / 프랑크리스",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "霞 / 카스미",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "赛拉菲姆 / 세라핌",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "埃索林 / 아이솔린",
    img: "",
    opts: { 
      attribute: ["female", "npc", "cnonly"]
    }
  },
  {
    name: "艾芙·奈奈 / 나나코",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "莉莉娜 / 리리나",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "活骸零 / 유해 누르",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "克洛斯 / 클로스",
    img: "",
    opts: { 
      attribute: ["male", "npc"]
    }
  },
  {
    name: "安杰丽卡 / 안젤리카",
    img: "",
    opts: { 
      attribute: ["female", "npc"]
    }
  },
  {
    name: "史龙 / 사룡",
    img: "",
    opts: { 
      attribute: ["male", "npc"]
    }
  },
  {
    name: "拉奥拉 / 라오라",
    img: "",
    opts: { 
      attribute: ["male", "npc", "cnonly"]
    }
  },
  {
    name: "安 / 안",
    img: "bOX2xDi.png",
    opts: { 
      attribute: ["deft", "assassin", "physical", "awaken", "female", "rankb"]
    }
  },
  {
    name: "安托涅瓦 / 앙투아네트",
    img: "KvVbtyO.png",
    opts: {
      attribute: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
  {
    name: "珈儿 / 카지",
    img: "XgvMAAm.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "rankc"]
    }
  },
  {
    name: "西比尔 / 시비르",
    img: "aTYfVxm.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "rankb"]
    }
  },
  {
    name: "晏华 / 안화",
    img: "4GhAPAo.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "爱缪莎 / 에뮤사",
    img: "Gv2YOFg.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "奥露西娅 / 오로시아",
    img: "WTHRnQz.png",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "罗纳克 / 로나크",
    img: "jSrDFiM.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "芙罗拉 / 플로라",
    img: "",
    opts: {
      attributes: ["spirit", "support", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "达尔维拉 / 달비라",
    img: "Ra1GdKn.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "male", "ranka"]
    }
  },
	{
    name: "雯梓 / 웬시",
    img: "0tIvjHx.png",
    opts: {
      attributes: ["deft", "support", "magic", "awaken", "female", "rankc"]
    }
  },
	{
    name: "钟函谷 / 종한구",
    img: "aM1ki3j.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "male", "ranks", "kronly"]
    }
  },
	{
    name: "阿岚 / 아라시",
    img: "p3x0zlo.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "伽梨耶 / 가리에",
    img: "jqFkZoJ.png",
    opts: {
      attributes: ["spirit", "support", "magic", "awaken", "female", "rankc"]
    }
  },
	{
    name: "赛斯 / 세츠",
    img: "rBW3SQz.png",
    opts: {
      attributes: ["tough", "support", "magic", "awaken", "male", "rankc"]
    }
  },
	{
    name: "羽弥 / 와타리",
    img: "zoHbvAO.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "awaken", "female", "rankb"]
    }
  },
	{
    name: "米菈 / 미라",
    img: "Z6O31aI.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "泰丝拉 / 테슬라",
    img: "",
    opts: {
      attributes: ["tough", "shooter", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "艾露比 / 에루비",
    img: "3R2wNbr.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "薇拉 / 베라",
    img: "EKl5mxc.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "妮维 / 니유",
    img: "Gh9hPgC.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "awaken", "female", "rankc"]
    }
  },
	{
    name: "濑由衣 / 세이유이",
    img: "3diZ7QX.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "幽桐 / 유우토",
    img: "ZrrcylR.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "乌鹭 / 우류",
    img: "LpbfRrC.png",
    opts: {
      attributes: ["spirit", "tank", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "达格 / 더그",
    img: "WIfVDOQ.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "璐璐 / 룰루",
    img: "ra3jiZT.png",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "丽 / 레이",
    img: "e8qrh36.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "莱奥斯 / 레오스",
    img: "NTvUDXR.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "赛哈姆 / 사하무",
    img: "BeWbiO5.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "瞬 / 슌",
    img: "QbjodCo.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "千藻诗歌 / 치모시카",
    img: "boUe03o.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "awaken", "female", "rankb"]
    }
  },
	{
    name: "虎彻 / 호체",
    img: "",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "穆娅 / 뮤아",
    img: "V2rzc18.png",
    opts: {
      attributes: ["tough", "support", "magic", "female", "rankb"]
    }
  },
	{
    name: "李若胤 / 리로이",
    img: "8kySSTB.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "夏狩 / 샤슈",
    img: "S0ZcMCN.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "male", "rankc"]
    }
  },
	{
     name: "巴裘拉 / 바쿠라",
     img: "iccQBAU.png",
     opts: {
	attributes: ["deft", "assassin", "physical", "awaken", "male", "rankc"]
     }
  },
	{
    name: "巫殷 / 우윈",
    img: "oCG45Cf.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "female", "rankc"]
    }
  },
	{
    name: "白 / 시로",
    img: "31Dqm2t.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "零 / 누르",
    img: "1QY6hgi.png",
    opts: {
      attributes: ["deft", "support", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "拉比 / 라비",
    img: "AKHleCk.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "初音未来 / MIKU",
    img: "",
    opts: {
      attributes: ["tough", "shooter", "physical", "collab", "female", "ranks"]
    }
  },
	{
    name: "巡音流歌 / LUKA",
    img: "FIgpuC7.png",
    opts: {
      attributes: ["deft", "support", "magic", "collab", "female", "ranka"]
    }
  },

	{
    name: "镜音铃・连 / RIN·LEN",
    img: "UPRb5Fc.png",
    opts: {
      attributes: ["deft", "mage", "magic", "collab", "female", "male", "ranka"]
    }
  },
	{
    name: "菲尼克 / 피닉",
    img: "",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "male", "ranks"]
    }
  },
	{
     name: "璃璃子 / 리리코",
     img: "jryS1n8.png",
     opts: {
       attributes: ["deft", "mage", "magic", "awaken", "female", "ranks"]
     }
  },
	{
    name: "尤梨 / 유리",
    img: "43ZNqRi.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "柯路诺 / 크루노",
    img: "3K9fuxI.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "雷克特 / 렉터",
    img: "5pOShMv.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "夜 / 나이트",
    img: "3vzIvHC.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "屠怯怯 / 토쿄쿄",
    img: "",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "牧濑红莉栖 / 마키세 크리스",
    img: "ZuCR03F.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "collab", "female", "ranks"]
    }
  },
	{
    name: "椎名真由理 / 시이나 마유리",
    img: "MoVOTct.png",
    opts: {
      attributes: ["spirit", "mage", "physical", "collab", "female", "ranka"]
    }
  },
	{
    name: "冈部伦太郎 / 오카베 린타로",
    img: "MZUsKbZ.png",
    opts: {
      attributes: ["tough", "mage", "magic", "collab", "male", "ranka"]
    }
  },
	{
    name: "艾莉兹 / 아리즈",
    img: "1MPnGDN.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "维恩 / 비엔",
    img: "qi4kxeN.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "male", "ranka"]
    }
  },
	{
    name: "莉米亚 / 리미아",
    img: "4BkvxAN.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "初音未来・黑羊之歌 / MIKU·검은 양",
    img: "",
    opts: {
      attributes: ["deft", "mage", "magic", "collab", "female", "ranks"]
    }
  },
	{
    name: "KAITO",
    img: "5gR7Lop.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "collab", "male", "ranka"]
    }
  },
	{
    name: "初音未来・纯白福音 / MIKU·순백의 복음",
    img: "",
    opts: {
      attributes: ["spirit", "support", "magic", "collab", "female", "ranks"]
    }
  },
	{
    name: "MEIKO",
    img: "fS8PbYq.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "collab", "female", "ranka"]
    }
  },
	{
    name: "伊萨克 / 이자크",
    img: "7TlCpT7.png",
    opts: {
      attributes: ["spirit", "assassin", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "黑尔加 / 헬가",
    img: "",
    opts: {
      attributes: ["tough", "tank", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "格蕾莎 / 그레이사",
    img: "gaPm0yB.png",
    opts: {
      attributes: ["deft", "shooter", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "亚修 / 아슈",
    img: "kdBwWGQ.png",
    opts: {
      attributes: ["deft", "support", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "青檀 / 칭탄",
    img: "98mmu4n.png",
    opts: {
      attributes: ["tough", "support", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "阮颜 / 루안 옌",
    img: "S1zuzlp.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "阮羽 / 루안 유",
    img: "Y0jJaOQ.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "凛雾 / 린무",
    img: "eOtxIGb.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "朵朵 / 도도",
    img: "TJCKISG.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "格雷穆 / 그레이무",
    img: "UsyYdKn.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "male", "ranks"]
    }
  },
	{
    name: "瑟雷斯 / 세레스",
    img: "zIRnLh6.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "伊斯卡里奥 / 이스카리오",
    img: "yyJ85h8.png",
    opts: {
      attributes: ["spirit", "assassin", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "朝奈 / 아사나",
    img: "1hbrOL6.png",
    opts: {
      attributes: ["deft", "mage", "magic", "female", "ranks"]
    }
  },
	{
    name: "韦迪 / 웨이디",
    img: "nhpDSlC.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "male", "ranka"]
    }
  },
	{
    name: "阿希莉亚 / 아실리아",
    img: "E4Zmqja.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "重渊 / 중연",
    img: "T4BIgix.png",
    opts: {
      attributes: ["tough", "warrior", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "萝月 / 라게츠",
    img: "VvLIRp5.png",
    opts: {
      attributes: ["spirit", "mage", "magic" ,"awaken", "female", "ranka"]
    }
  },
	{
    name: "蕾娜 / 레나",
    img: "jd2B7hA.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "白歌 / 핫카",
    img: "",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "木之本樱・透明牌魔法使 / 체리·클리어 카드캡터",
    img: "9NIewDQ.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "collab", "female", "ranks"]
    }
  },
	{
     name: "月 / 유에",
     img: "S51lRDX.png",
     opts: {
       attributes: ["deft", "shooter", "physical", "collab", "male", "ranks"]
     }
  },
	{
    name: "李小狼 / 샤오랑",
    img: "PigMx90.png",
    opts: {
      attributes: ["tough", "mage", "magic", "collab", "male", "ranka"]
    }
  },
	{
    name: "木之本樱・库洛牌魔法使 / 체리·크로우 카드캡터",
    img: "QnlHEuK.png",
    opts: {
      attributes: ["spirit", "support", "magic", "collab", "female", "ranka"]
    }
  },
	{
    name: "十玖 / 쥬쿠",
    img: "Qq14z0d.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "female", "ranks"]
    }
  },
	{
    name: "奥德里奇 / 알드리치",
    img: "XCRKyer.png",
    opts: {
      attributes: ["tough", "shooter", "magic", "male", "ranka"]
    }
  },
		{
    name: "苍澜 / 소우란",
    img: "BPlRIpN.png",
    opts: {
      attributes: ["deft", "support", "magic", "male", "ranks"]
    }
  },
	{
    name: "宝妮 / 보니",
    img: "DcXsp5S.png",
    opts: {
      attributes: ["deft", "tank", "magic", "female", "ranka"]
    }
  },
	{
    name: "源千雪 / 치유키",
    img: "4qIJpGo.png",
    opts: {
      attributes: ["spirit", "support", "physical", "female", "ranks"]
    }
  },
	{
    name: "美咲 / 미사키",
    img: "t072c8P.png",
    opts: {
      attributes: ["tough", "support", "magic", "female", "ranka"]
    }
  },
	{
    name: "维尔特 / 빌트",
    img: "Ds1nxES.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranka"]
    }
  },
	{
    name: "雷音 / 라이온",
    img: "2XLAse1.png",
    opts: {
      attributes: ["tough", "mage", "magic", "female", "ranks"]
    }
  },

	{
    name: "西莉 / 시리",
    img: "dAIfN3i.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "female", "ranka"]
    }
  },
	{
    name: "司篁 / 사황",
    img: "Fe5RbzL.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "female", "ranks", "cnonly"]
    }
  },
	{
    name: "钟遥 / 종야오",
    img: "nKxsbj7.png",
    opts: {
      attributes: ["tough", "assassin", "magic", "male", "ranka", "cnonly"]
    }
  },
	{
    name: "黑死 / 페스트",
    img: "",
    opts: {
      attributes: ["deft", "mage", "magic", "male", "ranks", "cnonly"]
    }
  },
	{
    name: "雏雨 / 히나사메",
    img: "",
    opts: {
      attributes: ["deft", "warrior", "magic", "female", "ranka", "cnonly"]
    }
  },

	{
    name: "千式 / 천식",
    img: "Niph4pK.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "female", "ranks", "cnonly"]
    }
  },
	{
    name: "罗修 / 라슈",
    img: "PthrLC1.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "male", "ranka", "cnonly"]
    }
  },
	{
    name: "杰诺尔 / 괴아노르",
    img: "0W1qEWS.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranks", "cnonly"]
    }
  },
	{
    name: "四枫院凛 / 시호인 린",
    img: "4K3CBOb.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "male", "ranks", "cnonly"]
    }
  },
	{
    name: "片瑚 / 헨코",
    img: "",
    opts: {
      attributes: ["tough", "warrior", "physical", "female", "ranka", "cnonly"]
    }
  },

	{
    name: "星灼 / 세이샤쿠",
    img: "68oJmH2.png",
    opts: {
      attributes: ["tough", "mage", "magic", "female", "ranks", "cnonly"]
    }
  },
	{
    name: "邵言 / 소언",
    img: "D3FAa0c.png",
    opts: {
      attributes: ["spirit", "tank", "physical", "male", "ranka", "cnonly"]
    }
  },
	{
    name: "莉娅 / 리아",
    img: "sIyjWYb.png",
    opts: {
      attributes: ["tough", "support", "physical", "female", "ranks", "cnonly"]
    }
  },
	{
    name: "天海奏 / 아마미 카나데",
    img: "GE3QQi9.png",
    opts: {
      attributes: ["spirit", "warrior", "magic", "male", "ranka", "cnonly"]
    }
  },
	{
    name: "纳华特 / 나와틀",
    img: "7F8h92c.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranks", "cnonly"]
    }
  },

	{
    name: "希格莉法 / 시글리파",
    img: "ItxT5AG.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "female", "ranka", "cnonly"]
    }
  },
	{
    name: "早川百咏 / 하야카와 모에",
    img: "",
    opts: {
      attributes: ["spirit", "warrior", "physical", "female", "ranks", "cnonly"]
    }
  },
	{
    name: "摩卡 / 모카",
    img: "W59xVrC.png",
    opts: {
      attributes: ["spirit", "support", "magic", "female", "ranka", "cnonly"]
    }
  }
]
