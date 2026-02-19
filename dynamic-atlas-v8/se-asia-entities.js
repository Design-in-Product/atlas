// ============================================================
// SOUTHEAST ASIA ENTITIES — source data for merge into keyframes
// Covers mainland and maritime SE Asia from ~200 BCE to 1453 CE
// ============================================================

function closeRing(pts) {
  const ring = pts.map(p => [...p]);
  if (ring[0][0] !== ring[ring.length-1][0] || ring[0][1] !== ring[ring.length-1][1]) {
    ring.push([...ring[0]]);
  }
  return ring;
}

// ===========================================================
// COASTLINE-AWARE POLYGON TEMPLATES
// ===========================================================

// --- Mainland ---

// Funan (Mekong Delta, southern Cambodia/Vietnam)
const FUNAN = closeRing([
  [104.0, 13.5], [105.0, 13.0], [106.0, 11.5], [106.8, 10.5],
  [106.5, 9.5], [105.5, 9.0], [104.5, 9.5], [103.5, 10.0],
  [103.0, 11.0], [103.5, 12.5]
]);

// Chenla (inland Cambodia, successor to Funan)
const CHENLA = closeRing([
  [103.0, 15.0], [104.5, 15.5], [106.0, 15.0], [107.0, 14.0],
  [107.5, 12.5], [107.0, 11.0], [106.0, 10.5], [105.0, 10.0],
  [104.0, 10.5], [103.0, 11.5], [102.5, 13.0]
]);

// Khmer Empire (Angkor) — large, covers Cambodia + parts of Thailand/Vietnam/Laos
const KHMER_SMALL = closeRing([
  [102.0, 15.0], [104.0, 15.5], [106.0, 15.0], [107.5, 13.5],
  [107.0, 11.5], [106.0, 10.5], [105.0, 10.0], [103.5, 10.5],
  [102.5, 11.5], [101.5, 13.0]
]);

const KHMER_PEAK = closeRing([
  [100.5, 16.0], [102.0, 17.0], [104.0, 17.5], [106.0, 17.0],
  [108.0, 16.0], [108.5, 14.0], [108.0, 12.0], [107.0, 10.5],
  [105.5, 9.5], [104.0, 9.5], [103.0, 10.0], [101.5, 11.0],
  [100.5, 13.0]
]);

const KHMER_LATE = closeRing([
  [102.0, 15.0], [104.0, 15.5], [106.0, 14.5], [107.0, 13.0],
  [106.5, 11.5], [105.5, 10.5], [104.0, 10.0], [103.0, 11.0],
  [102.0, 12.5]
]);

// Champa (central Vietnam coast)
const CHAMPA = closeRing([
  [107.5, 17.0], [108.5, 16.5], [109.0, 15.5], [109.2, 14.0],
  [109.0, 13.0], [108.5, 12.0], [108.0, 11.5], [107.5, 11.0],
  [107.0, 11.5], [107.0, 12.5], [106.5, 14.0], [107.0, 15.5],
  [107.0, 16.5]
]);

const CHAMPA_SMALL = closeRing([
  [108.0, 16.0], [108.8, 15.0], [109.0, 14.0], [109.0, 13.0],
  [108.5, 12.5], [108.0, 12.0], [107.5, 12.5], [107.0, 13.5],
  [107.5, 15.0]
]);

// Dai Viet (northern Vietnam)
const DAI_VIET = closeRing([
  [104.5, 22.5], [106.0, 22.0], [107.0, 21.5], [107.5, 20.5],
  [106.5, 19.0], [106.0, 18.0], [105.5, 17.5], [105.0, 18.0],
  [104.0, 19.0], [103.5, 20.5], [103.5, 21.5]
]);

const DAI_VIET_EXPANDED = closeRing([
  [104.0, 23.0], [106.5, 22.5], [107.5, 21.5], [108.0, 20.0],
  [107.5, 18.5], [107.0, 17.0], [106.0, 16.5], [105.0, 17.0],
  [104.0, 18.5], [103.0, 20.0], [103.0, 22.0]
]);

// Pagan/Bagan Kingdom (Myanmar/Burma)
const PAGAN = closeRing([
  [94.5, 22.0], [96.0, 23.0], [98.0, 23.5], [99.0, 22.5],
  [98.5, 20.5], [98.0, 19.0], [97.5, 17.5], [97.0, 16.0],
  [96.0, 15.5], [95.0, 16.0], [94.5, 17.5], [93.5, 19.0],
  [93.5, 20.5]
]);

const PAGAN_SMALL = closeRing([
  [95.0, 22.0], [96.5, 22.5], [97.5, 22.0], [98.0, 20.5],
  [97.5, 19.0], [96.5, 18.0], [95.5, 18.0], [94.5, 19.0],
  [94.5, 20.5]
]);

// Dvaravati (Mon kingdom, central Thailand)
const DVARAVATI = closeRing([
  [99.0, 16.0], [100.5, 16.5], [101.5, 15.5], [101.5, 14.0],
  [101.0, 13.0], [100.0, 12.5], [99.0, 13.0], [98.5, 14.0],
  [98.5, 15.0]
]);

// Sukhothai (north-central Thailand)
const SUKHOTHAI = closeRing([
  [99.0, 18.5], [100.5, 19.0], [101.5, 18.5], [102.0, 17.0],
  [101.0, 15.5], [100.0, 15.0], [99.0, 15.5], [98.0, 16.5],
  [98.0, 17.5]
]);

// Ayutthaya (central Thailand, larger than Sukhothai)
const AYUTTHAYA = closeRing([
  [98.5, 19.0], [100.0, 19.5], [101.5, 19.0], [102.5, 17.5],
  [102.0, 15.5], [101.0, 14.0], [100.0, 13.5], [99.5, 13.0],
  [99.0, 13.5], [98.0, 14.5], [97.5, 16.0], [97.5, 17.5]
]);

// Lan Xang (Laos)
const LAN_XANG = closeRing([
  [101.0, 20.5], [102.5, 21.0], [104.0, 20.5], [105.0, 19.5],
  [105.5, 18.0], [105.0, 16.5], [104.0, 15.5], [103.0, 15.0],
  [102.0, 16.0], [101.0, 17.5], [100.5, 19.0]
]);

// Nanzhao / Dali (Yunnan, SW China — already exists but needs more keyframes)
const NANZHAO = closeRing([
  [98.5, 27.0], [100.5, 27.5], [103.0, 27.0], [104.5, 26.0],
  [104.0, 24.5], [102.5, 23.5], [100.5, 23.0], [99.0, 23.5],
  [97.5, 25.0]
]);

const DALI = closeRing([
  [99.0, 27.0], [100.5, 27.5], [102.5, 27.0], [103.5, 26.0],
  [103.0, 25.0], [101.5, 24.0], [100.0, 24.0], [99.0, 25.0],
  [98.5, 26.0]
]);

// --- Maritime ---

// Srivijaya (Sumatra-centered maritime empire)
const SRIVIJAYA = closeRing([
  [100.0, 3.0], [101.5, 2.5], [103.5, 1.5], [104.5, 1.0],
  [105.5, -1.0], [106.0, -2.5], [105.5, -4.0], [104.0, -5.0],
  [102.5, -4.5], [101.0, -3.5], [100.0, -2.0], [99.0, -0.5],
  [99.0, 1.0], [99.5, 2.0]
]);

const SRIVIJAYA_PEAK = closeRing([
  [100.0, 5.0], [103.0, 4.0], [104.5, 2.0], [106.0, 1.0],
  [107.0, -1.0], [107.5, -3.0], [107.0, -5.5], [105.5, -7.0],
  [104.0, -7.5], [102.0, -6.0], [100.5, -4.5], [99.5, -2.5],
  [98.5, -0.5], [98.0, 1.5], [98.5, 3.5]
]);

// Sailendra Dynasty (central Java)
const SAILENDRA = closeRing([
  [109.0, -6.5], [110.5, -6.5], [111.5, -7.0], [112.0, -7.5],
  [111.5, -8.0], [110.0, -8.2], [108.5, -8.0], [107.5, -7.5],
  [108.0, -7.0]
]);

// Mataram (Hindu-Buddhist Java)
const MATARAM = closeRing([
  [108.5, -6.5], [110.0, -6.3], [111.5, -6.8], [112.5, -7.3],
  [112.0, -8.0], [110.5, -8.3], [109.0, -8.0], [107.5, -7.5],
  [107.5, -7.0]
]);

// Kediri (eastern Java)
const KEDIRI = closeRing([
  [110.5, -6.8], [112.0, -7.0], [113.0, -7.5], [113.5, -8.0],
  [113.0, -8.3], [111.5, -8.3], [110.0, -8.0], [110.0, -7.3]
]);

// Singhasari (eastern Java, predecessor to Majapahit)
const SINGHASARI = closeRing([
  [110.0, -6.5], [112.0, -6.8], [113.5, -7.5], [114.0, -8.0],
  [113.0, -8.5], [111.0, -8.3], [109.5, -8.0], [109.5, -7.0]
]);

// Majapahit (Java-centered maritime empire)
const MAJAPAHIT = closeRing([
  [105.0, -4.0], [107.0, -3.0], [109.0, -4.0], [112.0, -5.0],
  [114.0, -6.5], [114.5, -8.0], [113.0, -8.5], [110.0, -8.5],
  [107.0, -8.0], [105.0, -7.0], [104.0, -5.5]
]);

const MAJAPAHIT_PEAK = closeRing([
  [103.0, 2.0], [105.0, 0.5], [108.0, -2.0], [112.0, -4.0],
  [115.0, -6.0], [116.0, -8.0], [114.0, -8.5], [110.0, -8.5],
  [106.0, -7.5], [104.0, -6.0], [102.5, -4.0], [101.0, -2.0],
  [100.5, 0.0], [101.0, 1.5]
]);

// Malacca Sultanate
const MALACCA = closeRing([
  [101.0, 4.0], [102.5, 3.5], [103.5, 2.5], [104.0, 1.5],
  [103.5, 0.5], [102.5, 0.0], [101.5, 0.5], [100.5, 1.5],
  [100.0, 2.5], [100.5, 3.5]
]);

// ===========================================================
// ENTITIES BY KEYFRAME
// ===========================================================

const SE_ASIA = {
  // -200: Funan precursors emerging
  "-200": [
    { name: "Funan (emerging)", color: "#00897B", desc: "Early Indianized kingdom in the Mekong Delta", coords: FUNAN }
  ],
  "-150": [
    { name: "Funan", color: "#00897B", desc: "Mekong Delta kingdom; major maritime trade center linking India and China", coords: FUNAN }
  ],
  "-44": [
    { name: "Funan", color: "#00897B", desc: "Funan kingdom flourishing as a trade hub", coords: FUNAN }
  ],
  "-27": [
    { name: "Funan", color: "#00897B", desc: "Maritime trade empire linking the Indian Ocean and South China Sea", coords: FUNAN }
  ],
  "50": [
    { name: "Funan (expanding)", color: "#00897B", desc: "Expanding Funan; major port at Óc Eo", coords: FUNAN },
    { name: "Champa (early)", color: "#E65100", desc: "Lin Yi / early Cham polities in central Vietnam", coords: CHAMPA_SMALL }
  ],
  "117": [
    { name: "Funan (peak)", color: "#00897B", desc: "Funan at greatest extent; Chinese records describe its wealth", coords: FUNAN },
    { name: "Champa", color: "#E65100", desc: "Cham kingdom of Lâm Ấp in central Vietnam coast", coords: CHAMPA_SMALL }
  ],
  "200": [
    { name: "Funan", color: "#00897B", desc: "Funan maintaining dominance in lower Mekong", coords: FUNAN },
    { name: "Champa", color: "#E65100", desc: "Champa kingdom expanding along Vietnamese coast", coords: CHAMPA }
  ],
  "250": [
    { name: "Funan (declining)", color: "#00897B", desc: "Funan losing influence to rising Chenla", coords: FUNAN },
    { name: "Champa", color: "#E65100", desc: "Champa: Hindu temples, maritime trade with India and China", coords: CHAMPA }
  ],
  "300": [
    { name: "Funan (late)", color: "#00897B", desc: "Final phase of Funan before Chenla conquest", coords: FUNAN },
    { name: "Champa", color: "#E65100", desc: "Champa consolidating along the central Vietnam coast", coords: CHAMPA }
  ],
  "350": [
    { name: "Chenla (emerging)", color: "#00695C", desc: "Chenla absorbing Funan territories inland", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa flourishing; My Son temple complex", coords: CHAMPA }
  ],
  "395": [
    { name: "Chenla", color: "#00695C", desc: "Chenla expanding across Cambodia", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa trading polity along the coast", coords: CHAMPA }
  ],
  "476": [
    { name: "Chenla", color: "#00695C", desc: "Chenla consolidating; predecessor to Angkorian civilization", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa resisting Chinese and Chenla pressure", coords: CHAMPA },
    { name: "Dvaravati", color: "#4DB6AC", desc: "Mon kingdom in the Chao Phraya basin", coords: DVARAVATI }
  ],
  "530": [
    { name: "Chenla", color: "#00695C", desc: "Chenla splitting into Land Chenla and Water Chenla", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa kingdom with extensive Indian Ocean trade", coords: CHAMPA },
    { name: "Dvaravati", color: "#4DB6AC", desc: "Buddhist Mon kingdom; Theravada center in mainland SE Asia", coords: DVARAVATI }
  ],
  "570": [
    { name: "Chenla", color: "#00695C", desc: "Divided Chenla; Water Chenla under Srivijayan influence", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa: Hindu-Buddhist culture along Vietnam coast", coords: CHAMPA },
    { name: "Dvaravati", color: "#4DB6AC", desc: "Dvaravati Mon kingdom; spreading Theravada Buddhism", coords: DVARAVATI },
    { name: "Srivijaya (early)", color: "#1565C0", desc: "Maritime polity emerging in Sumatra", coords: SRIVIJAYA }
  ],
  "632": [
    { name: "Chenla", color: "#00695C", desc: "Fragmented Chenla kingdoms", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa maintaining coastal territories", coords: CHAMPA },
    { name: "Dvaravati", color: "#4DB6AC", desc: "Dvaravati: major Buddhist center", coords: DVARAVATI },
    { name: "Srivijaya", color: "#1565C0", desc: "Srivijaya controlling Strait of Malacca trade", coords: SRIVIJAYA }
  ],
  "680": [
    { name: "Chenla (reunifying)", color: "#00695C", desc: "Jayavarman I reuniting Chenla kingdoms", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa kingdom resisting Chenla and Tang pressure", coords: CHAMPA },
    { name: "Dvaravati", color: "#4DB6AC", desc: "Dvaravati kingdom under Khmer cultural influence", coords: DVARAVATI },
    { name: "Srivijaya (expanding)", color: "#1565C0", desc: "Srivijaya: dominant maritime power, controls Strait of Malacca", coords: SRIVIJAYA_PEAK }
  ],
  "750": [
    { name: "Chenla (pre-Angkor)", color: "#00695C", desc: "Jayavarman II preparing to declare independence from Java", coords: CHENLA },
    { name: "Champa", color: "#E65100", desc: "Champa kingdom flourishing", coords: CHAMPA },
    { name: "Dvaravati (declining)", color: "#4DB6AC", desc: "Dvaravati under pressure from Khmer and Nanzhao", coords: DVARAVATI },
    { name: "Srivijaya (zenith)", color: "#1565C0", desc: "Srivijaya at peak: Sumatra, Malay Peninsula, western Java", coords: SRIVIJAYA_PEAK },
    { name: "Sailendra Dynasty", color: "#0D47A1", desc: "Buddhist Sailendra dynasty in central Java; builders of Borobudur", coords: SAILENDRA },
    { name: "Pyu City-States", color: "#795548", desc: "Mon-related city-states in upper Myanmar (Beikthano, Halin, Sri Ksetra)", coords: PAGAN_SMALL }
  ],
  "850": [
    { name: "Khmer Empire (Angkor founding)", color: "#00796B", desc: "Jayavarman II founds Angkor; beginning of classical Khmer civilization", coords: KHMER_SMALL },
    { name: "Champa", color: "#E65100", desc: "Champa: rival and trading partner of Angkor", coords: CHAMPA },
    { name: "Srivijaya", color: "#1565C0", desc: "Srivijaya maritime empire still dominant but facing Chola threat", coords: SRIVIJAYA_PEAK },
    { name: "Mataram Kingdom", color: "#0D47A1", desc: "Hindu Mataram succeeds Sailendra in Java; Prambanan temple", coords: MATARAM },
    { name: "Pagan Kingdom (early)", color: "#795548", desc: "Pagan/Bagan unifying upper Myanmar", coords: PAGAN_SMALL }
  ],
  "900": [
    { name: "Khmer Empire (Angkor)", color: "#00796B", desc: "Angkor expanding; Yasovarman I builds Angkor's first capital", coords: KHMER_SMALL },
    { name: "Champa", color: "#E65100", desc: "Champa kingdom at My Son", coords: CHAMPA },
    { name: "Dali Kingdom", color: "#4DB6AC", desc: "Successor to Nanzhao in Yunnan", coords: DALI },
    { name: "Srivijaya (declining)", color: "#1565C0", desc: "Srivijaya losing ground to Chola raids and Java", coords: SRIVIJAYA },
    { name: "Mataram Kingdom", color: "#0D47A1", desc: "East Javanese Hindu kingdom", coords: MATARAM },
    { name: "Pagan Kingdom (growing)", color: "#795548", desc: "Pagan Kingdom expanding in Myanmar", coords: PAGAN_SMALL },
    { name: "Dai Viet (early)", color: "#2E7D32", desc: "Vietnamese independence from China; Ngô dynasty", coords: DAI_VIET }
  ],
  "1000": [
    { name: "Khmer Empire (Angkor zenith)", color: "#00796B", desc: "Suryavarman I expands Angkor to greatest extent", coords: KHMER_PEAK },
    { name: "Champa (under pressure)", color: "#E65100", desc: "Champa facing Khmer and Dai Viet aggression", coords: CHAMPA_SMALL },
    { name: "Dali Kingdom", color: "#4DB6AC", desc: "Dali Kingdom in Yunnan", coords: DALI },
    { name: "Srivijaya (contracting)", color: "#1565C0", desc: "Srivijaya weakened by Chola naval raids of 1025", coords: SRIVIJAYA },
    { name: "Kediri Kingdom", color: "#0D47A1", desc: "Hindu kingdom in eastern Java", coords: KEDIRI },
    { name: "Pagan Kingdom", color: "#795548", desc: "Pagan/Bagan Kingdom: major Theravada Buddhist center", coords: PAGAN },
    { name: "Dai Viet", color: "#2E7D32", desc: "Lý dynasty Dai Viet; Temple of Literature founded", coords: DAI_VIET }
  ],
  "1071": [
    { name: "Khmer Empire (Angkor Wat era)", color: "#00796B", desc: "Suryavarman II builds Angkor Wat — world's largest religious monument", coords: KHMER_PEAK },
    { name: "Champa", color: "#E65100", desc: "Champa: ongoing wars with Angkor and Dai Viet", coords: CHAMPA_SMALL },
    { name: "Dali Kingdom", color: "#4DB6AC", desc: "Dali Kingdom persists in Yunnan", coords: DALI },
    { name: "Srivijaya (late)", color: "#1565C0", desc: "Srivijaya reduced to core Sumatran territories", coords: SRIVIJAYA },
    { name: "Kediri Kingdom", color: "#0D47A1", desc: "Kediri Kingdom in Java", coords: KEDIRI },
    { name: "Pagan Kingdom (peak)", color: "#795548", desc: "Pagan at peak: 10,000+ temples on the Irrawaddy plain", coords: PAGAN },
    { name: "Dai Viet (Lý dynasty)", color: "#2E7D32", desc: "Lý dynasty Dai Viet; invasion of Champa and Song border wars", coords: DAI_VIET }
  ],
  "1100": [
    { name: "Khmer Empire (Angkor)", color: "#00796B", desc: "Angkor: Jayavarman VII era approaching; Bayon temple", coords: KHMER_PEAK },
    { name: "Champa (reduced)", color: "#E65100", desc: "Champa reduced after Khmer invasions", coords: CHAMPA_SMALL },
    { name: "Dali Kingdom", color: "#4DB6AC", desc: "Dali Kingdom in Yunnan", coords: DALI },
    { name: "Srivijaya (remnant)", color: "#1565C0", desc: "Srivijaya reduced to Palembang area", coords: SRIVIJAYA },
    { name: "Kediri Kingdom", color: "#0D47A1", desc: "Kediri: major power in Java", coords: KEDIRI },
    { name: "Pagan Kingdom", color: "#795548", desc: "Pagan Kingdom of Myanmar", coords: PAGAN },
    { name: "Dai Viet", color: "#2E7D32", desc: "Dai Viet under Trần dynasty", coords: DAI_VIET }
  ],
  "1200": [
    { name: "Khmer Empire (post-Jayavarman VII)", color: "#00796B", desc: "Angkor after Jayavarman VII; shift from Hindu to Buddhist", coords: KHMER_PEAK },
    { name: "Champa (vassal)", color: "#E65100", desc: "Champa: Khmer vassal, later independent again", coords: CHAMPA_SMALL },
    { name: "Dali Kingdom", color: "#4DB6AC", desc: "Dali Kingdom; Mongol conquest imminent", coords: DALI },
    { name: "Pagan Kingdom (declining)", color: "#795548", desc: "Pagan weakened; Mongol invasions beginning", coords: PAGAN },
    { name: "Dai Viet (Trần)", color: "#2E7D32", desc: "Trần dynasty repels three Mongol invasions", coords: DAI_VIET },
    { name: "Singhasari Kingdom", color: "#0D47A1", desc: "Singhasari replaces Kediri; precursor to Majapahit", coords: SINGHASARI },
    { name: "Sukhothai Kingdom", color: "#00796B", desc: "First major Thai kingdom; Ram Khamhaeng era", coords: SUKHOTHAI }
  ],
  "1300": [
    { name: "Khmer Empire (declining)", color: "#00796B", desc: "Angkor declining; pressure from Ayutthaya", coords: KHMER_LATE },
    { name: "Champa (surviving)", color: "#E65100", desc: "Champa reduced but surviving along coast", coords: CHAMPA_SMALL },
    { name: "Sukhothai Kingdom (late)", color: "#26A69A", desc: "Sukhothai becoming vassal of rising Ayutthaya", coords: SUKHOTHAI },
    { name: "Ayutthaya Kingdom (early)", color: "#00BFA5", desc: "Ayutthaya founded 1351; rapidly expanding Thai kingdom", coords: AYUTTHAYA },
    { name: "Pagan successor states", color: "#795548", desc: "Shan states and Ava/Sagaing after Pagan's fall", coords: PAGAN_SMALL },
    { name: "Dai Viet (Trần late)", color: "#2E7D32", desc: "Trần dynasty weakening; Hồ dynasty imminent", coords: DAI_VIET },
    { name: "Majapahit Empire", color: "#1B5E20", desc: "Gajah Mada's Majapahit: greatest maritime empire of the archipelago", coords: MAJAPAHIT_PEAK },
    { name: "Lan Xang", color: "#558B2F", desc: "Fa Ngum founds Lan Xang (Kingdom of a Million Elephants)", coords: LAN_XANG }
  ],
  "1350": [
    { name: "Khmer Empire (late Angkor)", color: "#00796B", desc: "Angkor sacked by Ayutthaya; decline accelerating", coords: KHMER_LATE },
    { name: "Champa (diminished)", color: "#E65100", desc: "Champa steadily losing territory to Dai Viet", coords: CHAMPA_SMALL },
    { name: "Ayutthaya Kingdom", color: "#00BFA5", desc: "Ayutthaya dominant in mainland SE Asia", coords: AYUTTHAYA },
    { name: "Ava Kingdom", color: "#795548", desc: "Ava Kingdom: Burmese successor to Pagan", coords: PAGAN_SMALL },
    { name: "Dai Viet", color: "#2E7D32", desc: "Dai Viet under Hồ then Lê dynasty; expanding south", coords: DAI_VIET_EXPANDED },
    { name: "Majapahit Empire (peak)", color: "#1B5E20", desc: "Majapahit at greatest extent under Hayam Wuruk", coords: MAJAPAHIT_PEAK },
    { name: "Lan Xang", color: "#558B2F", desc: "Lan Xang kingdom in Laos", coords: LAN_XANG }
  ],
  "1453": [
    { name: "Khmer Kingdom (post-Angkor)", color: "#00796B", desc: "Khmer capital moved to Phnom Penh after abandoning Angkor", coords: KHMER_LATE },
    { name: "Champa (final)", color: "#E65100", desc: "Champa in final decades; annexed by Dai Viet 1471", coords: CHAMPA_SMALL },
    { name: "Ayutthaya Kingdom", color: "#00BFA5", desc: "Ayutthaya: major Southeast Asian power", coords: AYUTTHAYA },
    { name: "Ava Kingdom", color: "#795548", desc: "Ava Kingdom in upper Myanmar", coords: PAGAN_SMALL },
    { name: "Dai Viet (Lê dynasty)", color: "#2E7D32", desc: "Lê dynasty Dai Viet; expanding southward (Nam tiến)", coords: DAI_VIET_EXPANDED },
    { name: "Majapahit Empire (declining)", color: "#1B5E20", desc: "Majapahit fragmenting; Islamic sultanates rising", coords: MAJAPAHIT },
    { name: "Lan Xang", color: "#558B2F", desc: "Lan Xang kingdom", coords: LAN_XANG },
    { name: "Malacca Sultanate", color: "#1565C0", desc: "Malacca: major Islamic trading sultanate controlling the Strait", coords: MALACCA }
  ]
};

module.exports = { SE_ASIA };
