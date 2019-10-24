dataSetVersion = "2019-10-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series\n(All that apply\nSmall cameos will not be included)",
    checked: true,
    sub: [
			{ name: "100% Orange Juice!", key: "oj" },
			{ name: "200% Mixed Juice!", key: "mj", checked: false },
			{ name: "QP Shooting", key: "qps", checked: false },
			{ name: "Christmas Shooting", key: "cms", checked: false },
			{ name: "QP Shooting - Dangerous!!", key: "qpsd", checked: false },
			{ name: "Xmas Shooting - Scramble!!", key: "xmss", checked: false },
			{ name: "SUGURI", key: "sugu", checked: false },
			{ name: "sora", key: "sora", checked: false },
			{ name: "Acceleration of SUGURI (X-Edition)", key: "aos", tooltip: "Doesn't include Suguri-P and Suguri-SP", checked: false },
			{ name: "Acceleration of SUGURI 2", key: "aos2", checked: false },
			{ name: "Flying Red Barrel", key: "frb", tooltip: "Includes Flying Crimson Barrel if Removing Alt Chars is unchecked", checked: false },
			{ name: "Alicianrone", key: "alicia", tooltip: "Unreleased OJ game", checked: false },
			{ name: "QP Kiss", key: "qpk", tooltip: "Dating sim game for April Fools'", checked: false }

    ]
  },
	{
    name: "Remove Alternate Versions",
    key: "alt",
    tooltip: "Check this to remove possible duplicate Characters\ne.g. Suguri (Ver.2), Marc (Pig), etc.",
		checked: false
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters\nAll Mira count as girls in this sorter for easier reference",
		checked: false
  },
	{
    name: "Remove Neutral (NPC) Characters",
    key: "npc",
    tooltip: "Check this to remove all NPCs in 100% OJ\ne.g. Chicken, Seagull, Store Manager, etc.",
		checked: false
  },
	{
    name: "Remove Unadded Characters",
    key: "notadded",
    tooltip: "Check this to remove all characters not playable in 100% OJ (yet)\ne.g. Lone Rider",
		checked: false
  }
];

dataSet[dataSetVersion].characterData = [
	// in 100% OJ
  {
    name: "Alte",
    img: "1uLpuoE.png",
    opts: {
      series: [ "sora", "oj", "mj", "aos2" ]
    }
  },
  {
    name: "Arthur",
    img: "AAE6TUa.png",
    opts: {
      series: [ "cms", "mj", "oj" ],
			notgirl: true
    }
  },
  {
    name: "Aru",
    img: "Kg08ML1.png",
    opts: {
      series: [ "cms", "oj", "mj" ]
    }
  },
  {
    name: "Ceoreparque",
    img: "a48YYnr.png",
    opts: {
      series: ["alicia", "oj"]
    }
  },
  {
    name: "Fernet",
    img: "I6vzxkF.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Hime",
    img: "qyvtAAP.png",
    opts: {
      series: [ "sugu", "sora", "aos", "oj", "mj", "aos2" ]
    }
  },
	{
    name: "Iru",
    img: "2fe0ury.png",
    opts: {
      series: [ "sugu", "aos", "mj", "oj", "aos2" ]
    }
  },
	{
    name: "Kae",
    img: "0XgLAON.png",
    opts: {
      series: [ "sugu", "aos", "oj", "mj", "aos2" ]
    }
  },
	{
    name: "Kai",
    img: "LDzx5iY.png",
    opts: {
      series: [ "oj", "mj" ],
			notgirl: true
    }
  },
	{
    name: "Kiriko",
    img: "rHFVaDh.png",
    opts: {
      series: [ "cms", "oj", "xmss" ]
    }
  },
	{
    name: "Krilalaris",
    img: "lGdLIzC.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Kyoko",
    img: "ccm0Xwj.png",
    opts: {
      series: [ "sugu", "aos", "aosx", "oj", "mj" ]
    }
  },
	{
    name: "Kyousuke",
    img: "r28PfSj.png",
    opts: {
      series: [ "qpsd", "oj", "mj", "qpk" ],
			notgirl: true
    }
  },
	{
    name: "Marc",
    img: "nZZ0mJQ.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Marie Poppo",
    img: "HDm0zdn.png",
    opts: {
      series: [ "oj", "mj" ]
    }
  },
	{
    name: "Mei",
    img: "J2Gt6Xm.png",
    opts: {
      series: [ "qps", "cms", "xmss", "oj", "mj" ]
    }
  },
	{
    name: "Mimyuu",
    img: "vC1YLyq.png",
    opts: {
      series: [ "qps", "oj", "mj", "qpsd" ]
    }
  },
	{
    name: "Mira",
    img: "4QKJ6RK.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Miusaki",
    img: "qme8ivx.png",
    opts: {
      series: [ "alicia", "oj" ]
    }
  },
	{
    name: "Nanako",
    img: "CyFZxdc.png",
    opts: {
      series: [ "sugu", "aos", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Nath",
    img: "iLUO5ik.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Natsumi",
    img: "nBMSHYR.png",
    opts: {
      series: [ "oj", "mj", "xmss" ]
    }
  },
	{
    name: "Nico",
    img: "XCXThLs.png",
    opts: {
      series: [ "xmss", "oj" ]
    }
  },
	{
    name: "NoName",
    img: "PrtWnJV.png",
    opts: {
      series: [ "aos", "oj", "mj" ],
			notgirl: true
    }
  },
	{
    name: "Peat",
    img: "s9KV2pz.png",
    opts: {
      series: [ "frb", "oj", "mj" ],
			notgirl: true
    }
  },
	{
    name: "QP",
    img: "sbHS0jh.png",
    opts: {
      series: [ "qps", "oj", "mj", "qpsd", "aos" ]
    }
  },
	{
    name: "Saki",
    img: "NU5ggG3.png",
    opts: {
      series: [ "sugu", "aos", "aos2", "oj", "mj" ]
    }
  },
	{
    name: "Sham",
    img: "eVMBODw.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Sherry",
    img: "qgMi8WP.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Sora",
    img: "6BItCqM.png",
    opts: {
      series: [ "aos", "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Star Breaker",
    img: "pxedL6Y.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Suguri",
    img: "Lr9Qxnp.png",
    opts: {
      series: [ "sugu", "aos", "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Sweet Breaker",
    img: "sQLQ1V6.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Syura",
    img: "xlKr3zc.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Captain Tequila",
    img: "4H5EVSr.png",
    opts: {
      series: [ "frb", "oj", "mj" ],
			notgirl: true
    }
  },
	{
		name: "Pirate Crew Member",
		img: "m7a3Ofs.png",
		opts: {
			series: [ "frb", "oj" ],
			notgirl: true,
			npc: true
		}
	},
	{
    name: "Tomato",
    img: "EVEQks9.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Tomomo",
    img: "NLhPu1N.png",
    opts: {
      series: [ "oj", "mj" ]
    }
  },
	{
    name: "Tsih",
    img: "Z5MvXGn.png",
    opts: {
      series: [ "sora", "aos2", "oj", "mj" ]
    }
  },
	{
    name: "Yuki",
    img: "yRbrX9c.png",
    opts: {
      series: [ "qps", "qpsd", "oj", "mj" ]
    }
  },
	// Alternate
	{
    name: "Aru (Scramble)",
    img: "WbzPN5j.png",
    opts: {
      series: [ "xmss", "oj" ],
			alt: true
    }
  },
	{
    name: "Marie Poppo (Mixed)",
    img: "hyUHyu7.png",
    opts: {
      series: [ "oj", "mj" ],
			alt: true
    }
  },

	{
    name: "QP (Dangerous)",
    img: "jo5rLTS.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ],
			alt: true
    }
  },
	{
    name: "Suguri (Ver.2)",
    img: "lY6ophn.png",
    opts: {
      series: [ "oj" ],
			alt: true
    }
  },
	{
		name: "Sora (Military)",
		img: "F1a7fdb.png",
		opts: {
			series: [ "oj", "sora" ],
			alt: true
		}
	},
	{
    name: "Tomomo (Casual)",
    img: "xa2PgEO.png",
    opts: {
      series: [ "oj", "mj" ],
			alt: true
    }
  },
	{
    name: "Tomomo (Sweet Eater)",
    img: "af1EKEw.png",
    opts: {
      series: [ "oj" ],
			alt: true
    }
  },
	{
    name: "Cuties",
    img: "7SuHV3w.png",
    opts: {
      series: [ "oj", "mj" ],
			alt: true
    }
  },
	{
    name: "Yuki (Dangerous)",
    img: "whUTpHI.png",
    opts: {
      series: [ "oj", "qpsd", "mj" ],
			alt: true
    }
  },
	// NPC
	{
    name: "Robo Ball",
    img: "RrlVRB2.png",
    opts: {
      series: [ "sugu", "aos", "oj", "mj" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Shifu Robot",
    img: "ad80FW0.png",
    opts: {
      series: [ "sugu", "aos", "oj", "mj", "qpsd" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Flying Castle",
    img: "wh25GF5.png",
    opts: {
      series: [ "frb", "oj", "mj", "xmss" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Chicken",
    img: "8le2MoJ.png",
    opts: {
      series: [ "qps", "qpsd", "oj" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Store Manager",
    img: "88UyZXE.png",
    opts: {
      series: [ "qps", "oj", "mj" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Seagull",
    img: "3CuJ6qV.png",
    opts: {
      series: [ "frb", "oj", "mj" ],
			notgirl: true,
			npc: true
    }
  },
	// Not in 100% OJ
	{
    name: "Alicianrone",
    img: "Wp7kKcM.png",
    opts: {
      series: [ "alicia", "mj" ],
			notadded: true
    }
  },
	{
    name: "Chris",
    img: "iZYVrG1.png",
    opts: {
      series: [ "qps", "mj" ],
			notadded: true
    }
  },
	{
    name: "Dirue",
    img: "RzP0DUe.png",
    opts: {
      series: [ "alicia", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Islay",
    img: "ohOxEQe.png",
    opts: {
      series: [ "frb", "mj", "oj" ],
			
    }
  },
	{
    name: "Kyupita",
    img: "vUqRnTw.png",
    opts: {
      series: [ "qpk", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Lone Rider",
    img: "71H4dba.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Mescal",
    img: "Aq2EqyD.png",
    opts: {
      series: [ "frb", "mj" ],
			notadded: true
    }
  },
	{
    name: "Mira (Past)",
    img: "fVJx9m3.png",
    opts: {
      series: [ "mj" ],
			alt: true,
			notadded: true
    }
  },
	{
    name: "Reika",
    img: "BN2Ovyn.png",
    opts: {
      series: [ "mj" ],
			notadded: true
    }
  },
	{
    name: "Sumika",
    img: "furXsU0.png",
    opts: {
      series: [ "aos2", "mj" ],
			notadded: true
    }
  },
	{
    name: "Yukihito (Yukito)",
    img: "mZvOIde.png",
    opts: {
      series: [ "sora", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Yuuki",
    img: "ojNsbRl.png",
    opts: {
      series: [ "qps", "mj", "oj" ],
			
    }
  },
	{
    name: "Marc (Pig)",
    img: "7wF4ekx.png",
    opts: {
      series: [ "mj" ],
			alt: true,
			notadded: true
    }
  },
	{
    name: "Peat (Pig)",
    img: "Dlm45RD.png",
    opts: {
      series: [ "mj" ],
			alt: true,
      notgirl: true,
			notadded: true
    }
  },
	{
    name: "Suguri (46 Billion Years)",
    img: "RctxyjS.png",
    opts: {
      series: [ "mj" ],
			alt: true,
			notadded: true
    }
  },
	{
    name: "Sumika (46 Billion Years)",
    img: "s2qRx1v.png",
    opts: {
      series: [ "mj" ],
			alt: true,
			notadded: true
    }
  },
	{
    name: "Bourbon",
    img: "0vZOYg8.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Grain",
    img: "DVrB86K.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Malt (Guild Master)",
    img: "ReEoeyV.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Merchant",
    img: "obccmpx.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Scholar",
    img: "fPWzr6c.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Scientist",
    img: "5xtBaAw.png",
    opts: {
      series: [ "frb", "mj" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Butler",
    img: "SAAMAu1.png",
    opts: {
      series: [ "frb" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Punk",
    img: "4pjxxzA.png",
    opts: {
      series: [ "frb" ],
			notgirl: true,
			notadded: true
    }
  },
	{
    name: "Guild Member",
    img: "bzQVkpk.png",
    opts: {
      series: [ "frb" ],
			notgirl: true,
			notadded: true
    }
  },
	{
		name: "Shifu",
		img: "VIJC2UW.png",
		opts: {
			series: [ "sugu", "mj" ],
			notgirl: true,
			notadded: true
		}
	},
	// Co-op Mode Bosses
	{
    name: "Big the Jonathan",
    img: "lMrA7KF.png",
    opts: {
      series: [ "oj" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Big the Haruo",
    img: "7LE9AYz.png",
    opts: {
      series: [ "oj" ],
			npc: true
    }
  },
	{
    name: "M10 Robot",
    img: "Ur3rGdT.png",
    opts: {
      series: [ "oj" ],
			notgirl: true,
			npc: true
    }
  },
	{
    name: "Star Devourer",
    img: "jI0Fp4r.png",
    opts: {
      series: [ "oj" ],
			npc: true
    }
  },
		{
    name: "Summer Beast",
    img: "a5xuZ9N.png",
    opts: {
      series: [ "oj" ],
			npc: true
    }
  }
]
