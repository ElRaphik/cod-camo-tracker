import { EGame } from "../common/enums"
import { IWeapon } from "../models/weapon"


const assault_rifflesBase = {
  category: 'categories.mw2.assault_riffles',
  game: EGame.MW2,
  weapon_completion: "camos.gold",
  category_completion: "camos.platinum",
  all_categories_completion: "camos.polyatomic"
}
const assault_rifflesList: IWeapon[] = [
  {
    ...assault_rifflesBase,
    _id: "kastov_762",
    name: "Kastov 762",
    camos: [
      "camos.urban_foliage",
      "camos.rip_n__tear",
      "camos.forest_ice",
      "camos.red_tiger"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "tempus_razorback",
    name: "Tempus Razorback",
    camos: [
      "camos.snake_oil",
      "camos.dark_croc",
      "camos.alien_waves",
      "camos.sky_cover"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "m13c",
    name: "M13C",
    camos: [
      "camos.cemented",
      "camos.poison_rivers",
      "camos.demise",
      "camos.virulent_strain"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "fr_avancer",
    name: "FR Avancer",
    camos: [
      "camos.fibrous",
      "camos.scattered_lines",
      "camos.bioluminescent",
      "camos.postmortem"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "tr_76_geist",
    name: "TR-76 Geist",
    camos: [
      "camos.veldt",
      "camos.wild_funk",
      "camos.scratched_up",
      "camos.light_revisited"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "m4",
    name: "M4",
    camos: [
      "camos.scales",
      "camos.desert_hybrid",
      "camos.dark_leaves",
      "camos.new_urban"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "taq_56",
    name: "TAQ-56",
    camos: [
      "camos.hidden_snake",
      "camos.icepick",
      "camos.stonewall_digital",
      "camos.back_in_blue"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "lachmann_556",
    name: "Lachmann-556",
    camos: [
      "camos.marshland",
      "camos.pine",
      "camos.dark_tiger_digital",
      "camos.cthulhu"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "stb_556",
    name: "STB 556",
    camos: [
      "camos.sponge_tac",
      "camos.black_top",
      "camos.slate",
      "camos.neon_pink"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "m16",
    name: "M16",
    camos: [
      "camos.modern_woodland",
      "camos.marsh_digital",
      "camos.dank_forest",
      "camos.intoxicate"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "kastov_74u",
    name: "Kastov-74U",
    camos: [
      "camos.ripple_effect",
      "camos.jungle_digital",
      "camos.canary_stone",
      "camos.chemical_reaction"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "kastov_545",
    name: "Kastov 545",
    camos: [
      "camos.snowdrift",
      "camos.mudslide",
      "camos.savannah",
      "camos.petri_digital"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "chimera",
    name: "Chimera",
    camos: [
      "camos.charcoal",
      "camos.aztec",
      "camos.diabolical",
      "camos.snow_leopard"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "m13b",
    name: "M13B",
    camos: [
      "camos.tarnished",
      "camos.field_ops",
      "camos.projectile",
      "camos.ice_cave"
    ]
  },
  {
    ...assault_rifflesBase,
    _id: "iso_hemlock",
    name: "ISO Hemlock",
    camos: [
      "camos.gaseous",
      "camos.cloud_hopper",
      "camos.lost_signal",
      "camos.paths_of_light"
    ]
  }
]


const battle_rifflesBase = {
  category: 'categories.mw2.battle_riffles',
  game: EGame.MW2,
  weapon_completion: "camos.gold",
  category_completion: "camos.platinum",
  all_categories_completion: "camos.polyatomic"
}
const battle_rifflesList: IWeapon[] = [
  {
    ...battle_rifflesBase,
    name: "SO-14",
    camos: [
      "camos.dune_stalker",
      "camos.reptilian",
      "camos.heavy_commando",
      "camos.tendrils"
    ]
  },
  {
    ...battle_rifflesBase,
    name: "Cronen Squall",
    camos: [
      "camos.vapor_storm",
      "camos.ghastly_green",
      "camos.stone_ridge",
      "camos.intergalactic"
    ]
  },
  {
    ...battle_rifflesBase,
    name: "Lachmann-762",
    camos: [
      "camos.day_mars",
      "camos.desert_oil_digital",
      "camos.stalking_cat",
      "camos.internal_flame"
    ]
  },
  {
    ...battle_rifflesBase,
    name: "TAQ-V",
    camos: [
      "camos.dune_sea",
      "camos.faded_veil",
      "camos.anaconda",
      "camos.noxious_neon"
    ]
  },
  {
    ...battle_rifflesBase,
    name: "FTAC Recon",
    camos: [
      "camos.beached",
      "camos.torn_scales",
      "camos.desert_cat",
      "camos.haunting"
    ]
  }
]


const smgsBase = {
  category: 'categories.mw2.smgs',
  game: EGame.MW2,
  weapon_completion: "camos.gold",
  category_completion: "camos.platinum",
  all_categories_completion: "camos.polyatomic"
}
const smgsList: IWeapon[] = [
  {
    ...smgsBase,
    name: "FSS Hurricane",
    camos: [
      "camos.green_woods",
      "camos.python",
      "camos.moon_shadow",
      "camos.neon_loud"
    ]
  },
  {
    ...smgsBase,
    name: "PDSW 528",
    camos: [
      "camos.shadow_stalker",
      "camos.gecko",
      "camos.shale",
      "camos.pinkish"
    ]
  },
  {
    ...smgsBase,
    name: "ISO 45",
    camos: [
      "camos.tunnels",
      "camos.ziggurat",
      "camos.dappled_shade",
      "camos.prismatic"
    ]
  },
  {
    ...smgsBase,
    name: "Lachmann Shroud",
    camos: [
      "camos.mud_snake",
      "camos.germinate",
      "camos.acrid_drift",
      "camos.goodnight_vibes"
    ]
  },
  {
    ...smgsBase,
    name: "ISO 9mm",
    camos: [
      "camos.digital_boulder",
      "camos.foundation",
      "camos.snow_tiger",
      "camos.neon_peaks"
    ]
  },
  {
    ...smgsBase,
    name: "VEL 46",
    camos: [
      "camos.arid_digital",
      "camos.midnight_bay",
      "camos.tagged",
      "camos.whiteout"
    ]
  },
  {
    ...smgsBase,
    name: "Lachmann Sub",
    camos: [
      "camos.darkfall",
      "camos.arctic_digital",
      "camos.crime_scene",
      "camos.poison"
    ]
  },
  {
    ...smgsBase,
    name: "MX9",
    camos: [
      "camos.concrete_jungle",
      "camos.forest_digital",
      "camos.overgrown",
      "camos.rainbow_tiger"
    ]
  },
  {
    ...smgsBase,
    name: "Vaznev-9K",
    camos: [
      "camos.snow_melt_digital",
      "camos.kill_brush",
      "camos.forest_rain",
      "camos.omnihex"
    ]
  },
  {
    ...smgsBase,
    name: "Minibak",
    camos: [
      "camos.timber",
      "camos.rattlesnake",
      "camos.green_digital",
      "camos.stoked_flame"
    ]
  },
  {
    ...smgsBase,
    name: "BAS-P",
    camos: [
      "camos.grass_snake",
      "camos.bark_digital",
      "camos.urban_dusk",
      "camos.dark_violet"
    ]
  },
  {
    ...smgsBase,
    name: "Fennec 45",
    camos: [
      "camos.motley",
      "camos.shadow_tiger",
      "camos.feral_beast",
      "camos.80_s_fever"
    ]
  }
]


const shotgunsBase = {
  category: 'categories.mw2.shotguns',
  game: EGame.MW2,
  weapon_completion: "camos.gold",
  category_completion: "camos.platinum_shotguns_snipers",
  all_categories_completion: "camos.polyatomic_shotguns_snipers_handguns"
}
const shotgunsList: IWeapon[] = [
  {
    ...shotgunsBase,
    name: "Bryson 800",
    camos: [
      "camos.mud_bath",
      "camos.bamboo",
      "camos.ground_cover",
      "camos.aqua"
    ]
  },
  {
    ...shotgunsBase,
    name: "MX Guardian",
    camos: [
      "camos.wet_sands",
      "camos.connected_dots",
      "camos.red_smoke",
      "camos.green_edges"
    ]
  },
  {
    ...shotgunsBase,
    name: "Lockwood 300",
    camos: [
      "camos.mosswood",
      "camos.jungle_cat",
      "camos.red_cell",
      "camos.hunting_orange"
    ]
  },
  {
    ...shotgunsBase,
    name: "Expedite 12",
    camos: [
      "camos.forest_shadow",
      "camos.tiger_stripes",
      "camos.snowed_in",
      "camos.violent_orchid"
    ]
  },
  {
    ...shotgunsBase,
    name: "Bryson 890",
    camos: [
      "camos.snowstorm_digital",
      "camos.stone_guard",
      "camos.shedding",
      "camos.arctic_chill"
    ]
  },
  {
    ...shotgunsBase,
    name: "KV Broadside",
    camos: [
      "camos.unplumbed",
      "camos.conflagration",
      "camos.etheral_rampage",
      "camos.riot_s_nest"
    ]
  }
]


export const mw3WeaponsList: IWeapon[][] = [assault_rifflesList, battle_rifflesList, smgsList, shotgunsList]

export const mw3WeaponsObject = {assault_rifflesList, battle_rifflesList, smgsList, shotgunsList}