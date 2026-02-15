// ============================================================
// ENTITY TRANSITIONS — maps entity renames, splits, and merges
// between consecutive keyframes
// Format: { "fromName": "toName" } or { "fromName": ["split1", "split2"] }
// ============================================================

const ENTITY_TRANSITIONS = {
  "-500_-480": {},
  "-480_-323": {
    "Achaemenid Empire": "Macedonian Empire",
  },
  "-323_-200": {
    "Macedonian Empire": "Antigonid Macedonia",
    "Scythia": "Greco-Bactrian Kingdom",
  },
  "-200_-150": {
    "Antigonid Macedonia": "Kingdom of Armenia",
  },
  "-150_-44": {
    "Seleucid Empire": "Parthian Empire",
    "Sabaeans": "Himyarite Kingdom",
  },
  "-44_-27": {
    "Roman Republic": "Roman Empire",
    "Ptolemaic Kingdom": "Roman Empire",
  },
  "-27_50": {
    "Yuezhi": "Kushan Empire",
  },
  "50_117": {
    "Kingdom of Armenia": "Roman Empire",
    "Kingdom of Pontus": "Roman Empire",
    "Nabataeans": "Roman Empire",
  },
  "117_200": {},
  "200_250": {
    "Parthian Empire": "Sasanian Empire",
    "Kushan Empire": "Western Kushans",
    "Goths": "Gothia",
  },
  "250_300": {
    "Indo-Scythians": "Indo-Sasanian Empire",
    "Western Kushans": "Indo-Sasanian Empire",
  },
  "300_350": {
    "Kingdom of Kush": "Nobatia",
  },
  "350_395": {
    "Roman Empire": ["Western Roman Empire", "Eastern Roman Empire"],
    "Gothia": "Kidarites",
    "Indo-Sasanian Empire": "Xionites",
  },
  "395_476": {
    "Western Roman Empire": "Visigothic Kingdom",
    "Huns": "Ostrogoths",
    "Vandals": "Vandal Kingdom",
    "Xionites": "White Huns",
  },
  "476_530": {
    "Ostrogoths": "Ostrogothic Kingdom",
    "Ripuarian Franks": "Kingdom of the Franks",
    "Salian Franks": "Kingdom of the Franks",
    "Kingdom of Alamannia": "Kingdom of the Franks",
    "Kingdom of Soissons": "Kingdom of the Franks",
  },
  "530_570": {
    "Ostrogothic Kingdom": "Eastern Roman Empire",
    "Vandal Kingdom": "Eastern Roman Empire",
    "Anglo-Saxon England": "Kingdom of Mercia",
    "White Huns": "Göktürk Khaganate",
    "Kingdom of the Gepids": "Avar Khaganate",
    "Caucasian Iberia": "Georgia",
    "Himyarite Kingdom": "Eastern Roman Empire",
  },
  "570_632": {
    "Georgia": "Khazaria",
    "Göktürk Khaganate": "Western Göktürks",
    "Kingdom of Wessex": "Kingdom of Northumbria",
    "Kingdom of Deira": "Kingdom of Northumbria",
    "Kingdom of Bernicia": "Kingdom of Northumbria",
    "Kingdom of the Suebi": "Visigothic Kingdom",
  },
  "632_680": {
    "Eastern Roman Empire": "Byzantine Empire",
    "Sasanian Empire": "Umayyad Caliphate",
    "Lakhmid Kingdom": "Umayyad Caliphate",
    "Ghassanids": "Umayyad Caliphate",
    "Nobatia": "Umayyad Caliphate",
    "Western Göktürks": "Turks",
  },
  "680_750": {
    "Visigothic Kingdom": "Umayyad Caliphate",
    "Old Great Bulgaria": "First Bulgarian Empire",
    "Frisia Kingdom": "Kingdom of the Franks",
    "Carantania": "Kingdom of the Franks",
  },
  "750_850": {
    "Umayyad Caliphate": "Emirate of Córdoba",
    "Kingdom of the Franks": ["East Franks", "West Franks", "Middle Franks"],
    "Kingdom of Italy": "East Franks",
    "Avar Khaganate": "Magyars",
    "Kingdom of Axum": "Ghana Empire",
  },
  "850_900": {
    "Kingdom of Mercia": "Viking City-States",
    "Kingdom of Northumbria": "Viking City-States",
    "Middle Franks": "Kingdom of Lower Burgundy",
    "Kingdom of Wessex": "Kievan Rus\\'",
    "Turk Shahis": "Samanid Empire",
    "Volga Bulgaria": "Principality of Hungary",
  },
  "900_1000": {
    "Abbasid Caliphate": "Fatimid Caliphate",
    "East Franks": "Holy Roman Empire",
    "West Franks": "Kingdom of England",
    "Emirate of Córdoba": "Caliphate of Córdoba",
    "Principality of Hungary": "Kingdom of Hungary",
    "Kingdom of Asturias": "Kingdom of León",
    "Khazaria": "Kievan Rus\\'",
    "Viking City-States": "Duchy of Bohemia",
    "Samanid Empire": "Ghaznavid Empire",
  },
  "1000_1071": {
    "Seljuk Dynasty": "Great Seljuk Empire",
    "Kievan Rus\\'": "Principality of Kiev",
    "Kingdom of León": "Kingdom of Galicia",
    "Caliphate of Córdoba": "Almoravid Dynasty",
    "Oghuz Turks": "Great Seljuk Empire",
    "First Bulgarian Empire": "Byzantine Empire",
  },
  "1071_1100": {
    "Kingdom of England": "Norman England",
    "Kingdom of Galicia": "Kingdom of Castile",
  },
  "1100_1200": {
    "Norman England": "Angevin Empire",
    "Fatimid Caliphate": "Ayyubid Sultanate",
    "Almoravid Dynasty": "Almohad Caliphate",
    "Principality of Kiev": "Principality of Halych",
    "Kingdom of Poland": "Duchy of Sandomierz",
  },
  "1200_1300": {
    "Ayyubid Sultanate": "Mamluk Sultanate",
    "Angevin Empire": "Kingdom of England",
    "Khwarezmid Dynasty": "Golden Horde",
    "Kimek-Kipchak confederation": "Golden Horde",
    "Great Seljuk Empire": "Ilkhanate",
    "Kara-Khitans": "Chagatai Khanate",
    "Holy Roman Empire": "Holy Roman Empire Minor States",
    "Sultanate of Rum": "Byzantine Empire",
    "Ghurid Dynasty": "Ilkhanate",
    "Kingdom of Castile": "Crown of Castile",
    "Ghana Empire": "Mali Empire",
    "Kingdom of Denmark": "Kingdom of France",
  },
  "1300_1350": {
    "Ilkhanate": "Jalayirid Sultanate",
    "Almohad Caliphate": "Marinid Sultanate",
    "Galicia-Volhynia": "Grand Duchy of Lithuania",
    "Principality of Smolensk": "Grand Duchy of Lithuania",
  },
  "1350_1453": {
    "Byzantine Empire": "Ottoman Empire",
    "Chagatai Khanate": "Timurid Empire",
    "Jalayirid Sultanate": "Timurid Empire",
    "Kingdom of Hungary": "House of Jagiellon",
    "Kingdom of Bohemia": "House of Habsburg",
    "Grand Duchy of Lithuania": "House of Jagiellon",
    "Makuria": "Makuria Kingdom",
  },
};
