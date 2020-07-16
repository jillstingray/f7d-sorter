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
			{ name: "觉醒(각성)", key: "awaken", tooltip: "一般有觉醒的神器使 / 각성 버전이 있는 신기사들의 그룹입니다.", checked: false },
			{ name: "Female", key: "female", checked: false },
			{ name: "Male", key: "male", checked: false },
			{ name: "Initial rank S", key: "ranks", checked: false },
			{ name: "Initial rank A", key: "ranka", checked: false },
			{ name: "Initial rank B", key: "rankb", checked: false },
			{ name: "Initial rank C", key: "rankc", checked: false }
    ]
  },
  {
    name: "Remove NPCs",
    key: "npc",
    tooltip: "不包括非神器使的人物比如指挥使、希罗、雷切尔、霞、少女神明等等 / 주인공 지휘사, 히로, 레이첼, 카스미, 세라핌, 아자젤, 갈라테아 등 신기사가 아닌 캐릭터들을 제외합니다.",
		checked: false
  },
		{
    name: "Remove Collaboration characters",
    key: "collab",
    tooltip: "不包括联动神器使 / 콜라보 신기사들을 제외합니다.",
		checked: false
  },
	{
    name: "KR-server-only characters",
    key: "cnonly",
    tooltip: "只包括只在韩国版的人物 / 한국 서버에만 있는 캐릭터들을 소트합니다.",
		checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "指挥使(女)",
    name2: "지휘사(여)",
    img: "EVg40Gw.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "指挥使(男)",
    name2: "지휘사(남)",
    img: "oz2D72K.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "希罗",
    name2: "히로",
    img: "5zCGRko.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "雷切尔",
    name2: "레이첼",
    img: "nR2Gp8v.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "弗兰克丽丝",
    name2: "프랑크리스",
    img: "oElBIje.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "霞",
    name2: "카스미",
    img: "prHRCzz.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "赛拉菲姆",
    name2: "세라핌",
    img: "OVpsWqB.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "埃索林",
    name2: "아이솔린",
    img: "nW565EM.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "艾芙·奈奈",
    name2: "나나코",
    img: "wGfBWbn.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "莉莉娜",
    name2: "리리나",
    img: "D9uLiqT.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "活骸零",
    name2: "유해 누르",
    img: "uesab6F.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "克洛斯",
    name2: "클로스",
    img: "BmvAd0o.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "安杰丽卡",
    name2: "안젤리카",
    img: "LJFMUcg.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "史龙",
    name2: "사룡",
    img: "N0BwYdo.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "阿尔法",
    name2: "알파",
    img: "ep8nhHA.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "贝塔",
    name2: "베타",
    img: "06DAqho.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "伽马",
    name2: "감마",
    img: "qyxkhow.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "德尔塔",
    name2: "델타",
    img: "IyshP1M.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "伽拉泰亚",
    name2: "갈라테아",
    img: "w13Kp27.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "阿撒兹勒",
    name2: "아자젤",
    img: "KY9MSgY.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "利维丽坦",
    name2: "레비아탄",
    img: "Nm4N6T5.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "贝斯帝",
    name2: "베스디",
    img: "uaDVPUs.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "莉莉丝",
    name2: "릴리스",
    img: "EplYVO9.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "伊斯特",
    name2: "이스터",
    img: "VgYOJw3.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "珈儿妈妈",
    name2: "카지 어머니",
    img: "YmJHA2Z.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "莲花",
    name2: "연화",
    img: "oM9ktol.png",
    opts: { 
      attribute: ["female"],
	    npc: true
    }
  },
  {
    name: "让・塔克",
    name2: "존 타크",
    img: "DM5OHCq.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "巴洛尼德",
    name2: "바루오니드",
    img: "qBajwOS.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "拉奥拉",
    name2: "라올라",
    img: "g0mEl9E.png",
    opts: { 
      attribute: ["male"],
	    npc: true
    }
  },
  {
    name: "珈儿",
    name2: "카지",
    img: "XgvMAAm.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "rankc"]
    }
  },
  {
    name: "西比尔",
    name2: "시비르",
    img: "aTYfVxm.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "rankb"]
    }
  },
  {
    name: "晏华",
    name2: "안화",
    img: "4GhAPAo.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "爱缪莎",
    name2: "에뮤사",
    img: "Gv2YOFg.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "奥露西娅",
    name2: "오로시아",
    img: "WTHRnQz.png",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "罗纳克",
    name2: "로나크",
    img: "jSrDFiM.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "芙罗拉",
    name2: "플로라",
    img: "uuqfx4u.png",
    opts: {
      attributes: ["spirit", "support", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "达尔维拉",
    name2: "달비라",
    img: "Ra1GdKn.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "male", "ranka"]
    }
  },
	{
    name: "雯梓",
    name2: "웬시",
    img: "0tIvjHx.png",
    opts: {
      attributes: ["deft", "support", "magic", "awaken", "female", "rankc"]
    }
  },
	{
    name: "钟函谷",
    name2: "종한구",
    img: "aM1ki3j.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "male", "ranks", "kronly"]
    }
  },
	{
    name: "阿岚",
    name2: "아라시",
    img: "p3x0zlo.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "伽梨耶",
    name2: "가리에",
    img: "jqFkZoJ.png",
    opts: {
      attributes: ["spirit", "support", "magic", "awaken", "female", "rankc"]
    }
  },
	{
    name: "赛斯",
    name2: "세츠",
    img: "rBW3SQz.png",
    opts: {
      attributes: ["tough", "support", "magic", "awaken", "male", "rankc"]
    }
  },
	{
    name: "羽弥",
    name2: "와타리",
    img: "zoHbvAO.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "awaken", "female", "rankb"]
    }
  },
	{
    name: "米菈",
    name2: "미라",
    img: "Z6O31aI.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "泰丝拉",
    name2: "테슬라",
    img: "vCB4TKd.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "艾露比",
    name2: "에루비",
    img: "3R2wNbr.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "薇拉",
    name2: "베라",
    img: "EKl5mxc.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "妮维",
    name2: "니유",
    img: "Gh9hPgC.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "awaken", "female", "rankc"]
    }
  },
	{
    name: "濑由衣",
    name2: "세이유이",
    img: "3diZ7QX.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "幽桐",
    name2: "유우토",
    img: "ZrrcylR.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "乌鹭",
    name2: "우류",
    img: "LpbfRrC.png",
    opts: {
      attributes: ["spirit", "tank", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "达格",
    name2: "더그",
    img: "WIfVDOQ.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "璐璐",
    name2: "룰루",
    img: "ra3jiZT.png",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "丽",
    name2: "레이",
    img: "e8qrh36.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "莱奥斯",
    name2: "레오스",
    img: "NTvUDXR.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "赛哈姆",
    name2: "사하무",
    img: "BeWbiO5.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "瞬",
    name2: "슌",
    img: "QbjodCo.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "rankb"]
    }
  },
	{
    name: "千藻诗歌",
    name2: "치모시카",
    img: "boUe03o.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "awaken", "female", "rankb"]
    }
  },
	{
    name: "虎彻",
    name2: "호체",
    img: "C8DPEoO.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "穆娅",
    name2: "뮤아",
    img: "V2rzc18.png",
    opts: {
      attributes: ["tough", "support", "magic", "awaken", "female", "rankb"]
    }
  },
	{
    name: "李若胤",
    name2: "리로이",
    img: "8kySSTB.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "male", "rankb"]
    }
  },
	{
    name: "夏狩",
    name2: "샤슈",
    img: "S0ZcMCN.png",
    opts: {
      attributes: ["tough", "tank", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "巴裘拉",
    name2: "바쿠라",
    img: "iccQBAU.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "male", "rankc"]
    }
  },
	{
    name: "巫殷",
    name2: "우윈",
    img: "oCG45Cf.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "female", "rankc"]
    }
  },
	{
    name: "白",
    name2: "시로",
    img: "31Dqm2t.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "零",
    name2: "누르",
    img: "1QY6hgi.png",
    opts: {
      attributes: ["deft", "support", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "拉比",
    name2: "라비",
    img: "AKHleCk.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "初音未来",
    name2: "MIKU",
    img: "hcHsCrX.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "female", "ranks"],
	    collab: true
    }
  },
	{
    name: "巡音流歌",
    name2: "LUKA",
    img: "FIgpuC7.png",
    opts: {
      attributes: ["deft", "support", "magic", "female", "ranka"],
	    collab: true
    }
  },

	{
    name: "镜音铃・连",
    name2: "RIN·LEN",
    img: "UPRb5Fc.png",
    opts: {
      attributes: ["deft", "mage", "magic", "female", "male", "ranka"],
	    collab: true
    }
  },
	{
    name: "菲尼克",
    name2: "피닉",
    img: "73KUXrP.png",
    opts: {
      attributes: ["tough", "mage", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "璃璃子",
    name2: "리리코",
    img: "jryS1n8.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "尤梨",
    name2: "유리",
    img: "43ZNqRi.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "柯路诺",
    name2: "크루노",
    img: "3K9fuxI.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "雷克特",
    name2: "렉터",
    img: "5pOShMv.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "夜",
    name2: "나이트",
    img: "3vzIvHC.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "屠怯怯",
    name2: "토쿄쿄",
    img: "HBzu0cA.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "牧濑红莉栖",
    name2: "마키세 크리스",
    img: "ZuCR03F.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "female", "ranks"],
	    collab: true
    }
  },
	{
    name: "椎名真由理",
    name2: "시이나 마유리",
    img: "MoVOTct.png",
    opts: {
      attributes: ["spirit", "mage", "physical", "female", "ranka"],
	    collab: true
    }
  },
	{
    name: "冈部伦太郎",
    name2: "오카베 린타로",
    img: "MZUsKbZ.png",
    opts: {
      attributes: ["tough", "mage", "magic", "male", "ranka"],
	    collab: true
    }
  },
	{
    name: "艾莉兹",
    name2: "아리즈",
    img: "1MPnGDN.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "维恩",
    name2: "비엔",
    img: "qi4kxeN.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "male", "ranka"]
    }
  },
	{
    name: "莉米亚",
    name2: "리미아",
    img: "4BkvxAN.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "初音未来・黑羊之歌",
    name2: "MIKU·검은 양",
    img: "OSSxnd9.png",
    opts: {
      attributes: ["deft", "mage", "magic", "female", "ranks"],
	    collab: true
    }
  },
	{
    name: "KAITO",
    name2: "KAITO",
    img: "5gR7Lop.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "male", "ranka"],
	    collab: true
    }
  },
	{
    name: "初音未来・纯白福音",
    name2: "MIKU·순백의 복음",
    img: "9lICZ7q.png",
    opts: {
      attributes: ["spirit", "support", "magic", "female", "ranks"],
	    collab: true
    }
  },
	{
    name: "MEIKO",
    name2: "MEIKO",
    img: "fS8PbYq.png",
    opts: {
      attributes: ["tough", "shooter", "physical", "female", "ranka"],
	    collab: true
    }
  },
	{
    name: "伊萨克",
    name2: "이자크",
    img: "7TlCpT7.png",
    opts: {
      attributes: ["spirit", "assassin", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "黑尔加",
    name2: "헬가",
    img: "LVzQK7t.png",
    opts: {
      attributes: ["tough", "tank", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "格蕾莎",
    name2: "그레이사",
    img: "gaPm0yB.png",
    opts: {
      attributes: ["deft", "shooter", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "亚修",
    name2: "아슈",
    img: "kdBwWGQ.png",
    opts: {
      attributes: ["deft", "support", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "青檀",
    name2: "칭탄",
    img: "98mmu4n.png",
    opts: {
      attributes: ["tough", "support", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "阮颜",
    name2: "루안 옌",
    img: "S1zuzlp.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "阮羽",
    name2: "루안 유",
    img: "Y0jJaOQ.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "凛雾",
    name2: "린무",
    img: "eOtxIGb.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "朵朵",
    name2: "도도",
    img: "TJCKISG.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "格雷穆",
    name2: "그레이무",
    img: "UsyYdKn.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "awaken", "male", "ranks"]
    }
  },
	{
    name: "瑟雷斯",
    name2: "세레스",
    img: "zIRnLh6.png",
    opts: {
      attributes: ["spirit", "tank", "magic", "awaken", "female", "ranka"]
    }
  },
	{
    name: "伊斯卡里奥",
    name2: "이스카리오",
    img: "yyJ85h8.png",
    opts: {
      attributes: ["spirit", "assassin", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "朝奈",
    name2: "아사나",
    img: "1hbrOL6.png",
    opts: {
      attributes: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
	{
    name: "韦迪",
    name2: "웨이디",
    img: "nhpDSlC.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "awaken", "male", "ranka"]
    }
  },
	{
    name: "阿希莉亚",
    name2: "아실리아",
    img: "E4Zmqja.png",
    opts: {
      attributes: ["deft", "assassin", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "重渊",
    name2: "중연",
    img: "T4BIgix.png",
    opts: {
      attributes: ["tough", "warrior", "magic", "awaken", "male", "ranks"]
    }
  },
	{
    name: "萝月",
    name2: "라게츠",
    img: "VvLIRp5.png",
    opts: {
      attributes: ["spirit", "mage", "magic" ,"awaken", "female", "ranka"]
    }
  },
	{
    name: "蕾娜",
    name2: "레나",
    img: "jd2B7hA.png",
    opts: {
      attributes: ["deft", "tank", "physical", "awaken", "female", "ranks"]
    }
  },
	{
    name: "白歌",
    name2: "핫카",
    img: "ZfkQsXE.png",
    opts: {
      attributes: ["tough", "assassin", "physical", "awaken", "female", "ranka"]
    }
  },
	{
    name: "木之本樱・透明牌魔法使",
    name2: "체리·클리어 카드캡터",
    img: "9NIewDQ.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "female", "ranks"],
	    collab: true
    }
  },
	{
    name: "月",
    name2: "유에",
    img: "S51lRDX.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "male", "ranks"],
	    collab: true
    }
  },
	{
    name: "李小狼",
    name2: "샤오랑",
    img: "PigMx90.png",
    opts: {
      attributes: ["tough", "mage", "magic", "male", "ranka"],
	    collab: true
    }
  },
	{
    name: "木之本樱・库洛牌魔法使",
    name2: "체리·크로우 카드캡터",
    img: "QnlHEuK.png",
    opts: {
      attributes: ["spirit", "support", "magic", "female", "ranka"],
	    collab: true
    }
  },
	{
    name: "十玖",
    name2: "쥬쿠",
    img: "Qq14z0d.png",
    opts: {
      attributes: ["spirit", "assassin", "physical", "female", "ranks"]
    }
  },
	{
    name: "奥德里奇",
    name2: "알드리치",
    img: "XCRKyer.png",
    opts: {
      attributes: ["tough", "shooter", "magic", "male", "ranka"]
    }
  },
		{
    name: "苍澜",
    name2: "소우란",
    img: "BPlRIpN.png",
    opts: {
      attributes: ["deft", "support", "magic", "male", "ranks"]
    }
  },
	{
    name: "宝妮",
    name2: "보니",
    img: "DcXsp5S.png",
    opts: {
      attributes: ["deft", "tank", "magic", "female", "ranka"]
    }
  },
	{
    name: "源千雪",
    name2: "치유키",
    img: "4qIJpGo.png",
    opts: {
      attributes: ["spirit", "support", "physical", "female", "ranks"]
    }
  },
	{
    name: "美咲",
    name2: "미사키",
    img: "t072c8P.png",
    opts: {
      attributes: ["tough", "support", "magic", "female", "ranka"]
    }
  },
	{
    name: "维尔特",
    name2: "빌트",
    img: "Ds1nxES.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranka"]
    }
  },
	{
    name: "雷音",
    name2: "라이온",
    img: "2XLAse1.png",
    opts: {
      attributes: ["tough", "mage", "magic", "female", "ranks"]
    }
  },

	{
    name: "西莉",
    name2: "시리",
    img: "dAIfN3i.png",
    opts: {
      attributes: ["spirit", "shooter", "physical", "female", "ranka"]
    }
  },
	{
    name: "司篁",
    name2: "사황",
    img: "Fe5RbzL.png",
    opts: {
      attributes: ["spirit", "mage", "magic", "female", "ranks"]
    }
  },
	{
    name: "钟遥",
    name2: "종야오",
    img: "nKxsbj7.png",
    opts: {
      attributes: ["tough", "assassin", "magic", "male", "ranka"]
    }
  },
	{
    name: "黑死",
    name2: "페스트",
    img: "XgOkf0x.png",
    opts: {
      attributes: ["deft", "mage", "magic", "male", "ranks"],
	    cnonly: true
    }
  },
	{
    name: "雏雨",
    name2: "히나사메",
    img: "5lTsP8h.png",
    opts: {
      attributes: ["deft", "warrior", "magic", "female", "ranka"],
	    cnonly: true
    }
  },

	{
    name: "千式",
    name2: "천식",
    img: "Niph4pK.png",
    opts: {
      attributes: ["deft", "shooter", "physical", "female", "ranks"]
    }
  },
	{
    name: "罗修",
    name2: "라슈",
    img: "PthrLC1.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "male", "ranka"]
    }
  },
	{
    name: "杰诺尔",
    name2: "게아노르",
    img: "0W1qEWS.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranks"]
    }
  },
	{
    name: "四枫院凛",
    name2: "시호인 린",
    img: "4K3CBOb.png",
    opts: {
      attributes: ["spirit", "shooter", "magic", "male", "ranks"],
	    cnonly: true
    }
  },
	{
    name: "片瑚",
    name2: "헨코",
    img: "HlQGg58.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "female", "ranka"],
	    cnonly: true
    }
  },

	{
    name: "星灼",
    name2: "세이샤쿠",
    img: "68oJmH2.png",
    opts: {
      attributes: ["tough", "mage", "magic", "female", "ranks"],
	    cnonly: true
    }
  },
	{
    name: "邵言",
    name2: "소언",
    img: "D3FAa0c.png",
    opts: {
      attributes: ["spirit", "tank", "physical", "male", "ranka"],
	    cnonly: true
    }
  },
	{
    name: "莉娅",
    name2: "리아",
    img: "sIyjWYb.png",
    opts: {
      attributes: ["tough", "support", "physical", "female", "ranks"],
	    cnonly: true
    }
  },
	{
    name: "天海奏",
    name2: "아마미 카나데",
    img: "GE3QQi9.png",
    opts: {
      attributes: ["spirit", "warrior", "magic", "male", "ranka"],
	    cnonly: true
    }
  },
	{
    name: "纳华特",
    name2: "나와틀",
    img: "7F8h92c.png",
    opts: {
      attributes: ["deft", "warrior", "physical", "male", "ranks"],
	    cnonly: true
    }
  },

	{
    name: "希格莉法",
    name2: "시글리파",
    img: "ItxT5AG.png",
    opts: {
      attributes: ["tough", "warrior", "physical", "female", "ranka"],
	    cnonly: true
    }
  },
	{
    name: "早川百咏",
    name2: "하야카와 모에",
    img: "SFi73hp.png",
    opts: {
      attributes: ["spirit", "warrior", "physical", "female", "ranks"],
	    cnonly: true
    }
  },
	{
    name: "摩卡",
    name2: "모카",
    img: "W59xVrC.png",
    opts: {
      attributes: ["spirit", "support", "magic", "female", "ranka"],
	    cnonly: true
    }
  },
  {
    name: "安",
    name2: "안",
    img: "bOX2xDi.png",
    opts: { 
      attribute: ["deft", "assassin", "physical", "awaken", "female", "rankb"]
    }
  },
  {
    name: "安托涅瓦",
    name2: "앙투아네트",
    img: "KvVbtyO.png",
    opts: {
      attribute: ["deft", "mage", "magic", "awaken", "female", "ranks"]
    }
  },
  {
    name: "安托涅瓦・暗使",
    name2: "앙투아네트·암사",
    img: "MPCRrmW.png",
    opts: {
      attribute: ["deft", "mage", "magic", "female", "ranks"],
	    cnonly: true
    }
  },
  {
    name: "伊薇",
    name2: "이비",
    img: "mhqe5mO.png",
    opts: {
      attribute: ["spirit", "mage", "magic", "female", "ranks"],
	    cnonly: true
    }
  },
  {
    name: "蓝斯",
    name2: "란스",
    img: "Jmp1SOO.png",
    opts: {
      attribute: ["tough", "mage", "magic", "male", "ranka"],
	    cnonly: true
    }
  }
]
