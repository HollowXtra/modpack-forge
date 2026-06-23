// ==========================================
// MODPACK FORGE - Full Application
// ==========================================

// ====== CURATED MOD DATABASE ======
const MODS_DB = {
    horror: {
        name: "Horror",
        emoji: "👻",
        description: "Dark, eerie, terrifying experiences",
        mods: [
            { name: "The Man from the Fog", desc: "A mysterious fog rolls in, bringing a tall, thin entity that stalks you through the mist.", loader: "both", icon: "🌫️", url: "https://modrinth.com/mod/man-from-the-fog", popular: true },
            { name: "Cave Dweller Reimagined", desc: "A disturbing high-speed monster haunts caves. Sound-based triggers and psychological dread.", loader: "both", icon: "🕳️", url: "https://modrinth.com/mod/cave-dweller", popular: true },
            { name: "Eyes in the Darkness", desc: "Glowing eyes peer from the darkness. They multiply the longer you stare into the void.", loader: "fabric", icon: "👀", url: "https://modrinth.com/mod/eyes-in-the-darkness", popular: true },
            { name: "The Knocker", desc: "An unpredictable humanoid stalker follows you relentlessly and may interact during sleep.", loader: "both", icon: "👤", url: "https://modrinth.com/mod/the-knocker", popular: true },
            { name: "Herobrine", desc: "The legendary ghost returns. Random sightings, modified terrain, and lingering dread.", loader: "forge", icon: "👤", url: "https://www.curseforge.com/minecraft/mc-mods/herobrine", popular: true },
            { name: "The Graveyard", desc: "Graveyards, crypts, and new undead mobs. Explore spooky structures and face skeletal guardians.", loader: "both", icon: "⚰️", url: "https://modrinth.com/mod/the-graveyard", popular: true },
            { name: "Sculk Horde", desc: "The sculk expands aggressively, sending hordes of enhanced wardens to reclaim the surface.", loader: "fabric", icon: "🧟", url: "https://modrinth.com/mod/sculk-horde", popular: false },
            { name: "From the Fog", desc: "A mysterious figure emerges from the fog and begins modifying your world.", loader: "forge", icon: "🌁", url: "https://www.curseforge.com/minecraft/mc-mods/from-the-fog", popular: true },
            { name: "Born in Chaos", desc: "Dark fantasy horror with terrifying mobs like the Lifestealer and Supreme Bonescaller.", loader: "forge", icon: "👾", url: "https://www.curseforge.com/minecraft/mc-mods/born-in-chaos", popular: false },
            { name: "Sanity: Descent into Madness", desc: "A sanity system that deteriorates in darkness. Hallucinations and dread ensue.", loader: "forge", icon: "🌀", url: "https://www.curseforge.com/minecraft/mc-mods/sanity-descent-into-madness", popular: false },
            { name: "Fear of the Dark", desc: "Monsters are stronger at night. New night-only mobs spawn. Daytime is your only safety.", loader: "both", icon: "🌙", url: "https://www.curseforge.com/minecraft/mc-mods/fear-of-the-dark", popular: false },
            { name: "Enhanced Celestials", desc: "Blood Moons and other celestial events bring hordes of enemies and increased danger.", loader: "both", icon: "🌕", url: "https://modrinth.com/mod/enhanced-celestials", popular: true },
            { name: "Dweller", desc: "Cryptid-style dwellers that inhabit caves, forests, and oceans with unique behaviors.", loader: "fabric", icon: "👾", url: "https://modrinth.com/mod/dweller", popular: false },
            { name: "The Lost Cities", desc: "Abandoned cities generate across the world. Explore decaying buildings — you're not alone.", loader: "both", icon: "🏚️", url: "https://www.curseforge.com/minecraft/mc-mods/the-lost-cities", popular: true }
        ]
    },
    weather: {
        name: "Weather / Climate",
        emoji: "🌦️",
        description: "Storms, seasons, and atmospheric overhauls",
        mods: [
            { name: "Serene Seasons", desc: "Four distinct seasons with changing foliage, temperatures, and seasonal crop cycles.", loader: "both", icon: "🍂", url: "https://modrinth.com/mod/serene-seasons", popular: true },
            { name: "Weather, Storms & Tornadoes", desc: "Dynamic weather with tornadoes, hurricanes, blizzards, and sandstorms that destroy builds.", loader: "forge", icon: "🌪️", url: "https://www.curseforge.com/minecraft/mc-mods/weather-storms-tornadoes", popular: true },
            { name: "Project Atmosphere", desc: "Realistic climate simulation using pressure, humidity, and wind for true weather patterns.", loader: "forge", icon: "🌍", url: "https://modrinth.com/mod/project-atmosphere", popular: true },
            { name: "Cold Sweat", desc: "Polished temperature system with insulation, heaters, coolers for managing body temperature.", loader: "both", icon: "❄️", url: "https://modrinth.com/mod/cold-sweat", popular: true },
            { name: "Better Weather", desc: "Realistic clouds, improved rain/snow, fog effects, and dynamic sky colors.", loader: "fabric", icon: "☁️", url: "https://modrinth.com/mod/better-weather", popular: true },
            { name: "Fabric Seasons", desc: "Lightweight seasonal system for Fabric with configurable lengths and seasonal effects.", loader: "fabric", icon: "🌸", url: "https://modrinth.com/mod/fabric-seasons", popular: true },
            { name: "Dynamic Surroundings", desc: "Immersive sound effects by biome — echoes in caves, wind in open fields, thunder rumbles.", loader: "forge", icon: "🎵", url: "https://www.curseforge.com/minecraft/mc-mods/dynamic-surroundings", popular: true },
            { name: "Environmental Core", desc: "Overhauls atmosphere with custom weather patterns, biomes, and visual effects.", loader: "both", icon: "🌿", url: "https://modrinth.com/mod/environmental-core", popular: false },
            { name: "Particular", desc: "Beautiful atmospheric particles: fireflies, falling leaves, dust motes, bioluminescent spores.", loader: "fabric", icon: "✨", url: "https://modrinth.com/mod/particular", popular: true },
            { name: "Snow Real Magic", desc: "Snow accumulates dynamically with footprints. Blizzards can bury your base.", loader: "forge", icon: "❄️", url: "https://www.curseforge.com/minecraft/mc-mods/snow-real-magic", popular: false },
            { name: "Frost & Flame", desc: "Temperature system where biomes have thermal values. Extreme cold/heat require proper gear.", loader: "forge", icon: "🔥", url: "https://www.curseforge.com/minecraft/mc-mods/frost-and-flame", popular: false },
            { name: "Climate Control", desc: "Customizable climate system with humidity, temperature, and wind affecting gameplay.", loader: "forge", icon: "🌡️", url: "https://www.curseforge.com/minecraft/mc-mods/climate-control", popular: false }
        ]
    },
    fantasy: {
        name: "Fantasy",
        emoji: "🐉",
        description: "Mythical realms, dragons, and enchanted lands",
        mods: [
            { name: "Ice and Fire: Dragons", desc: "Dragons, cyclopes, sirens, and mythical creatures. Tame and ride dragons!", loader: "forge", icon: "🐉", url: "https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons", popular: true },
            { name: "Alex's Mobs", desc: "100+ unique animals and fantasy creatures across all biomes with unique behaviors.", loader: "both", icon: "🦊", url: "https://modrinth.com/mod/alexs-mobs", popular: true },
            { name: "Lycanites Mobs", desc: "Extensive biome-specific monster roster with chaos events and tameable creatures.", loader: "forge", icon: "👹", url: "https://www.curseforge.com/minecraft/mc-mods/lycanites-mobs", popular: true },
            { name: "Mowzie's Mobs", desc: "Epic boss mobs inspired by mythology: the Barakoa, Ferrousoul, and more.", loader: "both", icon: "⚔️", url: "https://www.curseforge.com/minecraft/mc-mods/mowzies-mobs", popular: true },
            { name: "Wyrmroost", desc: "Multiple dragon species with unique abilities, biomes, and interactions.", loader: "forge", icon: "🐲", url: "https://www.curseforge.com/minecraft/mc-mods/wyrmroost", popular: false },
            { name: "Friends & Foes", desc: "Recreates mobs that lost community votes — Moobloom, Iceologer, Glare, and more.", loader: "both", icon: "🐮", url: "https://modrinth.com/mod/friends-and-foes", popular: true },
            { name: "Naturalist", desc: "Realistic animals with natural behavior — bears, butterflies, snails, and more.", loader: "both", icon: "🦋", url: "https://modrinth.com/mod/naturalist", popular: true },
            { name: "Creatures and Beasts", desc: "Mystical creatures like the Cactem and the massive tamable End Whale.", loader: "forge", icon: "🐋", url: "https://www.curseforge.com/minecraft/mc-mods/creatures-and-beasts", popular: false },
            { name: "Ecologics", desc: "Biome-specific creatures like penguins and crabs that blend with vanilla.", loader: "both", icon: "🐧", url: "https://modrinth.com/mod/ecologics", popular: false },
            { name: "Eidolon", desc: "Dark magic and necromancy with soul manipulation and eldritch rituals.", loader: "forge", icon: "🔮", url: "https://www.curseforge.com/minecraft/mc-mods/eidolon", popular: true }
        ]
    },
    technology: {
        name: "Technology",
        emoji: "⚙️",
        description: "Automation, factories, and complex machinery",
        mods: [
            { name: "Create", desc: "Build automated factories with rotational power, gears, belts, and mechanical contraptions.", loader: "both", icon: "🔧", url: "https://modrinth.com/mod/create", popular: true },
            { name: "Mekanism", desc: "High-tech machinery, ore processing, energy systems, and digital miner. End-game tech.", loader: "forge", icon: "⚡", url: "https://www.curseforge.com/minecraft/mc-mods/mekanism", popular: true },
            { name: "Applied Energistics 2", desc: "Digital storage for millions of items. ME drives, autocrafting, and wireless access.", loader: "both", icon: "💾", url: "https://modrinth.com/mod/ae2", popular: true },
            { name: "Thermal Series", desc: "Classic tech suite: thermal expansion, dynamics, cultivation. Energy and automation.", loader: "forge", icon: "🔥", url: "https://www.curseforge.com/minecraft/mc-mods/thermal-series", popular: true },
            { name: "Refined Storage", desc: "User-friendly digital storage and autocrafting. Simpler alternative to AE2.", loader: "both", icon: "📦", url: "https://modrinth.com/mod/refined-storage", popular: true },
            { name: "Immersive Engineering", desc: "Realistic multiblock machines, wires, and diesel generators. Aesthetic and functional.", loader: "forge", icon: "🏭", url: "https://www.curseforge.com/minecraft/mc-mods/immersive-engineering", popular: true },
            { name: "Modern Industrialization", desc: "High-tech automation for Fabric. Total progression from manual to automated.", loader: "fabric", icon: "🏗️", url: "https://modrinth.com/mod/modern-industrialization", popular: true },
            { name: "Create: Steam 'n' Rails", desc: "Adds trains, tracks, and railway systems to the Create mod.", loader: "both", icon: "🚂", url: "https://modrinth.com/mod/create-steam-n-rails", popular: true },
            { name: "CC: Tweaked", desc: "Programmable computers, turtles, and peripherals. Automate anything with Lua.", loader: "both", icon: "🖥️", url: "https://modrinth.com/mod/cc-tweaked", popular: true },
            { name: "Pipez", desc: "Simple and fast item, fluid, energy, and gas pipes for all transport needs.", loader: "both", icon: "🔌", url: "https://modrinth.com/mod/pipez", popular: true },
            { name: "LaserIO", desc: "Transport items, fluids, and energy using lasers with advanced filtering.", loader: "both", icon: "🔦", url: "https://modrinth.com/mod/laserio", popular: false }
        ]
    },
    adventure: {
        name: "Adventure / RPG",
        emoji: "⚔️",
        description: "Quests, dungeons, and epic journeys",
        mods: [
            { name: "Advent of Ascension", desc: "Massive RPG with 30+ dimensions, 1000+ mobs, and a full skill/leveling system.", loader: "forge", icon: "🌟", url: "https://www.curseforge.com/minecraft/mc-mods/advent-of-ascension-nevermine", popular: true },
            { name: "Dungeons and Taverns", desc: "Detailed dungeons, taverns, and adventure structures across all dimensions.", loader: "both", icon: "🏰", url: "https://modrinth.com/mod/dungeons-and-taverns", popular: true },
            { name: "When Dungeons Arise", desc: "Massive procedurally generated dungeons with boss rooms, traps, and epic loot.", loader: "both", icon: "⛩️", url: "https://modrinth.com/mod/when-dungeons-arise", popular: true },
            { name: "YUNG's Better Dungeons", desc: "Overhauls dungeons with new rooms, traps, puzzles, and better loot distribution.", loader: "both", icon: "🏚️", url: "https://modrinth.com/mod/yungs-better-dungeons", popular: true },
            { name: "YUNG's Better Mineshafts", desc: "Completely redesigned mineshafts with new architecture and loot.", loader: "both", icon: "⛏️", url: "https://modrinth.com/mod/yungs-better-mineshafts", popular: true },
            { name: "Artifacts", desc: "40+ unique artifacts with special abilities found in chests, dungeons, and from mobs.", loader: "both", icon: "💎", url: "https://modrinth.com/mod/artifacts", popular: true },
            { name: "Better Strongholds", desc: "Complete stronghold overhaul with new rooms, puzzles, and epic loot.", loader: "both", icon: "🏛️", url: "https://modrinth.com/mod/yungs-better-strongholds", popular: true },
            { name: "Dungeon Crawl", desc: "Class-style RPG with rogue-like dungeons, skills, and permadeath mode.", loader: "both", icon: "🗡️", url: "https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl", popular: false },
            { name: "L_Enders Cataclysm", desc: "Epic boss fights including the Leviathan, Netherite Monstrosity, and more.", loader: "both", icon: "👹", url: "https://modrinth.com/mod/l_enders-cataclysm", popular: true },
            { name: "Pharaoh's Treasure", desc: "Explore procedurally generated pyramids filled with traps, puzzles, and treasure.", loader: "both", icon: "🔺", url: "https://www.curseforge.com/minecraft/mc-mods/pharaohs-treasure", popular: false }
        ]
    },
    magic: {
        name: "Magic",
        emoji: "🪄",
        description: "Wizardry, spells, and mystical artifacts",
        mods: [
            { name: "Ars Nouveau", desc: "Write custom spells using glyphs. Summon familiars, build rituals, become a true mage.", loader: "both", icon: "📜", url: "https://modrinth.com/mod/ars-nouveau", popular: true },
            { name: "Iron's Spells 'n Spellbooks", desc: "50+ spells across multiple schools (fire, ice, lightning, holy, void) with awesome VFX.", loader: "both", icon: "📖", url: "https://modrinth.com/mod/irons-spells-n-spellbooks", popular: true },
            { name: "Botania", desc: "Tech mod disguised as magic. Use flowers for mana, craft gear, and automate everything.", loader: "both", icon: "🌸", url: "https://modrinth.com/mod/botania", popular: true },
            { name: "Blood Magic", desc: "Sacrifice blood to power rituals, bind demons, and gain incredible power.", loader: "forge", icon: "🩸", url: "https://www.curseforge.com/minecraft/mc-mods/blood-magic", popular: true },
            { name: "Occultism", desc: "Summon spirits to perform tasks, mine resources, and craft through complex rituals.", loader: "both", icon: "🔮", url: "https://modrinth.com/mod/occultism", popular: true },
            { name: "Mana and Artifice", desc: "Progressive magic with spell crafting, manaweaving, and an arcane guardian companion.", loader: "forge", icon: "✨", url: "https://www.curseforge.com/minecraft/mc-mods/mana-and-artifice", popular: true },
            { name: "Hexcasting", desc: "Program magic using a stack-based language. Cast spells by writing hex patterns.", loader: "fabric", icon: "🔯", url: "https://modrinth.com/mod/hex-casting", popular: true },
            { name: "Hexerei", desc: "Witchcraft and magic themed mod with cauldron brewing, broom flying, and coffers.", loader: "forge", icon: "🧹", url: "https://www.curseforge.com/minecraft/mc-mods/hexerei", popular: true },
            { name: "Spectrum", desc: "Color-based magic system with progressive discovery and unique mechanics.", loader: "fabric", icon: "🌈", url: "https://modrinth.com/mod/spectrum", popular: true },
            { name: "Elemental Craft", desc: "Master the four elements — fire, water, earth, air — through intricate progression.", loader: "forge", icon: "🌍", url: "https://www.curseforge.com/minecraft/mc-mods/elemental-craft", popular: false }
        ]
    },
    combat: {
        name: "Combat / PvP",
        emoji: "🗡️",
        description: "Battles, arenas, and weapon overhauls",
        mods: [
            { name: "Better Combat", desc: "Overhauls combat with weapon combos, dual wielding, and attack animations.", loader: "both", icon: "⚔️", url: "https://modrinth.com/mod/better-combat", popular: true },
            { name: "Epic Fight", desc: "Souls-like combat with complex movesets, dodge rolls, lock-on, and new animations.", loader: "forge", icon: "⚡", url: "https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod", popular: true },
            { name: "Epic Knights", desc: "Medieval armor sets, shields, plate armor, longswords, and jousting lances.", loader: "both", icon: "🛡️", url: "https://modrinth.com/mod/epic-knights", popular: true },
            { name: "Simply Swords", desc: "Massive variety of new weapons — spears, katanas, rapiers — each with unique abilities.", loader: "both", icon: "🗡️", url: "https://modrinth.com/mod/simply-swords", popular: true },
            { name: "Combat Roll", desc: "Adds a dodge roll with invincibility frames for PvP and PvE encounters.", loader: "both", icon: "💨", url: "https://modrinth.com/mod/combat-roll", popular: true },
            { name: "Battletowers", desc: "Fight through 12 floors of enemies to reach the boss. Classic dungeon tower.", loader: "both", icon: "🗼", url: "https://modrinth.com/mod/battletowers", popular: true },
            { name: "Spell Engine", desc: "Framework for weapon skills and special attacks. Compatible with most weapon mods.", loader: "both", icon: "💫", url: "https://modrinth.com/mod/spell-engine", popular: false },
            { name: "Parry!", desc: "Timed block/parry mechanic. Counterattack perfect blocks!", loader: "fabric", icon: "🛡️", url: "https://modrinth.com/mod/parry", popular: false },
            { name: "Shield Expansion", desc: "Adds new shield types including tower shields, bucklers, and parrying shields.", loader: "both", icon: "🔰", url: "https://modrinth.com/mod/shield-expansion", popular: false },
            { name: "Weapons of Miracles", desc: "Legendary weapons with unique abilities. Each has a quest to unlock its potential.", loader: "forge", icon: "🗡️", url: "https://www.curseforge.com/minecraft/mc-mods/weapons-of-miracles", popular: false }
        ]
    },
    exploration: {
        name: "Exploration",
        emoji: "🌍",
        description: "New biomes, dimensions, and discoveries",
        mods: [
            { name: "Biomes O' Plenty", desc: "50+ stunning biomes with unique trees, flowers, and terrain generation.", loader: "both", icon: "🌲", url: "https://modrinth.com/mod/biomes-o-plenty", popular: true },
            { name: "Terralith", desc: "Overhauls vanilla world-gen with thousands of new biome variants using only vanilla blocks.", loader: "fabric", icon: "🏔️", url: "https://modrinth.com/mod/terralith", popular: true },
            { name: "Regions Unexplored", desc: "60+ new biomes with dense forests, colorful landscapes, and immersive atmosphere.", loader: "both", icon: "🌴", url: "https://modrinth.com/mod/regions-unexplored", popular: true },
            { name: "Oh The Biomes We've Gone", desc: "80+ custom biomes across Overworld, Nether, and End with unique builds.", loader: "both", icon: "🌿", url: "https://modrinth.com/mod/oh-the-biomes-weve-gone", popular: true },
            { name: "Tectonic", desc: "Overhauls terrain shape — realistic mountains, rivers, caves, and continental scale.", loader: "both", icon: "⛰️", url: "https://modrinth.com/mod/tectonic", popular: true },
            { name: "The Bumblezone", desc: "A dimension inside a beehive. Honey blocks, bee mobs, and sweet rewards.", loader: "both", icon: "🐝", url: "https://modrinth.com/mod/the-bumblezone", popular: true },
            { name: "Blue Skies", desc: "Two new dimensions: a sunny sky realm and a dark, corrupted wasteland.", loader: "forge", icon: "🌤️", url: "https://www.curseforge.com/minecraft/mc-mods/blue-skies", popular: true },
            { name: "Nullscape", desc: "Transforms the End into a starry voidscape with floating islands and new vegetation.", loader: "fabric", icon: "🌌", url: "https://modrinth.com/mod/nullscape", popular: true },
            { name: "YUNG's Better Ocean Monuments", desc: "Overhauls ocean monuments with new rooms, challenges, and better loot.", loader: "both", icon: "🏯", url: "https://modrinth.com/mod/yungs-better-ocean-monuments", popular: true },
            { name: "William Wyther's Expanded Exploration", desc: "Adds massive structures across all dimensions — castles, ruins, and dungeons.", loader: "both", icon: "🏰", url: "https://modrinth.com/mod/expanded-exploration", popular: false },
            { name: "Tidal Towns", desc: "Ocean-side villages, fishing hamlets, and coastal structures for exploration.", loader: "both", icon: "🏘️", url: "https://modrinth.com/mod/tidal-towns", popular: false }
        ]
    },
    building: {
        name: "Building / Creative",
        emoji: "🏗️",
        description: "Architecture, decoration, and aesthetic builds",
        mods: [
            { name: "WorldEdit", desc: "Powerful in-game world editor. Copy, paste, replace, and sculpt huge areas instantly.", loader: "both", icon: "🌐", url: "https://modrinth.com/mod/worldedit", popular: true },
            { name: "Macaw's Series", desc: "Massive furniture suite: windows, doors, roofs, bridges, fences, lights, and more.", loader: "both", icon: "🚪", url: "https://modrinth.com/mod/macaws-windows", popular: true },
            { name: "Handcrafted", desc: "250+ beautifully modeled furniture pieces — chairs, tables, couches, counters, and more.", loader: "both", icon: "🛋️", url: "https://modrinth.com/mod/handcrafted", popular: true },
            { name: "Chipped", desc: "Convert vanilla blocks into thousands of new decorative variants — ornate, carved, textured.", loader: "both", icon: "🔨", url: "https://modrinth.com/mod/chipped", popular: true },
            { name: "Quark", desc: "Vanilla+ mod with new building blocks, furniture variants, and quality-of-life features.", loader: "both", icon: "🌸", url: "https://modrinth.com/mod/quark", popular: true },
            { name: "Supplementaries", desc: "Useful decorative blocks: sign posts, notice boards, shelves, planters, and more.", loader: "both", icon: "🪴", url: "https://modrinth.com/mod/supplementaries", popular: true },
            { name: "Chisels & Bits", desc: "Chisel blocks into tiny bits for pixel art and intricate detailing.", loader: "both", icon: "🔍", url: "https://www.curseforge.com/minecraft/mc-mods/chisels-bits", popular: true },
            { name: "FramedBlocks", desc: "Create slopes, pillars, panels, and custom shapes using any block's texture.", loader: "both", icon: "🧊", url: "https://modrinth.com/mod/framedblocks", popular: true },
            { name: "Decorative Blocks", desc: "Chains, braziers, candle holders, and more decorative additions.", loader: "both", icon: "🏺", url: "https://modrinth.com/mod/decorative-blocks", popular: true },
            { name: "Create: Deco", desc: "Decorative blocks, windows, and architectural elements for the Create mod.", loader: "both", icon: "🏛️", url: "https://modrinth.com/mod/create-deco", popular: true },
            { name: "Litematica", desc: "Create schematics as holographic overlays. Plan and copy complex builds.", loader: "fabric", icon: "📐", url: "https://modrinth.com/mod/litematica", popular: true }
        ]
    },
    skyblock: {
        name: "Skyblock",
        emoji: "🏝️",
        description: "Sky islands, resource management, and progression",
        mods: [
            { name: "Ex Nihilo: Sequentia", desc: "The classic skyblock resource mod. Sieve gravel, sand, and dust to get resources.", loader: "both", icon: "⛏️", url: "https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia", popular: true },
            { name: "Void Island Control", desc: "Spawn on a void island. Expand, manage resources, and build in the void.", loader: "both", icon: "🏝️", url: "https://modrinth.com/mod/void-island-control", popular: true },
            { name: "ProjectE", desc: "Energy Equivalent Exchange. Convert resources using EMC values — skyblock staple.", loader: "both", icon: "💫", url: "https://www.curseforge.com/minecraft/mc-mods/projecte", popular: true },
            { name: "Mystical Agriculture", desc: "Grow resources from nothing using magical seeds and crops.", loader: "both", icon: "🌱", url: "https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture", popular: true },
            { name: "Industrial Foregoing", desc: "Automation machines for farming, mob processing, and resource generation.", loader: "forge", icon: "🏭", url: "https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing", popular: true },
            { name: "Skyblock Builder", desc: "Structured skyblock progression with island upgrades, challenges, and rewards.", loader: "forge", icon: "🗾", url: "https://www.curseforge.com/minecraft/mc-mods/skyblock-builder", popular: false },
            { name: "Sieve", desc: "Simple and performant fabric sieving mechanic for skyblock resources.", loader: "fabric", icon: "🔍", url: "https://modrinth.com/mod/sieve", popular: false },
            { name: "Sky GUIs", desc: "Island management, team system, and warp menus for skyblock servers.", loader: "forge", icon: "📋", url: "https://www.curseforge.com/minecraft/mc-mods/sky-guis", popular: false }
        ]
    },
    survival: {
        name: "Hardcore Survival",
        emoji: "☢️",
        description: "Brutal difficulty, thirst, temperature, and hunger",
        mods: [
            { name: "Tough as Nails", desc: "Thirst, body temperature, and seasons. Drink water and dress for the climate.", loader: "both", icon: "💧", url: "https://modrinth.com/mod/tough-as-nails", popular: true },
            { name: "Cold Sweat", desc: "Polished temperature system with insulation values, heaters, and coolers.", loader: "both", icon: "❄️", url: "https://modrinth.com/mod/cold-sweat", popular: true },
            { name: "First Aid", desc: "Body-part health system. Injuries to head, chest, arms, and legs affect gameplay.", loader: "both", icon: "🏥", url: "https://www.curseforge.com/minecraft/mc-mods/first-aid", popular: true },
            { name: "Spice of Life: Carrot Edition", desc: "Eating the same food gives diminishing returns. Cook varied meals to thrive.", loader: "both", icon: "🥕", url: "https://www.curseforge.com/minecraft/mc-mods/spice-of-life-carrot-edition", popular: true },
            { name: "Enviromine", desc: "Comprehensive survival: thirst, temperature, air quality, and sanity systems.", loader: "forge", icon: "🌍", url: "https://www.curseforge.com/minecraft/mc-mods/enviromine", popular: true },
            { name: "GraveStone", desc: "Death creates a grave with your items. Retrieve them or craft a gravestone.", loader: "both", icon: "🪦", url: "https://modrinth.com/mod/gravestone", popular: true },
            { name: "AppleSkin", desc: "Shows food saturation and hunger values in the HUD for better planning.", loader: "both", icon: "🍎", url: "https://modrinth.com/mod/appleskin", popular: true },
            { name: "Natural Disasters", desc: "Random earthquakes, meteor showers, tornadoes, and volcanic eruptions.", loader: "forge", icon: "🌋", url: "https://www.curseforge.com/minecraft/mc-mods/natural-disasters", popular: false },
            { name: "Realistic Torches", desc: "Torches burn out over time. Permanent lighting requires lanterns or other solutions.", loader: "forge", icon: "🕯️", url: "https://www.curseforge.com/minecraft/mc-mods/realistic-torches", popular: false },
            { name: "Scaling Health", desc: "Difficulty scales with playtime. Mobs get stronger, but so do you with talent points.", loader: "both", icon: "📈", url: "https://www.curseforge.com/minecraft/mc-mods/scaling-health", popular: false },
            { name: "Traveler's Backpack", desc: "Wearable backpack with extra storage, sleeping bag, and crafting on the go.", loader: "both", icon: "🎒", url: "https://modrinth.com/mod/travelers-backpack", popular: true }
        ]
    },
    kitchen_sink: {
        name: "Kitchen Sink",
        emoji: "🍲",
        description: "Everything included — the full Minecraft experience",
        mods: [
            { name: "Create", desc: "Automated factories with rotational power, gears, and mechanical contraptions.", loader: "both", icon: "🔧", url: "https://modrinth.com/mod/create", popular: true },
            { name: "Alex's Mobs", desc: "100+ animals and fantasy creatures across all biomes.", loader: "both", icon: "🦊", url: "https://modrinth.com/mod/alexs-mobs", popular: true },
            { name: "Biomes O' Plenty", desc: "50+ stunning biomes with unique terrain and flora.", loader: "both", icon: "🌲", url: "https://modrinth.com/mod/biomes-o-plenty", popular: true },
            { name: "Iron's Spells 'n Spellbooks", desc: "50+ spells across multiple magic schools with cool VFX.", loader: "both", icon: "📖", url: "https://modrinth.com/mod/irons-spells-n-spellbooks", popular: true },
            { name: "Better Combat", desc: "Weapon combos, dual wielding, and attack animation overhaul.", loader: "both", icon: "⚔️", url: "https://modrinth.com/mod/better-combat", popular: true },
            { name: "Supplementaries", desc: "Decorative and functional blocks that enhance vanilla.", loader: "both", icon: "🪴", url: "https://modrinth.com/mod/supplementaries", popular: true },
            { name: "Artifacts", desc: "40+ unique artifacts with special abilities to discover.", loader: "both", icon: "💎", url: "https://modrinth.com/mod/artifacts", popular: true },
            { name: "Quark", desc: "Vanilla+ features, building blocks, and quality-of-life improvements.", loader: "both", icon: "🌸", url: "https://modrinth.com/mod/quark", popular: true },
            { name: "When Dungeons Arise", desc: "Massive dungeons with bosses and epic loot.", loader: "both", icon: "⛩️", url: "https://modrinth.com/mod/when-dungeons-arise", popular: true },
            { name: "Handcrafted", desc: "Beautifully modeled furniture for cozy interiors.", loader: "both", icon: "🛋️", url: "https://modrinth.com/mod/handcrafted", popular: true },
            { name: "Macaw's Series", desc: "Complete window, door, roof, and furniture suite.", loader: "both", icon: "🚪", url: "https://modrinth.com/mod/macaws-windows", popular: true },
            { name: "Cold Sweat", desc: "Temperature management system for immersive survival.", loader: "both", icon: "❄️", url: "https://modrinth.com/mod/cold-sweat", popular: true },
            { name: "Traveler's Backpack", desc: "Wearable backpack with extra storage and sleeping bag.", loader: "both", icon: "🎒", url: "https://modrinth.com/mod/travelers-backpack", popular: true },
            { name: "YUNG's Better Dungeons", desc: "Overhauled dungeons with new rooms and challenges.", loader: "both", icon: "🏚️", url: "https://modrinth.com/mod/yungs-better-dungeons", popular: true }
        ]
    }
};

// ====== OPTIMIZATION MODS (Always included) ======
const OPTIMIZATION_MODS = {
    name: "Performance & Optimization",
    emoji: "⚡",
    description: "Essential performance mods — always included for the best experience",
    mods: [
        { name: "Sodium", desc: "Massive FPS boost by rewriting the rendering engine. The gold standard.", loader: "fabric", icon: "⚡", url: "https://modrinth.com/mod/sodium", essential: true },
        { name: "Embeddium", desc: "Sodium port for Forge/NeoForge. Huge FPS gains on the Forge ecosystem.", loader: "forge", icon: "⚡", url: "https://modrinth.com/mod/embeddium", essential: true },
        { name: "Lithium", desc: "Server-side optimizations for physics, mob AI, and block ticking. No gameplay changes.", loader: "fabric", icon: "🔋", url: "https://modrinth.com/mod/lithium", essential: true },
        { name: "Canary", desc: "Lithium equivalent for Forge. Optimizes game logic and tick performance.", loader: "forge", icon: "🔋", url: "https://modrinth.com/mod/canary", popular: true },
        { name: "Iris Shaders", desc: "Shader support for Fabric. Run SEUS, Complementary, and BSL with great FPS.", loader: "fabric", icon: "🌈", url: "https://modrinth.com/mod/iris", popular: true },
        { name: "Oculus", desc: "Iris equivalent for Forge. Shader support designed to work with Embeddium.", loader: "forge", icon: "🌈", url: "https://modrinth.com/mod/oculus", popular: true },
        { name: "Starlight", desc: "Rewrites the light engine for much faster chunk generation.", loader: "fabric", icon: "⭐", url: "https://modrinth.com/mod/starlight", essential: true },
        { name: "ModernFix", desc: "All-in-one fixer: faster launch, less memory, fewer bugs.", loader: "both", icon: "🔧", url: "https://modrinth.com/mod/modernfix", essential: true },
        { name: "FerriteCore", desc: "Reduces RAM usage by optimizing how block states and models are stored.", loader: "both", icon: "🧠", url: "https://modrinth.com/mod/ferrite-core", essential: true },
        { name: "Memory Leak Fix", desc: "Fixes memory leaks that cause lag over long play sessions.", loader: "both", icon: "🩹", url: "https://modrinth.com/mod/memoryleakfix", essential: true },
        { name: "Entity Culling", desc: "Stops rendering entities behind walls. Big FPS boost in crowded areas.", loader: "both", icon: "👻", url: "https://modrinth.com/mod/entityculling", popular: true },
        { name: "ImmediatelyFast", desc: "Optimizes HUD, chest, and UI rendering for smoother menus and interfaces.", loader: "both", icon: "🚀", url: "https://modrinth.com/mod/immediatelyfast", popular: true },
        { name: "Clumps", desc: "Groups XP orbs together to stop lag from hundreds of tiny entities.", loader: "both", icon: "💎", url: "https://modrinth.com/mod/clumps", popular: true },
        { name: "Concurrent Chunk Management", desc: "Massively improves chunk loading on servers with many players.", loader: "fabric", icon: "🗺️", url: "https://modrinth.com/mod/c2me-fabric", popular: true },
        { name: "Krypton", desc: "Optimizes network stack for better multiplayer performance and less lag.", loader: "fabric", icon: "🌐", url: "https://modrinth.com/mod/krypton", popular: false },
        { name: "Dynamic FPS", desc: "Reduces FPS to 1 when minimized. Frees system resources when tabbed out.", loader: "both", icon: "💤", url: "https://modrinth.com/mod/dynamic-fps", popular: true },
        { name: "Distant Horizons", desc: "Adds LOD rendering for incredibly far view distances without lag.", loader: "both", icon: "🏔️", url: "https://modrinth.com/mod/distanthorizons", popular: true },
        { name: "Better FPS Distances", desc: "Configurable render distance for entities and block entities independently.", loader: "both", icon: "📏", url: "https://modrinth.com/mod/better-fps-distance", popular: false },
        { name: "FastAnim", desc: "Optimizes entity animations for better FPS around many mobs.", loader: "fabric", icon: "🏃", url: "https://modrinth.com/mod/fastanim", popular: false },
        { name: "More Culling", desc: "Additional culling optimizations beyond entity culling for maximum FPS.", loader: "both", icon: "👁️", url: "https://modrinth.com/mod/moreculling", popular: true }
    ]
};

// ====== MODRINTH API ======
const MODRINTH_API = 'https://api.modrinth.com/v2';
const SEARCH_CACHE = {};

async function searchModrinth(query, facets = [], limit = 24, offset = 0) {
    const cacheKey = `${query}|${JSON.stringify(facets)}|${limit}|${offset}`;
    if (SEARCH_CACHE[cacheKey]) return SEARCH_CACHE[cacheKey];

    const params = new URLSearchParams();
    if (query) params.set('query', query);
    params.set('limit', limit);
    params.set('offset', offset);
    params.set('index', 'relevance');
    if (facets.length > 0) params.set('facets', JSON.stringify(facets));

    try {
        const res = await fetch(`${MODRINTH_API}/search?${params}`, {
            headers: { 'User-Agent': 'ModpackForge/1.0 (desktop-app)' }
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        SEARCH_CACHE[cacheKey] = data;
        return data;
    } catch (err) {
        console.warn('Modrinth search failed:', err);
        return null;
    }
}

const CATEGORY_SEARCH_TERMS = {
    horror: 'horror scary creepypasta',
    weather: 'weather seasons climate',
    fantasy: 'fantasy dragons mythical creatures',
    technology: 'technology tech factory automation create',
    adventure: 'adventure rpg dungeons quest',
    magic: 'magic spells wizard sorcery',
    combat: 'combat weapons pvp battle',
    exploration: 'exploration biomes worldgen terrain',
    building: 'building decoration furniture architecture',
    skyblock: 'skyblock void island',
    survival: 'survival hardcore difficulty challenging',
    kitchen_sink: 'vanilla plus content expansion'
};

let apiSearchResults = [];
let apiSearchLoading = false;

let MODRINTH_TOTAL_COUNT = null;

async function fetchModrinthTotalCount() {
    try {
        const params = new URLSearchParams();
        params.set('limit', '0');
        params.set('facets', JSON.stringify([['project_type:mod']]));
        const res = await fetch(`${MODRINTH_API}/search?${params}`, {
            headers: { 'User-Agent': 'ModpackForge/1.0 (desktop-app)' }
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        MODRINTH_TOTAL_COUNT = data.total_hits || 70000;
    } catch (err) {
        console.warn('Failed to fetch Modrinth count:', err);
        MODRINTH_TOTAL_COUNT = 70000;
    }
    updateModrinthCountUI();
}

function formatModrinthCount() {
    if (!MODRINTH_TOTAL_COUNT) return '70,000+';
    const n = Number(MODRINTH_TOTAL_COUNT);
    if (n >= 1000) {
        const thousands = (n / 1000).toFixed(0);
        return Number(thousands).toLocaleString() + 'K+';
    }
    return n.toLocaleString() + '+';
}

function updateModrinthCountUI() {
    const formatted = formatModrinthCount() + ' mods';
    const apiSearchCount = document.getElementById('apiSearchCount');
    if (apiSearchCount) apiSearchCount.textContent = formatted + ' available';

    const aboutApiStatus = document.getElementById('aboutApiStatus');
    if (aboutApiStatus) aboutApiStatus.textContent = 'Connected — ' + formatted + ' available';

    const aboutModCount = document.getElementById('aboutModCount');
    if (aboutModCount) {
        const totalCurated = Object.values(MODS_DB).reduce((s, c) => s + c.mods.length, 0) + OPTIMIZATION_MODS.mods.length;
        aboutModCount.textContent = totalCurated + ' curated mods + ' + formatModrinthCount() + ' on Modrinth';
    }
}

async function doModrinthSearch(query) {
    const container = document.getElementById('apiSearchResults');
    if (!container) return;
    if (!query || query.trim().length < 2) { container.innerHTML = ''; return; }

    container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);">Searching Modrinth...</div>';
    apiSearchLoading = true;

    const loader = STATE.wizard.loader || 'fabric';
    const version = STATE.wizard.version || '1.20.1';
    const facets = [
        ['project_type:mod'],
        [`categories:${loader}`],
        [`versions:${version}`]
    ];

    const data = await searchModrinth(query.trim(), facets, 24, 0);
    apiSearchLoading = false;

    if (!data || !data.hits || data.hits.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);">No mods found. Try different search terms or a different loader/version.</div>';
        apiSearchResults = [];
        return;
    }

    apiSearchResults = data.hits;
    renderApiSearchResults(container);
    document.getElementById('apiSearchCount').textContent = `${(data.total_hits || data.hits.length).toLocaleString()}+ mods on Modrinth`;
}

function renderApiSearchResults(container) {
    if (!container) container = document.getElementById('apiSearchResults');
    if (!container) return;

    const selected = STATE.wizard.selectedMods;
    container.innerHTML = apiSearchResults.map(mod => {
        const modName = mod.title || mod.slug;
        const isSelected = selected.includes(modName);
        const desc = (mod.description || 'No description').substring(0, 120);
        const icon = mod.icon_url ? `<img src="${mod.icon_url}" style="width:20px;height:20px;border-radius:4px;">` : '📦';
        const downloads = mod.downloads ? `${(mod.downloads / 1000).toFixed(0)}K` : '';
        return `
            <div class="mod-card ${isSelected ? 'selected' : ''}" onclick="addApiMod('${modName.replace(/'/g, "\\'")}', '${(mod.description || '').replace(/'/g, "\\'").substring(0, 100)}', 'https://modrinth.com/mod/${mod.slug}', '${mod.icon_url || ''}')">
                <div class="mod-card-icon" style="font-size:16px;">${icon}</div>
                <div class="mod-card-info">
                    <div class="mod-card-name">
                        ${modName}
                        ${mod.client_side === 'required' && mod.server_side === 'required' ? '<span class="mod-card-badge both">Both</span>' : ''}
                        ${downloads ? '<span class="mod-card-badge pop">' + downloads + ' DL</span>' : ''}
                    </div>
                    <div class="mod-card-desc">${desc}${desc.length >= 120 ? '...' : ''}</div>
                    <div class="mod-card-link"><a href="https://modrinth.com/mod/${mod.slug}" target="_blank">View on Modrinth ↗</a></div>
                </div>
                <div class="mod-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
            </div>
        `;
    }).join('');
}

function addApiMod(name, desc, url, iconUrl) {
    const idx = STATE.wizard.selectedMods.indexOf(name);
    if (idx > -1) {
        STATE.wizard.selectedMods.splice(idx, 1);
    } else {
        STATE.wizard.selectedMods.push(name);
        if (!STATE.wizard.apiMods) STATE.wizard.apiMods = {};
        STATE.wizard.apiMods[name] = { name, desc: desc || 'From Modrinth search', icon: '📦', url, loader: STATE.wizard.loader };
    }
    // Just update the UI locally without full re-render to preserve search results
    const card = document.querySelector(`.mod-card[onclick*="${name.replace(/'/g, "\\'")}"]`);
    if (card) {
        card.classList.toggle('selected');
    }
    // Also update the selected count text
    const cat = MODS_DB[STATE.wizard.category];
    if (cat) {
        const selected = STATE.wizard.selectedMods;
        // Update curated count
        const curatedCount = document.querySelector('.mod-list-section:first-of-type .mod-section-header span:last-child');
        if (curatedCount) {
            curatedCount.textContent = `${cat.mods.filter(m => selected.includes(m.name)).length}/${cat.mods.length} selected`;
        }
        // Update optimization count
        const optCount = document.querySelector('.mod-list-section:nth-of-type(2) .mod-section-header span:last-child');
        if (optCount) {
            optCount.textContent = `${OPTIMIZATION_MODS.mods.filter(m => selected.includes(m.name)).length}/${OPTIMIZATION_MODS.mods.length} selected`;
        }
    }
}

async function browseCategoryOnModrinth() {
    const cat = STATE.wizard.category;
    if (!cat) return;
    const searchTerms = CATEGORY_SEARCH_TERMS[cat] || cat;
    const searchInput = document.getElementById('apiSearchInput');
    if (searchInput) {
        searchInput.value = searchTerms;
        await doModrinthSearch(searchTerms);
    }
}

// ====== VERSIONS ======
const VERSIONS = ["1.21.4", "1.21.1", "1.20.4", "1.20.1", "1.19.2", "1.18.2", "1.17.1"];

// ====== STATE ======
const STATE = {
    modpacks: [],
    currentPage: 'home',
    wizardStep: 1,
    wizard: {
        category: null,
        loader: 'fabric',
        version: '1.20.1',
        selectedMods: [],
        apiMods: {}
    },
    settings: {
        theme: 'dark',
        accent: '#44c767'
    }
};

// ====== DOM REFS ======
const $ = (id) => document.getElementById(id);

// ====== SPLASH ======
function runSplash() {
    const messages = [
        'Indexing mod database...',
        'Loading performance profiles...',
        'Preparing modpack generator...',
        'Optimizing your experience...',
        'Almost ready to forge...'
    ];
    let step = 0;
    const interval = setInterval(() => {
        step++;
        const pct = Math.min(step * 20, 100);
        $('splashBar').style.width = pct + '%';
        $('splashText').textContent = messages[Math.min(step - 1, messages.length - 1)];
        if (pct >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                $('splashOverlay').classList.add('hidden');
                $('app').classList.remove('hidden');
                loadData();
                renderHome();
                renderModpacks();
            }, 400);
        }
    }, 250);
}

// ====== NAVIGATION ======
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const pageEl = $('page' + page.charAt(0).toUpperCase() + page.slice(1));
    if (pageEl) pageEl.classList.add('active');
    const navBtn = document.querySelector(`[data-page="${page}"]`);
    if (navBtn) navBtn.classList.add('active');
    STATE.currentPage = page;
    if (page === 'home') renderHome();
    if (page === 'modpacks') renderModpacks();
}

// ====== DATA PERSISTENCE ======
function loadData() {
    try {
        const saved = localStorage.getItem('mcf_modpacks');
        if (saved) STATE.modpacks = JSON.parse(saved);
    } catch (e) { console.warn('Load error:', e); }
}

function saveData() {
    try { localStorage.setItem('mcf_modpacks', JSON.stringify(STATE.modpacks));
    } catch (e) { console.warn('Save error:', e); }
}

// ====== HOME PAGE ======
function renderHome() {
    const grid = $('homeCategoryGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (const [key, cat] of Object.entries(MODS_DB)) {
        const card = document.createElement('button');
        card.className = 'category-card-home';
        card.onclick = () => startWizard(key);
        card.innerHTML = `<span class="cat-emoji">${cat.emoji}</span><span class="cat-name">${cat.name}</span><span class="cat-count">${cat.mods.length} mods</span>`;
        grid.appendChild(card);
    }

    const totalMods = Object.values(MODS_DB).reduce((s, c) => s + c.mods.length, 0) + OPTIMIZATION_MODS.mods.length;
    $('statMods').textContent = totalMods;
    $('statCategories').textContent = Object.keys(MODS_DB).length;
    $('statOptimization').textContent = OPTIMIZATION_MODS.mods.length;
    $('statPacks').textContent = STATE.modpacks.length;

    const featuredGrid = $('featuredGrid');
    if (featuredGrid) {
        featuredGrid.innerHTML = '';
        STATE.modpacks.slice(0, 3).forEach(mp => {
            const item = document.createElement('div');
            item.className = 'modpack-item';
            item.innerHTML = `<span class="modpack-item-emoji">${mp.emoji}</span><div class="modpack-item-info"><div class="modpack-item-name">${mp.name}</div><div class="modpack-item-meta"><span>${mp.category}</span><span class="modpack-item-tag">${mp.version}</span><span>${mp.mods} mods</span></div></div>`;
            item.onclick = () => showExportModal(mp);
            featuredGrid.appendChild(item);
        });
        if (STATE.modpacks.length === 0) {
            featuredGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔨</div><h3>No modpacks yet</h3><p>Pick a category below to forge your first modpack!</p></div>`;
        }
    }
}

// ====== MODPACKS LIST ======
function renderModpacks() {
    const list = $('modpackList');
    const count = $('modpackCount');
    if (!list) return;
    count.textContent = STATE.modpacks.length;
    list.innerHTML = '';
    if (STATE.modpacks.length === 0) {
        list.innerHTML = `<div class="empty-state"><div class="empty-icon">📦</div><h3>No modpacks created</h3><p>Go to the home page and pick a category to start forging!</p><button class="btn btn-primary" onclick="navigateTo('home')">Browse Categories</button></div>`;
        return;
    }
    STATE.modpacks.forEach(mp => {
        const item = document.createElement('div');
        item.className = 'modpack-item';
        item.innerHTML = `<span class="modpack-item-emoji">${mp.emoji}</span><div class="modpack-item-info" onclick="showExportModal(${mp.id})"><div class="modpack-item-name">${mp.name}</div><div class="modpack-item-meta"><span>${mp.category}</span><span class="modpack-item-tag">${mp.version}</span><span class="modpack-item-tag">${mp.loader}</span><span>${mp.mods} mods</span></div></div><div class="modpack-item-actions"><button class="btn btn-secondary btn-sm" onclick="showExportModal(${mp.id})">View</button><button class="btn btn-danger btn-sm" onclick="deleteModpack(${mp.id})">Delete</button></div>`;
        list.appendChild(item);
    });
}

// ====== WIZARD ======
function startWizard(category) {
    STATE.wizardStep = 1;
    STATE.wizard.category = category;
    STATE.wizard.selectedMods = OPTIMIZATION_MODS.mods.map(m => m.name);
    STATE.wizard.apiMods = {};
    STATE.wizard.loader = 'fabric';
    STATE.wizard.version = '1.20.1';
    apiSearchResults = [];
    setWizardStep(1);
    renderCategoryPick();
    navigateTo('create');
}

function renderCategoryPick() {
    const grid = $('catPickGrid');
    if (!grid) return;
    grid.innerHTML = '';
    for (const [key, cat] of Object.entries(MODS_DB)) {
        const card = document.createElement('button');
        card.className = 'cat-pick-card' + (STATE.wizard.category === key ? ' selected' : '');
        card.onclick = () => {
            document.querySelectorAll('.cat-pick-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            STATE.wizard.category = key;
            STATE.wizard.selectedMods = OPTIMIZATION_MODS.mods.map(m => m.name);
            STATE.wizard.apiMods = {};
        };
        card.innerHTML = `<span class="cat-emoji">${cat.emoji}</span><span class="cat-name">${cat.name}</span><span class="cat-desc">${cat.description}</span>`;
        grid.appendChild(card);
    }
}

function nextWizardStep() {
    if (STATE.wizardStep === 1) {
        if (!STATE.wizard.category) { showToast('Please select a category first!', 'error'); return; }
        renderModSelection();
        setWizardStep(2);
    } else if (STATE.wizardStep === 2) {
        STATE.wizard.loader = document.querySelector('input[name="loader"]:checked')?.value || 'fabric';
        STATE.wizard.version = $('versionSelect')?.value || '1.20.1';
        const catCount = MODS_DB[STATE.wizard.category]?.mods.filter(m => STATE.wizard.selectedMods.includes(m.name)).length || 0;
        if (catCount === 0) { showToast('Please select at least one mod from your category!', 'error'); return; }
        renderReview();
        setWizardStep(3);
    }
}

function prevWizardStep() {
    if (STATE.wizardStep > 1) setWizardStep(STATE.wizardStep - 1);
    if (STATE.wizardStep === 1) renderCategoryPick();
}

function setWizardStep(step) {
    STATE.wizardStep = step;
    document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.wp-step').forEach(s => s.classList.remove('active', 'completed'));
    const stepEl = $('wizStep' + step);
    if (stepEl) stepEl.classList.add('active');
    for (let i = 1; i <= 4; i++) {
        const wp = document.querySelector(`.wp-step[data-step="${i}"]`);
        const line = wp?.nextElementSibling;
        if (i < step) { wp?.classList.add('completed'); line?.classList.add('completed'); }
        else if (i === step) { wp?.classList.add('active'); }
    }
}

// ====== MOD SELECTION (Step 2) ======
function renderModSelection() {
    const container = $('modSelectionContent');
    if (!container) return;
    const cat = MODS_DB[STATE.wizard.category];
    if (!cat) return;
    const selected = STATE.wizard.selectedMods;

    const versionOpts = VERSIONS.map(v => `<option value="${v}" ${v === STATE.wizard.version ? 'selected' : ''}>${v}</option>`).join('');

    let html = `
        <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">
            <div style="flex:1;min-width:140px;">
                <label style="font-size:12px;color:var(--text-secondary);font-weight:600;display:block;margin-bottom:4px;">MINECRAFT VERSION</label>
                <select class="setting-select" id="versionSelect" style="width:100%;padding:8px 12px;font-size:13px;" onchange="updateVersion(this.value)">
                    ${versionOpts}
                </select>
            </div>
            <div style="flex:2;min-width:200px;">
                <label style="font-size:12px;color:var(--text-secondary);font-weight:600;display:block;margin-bottom:4px;">MOD LOADER</label>
                <div style="display:flex;gap:6px;" id="loaderRadios">
                    <label class="loader-card" style="flex:1;display:block;cursor:pointer;">
                        <input type="radio" name="loader" value="fabric" ${STATE.wizard.loader === 'fabric' ? 'checked' : ''} style="display:none;">
                        <div class="loader-content" style="padding:10px;background:var(--bg-input);border:2px solid ${STATE.wizard.loader === 'fabric' ? 'var(--accent)' : 'var(--border)'};border-radius:var(--radius-sm);text-align:center;transition:all var(--transition);"><span style="font-weight:600;font-size:13px;">Fabric</span><span style="display:block;font-size:10px;color:var(--text-muted);">Lightweight</span></div>
                    </label>
                    <label class="loader-card" style="flex:1;display:block;cursor:pointer;">
                        <input type="radio" name="loader" value="forge" ${STATE.wizard.loader === 'forge' ? 'checked' : ''} style="display:none;">
                        <div class="loader-content" style="padding:10px;background:var(--bg-input);border:2px solid ${STATE.wizard.loader === 'forge' ? 'var(--accent)' : 'var(--border)'};border-radius:var(--radius-sm);text-align:center;transition:all var(--transition);"><span style="font-weight:600;font-size:13px;">Forge</span><span style="display:block;font-size:10px;color:var(--text-muted);">Most mods</span></div>
                    </label>
                    <label class="loader-card" style="flex:1;display:block;cursor:pointer;">
                        <input type="radio" name="loader" value="neoforge" ${STATE.wizard.loader === 'neoforge' ? 'checked' : ''} style="display:none;">
                        <div class="loader-content" style="padding:10px;background:var(--bg-input);border:2px solid ${STATE.wizard.loader === 'neoforge' ? 'var(--accent)' : 'var(--border)'};border-radius:var(--radius-sm);text-align:center;transition:all var(--transition);"><span style="font-weight:600;font-size:13px;">NeoForge</span><span style="display:block;font-size:10px;color:var(--text-muted);">Next-gen</span></div>
                    </label>
                </div>
            </div>
        </div>

        <div class="opt-banner">
            <span class="opt-banner-icon">⚡</span>
            <div class="opt-banner-text">
                <strong>Performance mods are always included</strong>
                <span>${OPTIMIZATION_MODS.mods.length} optimization mods selected by default</span>
            </div>
        </div>
    `;

    // Curated category mods
    html += `<div class="mod-list-section"><div class="mod-section-header"><div><div class="mod-section-title">${cat.emoji} ${cat.name} Mods</div><div class="mod-section-subtitle">Select the mods you want in your pack</div></div><span style="font-size:12px;color:var(--text-muted);">${cat.mods.filter(m => selected.includes(m.name)).length}/${cat.mods.length} selected</span></div>`;

    cat.mods.forEach((mod) => {
        const isSelected = selected.includes(mod.name);
        const badge = mod.loader === 'both' ? 'both' : mod.loader;
        html += `<div class="mod-card ${isSelected ? 'selected' : ''}" onclick="toggleMod('${mod.name.replace(/'/g, "\\'")}')"><div class="mod-card-icon">${mod.icon}</div><div class="mod-card-info"><div class="mod-card-name">${mod.name}<span class="mod-card-badge ${badge}">${badge}</span>${mod.popular ? '<span class="mod-card-badge pop">★ Popular</span>' : ''}</div><div class="mod-card-desc">${mod.desc}</div><div class="mod-card-link"><a href="${mod.url}" target="_blank">View on Modrinth ↗</a></div></div><div class="mod-card-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div></div>`;
    });
    html += `</div>`;

    // Optimization mods
    html += `<div class="mod-list-section"><div class="mod-section-header"><div><div class="mod-section-title">⚡ ${OPTIMIZATION_MODS.name}</div><div class="mod-section-subtitle">${OPTIMIZATION_MODS.description}</div></div><span style="font-size:12px;color:var(--text-muted);">${OPTIMIZATION_MODS.mods.filter(m => selected.includes(m.name)).length}/${OPTIMIZATION_MODS.mods.length} selected</span></div>`;

    OPTIMIZATION_MODS.mods.forEach((mod) => {
        const isSelected = selected.includes(mod.name);
        const badge = mod.loader === 'both' ? 'both' : mod.loader;
        html += `<div class="mod-card ${isSelected ? 'selected' : ''}" onclick="toggleMod('${mod.name.replace(/'/g, "\\'")}')"><div class="mod-card-icon">${mod.icon}</div><div class="mod-card-info"><div class="mod-card-name">${mod.name}<span class="mod-card-badge ${badge}">${badge}</span>${mod.essential ? '<span class="mod-card-badge opt">★ Essential</span>' : mod.popular ? '<span class="mod-card-badge pop">Popular</span>' : ''}</div><div class="mod-card-desc">${mod.desc}</div><div class="mod-card-link"><a href="${mod.url}" target="_blank">View on Modrinth ↗</a></div></div><div class="mod-card-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div></div>`;
    });
    html += `</div>`;

    // ====== MODRINTH API SEARCH SECTION ======
    html += `
        <div class="mod-list-section" style="border-top:2px solid var(--border-light);padding-top:20px;margin-top:20px;">
            <div class="mod-section-header">
                <div>
                    <div class="mod-section-title">🔍 Browse All Mods on Modrinth</div>
                    <div class="mod-section-subtitle">Search the entire Modrinth catalog — <span id="apiSearchCount">Loading mod count...</span></div>
                </div>
            </div>
            <div style="display:flex;gap:8px;margin-bottom:12px;">
                <div class="search-wrapper" style="flex:1;">
                    <input type="text" class="search-input" id="apiSearchInput" placeholder="Search mods on Modrinth..." style="padding:10px 14px;font-size:13px;" onkeydown="if(event.key==='Enter')doModrinthSearch(this.value)">
                </div>
                <button class="btn btn-primary" onclick="doModrinthSearch(document.getElementById('apiSearchInput').value)" style="white-space:nowrap;">🔍 Search</button>
                <button class="btn btn-secondary" onclick="browseCategoryOnModrinth()" style="white-space:nowrap;">📂 Browse ${cat.name}</button>
            </div>
            <div id="apiSearchResults" style="max-height:400px;overflow-y:auto;"></div>
        </div>
    `;

    container.innerHTML = html;

    const loaderRadios = document.getElementById('loaderRadios');
    if (loaderRadios) {
        loaderRadios.addEventListener('change', (e) => {
            if (e.target.name === 'loader') {
                loaderRadios.querySelectorAll('.loader-content').forEach(c => c.style.borderColor = 'var(--border)');
                if (e.target.checked) e.target.nextElementSibling.style.borderColor = 'var(--accent)';
                STATE.wizard.loader = e.target.value;
            }
        });
    }
}

function updateVersion(version) {
    STATE.wizard.version = version;
}

// ====== TOGGLE MOD ======
function toggleMod(name) {
    const idx = STATE.wizard.selectedMods.indexOf(name);
    if (idx > -1) STATE.wizard.selectedMods.splice(idx, 1);
    else STATE.wizard.selectedMods.push(name);
    renderModSelection();
}

// ====== REVIEW (Step 3) ======
function renderReview() {
    const container = $('reviewContent');
    if (!container) return;
    const cat = MODS_DB[STATE.wizard.category];
    if (!cat) return;
    const selected = STATE.wizard.selectedMods;

    const catMods = cat.mods.filter(m => selected.includes(m.name));
    const optMods = OPTIMIZATION_MODS.mods.filter(m => selected.includes(m.name));
    const apiModsList = Object.values(STATE.wizard.apiMods || {}).filter(m => selected.includes(m.name));

    const adjectives = ["Dark","Frozen","Cursed","Eternal","Forgotten","Golden","Iron","Shadow","Crystal","Thunder","Arcane","Savage","Silent","Blazing","Frost"];
    const nouns = ["Forge","Journey","Legacy","Odyssey","Expedition","Saga","Dominion","Realm","Chronicle","Awakening","Horizon","Covenant","Requiem","Ascension","Frontier"];
    const defaultName = `${adjectives[Math.floor(Math.random()*adjectives.length)]} ${nouns[Math.floor(Math.random()*nouns.length)]}`;

    container.innerHTML = `
        <div style="margin-bottom:20px;">
            <label class="form-label" style="font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Modpack Name</label>
            <input type="text" class="form-input" id="packName" placeholder="e.g. ${defaultName}" value="${defaultName}" style="max-width:400px;padding:10px 14px;font-size:15px;font-weight:600;" maxlength="40">
        </div>
        <div class="review-pack">
            <div class="review-pack-header">
                <span class="review-pack-icon">${cat.emoji}</span>
                <div class="review-pack-info">
                    <div class="review-pack-name" id="reviewName">${defaultName}</div>
                    <div class="review-pack-meta">
                        <span class="review-pack-tag cat">${cat.name}</span>
                        <span class="review-pack-tag">${STATE.wizard.version}</span>
                        <span class="review-pack-tag">${STATE.wizard.loader.toUpperCase()}</span>
                        <span class="review-pack-tag">${selected.length} total mods</span>
                    </div>
                </div>
            </div>
            <div class="review-mod-list">
                <div class="review-mod-group">
                    <div class="review-mod-group-title">🎯 ${cat.name} Mods (${catMods.length})</div>
                    ${catMods.map(m => `<div class="review-mod-item"><span class="rvi-dot"></span><span>${m.icon} ${m.name}</span></div>`).join('')}
                </div>
                ${apiModsList.length > 0 ? `<div class="review-mod-group"><div class="review-mod-group-title">🔍 From Modrinth Search (${apiModsList.length})</div>${apiModsList.map(m => `<div class="review-mod-item"><span class="rvi-dot" style="background:var(--gold);"></span><span>📦 ${m.name}</span></div>`).join('')}</div>` : ''}
                <div class="review-mod-group">
                    <div class="review-mod-group-title">⚡ Performance & Optimization (${optMods.length})</div>
                    ${optMods.map(m => `<div class="review-mod-item"><span class="rvi-dot"></span><span>${m.icon} ${m.name}</span></div>`).join('')}
                </div>
            </div>
        </div>
    `;
    $('packName')?.addEventListener('input', () => { const n = $('reviewName'); if (n) n.textContent = $('packName').value || 'Untitled Pack'; });
}

// ====== FINALIZE ======
function finalizeModpack() {
    const name = $('packName')?.value?.trim();
    if (!name) { showToast('Please give your modpack a name!', 'error'); return; }
    const cat = MODS_DB[STATE.wizard.category];
    if (!cat) return;
    const selected = STATE.wizard.selectedMods;
    const catMods = cat.mods.filter(m => selected.includes(m.name));
    const optMods = OPTIMIZATION_MODS.mods.filter(m => selected.includes(m.name));
    const apiModsList = Object.values(STATE.wizard.apiMods || {}).filter(m => selected.includes(m.name));
    const allMods = [...catMods, ...apiModsList, ...optMods];

    if (catMods.length === 0) { showToast('Please select at least one mod from your category!', 'error'); return; }

    const modpack = {
        id: Date.now(), name, emoji: cat.emoji, category: cat.name,
        version: STATE.wizard.version, loader: STATE.wizard.loader,
        mods: allMods.length,
        modList: allMods.map(m => ({ name: m.name, icon: m.icon || '📦', url: m.url, loader: m.loader || STATE.wizard.loader })),
        createdAt: new Date().toISOString()
    };
    STATE.modpacks.unshift(modpack);
    saveData();
    showToast(`✨ "${name}" forged successfully!`, 'success');
    navigateTo('home');
    resetWizard();
}

function resetWizard() {
    STATE.wizardStep = 1; STATE.wizard.category = null; STATE.wizard.selectedMods = [];
    STATE.wizard.loader = 'fabric'; STATE.wizard.version = '1.20.1'; STATE.wizard.apiMods = {}; apiSearchResults = [];
    setWizardStep(1);
}

// ====== DELETE ======
function deleteModpack(id) {
    const idx = STATE.modpacks.findIndex(m => m.id === id);
    if (idx === -1) return;
    const mp = STATE.modpacks[idx];
    showConfirm('Delete Modpack', `Delete "${mp.name}"?`, () => {
        STATE.modpacks.splice(idx, 1); saveData(); renderHome(); renderModpacks();
        showToast('Modpack deleted', 'info');
    });
}

// ====== EXPORT ======
function showExportModal(mp) {
    const id = typeof mp === 'number' ? mp : mp.id;
    const modpack = STATE.modpacks.find(m => m.id === id);
    if (!modpack) return;
    const exportText = `Modpack: ${modpack.name}\nCategory: ${modpack.category}\nVersion: ${modpack.version}\nLoader: ${modpack.loader}\nCreated: ${new Date(modpack.createdAt).toLocaleDateString()}\nTotal Mods: ${modpack.mods}\n\n=== Mod List ===\n\n${modpack.modList.map(m => `  ${m.icon} ${m.name} [${m.loader}] - ${m.url}`).join('\n')}\n\n--- Generated by Modpack Forge ---`;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-box"><h3 class="modal-title">📦 ${modpack.name}</h3><p class="modal-desc">${modpack.category} · ${modpack.version} · ${modpack.loader.toUpperCase()} · ${modpack.mods} mods</p><div class="mod-section-header" style="margin-bottom:10px;"><span style="font-size:14px;font-weight:600;">Mod List</span><span style="font-size:12px;color:var(--text-muted);">${modpack.mods} total</span></div><div style="margin-bottom:16px;max-height:200px;overflow-y:auto;">${modpack.modList.map(m => `<div class="review-mod-item"><span class="rvi-dot"></span><span>${m.icon} ${m.name}</span><span style="font-size:10px;color:var(--text-muted);margin-left:auto;">${m.loader}</span></div>`).join('')}</div><div class="export-preview" onclick="this.select()">${exportText}</div><div class="modal-actions"><button class="btn btn-secondary btn-sm" onclick="this.closest('.modal-overlay').remove()">Close</button><button class="btn btn-primary btn-sm" onclick="copyExport('${modpack.name.replace(/'/g, "\\'")}', \`${exportText.replace(/`/g, '\\`')}\`)">Copy to Clipboard</button></div></div>`;
    document.body.appendChild(overlay);
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
}

function copyExport(name, text) {
    navigator.clipboard.writeText(text).then(() => { showToast(`📋 "${name}" mod list copied!`, 'success'); document.querySelector('.modal-overlay')?.remove(); }).catch(() => showToast('Failed to copy', 'error'));
}

// ====== CONFIRM MODAL ======
function showConfirm(title, message, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-box"><h3 class="modal-title">${title}</h3><p class="modal-desc">${message}</p><div class="modal-actions"><button class="btn btn-secondary btn-sm" id="modalCancel">Cancel</button><button class="btn btn-danger btn-sm" id="modalConfirm">Delete</button></div></div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#modalCancel').onclick = () => overlay.remove();
    overlay.querySelector('#modalConfirm').onclick = () => { overlay.remove(); onConfirm(); };
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
}

// ====== TOAST ======
function showToast(message, type = 'info') {
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type]||''}</span> ${message}`;
    $('toastContainer').appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; toast.style.transition = 'all 0.3s ease'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ====== SETTINGS ======
function exportAllModpacks() {
    if (STATE.modpacks.length === 0) { showToast('No modpacks to export', 'error'); return; }
    const blob = new Blob([JSON.stringify(STATE.modpacks, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'modpack-forge-backup.json'; a.click();
    URL.revokeObjectURL(url); showToast('All modpacks exported!', 'success');
}

function importModpacks(event) {
    const file = event.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!Array.isArray(data)) throw new Error('Invalid format');
            STATE.modpacks = STATE.modpacks.concat(data); saveData(); renderHome(); renderModpacks();
            showToast(`Imported ${data.length} modpack(s)`, 'success');
        } catch (err) { showToast('Invalid file format', 'error'); }
    };
    reader.readAsText(file); event.target.value = '';
}

function clearAllModpacks() {
    showConfirm('Clear All Modpacks', 'This will permanently delete all your modpacks. Are you sure?', () => {
        STATE.modpacks = []; saveData(); renderHome(); renderModpacks();
        showToast('All modpacks cleared', 'info');
    });
}

// ====== POPULATE ABOUT SECTION ======
function populateAboutSection() {
    const totalMods = Object.values(MODS_DB).reduce((s, c) => s + c.mods.length, 0) + OPTIMIZATION_MODS.mods.length;
    // Modrinth count is fetched separately via fetchModrinthTotalCount()
    if ($('aboutCatCount')) $('aboutCatCount').textContent = Object.keys(MODS_DB).length + ' categories';
    if ($('aboutOptCount')) $('aboutOptCount').textContent = OPTIMIZATION_MODS.mods.length + ' optimization mods';
    if ($('sidebarModCount')) $('sidebarModCount').textContent = totalMods;
}

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
    populateAboutSection();
    fetchModrinthTotalCount();
    runSplash();
});
