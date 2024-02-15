import { ICamo } from "../models/camo";
import { ECamoFamily, ECamoType, ECondition, EGame, EGameMode } from "../common/enums";



const mastery: ICamo[] = [
	{
		_id: "camos.orion",
		name: "Orion",
		condition: ECondition.UNLOCK_ALL_MW2,
		conditionAmount: 0,
		game: EGame.MW2,
		family: ECamoFamily.COMPLETIONIST,
		type: ECamoType.MASTERY,
		gameMode: EGameMode.MULTIPLAYER
	}
]


const weapon_completionBase = {
  family: ECamoFamily.COMPLETIONIST,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER,
  type: ECamoType.WEAPON_COMPLETION
}
const weapon_completionType: ICamo[] = [
	{
    ...weapon_completionBase,
    _id: "camos.gold",
		name: "Gold",
    condition: ECondition.SERIES_3,
    conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/completionist/Gold_Camo_Icon_MWII.png"
	},
	{
    ...weapon_completionBase,
    _id: "camos.gold_handguns",
		name: "Gold (Handguns)",
    condition: ECondition.SERIES_3,
    conditionAmount: 5,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/completionist/Gold_Camo_Icon_MWII.png"
	},
	{
    ...weapon_completionBase,
    _id: "camos.gold_launchers",
		name: "Gold (Launchers)",
    condition: ECondition.SERIES_2,
    conditionAmount: 5,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/completionist/Gold_Camo_Icon_MWII.png"
	},
	{
    ...weapon_completionBase,
    _id: "camos.gold_specials",
		name: "Gold (Specials)",
    condition: ECondition.SERIES_2,
    conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/completionist/Gold_Camo_Icon_MWII.png"
	}
]


const category_completionBase = {
  family: ECamoFamily.COMPLETIONIST,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER,
  type: ECamoType.CATEGORY_COMPLETION
}
const category_completionType: ICamo[] = [
	{
		...category_completionBase,
		_id: "camos.platinum",
		name: "Platinum",
		condition: ECondition.LONGSHOTS,
		conditionAmount: 25
	},
	{
		...category_completionBase,
		_id: "camos.platinum_shotguns_snipers",
		name: "Platinum (Shotguns, Snipers)",
		condition: ECondition.LONGSHOTS,
		conditionAmount: 20
	},
	{
		...category_completionBase,
		_id: "camos.platinum_handguns",
		name: "Platinum (Handguns)",
		condition: ECondition.LONGSHOTS,
		conditionAmount: 15
	},
	{
		...category_completionBase,
		_id: "camos.platinum_pila",
		name: "Platinum (PILA)",
		condition: ECondition.DESTROY_EQUIPMENT,
		conditionAmount: 15
	},
	{
		...category_completionBase,
		_id: "camos.platinum_strela_p",
		name: "Platinum (Strela-P)",
		condition: ECondition.DESTROY_EQUIPMENT,
		conditionAmount: 25
	},
	{
		...category_completionBase,
		_id: "camos.platinum_jokr_rpg7",
		name: "Platinum (JOKR, RPG7)",
		condition: ECondition.DESTROY_EQUIPMENT,
		conditionAmount: 10
	},
	{
		...category_completionBase,
		_id: "camos.platinum_melee",
		name: "Platinum (Melee)",
		condition: ECondition.DOUBLE_KILLS_10S,
		conditionAmount: 10
	}
]


const all_categories_completionBase = {
  family: ECamoFamily.COMPLETIONIST,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER,
  type: ECamoType.ALL_CATEGORIES_COMPLETION
}
const all_categories_completionType: ICamo[] = [
	{
		...all_categories_completionBase,
		_id: "camos.polyatomic",
		name: "Polyatomic",
		condition: ECondition.HEADSHOT,
		conditionAmount: 25
	},
	{
		...all_categories_completionBase,
		_id: "camos.polyatomic_shotguns_snipers_handguns",
		name: "Polyatomic (Shotguns, Snipers, Handguns)",
		condition: ECondition.HEADSHOT,
		conditionAmount: 20
	},
	{
		...all_categories_completionBase,
		_id: "camos.polyatomic_launchers",
		name: "Polyatomic (Launchers)",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 15
	},
	{
		...all_categories_completionBase,
		_id: "camos.polyatomic_riot_shield",
		name: "Polyatomic (Riot Shield)",
		condition: ECondition.BEHIND,
		conditionAmount: 10
	},
	{
		...all_categories_completionBase,
		_id: "camos.polyatomic_secondary_melee",
		name: "Polyatomic (Secondary Melee)",
		condition: ECondition.BEHIND,
		conditionAmount: 20
	}
]


const classicBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.CLASSIC,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const classicFamily: ICamo[] = [
  {
    ...classicBase,
    _id: "camos.80_s_fever",
    name: "80's Fever",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
  },
  {
    ...classicBase,
    _id: "camos.autumn_return",
    name: "Autumn Return",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
  },
  {
    ...classicBase,
    _id: "camos.back_in_blue",
    name: "Back in Blue",
    condition: ECondition.HIPFIRE,
    conditionAmount: 15
  },
  {
    ...classicBase,
    _id: "camos.hexed",
    name: "Hexed",
    condition: ECondition.ADS,
    conditionAmount: 50
  },
  {
    ...classicBase,
    _id: "camos.new_urban",
    name: "New Urban",
    condition: ECondition.BEHIND,
    conditionAmount: 15
  },
  {
    ...classicBase,
    _id: "camos.spectrums",
    name: "Spectrums",
    condition: ECondition.ONE_SHOT,
    conditionAmount: 25
  }
]


const cliffsideBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.CLIFFSIDE,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const cliffsideFamily: ICamo[] = [
  {
    ...cliffsideBase,
    _id: "camos.chemical_reaction",
    name: "Chemical Reaction",
    condition: ECondition.CROUCH,
    conditionAmount: 30
  },
  {
    ...cliffsideBase,
    _id: "camos.desert_rain",
    name: "Desert Rain",
    condition: ECondition.BEHIND,
    conditionAmount: 15
  },
  {
    ...cliffsideBase,
    _id: "camos.earthbound",
    name: "Earthbound",
    condition: ECondition.PRONE,
    conditionAmount: 30
  },
  {
    ...cliffsideBase,
    _id: "camos.forest_rain",
    name: "Forest Rain",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
  },
  {
    ...cliffsideBase,
    _id: "camos.fractal_mud",
    name: "Fractal Mud",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
  },
  {
    ...cliffsideBase,
    _id: "camos.night_quarry",
    name: "Night Quarry",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
  },
  {
    ...cliffsideBase,
    _id: "camos.noxious_neon",
    name: "Noxious Neon",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
  },
  {
    ...cliffsideBase,
    _id: "camos.quarry",
    name: "Quarry",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
  },
  {
    ...cliffsideBase,
    _id: "camos.rupture",
    name: "Rupture",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
  },
  {
    ...cliffsideBase,
    _id: "camos.violent_orchid",
    name: "Violent Orchid",
    condition: ECondition.ADS,
    conditionAmount: 30
  }
]


const digitalBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.DIGITAL,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const digitalFamily: ICamo[] = [
	{
		_id: "camos.arctic_digital",
    name: "Arctic Digital",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Arctic_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.arid_digital",
    name: "Arid Digital",
		condition: ECondition.KILLS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Arid_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.asphalt_digital",
    name: "Asphalt Digital",
		condition: ECondition.HIPFIRE,
		conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Asphalt_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.aztec",
    name: "Aztec",
		condition: ECondition.HIPFIRE,
		conditionAmount: 20,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Aztec_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.alien_waves",
    name: "Alien Waves",
		condition: ECondition.ADS,
		conditionAmount: 40,
    ...digitalBase
	},
	{
		_id: "camos.bark_digital",
    name: "Bark Digital",
		condition: ECondition.HIPFIRE,
		conditionAmount: 15,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Bark_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.bio_static_digital",
    name: "Bio Static Digital",
		condition: ECondition.KILLS,
		conditionAmount: 30,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Bio_Static_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.blue_digital",
    name: "Blue Digital",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 5,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Blue_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.blood_and_mud",
    name: "Blood and Mud",
		condition: ECondition.PRONE,
		conditionAmount: 15,
    ...digitalBase
	},
	{
		_id: "camos.chemist_digital",
    name: "Chemist Digital",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 15,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Chemist_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.classic_digital",
    name: "Classic Digital",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Classic_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.commando_digital",
    name: "Commando Digital",
		condition: ECondition.KILLS,
		conditionAmount: 40,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Commando_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.conflagration",
    name: "Conflagration",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 20,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Conflagration_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.connected_dots",
    name: "Connected Dots",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 20,
    ...digitalBase
	},
	{
		_id: "camos.dark_tiger_digital",
    name: "Dark Tiger Digital",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Dark_Tiger_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.desert_digital",
    name: "Desert Digital",
		condition: ECondition.ADS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Desert_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.desert_oil_digital",
    name: "Desert Oil Digital",
		condition: ECondition.ADS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Desert_Oil_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.digital_wilds",
    name: "Digital Wilds",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...digitalBase
	},
	{
		_id: "camos.forest_digital",
    name: "Forest Digital",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Forest_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.green_digital",
    name: "Green Digital",
		condition: ECondition.ADS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Green_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.jungle_digital",
    name: "Jungle Digital",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 15,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Jungle_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.lichen_digital",
    name: "Lichen Digital",
		condition: ECondition.KILLS,
		conditionAmount: 40,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Lichen_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.magma_digital",
    name: "Magma Digital",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Magma_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.marsh_digital",
    name: "Marsh Digital",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Marsh_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.petri_digital",
    name: "Petri Digital",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Petri_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.red_cell",
    name: "Red Cell",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 25,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Red_Cell_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.sandstorm_digital",
    name: "Sandstorm Digital",
		condition: ECondition.KILLS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Sandstorm_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.snow_melt_digital",
    name: "Snow Melt Digital",
		condition: ECondition.KILLS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Snow_Melt_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.snowstorm_digital",
    name: "Snowstorm Digital",
		condition: ECondition.KILLS,
		conditionAmount: 40,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Snowstorm_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.stonewall_digital",
    name: "Stonewall Digital",
		condition: ECondition.ADS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Stonewall_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.urban_digital",
    name: "Urban Digital",
		condition: ECondition.KILLS,
		conditionAmount: 50,
		imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/digital/Urban_Digital_Camo_Icon_MWII.png",
    ...digitalBase
	},
	{
		_id: "camos.digital_boulder",
    name: "Digital Boulder",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...digitalBase
	}
]


const dragonBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.DRAGON,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const dragonFamily: ICamo[] = [
  {
    _id: "camos.asphalt",
    name: "Asphalt",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
    ...dragonBase
  },
  {
    _id: "camos.black_top",
    name: "Black Top",
		condition: ECondition.MOUNTED,
		conditionAmount: 20,
    ...dragonBase
  },
  {
    _id: "camos.burned_edges",
    name: "Burned Edges",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 30,
    ...dragonBase
  },
  {
    _id: "camos.crime_scene",
    name: "Crime Scene",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
    ...dragonBase
  },
  {
    _id: "camos.cracking_onyx",
    name: "Cracking Onyx",
		condition: ECondition.BEHIND,
		conditionAmount: 10,
    ...dragonBase
  },
  {
    _id: "camos.dark_croc",
    name: "Dark Croc",
		condition: ECondition.MOUNTED,
		conditionAmount: 20,
    ...dragonBase
  },
  {
    _id: "camos.dark_leaves",
    name: "Dark Leaves",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...dragonBase
  },
  {
    _id: "camos.diabolical",
    name: "Diabolical",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...dragonBase
  },
  {
    _id: "camos.dirt",
    name: "Dirt",
		condition: ECondition.DOUBLE_KILLS_10S,
		conditionAmount: 10,
    ...dragonBase
  },
  {
    _id: "camos.foliage",
    name: "Foliage",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 5,
    ...dragonBase
  },
  {
    _id: "camos.h2o",
    name: "H2O",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 5,
    ...dragonBase
  },
  {
    _id: "camos.internal_flame",
    name: "Internal Flame",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...dragonBase
  },
  {
    _id: "camos.moon_shadow",
    name: "Moon Shadow",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...dragonBase
  },
  {
    _id: "camos.moss",
    name: "Moss",
		condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...dragonBase
  },
  {
    _id: "camos.neon_pink",
    name: "Neon Pink",
		condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...dragonBase
  },
  {
    _id: "camos.omnihex",
    name: "Omnihex",
		condition: ECondition.HIPFIRE,
		conditionAmount: 15,
    ...dragonBase
  },
  {
    _id: "camos.reptilian",
    name: "Reptilian",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...dragonBase
  },
  {
    _id: "camos.tagged",
    name: "Tagged",
		condition: ECondition.HIPFIRE,
		conditionAmount: 15,
    ...dragonBase
  },
  {
    _id: "camos.tessellation",
    name: "Tessellation",
		condition: ECondition.MOUNTED,
		conditionAmount: 20,
    ...dragonBase
  },
  {
    _id: "camos.trailblazer",
    name: "Trailblazer",
		condition: ECondition.BEHIND,
		conditionAmount: 15,
    ...dragonBase
  }
]


const foliageBase = {
  type: ECamoType.BASE,
  game: EGame.MW2,
  family: ECamoFamily.FOLIAGE,
  gameMode: EGameMode.MULTIPLAYER
}
const foliageFamily: ICamo[] = [
	{
    ...foliageBase,
		_id: "camos.aspen",
    name: "Aspen",
    condition: ECondition.ONE_SHOT,
    conditionAmount: 25
	},
	{
    ...foliageBase,
		_id: "camos.autumnal",
    name: "Autumnal",
    condition: ECondition.ONE_SHOT,
    conditionAmount: 20
	},
	{
    ...foliageBase,
		_id: "camos.bamboo",
    name: "Bamboo",
    condition: ECondition.HIPFIRE,
    conditionAmount: 15
	},
	{
    ...foliageBase,
		_id: "camos.birch",
    name: "Birch",
    condition: ECondition.KILLS,
    conditionAmount: 50
	},
	{
    ...foliageBase,
		_id: "camos.countryside",
    name: "Countryside",
    condition: ECondition.ADS,
    conditionAmount: 30
	},
	{
    ...foliageBase,
		_id: "camos.deep_jungle",
    name: "Deep Jungle",
    condition: ECondition.KILLS,
    conditionAmount: 40
	},
	{
    ...foliageBase,
		_id: "camos.dry_fields",
    name: "Dry Fields",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
	},
	{
    ...foliageBase,
		_id: "camos.ferns",
    name: "Ferns",
    condition: ECondition.PRONE,
    conditionAmount: 30
	},
	{
    ...foliageBase,
		_id: "camos.fibrous",
    name: "Fibrous",
    condition: ECondition.KILLS,
    conditionAmount: 50
	},
	{
    ...foliageBase,
		_id: "camos.leafless",
    name: "Leafless",
    condition: ECondition.ONE_SHOT,
    conditionAmount: 25
	},
	{
    ...foliageBase,
		_id: "camos.mosswood",
    name: "Mosswood",
    condition: ECondition.KILLS,
    conditionAmount: 40
	},
	{
    ...foliageBase,
		_id: "camos.scratched_up",
    name: "Scratched Up",
    condition: ECondition.ADS,
    conditionAmount: 50
	},
	{
    ...foliageBase,
		_id: "camos.snow_grass",
    name: "Snow Grass",
    condition: ECondition.DOUBLE_KILLS_10S,
    conditionAmount: 10
	},
	{
    ...foliageBase,
		_id: "camos.urban_dusk",
    name: "Urban Dusk",
    condition: ECondition.BEHIND,
    conditionAmount: 15
	}
]


const funBase = {
  type: ECamoType.BASE,
  game: EGame.MW2,
  family: ECamoFamily.FUN,
  gameMode: EGameMode.MULTIPLAYER
}
const funFamily: ICamo[] = [
	{
		_id: "camos.8_bit_static",
		name: "8-bit Static",
		condition: ECondition.AKIMBO,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.bedlam",
    name: "Bedlam",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.bioluminescent",
    name: "Bioluminescent",
    condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.bloodied",
    name: "Bloodied",
    condition: ECondition.HIPFIRE,
		conditionAmount: 10,
    ...funBase
	},
	{
		_id: "camos.cloud_hopper",
    name: "Cloud Hopper",
    condition: ECondition.ADS,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.coral_reef",
    name: "Coral Reef",
    condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.crimson_streak",
    name: "Crimson Streak",
    condition: ECondition.MOUNTED,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.crosshatch",
    name: "Crosshatch",
    condition: ECondition.AKIMBO,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.dappled_shade",
    name: "Dappled Shade",
    condition: ECondition.POINT_BLANK,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.dark_violet",
    name: "Dark Violet",
    condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
    ...funBase
	},
	{
		_id: "camos.demise",
    name: "Demise",
    condition: ECondition.ADS,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.fuzzy_spectrum",
    name: "Fuzzy Spectrum",
    condition: ECondition.HIPFIRE,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.germinate",
    name: "Germinate",
    condition: ECondition.BEHIND,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.goodnight_vibes",
    name: "Goodnight Vibes",
    condition: ECondition.MOUNTED,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.intergalactic",
    name: "Intergalactic",
    condition: ECondition.MOUNTED,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.leopard",
    name: "Leopard",
    condition: ECondition.MOUNTED,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.light_revisited",
    name: "Light Revisited",
    condition: ECondition.SUPPRESSOR,
		conditionAmount: 50,
    ...funBase
	},
	{
		_id: "camos.lost_signal",
    name: "Lost Signal",
    condition: ECondition.BEHIND,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.lumber_tactical",
    name: "Lumber Tactical",
    condition: ECondition.FOCUSED,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.neon_peaks",
    name: "Neon Peaks",
    condition: ECondition.POINT_BLANK,
		conditionAmount: 25,
    ...funBase
	},
	{
		_id: "camos.oxidation",
    name: "Oxidation",
    condition: ECondition.KILLS,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.oxysporum",
    name: "Oxysporum",
    condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...funBase
	},
	{
		_id: "camos.painted_pig",
    name: "Painted Pig",
    condition: ECondition.SUPPRESSOR,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.party_time",
    name: "Party Time",
    condition: ECondition.AKIMBO,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.pixel_coast",
    name: "Pixel Coast",
    condition: ECondition.POINT_BLANK,
		conditionAmount: 10,
    ...funBase
	},
	{
		_id: "camos.prismatic",
    name: "Prismatic",
    condition: ECondition.BEHIND,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.projectile",
    name: "Projectile",
    condition: ECondition.POINT_BLANK,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.psycoactive",
    name: "Psycoactive",
    condition: ECondition.FOCUSED,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.rad_reverb",
    name: "Rad Reverb",
    condition: ECondition.AKIMBO,
		conditionAmount: 40,
    ...funBase
	},
	{
		_id: "camos.rad_n_rancid",
		name: "Rad n' Rancid",
    condition: ECondition.PRONE,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.rainbow_tiger",
    name: "Rainbow Tiger",
    condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...funBase
	},
	{
		_id: "camos.rhyolitic",
    name: "Rhyolitic",
    condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...funBase
	},
	{
		_id: "camos.riot_s_nest",
		name: "Riot's Nest",
    condition: ECondition.ONE_SHOT,
		conditionAmount: 20,
    ...funBase
	},
	{
		_id: "camos.rush_hour",
    name: "Rush Hour",
    condition: ECondition.KILLS,
		conditionAmount: 50,
    ...funBase
	},
	{
		_id: "camos.snow_leopard",
    name: "Snow Leopard",
    condition: ECondition.BEHIND,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.snow_tiger",
    name: "Snow Tiger",
    condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...funBase
	},
	{
		_id: "camos.speckled",
    name: "Speckled",
    condition: ECondition.KILLS,
		conditionAmount: 50,
    ...funBase
	},
	{
		_id: "camos.unlit_showers",
    name: "Unlit Showers",
    condition: ECondition.BEHIND,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.virulent_strain",
    name: "Virulent Strain",
    condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 15,
    ...funBase
	},
	{
		_id: "camos.wild_funk",
    name: "Wild Funk",
    condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...funBase
	}
]


const geometricBase = {
  type: ECamoType.BASE,
  game: EGame.MW2,
  family: ECamoFamily.GEOMETRIC,
  gameMode: EGameMode.MULTIPLAYER
}
const geometricFamily: ICamo[] = [
  {
    _id: "camos.autumn_dazzle",
    name: "Autumn Dazzle",
		condition: ECondition.CROUCH,
		conditionAmount: 30,
    ...geometricBase
  },
  {
    _id: "camos.blades",
    name: "Blades",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...geometricBase
  },
  {
    _id: "camos.canary_stone",
    name: "Canary Stone",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.chrysolite",
    name: "Chrysolite",
		condition: ECondition.AKIMBO,
		conditionAmount: 30,
    ...geometricBase
  },
  {
    _id: "camos.deciduous",
    name: "Deciduous",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...geometricBase
  },
  {
    _id: "camos.dune_sea",
    name: "Dune Sea",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...geometricBase
  },
  {
    _id: "camos.forest_ice",
    name: "Forest Ice",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...geometricBase
  },
  {
    _id: "camos.fractal_lapse",
    name: "Fractal Lapse",
		condition: ECondition.CROUCH,
		conditionAmount: 15,
    ...geometricBase
  },
  {
    _id: "camos.granite",
    name: "Granite",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.green_edges",
    name: "Green Edges",
		condition: ECondition.HIPFIRE,
		conditionAmount: 20,
    ...geometricBase
  },
  {
    _id: "camos.icepick",
    name: "Icepick",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.motley",
    name: "Motley",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...geometricBase
  },
  {
    _id: "camos.poison",
    name: "Poison",
		condition: ECondition.HIPFIRE,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.shale",
    name: "Shale",
		condition: ECondition.HIPFIRE,
		conditionAmount: 15,
    ...geometricBase
  },
  {
    _id: "camos.scattered_lines",
    name: "Scattered Lines",
		condition: ECondition.HEADSHOT,
		conditionAmount: 20,
    ...geometricBase
  },
  {
    _id: "camos.splintered_asphalt",
    name: "Splintered Asphalt",
		condition: ECondition.MOUNTED,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.stoked_flame",
    name: "Stoked Flame",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 15,
    ...geometricBase
  },
  {
    _id: "camos.stone_guard",
    name: "Stone Guard",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 15,
    ...geometricBase
  },
  {
    _id: "camos.stone_ridge",
    name: "Stone Ridge",
		condition: ECondition.BEHIND,
		conditionAmount: 20,
    ...geometricBase
  },
  {
    _id: "camos.sunset",
    name: "Sunset",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.uncheckered",
    name: "Uncheckered",
		condition: ECondition.HIPFIRE,
		conditionAmount: 10,
    ...geometricBase
  },
  {
    _id: "camos.zigguart",
    name: "Zigguart",
		condition: ECondition.ADS,
		conditionAmount: 40,
    ...geometricBase
  },
  {
    _id: "camos.foundation",
    name: "Foundation",
		condition: ECondition.HIPFIRE,
		conditionAmount: 20,
    ...geometricBase
  }
]


const reptileBase = {
  type: ECamoType.BASE,
  game: EGame.MW2,
  family: ECamoFamily.REPTILE,
  gameMode: EGameMode.MULTIPLAYER
}
const reptileFamily: ICamo[] = [
	{
		...reptileBase,
		_id: "camos.anaconda",
    name: "Anaconda",
		condition: ECondition.BEHIND,
		conditionAmount: 15
	},
	{
		...reptileBase,
		_id: "camos.bullsnake",
    name: "Bullsnake",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 25
	},
	{
		...reptileBase,
		_id: "camos.coral_snake",
    name: "Coral Snake",
		condition: ECondition.CROUCH,
		conditionAmount: 30
	},
	{
		...reptileBase,
		_id: "camos.dark_echo",
    name: "Dark Echo",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.garter_snake",
    name: "Garter Snake",
		condition: ECondition.HIPFIRE,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.gecko",
    name: "Gecko",
		condition: ECondition.ADS,
		conditionAmount: 50
	},
	{
		...reptileBase,
		_id: "camos.heavy_commando",
    name: "Heavy Commando",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.ice_cave",
    name: "Ice Cave",
		condition: ECondition.BEHIND,
		conditionAmount: 15
	},
	{
		...reptileBase,
		_id: "camos.muddied",
    name: "Muddied",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 40
	},
	{
		...reptileBase,
		_id: "camos.night_terror",
    name: "Night Terror",
		condition: ECondition.MOUNTED,
		conditionAmount: 20
	},
	{
		...reptileBase,
		_id: "camos.python",
    name: "Python",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 50
	},
	{
		...reptileBase,
		_id: "camos.rattlesnake",
    name: "Rattlesnake",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.shedding",
    name: "Shedding",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.skin_and_scales",
    name: "Skin and Scales",
		condition: ECondition.HIPFIRE,
		conditionAmount: 5
	},
	{
		...reptileBase,
		_id: "camos.snowy_nights",
    name: "Snowy Nights",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...reptileBase,
		_id: "camos.torn_scales",
    name: "Torn Scales",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...reptileBase,
		_id: "camos.toxicity",
    name: "Toxicity",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	}
]


const skullsBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.SKULLS,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const skullsFamily: ICamo[] = [
	{
    ...skullsBase,
		_id: "camos.chtulu",
    name: "Chtulu",
    condition: ECondition.HIPFIRE,
    conditionAmount: 10
	},
	{
    ...skullsBase,
		_id: "camos.haunting",
    name: "Haunting",
    condition: ECondition.CROUCH,
    conditionAmount: 30
	},
	{
    ...skullsBase,
		_id: "camos.lichyard",
    name: "Lichyard",
    condition: ECondition.SUPPRESSOR,
    conditionAmount: 50
	},
	{
    ...skullsBase,
		_id: "camos.necropolis",
    name: "Necropolis",
    condition: ECondition.PRONE,
    conditionAmount: 30
	},
	{
    ...skullsBase,
		_id: "camos.postmortem",
    name: "Postmortem",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 15
	},
	{
    ...skullsBase,
		_id: "camos.styx",
    name: "Styx",
    condition: ECondition.DOUBLE_KILLS_10S,
    conditionAmount: 20
	},
	{
    ...skullsBase,
		_id: "camos.what_skulls_",
		name: "What Skulls?",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
	}
]


const solid_colorsBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.SOLID_COLORS,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const solid_colorsFamily: ICamo[] = [
	{
		...solid_colorsBase,
		_id: "camos.aqua",
    name: "Aqua",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 20
	},
	{
		...solid_colorsBase,
		_id: "camos.azul",
    name: "Azul",
		condition: ECondition.AKIMBO,
		conditionAmount: 40
	},
	{
		...solid_colorsBase,
		_id: "camos.charcoal",
    name: "Charcoal",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...solid_colorsBase,
		_id: "camos.clay",
    name: "Clay",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...solid_colorsBase,
		_id: "camos.ghastly_green",
    name: "Ghastly Green",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 15
	},
	{
		...solid_colorsBase,
		_id: "camos.hunting_orange",
    name: "Hunting Orange",
		condition: ECondition.MOUNTED,
		conditionAmount: 20
	},
	{
		...solid_colorsBase,
		_id: "camos.navy",
    name: "Navy",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 10
	},
	{
		...solid_colorsBase,
		_id: "camos.neon_loud",
    name: "Neon Loud",
		condition: ECondition.PRONE,
		conditionAmount: 30
	},
	{
		...solid_colorsBase,
		_id: "camos.olive",
    name: "Olive",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...solid_colorsBase,
		_id: "camos.pine",
    name: "Pine",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...solid_colorsBase,
		_id: "camos.pinkish",
    name: "Pinkish",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 10
	},
	{
		...solid_colorsBase,
		_id: "camos.sand",
    name: "Sand",
		condition: ECondition.KILLS,
		conditionAmount: 40
	},
	{
		...solid_colorsBase,
		_id: "camos.scrarlet",
    name: "Scrarlet",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...solid_colorsBase,
		_id: "camos.slate",
    name: "Slate",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...solid_colorsBase,
		_id: "camos.unplumbed",
    name: "Unplumbed",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...solid_colorsBase,
		_id: "camos.whiteout",
    name: "Whiteout",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	}
]


const spray_paintBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.SPRAY_PAINT,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const spray_paintFamily: ICamo[] = [
  {
    _id: "camos.arctic_growth",
    name: "Arctic Growth",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  },
  {
    _id: "camos.china_lake",
    name: "China Lake",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/China_Lake_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.cloud_static",
    name: "Cloud Static",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 20,
    ...spray_paintBase
  },
  {
    _id: "camos.darkfall",
    name: "Darkfall",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Darkfall_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.day_marsh",
    name: "Day Marsh",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Day_Marsh_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.dead_hive",
    name: "Dead Hive",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Dead_Hive_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.desert_snake",
    name: "Desert Snake",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Desert_Snake_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.deserted",
    name: "Deserted",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...spray_paintBase
  },
  {
    _id: "camos.forest_shadow",
    name: "Forest Shadow",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Forest_Shadow_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.gaseous",
    name: "Gaseous",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  },
  {
    _id: "camos.gladiator",
    name: "Gladiator",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Gladiator_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.grass_snake",
    name: "Grass Snake",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Grass_Snake_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.mud_snake",
    name: "Mud Snake",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...spray_paintBase
  },
  {
		_id: "camos.rip_n__tear",
    name: "Rip n' Tear",
		condition: ECondition.KILLS,
		conditionAmount: 20,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Rip_n_Tear_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.ripple_effect",
    name: "Ripple Effect",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Ripple_Effect_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.sand_viper",
    name: "Sand Viper",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Sand_Viper_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.sandfall",
    name: "Sandfall",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 40,
    ...spray_paintBase
  },
  {
    _id: "camos.sandpaper",
    name: "Sandpaper",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...spray_paintBase
  },
  {
    _id: "camos.scales",
    name: "Scales",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Scales_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.scratch",
    name: "Scratch",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Scratch_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.shark_net",
    name: "Shark Net",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Shark_Net_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.snake_oil",
    name: "Snake Oil",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  },
  {
    _id: "camos.sponge_tac",
    name: "Sponge Tac",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Sponge_Tac_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.surface_tension",
    name: "Surface Tension",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Surface_Tension_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.tarnished",
    name: "Tarnished",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Tarnished_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.tunnels",
    name: "Tunnels",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  },
  {
    _id: "camos.unearthed",
    name: "Unearthed",
		condition: ECondition.DOUBLE_KILLS_10S,
		conditionAmount: 10,
    ...spray_paintBase,
    imageUrl: "https://raphiki.elraphik.net/s/resources/cod-camo-tracker/camos/spray_paint/Unearthed_Camo_Icon_MWII.png"
  },
  {
    _id: "camos.vapor_storm",
    name: "Vapor Storm",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  },
	{
    _id: "camos.veldt",
    name: "Veldt",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...spray_paintBase
  }
]


const stripesBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.STRIPES,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const stripesFamily: ICamo[] = [
	{
		...stripesBase,
		_id: "camos.beached",
    name: "Beached",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.commando_paint",
    name: "Commando Paint",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.dark_rainforest",
    name: "Dark Rainforest",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.dire_growth",
    name: "Dire Growth",
		condition: ECondition.MOUNTED,
		conditionAmount: 20
	},
	{
		...stripesBase,
		_id: "camos.field_ops",
    name: "Field Ops",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...stripesBase,
		_id: "camos.ground_cover",
    name: "Ground Cover",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10
	},
	{
		...stripesBase,
		_id: "camos.marshland",
    name: "Marshland",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.mud_bath",
    name: "Mud Bath",
		condition: ECondition.KILLS,
		conditionAmount: 40
	},
	{
		...stripesBase,
		_id: "camos.paths_of_light",
    name: "Paths of Light",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 40
	},
	{
		...stripesBase,
		_id: "camos.savannah",
    name: "Savannah",
		condition: ECondition.ADS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.shadow_stalker",
    name: "Shadow Stalker",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.sky_cover",
    name: "Sky Cover",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 15
	},
	{
		...stripesBase,
		_id: "camos.snowed_in",
    name: "Snowed In",
		condition: ECondition.PRONE,
		conditionAmount: 25
	},
	{
		...stripesBase,
		_id: "camos.stalking_cat",
    name: "Stalking Cat",
		condition: ECondition.MOUNTED,
		conditionAmount: 20
	},
	{
		...stripesBase,
		_id: "camos.tendrils",
    name: "Tendrils",
		condition: ECondition.PRONE,
		conditionAmount: 30
	},
	{
		...stripesBase,
		_id: "camos.timber",
    name: "Timber",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.urban_zebra",
    name: "Urban Zebra",
		condition: ECondition.KILLS,
		conditionAmount: 40
	},
	{
		...stripesBase,
		_id: "camos.wet_sands",
    name: "Wet Sands",
		condition: ECondition.KILLS,
		conditionAmount: 50
	},
	{
		...stripesBase,
		_id: "camos.wild_zebra",
    name: "Wild Zebra",
		condition: ECondition.ONE_SHOT,
		conditionAmount: 25
	},
	{
		...stripesBase,
		_id: "camos.zany_zebra",
    name: "Zany Zebra",
		condition: ECondition.KILLS,
		conditionAmount: 40
	}
]


const tigerBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.TIGER,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const tigerFamily: ICamo[] = [
	{
    ...tigerBase,
		_id: "camos.abominable",
    name: "Abominable",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
	},
	{
    ...tigerBase,
		_id: "camos.acid_drift",
    name: "Acid Drift",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 25
	},
	{
    ...tigerBase,
		_id: "camos.blue_tiger",
    name: "Blue Tiger",
    condition: ECondition.KILLS,
    conditionAmount: 50
	},
	{
    ...tigerBase,
		_id: "camos.dank_forest",
    name: "Dank Forest",
    condition: ECondition.CROUCH,
    conditionAmount: 30
	},
	{
    ...tigerBase,
		_id: "camos.desert_cat",
    name: "Desert Cat",
    condition: ECondition.SUPPRESSOR,
    conditionAmount: 50
	},
	{
    ...tigerBase,
		_id: "camos.desert_wave",
    name: "Desert Wave",
    condition: ECondition.ADS,
    conditionAmount: 25
	},
	{
    ...tigerBase,
		_id: "camos.ethereal_rampage",
    name: "Ethereal Rampage",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
	},
	{
    ...tigerBase,
		_id: "camos.faded_veil",
    name: "Faded Veil",
    condition: ECondition.POINT_BLANK,
    conditionAmount: 15
	},
	{
    ...tigerBase,
		_id: "camos.feral_beast",
    name: "Feral Beast",
    condition: ECondition.BEHIND,
    conditionAmount: 15
	},
	{
    ...tigerBase,
		_id: "camos.intoxicate",
    name: "Intoxicate",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
	},
	{
    ...tigerBase,
		_id: "camos.mudslide",
    name: "Mudslide",
    condition: ECondition.HIPFIRE,
    conditionAmount: 10
	},
	{
    ...tigerBase,
		_id: "camos.neon_shards",
    name: "Neon Shards",
    condition: ECondition.PRONE,
    conditionAmount: 30
	},
	{
    ...tigerBase,
		_id: "camos.overgrown",
    name: "Overgrown",
    condition: ECondition.MOUNTED,
    conditionAmount: 20
	},
	{
    ...tigerBase,
		_id: "camos.red_tiger",
    name: "Red Tiger",
    condition: ECondition.BEHIND,
    conditionAmount: 15
	},
	{
    ...tigerBase,
		_id: "camos.shadow_tiger",
    name: "Shadow Tiger",
    condition: ECondition.CROUCH,
    conditionAmount: 30
	},
	{
    ...tigerBase,
		_id: "camos.sunlit_croc",
    name: "Sunlit Croc",
    condition: ECondition.DOUBLE_KILLS,
    conditionAmount: 10
	},
	{
    ...tigerBase,
		_id: "camos.teal_tiger",
    name: "Teal Tiger",
    condition: ECondition.SUPPRESSOR,
    conditionAmount: 50
	},
	{
    ...tigerBase,
		_id: "camos.tiger_stripes",
    name: "Tiger Stripes",
    condition: ECondition.HIPFIRE,
    conditionAmount: 15
	},
	{
    ...tigerBase,
		_id: "camos.velvet_midnight",
    name: "Velvet Midnight",
    condition: ECondition.ADS,
    conditionAmount: 15
	}
]


const woodlandBase = {
  type: ECamoType.BASE,
  family: ECamoFamily.WOODLAND,
  game: EGame.MW2,
  gameMode: EGameMode.MULTIPLAYER
}
const woodlandFamily: ICamo[] = [
	{
		_id: "camos.arctic_chill",
    name: "Arctic Chill",
		condition: ECondition.CROUCH,
		conditionAmount: 25,
    ...woodlandBase
	},
	{
		_id: "camos.azure_fray",
    name: "Azure Fray",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...woodlandBase
	},
	{
		_id: "camos.cemented",
    name: "Cemented",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.concrete_jungle",
    name: "Concrete Jungle",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.cyber_plateau",
    name: "Cyber Plateau",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.dark_canopy",
    name: "Dark Canopy",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.dead_leaves",
    name: "Dead Leaves",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...woodlandBase
	},
	{
		_id: "camos.desert_hybrid",
    name: "Desert Hybrid",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.dune_stalker",
    name: "Dune Stalker",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.forest_water",
    name: "Forest Water",
		condition: ECondition.MOUNTED,
		conditionAmount: 20,
    ...woodlandBase
	},
	{
		_id: "camos.green_woods",
    name: "Green Woods",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.hidden_snake",
    name: "Hidden Snake",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.hunter",
    name: "Hunter",
		condition: ECondition.POINT_BLANK,
		conditionAmount: 20,
    ...woodlandBase
	},
	{
		_id: "camos.jungle_cat",
    name: "Jungle Cat",
		condition: ECondition.SUPPRESSOR,
		conditionAmount: 40,
    ...woodlandBase
	},
	{
		_id: "camos.kill_brush",
    name: "Kill Brush",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.midnight_bay",
    name: "Midnight Bay",
		condition: ECondition.ADS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.modern_woodland",
    name: "Modern Woodland",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.outcrop",
    name: "Outcrop",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...woodlandBase
	},
	{
		_id: "camos.poison_rivers",
    name: "Poison Rivers",
		condition: ECondition.CROUCH,
		conditionAmount: 20,
    ...woodlandBase
	},
	{
		_id: "camos.red_smoke",
    name: "Red Smoke",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...woodlandBase
	},
	{
		_id: "camos.rocky_desert",
    name: "Rocky Desert",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.snowdrift",
    name: "Snowdrift",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.tangographical",
    name: "Tangographical",
		condition: ECondition.DOUBLE_KILLS,
		conditionAmount: 10,
    ...woodlandBase
	},
	{
		_id: "camos.urban_foliage",
    name: "Urban Foliage",
		condition: ECondition.KILLS,
		conditionAmount: 50,
    ...woodlandBase
	},
	{
		_id: "camos.void_and_light",
    name: "Void and Light",
		condition: ECondition.KILLS,
		conditionAmount: 40,
    ...woodlandBase
	}
]



export const mw2MultiplayerCamosObj = {weapon_completionType, category_completionType, all_categories_completionType, classicFamily, cliffsideFamily, digitalFamily, dragonFamily, foliageFamily, funFamily, geometricFamily, reptileFamily, skullsFamily, solid_colorsFamily, spray_paintFamily, stripesFamily, tigerFamily, woodlandFamily}

export const mw2MultiplayerCamosList: ICamo[][]=  [mastery, weapon_completionType, category_completionType, all_categories_completionType, classicFamily, cliffsideFamily, digitalFamily, dragonFamily, foliageFamily, funFamily, geometricFamily, reptileFamily, skullsFamily, solid_colorsFamily, spray_paintFamily, stripesFamily, tigerFamily, woodlandFamily]