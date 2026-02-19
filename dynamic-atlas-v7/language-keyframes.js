const LANGUAGE_KEYFRAMES = [
  // ============================================================
  // 500 BCE — Classical world: Greek colonies, Aramaic lingua franca,
  // Old Persian, Celtic/Germanic fringe, Coptic Egypt
  // ============================================================
  {
    year: -500,
    label: "500 BCE",
    context: "Greek spoken around the Aegean and colonies. Aramaic is the lingua franca of the Persian Empire. Old Persian on the Iranian plateau.",
    features: [
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Spoken across the Aegean, Greek colonies in southern Italy, Sicily, coastal Anatolia, and Cyrenaica. Multiple dialects (Attic, Ionic, Doric, Aeolic).",
        coords: [[[12.5, 38.0], [15.0, 38.5], [16.5, 41.0], [15.5, 41.9], [14.2, 42.1], [13.7, 43.6], [14.5, 45.5], [16.0, 46.0], [18.0, 45.0], [17.0, 43.4], [19.5, 43.5], [20.0, 42.0], [21.5, 40.3], [22.0, 38.0], [21.5, 37.6], [23.0, 37.0], [23.0, 36.0], [22.5, 36.5], [22.0, 37.3], [20.5, 36.8], [21.8, 36.4], [23.5, 35.3], [24.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [36.5, 35.5], [35.5, 34.5], [33.5, 35.0], [28.0, 35.3], [25.5, 34.8], [23.5, 34.0], [21.0, 32.5], [20.0, 32.0], [15.0, 32.0], [12.5, 32.0], [11.0, 33.5], [10.0, 36.8], [12.5, 38.0]]]
      },
      {
        name: "Aramaic",
        family: "ARAM",
        color: "#FFA726",
        desc: "Imperial Aramaic is the administrative lingua franca of the Achaemenid Empire. Spoken natively across the Levant and Mesopotamia.",
        coords: [[[33.5, 36.5], [35.0, 37.5], [37.0, 37.5], [40.0, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [45.0, 30.0], [44.0, 31.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.0, 31.5], [34.0, 31.0], [33.5, 33.0], [33.5, 36.5]]]
      },
      {
        name: "Old Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Old Persian spoken on the Iranian plateau as the native language of the Achaemenid ruling class. Cuneiform inscriptions.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Coptic (Egyptian)",
        family: "COPT",
        color: "#FFCA28",
        desc: "Late Egyptian language in its Demotic phase. Spoken throughout the Nile valley. Would later be written in Greek-derived Coptic script.",
        coords: [[[25.1, 29.0], [29.0, 27.0], [30.5, 22.0], [31.5, 22.0], [33.0, 25.0], [33.5, 28.0], [33.5, 30.0], [31.8, 31.5], [29.5, 31.0], [25.1, 31.3], [25.1, 29.0]]]
      },
      {
        name: "Hebrew",
        family: "HEBR",
        color: "#7E57C2",
        desc: "Spoken in the Persian province of Yehud (Judaea). Already shifting toward Aramaic for daily speech; Hebrew increasingly a liturgical language.",
        coords: [[[34.0, 31.0], [34.3, 31.8], [34.5, 32.5], [35.0, 32.8], [35.8, 32.5], [36.0, 31.8], [35.5, 31.0], [34.0, 31.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Old Arabic spoken by nomadic and settled tribes across the Arabian peninsula. Pre-Islamic poetry tradition developing.",
        coords: [[[34.5, 29.5], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [38.0, 33.5], [42.0, 33.0], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [34.5, 29.5]]]
      },
      {
        name: "Celtic / Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Celtic languages (Gaulish, Celtiberian) across western/central Europe. Early Germanic languages emerging in northern Europe.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [18.0, 50.0], [16.0, 47.5], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3], [0.0, 42.7], [-1.8, 43.4], [-3.5, 43.4], [-5.5, 43.5], [-7.5, 43.7], [-8.5, 42.5], [-8.8, 41.2], [-9.5, 38.7], [-9.5, 37.0]]]
      }
    ]
  },

  // ============================================================
  // 200 BCE — Koine Greek spreads via Hellenistic kingdoms.
  // Latin rising in western Mediterranean.
  // ============================================================
  {
    year: -200,
    label: "200 BCE",
    context: "Koine Greek is the prestige language from Egypt to Afghanistan. Latin expands with Roman conquests in the western Mediterranean.",
    features: [
      {
        name: "Greek (Koine)",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Koine Greek is the prestige and administrative language across the Hellenistic world — Ptolemaic Egypt, Seleucid realm, Bactria, and the Greek homeland.",
        coords: [[[15.0, 32.0], [20.0, 32.0], [21.0, 32.5], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [30.5, 35.5], [33.5, 35.0], [35.5, 34.5], [36.5, 35.5], [36.0, 36.8], [37.0, 37.5], [40.0, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [45.0, 30.0], [44.0, 31.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.0, 31.5], [33.5, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [10.0, 35.0], [11.0, 37.0], [12.5, 38.0], [15.0, 38.5], [16.5, 41.0], [18.0, 40.0], [19.5, 38.0], [20.5, 36.8], [22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [35.5, 34.5], [28.0, 35.3], [23.0, 34.0], [20.0, 32.0], [15.0, 32.0]]]
      },
      {
        name: "Latin",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Latin spreading across Italy and into southern Gaul, Iberia, and North Africa with Roman conquests. Already displacing Oscan, Etruscan, and Punic.",
        coords: [[[10.0, 35.0], [10.0, 30.0], [5.0, 32.9], [-5.5, 35.8], [-5.5, 36.3], [0.0, 35.5], [3.0, 36.8], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [14.2, 42.1], [15.5, 41.9], [16.5, 41.0], [18.0, 40.0], [16.5, 38.5], [15.0, 38.5], [12.5, 38.0], [11.0, 37.0], [10.0, 35.0]]]
      },
      {
        name: "Aramaic",
        family: "ARAM",
        color: "#FFA726",
        desc: "Still widely spoken as vernacular across the Levant and Mesopotamia, even under Greek-speaking Seleucid administration.",
        coords: [[[33.5, 33.0], [34.0, 31.0], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [40.0, 34.5], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [48.0, 30.5], [48.0, 35.0], [46.0, 37.5], [44.0, 37.5], [42.0, 37.1], [40.0, 37.5], [37.0, 37.5], [36.0, 36.8], [36.5, 35.5], [35.5, 34.5], [33.5, 33.0]]]
      },
      {
        name: "Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Middle Persian developing on the Iranian plateau. Greek overlay in cities from Alexander's conquest, but Persian persists as vernacular.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic continues across the Arabian peninsula. Nabataean Arabic (written in Aramaic script) emerging in the northwest.",
        coords: [[[34.5, 29.5], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [38.0, 33.5], [42.0, 33.0], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [34.5, 29.5]]]
      },
      {
        name: "Celtic / Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Celtic languages still dominant in Gaul, Britain, Iberia. Germanic expanding in northern/central Europe.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [18.0, 50.0], [16.0, 47.5], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [3.0, 43.3], [0.0, 42.7], [-1.8, 43.4], [-3.5, 43.4], [-5.5, 43.5], [-7.5, 43.7], [-8.5, 42.5], [-8.8, 41.2], [-9.5, 38.7], [-9.5, 37.0]]]
      }
    ]
  },

  // ============================================================
  // 50 CE — Roman bilingual empire: Latin west, Greek east
  // ============================================================
  {
    year: 50,
    label: "50 CE",
    context: "The Roman Empire is bilingual: Latin in the west, Greek in the east. Aramaic remains the daily language across the Levant.",
    features: [
      {
        name: "Latin",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Latin is the language of administration, law, and military across the western Roman provinces. Displacing Celtic in Gaul, Iberian languages in Spain.",
        coords: [[[-5.5, 35.8], [-5.5, 36.3], [-4.5, 36.7], [-2.5, 36.7], [-1.5, 37.0], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [16.0, 42.0], [17.0, 43.4], [19.5, 43.5], [20.0, 42.0], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [15.0, 38.5], [12.5, 38.0], [11.0, 37.0], [10.0, 35.0], [10.0, 30.0], [5.0, 32.9], [-5.5, 35.8]]]
      },
      {
        name: "Greek (Koine)",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Koine Greek is the language of culture, commerce, and administration in the eastern Roman provinces. Also the language of early Christianity.",
        coords: [[[18.0, 39.0], [19.0, 40.0], [20.0, 42.0], [21.5, 40.3], [22.0, 38.0], [21.5, 37.6], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.5, 31.5], [33.5, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [10.0, 35.0], [11.0, 37.0], [12.5, 38.0], [15.0, 38.5], [16.5, 38.5], [18.0, 39.0]]]
      },
      {
        name: "Aramaic",
        family: "ARAM",
        color: "#FFA726",
        desc: "Aramaic remains the spoken language of ordinary people across Syria, Palestine, and Mesopotamia, beneath the Greek administrative overlay.",
        coords: [[[35.0, 34.5], [36.5, 35.5], [38.0, 36.0], [40.0, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [45.0, 30.0], [44.0, 31.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.0, 31.5], [34.0, 31.0], [33.5, 33.0], [35.0, 34.5]]]
      },
      {
        name: "Persian (Parthian)",
        family: "PERS",
        color: "#EC407A",
        desc: "Parthian (northwest Middle Iranian) and other Iranian languages across the Parthian Empire. Greek still used in some cities.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic spoken across the Arabian peninsula. Client kingdoms (Nabataea, Palmyra) bridge Arabic and Aramaic-speaking worlds.",
        coords: [[[34.5, 29.5], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [38.0, 33.5], [42.0, 33.0], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [34.5, 29.5]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Germanic languages beyond the Rhine-Danube frontier. Celtic now rapidly giving way to Latin within the Empire.",
        coords: [[[8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [18.0, 50.0], [16.0, 47.5], [14.0, 46.5], [12.5, 44.5], [10.0, 48.0], [8.0, 54.0]]]
      }
    ]
  },

  // ============================================================
  // 300 CE — Peak bilingual empire. Syriac rising as Christian literary language.
  // ============================================================
  {
    year: 300,
    label: "300 CE",
    context: "Latin and Greek divide the Roman Empire. Syriac (Aramaic dialect) becomes a major Christian literary language in the East.",
    features: [
      {
        name: "Latin",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Latin firmly dominant across western provinces. Vulgar Latin dialects diverging regionally — seeds of future Romance languages.",
        coords: [[[-5.5, 35.8], [-5.5, 36.3], [-4.5, 36.7], [-2.5, 36.7], [-1.5, 37.0], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [16.0, 42.0], [17.0, 43.4], [19.5, 43.5], [20.0, 42.0], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [15.0, 38.5], [12.5, 38.0], [11.0, 37.0], [10.0, 35.0], [10.0, 30.0], [5.0, 32.9], [-5.5, 35.8]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek dominant in the eastern Roman provinces — Balkans, Anatolia, Egypt's cities. The language of the New Testament and Church Fathers.",
        coords: [[[18.0, 39.0], [19.0, 40.0], [20.0, 42.0], [21.5, 40.3], [22.0, 38.0], [21.5, 37.6], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.5, 31.5], [33.5, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [10.0, 35.0], [11.0, 37.0], [12.5, 38.0], [15.0, 38.5], [16.5, 38.5], [18.0, 39.0]]]
      },
      {
        name: "Syriac / Aramaic",
        family: "ARAM",
        color: "#FFA726",
        desc: "Syriac (Eastern Aramaic dialect) becoming a major literary and liturgical language. Spoken across the Fertile Crescent from Edessa to Ctesiphon.",
        coords: [[[35.0, 34.5], [36.5, 35.5], [38.0, 36.0], [40.0, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [45.0, 30.0], [44.0, 31.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.0, 31.5], [34.0, 31.0], [33.5, 33.0], [35.0, 34.5]]]
      },
      {
        name: "Middle Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Middle Persian (Pahlavi) is the state language of the Sasanian Empire. Also used for Zoroastrian religious texts.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic continues across the peninsula. Rich oral poetry tradition. Some Arabic-speaking communities in southern Syria and Mesopotamian fringe.",
        coords: [[[34.5, 29.5], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [38.0, 33.5], [42.0, 33.0], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [34.5, 29.5]]]
      },
      {
        name: "Coptic",
        family: "COPT",
        color: "#FFCA28",
        desc: "Coptic (written in Greek-derived script) is the spoken language of rural Egypt. Greek used in cities, but Coptic dominates the countryside.",
        coords: [[[29.0, 27.0], [30.5, 22.0], [31.5, 22.0], [33.0, 25.0], [33.5, 28.0], [33.0, 30.0], [31.8, 31.5], [29.5, 31.0], [29.0, 27.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Germanic languages expanding. Goths migrating southeast toward the Danube frontier. Celtic nearly extinct in the continental interior.",
        coords: [[[8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [18.0, 50.0], [16.0, 47.5], [14.0, 46.5], [12.5, 44.5], [10.0, 48.0], [8.0, 54.0]]]
      }
    ]
  },

  // ============================================================
  // 500 CE — Post-Roman fragmentation. Germanic languages in the west.
  // Slavic migration beginning.
  // ============================================================
  {
    year: 500,
    label: "500 CE",
    context: "Latin fragments into Vulgar Latin dialects. Germanic languages spread across the former western Empire. Slavic peoples begin migrating into the Balkans.",
    features: [
      {
        name: "Vulgar Latin / Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Vulgar Latin dialects still spoken across Iberia, Gaul, Italy, and North Africa. Diverging but still mutually intelligible. No longer a unified literary language in the west.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [10.0, 30.0], [5.0, 32.9], [-5.5, 35.8], [-5.5, 36.3], [-4.5, 36.7], [-2.5, 36.7], [-1.5, 37.0], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek consolidated as the language of the surviving eastern Roman (Byzantine) Empire. Anatolia, Balkans, Constantinople.",
        coords: [[[18.0, 39.0], [19.0, 40.0], [20.0, 42.0], [21.5, 40.3], [22.0, 38.0], [21.5, 37.6], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [37.0, 36.5], [35.5, 34.5], [33.5, 33.0], [33.0, 30.0], [31.8, 31.5], [29.5, 31.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 38.5], [16.5, 38.5], [18.0, 39.0]]]
      },
      {
        name: "Syriac / Aramaic",
        family: "ARAM",
        color: "#FFA726",
        desc: "Syriac at its height as a literary language — translations of Greek philosophy, theology, science. Spoken across the Fertile Crescent.",
        coords: [[[35.0, 34.5], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [45.0, 30.0], [44.0, 31.5], [40.0, 34.5], [37.0, 33.0], [36.5, 32.0], [35.0, 31.5], [34.0, 31.0], [33.5, 33.0], [35.0, 34.5]]]
      },
      {
        name: "Middle Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Middle Persian (Pahlavi) remains the Sasanian state language. Extensive Zoroastrian and Manichaean literature.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic across the peninsula. Ghassanid and Lakhmid client kingdoms bridge Arabic and Aramaic/Greek-speaking worlds.",
        coords: [[[34.5, 29.5], [35.0, 31.5], [36.5, 32.0], [37.0, 33.0], [38.0, 33.5], [42.0, 33.0], [44.0, 31.5], [45.0, 30.0], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [34.5, 29.5]]]
      },
      {
        name: "Coptic",
        family: "COPT",
        color: "#FFCA28",
        desc: "Coptic remains the language of everyday life in Egypt. The Coptic Church preserves Egyptian language and identity.",
        coords: [[[29.0, 27.0], [30.5, 22.0], [31.5, 22.0], [33.0, 25.0], [33.5, 28.0], [33.0, 30.0], [31.8, 31.5], [29.5, 31.0], [29.0, 27.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Germanic languages now dominant across northern Europe. Frankish rulers in Gaul adopt Romance speech; Gothic kingdoms in Spain and Italy.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [18.0, 50.0], [16.0, 47.5], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "Proto-Slavic speakers beginning to migrate south from their homeland north of the Carpathians. Not yet in the Balkans in significant numbers.",
        coords: [[[18.0, 50.0], [18.0, 55.0], [24.0, 55.0], [30.0, 55.0], [30.0, 50.0], [24.0, 48.0], [18.0, 50.0]]]
      }
    ]
  },

  // ============================================================
  // 650 CE — Arabic explodes outward. Slavic in Balkans.
  // ============================================================
  {
    year: 650,
    label: "650 CE",
    context: "Arabic spreads rapidly with Islamic conquest — Levant, Mesopotamia, Egypt, Persia. Slavic languages established in the Balkans.",
    features: [
      {
        name: "Vulgar Latin / Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Romance dialects continuing to diverge in Iberia, Gaul, and Italy. Latin persists as the written language of the Church.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [8.0, 36.8], [3.0, 36.8], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek retreating to core Byzantine territory — western Anatolia, Thrace, Constantinople, and scattered Aegean communities. Lost Syria, Egypt, North Africa.",
        coords: [[[20.0, 37.0], [20.5, 36.8], [22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [37.0, 36.5], [35.5, 35.5], [32.5, 36.0], [28.0, 36.0], [26.0, 35.3], [24.5, 35.3], [22.0, 38.0], [21.5, 40.3], [20.0, 42.0], [22.0, 42.0], [24.5, 41.5], [26.0, 42.0], [28.0, 41.5], [29.5, 41.1], [33.0, 42.0], [35.0, 42.1], [37.0, 41.1], [36.0, 36.8], [34.5, 35.8], [33.3, 35.2], [32.5, 36.8], [30.0, 37.0], [28.0, 36.5], [26.5, 36.0], [26.0, 35.3], [23.5, 35.3], [23.0, 36.0], [22.5, 36.5], [22.0, 37.3], [20.5, 36.8], [20.0, 37.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic spreading explosively as the language of the Rashidun/Umayyad caliphate. Now the administrative language from Egypt to Mesopotamia. Gradually replacing Aramaic, Coptic, and Greek in conquered territories.",
        coords: [[[-5.5, 35.8], [0.0, 35.5], [3.0, 36.8], [8.0, 36.8], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 32.5], [20.0, 32.0], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [32.5, 36.0], [35.5, 35.5], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [-5.5, 35.8]]]
      },
      {
        name: "Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Middle Persian survives the Islamic conquest of the Sasanian Empire. The population continues speaking Persian even as Arabic becomes the language of religion and administration.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Frankish, Anglo-Saxon, and other Germanic languages. In Gaul, Frankish rulers increasingly adopt Romance speech — Germanic retreats northward.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [16.0, 50.0], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "Slavic languages now established across the Balkans, having flooded in during the 6th century while Byzantium was distracted. Old Church Slavonic emerging.",
        coords: [[[14.0, 46.5], [16.0, 47.5], [18.0, 50.0], [24.0, 50.0], [30.0, 50.0], [30.0, 55.0], [24.0, 55.0], [18.0, 55.0], [16.0, 50.0], [18.0, 45.0], [20.0, 44.5], [22.0, 44.0], [22.0, 42.0], [20.0, 42.0], [21.5, 40.3], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [16.5, 41.0], [17.0, 43.4], [16.0, 44.0], [14.0, 46.5]]]
      }
    ]
  },

  // ============================================================
  // 800 CE — Arabic solidified. New Persian renaissance.
  // ============================================================
  {
    year: 800,
    label: "800 CE",
    context: "Arabic replaces Aramaic and Coptic as the daily language across the Middle East and North Africa. New Persian emerges, written in Arabic script.",
    features: [
      {
        name: "Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Distinct Romance varieties: Old French, Old Spanish, Old Italian emerging. Latin continues as the language of learning and the Church.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [8.0, 36.8], [3.0, 36.8], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek confined to Byzantine Anatolia (minus the Arab-held southeast), Thrace, and southern Greece (Slavic-settled northern Greece recovering).",
        coords: [[[22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [37.0, 36.5], [35.5, 35.5], [33.3, 35.2], [30.0, 37.0], [26.5, 36.0], [23.5, 35.3], [22.0, 38.0], [21.5, 40.3], [20.0, 42.0], [22.0, 42.0], [24.5, 41.5], [26.0, 42.0], [28.0, 41.5], [29.5, 41.1], [33.0, 42.0], [35.0, 42.1], [37.0, 41.1], [36.0, 36.8], [22.0, 37.3]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic now the primary daily language across the caliphate — North Africa, Egypt, Levant, Mesopotamia, Arabia. Aramaic and Coptic reduced to liturgical use. Classical Arabic flourishing.",
        coords: [[[-5.5, 35.8], [0.0, 35.5], [3.0, 36.8], [8.0, 36.8], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 32.5], [20.0, 32.0], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [33.5, 35.0], [35.5, 34.5], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [-5.5, 35.8]]]
      },
      {
        name: "New Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "New Persian (Farsi) emerging, written in Arabic script. Cultural renaissance under the Samanids. Persian literary tradition reviving — Rudaki, Ferdowsi's predecessors.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Frankish and other Germanic varieties in northern Europe. Old English in Britain. Old High German in the Carolingian heartland.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [16.0, 50.0], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "Slavic languages firmly established in the Balkans, central Europe, and eastern Europe. Old Church Slavonic used as literary language after Cyril and Methodius.",
        coords: [[[14.0, 46.5], [16.0, 50.0], [18.0, 55.0], [24.0, 55.0], [30.0, 55.0], [30.0, 50.0], [24.0, 48.0], [22.0, 44.0], [22.0, 42.0], [20.0, 42.0], [21.5, 40.3], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [16.5, 41.0], [17.0, 43.4], [16.0, 44.0], [14.0, 46.5]]]
      }
    ]
  },

  // ============================================================
  // 1000 CE — Turkic languages arriving. Persian literary golden age.
  // ============================================================
  {
    year: 1000,
    label: "1000 CE",
    context: "Arabic, Persian, and Greek in a stable trilingual equilibrium. Turkic languages arriving from Central Asia with Ghaznavid and Seljuk warriors.",
    features: [
      {
        name: "Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Recognizably separate Romance languages: Old French, Occitan, Old Spanish, Italian dialects. Latin remains the pan-European scholarly language.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [8.0, 36.8], [3.0, 36.8], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Byzantine Greek — the literary, administrative, and daily language of the Byzantine Empire. Anatolia still Greek-speaking. Basil II's conquests in the Balkans.",
        coords: [[[22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [34.5, 35.8], [36.0, 36.8], [37.0, 41.1], [40.5, 41.1], [40.2, 37.5], [37.0, 36.5], [35.5, 35.5], [33.3, 35.2], [30.0, 37.0], [26.5, 36.0], [23.5, 35.3], [22.0, 38.0], [21.5, 40.3], [20.0, 42.0], [22.0, 42.0], [24.5, 41.5], [26.0, 42.0], [28.0, 41.5], [29.5, 41.1], [33.0, 42.0], [35.0, 42.1], [37.0, 41.1], [36.0, 36.8], [22.0, 37.3]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic dominant from Iberia to Mesopotamia. Classical Arabic is the supreme language of science, philosophy, and literature across the Islamic world.",
        coords: [[[-5.5, 35.8], [0.0, 35.5], [3.0, 36.8], [8.0, 36.8], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 32.5], [20.0, 32.0], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [33.5, 35.0], [35.5, 34.5], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [-5.5, 35.8]]]
      },
      {
        name: "Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Persian golden age — Ferdowsi's Shahnameh (completed 1010). New Persian is the literary and court language from Baghdad to Bukhara. Writing in Arabic script.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Old High German, Old English, Norse. Germanic language area consolidated in northern/central Europe.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [16.0, 50.0], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "South Slavic (Bulgarian, Serbian), West Slavic (Czech, Polish), and East Slavic (Old Russian) now distinct branches. Literary tradition in Old Church Slavonic.",
        coords: [[[14.0, 46.5], [16.0, 50.0], [18.0, 55.0], [24.0, 55.0], [30.0, 55.0], [30.0, 50.0], [24.0, 48.0], [22.0, 44.0], [22.0, 42.0], [20.0, 42.0], [21.5, 40.3], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [16.5, 41.0], [17.0, 43.4], [16.0, 44.0], [14.0, 46.5]]]
      }
    ]
  },

  // ============================================================
  // 1100 CE — Turkic enters Anatolia post-Manzikert. Crusader Latin in Levant.
  // ============================================================
  {
    year: 1100,
    label: "1100 CE",
    context: "Turkish spreads into central Anatolia after the Battle of Manzikert (1071). Greek retreats westward. Crusaders bring French/Latin to the Levant.",
    features: [
      {
        name: "Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Romance languages well established. Norman French in England and southern Italy. Crusader French/Latin in Outremer states.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [8.0, 36.8], [3.0, 36.8], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek retreating from central Anatolia. Still dominant on the Aegean coast, Constantinople, Thrace, and southern Greece. A shrinking but still vibrant world.",
        coords: [[[22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [26.0, 35.3], [26.5, 36.0], [28.0, 36.5], [29.5, 36.0], [30.0, 37.0], [32.5, 36.8], [33.3, 35.2], [33.0, 37.5], [30.0, 36.5], [28.0, 36.0], [26.0, 35.3], [23.5, 35.3], [22.0, 38.0], [21.5, 40.3], [20.0, 42.0], [22.0, 42.0], [24.5, 41.5], [26.0, 42.0], [28.0, 41.5], [29.5, 41.1], [33.0, 42.0], [35.0, 42.1], [35.0, 40.0], [33.0, 37.5], [33.3, 35.2], [22.0, 37.3]]]
      },
      {
        name: "Turkic",
        family: "TURK",
        color: "#FF7043",
        desc: "Seljuk Turkish spreading through central and eastern Anatolia after Manzikert (1071). Turkic pastoralists settling, Greek population declining or converting.",
        coords: [[[35.0, 40.0], [35.0, 42.1], [37.0, 41.1], [40.5, 41.1], [42.0, 41.5], [44.0, 41.0], [44.5, 40.5], [44.0, 39.5], [40.2, 37.5], [37.0, 36.5], [35.0, 37.0], [33.0, 37.5], [35.0, 40.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic the daily language from Morocco to Iraq. Some Aramaic-speaking communities persist in mountain villages of northern Mesopotamia.",
        coords: [[[-5.5, 35.8], [0.0, 35.5], [3.0, 36.8], [8.0, 36.8], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 32.5], [20.0, 32.0], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [33.5, 35.0], [35.0, 34.5], [35.0, 37.0], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [-5.5, 35.8]]]
      },
      {
        name: "Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Persian remains the literary and court language of the eastern Islamic world. Omar Khayyam, the Ghaznavid court. Persian influence extends into India.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Middle High German, Middle English, Norse. Norman French overlay in England is fading.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [16.0, 50.0], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "South Slavic in Balkans, West Slavic in central Europe, East Slavic in Kievan Rus. Cyrillic and Glagolitic scripts in use.",
        coords: [[[14.0, 46.5], [16.0, 50.0], [18.0, 55.0], [24.0, 55.0], [30.0, 55.0], [30.0, 50.0], [24.0, 48.0], [22.0, 44.0], [22.0, 42.0], [20.0, 42.0], [21.5, 40.3], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [16.5, 41.0], [17.0, 43.4], [16.0, 44.0], [14.0, 46.5]]]
      }
    ]
  },

  // ============================================================
  // 1350 CE — Ottoman Turkish dominant in Anatolia. Arabic holds.
  // Greek confined to small area around Constantinople.
  // ============================================================
  {
    year: 1350,
    label: "1350 CE",
    context: "Ottoman Turkish dominant across Anatolia. Greek confined to Constantinople and Thrace. Arabic stable across the Middle East. Persian thrives despite Mongol devastation.",
    features: [
      {
        name: "Romance",
        family: "LATIN",
        color: "#AB47BC",
        desc: "Mature Romance languages: French, Spanish, Portuguese, Italian all established literary traditions. Dante has written in Italian, not Latin.",
        coords: [[[-9.5, 37.0], [-9.5, 38.7], [-8.8, 41.2], [-8.5, 42.5], [-7.5, 43.7], [-5.5, 43.5], [-3.5, 43.4], [-1.8, 43.4], [0.0, 42.7], [3.0, 43.3], [5.0, 43.3], [7.0, 43.7], [8.0, 44.0], [10.0, 44.0], [12.5, 44.5], [13.7, 43.6], [12.6, 42.0], [14.0, 41.1], [16.5, 41.0], [15.5, 38.5], [13.0, 37.5], [11.0, 37.0], [10.0, 35.0], [8.0, 36.8], [3.0, 36.8], [-0.5, 37.6], [0.0, 38.0], [-0.8, 39.5], [0.0, 40.5], [-0.5, 41.0], [0.5, 41.5], [2.0, 41.3], [3.0, 42.0], [3.0, 43.3], [-9.5, 37.0]]]
      },
      {
        name: "Greek",
        family: "GREEK",
        color: "#42A5F5",
        desc: "Greek now confined to Constantinople, Thrace, the Peloponnese (Morea), Crete, and scattered Aegean islands. A civilization in retreat.",
        coords: [[[22.0, 37.3], [22.5, 36.5], [23.0, 36.0], [23.5, 35.3], [25.0, 35.3], [26.0, 35.3], [26.5, 36.0], [27.0, 38.0], [29.0, 40.0], [29.5, 41.1], [28.0, 41.5], [26.0, 42.0], [24.5, 41.5], [22.0, 38.0], [22.0, 37.3]]]
      },
      {
        name: "Turkic (Ottoman)",
        family: "TURK",
        color: "#FF7043",
        desc: "Ottoman Turkish dominant across Anatolia. Turkish also spoken in parts of the Balkans where Ottoman expansion brings Turkic settlers. Old Anatolian Turkish developing into a literary language.",
        coords: [[[29.0, 40.0], [29.5, 41.1], [33.0, 42.0], [35.0, 42.1], [37.0, 41.1], [40.5, 41.1], [42.0, 41.5], [44.0, 41.0], [44.5, 40.5], [44.0, 39.5], [40.2, 37.5], [37.0, 36.5], [35.5, 35.5], [33.0, 36.0], [30.0, 36.5], [29.0, 37.0], [27.0, 38.0], [29.0, 40.0]]]
      },
      {
        name: "Arabic",
        family: "ARAB",
        color: "#66BB6A",
        desc: "Arabic remains the dominant language from Morocco to Iraq, and the sacred language of Islam worldwide. Mamluk Egypt is a center of Arabic literary culture.",
        coords: [[[-5.5, 35.8], [0.0, 35.5], [3.0, 36.8], [8.0, 36.8], [10.0, 35.0], [11.0, 37.0], [13.0, 37.5], [15.5, 32.5], [20.0, 32.0], [23.5, 34.0], [25.5, 34.8], [28.0, 35.3], [33.5, 35.0], [35.5, 34.5], [37.0, 36.5], [40.2, 37.5], [42.0, 37.1], [44.0, 37.5], [46.0, 37.5], [48.0, 35.0], [48.0, 30.5], [47.0, 29.5], [50.0, 29.5], [52.0, 27.5], [55.0, 26.6], [57.0, 24.0], [56.0, 22.0], [55.0, 17.0], [50.0, 12.0], [46.0, 11.0], [44.0, 12.0], [43.0, 14.0], [40.0, 18.0], [35.0, 28.0], [33.0, 25.0], [31.5, 22.0], [30.5, 22.0], [29.0, 27.0], [25.1, 31.3], [25.1, 29.0], [15.0, 29.0], [10.0, 30.0], [-5.5, 35.8]]]
      },
      {
        name: "Persian",
        family: "PERS",
        color: "#EC407A",
        desc: "Persian thrives despite Mongol devastation — Rumi, Hafiz, Sa'di. The court and literary language of the Ilkhanate and Timurid successors. The Mongol rulers adopted Persian culture.",
        coords: [[[48.0, 35.0], [48.5, 39.0], [50.5, 37.0], [52.0, 36.6], [54.0, 37.0], [58.5, 43.5], [62.0, 43.0], [66.0, 40.5], [66.0, 25.5], [60.0, 25.5], [57.0, 26.9], [55.0, 26.5], [52.0, 27.5], [50.0, 29.5], [48.0, 30.5], [48.0, 35.0]]]
      },
      {
        name: "Germanic",
        family: "CELT_GERM",
        color: "#8D6E63",
        desc: "Middle English (Chaucer's era), Middle High German, Scandinavian languages. English increasingly dominant over French in England.",
        coords: [[[3.0, 43.3], [5.0, 43.3], [6.0, 46.0], [6.0, 48.5], [2.0, 49.0], [-1.0, 48.5], [-5.0, 48.5], [-5.0, 51.5], [-1.0, 51.5], [1.5, 52.0], [5.0, 52.1], [8.0, 54.0], [12.0, 56.0], [16.0, 55.1], [18.0, 55.0], [16.0, 50.0], [14.0, 46.5], [12.5, 44.5], [8.0, 44.0], [7.0, 43.7], [5.0, 43.3], [3.0, 43.3]]]
      },
      {
        name: "Slavic",
        family: "SLAV",
        color: "#78909C",
        desc: "Serbian, Bulgarian, Czech, Polish, Russian — all distinct languages with their own literary traditions. Ottoman expansion threatens South Slavic areas.",
        coords: [[[14.0, 46.5], [16.0, 50.0], [18.0, 55.0], [24.0, 55.0], [30.0, 55.0], [30.0, 50.0], [24.0, 48.0], [22.0, 44.0], [22.0, 42.0], [22.0, 38.0], [19.0, 40.0], [18.0, 39.0], [16.5, 38.5], [16.5, 41.0], [17.0, 43.4], [16.0, 44.0], [14.0, 46.5]]]
      }
    ]
  }
];
