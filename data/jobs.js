/* exported jobList */
var jobList = [
    {
        id: 0,
        name: "NONE",
        fullname: "None",
        type: "None",
        position_type: "None",
    },
    {
        id: 1,
        name: "GLA",
        fullname: "Gladiator",
        type: "Tank",
        position_type: "Melee",
    },
    {
        id: 2,
        name: "PGL",
        fullname: "Pugilist",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 3,
        name: "MRD",
        fullname: "Marauder",
        type: "Tank",
        position_type: "Melee",
    },
    {
        id: 4,
        name: "LNC",
        fullname: "Lancer",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 5,
        name: "ARC",
        fullname: "Archer",
        type: "RangedDPS",
        position_type: "Ranged",
    },
    {
        id: 6,
        name: "CNJ",
        fullname: "Conjurer",
        type: "Healer",
        position_type: "Caster",
    },
    {
        id: 7,
        name: "THM",
        fullname: "Thaumaturge",
        type: "CasterDPS",
        position_type: "Caster",
    },
    {
        id: 8,
        name: "CRP",
        fullname: "Carpenter",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 9,
        name: "BSM",
        fullname: "Blacksmith",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 10,
        name: "ARM",
        fullname: "Armorer",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 11,
        name: "GSM",
        fullname: "Goldsmith",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 12,
        name: "LTW",
        fullname: "Leatherworker",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 13,
        name: "WVR",
        fullname: "Weaver",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 14,
        name: "ALC",
        fullname: "Alchemist",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 15,
        name: "CUL",
        fullname: "Culinarian",
        type: "Crafter",
        position_type: "None",
    },
    {
        id: 16,
        name: "MIN",
        fullname: "Miner",
        type: "Gatherer",
        position_type: "None",
    },
    {
        id: 17,
        name: "BTN",
        fullname: "Botanist",
        type: "Gatherer",
        position_type: "None",
    },
    {
        id: 18,
        name: "FSH",
        fullname: "Fisher",
        type: "Gatherer",
        position_type: "None",
    },
    {
        id: 19,
        name: "PLD",
        fullname: "Paladin",
        type: "Tank",
        position_type: "Melee",
        base: "GLA",
    },
    {
        id: 20,
        name: "MNK",
        fullname: "Monk",
        type: "MeleeDPS",
        position_type: "Melee",
        base: "PUG",
    },
    {
        id: 21,
        name: "WAR",
        fullname: "Warrior",
        type: "Tank",
        position_type: "Melee",
        base: "MRD",
    },
    {
        id: 22,
        name: "DRG",
        fullname: "Dragoon",
        type: "MeleeDPS",
        position_type: "Melee",
        base: "LNC",
    },
    {
        id: 23,
        name: "BRD",
        fullname: "Bard",
        type: "RangedDPS",
        position_type: "Ranged",
        base: "ARC",
    },
    {
        id: 24,
        name: "WHM",
        fullname: "White Mage",
        type: "Healer",
        position_type: "Caster",
        base: "CNJ",
    },
    {
        id: 25,
        name: "BLM",
        fullname: "Black Mage",
        type: "CasterDPS",
        position_type: "Caster",
        base: "THM",
    },
    {
        id: 26,
        name: "ACN",
        fullname: "Arcanist",
        type: "CasterDPS",
        position_type: "Caster",
    },
    {
        id: 27,
        name: "SMN",
        fullname: "Summoner",
        type: "CasterDPS",
        position_type: "Caster",
        base: "ACN",
    },
    {
        id: 28,
        name: "SCH",
        fullname: "Scholar",
        type: "Healer",
        position_type: "Caster",
        base: "ACN",
    },
    {
        id: 29,
        name: "ROG",
        fullname: "Rogue",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 30,
        name: "NIN",
        fullname: "Ninja",
        type: "MeleeDPS",
        position_type: "Melee",
        base: "ROG",
    },
    {
        id: 31,
        name: "MCH",
        fullname: "Machinist",
        type: "RangedDPS",
        position_type: "Ranged",
    },
    {
        id: 32,
        name: "DRK",
        fullname: "Dark Knight",
        type: "Tank",
        position_type: "Melee",
    },
    {
        id: 33,
        name: "AST",
        fullname: "Astrologian",
        type: "Healer",
        position_type: "Caster",
    },
    {
        id: 34,
        name: "SAM",
        fullname: "Samurai",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 35,
        name: "RDM",
        fullname: "Red Mage",
        type: "CasterDPS",
        position_type: "Caster",
    },
    {
        id: 36,
        name: "BLU",
        fullname: "Blue Mage",
        type: "CasterDPS",
        position_type: "Caster",
    },
    {
        id: 37,
        name: "GNB",
        fullname: "Gunbreaker",
        type: "Tank",
        position_type: "Melee",
    },
    {
        id: 38,
        name: "DNC",
        fullname: "Dancer",
        type: "RangedDPS",
        position_type: "Ranged",
    },
    {
        id: 39,
        name: "RPR",
        fullname: "Reaper",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 40,
        name: "SGE",
        fullname: "Sage",
        type: "Healer",
        position_type: "Caster",
    },
    {
        id: 41,
        name: "VPR",
        fullname: "Viper",
        type: "MeleeDPS",
        position_type: "Melee",
    },
    {
        id: 42,
        name: "PCT",
        fullname: "Pictomancer",
        type: "CasterDPS",
        position_type: "Caster",
    },
];
