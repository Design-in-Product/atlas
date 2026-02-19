// East Asian Political Entities for Historical Atlas
// All coordinates in [longitude, latitude] format
// All polygons are closed (first point = last point)

const EAST_ASIA_ENTITIES = {
  // 500 BCE - Eastern Zhou / Warring States Period
  "-500": [
    {
      name: "Eastern Zhou / Warring States",
      color: "#C62828",
      desc: "Central and northern China during Warring States period. Multiple kingdoms competing for dominance.",
      isMulti: false,
      coords: [[[112, 32], [116, 30], [120, 32], [122, 35], [120, 38], [118, 40], [114, 42], [110, 40], [108, 38], [106, 35], [108, 32], [112, 32]]]
    },
    {
      name: "Yue / Chu States",
      color: "#D32F2F",
      desc: "Southern Chinese states, primarily around Yangtze River region.",
      isMulti: false,
      coords: [[[110, 30], [114, 28], [118, 29], [120, 31], [119, 33], [116, 34], [113, 32], [110, 30]]]
    },
    {
      name: "Magadha",
      color: "#E65100",
      desc: "Dominant Indian kingdom, center of power in the subcontinent.",
      isMulti: false,
      coords: [[[82, 24], [86, 23], [88, 25], [87, 28], [84, 29], [81, 27], [82, 24]]]
    }
  ],

  // 480 BCE - Warring States continues
  "-480": [
    {
      name: "Eastern Zhou / Warring States",
      color: "#C62828",
      desc: "Warring States period continues with multiple competing kingdoms across central and northern China.",
      isMulti: false,
      coords: [[[112, 32], [116, 30], [120, 32], [122, 35], [120, 38], [118, 40], [114, 42], [110, 40], [108, 38], [106, 35], [108, 32], [112, 32]]]
    },
    {
      name: "Yue / Chu States",
      color: "#D32F2F",
      desc: "Southern Chinese states along Yangtze River basin.",
      isMulti: false,
      coords: [[[110, 30], [114, 28], [118, 29], [120, 31], [119, 33], [116, 34], [113, 32], [110, 30]]]
    },
    {
      name: "Magadha",
      color: "#E65100",
      desc: "Premier Indian kingdom maintaining dominance.",
      isMulti: false,
      coords: [[[82, 24], [86, 23], [88, 25], [87, 28], [84, 29], [81, 27], [82, 24]]]
    }
  ],

  // 323 BCE - Warring States ending, Maurya rising
  "-323": [
    {
      name: "Warring States (late)",
      color: "#C62828",
      desc: "Central and northern Chinese states approaching unification under Qin.",
      isMulti: false,
      coords: [[[110, 31], [116, 29], [122, 31], [124, 36], [120, 40], [114, 41], [108, 38], [105, 35], [108, 31], [110, 31]]]
    },
    {
      name: "Yue / Chu",
      color: "#D32F2F",
      desc: "Southern Chinese kingdoms in the Yangtze region.",
      isMulti: false,
      coords: [[[108, 29], [113, 27], [118, 28], [120, 31], [118, 33], [114, 33], [110, 31], [108, 29]]]
    },
    {
      name: "Maurya Empire",
      color: "#E65100",
      desc: "Rising Maurya dynasty beginning expansion across India.",
      isMulti: false,
      coords: [[[70, 23], [88, 22], [90, 27], [88, 30], [82, 32], [76, 31], [72, 28], [70, 23]]]
    },
    {
      name: "Nanda Dynasty",
      color: "#F57C00",
      desc: "Declining power in eastern India before Maurya conquest.",
      isMulti: false,
      coords: [[[82, 23], [86, 22], [88, 25], [87, 28], [83, 29], [81, 26], [82, 23]]]
    }
  ],

  // 200 BCE - Western Han unified, Xiongnu, Maurya collapsed
  "-200": [
    {
      name: "Western Han Dynasty",
      color: "#C62828",
      desc: "Unified Han Dynasty controlling most of China and Korea. Peak territorial extent early Han period.",
      isMulti: false,
      coords: [[[106, 25], [122, 24], [124, 28], [126, 32], [128, 36], [130, 40], [124, 42], [120, 44], [114, 43], [110, 42], [105, 40], [101, 38], [98, 34], [100, 30], [106, 25]]]
    },
    {
      name: "Xiongnu Confederation",
      color: "#5D4037",
      desc: "Nomadic confederation controlling Mongolian steppes and threatening Han borders.",
      isMulti: false,
      coords: [[[100, 42], [120, 41], [125, 45], [120, 50], [105, 50], [95, 47], [100, 42]]]
    },
    {
      name: "Nanyue",
      color: "#D32F2F",
      desc: "Vietnamese-influenced kingdom in southern China and northern Vietnam.",
      isMulti: false,
      coords: [[[108, 23], [115, 22], [118, 24], [117, 28], [113, 29], [109, 27], [108, 23]]]
    },
    {
      name: "Shunga Empire",
      color: "#E65100",
      desc: "Indian dynasty following Maurya collapse, controlling central India.",
      isMulti: false,
      coords: [[[75, 22], [85, 21], [87, 25], [86, 29], [78, 30], [73, 27], [75, 22]]]
    }
  ],

  // 150 BCE - Western Han expanding, Xiongnu strong
  "-150": [
    {
      name: "Western Han Dynasty",
      color: "#C62828",
      desc: "Western Han at height of early territorial expansion.",
      isMulti: false,
      coords: [[[105, 25], [123, 23], [126, 28], [128, 33], [130, 38], [132, 41], [125, 43], [119, 44], [112, 43], [106, 42], [100, 40], [96, 37], [97, 32], [102, 28], [105, 25]]]
    },
    {
      name: "Xiongnu Confederation",
      color: "#5D4037",
      desc: "Strong Xiongnu confederation controlling vast Eurasian steppes.",
      isMulti: false,
      coords: [[[100, 42], [125, 41], [128, 46], [122, 51], [100, 51], [90, 48], [100, 42]]]
    },
    {
      name: "Greco-Bactrian Kingdom",
      color: "#F57C00",
      desc: "Hellenistic kingdom in Central Asia and northwest India.",
      isMulti: false,
      coords: [[[68, 32], [76, 31], [78, 36], [74, 38], [68, 37], [68, 32]]]
    },
    {
      name: "Shunga Empire",
      color: "#E65100",
      desc: "Indian empire in central and northern India.",
      isMulti: false,
      coords: [[[74, 22], [85, 21], [87, 26], [85, 30], [76, 31], [72, 27], [74, 22]]]
    }
  ],

  // 44 BCE - Western Han, declining Xiongnu, Indo-Greek
  "-44": [
    {
      name: "Western Han Dynasty",
      color: "#C62828",
      desc: "Late Western Han period, still extensive territorial control.",
      isMulti: false,
      coords: [[[104, 25], [123, 23], [126, 29], [128, 34], [130, 39], [131, 42], [124, 43], [118, 44], [111, 43], [105, 42], [99, 40], [96, 36], [98, 31], [103, 27], [104, 25]]]
    },
    {
      name: "Xiongnu (weakening)",
      color: "#5D4037",
      desc: "Xiongnu confederation beginning to weaken, fragmenting into factions.",
      isMulti: false,
      coords: [[[101, 43], [123, 42], [126, 47], [120, 51], [100, 51], [92, 48], [101, 43]]]
    },
    {
      name: "Indo-Greek Kingdom",
      color: "#F57C00",
      desc: "Hellenistic kingdom in northwest India and Central Asia.",
      isMulti: false,
      coords: [[[66, 31], [75, 30], [78, 36], [73, 38], [66, 36], [66, 31]]]
    },
    {
      name: "Shunga/Kanva India",
      color: "#E65100",
      desc: "Indian dynasties controlling central and northern India.",
      isMulti: false,
      coords: [[[73, 22], [85, 21], [87, 27], [84, 31], [75, 31], [71, 27], [73, 22]]]
    }
  ],

  // 27 BCE - Western Han, Indo-Scythian rise, Xiongnu splitting
  "-27": [
    {
      name: "Western Han Dynasty",
      color: "#C62828",
      desc: "Western Han Dynasty in late imperial phase with stable borders.",
      isMulti: false,
      coords: [[[104, 25], [123, 24], [126, 30], [128, 35], [129, 40], [131, 43], [124, 44], [118, 45], [111, 44], [105, 43], [99, 41], [96, 37], [98, 31], [103, 27], [104, 25]]]
    },
    {
      name: "Xiongnu (split)",
      color: "#5D4037",
      desc: "Xiongnu splitting into Northern and Southern confederations.",
      isMulti: false,
      coords: [[[101, 44], [120, 43], [125, 48], [118, 52], [100, 52], [92, 49], [101, 44]]]
    },
    {
      name: "Indo-Scythian Kingdom",
      color: "#F57C00",
      desc: "Indo-Scythian rulers controlling northwest India.",
      isMulti: false,
      coords: [[[66, 31], [75, 30], [78, 37], [72, 39], [65, 36], [66, 31]]]
    },
    {
      name: "Shunga/Kanva",
      color: "#E65100",
      desc: "Indian kingdoms in central and eastern India.",
      isMulti: false,
      coords: [[[73, 22], [85, 21], [87, 28], [84, 32], [75, 32], [71, 27], [73, 22]]]
    }
  ],

  // 50 CE - Eastern Han, Kushan rising, Xiongnu split
  "50": [
    {
      name: "Eastern Han Dynasty",
      color: "#C62828",
      desc: "Eastern Han Dynasty controlling most of China with reorganized capitals in Luoyang.",
      isMulti: false,
      coords: [[[105, 25], [123, 24], [126, 30], [128, 36], [129, 41], [131, 44], [124, 45], [118, 46], [110, 45], [104, 43], [99, 41], [96, 37], [98, 31], [104, 27], [105, 25]]]
    },
    {
      name: "Xiongnu (Northern)",
      color: "#5D4037",
      desc: "Northern Xiongnu confederation controlling Mongolian steppes.",
      isMulti: false,
      coords: [[[102, 45], [120, 44], [125, 49], [118, 53], [100, 53], [92, 50], [102, 45]]]
    },
    {
      name: "Xiongnu (Southern - Han vassal)",
      color: "#6D4C41",
      desc: "Southern Xiongnu aligned with Han Dynasty.",
      isMulti: false,
      coords: [[[105, 43], [115, 42], [118, 45], [114, 47], [108, 46], [105, 43]]]
    },
    {
      name: "Kushan Empire",
      color: "#E65100",
      desc: "Kushan Empire rising in Central Asia and beginning Indian expansion.",
      isMulti: false,
      coords: [[[66, 30], [78, 29], [82, 33], [80, 38], [72, 40], [65, 36], [66, 30]]]
    }
  ],

  // 117 CE - Eastern Han peak, Kushan peak, Yayoi Japan
  "117": [
    {
      name: "Eastern Han Dynasty",
      color: "#C62828",
      desc: "Eastern Han at territorial peak under Emperor Hadrian contemporary, controlling vast territories.",
      isMulti: false,
      coords: [[[105, 25], [124, 24], [127, 31], [129, 37], [130, 42], [132, 45], [125, 46], [119, 47], [110, 46], [104, 44], [98, 42], [96, 38], [98, 32], [104, 27], [105, 25]]]
    },
    {
      name: "Northern Xiongnu",
      color: "#5D4037",
      desc: "Northern Xiongnu confederation weakening but still dominant in steppes.",
      isMulti: false,
      coords: [[[103, 46], [120, 45], [126, 50], [119, 54], [100, 54], [91, 51], [103, 46]]]
    },
    {
      name: "Kushan Empire",
      color: "#E65100",
      desc: "Kushan Empire at peak territorial expansion across Central Asia and India.",
      isMulti: false,
      coords: [[[65, 29], [80, 28], [84, 34], [82, 40], [70, 42], [64, 37], [65, 29]]]
    },
    {
      name: "Yayoi Japan (proto-states)",
      color: "#1A237E",
      desc: "Yayoi period Japan with emerging regional kingdoms, not yet unified.",
      isMulti: false,
      coords: [[[131, 31], [138, 32], [142, 34], [142, 38], [139, 42], [135, 43], [132, 39], [131, 31]]]
    }
  ],

  // 200 CE - Late Han/Three Kingdoms emerging, Kushan declining
  "200": [
    {
      name: "Eastern Han Dynasty (late)",
      color: "#C62828",
      desc: "Late Eastern Han nearing collapse, regional warlords rising.",
      isMulti: false,
      coords: [[[106, 26], [123, 25], [126, 32], [128, 38], [129, 43], [131, 46], [124, 47], [118, 48], [110, 47], [104, 45], [98, 43], [96, 39], [98, 33], [105, 28], [106, 26]]]
    },
    {
      name: "Kushan Empire (declining)",
      color: "#E65100",
      desc: "Kushan Empire beginning decline, fragmenting control.",
      isMulti: false,
      coords: [[[66, 30], [80, 29], [83, 35], [81, 40], [70, 41], [65, 37], [66, 30]]]
    },
    {
      name: "Satavahana Empire",
      color: "#EF6C00",
      desc: "Satavahana dynasty controlling Deccan Plateau region.",
      isMulti: false,
      coords: [[[72, 20], [82, 19], [84, 24], [82, 28], [75, 28], [72, 24], [72, 20]]]
    },
    {
      name: "Yayoi Japan",
      color: "#1A237E",
      desc: "Yayoi period with regional kingdoms emerging.",
      isMulti: false,
      coords: [[[131, 31], [138, 33], [142, 35], [142, 39], [139, 43], [135, 44], [132, 40], [131, 31]]]
    }
  ],

  // 250 CE - Three Kingdoms (Wei, Shu, Wu), Gupta emerging
  "250": [
    {
      name: "Wei Kingdom",
      color: "#C62828",
      desc: "Northern kingdom during Three Kingdoms period, controlling northern China.",
      isMulti: false,
      coords: [[[108, 33], [122, 32], [124, 37], [120, 41], [112, 42], [108, 39], [108, 33]]]
    },
    {
      name: "Shu Kingdom",
      color: "#D32F2F",
      desc: "Western kingdom during Three Kingdoms period, controlling Sichuan and southwest.",
      isMulti: false,
      coords: [[[102, 28], [110, 27], [112, 32], [110, 36], [104, 36], [102, 32], [102, 28]]]
    },
    {
      name: "Wu Kingdom",
      color: "#E53935",
      desc: "Southern kingdom during Three Kingdoms period, controlling Yangtze region.",
      isMulti: false,
      coords: [[[112, 28], [122, 27], [124, 32], [122, 37], [114, 37], [112, 32], [112, 28]]]
    },
    {
      name: "Kushan (remnant)",
      color: "#F57C00",
      desc: "Kushan territories greatly reduced and fragmenting.",
      isMulti: false,
      coords: [[[68, 32], [78, 31], [80, 36], [76, 39], [69, 38], [68, 32]]]
    },
    {
      name: "Gupta Empire (emerging)",
      color: "#E65100",
      desc: "Gupta dynasty beginning expansion from Magadha heartland.",
      isMulti: false,
      coords: [[[82, 24], [86, 23], [88, 27], [86, 30], [81, 30], [82, 24]]]
    },
    {
      name: "Yayoi/Early Yamato Japan",
      color: "#1A237E",
      desc: "Yamato kingdom emerging and consolidating power.",
      isMulti: false,
      coords: [[[131, 31], [138, 33], [142, 36], [142, 40], [139, 44], [135, 45], [132, 41], [131, 31]]]
    }
  ],

  // 300 CE - Western Jin, Kushan declining, Gupta rising
  "300": [
    {
      name: "Western Jin Dynasty",
      color: "#C62828",
      desc: "Western Jin briefly reunifying China after Three Kingdoms period.",
      isMulti: false,
      coords: [[[105, 26], [123, 25], [126, 32], [128, 38], [130, 42], [131, 45], [124, 46], [118, 47], [110, 46], [104, 44], [98, 42], [96, 38], [98, 32], [104, 28], [105, 26]]]
    },
    {
      name: "Kushan (declining)",
      color: "#F57C00",
      desc: "Kushan territories much reduced and fragmenting.",
      isMulti: false,
      coords: [[[70, 33], [77, 32], [79, 37], [76, 39], [71, 38], [70, 33]]]
    },
    {
      name: "Gupta Empire",
      color: "#E65100",
      desc: "Gupta Empire expanding and consolidating power in India.",
      isMulti: false,
      coords: [[[80, 23], [87, 22], [89, 27], [87, 32], [79, 32], [78, 27], [80, 23]]]
    },
    {
      name: "Yamato Kingdom",
      color: "#1A237E",
      desc: "Yamato kingdom consolidating control over Japanese islands.",
      isMulti: false,
      coords: [[[131, 31], [138, 33], [142, 37], [142, 41], [139, 45], [135, 46], [132, 42], [131, 31]]]
    }
  ],

  // 350 CE - Eastern Jin + Sixteen Kingdoms, Gupta expanding
  "350": [
    {
      name: "Eastern Jin Dynasty",
      color: "#C62828",
      desc: "Eastern Jin controlling southern China from capital at Nanjing.",
      isMulti: false,
      coords: [[[113, 27], [123, 26], [125, 32], [124, 37], [118, 38], [113, 36], [113, 27]]]
    },
    {
      name: "Sixteen Kingdoms (Northern China)",
      color: "#D32F2F",
      desc: "Multiple non-Han states controlling fragmented northern China.",
      isMulti: false,
      coords: [[[105, 36], [122, 35], [124, 40], [120, 43], [110, 44], [105, 41], [105, 36]]]
    },
    {
      name: "Gupta Empire",
      color: "#E65100",
      desc: "Gupta Empire at expanding territorial height across India.",
      isMulti: false,
      coords: [[[75, 21], [88, 20], [90, 28], [88, 33], [76, 33], [74, 27], [75, 21]]]
    },
    {
      name: "Yamato Kingdom",
      color: "#1A237E",
      desc: "Yamato kingdom solidifying control over Japanese islands.",
      isMulti: false,
      coords: [[[131, 31], [138, 33], [142, 38], [142, 42], [139, 46], [135, 47], [132, 43], [131, 31]]]
    }
  ],

  // 395 CE - Eastern Jin + Northern Wei emerging, Gupta at peak
  "395": [
    {
      name: "Eastern Jin Dynasty",
      color: "#C62828",
      desc: "Eastern Jin controlling southern China with capital at Nanjing.",
      isMulti: false,
      coords: [[[113, 27], [123, 26], [125, 33], [124, 38], [118, 39], [113, 37], [113, 27]]]
    },
    {
      name: "Northern Wei (early)",
      color: "#D32F2F",
      desc: "Northern Wei dynasty emerging and consolidating northern China.",
      isMulti: false,
      coords: [[[105, 37], [122, 36], [124, 41], [120, 44], [110, 45], [105, 42], [105, 37]]]
    },
    {
      name: "Gupta Empire (peak)",
      color: "#E65100",
      desc: "Gupta Empire at peak territorial and cultural height.",
      isMulti: false,
      coords: [[[74, 20], [88, 19], [90, 28], [89, 34], [76, 34], [73, 27], [74, 20]]]
    },
    {
      name: "Yamato Kingdom",
      color: "#1A237E",
      desc: "Yamato kingdom firmly controlling Japanese islands.",
      isMulti: false,
      coords: [[[131, 31], [138, 33], [142, 39], [142, 43], [139, 47], [135, 48], [132, 44], [131, 31]]]
    }
  ],

  // 476 CE - Northern Wei + Liu Song, Gupta declining, Yamato, Goguryeo/Baekje/Silla Korea
  "476": [
    {
      name: "Northern Wei Dynasty",
      color: "#C62828",
      desc: "Northern Wei controlling northern China after Eastern Jin collapse.",
      isMulti: false,
      coords: [[[105, 37], [122, 36], [124, 42], [120, 45], [110, 46], [105, 43], [105, 37]]]
    },
    {
      name: "Liu Song Dynasty",
      color: "#D32F2F",
      desc: "Liu Song controlling southern China from Nanjing.",
      isMulti: false,
      coords: [[[113, 27], [123, 26], [125, 33], [124, 39], [118, 40], [113, 38], [113, 27]]]
    },
    {
      name: "Goguryeo Kingdom",
      color: "#2E7D32",
      desc: "Goguryeo controlling Manchuria and northern Korean peninsula.",
      isMulti: false,
      coords: [[[124, 39], [130, 38], [132, 42], [130, 46], [125, 47], [124, 43], [124, 39]]]
    },
    {
      name: "Baekje Kingdom",
      color: "#388E3C",
      desc: "Baekje controlling western Korean peninsula.",
      isMulti: false,
      coords: [[[125, 36], [128, 36], [129, 39], [128, 42], [125, 41], [125, 36]]]
    },
    {
      name: "Silla Kingdom",
      color: "#43A047",
      desc: "Silla controlling southeastern Korean peninsula.",
      isMulti: false,
      coords: [[[128, 36], [130, 36], [131, 39], [130, 43], [128, 43], [128, 36]]]
    },
    {
      name: "Gupta Empire (declining)",
      color: "#E65100",
      desc: "Gupta Empire declining and fragmenting after peak.",
      isMulti: false,
      coords: [[[76, 21], [86, 20], [88, 27], [86, 32], [78, 32], [76, 27], [76, 21]]]
    },
    {
      name: "Yamato Kingdom",
      color: "#1A237E",
      desc: "Yamato kingdom controlling most of Japanese islands.",
      isMulti: false,
      coords: [[[131, 31], [138, 34], [142, 40], [142, 44], [139, 48], [135, 49], [132, 45], [131, 31]]]
    }
  ],

  // 530 CE - Northern/Southern dynasties, post-Gupta India, Three Kingdoms Korea
  "530": [
    {
      name: "Eastern Wei Dynasty",
      color: "#C62828",
      desc: "Eastern Wei controlling northern China.",
      isMulti: false,
      coords: [[[105, 37], [122, 36], [124, 42], [120, 45], [110, 46], [105, 43], [105, 37]]]
    },
    {
      name: "Liang Dynasty",
      color: "#D32F2F",
      desc: "Liang Dynasty controlling southern China.",
      isMulti: false,
      coords: [[[113, 27], [123, 26], [125, 34], [124, 40], [118, 41], [113, 39], [113, 27]]]
    },
    {
      name: "Goguryeo Kingdom",
      color: "#2E7D32",
      desc: "Goguryeo at height controlling Manchuria and northern Korea.",
      isMulti: false,
      coords: [[[123, 39], [131, 38], [133, 43], [131, 48], [124, 49], [123, 44], [123, 39]]]
    },
    {
      name: "Baekje Kingdom",
      color: "#388E3C",
      desc: "Baekje controlling western Korean peninsula.",
      isMulti: false,
      coords: [[[125, 36], [128, 36], [129, 40], [128, 43], [125, 42], [125, 36]]]
    },
    {
      name: "Silla Kingdom",
      color: "#43A047",
      desc: "Silla controlling southeastern Korean peninsula.",
      isMulti: false,
      coords: [[[128, 36], [131, 36], [132, 40], [131, 44], [128, 44], [128, 36]]]
    },
    {
      name: "Post-Gupta Kingdoms",
      color: "#EF6C00",
      desc: "Indian subcontinent fragmenting after Gupta collapse.",
      isMulti: false,
      coords: [[[73, 20], [87, 19], [89, 28], [87, 33], [75, 33], [73, 27], [73, 20]]]
    },
    {
      name: "Yamato / Asuka Japan",
      color: "#1A237E",
      desc: "Yamato kingdom transitioning to Asuka period.",
      isMulti: false,
      coords: [[[131, 31], [138, 34], [142, 41], [142, 45], [139, 49], [135, 50], [132, 46], [131, 31]]]
    }
  ],

  // 570 CE - Northern Zhou/Qi + Chen, Göktürk Khaganate, Three Kingdoms Korea
  "570": [
    {
      name: "Northern Zhou Dynasty",
      color: "#C62828",
      desc: "Northern Zhou controlling parts of northern China.",
      isMulti: false,
      coords: [[[106, 37], [118, 36], [120, 41], [116, 44], [110, 45], [106, 42], [106, 37]]]
    },
    {
      name: "Northern Qi Dynasty",
      color: "#D32F2F",
      desc: "Northern Qi controlling northeastern China.",
      isMulti: false,
      coords: [[[118, 37], [122, 36], [124, 41], [120, 44], [118, 42], [118, 37]]]
    },
    {
      name: "Chen Dynasty",
      color: "#E53935",
      desc: "Chen Dynasty controlling southern China.",
      isMulti: false,
      coords: [[[113, 27], [123, 26], [125, 34], [124, 40], [118, 41], [113, 39], [113, 27]]]
    },
    {
      name: "Göktürk Khaganate",
      color: "#5D4037",
      desc: "Göktürk Khaganate controlling vast Eurasian steppes.",
      isMulti: false,
      coords: [[[95, 43], [125, 42], [128, 48], [120, 54], [95, 54], [85, 50], [95, 43]]]
    },
    {
      name: "Goguryeo Kingdom",
      color: "#2E7D32",
      desc: "Goguryeo controlling Manchuria and northern Korea.",
      isMulti: false,
      coords: [[[123, 39], [131, 38], [133, 44], [131, 49], [124, 50], [123, 45], [123, 39]]]
    },
    {
      name: "Baekje Kingdom",
      color: "#388E3C",
      desc: "Baekje controlling western Korean peninsula.",
      isMulti: false,
      coords: [[[125, 36], [128, 36], [129, 41], [128, 44], [125, 43], [125, 36]]]
    },
    {
      name: "Silla Kingdom",
      color: "#43A047",
      desc: "Silla controlling southeastern Korean peninsula.",
      isMulti: false,
      coords: [[[128, 36], [131, 36], [132, 41], [131, 45], [128, 45], [128, 36]]]
    },
    {
      name: "Asuka Japan",
      color: "#1A237E",
      desc: "Asuka period with Yamato kingdom consolidating.",
      isMulti: false,
      coords: [[[131, 31], [138, 34], [142, 42], [142, 46], [139, 50], [135, 51], [132, 47], [131, 31]]]
    }
  ],

  // 632 CE - Tang Dynasty unified, Göktürk remnants, Unified Silla forming, Harsha's Empire
  "632": [
    {
      name: "Tang Dynasty",
      color: "#C62828",
      desc: "Early Tang Dynasty after unification, controlling most of China.",
      isMulti: false,
      coords: [[[104, 25], [124, 24], [127, 31], [129, 37], [131, 42], [133, 46], [126, 47], [119, 48], [110, 47], [103, 45], [97, 42], [96, 37], [98, 31], [103, 27], [104, 25]]]
    },
    {
      name: "Göktürk Khaganate (fragmented)",
      color: "#5D4037",
      desc: "Göktürk territories fragmenting, Eastern and Western divisions.",
      isMulti: false,
      coords: [[[98, 44], [122, 43], [126, 49], [118, 54], [98, 54], [88, 51], [98, 44]]]
    },
    {
      name: "Goguryeo Kingdom",
      color: "#2E7D32",
      desc: "Goguryeo at height controlling Manchuria and northern Korea.",
      isMulti: false,
      coords: [[[123, 40], [132, 39], [134, 45], [132, 50], [124, 51], [123, 46], [123, 40]]]
    },
    {
      name: "Baekje Kingdom",
      color: "#388E3C",
      desc: "Baekje controlling western Korean peninsula.",
      isMulti: false,
      coords: [[[125, 36], [128, 37], [129, 42], [128, 45], [125, 44], [125, 36]]]
    },
    {
      name: "Silla Kingdom (Unified Silla forming)",
      color: "#43A047",
      desc: "Silla expanding and beginning to unify Korean peninsula.",
      isMulti: false,
      coords: [[[128, 36], [131, 36], [132, 42], [131, 46], [128, 46], [128, 36]]]
    },
    {
      name: "Asuka Japan",
      color: "#1A237E",
      desc: "Asuka period with Buddhist culture flourishing.",
      isMulti: false,
      coords: [[[131, 31], [138, 34], [142, 43], [142, 47], [139, 51], [135, 52], [132, 48], [131, 31]]]
    },
    {
      name: "Harsha's Empire",
      color: "#E65100",
      desc: "Harsha Empire controlling large parts of northern and central India.",
      isMulti: false,
      coords: [[[73, 21], [88, 20], [91, 28], [89, 34], [76, 34], [72, 27], [73, 21]]]
    }
  ],

  // 680 CE - Tang Dynasty peak, Tibet, Unified Silla, Nara Japan emerging
  "680": [
    {
      name: "Tang Dynasty",
      color: "#C62828",
      desc: "Tang Dynasty at height of territorial expansion under Wu Zetian period.",
      isMulti: false,
      coords: [[[103, 25], [125, 24], [128, 31], [131, 38], [133, 43], [135, 47], [128, 48], [120, 49], [110, 48], [102, 46], [96, 43], [95, 38], [97, 32], [102, 27], [103, 25]]]
    },
    {
      name: "Tibetan Empire",
      color: "#795548",
      desc: "Tibetan Empire (Tubo) consolidating control over Tibetan plateau.",
      isMulti: false,
      coords: [[[88, 30], [98, 29], [100, 35], [96, 38], [86, 37], [85, 33], [88, 30]]]
    },
    {
      name: "Unified Silla",
      color: "#2E7D32",
      desc: "Silla unifying Korean peninsula, pushing out Goguryeo and Baekje.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 43], [131, 47], [125, 47], [125, 35]]]
    },
    {
      name: "Nara Japan (emerging)",
      color: "#1A237E",
      desc: "Nara period beginning with consolidated state emerging.",
      isMulti: false,
      coords: [[[131, 31], [138, 34], [142, 44], [142, 48], [139, 52], [135, 53], [132, 49], [131, 31]]]
    },
    {
      name: "Pala Empire",
      color: "#EF6C00",
      desc: "Pala Empire dominating eastern India.",
      isMulti: false,
      coords: [[[80, 22], [88, 21], [90, 27], [88, 31], [80, 31], [80, 22]]]
    }
  ],

  // 750 CE - Tang Dynasty past peak, Tibet, Nanzhao, Unified Silla, Nara Japan, Pala/Rashtrakuta India
  "750": [
    {
      name: "Tang Dynasty",
      color: "#C62828",
      desc: "Tang Dynasty continuing but beginning to decline after An Lushan period.",
      isMulti: false,
      coords: [[[104, 25], [124, 24], [127, 31], [129, 38], [131, 44], [133, 48], [126, 49], [119, 50], [109, 49], [102, 47], [96, 44], [95, 39], [97, 33], [103, 27], [104, 25]]]
    },
    {
      name: "Tibetan Empire",
      color: "#795548",
      desc: "Tibetan Empire at height, competing with Tang for Central Asian control.",
      isMulti: false,
      coords: [[[87, 29], [99, 28], [101, 36], [97, 39], [85, 38], [84, 33], [87, 29]]]
    },
    {
      name: "Nanzhao Kingdom",
      color: "#00696C",
      desc: "Nanzhao Kingdom rising in Yunnan and Southeast Asia.",
      isMulti: false,
      coords: [[[100, 23], [108, 22], [110, 27], [107, 31], [102, 30], [100, 23]]]
    },
    {
      name: "Unified Silla",
      color: "#2E7D32",
      desc: "Unified Silla ruling entire Korean peninsula.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 44], [131, 48], [125, 48], [125, 35]]]
    },
    {
      name: "Nara Japan",
      color: "#1A237E",
      desc: "Nara period with centralized Japanese state.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 45], [142, 49], [139, 53], [135, 54], [132, 50], [131, 31]]]
    },
    {
      name: "Pala Empire",
      color: "#EF6C00",
      desc: "Pala Empire dominant in eastern and central India.",
      isMulti: false,
      coords: [[[79, 21], [88, 20], [90, 28], [88, 32], [79, 32], [79, 21]]]
    },
    {
      name: "Rashtrakuta Empire",
      color: "#F57C00",
      desc: "Rashtrakuta Empire controlling Deccan Plateau.",
      isMulti: false,
      coords: [[[73, 18], [82, 17], [84, 24], [82, 28], [72, 28], [73, 18]]]
    }
  ],

  // 850 CE - Late Tang fragmenting, Tibet declining, Nanzhao, Unified Silla, Heian Japan, Pala/Chola India
  "850": [
    {
      name: "Tang Dynasty (late/fragmenting)",
      color: "#C62828",
      desc: "Late Tang Dynasty fragmenting with regional warlords rising.",
      isMulti: false,
      coords: [[[105, 26], [123, 25], [126, 32], [128, 39], [130, 45], [132, 49], [125, 50], [118, 51], [108, 50], [101, 48], [96, 45], [95, 40], [98, 34], [104, 28], [105, 26]]]
    },
    {
      name: "Tibetan Empire (declining)",
      color: "#795548",
      desc: "Tibetan Empire fragmenting after decline from peak.",
      isMulti: false,
      coords: [[[88, 30], [98, 29], [100, 36], [96, 39], [86, 38], [85, 33], [88, 30]]]
    },
    {
      name: "Nanzhao Kingdom",
      color: "#00696C",
      desc: "Nanzhao Kingdom expanding control in Southeast Asia.",
      isMulti: false,
      coords: [[[99, 22], [109, 21], [111, 28], [108, 32], [101, 31], [99, 22]]]
    },
    {
      name: "Unified Silla",
      color: "#2E7D32",
      desc: "Unified Silla maintaining control of Korean peninsula.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 45], [131, 49], [125, 49], [125, 35]]]
    },
    {
      name: "Heian Japan",
      color: "#1A237E",
      desc: "Heian period with consolidated Japanese culture.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 46], [142, 50], [139, 54], [135, 55], [132, 51], [131, 31]]]
    },
    {
      name: "Pala Empire (declining)",
      color: "#EF6C00",
      desc: "Pala Empire declining in eastern India.",
      isMulti: false,
      coords: [[[80, 22], [88, 21], [89, 28], [87, 32], [80, 32], [80, 22]]]
    },
    {
      name: "Chola Empire",
      color: "#E65100",
      desc: "Chola Empire rising in southern India.",
      isMulti: false,
      coords: [[[76, 17], [85, 16], [87, 24], [84, 28], [74, 27], [76, 17]]]
    }
  ],

  // 900 CE - Five Dynasties & Ten Kingdoms, Khitan Liao, Goryeo Korea, Heian Japan, Chola India
  "900": [
    {
      name: "Five Dynasties & Ten Kingdoms",
      color: "#C62828",
      desc: "China fragmenting into Five Dynasties in north and Ten Kingdoms in south.",
      isMulti: false,
      coords: [[[105, 25], [124, 24], [127, 32], [129, 39], [131, 45], [133, 49], [126, 50], [118, 51], [108, 50], [101, 48], [96, 45], [95, 39], [98, 33], [104, 27], [105, 25]]]
    },
    {
      name: "Khitan Liao Empire",
      color: "#5D4037",
      desc: "Khitan Liao Empire consolidating control over Manchuria and northern steppes.",
      isMulti: false,
      coords: [[[112, 40], [128, 39], [130, 44], [128, 50], [115, 51], [112, 46], [112, 40]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom consolidating control of Korean peninsula.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 46], [131, 50], [125, 50], [125, 35]]]
    },
    {
      name: "Heian Japan",
      color: "#1A237E",
      desc: "Heian period at height with flourishing aristocratic culture.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 47], [142, 51], [139, 55], [135, 56], [132, 52], [131, 31]]]
    },
    {
      name: "Chola Empire",
      color: "#E65100",
      desc: "Chola Empire at height of expansion in southern India.",
      isMulti: false,
      coords: [[[75, 16], [85, 15], [87, 25], [85, 29], [73, 28], [75, 16]]]
    }
  ],

  // 1000 CE - Song Dynasty, Liao, Xi Xia, Goryeo Korea, Heian Japan, Chola India
  "1000": [
    {
      name: "Northern Song Dynasty",
      color: "#C62828",
      desc: "Northern Song Dynasty controlling central and southern China.",
      isMulti: false,
      coords: [[[105, 27], [121, 26], [123, 34], [122, 40], [118, 43], [110, 43], [104, 40], [101, 36], [102, 31], [105, 27]]]
    },
    {
      name: "Khitan Liao Empire",
      color: "#5D4037",
      desc: "Khitan Liao controlling northern territories.",
      isMulti: false,
      coords: [[[112, 40], [128, 39], [130, 45], [128, 51], [115, 52], [112, 47], [112, 40]]]
    },
    {
      name: "Xi Xia Kingdom",
      color: "#6D4C41",
      desc: "Xi Xia Tangut kingdom controlling northwest China.",
      isMulti: false,
      coords: [[[100, 37], [110, 36], [112, 41], [108, 43], [100, 42], [100, 37]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom ruling Korean peninsula with cultural flourishing.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 46], [131, 50], [125, 50], [125, 35]]]
    },
    {
      name: "Heian Japan",
      color: "#1A237E",
      desc: "Heian period continuing with aristocratic dominance.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 48], [142, 52], [139, 56], [135, 57], [132, 53], [131, 31]]]
    },
    {
      name: "Chola Empire",
      color: "#E65100",
      desc: "Chola Empire at peak controlling southern India and maritime regions.",
      isMulti: false,
      coords: [[[75, 16], [85, 15], [87, 26], [85, 30], [73, 29], [75, 16]]]
    }
  ],

  // 1071 CE - Northern Song, Liao, Xi Xia, Goryeo, Heian Japan, Chola
  "1071": [
    {
      name: "Northern Song Dynasty",
      color: "#C62828",
      desc: "Northern Song controlling central and southern China at stable extent.",
      isMulti: false,
      coords: [[[105, 27], [121, 26], [123, 35], [122, 41], [118, 44], [110, 44], [104, 41], [101, 37], [102, 31], [105, 27]]]
    },
    {
      name: "Khitan Liao Empire",
      color: "#5D4037",
      desc: "Khitan Liao Empire at height of power.",
      isMulti: false,
      coords: [[[112, 40], [128, 39], [130, 46], [128, 52], [115, 53], [112, 48], [112, 40]]]
    },
    {
      name: "Xi Xia Kingdom",
      color: "#6D4C41",
      desc: "Xi Xia Kingdom controlling northwest territories.",
      isMulti: false,
      coords: [[[100, 37], [110, 36], [112, 41], [108, 43], [100, 42], [100, 37]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom flourishing with Celadon culture.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 47], [131, 51], [125, 51], [125, 35]]]
    },
    {
      name: "Heian Japan",
      color: "#1A237E",
      desc: "Heian period nearing end of aristocratic dominance.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 49], [142, 53], [139, 57], [135, 58], [132, 54], [131, 31]]]
    },
    {
      name: "Chola Empire (declining)",
      color: "#E65100",
      desc: "Chola Empire beginning to decline from peak.",
      isMulti: false,
      coords: [[[75, 16], [85, 15], [87, 26], [85, 30], [73, 29], [75, 16]]]
    }
  ],

  // 1100 CE - Northern Song weakening, Jin rising, Xi Xia, Goryeo, Heian Japan, Khmer Empire
  "1100": [
    {
      name: "Northern Song Dynasty",
      color: "#C62828",
      desc: "Northern Song about to lose territories to Jin, maintaining southern control.",
      isMulti: false,
      coords: [[[105, 28], [120, 27], [122, 35], [121, 41], [116, 43], [109, 43], [105, 41], [102, 37], [103, 31], [105, 28]]]
    },
    {
      name: "Jurchen Jin Empire (early)",
      color: "#D32F2F",
      desc: "Jurchen Jin Empire beginning to rise in Manchuria.",
      isMulti: false,
      coords: [[[115, 42], [128, 41], [130, 47], [128, 53], [116, 54], [115, 48], [115, 42]]]
    },
    {
      name: "Xi Xia Kingdom",
      color: "#6D4C41",
      desc: "Xi Xia Kingdom still controlling northwest China.",
      isMulti: false,
      coords: [[[100, 37], [110, 36], [112, 42], [108, 44], [100, 43], [100, 37]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom with cultural peak.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 47], [131, 51], [125, 51], [125, 35]]]
    },
    {
      name: "Heian Japan",
      color: "#1A237E",
      desc: "Heian period ending, transition to Kamakura period.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 50], [142, 54], [139, 58], [135, 59], [132, 55], [131, 31]]]
    },
    {
      name: "Khmer Empire",
      color: "#00796B",
      desc: "Khmer Empire controlling Southeast Asia with Angkor as capital.",
      isMulti: false,
      coords: [[[102, 12], [110, 11], [112, 18], [110, 22], [102, 21], [102, 12]]]
    }
  ],

  // 1200 CE - Southern Song, Jin, Xi Xia, Mongol Empire rising, Goryeo, Kamakura Japan, Khmer, Delhi Sultanate
  "1200": [
    {
      name: "Southern Song Dynasty",
      color: "#C62828",
      desc: "Southern Song controlling southern China after losing north to Jin.",
      isMulti: false,
      coords: [[[105, 27], [120, 27], [122, 35], [121, 41], [116, 43], [109, 43], [105, 41], [102, 36], [103, 30], [105, 27]]]
    },
    {
      name: "Jurchen Jin Dynasty",
      color: "#D32F2F",
      desc: "Jurchen Jin Dynasty controlling northern China.",
      isMulti: false,
      coords: [[[110, 37], [128, 36], [130, 43], [128, 52], [116, 53], [110, 48], [110, 37]]]
    },
    {
      name: "Xi Xia Kingdom",
      color: "#6D4C41",
      desc: "Xi Xia Kingdom controlling northwest territory.",
      isMulti: false,
      coords: [[[100, 37], [110, 36], [112, 42], [108, 44], [100, 43], [100, 37]]]
    },
    {
      name: "Mongol Empire (early)",
      color: "#5D4037",
      desc: "Mongol Empire beginning expansion under Genghis Khan.",
      isMulti: false,
      coords: [[[100, 44], [125, 43], [128, 50], [120, 56], [100, 56], [85, 52], [100, 44]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom under pressure but maintaining independence.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 48], [131, 52], [125, 52], [125, 35]]]
    },
    {
      name: "Kamakura Japan",
      color: "#1A237E",
      desc: "Kamakura shogunate with samurai military government.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 51], [142, 55], [139, 59], [135, 60], [132, 56], [131, 31]]]
    },
    {
      name: "Khmer Empire",
      color: "#00796B",
      desc: "Khmer Empire controlling Southeast Asia.",
      isMulti: false,
      coords: [[[102, 12], [110, 11], [112, 19], [110, 23], [102, 22], [102, 12]]]
    },
    {
      name: "Delhi Sultanate (early)",
      color: "#E65100",
      desc: "Delhi Sultanate beginning control of northern India.",
      isMulti: false,
      coords: [[[74, 26], [84, 25], [86, 32], [82, 35], [74, 34], [74, 26]]]
    }
  ],

  // 1300 CE - Yuan Dynasty, Chagatai Khanate, Goryeo vassal, Kamakura Japan, Sukhothai, Delhi Sultanate
  "1300": [
    {
      name: "Yuan Dynasty",
      color: "#C62828",
      desc: "Yuan Dynasty (Mongol) controlling all of China and vast territories.",
      isMulti: false,
      coords: [[[103, 25], [130, 24], [133, 32], [135, 40], [135, 47], [130, 52], [120, 53], [110, 52], [100, 49], [95, 45], [95, 37], [97, 30], [103, 25]]]
    },
    {
      name: "Chagatai Khanate",
      color: "#6D4C41",
      desc: "Chagatai Khanate controlling Central Asia.",
      isMulti: false,
      coords: [[[78, 40], [98, 39], [100, 45], [96, 50], [78, 50], [70, 46], [78, 40]]]
    },
    {
      name: "Golden Horde (eastern territories)",
      color: "#795548",
      desc: "Golden Horde territories in western Eurasian steppes.",
      isMulti: false,
      coords: [[[70, 46], [95, 45], [97, 51], [88, 56], [65, 56], [60, 50], [70, 46]]]
    },
    {
      name: "Goryeo Kingdom (Mongol vassal)",
      color: "#2E7D32",
      desc: "Goryeo Kingdom under Mongol Yuan control.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 48], [131, 52], [125, 52], [125, 35]]]
    },
    {
      name: "Kamakura Japan",
      color: "#1A237E",
      desc: "Kamakura shogunate continuing samurai rule.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 52], [142, 56], [139, 60], [135, 61], [132, 57], [131, 31]]]
    },
    {
      name: "Sukhothai Kingdom",
      color: "#00796B",
      desc: "Sukhothai Kingdom rising in Southeast Asia.",
      isMulti: false,
      coords: [[[100, 13], [108, 12], [110, 20], [106, 24], [100, 23], [100, 13]]]
    },
    {
      name: "Delhi Sultanate",
      color: "#E65100",
      desc: "Delhi Sultanate consolidating control of large portions of India.",
      isMulti: false,
      coords: [[[74, 25], [86, 24], [88, 33], [84, 37], [74, 36], [74, 25]]]
    }
  ],

  // 1350 CE - Yuan collapsing, Ming rising, Chagatai fragmenting, Goryeo, Muromachi Japan, Majapahit, Delhi
  "1350": [
    {
      name: "Ming Dynasty (early)",
      color: "#C62828",
      desc: "Ming Dynasty rising and consolidating control over China, Yuan collapsing.",
      isMulti: false,
      coords: [[[104, 26], [128, 25], [131, 33], [133, 41], [133, 48], [128, 52], [118, 53], [108, 52], [100, 49], [97, 45], [97, 37], [99, 31], [104, 26]]]
    },
    {
      name: "Yuan Dynasty (remnant)",
      color: "#D32F2F",
      desc: "Yuan Dynasty territories fragmenting and shrinking.",
      isMulti: false,
      coords: [[[110, 45], [130, 44], [132, 50], [120, 53], [110, 52], [110, 45]]]
    },
    {
      name: "Chagatai Khanate (fragmenting)",
      color: "#6D4C41",
      desc: "Chagatai Khanate fragmenting into smaller khanates.",
      isMulti: false,
      coords: [[[78, 40], [98, 39], [100, 46], [96, 51], [78, 51], [70, 47], [78, 40]]]
    },
    {
      name: "Goryeo Kingdom",
      color: "#2E7D32",
      desc: "Goryeo Kingdom maintaining control under Mongol pressure.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 49], [131, 53], [125, 53], [125, 35]]]
    },
    {
      name: "Muromachi Japan",
      color: "#1A237E",
      desc: "Muromachi period with Ashikaga shogunate.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 53], [142, 57], [139, 61], [135, 62], [132, 58], [131, 31]]]
    },
    {
      name: "Majapahit Empire",
      color: "#00796B",
      desc: "Majapahit Empire controlling Southeast Asian maritime regions.",
      isMulti: false,
      coords: [[[108, 10], [120, 9], [122, 20], [118, 24], [108, 23], [108, 10]]]
    },
    {
      name: "Delhi Sultanate / Bahmani",
      color: "#E65100",
      desc: "Delhi Sultanate and Bahmani Sultanate controlling India.",
      isMulti: false,
      coords: [[[72, 24], [86, 23], [88, 34], [84, 38], [72, 37], [72, 24]]]
    }
  ],

  // 1453 CE - Ming Dynasty, Joseon Korea, Muromachi Japan, Timurid remnants, Ayutthaya, Majapahit, Bahmani/Delhi, Vijayanagara
  "1453": [
    {
      name: "Ming Dynasty",
      color: "#C62828",
      desc: "Ming Dynasty at height of power, controlling all of China with cosmopolitan culture.",
      isMulti: false,
      coords: [[[104, 26], [128, 25], [131, 33], [134, 42], [134, 49], [128, 53], [118, 54], [108, 53], [100, 50], [97, 46], [97, 38], [99, 31], [104, 26]]]
    },
    {
      name: "Joseon Korea",
      color: "#2E7D32",
      desc: "Joseon Korea (Chosun) dynasty unified and consolidating.",
      isMulti: false,
      coords: [[[125, 35], [132, 35], [133, 49], [131, 53], [125, 53], [125, 35]]]
    },
    {
      name: "Muromachi Japan",
      color: "#1A237E",
      desc: "Muromachi period with regional warlord power structure.",
      isMulti: false,
      coords: [[[131, 31], [138, 35], [142, 54], [142, 58], [139, 62], [135, 63], [132, 59], [131, 31]]]
    },
    {
      name: "Timurid Remnants",
      color: "#795548",
      desc: "Timurid dynasty fragmenting into smaller regional powers.",
      isMulti: false,
      coords: [[[68, 35], [80, 34], [82, 40], [78, 44], [68, 43], [68, 35]]]
    },
    {
      name: "Ayutthaya Kingdom",
      color: "#00796B",
      desc: "Ayutthaya Kingdom controlling Siam and Southeast Asia.",
      isMulti: false,
      coords: [[[99, 13], [108, 12], [110, 21], [106, 25], [99, 24], [99, 13]]]
    },
    {
      name: "Majapahit Empire (declining)",
      color: "#006B63",
      desc: "Majapahit Empire declining in Southeast Asia.",
      isMulti: false,
      coords: [[[108, 10], [120, 9], [122, 20], [118, 24], [108, 23], [108, 10]]]
    },
    {
      name: "Delhi Sultanate / Bahmani",
      color: "#E65100",
      desc: "Delhi Sultanate and Bahmani Sultanate fragmenting.",
      isMulti: false,
      coords: [[[72, 24], [86, 23], [88, 34], [84, 38], [72, 37], [72, 24]]]
    },
    {
      name: "Vijayanagara Empire",
      color: "#F57C00",
      desc: "Vijayanagara Empire rising as major Hindu power in southern India.",
      isMulti: false,
      coords: [[[74, 12], [84, 11], [86, 22], [82, 26], [74, 25], [74, 12]]]
    }
  ]
};
