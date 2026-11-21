const rarities = ['Common', 'Uncommon', 'Rare', 'Very rare', 'Legendary', 'Artifact'];
const icons = ['⚗', '⚔', '✧'];
const types = ['Consumable', 'Enchanted gear', 'Curio'];
const sources = {
 bgdia: ['Descent into Avernus', 'https://www.dndbeyond.com/sources/dnd/bgdia'],
 dmg: ['Dungeon Master’s Guide (2024)', 'https://www.dndbeyond.com/sources/dnd/dmg-2024'],
 phb: ['Player’s Handbook (2024)', 'https://www.dndbeyond.com/sources/dnd/phb-2024/equipment'],
 au: ['Arcana Unleashed', 'https://www.dndbeyond.com/sources/dnd/au/chapter-5-magic-items']
};
const catalog = [
 [
  1,
  1,
  "Adamantine Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 227 · Any medium or heavy armor, except hide armor"
 ],
 [
  1,
  1,
  "Adamantine Weapon",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 227 · Any ammunition or melee weapon"
 ],
 [
  1,
  2,
  "Alchemy Jug",
  "dmg",
  "Produces a selection of liquids, such as water, oil, honey, or acid, in limited quantities.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 227"
 ],
 [
  3,
  1,
  "Ammunition of Slaying",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 228 · Any ammunition"
 ],
 [
  1,
  1,
  "Ammunition, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 228 · Any ammunition"
 ],
 [
  2,
  1,
  "Ammunition, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 228 · Any ammunition"
 ],
 [
  3,
  1,
  "Ammunition, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 228 · Any ammunition"
 ],
 [
  2,
  2,
  "Amulet of Health",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 228"
 ],
 [
  1,
  2,
  "Amulet of Proof against Detection and Location",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 228"
 ],
 [
  3,
  2,
  "Amulet of the Planes",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 229"
 ],
 [
  3,
  1,
  "Animated Shield",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 229 · Shield"
 ],
 [
  4,
  2,
  "Apparatus of Kwalish",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 229"
 ],
 [
  2,
  2,
  "Arcane Chatelaine",
  "au",
  "A set of spectral keys that can cast Arcane Lock.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 116"
 ],
 [
  2,
  2,
  "Arcanist's Bestiary",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 116"
 ],
 [
  0,
  1,
  "Armor of Gleaming",
  "dmg",
  "This armor stays free of dirt and grime.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 230"
 ],
 [
  4,
  1,
  "Armor of Invulnerability",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 230 · Plate armor"
 ],
 [
  2,
  1,
  "Armor of Resistance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 231"
 ],
 [
  2,
  1,
  "Armor of Vulnerability",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 231"
 ],
 [
  2,
  1,
  "Armor, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 230"
 ],
 [
  3,
  1,
  "Armor, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 230"
 ],
 [
  4,
  1,
  "Armor, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 230"
 ],
 [
  2,
  1,
  "Arrow-Catching Shield",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 231 · Shield"
 ],
 [
  5,
  1,
  "Axe of the Dwarvish Lords",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 231 · Battleaxe"
 ],
 [
  1,
  2,
  "Baba Yaga's Dancing Broom",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 232"
 ],
 [
  2,
  2,
  "Bag of Beans",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 233"
 ],
 [
  3,
  2,
  "Bag of Devouring",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  1,
  2,
  "Bag of Holding",
  "dmg",
  "This bag holds up to 500 pounds and 64 cubic feet while weighing 15 pounds. Retrieving an item takes a Utilize action. Piercing or overloading the bag destroys it, and putting it inside a similar extradimensional container can open a gate to the Astral Plane.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  1,
  2,
  "Bag of Tricks (gray)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  1,
  2,
  "Bag of Tricks (rust)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  1,
  2,
  "Bag of Tricks (tan)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  2,
  2,
  "Bead of Force",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 234"
 ],
 [
  0,
  2,
  "Bead of Nourishment",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 235"
 ],
 [
  0,
  2,
  "Bead of Refreshment",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 235"
 ],
 [
  2,
  2,
  "Bellows of Strangulation",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 116"
 ],
 [
  2,
  2,
  "Belt of Dwarvenkind",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 235"
 ],
 [
  4,
  2,
  "Belt of Giant Strength (cloud)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  3,
  2,
  "Belt of Giant Strength (fire)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  3,
  2,
  "Belt of Giant Strength (frost)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  2,
  2,
  "Belt of Giant Strength (hill)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  3,
  2,
  "Belt of Giant Strength (stone)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  4,
  2,
  "Belt of Giant Strength (storm)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 236"
 ],
 [
  2,
  1,
  "Berserker Axe",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 236 · Battleaxe, greataxe, or halberd"
 ],
 [
  5,
  1,
  "Blackrazor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 236 · Greatsword"
 ],
 [
  2,
  2,
  "Blood Amulet",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 116"
 ],
 [
  5,
  2,
  "Book of Exalted Deeds",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 237"
 ],
 [
  5,
  2,
  "Book of Vile Darkness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 238"
 ],
 [
  1,
  2,
  "Boon Companions' Bands",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 117"
 ],
 [
  1,
  2,
  "Boots of Elvenkind",
  "dmg",
  "These boots quiet your footfalls and aid Stealth checks that rely on moving silently.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 239"
 ],
 [
  0,
  2,
  "Boots of False Tracks",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 239"
 ],
 [
  2,
  2,
  "Boots of Levitation",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 239"
 ],
 [
  2,
  2,
  "Boots of Speed",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 240"
 ],
 [
  1,
  2,
  "Boots of Striding and Springing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 240"
 ],
 [
  1,
  2,
  "Boots of the Winterlands",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 240"
 ],
 [
  2,
  2,
  "Bowl of Commanding Water Elementals",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 240"
 ],
 [
  1,
  2,
  "Bracers of Archery",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 240"
 ],
 [
  2,
  2,
  "Bracers of Defense",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 241"
 ],
 [
  2,
  2,
  "Brazier of Commanding Fire Elementals",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 241"
 ],
 [
  1,
  2,
  "Brooch of Shielding",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 241"
 ],
 [
  1,
  2,
  "Broom of Flying",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 241"
 ],
 [
  3,
  2,
  "Candle of Invocation",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 241"
 ],
 [
  0,
  2,
  "Candle of the Deep",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 242"
 ],
 [
  1,
  2,
  "Cap of Water Breathing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 242"
 ],
 [
  2,
  2,
  "Cape of the Mountebank",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 242"
 ],
 [
  3,
  2,
  "Carpet of Flying",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 242"
 ],
 [
  0,
  1,
  "Cast-Off Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 243"
 ],
 [
  3,
  2,
  "Cauldron of Rebirth",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 243 · Druid or warlock"
 ],
 [
  2,
  2,
  "Censer of Controlling Air Elementals",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 243"
 ],
 [
  0,
  2,
  "Charlatan's Die",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 243"
 ],
 [
  2,
  2,
  "Chime of Opening",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 244"
 ],
 [
  1,
  2,
  "Circlet of Blasting",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 244"
 ],
 [
  3,
  2,
  "Cloak of Arachnida",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 244"
 ],
 [
  0,
  2,
  "Cloak of Billowing",
  "dmg",
  "Make this cloak billow dramatically on command, even in still air.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 244"
 ],
 [
  2,
  2,
  "Cloak of Displacement",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 244"
 ],
 [
  1,
  2,
  "Cloak of Elvenkind",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 244"
 ],
 [
  4,
  2,
  "Cloak of Invisibility",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 244"
 ],
 [
  0,
  2,
  "Cloak of Many Fashions",
  "dmg",
  "Change the cloak’s style, color, and apparent quality to suit the occasion.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 245"
 ],
 [
  1,
  2,
  "Cloak of Protection",
  "dmg",
  "While wearing and attuned to this cloak, you gain a +1 bonus to Armor Class and to every saving throw.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 245"
 ],
 [
  2,
  2,
  "Cloak of the Bat",
  "dmg",
  "Helps you hide and lets you fly or take bat form in dim light or darkness.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 245"
 ],
 [
  1,
  2,
  "Cloak of the Manta Ray",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 245"
 ],
 [
  0,
  2,
  "Clockwork Amulet",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 245"
 ],
 [
  0,
  2,
  "Clothes of Mending",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 245"
 ],
 [
  0,
  2,
  "Conjurer's Canopy",
  "au",
  "A magical canopy that shelters its user from ordinary weather.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 117"
 ],
 [
  3,
  2,
  "Crystal Ball",
  "dmg",
  "While touching this crystal ball and attuned to it, you can cast Scrying with a spell save DC of 17.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 245"
 ],
 [
  4,
  2,
  "Crystal Ball of Mind Reading",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 246"
 ],
 [
  4,
  2,
  "Crystal Ball of Telepathy",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 246"
 ],
 [
  4,
  2,
  "Crystal Ball of True Seeing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 246"
 ],
 [
  2,
  2,
  "Cube of Force",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 246"
 ],
 [
  2,
  2,
  "Cube of Summoning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 247"
 ],
 [
  4,
  2,
  "Cubic Gate",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 247"
 ],
 [
  2,
  2,
  "Daern's Instant Fortress",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 247"
 ],
 [
  2,
  1,
  "Dagger of Venom",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 248 · Dagger"
 ],
 [
  3,
  1,
  "Dancing Sword",
  "dmg",
  "Toss it into the air and command it to fly and attack on its own.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 248 · Greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  0,
  2,
  "Dark Shard Amulet",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 248 · Warlock"
 ],
 [
  1,
  2,
  "Decanter of Endless Water",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 249"
 ],
 [
  1,
  2,
  "Deck of Illusions",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 249"
 ],
 [
  4,
  2,
  "Deck of Many Things",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 250"
 ],
 [
  4,
  1,
  "Defender",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 252 · Any melee weapon"
 ],
 [
  3,
  1,
  "Demon Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 252"
 ],
 [
  5,
  2,
  "Demonomicon of Iggwilv",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 252"
 ],
 [
  4,
  2,
  "Diamond Staff",
  "au",
  "This +3 quarterstaff requires attunement by a sorcerer, warlock, or wizard. It grants advantage on Arcana checks, holds up to 20 charges, and can cast spells such as Identify, Maze, or True Seeing. You can also spend charges on a hit to try to stun the target.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 117 · Sorcerer, warlock, or wizard"
 ],
 [
  0,
  2,
  "Dictation Quill",
  "au",
  "A magical quill that writes down spoken words for you.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 118"
 ],
 [
  2,
  2,
  "Dimensional Shackles",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 254"
 ],
 [
  1,
  1,
  "Dispelling Ammunition",
  "au",
  "A successful shot can end low-level spells affecting the target.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 118 · Any ammunition"
 ],
 [
  2,
  2,
  "Dissuader",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 118"
 ],
 [
  3,
  1,
  "Dragon Scale Mail",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 254 · Scale mail"
 ],
 [
  2,
  1,
  "Dragon Slayer",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 254"
 ],
 [
  0,
  2,
  "Dread Helm",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 254"
 ],
 [
  2,
  2,
  "Dream Weaver",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 119"
 ],
 [
  1,
  2,
  "Driftglobe",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 254"
 ],
 [
  1,
  2,
  "Dust of Disappearance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 255"
 ],
 [
  1,
  2,
  "Dust of Dryness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 255"
 ],
 [
  1,
  2,
  "Dust of Sneezing and Choking",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 255"
 ],
 [
  3,
  1,
  "Dwarven Plate",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 255 · Half plate or plate armor"
 ],
 [
  3,
  1,
  "Dwarven Thrower",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 256 · Warhammer, dwarf"
 ],
 [
  0,
  2,
  "Ear Horn of Hearing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 256"
 ],
 [
  3,
  2,
  "Efreeti Bottle",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 256"
 ],
 [
  4,
  1,
  "Efreeti Chain",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 257 · Chain mail or chain shirt"
 ],
 [
  1,
  2,
  "Elemental Gem (blue sapphire)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 257"
 ],
 [
  1,
  2,
  "Elemental Gem (emerald)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 257"
 ],
 [
  1,
  2,
  "Elemental Gem (red corundum)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 257"
 ],
 [
  1,
  2,
  "Elemental Gem (yellow diamond)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 257"
 ],
 [
  2,
  0,
  "Elixir of Health",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 257"
 ],
 [
  0,
  2,
  "Elocutionist's Lexicon",
  "au",
  "This enchanted dictionary opens to the word you’re trying to recall.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 119"
 ],
 [
  2,
  1,
  "Elven Chain",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 257 · Chain mail or chain shirt"
 ],
 [
  0,
  2,
  "Enduring Spellbook",
  "dmg",
  "A spellbook whose pages resist damage from fire and water and the wear of age.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 257"
 ],
 [
  3,
  1,
  "Energy Bow",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · Requires attunement · Page 257 · Longbow or shortbow"
 ],
 [
  0,
  2,
  "Ensorcelled Missive",
  "au",
  "Conceals a written message behind a passphrase so unauthorized readers see gibberish.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 119"
 ],
 [
  1,
  1,
  "Enspelled Armor (cantrip)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  1,
  1,
  "Enspelled Armor (level 1 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  2,
  1,
  "Enspelled Armor (level 2 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  2,
  1,
  "Enspelled Armor (level 3 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  3,
  1,
  "Enspelled Armor (level 4 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  3,
  1,
  "Enspelled Armor (level 5 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Armor (level 6 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Armor (level 7 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Armor (level 8 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 258"
 ],
 [
  1,
  2,
  "Enspelled Staff (cantrip)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  1,
  2,
  "Enspelled Staff (level 1 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  2,
  2,
  "Enspelled Staff (level 2 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  2,
  2,
  "Enspelled Staff (level 3 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  3,
  2,
  "Enspelled Staff (level 4 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  3,
  2,
  "Enspelled Staff (level 5 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  4,
  2,
  "Enspelled Staff (level 6 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  4,
  2,
  "Enspelled Staff (level 7 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  4,
  2,
  "Enspelled Staff (level 8 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 258 · Spellcaster"
 ],
 [
  1,
  1,
  "Enspelled Weapon (cantrip)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  1,
  1,
  "Enspelled Weapon (level 1 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  2,
  1,
  "Enspelled Weapon (level 2 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  2,
  1,
  "Enspelled Weapon (level 3 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  3,
  1,
  "Enspelled Weapon (level 4 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  3,
  1,
  "Enspelled Weapon (level 5 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Weapon (level 6 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Weapon (level 7 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  4,
  1,
  "Enspelled Weapon (level 8 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 258"
 ],
 [
  0,
  2,
  "Ersatz Eye",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 259"
 ],
 [
  0,
  2,
  "Evergreen Fertilizer",
  "au",
  "A magical fertilizer used to encourage plant growth.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 119"
 ],
 [
  1,
  2,
  "Eversmoking Bottle",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 259"
 ],
 [
  3,
  1,
  "Executioner's Axe",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 259 · Battleaxe, greataxe, halberd, or handaxe"
 ],
 [
  5,
  2,
  "Eye and Hand of Vecna",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 259"
 ],
 [
  1,
  2,
  "Eyes of Charming",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 261"
 ],
 [
  1,
  2,
  "Eyes of Minute Seeing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  1,
  2,
  "Eyes of the Eagle",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (bronze griffon)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (ebony fly)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (golden lions)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (ivory goats)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (marble elephant)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  3,
  2,
  "Figurine of Wondrous Power (obsidian steed)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (onyx dog)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  2,
  "Figurine of Wondrous Power (serpentine owl)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  1,
  2,
  "Figurine of Wondrous Power (silver raven)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 261"
 ],
 [
  2,
  1,
  "Flame Tongue",
  "dmg",
  "A command ignites the blade, which sheds light and deals extra fire damage on a hit.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 263 · Any melee weapon"
 ],
 [
  2,
  2,
  "Folding Boat",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 263"
 ],
 [
  3,
  1,
  "Frost Brand",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 263 · Glaive, greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  1,
  2,
  "Gauntlets of Ogre Power",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 264"
 ],
 [
  1,
  2,
  "Gem of Brightness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 264"
 ],
 [
  2,
  2,
  "Gem of Seeing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 264"
 ],
 [
  2,
  1,
  "Giant Slayer",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 264"
 ],
 [
  2,
  1,
  "Glamoured Studded Leather",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 264 · Studded leather armor"
 ],
 [
  1,
  2,
  "Gloves of Missile Snaring",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 265"
 ],
 [
  1,
  2,
  "Gloves of Swimming and Climbing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 265"
 ],
 [
  1,
  2,
  "Gloves of Thievery",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 265"
 ],
 [
  1,
  1,
  "Goading Ammunition",
  "au",
  "A creature hit by this ammunition can lose its reactions if it fails a saving throw.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 119 · Any ammunition"
 ],
 [
  1,
  2,
  "Goggles of Night",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 265"
 ],
 [
  4,
  1,
  "Grave Reaper",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 119 · Sickle"
 ],
 [
  1,
  2,
  "Hag Eye",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 265"
 ],
 [
  4,
  1,
  "Hammer of Thunderbolts",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 265 · Maul or warhammer"
 ],
 [
  1,
  2,
  "Hat of Disguise",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 266"
 ],
 [
  3,
  2,
  "Hat of Many Spells",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 266 · Wizard"
 ],
 [
  0,
  2,
  "Hat of Vermin",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 267"
 ],
 [
  0,
  2,
  "Hat of Wizardry",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 267 · Wizard"
 ],
 [
  1,
  2,
  "Headband of Intellect",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 268"
 ],
 [
  3,
  2,
  "Helm of Brilliance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 268"
 ],
 [
  1,
  2,
  "Helm of Comprehending Languages",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 268"
 ],
 [
  1,
  2,
  "Helm of Telepathy",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 268"
 ],
 [
  2,
  2,
  "Helm of Teleportation",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 268"
 ],
 [
  2,
  2,
  "Heward's Handy Haversack",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 269"
 ],
 [
  0,
  2,
  "Heward's Handy Spice Pouch",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 269"
 ],
 [
  4,
  1,
  "Holy Avenger",
  "dmg",
  "A paladin’s weapon that deals extra radiant damage to fiends and undead and shields nearby allies from magic.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 269 · Paladin"
 ],
 [
  0,
  2,
  "Homeward Compass",
  "au",
  "Set it to a location and use the needle to find your way back.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 119"
 ],
 [
  2,
  2,
  "Horn of Blasting",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  0,
  2,
  "Horn of Silent Alarm",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  2,
  2,
  "Horn of Valhalla (brass)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  3,
  2,
  "Horn of Valhalla (bronze)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  4,
  2,
  "Horn of Valhalla (iron)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  2,
  2,
  "Horn of Valhalla (silver)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  2,
  2,
  "Horseshoes of Speed",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  3,
  2,
  "Horseshoes of a Zephyr",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 270"
 ],
 [
  1,
  2,
  "Immovable Rod",
  "dmg",
  "Press the button to anchor the rod in place, even in midair. It can support up to 8,000 pounds. A creature can attempt a DC 30 Strength check to move the anchored rod up to 10 feet.",
  null,
  [
   "enchanter"
  ],
  "Rod · No attunement · Page 270"
 ],
 [
  0,
  2,
  "Instrument of Illusions",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 271"
 ],
 [
  0,
  2,
  "Instrument of Scribing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 271"
 ],
 [
  3,
  2,
  "Instrument of the Bards (Anstruth harp)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  2,
  2,
  "Instrument of the Bards (Canaith mandolin)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  2,
  2,
  "Instrument of the Bards (Cli lyre)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  1,
  2,
  "Instrument of the Bards (Doss lute)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  1,
  2,
  "Instrument of the Bards (Fochlucan bandore)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  1,
  2,
  "Instrument of the Bards (Mac-Fuirmidh cittern)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  4,
  2,
  "Instrument of the Bards (Ollamh harp)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 272 · Bard"
 ],
 [
  3,
  2,
  "Ioun Stone (absorption)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (agility)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  2,
  2,
  "Ioun Stone (awareness)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (fortitude)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  4,
  2,
  "Ioun Stone (greater absorption)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (insight)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (intellect)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (leadership)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  4,
  2,
  "Ioun Stone (mastery)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  2,
  2,
  "Ioun Stone (protection)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  4,
  2,
  "Ioun Stone (regeneration)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  2,
  2,
  "Ioun Stone (reserve)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  3,
  2,
  "Ioun Stone (strength)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  2,
  2,
  "Ioun Stone (sustenance)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 273"
 ],
 [
  2,
  2,
  "Iron Bands of Bilarro",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 274"
 ],
 [
  4,
  2,
  "Iron Flask",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 274"
 ],
 [
  1,
  1,
  "Javelin of Lightning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 275 · Javelin"
 ],
 [
  1,
  2,
  "Keoghtom's Ointment",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 275"
 ],
 [
  1,
  2,
  "Lantern of Revealing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 275"
 ],
 [
  0,
  2,
  "Lock of Trickery",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 275"
 ],
 [
  4,
  1,
  "Luck Blade",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 275 · Glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword"
 ],
 [
  0,
  2,
  "Lucky Foot",
  "au",
  "If you roll a natural 1 on an ability check or saving throw, you can use this charm to reroll. You must take the new result, and the charm disintegrates.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 119"
 ],
 [
  3,
  1,
  "Lute of Thunderous Thumping",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 275 · Club"
 ],
 [
  2,
  1,
  "Mace of Disruption",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 276 · Mace"
 ],
 [
  2,
  1,
  "Mace of Smiting",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 276 · Mace"
 ],
 [
  2,
  1,
  "Mace of Terror",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 276 · Mace"
 ],
 [
  2,
  1,
  "Mage Breaker",
  "au",
  "This dagger makes it harder for a spellcaster you strike to maintain concentration.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 120 · Dagger"
 ],
 [
  2,
  2,
  "Mage's Manacle",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 120"
 ],
 [
  1,
  2,
  "Magewright's Gloves",
  "au",
  "Let one wearer work with the speed of two crafters when using certain tools to make mundane items.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120"
 ],
 [
  2,
  2,
  "Mantle of Spell Resistance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 276"
 ],
 [
  3,
  2,
  "Manual of Bodily Health",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Gainful Exercise",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Golems (clay)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Golems (flesh)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Golems (iron)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Golems (stone)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 277"
 ],
 [
  3,
  2,
  "Manual of Quickness of Action",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 278"
 ],
 [
  1,
  1,
  "Mariner's Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 278"
 ],
 [
  1,
  1,
  "Martialist's Quarterstaff",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 120 · Quarterstaff"
 ],
 [
  1,
  2,
  "Medallion of Thoughts",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 278"
 ],
 [
  3,
  2,
  "Mirror of Life Trapping",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 278"
 ],
 [
  1,
  1,
  "Mithral Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 279 · Any medium or heavy armor, except hide armor"
 ],
 [
  0,
  1,
  "Moon-Touched Sword",
  "dmg",
  "In darkness, the drawn blade sheds moonlight around its wielder.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 280 · Glaive, greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  4,
  1,
  "Moonblade",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 279 · Greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  0,
  2,
  "Mystery Key",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 280"
 ],
 [
  2,
  1,
  "Namer's Needle",
  "au",
  "This dagger can compel a creature it strikes to speak its own name.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · No attunement · Page 120 · Dagger"
 ],
 [
  1,
  2,
  "Nature's Mantle",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 280 · Druid or ranger"
 ],
 [
  1,
  2,
  "Necklace of Adaptation",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 280"
 ],
 [
  2,
  2,
  "Necklace of Fireballs",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 280"
 ],
 [
  2,
  2,
  "Necklace of Prayer Beads",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 281 · Cleric, druid, or paladin"
 ],
 [
  1,
  2,
  "Necklace of the Beastly Familiar (azurite)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120 · Spellcaster"
 ],
 [
  2,
  2,
  "Necklace of the Beastly Familiar (chrysoprase)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120 · Spellcaster"
 ],
 [
  4,
  2,
  "Necklace of the Beastly Familiar (fire opal)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120 · Spellcaster"
 ],
 [
  3,
  2,
  "Necklace of the Beastly Familiar (topaz)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120 · Spellcaster"
 ],
 [
  2,
  2,
  "Necklace of the Beastly Familiar (zircon)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 120 · Spellcaster"
 ],
 [
  3,
  1,
  "Nine Lives Stealer",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 281"
 ],
 [
  3,
  2,
  "Nolzur's Marvelous Pigments",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 281"
 ],
 [
  3,
  1,
  "Oathbow",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · Requires attunement · Page 282 · Longbow or shortbow"
 ],
 [
  2,
  0,
  "Oil of Etherealness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 282"
 ],
 [
  3,
  0,
  "Oil of Sharpness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 282"
 ],
 [
  1,
  0,
  "Oil of Slipperiness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 283"
 ],
 [
  0,
  2,
  "Orb of Direction",
  "dmg",
  "Hold this orb to determine which way is north.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 283"
 ],
 [
  1,
  2,
  "Orb of Divination Detection",
  "au",
  "This uncommon orb requires attunement. It glows green when a Divination spell targets you, giving you a visible warning of the spell.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 121"
 ],
 [
  5,
  2,
  "Orb of Dragonkind",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 283"
 ],
 [
  1,
  2,
  "Orb of Sorcery",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 121 · Sorcerer"
 ],
 [
  0,
  2,
  "Orb of Time",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 284"
 ],
 [
  1,
  2,
  "Pearl of Power",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 284 · Spellcaster"
 ],
 [
  0,
  2,
  "Perfume of Bewitching",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 284"
 ],
 [
  1,
  2,
  "Periapt of Health",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 284"
 ],
 [
  2,
  2,
  "Periapt of Proof against Poison",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 284"
 ],
 [
  1,
  2,
  "Periapt of Wound Closure",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 284"
 ],
 [
  1,
  0,
  "Philter of Love",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 285"
 ],
 [
  0,
  2,
  "Pipe of Smoke Monsters",
  "dmg",
  "Blow smoke from this pipe into the temporary shape of a creature.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 285"
 ],
 [
  1,
  2,
  "Pipes of Haunting",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 285"
 ],
 [
  1,
  2,
  "Pipes of the Sewers",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 285"
 ],
 [
  4,
  1,
  "Plate Armor of Etherealness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 286 · Half plate or plate armor"
 ],
 [
  0,
  2,
  "Pole of Angling",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 286"
 ],
 [
  0,
  2,
  "Pole of Collapsing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 286"
 ],
 [
  2,
  2,
  "Portable Hole",
  "dmg",
  "Unfold this cloth on a solid surface to open a deep extradimensional storage space.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 286"
 ],
 [
  0,
  2,
  "Pot of Awakening",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 289"
 ],
 [
  1,
  0,
  "Potion of Animal Friendship",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  2,
  0,
  "Potion of Clairvoyance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  0,
  0,
  "Potion of Climbing",
  "dmg",
  "Grants a climb speed and makes climbing checks easier for an hour.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  0,
  0,
  "Potion of Comprehension",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  2,
  0,
  "Potion of Diminution",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  1,
  0,
  "Potion of Dragon's Breath (black)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  1,
  0,
  "Potion of Dragon's Breath (blue)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  1,
  0,
  "Potion of Dragon's Breath (green)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  1,
  0,
  "Potion of Dragon's Breath (red)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  1,
  0,
  "Potion of Dragon's Breath (white)",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  1,
  0,
  "Potion of Fire Breath",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  3,
  0,
  "Potion of Flying",
  "dmg",
  "For one hour after drinking, you gain a Fly Speed equal to your Speed and can hover. If the effect ends while you are still aloft and nothing else supports you, you fall.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  2,
  0,
  "Potion of Gaseous Form",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 287"
 ],
 [
  3,
  0,
  "Potion of Giant Strength (cloud)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Giant Strength (fire)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Giant Strength (frost)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  1,
  0,
  "Potion of Giant Strength (hill)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Giant Strength (stone)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  4,
  0,
  "Potion of Giant Strength (storm)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  3,
  0,
  "Potion of Greater Invisibility",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  1,
  0,
  "Potion of Growth",
  "dmg",
  "Temporarily enlarges the drinker as the Enlarge effect of Enlarge/Reduce.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  0,
  0,
  "Potion of Healing",
  "dmg",
  "A red draught that restores 2d4 + 2 hit points. Under the 2024 rules, you can drink it or administer it to another creature as a Bonus Action. The potion is consumed in the process.",
  50,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  1,
  0,
  "Potion of Healing (greater)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Healing (superior)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  3,
  0,
  "Potion of Healing (supreme)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Heroism",
  "dmg",
  "For one hour, the drinker gains 10 temporary hit points and benefits from Bless without needing to concentrate.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Invisibility",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Invulnerability",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  3,
  0,
  "Potion of Longevity",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  2,
  0,
  "Potion of Mind Reading",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  1,
  0,
  "Potion of Poison",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 288"
 ],
 [
  1,
  0,
  "Potion of Pugilism",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 289"
 ],
 [
  1,
  0,
  "Potion of Resistance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 289"
 ],
 [
  3,
  0,
  "Potion of Speed",
  "dmg",
  "Grants the benefits of Haste for a short time without requiring concentration.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 289"
 ],
 [
  1,
  0,
  "Potion of Tirelessness",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 121"
 ],
 [
  3,
  0,
  "Potion of Vitality",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 289"
 ],
 [
  1,
  0,
  "Potion of Water Breathing",
  "dmg",
  "Lets the drinker breathe underwater for an hour.",
  null,
  [
   "apothecary"
  ],
  "Potion · No attunement · Page 289"
 ],
 [
  2,
  2,
  "Prismatic Rune",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 122 · Spellcaster"
 ],
 [
  0,
  2,
  "Prosthetic Limb",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  1,
  2,
  "Quaal's Feather Token (anchor)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  2,
  2,
  "Quaal's Feather Token (bird)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  1,
  2,
  "Quaal's Feather Token (fan)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  2,
  2,
  "Quaal's Feather Token (swan boat)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  1,
  2,
  "Quaal's Feather Token (tree)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  2,
  2,
  "Quaal's Feather Token (whip)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 290"
 ],
 [
  3,
  1,
  "Quarterstaff of the Acrobat",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 291 · Quarterstaff"
 ],
 [
  5,
  2,
  "Queen Ehlissa's Marvelous Nightingale",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 122"
 ],
 [
  1,
  2,
  "Quiver of Ehlonna",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 291"
 ],
 [
  2,
  2,
  "Ring of Animal Influence",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 292"
 ],
 [
  1,
  2,
  "Ring of Dedicated Focus",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 122"
 ],
 [
  4,
  2,
  "Ring of Djinni Summoning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 292"
 ],
 [
  4,
  2,
  "Ring of Elemental Command (air)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 292"
 ],
 [
  4,
  2,
  "Ring of Elemental Command (earth)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 292"
 ],
 [
  4,
  2,
  "Ring of Elemental Command (fire)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 292"
 ],
 [
  4,
  2,
  "Ring of Elemental Command (water)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 292"
 ],
 [
  2,
  2,
  "Ring of Evasion",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  2,
  2,
  "Ring of Feather Falling",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  2,
  2,
  "Ring of Free Action",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  4,
  2,
  "Ring of Invisibility",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  1,
  2,
  "Ring of Jumping",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  1,
  2,
  "Ring of Mind Shielding",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 293"
 ],
 [
  2,
  2,
  "Ring of Protection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 294"
 ],
 [
  3,
  2,
  "Ring of Regeneration",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 294"
 ],
 [
  2,
  2,
  "Ring of Resistance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 294"
 ],
 [
  3,
  2,
  "Ring of Shooting Stars",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 294"
 ],
 [
  2,
  2,
  "Ring of Spell Storing",
  "dmg",
  "This ring requires attunement and can hold up to five combined levels of spells. A creature casts a spell into the ring to store it. When you cast it from the ring, it uses the original caster’s spell statistics and leaves the ring.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 295"
 ],
 [
  4,
  2,
  "Ring of Spell Turning",
  "dmg",
  "Helps you resist spells that target only you and can turn some of them back on their caster.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 295"
 ],
 [
  1,
  2,
  "Ring of Swimming",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 295"
 ],
 [
  3,
  2,
  "Ring of Telekinesis",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 295"
 ],
 [
  4,
  2,
  "Ring of Three Wishes",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 296"
 ],
 [
  1,
  2,
  "Ring of Warmth",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 296"
 ],
 [
  1,
  2,
  "Ring of Water Walking",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 296"
 ],
 [
  2,
  2,
  "Ring of X-ray Vision",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 296"
 ],
 [
  2,
  2,
  "Ring of the Ram",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Ring · Requires attunement · Page 296"
 ],
 [
  0,
  2,
  "Rival Coin",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 296"
 ],
 [
  2,
  2,
  "Robe of Eyes",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 297"
 ],
 [
  3,
  2,
  "Robe of Scintillating Colors",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 297"
 ],
 [
  3,
  2,
  "Robe of Stars",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 297"
 ],
 [
  1,
  2,
  "Robe of Useful Items",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 298"
 ],
 [
  4,
  2,
  "Robe of the Archmagi",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 298 · Sorcerer, warlock, or wizard"
 ],
 [
  3,
  2,
  "Rod of Absorption",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 299"
 ],
 [
  3,
  2,
  "Rod of Alertness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 299"
 ],
 [
  4,
  2,
  "Rod of Lordly Might",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 300"
 ],
 [
  4,
  2,
  "Rod of Resurrection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301"
 ],
 [
  2,
  2,
  "Rod of Rulership",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301"
 ],
 [
  3,
  2,
  "Rod of Security",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · No attunement · Page 301"
 ],
 [
  1,
  2,
  "Rod of the Pact Keeper, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301"
 ],
 [
  2,
  2,
  "Rod of the Pact Keeper, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301 · Warlock"
 ],
 [
  3,
  2,
  "Rod of the Pact Keeper, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301 · Warlock"
 ],
 [
  1,
  2,
  "Rope of Climbing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 301"
 ],
 [
  2,
  2,
  "Rope of Entanglement",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 301"
 ],
 [
  0,
  2,
  "Rope of Mending",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 302"
 ],
 [
  0,
  2,
  "Ruby of the War Mage",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 302 · Spellcaster"
 ],
 [
  1,
  2,
  "Saddle of the Cavalier",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 302"
 ],
 [
  4,
  2,
  "Scarab of Protection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 302"
 ],
 [
  2,
  2,
  "Scholar's Anchoring Bangle",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 122"
 ],
 [
  3,
  1,
  "Scimitar of Speed",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 302 · Scimitar"
 ],
 [
  2,
  0,
  "Scroll of Protection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 302"
 ],
 [
  4,
  0,
  "Scroll of Titan Summoning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 303"
 ],
 [
  2,
  2,
  "Secret Keeper's Circlet",
  "au",
  "Lets you set a trigger that erases your memory of a deed.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 122"
 ],
 [
  1,
  2,
  "Sending Stones",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 303"
 ],
 [
  1,
  1,
  "Sentinel Shield",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 303 · Shield"
 ],
 [
  0,
  1,
  "Shield of Expression",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 303 · Shield"
 ],
 [
  2,
  1,
  "Shield of Missile Attraction",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 304 · Shield"
 ],
 [
  3,
  1,
  "Shield of the Cavalier",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 304 · Shield"
 ],
 [
  1,
  1,
  "Shield, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 303 · Shield"
 ],
 [
  2,
  1,
  "Shield, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 303 · Shield"
 ],
 [
  3,
  1,
  "Shield, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 303 · Shield"
 ],
 [
  0,
  1,
  "Silvered Weapon",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 304"
 ],
 [
  1,
  2,
  "Slippers of Spider Climbing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 304"
 ],
 [
  0,
  1,
  "Smoldering Armor",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · No attunement · Page 305"
 ],
 [
  4,
  2,
  "Sovereign Glue",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 305"
 ],
 [
  0,
  2,
  "Spell Component Ring",
  "au",
  "A ring made to serve as a spellcasting focus.",
  null,
  [
   "enchanter"
  ],
  "Ring · No attunement · Page 123"
 ],
 [
  2,
  2,
  "Spell Duelist's Trophy",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 123 · Spellcaster"
 ],
 [
  0,
  0,
  "Spell Scroll (cantrip)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  0,
  0,
  "Spell Scroll (level 1 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  1,
  0,
  "Spell Scroll (level 2 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  1,
  0,
  "Spell Scroll (level 3 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  2,
  0,
  "Spell Scroll (level 4 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  2,
  0,
  "Spell Scroll (level 5 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  3,
  0,
  "Spell Scroll (level 6 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  3,
  0,
  "Spell Scroll (level 7 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  3,
  0,
  "Spell Scroll (level 8 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  4,
  0,
  "Spell Scroll (level 9 spell)",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement · Page 305"
 ],
 [
  1,
  2,
  "Spell-Slinger's Puppet",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 123"
 ],
 [
  3,
  1,
  "Spellguard Shield",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 305 · Shield"
 ],
 [
  4,
  2,
  "Sphere of Annihilation",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 306"
 ],
 [
  3,
  2,
  "Spirit Board",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 306"
 ],
 [
  0,
  2,
  "Staff of Adornment",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · No attunement · Page 306"
 ],
 [
  0,
  2,
  "Staff of Birdcalls",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · No attunement · Page 307"
 ],
 [
  2,
  2,
  "Staff of Charming",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 307 · Bard, cleric, druid, sorcerer, warlock, or wizard"
 ],
 [
  3,
  2,
  "Staff of Fire",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 307 · Druid, sorcerer, warlock, or wizard"
 ],
 [
  0,
  2,
  "Staff of Flowers",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · No attunement · Page 308"
 ],
 [
  3,
  2,
  "Staff of Frost",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 308 · Druid, sorcerer, warlock, or wizard"
 ],
 [
  2,
  2,
  "Staff of Healing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 308 · Bard, cleric, or druid"
 ],
 [
  3,
  2,
  "Staff of Power",
  "dmg",
  "A spellcasting staff that boosts defenses and spell attacks and stores charges for powerful spells.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 308 · Sorcerer, warlock, or wizard"
 ],
 [
  3,
  2,
  "Staff of Striking",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 309"
 ],
 [
  2,
  2,
  "Staff of Swarming Insects",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 309 · Bard, cleric, druid, sorcerer, warlock, or wizard"
 ],
 [
  3,
  2,
  "Staff of Thunder and Lightning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 311"
 ],
 [
  2,
  2,
  "Staff of Withering",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 312"
 ],
 [
  1,
  2,
  "Staff of the Adder",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 309"
 ],
 [
  3,
  2,
  "Staff of the Lost",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 123"
 ],
 [
  4,
  2,
  "Staff of the Magi",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 310 · Sorcerer, warlock, or wizard"
 ],
 [
  1,
  2,
  "Staff of the Python",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 311"
 ],
 [
  2,
  2,
  "Staff of the Woodlands",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Staff · Requires attunement · Page 311 · Druid"
 ],
 [
  2,
  2,
  "Stone of Controlling Earth Elementals",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 312"
 ],
 [
  1,
  2,
  "Stone of Good Luck",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 312"
 ],
 [
  2,
  1,
  "Sun Blade",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 312 · Longsword"
 ],
 [
  0,
  2,
  "Sweeping Broom",
  "au",
  "An enchanted broom that can sweep on its own.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 123"
 ],
 [
  4,
  1,
  "Sword of Answering",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 313 · Longsword"
 ],
 [
  5,
  1,
  "Sword of Kas",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 313 · Longsword"
 ],
 [
  2,
  1,
  "Sword of Life Stealing",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 314 · Glaive, greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  3,
  1,
  "Sword of Sharpness",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 314 · Glaive, greatsword, longsword, or scimitar"
 ],
 [
  1,
  1,
  "Sword of Vengeance",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 314 · Glaive, greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  2,
  1,
  "Sword of Wounding",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 314 · Glaive, greatsword, longsword, rapier, scimitar, or shortsword"
 ],
 [
  0,
  1,
  "Sylvan Talon",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 314 · Dagger, rapier, scimitar, shortsword, sickle, or spear"
 ],
 [
  4,
  2,
  "Talisman of Pure Good",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 314 · Cleric or paladin"
 ],
 [
  4,
  2,
  "Talisman of Ultimate Evil",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 315"
 ],
 [
  4,
  2,
  "Talisman of the Sphere",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 315"
 ],
 [
  0,
  2,
  "Talking Doll",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 315"
 ],
 [
  0,
  2,
  "Tankard of Sobriety",
  "dmg",
  "Alcohol drunk from this tankard doesn’t intoxicate the drinker.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 315"
 ],
 [
  2,
  2,
  "Tentacle Rod",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 316"
 ],
 [
  1,
  2,
  "Thespian's Playbill",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 124"
 ],
 [
  1,
  2,
  "Thief's Thimble",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 124"
 ],
 [
  3,
  1,
  "Thunderous Greatclub",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 316 · Greatclub"
 ],
 [
  3,
  2,
  "Tome of Clear Thought",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 317"
 ],
 [
  3,
  2,
  "Tome of Leadership and Influence",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 317"
 ],
 [
  3,
  2,
  "Tome of Understanding",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 317"
 ],
 [
  4,
  2,
  "Tome of the Stilled Tongue",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 317 · Wizard"
 ],
 [
  3,
  1,
  "Tramontane Armor",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "armorer"
  ],
  "Armor · Requires attunement · Page 124 · Any light or medium armor"
 ],
 [
  4,
  2,
  "Traveler's Pearl",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 124"
 ],
 [
  1,
  1,
  "Trident of Fish Command",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 317 · Trident"
 ],
 [
  5,
  2,
  "Universal Pantograph",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 124"
 ],
 [
  4,
  2,
  "Universal Solvent",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 318"
 ],
 [
  0,
  2,
  "Veteran's Cane",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 318"
 ],
 [
  2,
  1,
  "Vicious Weapon",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 318"
 ],
 [
  4,
  1,
  "Vorpal Sword",
  "dmg",
  "This attunement weapon grants +3 to attack and damage rolls. A natural 20 can sever one of the target’s heads. Some targets are exempt from decapitation and take extra slashing damage instead.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 318 · Glaive, greatsword, longsword, or scimitar"
 ],
 [
  0,
  1,
  "Walloping Ammunition",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher"
  ],
  "Weapon · No attunement · Page 318 · Any ammunition"
 ],
 [
  2,
  2,
  "Wand of Binding",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 318"
 ],
 [
  0,
  2,
  "Wand of Conducting",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 319"
 ],
 [
  2,
  2,
  "Wand of Enemy Detection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 319"
 ],
 [
  2,
  2,
  "Wand of Fear",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 319"
 ],
 [
  2,
  2,
  "Wand of Fireballs",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 319 · Spellcaster"
 ],
 [
  1,
  2,
  "Wand of Freshness",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 125"
 ],
 [
  2,
  2,
  "Wand of Lightning Bolts",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 320 · Spellcaster"
 ],
 [
  1,
  2,
  "Wand of Magic Detection",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 320"
 ],
 [
  1,
  2,
  "Wand of Magic Missiles",
  "dmg",
  "The wand starts with seven charges. Spend one to cast Magic Missile at level 1, or spend more to raise the spell’s level. It recovers charges at dawn and can crumble if you expend its last charge.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 320"
 ],
 [
  5,
  2,
  "Wand of Orcus",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 320"
 ],
 [
  2,
  2,
  "Wand of Paralysis",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 321 · Spellcaster"
 ],
 [
  3,
  2,
  "Wand of Polymorph",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 321 · Spellcaster"
 ],
 [
  0,
  2,
  "Wand of Pyrotechnics",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 321"
 ],
 [
  1,
  2,
  "Wand of Secrets",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 322"
 ],
 [
  2,
  2,
  "Wand of Slumber",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 125"
 ],
 [
  2,
  2,
  "Wand of Teeth",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · No attunement · Page 125"
 ],
 [
  1,
  2,
  "Wand of Web",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 322 · Spellcaster"
 ],
 [
  2,
  2,
  "Wand of Wonder",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 322"
 ],
 [
  1,
  2,
  "Wand of the War Mage, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 322 · Spellcaster"
 ],
 [
  2,
  2,
  "Wand of the War Mage, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 322 · Spellcaster"
 ],
 [
  3,
  2,
  "Wand of the War Mage, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wand · Requires attunement · Page 322 · Spellcaster"
 ],
 [
  5,
  1,
  "Wave",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 323 · Trident"
 ],
 [
  1,
  1,
  "Weapon of Warning",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 324"
 ],
 [
  1,
  1,
  "Weapon, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 324"
 ],
 [
  2,
  1,
  "Weapon, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 324"
 ],
 [
  3,
  1,
  "Weapon, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "fletcher",
   "blacksmith"
  ],
  "Weapon · No attunement · Page 324"
 ],
 [
  4,
  2,
  "Well of Many Worlds",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 324"
 ],
 [
  5,
  1,
  "Whelm",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "blacksmith"
  ],
  "Weapon · Requires attunement · Page 324 · Warhammer, dwarf"
 ],
 [
  1,
  2,
  "Wind Fan",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 325"
 ],
 [
  1,
  2,
  "Winged Boots",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 325"
 ],
 [
  2,
  2,
  "Wings of Flying",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · Requires attunement · Page 325"
 ],
 [
  3,
  2,
  "Workshop Wrecker",
  "au",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 125"
 ],
 [
  1,
  2,
  "Wraps of Unarmed Power, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 325"
 ],
 [
  2,
  2,
  "Wraps of Unarmed Power, +2",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 325"
 ],
 [
  3,
  2,
  "Wraps of Unarmed Power, +3",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Wondrous Item · No attunement · Page 325"
 ],
 [
  1,
  2,
  "rod of the Pact Keeper, +1",
  "dmg",
  "Refer to the sourcebook entry for this item’s magical properties.",
  null,
  [
   "enchanter"
  ],
  "Rod · Requires attunement · Page 301 · Warlock"
 ],
 [
  1,
  1,
  "Longbow +1",
  "dmg",
  "An enchanted longbow that grants +1 to attack and damage rolls.",
  null,
  [
   "fletcher"
  ],
  ""
 ],
 [
  1,
  1,
  "Shortbow +1",
  "dmg",
  "An enchanted shortbow that grants +1 to attack and damage rolls.",
  null,
  [
   "fletcher"
  ],
  ""
 ],
 [
  1,
  1,
  "Hellfire Weapon",
  "bgdia",
  "This infernal weapon sends the soul of a humanoid it kills to the River Styx, where the soul becomes a lemure.",
  null,
  [
   "blacksmith"
  ],
  ""
 ],
 [
  1,
  2,
  "Infernal Puzzle Box",
  "bgdia",
  "A fiendishly intricate lockbox used to conceal infernal contracts and other secrets.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  1,
  0,
  "Soul Coin",
  "bgdia",
  "An iron coin holds a trapped soul and starts with three charges. Spend a charge to gain 1d10 temporary hit points or ask the soul a question. The soul is freed when the last charge is spent.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  2,
  1,
  "Gauntlets of Flaming Fury",
  "bgdia",
  "These gauntlets can ignite weapons you hold, adding fire damage to your strikes.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  3,
  2,
  "Battle Standard of Infernal Power",
  "bgdia",
  "This battle standard requires attunement. While you hold it, weapon attacks by you and your allies within 300 feet count as magical for overcoming resistance and immunity to nonmagical attacks.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  3,
  1,
  "Helm of Devil Command",
  "bgdia",
  "This helm lets its wearer communicate with devils and attempt to magically dominate them.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  4,
  1,
  "Fane-Eater",
  "bgdia",
  "Arkhan’s magical battleaxe deals extra necrotic damage on a natural 20 and heals its wielder.",
  null,
  [
   "blacksmith"
  ],
  ""
 ],
 [
  4,
  2,
  "Infernal Tack",
  "bgdia",
  "A set of riding gear that binds a nightmare and lets the wearer of its spurs summon the mount.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  4,
  1,
  "Matalotok",
  "bgdia",
  "The Frost Father’s warhammer requires attunement and grants immunity to cold while held. A hit releases a burst that deals 3d6 cold damage to creatures within 30 feet of the target, including the target itself.",
  null,
  [
   "blacksmith"
  ],
  ""
 ],
 [
  4,
  1,
  "Obsidian Flint Dragon Plate",
  "bgdia",
  "Black dragon-themed plate armor that improves Armor Class and grants acid resistance.",
  null,
  [
   "armorer"
  ],
  ""
 ],
 [
  4,
  1,
  "Shield of the Hidden Lord",
  "bgdia",
  "A sentient shield that grants fire resistance and houses the imprisoned pit fiend Gargauth.",
  null,
  [
   "armorer"
  ],
  ""
 ],
 [
  5,
  1,
  "Sword of Zariel",
  "bgdia",
  "A radiant blade that can transform a worthy wielder, granting celestial traits and wings.",
  null,
  [
   "blacksmith"
  ],
  ""
 ],
 [
  5,
  1,
  "Blade of Avernus",
  "bgdia",
  "A vorpal longsword that can charm devils and recall its wielder to the ruler of Avernus.",
  null,
  [
   "blacksmith"
  ],
  ""
 ],
 [
  0,
  0,
  "Potion of Healing",
  "phb",
  "A red draught that restores 2d4 + 2 hit points. Under the 2024 rules, you can drink it or administer it to another creature as a Bonus Action. The potion is consumed in the process.",
  50,
  [
   "apothecary"
  ],
  ""
 ],
 [
  0,
  0,
  "Spell Scroll (Light)",
  "phb",
  "A single-use scroll that casts Light, making an object glow.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  0,
  0,
  "Spell Scroll (Detect Magic)",
  "phb",
  "A single-use scroll that lets the caster sense nearby magic.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  0,
  0,
  "Spell Scroll (Magic Missile)",
  "phb",
  "A single-use scroll that launches three darts of force that hit their targets automatically.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  0,
  0,
  "Spell Scroll (Shield)",
  "phb",
  "A single-use scroll that casts Shield, briefly boosting Armor Class and blocking Magic Missile.",
  null,
  [
   "enchanter"
  ],
  ""
 ],
 [
  0,
  0,
  "Spell Scroll (Cantrip)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  0,
  0,
  "Spell Scroll (Level 1)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  1,
  0,
  "Spell Scroll (Level 2)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  1,
  0,
  "Spell Scroll (Level 3)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  2,
  0,
  "Spell Scroll (Level 4)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  2,
  0,
  "Spell Scroll (Level 5)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  3,
  0,
  "Spell Scroll (Level 6)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  3,
  0,
  "Spell Scroll (Level 7)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  3,
  0,
  "Spell Scroll (Level 8)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  4,
  0,
  "Spell Scroll (Level 9)",
  "phb",
  "A single-use scroll containing a spell of this level. Choose a spell appropriate to the campaign and apply the spell scroll rules.",
  null,
  [
   "enchanter"
  ],
  "Scroll · No attunement"
 ],
 [
  1,
  2,
  "Blossom Rod (Budding)",
  "au",
  "An evolving magic item in its budding state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  2,
  2,
  "Blossom Rod (Flowering)",
  "au",
  "An evolving magic item in its flowering state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  3,
  2,
  "Blossom Rod (Somniferous)",
  "au",
  "An evolving magic item in its somniferous state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  1,
  2,
  "Idol of Good Fortunes (Blemished)",
  "au",
  "An evolving magic item in its blemished state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  2,
  2,
  "Idol of Good Fortunes (Tarnished)",
  "au",
  "An evolving magic item in its tarnished state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  3,
  2,
  "Idol of Good Fortunes (Golden)",
  "au",
  "An evolving magic item in its golden state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  1,
  1,
  "Keyholes Dagger (Three)",
  "au",
  "An evolving magic item in its three state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  2,
  1,
  "Keyholes Dagger (Ten)",
  "au",
  "An evolving magic item in its ten state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  3,
  1,
  "Keyholes Dagger (Many)",
  "au",
  "An evolving magic item in its many state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  1,
  2,
  "Staff of Skulls (Ominous)",
  "au",
  "An evolving magic item in its ominous state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  2,
  2,
  "Staff of Skulls (Chattering)",
  "au",
  "An evolving magic item in its chattering state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  3,
  2,
  "Staff of Skulls (Pulverizing)",
  "au",
  "An evolving magic item in its pulverizing state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "enchanter"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  1,
  1,
  "Wave-Swept Weapon (Barnacled)",
  "au",
  "An evolving magic item in its barnacled state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith",
   "fletcher"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  2,
  1,
  "Wave-Swept Weapon (Aquatic)",
  "au",
  "An evolving magic item in its aquatic state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith",
   "fletcher"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ],
 [
  3,
  1,
  "Wave-Swept Weapon (Ascendant)",
  "au",
  "An evolving magic item in its ascendant state. Its powers develop through the evolution rules and milestones in Arcana Unleashed.",
  null,
  [
   "blacksmith",
   "fletcher"
  ],
  "Evolving item · See sourcebook for properties and attunement"
 ]
];
const dmgPageRanges = {"227": [227, 228], "228": [228, 229], "229": [229, 230], "230": [230, 231], "231": [231, 232], "232": [232, 233], "233": [233, 234], "234": [234, 235], "235": [235, 236], "236": [236, 237], "237": [237, 238], "238": [238, 239], "239": [239, 240], "240": [240, 241], "241": [241, 242], "242": [242, 243], "243": [243, 244], "244": [244, 245], "245": [245, 246], "246": [246, 247], "247": [247, 248], "248": [248, 249], "249": [249, 250], "250": [250, 251, 252], "252": [252, 253, 254], "254": [254, 255], "255": [255, 256], "256": [256, 257], "257": [257, 258], "258": [258, 259], "259": [259, 260, 261], "261": [261, 262, 263], "263": [263, 264], "264": [264, 265], "265": [265, 266], "266": [266, 267], "267": [267, 268], "268": [268, 269], "269": [269, 270], "270": [270, 271], "271": [271, 272], "272": [272, 273], "273": [273, 274], "274": [274, 275], "275": [275, 276], "276": [276, 277], "277": [277, 278], "278": [278, 279], "279": [279, 280], "280": [280, 281], "281": [281, 282], "282": [282, 283], "283": [283, 284], "284": [284, 285], "285": [285, 286], "286": [286, 287], "287": [287, 288], "288": [288, 289], "289": [289, 290], "290": [290, 291], "291": [291, 292], "292": [292, 293], "293": [293, 294], "294": [294, 295], "295": [295, 296], "296": [296, 297], "297": [297, 298], "298": [298, 299], "299": [299, 300], "300": [300, 301], "301": [301, 302], "302": [302, 303], "303": [303, 304], "304": [304, 305], "305": [305, 306], "306": [306, 307], "307": [307, 308], "308": [308, 309], "309": [309, 310], "310": [310, 311], "311": [311, 312], "312": [312, 313], "313": [313, 314], "314": [314, 315], "315": [315, 316], "316": [316, 317], "317": [317, 318], "318": [318, 319], "319": [319, 320], "320": [320, 321], "321": [321, 322], "322": [322, 323], "323": [323, 324], "324": [324, 325], "325": [325]};
const uploadedPageRefs = {"au|Arcane Chatelaine": [["au", 126], ["au", 127]], "au|Arcanist's Bestiary": [["au", 126], ["au", 127]], "au|Bellows of Strangulation": [["au", 126], ["au", 127]], "au|Blood Amulet": [["au", 126], ["au", 127]], "au|Boon Companions' Bands": [["au", 127], ["au", 128]], "au|Conjurer's Canopy": [["au", 127], ["au", 128]], "au|Diamond Staff": [["au", 128], ["au", 129]], "au|Dictation Quill": [["au", 128], ["au", 129]], "au|Dispelling Ammunition": [["au", 128], ["au", 129]], "au|Dissuader": [["au", 128], ["au", 129]], "au|Dream Weaver": [["au", 128], ["au", 129]], "au|Elocutionist's Lexicon": [["au", 129], ["au", 130]], "au|Ensorcelled Missive": [["au", 129], ["au", 130]], "au|Evergreen Fertilizer": [["au", 129], ["au", 130]], "au|Goading Ammunition": [["au", 129], ["au", 130]], "au|Grave Reaper": [["au", 129], ["au", 130]], "au|Homeward Compass": [["au", 130], ["au", 131]], "au|Lucky Foot": [["au", 130], ["au", 131]], "au|Mage Breaker": [["au", 130], ["au", 131]], "au|Mage's Manacle": [["au", 130], ["au", 131]], "au|Magewright's Gloves": [["au", 130], ["au", 131]], "au|Martialist's Quarterstaff": [["au", 130], ["au", 131]], "au|Namer's Needle": [["au", 130], ["au", 131]], "au|Necklace of the Beastly Familiar (azurite)": [["au", 130], ["au", 131]], "au|Necklace of the Beastly Familiar (chrysoprase)": [["au", 130], ["au", 131]], "au|Necklace of the Beastly Familiar (fire opal)": [["au", 130], ["au", 131]], "au|Necklace of the Beastly Familiar (topaz)": [["au", 130], ["au", 131]], "au|Necklace of the Beastly Familiar (zircon)": [["au", 130], ["au", 131]], "au|Orb of Divination Detection": [["au", 131], ["au", 132]], "au|Orb of Sorcery": [["au", 131], ["au", 132]], "au|Potion of Dragon's Breath (black)": [["au", 131], ["au", 132]], "au|Potion of Dragon's Breath (blue)": [["au", 131], ["au", 132]], "au|Potion of Dragon's Breath (green)": [["au", 131], ["au", 132]], "au|Potion of Dragon's Breath (red)": [["au", 131], ["au", 132]], "au|Potion of Dragon's Breath (white)": [["au", 131], ["au", 132]], "au|Potion of Tirelessness": [["au", 132], ["au", 133]], "au|Prismatic Rune": [["au", 132], ["au", 133]], "au|Queen Ehlissa's Marvelous Nightingale": [["au", 132], ["au", 133]], "au|Ring of Dedicated Focus": [["au", 133], ["au", 134]], "au|Scholar's Anchoring Bangle": [["au", 133], ["au", 134]], "au|Secret Keeper's Circlet": [["au", 133], ["au", 134]], "au|Spell Component Ring": [["au", 133], ["au", 134]], "au|Spell Duelist's Trophy": [["au", 133], ["au", 134]], "au|Spell-Slinger's Puppet": [["au", 133], ["au", 134]], "au|Staff of the Lost": [["au", 134], ["au", 135]], "au|Sweeping Broom": [["au", 134], ["au", 135]], "au|Thespian's Playbill": [["au", 134], ["au", 135]], "au|Thief's Thimble": [["au", 134], ["au", 135]], "au|Tramontane Armor": [["au", 134], ["au", 135]], "au|Traveler's Pearl": [["au", 134], ["au", 135]], "au|Universal Pantograph": [["au", 134], ["au", 135]], "au|Wand of Freshness": [["au", 135], ["au", 136]], "au|Wand of Slumber": [["au", 136]], "au|Wand of Teeth": [["au", 136]], "au|Workshop Wrecker": [["au", 136]], "bgdia|Hellfire Weapon": [["bgdia", 224]], "bgdia|Infernal Puzzle Box": [["bgdia", 225]], "bgdia|Soul Coin": [["bgdia", 226], ["bgdia", 227]], "bgdia|Gauntlets of Flaming Fury": [["bgdia", 224]], "bgdia|Battle Standard of Infernal Power": [["bgdia", 224]], "bgdia|Helm of Devil Command": [["bgdia", 224], ["bgdia", 225]], "bgdia|Fane-Eater": [["bgdia", 224]], "bgdia|Infernal Tack": [["bgdia", 225]], "bgdia|Matalotok": [["bgdia", 225]], "bgdia|Obsidian Flint Dragon Plate": [["bgdia", 225], ["bgdia", 226]], "bgdia|Shield of the Hidden Lord": [["bgdia", 226]], "bgdia|Sword of Zariel": [["bgdia", 227], ["bgdia", 228]], "bgdia|Blade of Avernus": [["bgdia", 151]], "phb|Potion of Healing": [["phb", 227]], "phb|Spell Scroll (Light)": [["phb", 227], ["phb", 232], ["phb", 291], ["phb", 292]], "phb|Spell Scroll (Detect Magic)": [["phb", 227], ["phb", 232], ["phb", 261], ["phb", 262]], "phb|Spell Scroll (Magic Missile)": [["phb", 227], ["phb", 232], ["phb", 294]], "phb|Spell Scroll (Shield)": [["phb", 227], ["phb", 232], ["phb", 315]], "phb|Spell Scroll (Cantrip)": [["phb", 227], ["phb", 232]], "phb|Spell Scroll (Level 1)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 2)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 3)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 4)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 5)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 6)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 7)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 8)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "phb|Spell Scroll (Level 9)": [["phb", 227], ["phb", 232], ["dmg", 305], ["dmg", 306]], "au|Blossom Rod (Budding)": [["au", 137], ["au", 138]], "au|Blossom Rod (Flowering)": [["au", 137], ["au", 138]], "au|Blossom Rod (Somniferous)": [["au", 137], ["au", 138]], "au|Idol of Good Fortunes (Blemished)": [["au", 138]], "au|Idol of Good Fortunes (Tarnished)": [["au", 138]], "au|Idol of Good Fortunes (Golden)": [["au", 138]], "au|Keyholes Dagger (Three)": [["au", 138], ["au", 139]], "au|Keyholes Dagger (Ten)": [["au", 138], ["au", 139]], "au|Keyholes Dagger (Many)": [["au", 138], ["au", 139]], "au|Staff of Skulls (Ominous)": [["au", 139]], "au|Staff of Skulls (Chattering)": [["au", 139]], "au|Staff of Skulls (Pulverizing)": [["au", 139]], "au|Wave-Swept Weapon (Barnacled)": [["au", 139]], "au|Wave-Swept Weapon (Aquatic)": [["au", 139]], "au|Wave-Swept Weapon (Ascendant)": [["au", 139]]};
const names = {
 all: ['The Copper Wyvern', 'The Wandering Shelf', 'The Velvet Vault'],
 fletcher: ['The Silver Fletching', 'The Trueflight Bowyer', 'The Feather & String'],
 armorer: ['The Gilded Bulwark', 'The Iron Ward', 'The Dragonplate Forge'],
 blacksmith: ['The Ember Anvil', 'The Tempered Blade', 'The Singing Hammer'],
 apothecary: ['The Candle & Cauldron', 'The Lavender Vial', 'The Briar Bottle'],
 enchanter: ['The Silver Sigil', 'Needle & Rune', 'The Starlit Wand']
};
const keepers = ['Mara Flint · a dwarf who keeps a ledger of favors', 'Ivo Quill · a tiefling with a sharp eye for counterfeits', 'Nessa Vell · a halfling who tests every item herself', 'Orin Vale · an elf who trades rumors over tea', 'Tamsin Reed · a human whose raven handles the change'];
const hooks = ['A brass bell rings before anyone touches the door.', 'The owner offers a discount for news of a missing courier.', 'A cloaked customer is waiting to buy whatever you ask about first.', 'Everything on the back shelf casts its shadow toward the same locked drawer.'];
const rarityValues = [100, 400, 4000, 40000, 200000];
const scrollScribingCosts = [15, 25, 100, 150, 1000, 1500, 10000, 12500, 15000, 50000];
const consumableNames = new Set([
 'Arcane Chatelaine', 'Bag of Beans', 'Bead of Force', 'Bead of Nourishment',
 'Bead of Refreshment', 'Candle of Invocation', 'Dust of Disappearance',
 'Dust of Dryness', 'Dust of Sneezing and Choking', 'Efreeti Bottle',
 'Evergreen Fertilizer', "Keoghtom's Ointment", 'Lucky Foot', 'Mystery Key',
 'Necklace of Fireballs', "Nolzur's Marvelous Pigments", 'Perfume of Bewitching',
 'Pot of Awakening', 'Soul Coin', 'Sovereign Glue', 'Universal Solvent'
]);
const equipmentCosts = {
 'club': 0.1, 'dagger': 2, 'greatclub': 0.2, 'handaxe': 5, 'javelin': 0.5,
 'light hammer': 2, 'mace': 5, 'quarterstaff': 0.2, 'sickle': 1, 'spear': 1,
 'battleaxe': 10, 'flail': 10, 'glaive': 20, 'greataxe': 30, 'greatsword': 50,
 'halberd': 20, 'lance': 10, 'longsword': 15, 'maul': 10, 'morningstar': 15,
 'pike': 5, 'rapier': 25, 'scimitar': 25, 'shortsword': 10, 'trident': 5,
 'warhammer': 15, 'war pick': 5, 'whip': 2, 'longbow': 50, 'shortbow': 25,
 'shield': 10, 'plate armor': 1500, 'studded leather armor': 45, 'scale mail': 50,
 'padded armor': 5, 'leather armor': 10, 'hide armor': 10, 'chain shirt': 50,
 'breastplate': 400, 'half plate': 750, 'ring mail': 30, 'chain mail': 75,
 'splint armor': 200, 'arrow': 0.05
};
const lightArmor = ['padded armor', 'leather armor', 'studded leather armor'];
const mediumArmor = ['hide armor', 'chain shirt', 'scale mail', 'breastplate', 'half plate'];
const heavyArmor = ['ring mail', 'chain mail', 'splint armor', 'plate armor'];
const meleeWeapons = ['club', 'dagger', 'greatclub', 'handaxe', 'javelin', 'light hammer',
 'mace', 'quarterstaff', 'sickle', 'spear', 'battleaxe', 'flail', 'glaive', 'greataxe',
 'greatsword', 'halberd', 'lance', 'longsword', 'maul', 'morningstar', 'pike', 'rapier',
 'scimitar', 'shortsword', 'trident', 'warhammer', 'war pick', 'whip'];

const fixedEquipment = {
 'Longbow +1': 'longbow', 'Shortbow +1': 'shortbow',
 'Fane-Eater': 'battleaxe', 'Matalotok': 'warhammer',
 'Obsidian Flint Dragon Plate': 'plate armor', 'Shield of the Hidden Lord': 'shield',
 'Sword of Zariel': 'longsword', 'Blade of Avernus': 'longsword',
 'Armor of Vulnerability': 'plate armor', 'Demon Armor': 'plate armor'
};
const get = id => document.getElementById(id);
const pick = array => array[Math.floor(Math.random() * array.length)];
const number = new Intl.NumberFormat('en');
let lastName, copyText;
let inventory = [];
let activeRarity = -1;
let shopHeading = [];
const entryCache = new Map();
const normalizeSearch = text => text.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9+]+/g, ' ').trim();

const filters = ['All', ...rarities];
const rarityFilters = get('rarity-filters');
rarityFilters.innerHTML = filters.map((label, index) =>
 '<button type="button" aria-pressed="' + (index === 0) + '" data-rarity="' + (index - 1) + '">' + label + '</button>'
).join('');

function showRarity(rarity) {
 activeRarity = rarity;
 const query = normalizeSearch(get('item-search').value);
 const terms = query.split(/\s+/).filter(Boolean);
 const searching = terms.length > 0;
 const matches = searching ? eligibleItems().filter(item =>
   terms.every(term => normalizeSearch(item[2]).includes(term))).map(createEntry) : inventory;
 const visible = matches.filter(item => rarity === -1 || item.rarity === rarity);
 for (const button of rarityFilters.querySelectorAll('button')) {
   button.setAttribute('aria-pressed', Number(button.dataset.rarity) === rarity);
 }
 get('items').innerHTML = visible.length ? visible.map(item => item.card).join('') :
   '<p class="empty">' + (searching ? 'No matching items within these filters. Try a different name, specialty, sourcebook, or rarity.' :
   inventory.length ? 'No items of this rarity in the current shop.' :
   'No matching items in this catalog. Try a higher maximum rarity, another sourcebook, or another specialty.') + '</p>';
 get('inventory-title').textContent = searching ? 'Catalog search results' : 'Shop inventory';
 get('stock').textContent = searching ? visible.length + ' matching items' :
   rarity === -1 ? inventory.length + ' items in stock' : visible.length + ' of ' + inventory.length + ' items shown';
 get('copy').textContent = searching ? '▤ Copy results' : '▤ Copy shop';
 const copiedItems = searching ? visible : inventory;
 copyText = [...(searching ? ['Catalog search results'] : shopHeading), '',
   ...copiedItems.map(item => item.text)].join('\n');
}
get('item-search').addEventListener('input', () => showRarity(activeRarity));
get('clear-search').addEventListener('click', () => {
 get('item-search').value = '';
 showRarity(-1);
 get('item-search').focus();
});

rarityFilters.addEventListener('click', event => {
 const button = event.target.closest('button');
 if (button) showRarity(Number(button.dataset.rarity));
});

function eligibleItems() {
 const max = get('rarity').selectedIndex;
 const source = get('source').value;
 const specialty = get('type').value;
 return catalog.filter(item => item[0] <= max && (!source || item[3] === source) &&
   (specialty === 'all' || item[6].includes(specialty)));
}
function updateInventorySize() {
 const count = get('count');
 const desired = Number(count.value);
 const maximum = Math.min(8, eligibleItems().length);
 count.min = Math.min(3, maximum);
 count.max = maximum;
 count.value = Math.max(Number(count.min), Math.min(desired, maximum));
 count.disabled = maximum === 0;
 get('minimum').textContent = count.min + ' items';
 get('amount').value = count.value;
 get('maximum').textContent = count.max + ' items';
}
function chooseBaseEquipment(name, metadata, specialties) {
 if (fixedEquipment[name]) return fixedEquipment[name];
 if (name.startsWith('Keyholes Dagger')) return 'dagger';
 if (name.includes('Ammunition')) return 'arrow';
 const limits = (metadata.split(' · ')[3] || '').toLowerCase().replace('half plate armor', 'half plate');
 const armor = metadata.startsWith('Armor') || specialties.includes('armorer');
 const weapon = metadata.startsWith('Weapon') ||
   specialties.includes('blacksmith') || specialties.includes('fletcher');
 if (!armor && !weapon) return undefined;
 const available = armor ? [...lightArmor, ...mediumArmor, ...heavyArmor, 'shield'] :
   [...meleeWeapons, 'longbow', 'shortbow'];
 // Match exact equipment names within the published list of permitted types.
 const listed = available.filter(base => limits.includes(base));
 if (listed.length && !limits.includes('except')) {
   const specific = listed.filter(base => !listed.some(other => other !== base && other.includes(base)));
   return pick(specific);
 }
 if (armor) {
   if (limits.includes('medium or heavy')) return pick([...mediumArmor.filter(base => base !== 'hide armor'), ...heavyArmor]);
   if (limits.includes('light or medium')) return pick([...lightArmor, ...mediumArmor]);
   return pick([...lightArmor, ...mediumArmor, ...heavyArmor]);
 }
 if (limits.includes('melee')) return pick(meleeWeapons);
 if (get('type').value === 'fletcher') return pick(['longbow', 'shortbow']);
 return 'longsword';
}

function suggestedPrice(rarity, name, metadata, specialties, base) {
 if (rarity === 5) return {label: 'Priceless', basis: 'Artifact'};
 if (name.startsWith('Spell Scroll')) {
   const levelMatch = name.match(/level (\d)/i);
   const level = levelMatch ? Number(levelMatch[1]) : /cantrip|\(Light\)/i.test(name) ? 0 : 1;
   const value = scrollScribingCosts[level] * 2;
   return {label: number.format(value) + ' gp', basis: 'Twice the PHB scribing cost · Spell level ' + level};
 }
 const consumable = metadata.startsWith('Potion') || metadata.startsWith('Scroll') ||
   name.startsWith('Potion of ') || consumableNames.has(name) ||
   /^(Elemental Gem|Quaal's Feather Token|Manual of Golems)/.test(name) ||
   name.includes('Ammunition');
 const magicValue = rarityValues[rarity] * (consumable ? 0.5 : 1);
 const equipmentCost = base ? equipmentCosts[base] : 0;
 const basis = number.format(rarityValues[rarity]) + ' gp rarity value' +
   (consumable ? ' × ½ for a consumable' : '') +
   (base ? ' + ' + number.format(equipmentCost) + ' gp for ' + base : '');
 return {
   label: number.format(magicValue + equipmentCost) + ' gp',
   basis
 };
}

function fullDescription(source, name, metadata) {
 let refs = uploadedPageRefs[source + '|' + name];
 if (source === 'dmg') {
   const match = metadata.match(/Page (\d+)/);
   const page = match ? Number(match[1]) : 324;
   refs = (dmgPageRanges[page] || []).map(number => ['dmg', number]);
 }
 if (!refs || !refs.length) return '';
 const first = refs[0];
 const pageLabel = first[0] === 'dmg' ? 'book p. ' : 'PDF p. ';
 return '<details class="full-description"><summary>Full description · ' +
   pageLabel + first[1] + '</summary><p class="source-note">Original pages from your uploaded books. Find <strong>' +
   name + '</strong> on the first page. Continuing rules, tables, or related spell rules follow. Neighboring entries may also appear.</p>' +
   refs.map(([book, number]) => {
     const path = book + '-pages/' + number + '.jpg';
     const label = sources[book][0] + (book === 'dmg' ? ' · Book page ' : ' · PDF page ') + number;
     return '<figure><figcaption>' + label + ' · <a href="' + path +
       '" target="_blank" rel="noopener">Open full size</a></figcaption>' +
       '<img loading="lazy" src="' + path + '" alt="' + label +
       '" width="1060" height="1395"></figure>';
   }).join('') + '</details>';
}

function generate() {
 const specialty = get('type').value;
 updateInventorySize();
 const size = Number(get('count').value);
 const pool = eligibleItems();
 const shop = pick(names[specialty].filter(name => name !== lastName));
 lastName = shop;
 const keeper = pick(keepers);
 const hook = pick(hooks);
 const items = [];
 while (items.length < size) {
   const item = pick(pool);
   items.push(item);
   pool.splice(pool.indexOf(item), 1);
 }
 get('shop').textContent = shop;
 get('keeper').textContent = keeper;
 get('hook').textContent = hook;
 shopHeading = [shop, keeper, hook, '', 'Inventory'];
 entryCache.clear();
 inventory = items.map(createEntry);
 showRarity(-1);
}

function createEntry(item) {
 if (entryCache.has(item)) return entryCache.get(item);
 const [rarity, type, name, source, description, fixedPrice, specialties, metadata] = item;
   const base = chooseBaseEquipment(name, metadata, specialties);
   const pricing = suggestedPrice(rarity, name, metadata, specialties, base);
   const price = pricing.label;
   const [book, url] = sources[source];
   const text = name + ' — ' + rarities[rarity] + ' ' + types[type].toLowerCase() + ' · ' + price + ' · ' + book + '\n' + pricing.basis + '\n' + description + (metadata ? '\n' + metadata : '');
   const full = fullDescription(source, name, metadata);
   const card = '<article class="item"><div class="item-top"><span aria-hidden="true">' + icons[type] + '</span><b>' + price + '</b></div><p class="price-basis">' + pricing.basis + '</p><h3>' + name + '</h3><p class="item-meta">' + metadata + '</p><p>' + description + '</p><p><a href="' + url + '" target="_blank" rel="noopener">' + book + '</a></p><div class="item-bottom"><span class="tag r' + rarity + '">' + rarities[rarity] + '</span><span>' + types[type] + '</span></div>' + full + '</article>';
 const entry = {rarity, card, text};
 entryCache.set(item, entry);
 return entry;
}

get('config').addEventListener('submit', event => {
 event.preventDefault();
 generate();
 get('status').textContent = 'Rolled ' + lastName + '.';
});
get('type').addEventListener('change', generate);
get('source').addEventListener('change', generate);
get('rarity').addEventListener('change', generate);
get('count').addEventListener('input', event => {
 get('amount').value = event.target.value;
});
get('copy').addEventListener('click', async () => {
 try {
   await navigator.clipboard.writeText(copyText);
   get('status').textContent = 'Shop copied to clipboard.';
 } catch {
   const field = document.createElement('textarea');
   field.value = copyText;
   field.setAttribute('aria-label', 'Shop text');
   field.readOnly = true;
   get('status').replaceChildren('Select and copy the shop text. ', field);
   field.focus();
   field.select();
 }
});
generate();
