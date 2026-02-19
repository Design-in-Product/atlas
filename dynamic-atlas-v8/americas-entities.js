/**
 * Pre-Columbian American Political Entities for Dynamic Atlas
 * Covers 500 BCE to 1453 CE
 * 29 keyframes documenting the development of American civilizations
 *
 * Note: Coordinates in [longitude, latitude] order (negative longitudes for Western Hemisphere)
 * Polygons are GeoJSON format with rings closed (first point = last point)
 */

const AMERICAS_ENTITIES = {
  // ============ EARLY KEYFRAMES (500-50 BCE) ============

  "-500": [
    {
      name: "Olmec Civilization",
      coords: [[
        [-97.0, 17.5], [-97.0, 18.5], [-96.0, 19.0], [-95.0, 18.5],
        [-94.5, 18.0], [-94.0, 17.5], [-94.5, 17.0], [-95.5, 16.8],
        [-96.5, 16.9], [-97.0, 17.5]
      ]],
      isMulti: false,
      color: "#F44336",
      desc: "Ancient Gulf Coast civilization declining; center at San Lorenzo and La Venta"
    },
    {
      name: "Early Zapotec",
      coords: [[
        [-97.5, 16.0], [-97.0, 16.5], [-96.5, 17.0], [-96.0, 16.8],
        [-96.2, 16.2], [-96.8, 15.8], [-97.3, 15.9], [-97.5, 16.0]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Early period; settling Oaxaca highlands before Monte Albán expansion"
    },
    {
      name: "Chavín Culture",
      coords: [[
        [-78.5, -8.0], [-78.0, -8.2], [-77.0, -8.5], [-76.5, -9.0],
        [-76.8, -10.0], [-77.5, -10.5], [-78.2, -10.2], [-78.5, -9.0],
        [-78.5, -8.0]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Influential highland Andean culture; artistic and religious center"
    }
  ],

  "-480": [
    {
      name: "Olmec Civilization",
      coords: [[
        [-96.8, 17.6], [-96.8, 18.6], [-95.8, 19.1], [-94.8, 18.6],
        [-94.3, 18.1], [-93.8, 17.6], [-94.3, 17.1], [-95.3, 16.9],
        [-96.3, 17.0], [-96.8, 17.6]
      ]],
      isMulti: false,
      color: "#F44336",
      desc: "Declining but still present; facing cultural shift to regional powers"
    },
    {
      name: "Early Zapotec",
      coords: [[
        [-97.6, 16.1], [-97.1, 16.6], [-96.6, 17.1], [-96.1, 16.9],
        [-96.3, 16.3], [-96.9, 15.9], [-97.4, 16.0], [-97.6, 16.1]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Expanding presence in Oaxaca; pre-Monte Albán period"
    },
    {
      name: "Chavín Culture",
      coords: [[
        [-78.4, -7.9], [-77.9, -8.1], [-76.9, -8.4], [-76.4, -8.9],
        [-76.7, -9.9], [-77.4, -10.4], [-78.1, -10.1], [-78.4, -8.9],
        [-78.4, -7.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Continued regional dominance along Pacific and highland Peru"
    }
  ],

  "-323": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-97.8, 15.8], [-97.2, 16.4], [-96.7, 17.2], [-96.1, 17.0],
        [-96.4, 16.2], [-97.0, 15.6], [-97.6, 15.7], [-97.8, 15.8]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Monte Albán founded; becoming major Oaxaca power center"
    },
    {
      name: "Chavín Culture",
      coords: [[
        [-78.3, -7.8], [-77.8, -8.0], [-76.8, -8.3], [-76.3, -8.8],
        [-76.6, -9.8], [-77.3, -10.3], [-78.0, -10.0], [-78.3, -8.8],
        [-78.3, -7.8]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Highland Andean culture still influential but beginning decline"
    }
  ],

  "-200": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-97.9, 15.7], [-97.2, 16.5], [-96.6, 17.3], [-96.0, 17.1],
        [-96.5, 16.1], [-97.1, 15.5], [-97.7, 15.6], [-97.9, 15.7]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Expanding regional power; developing complex state apparatus"
    },
    {
      name: "Chavín Culture (declining)",
      coords: [[
        [-78.2, -7.7], [-77.7, -7.9], [-76.7, -8.2], [-76.2, -8.7],
        [-76.5, -9.7], [-77.2, -10.2], [-77.9, -9.9], [-78.2, -8.7],
        [-78.2, -7.7]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Declining but legacy strong; transitioning to Nazca influence"
    }
  ],

  "-150": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.0, 15.6], [-97.3, 16.6], [-96.5, 17.4], [-95.9, 17.2],
        [-96.6, 16.0], [-97.2, 15.4], [-97.8, 15.5], [-98.0, 15.6]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Dominant regional state in Oaxaca; extensive territory"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-75.5, -14.0], [-75.0, -14.5], [-74.5, -15.5], [-74.2, -16.0],
        [-74.0, -16.5], [-74.5, -16.8], [-75.2, -16.2], [-75.8, -15.0],
        [-75.9, -14.5], [-75.5, -14.0]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Emerging on southern Peru coast; known for ceramics and geoglyphs"
    }
  ],

  "-44": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.1, 15.5], [-97.4, 16.7], [-96.4, 17.5], [-95.8, 17.3],
        [-96.7, 15.9], [-97.3, 15.3], [-97.9, 15.4], [-98.1, 15.5]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Height of Monte Albán influence; peak territorial expansion"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-75.6, -13.9], [-75.1, -14.4], [-74.4, -15.4], [-74.1, -15.9],
        [-73.9, -16.4], [-74.4, -16.9], [-75.3, -16.1], [-75.9, -14.9],
        [-76.0, -14.4], [-75.6, -13.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Established culture creating famous Nazca lines and textiles"
    }
  ],

  "-27": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.2, 15.4], [-97.5, 16.8], [-96.3, 17.6], [-95.7, 17.4],
        [-96.8, 15.8], [-97.4, 15.2], [-98.0, 15.3], [-98.2, 15.4]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Powerful Oaxaca state with extensive administrative system"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-75.7, -13.8], [-75.2, -14.3], [-74.3, -15.3], [-74.0, -15.8],
        [-73.8, -16.3], [-74.3, -17.0], [-75.4, -16.2], [-76.0, -15.0],
        [-76.1, -14.3], [-75.7, -13.8]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Flourishing coastal culture; early Middle Nazca period"
    }
  ],

  // ============ CLASSICAL PERIOD KEYFRAMES (50-550 CE) ============

  "50": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.3, 15.3], [-97.6, 16.9], [-96.2, 17.7], [-95.6, 17.5],
        [-96.9, 15.7], [-97.5, 15.1], [-98.1, 15.2], [-98.3, 15.3]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Classical period zenith; influential across Mesoamerica"
    },
    {
      name: "Teotihuacan (early)",
      coords: [[
        [-99.2, 19.0], [-98.8, 19.8], [-98.0, 20.5], [-97.5, 20.3],
        [-98.2, 19.2], [-98.8, 18.8], [-99.2, 19.0]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Rising power in Central Mexico; beginning expansion"
    },
    {
      name: "Moche Civilization",
      coords: [[
        [-79.8, -5.0], [-79.0, -5.5], [-78.2, -7.0], [-78.8, -8.5],
        [-79.5, -8.2], [-80.2, -7.0], [-80.5, -5.5], [-79.8, -5.0]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Northern Peru coast; sophisticated ceramics and military state"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-75.8, -13.7], [-75.3, -14.2], [-74.2, -15.2], [-73.9, -15.7],
        [-73.7, -16.2], [-74.2, -17.1], [-75.5, -16.3], [-76.1, -15.1],
        [-76.2, -14.2], [-75.8, -13.7]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Peak Nazca II period; extensive artistic production"
    }
  ],

  "117": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.4, 15.2], [-97.7, 17.0], [-96.1, 17.8], [-95.5, 17.6],
        [-97.0, 15.6], [-97.6, 15.0], [-98.2, 15.1], [-98.4, 15.2]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Reaching maximum territorial influence in Oaxaca region"
    },
    {
      name: "Teotihuacan (expanding)",
      coords: [[
        [-99.4, 18.8], [-98.6, 19.9], [-97.8, 20.7], [-97.2, 20.5],
        [-98.4, 19.0], [-99.1, 18.6], [-99.4, 18.8]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Major city-state; pyramid construction and expansion phase"
    },
    {
      name: "Moche Civilization",
      coords: [[
        [-79.9, -4.8], [-79.1, -5.3], [-78.1, -6.8], [-77.9, -8.3],
        [-78.6, -8.4], [-79.6, -7.2], [-80.3, -5.7], [-79.9, -4.8]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Height of Moche period; extensive territorial control"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-75.9, -13.6], [-75.4, -14.1], [-74.1, -15.1], [-73.8, -15.6],
        [-73.6, -16.1], [-74.1, -17.2], [-75.6, -16.4], [-76.2, -15.2],
        [-76.3, -14.1], [-75.9, -13.6]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Late Nazca II/early Nazca III; continued influence"
    }
  ],

  "200": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.5, 15.1], [-97.8, 17.1], [-96.0, 17.9], [-95.4, 17.7],
        [-97.1, 15.5], [-97.7, 14.9], [-98.3, 15.0], [-98.5, 15.1]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Sustaining classic period authority in Oaxaca"
    },
    {
      name: "Teotihuacan (metropolis)",
      coords: [[
        [-99.5, 18.6], [-98.5, 20.0], [-97.6, 20.9], [-97.0, 20.7],
        [-98.5, 18.8], [-99.2, 18.4], [-99.5, 18.6]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Great metropolis of Mesoamerica; enormous influence across region"
    },
    {
      name: "Moche Civilization",
      coords: [[
        [-80.0, -4.6], [-79.2, -5.1], [-78.0, -6.6], [-77.8, -8.1],
        [-78.7, -8.5], [-79.7, -7.3], [-80.4, -5.8], [-80.0, -4.6]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Peak of Moche political and cultural power"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-76.0, -13.5], [-75.5, -14.0], [-74.0, -15.0], [-73.7, -15.5],
        [-73.5, -16.0], [-74.0, -17.3], [-75.7, -16.5], [-76.3, -15.3],
        [-76.4, -14.0], [-76.0, -13.5]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Transitioning to Late Nazca period; cultural changes"
    }
  ],

  "250": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.6, 15.0], [-97.9, 17.2], [-95.9, 18.0], [-95.3, 17.8],
        [-97.2, 15.4], [-97.8, 14.8], [-98.4, 14.9], [-98.6, 15.0]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Late classic period; maintaining regional dominance"
    },
    {
      name: "Teotihuacan (peak)",
      coords: [[
        [-99.6, 18.4], [-98.4, 20.1], [-97.4, 21.1], [-96.8, 20.9],
        [-98.6, 18.6], [-99.3, 18.2], [-99.6, 18.4]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Population peak (c. 125,000-200,000); Pyramid of the Sun at zenith"
    },
    {
      name: "Classic Maya (early)",
      coords: [[
        [-91.5, 17.0], [-90.5, 17.5], [-89.0, 18.0], [-87.5, 19.5],
        [-87.0, 21.0], [-89.5, 21.5], [-91.0, 20.5], [-92.0, 18.5],
        [-91.5, 17.0]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Early Classic Maya; cities like Tikal expanding rapidly"
    },
    {
      name: "Moche Civilization",
      coords: [[
        [-80.1, -4.4], [-79.3, -4.9], [-77.9, -6.4], [-77.7, -7.9],
        [-78.8, -8.6], [-79.8, -7.4], [-80.5, -6.0], [-80.1, -4.4]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Period II declining; Wari pressure beginning"
    },
    {
      name: "Nazca Culture",
      coords: [[
        [-76.1, -13.4], [-75.6, -13.9], [-73.9, -14.9], [-73.6, -14.4],
        [-73.4, -15.9], [-73.9, -17.4], [-75.8, -16.6], [-76.4, -15.4],
        [-76.5, -13.9], [-76.1, -13.4]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Late Nazca; culture beginning transition and fragmentation"
    }
  ],

  "300": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.7, 14.9], [-98.0, 17.3], [-95.8, 18.1], [-95.2, 17.9],
        [-97.3, 15.3], [-97.9, 14.7], [-98.5, 14.8], [-98.7, 14.9]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Continuing influence; supporting classic period florescence"
    },
    {
      name: "Teotihuacan (zenith)",
      coords: [[
        [-99.7, 18.2], [-98.3, 20.2], [-97.2, 21.2], [-96.6, 21.0],
        [-98.7, 18.4], [-99.4, 18.0], [-99.7, 18.2]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "At absolute height of power; dominant central Mexican force"
    },
    {
      name: "Classic Maya",
      coords: [[
        [-91.8, 16.8], [-90.3, 17.3], [-88.8, 17.8], [-87.2, 19.3],
        [-86.5, 20.8], [-88.8, 21.8], [-91.3, 20.8], [-92.3, 18.3],
        [-91.8, 16.8]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Height of Classic Maya; cities competing; extensive trade networks"
    },
    {
      name: "Tiwanaku (early)",
      coords: [[
        [-70.2, -15.5], [-69.5, -15.8], [-68.8, -16.8], [-69.2, -17.8],
        [-70.2, -17.5], [-70.8, -16.5], [-70.2, -15.5]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Emerging power in Lake Titicaca region; early state formation"
    },
    {
      name: "Wari (early)",
      coords: [[
        [-75.5, -11.5], [-74.8, -12.2], [-73.8, -13.8], [-73.5, -14.5],
        [-74.8, -14.8], [-75.8, -13.5], [-75.5, -11.5]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Emerging in Peruvian highlands; beginning expansion"
    }
  ],

  "350": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.8, 14.8], [-98.1, 17.4], [-95.7, 18.2], [-95.1, 18.0],
        [-97.4, 15.2], [-98.0, 14.6], [-98.6, 14.7], [-98.8, 14.8]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Late classic period; maintaining power amid regional changes"
    },
    {
      name: "Teotihuacan (mature)",
      coords: [[
        [-99.8, 18.0], [-98.2, 20.3], [-97.0, 21.3], [-96.4, 21.1],
        [-98.8, 18.2], [-99.5, 17.8], [-99.8, 18.0]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Mature city-state; extensive influence in Mesoamerica"
    },
    {
      name: "Classic Maya",
      coords: [[
        [-92.1, 16.6], [-90.1, 17.1], [-88.6, 17.6], [-86.8, 19.1],
        [-86.0, 20.6], [-88.6, 21.9], [-91.6, 21.0], [-92.6, 18.1],
        [-92.1, 16.6]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Classic Maya florescence; major cities engaged in warfare"
    },
    {
      name: "Tiwanaku",
      coords: [[
        [-70.4, -15.3], [-69.3, -15.6], [-68.6, -16.6], [-69.0, -17.9],
        [-70.4, -17.6], [-71.0, -16.6], [-70.4, -15.3]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Growing power; expanding influence along highland Andes"
    },
    {
      name: "Wari",
      coords: [[
        [-75.8, -11.3], [-75.0, -12.0], [-73.6, -13.6], [-73.3, -14.3],
        [-75.0, -14.6], [-76.1, -13.3], [-75.8, -11.3]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Expanding polity; beginning to challenge highland rivals"
    }
  ],

  "395": [
    {
      name: "Zapotec/Monte Albán",
      coords: [[
        [-98.9, 14.7], [-98.2, 17.5], [-95.6, 18.3], [-95.0, 18.1],
        [-97.5, 15.1], [-98.1, 14.5], [-98.7, 14.6], [-98.9, 14.7]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Approaching classic period terminus; still influential"
    },
    {
      name: "Teotihuacan (late)",
      coords: [[
        [-99.9, 17.8], [-98.1, 20.4], [-96.8, 21.4], [-96.2, 21.2],
        [-98.9, 18.0], [-99.6, 17.6], [-99.9, 17.8]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Still dominant; showing early signs of instability"
    },
    {
      name: "Classic Maya",
      coords: [[
        [-92.4, 16.4], [-89.9, 16.9], [-88.4, 17.4], [-86.6, 18.9],
        [-85.6, 20.4], [-88.4, 22.0], [-91.9, 21.1], [-92.9, 17.9],
        [-92.4, 16.4]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Late Classic period; Maya civilization showing stress signs"
    },
    {
      name: "Tiwanaku (expanding)",
      coords: [[
        [-70.6, -15.1], [-69.1, -15.4], [-68.4, -16.4], [-68.8, -18.0],
        [-70.6, -17.7], [-71.2, -16.7], [-70.6, -15.1]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Expanding significantly; major Andean power"
    },
    {
      name: "Wari (expanding)",
      coords: [[
        [-76.1, -11.1], [-75.2, -11.8], [-73.4, -13.4], [-73.1, -14.1],
        [-75.2, -14.4], [-76.4, -13.1], [-76.1, -11.1]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Rapid expansion; challenging Tiwanaku dominance"
    }
  ],

  // ============ POSTCLASSICAL TRANSITION (476-632) ============

  "476": [
    {
      name: "Zapotec/Monte Albán (late)",
      coords: [[
        [-99.0, 14.6], [-98.3, 17.6], [-95.5, 18.4], [-94.9, 18.2],
        [-97.6, 15.0], [-98.2, 14.4], [-98.8, 14.5], [-99.0, 14.6]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Monte Albán declining; regional power fragmenting"
    },
    {
      name: "Teotihuacan (declining)",
      coords: [[
        [-100.0, 17.6], [-98.0, 20.5], [-96.6, 21.5], [-96.0, 21.3],
        [-99.0, 17.8], [-99.7, 17.4], [-100.0, 17.6]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Burning and collapse beginning; city destabilizing"
    },
    {
      name: "Late Classic Maya (fractured)",
      coords: [[
        [-92.7, 16.2], [-89.7, 16.7], [-88.2, 17.2], [-86.4, 18.7],
        [-85.2, 20.2], [-88.2, 22.1], [-92.2, 21.2], [-93.2, 18.0],
        [-92.7, 16.2]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Southern lowlands Classic Maya collapse underway; chaos"
    },
    {
      name: "Tiwanaku",
      coords: [[
        [-70.8, -14.9], [-68.9, -15.2], [-68.2, -16.2], [-68.6, -18.1],
        [-70.8, -17.8], [-71.4, -16.8], [-70.8, -14.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Height of Tiwanaku polity; extensive Andean empire"
    },
    {
      name: "Wari (expanding)",
      coords: [[
        [-76.4, -10.9], [-75.4, -11.6], [-73.2, -13.2], [-72.9, -13.9],
        [-75.4, -14.2], [-76.7, -12.9], [-76.4, -10.9]
      ]],
      isMulti: false,
      color: "#7B1FA2",
      desc: "Major expansion phase; becoming Andean superpower"
    }
  ],

  "530": [
    {
      name: "Zapotec (post-Monte Albán)",
      coords: [[
        [-99.1, 14.5], [-98.4, 17.7], [-95.4, 18.5], [-94.8, 18.3],
        [-97.7, 14.9], [-98.3, 14.3], [-98.9, 14.4], [-99.1, 14.5]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Post-collapse period; fragmenting into regional kingdoms"
    },
    {
      name: "Early Toltec culture",
      coords: [[
        [-99.5, 19.2], [-98.8, 20.2], [-97.8, 20.8], [-97.2, 20.3],
        [-98.5, 19.1], [-99.2, 18.9], [-99.5, 19.2]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Early Toltec culture developing in central Mexico"
    },
    {
      name: "Terminal Classic Maya",
      coords: [[
        [-93.0, 16.0], [-89.5, 16.5], [-88.0, 17.0], [-86.2, 18.5],
        [-84.8, 20.0], [-88.0, 22.2], [-92.5, 21.3], [-93.5, 18.1],
        [-93.0, 16.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Maya Classic collapse in south; northern cities persist"
    },
    {
      name: "Tiwanaku (peak)",
      coords: [[
        [-71.0, -14.7], [-68.7, -15.0], [-68.0, -16.0], [-68.4, -18.2],
        [-71.0, -17.9], [-71.6, -16.9], [-71.0, -14.7]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Peak of Tiwanaku territorial expansion; vast empire"
    },
    {
      name: "Wari (peak)",
      coords: [[
        [-76.7, -10.7], [-75.6, -11.4], [-73.0, -13.0], [-72.7, -13.7],
        [-75.6, -14.0], [-77.0, -12.7], [-76.7, -10.7]
      ]],
      isMulti: false,
      color: "#7B1FA2",
      desc: "Wari empire at maximum extent; challenging Tiwanaku"
    }
  ],

  "570": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.2, 14.4], [-98.5, 17.8], [-95.3, 18.6], [-94.7, 18.4],
        [-97.8, 14.8], [-98.4, 14.2], [-99.0, 14.3], [-99.2, 14.4]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Fragmented into competing kingdoms; regional powers"
    },
    {
      name: "Toltec culture (growing)",
      coords: [[
        [-99.8, 19.0], [-99.0, 20.3], [-97.6, 20.9], [-97.0, 20.4],
        [-98.6, 19.0], [-99.4, 18.8], [-99.8, 19.0]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec culture expanding; Tula region developing"
    },
    {
      name: "Postclassic Maya",
      coords: [[
        [-91.5, 17.5], [-89.0, 18.0], [-87.5, 18.5], [-86.5, 19.5],
        [-85.5, 21.0], [-87.5, 22.3], [-91.0, 21.5], [-92.5, 19.0],
        [-91.5, 17.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern Maya cities flourishing; southern collapse complete"
    },
    {
      name: "Tiwanaku",
      coords: [[
        [-71.2, -14.5], [-68.5, -14.8], [-67.8, -15.8], [-68.2, -18.3],
        [-71.2, -18.0], [-71.8, -17.0], [-71.2, -14.5]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Tiwanaku at maximum influence; extensive territories"
    },
    {
      name: "Wari",
      coords: [[
        [-77.0, -10.5], [-75.8, -11.2], [-72.8, -12.8], [-72.5, -13.5],
        [-75.8, -13.8], [-77.3, -12.5], [-77.0, -10.5]
      ]],
      isMulti: false,
      color: "#7B1FA2",
      desc: "Wari empire spanning highlands; competing with Tiwanaku"
    }
  ],

  // ============ EARLY MEDIEVAL PERIOD (632-900) ============

  "632": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.3, 14.3], [-98.6, 17.9], [-95.2, 18.7], [-94.6, 18.5],
        [-97.9, 14.7], [-98.5, 14.1], [-99.1, 14.2], [-99.3, 14.3]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Regional kingdoms in Oaxaca; competing for influence"
    },
    {
      name: "Toltec Empire (forming)",
      coords: [[
        [-100.0, 18.8], [-99.2, 20.4], [-97.4, 21.0], [-96.8, 20.5],
        [-98.7, 18.8], [-99.6, 18.6], [-100.0, 18.8]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Tula becoming major center; Toltec confederation forming"
    },
    {
      name: "Northern Maya (prosperous)",
      coords: [[
        [-91.0, 18.0], [-88.5, 18.5], [-87.0, 19.0], [-86.0, 20.0],
        [-85.0, 21.5], [-87.0, 22.4], [-90.5, 21.8], [-92.0, 19.5],
        [-91.0, 18.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern lowland Maya cities thriving; Postclassic period"
    },
    {
      name: "Tiwanaku",
      coords: [[
        [-71.4, -14.3], [-68.3, -14.6], [-67.6, -15.6], [-68.0, -18.4],
        [-71.4, -18.1], [-72.0, -17.1], [-71.4, -14.3]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Still dominant in southern highlands; vast territories"
    },
    {
      name: "Wari (declining)",
      coords: [[
        [-77.2, -10.3], [-76.0, -11.0], [-72.6, -12.6], [-72.3, -13.3],
        [-76.0, -13.6], [-77.5, -12.3], [-77.2, -10.3]
      ]],
      isMulti: false,
      color: "#7B1FA2",
      desc: "Wari beginning decline; pressure from Tiwanaku increasing"
    }
  ],

  "680": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.4, 14.2], [-98.7, 18.0], [-95.1, 18.8], [-94.5, 18.6],
        [-98.0, 14.6], [-98.6, 14.0], [-99.2, 14.1], [-99.4, 14.2]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Divided kingdoms; local autonomy increasing"
    },
    {
      name: "Toltec Empire",
      coords: [[
        [-100.2, 18.6], [-99.4, 20.5], [-97.2, 21.1], [-96.6, 20.6],
        [-98.8, 18.6], [-99.8, 18.4], [-100.2, 18.6]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec confederation solidifying; expanding influence"
    },
    {
      name: "Northern Maya",
      coords: [[
        [-90.5, 18.5], [-88.0, 19.0], [-86.5, 19.5], [-85.5, 20.5],
        [-84.5, 22.0], [-86.5, 22.5], [-90.0, 22.0], [-91.5, 20.0],
        [-90.5, 18.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern Maya cities expanding; Cozumel thriving"
    },
    {
      name: "Tiwanaku",
      coords: [[
        [-71.6, -14.1], [-68.1, -14.4], [-67.4, -15.4], [-67.8, -18.5],
        [-71.6, -18.2], [-72.2, -17.2], [-71.6, -14.1]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Tiwanaku at height; extensive state apparatus"
    },
    {
      name: "Wari (contracting)",
      coords: [[
        [-77.4, -10.1], [-76.2, -10.8], [-72.4, -12.4], [-72.1, -13.1],
        [-76.2, -13.4], [-77.7, -12.1], [-77.4, -10.1]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Wari empire collapsing; Tiwanaku ascendant"
    }
  ],

  "750": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.5, 14.1], [-98.8, 18.1], [-95.0, 18.9], [-94.4, 18.7],
        [-98.1, 14.5], [-98.7, 13.9], [-99.3, 14.0], [-99.5, 14.1]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Regional Zapotec kingdoms; local powers strengthening"
    },
    {
      name: "Toltec Empire (expanding)",
      coords: [[
        [-100.4, 18.4], [-99.6, 20.6], [-97.0, 21.2], [-96.4, 20.7],
        [-98.9, 18.4], [-100.0, 18.2], [-100.4, 18.4]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec power growing; Tula major city; expansion underway"
    },
    {
      name: "Northern Maya (zenith)",
      coords: [[
        [-90.0, 19.0], [-87.5, 19.5], [-86.0, 20.0], [-85.0, 21.0],
        [-84.0, 22.5], [-86.0, 22.6], [-89.5, 22.1], [-91.0, 20.5],
        [-90.0, 19.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern Maya cities at peak; Mayapan and Chichen Itza rising"
    },
    {
      name: "Tiwanaku (declining)",
      coords: [[
        [-71.8, -13.9], [-67.9, -14.2], [-67.2, -15.2], [-67.6, -18.6],
        [-71.8, -18.3], [-72.4, -17.3], [-71.8, -13.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Tiwanaku beginning decline; environmental and political stress"
    },
    {
      name: "Chimú Empire (early)",
      coords: [[
        [-80.0, -5.5], [-79.5, -6.0], [-78.5, -7.5], [-78.0, -9.0],
        [-79.5, -9.0], [-80.5, -7.5], [-80.5, -6.0], [-80.0, -5.5]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Chimú culture emerging on northern Peru coast"
    }
  ],

  "850": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.6, 14.0], [-98.9, 18.2], [-94.9, 19.0], [-94.3, 18.8],
        [-98.2, 14.4], [-98.8, 13.8], [-99.4, 13.9], [-99.6, 14.0]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Fragmented kingdoms; declining political centralization"
    },
    {
      name: "Toltec Empire",
      coords: [[
        [-100.6, 18.2], [-99.8, 20.7], [-96.8, 21.3], [-96.2, 20.8],
        [-99.0, 18.2], [-100.2, 18.0], [-100.6, 18.2]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec confederation powerful; military expansion phase"
    },
    {
      name: "Northern Maya",
      coords: [[
        [-89.5, 19.5], [-87.0, 20.0], [-85.5, 20.5], [-84.5, 21.5],
        [-83.5, 23.0], [-85.5, 22.7], [-89.0, 22.2], [-90.5, 21.0],
        [-89.5, 19.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern Maya dominant; Chichen Itza growing in influence"
    },
    {
      name: "Tiwanaku (contracting)",
      coords: [[
        [-72.0, -13.7], [-67.7, -14.0], [-67.0, -15.0], [-67.4, -18.7],
        [-72.0, -18.4], [-72.6, -17.4], [-72.0, -13.7]
      ]],
      isMulti: false,
      color: "#CE93D8",
      desc: "Tiwanaku in decline; fragmentation beginning"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-80.2, -5.3], [-79.7, -5.8], [-78.3, -7.3], [-77.8, -8.8],
        [-79.3, -9.2], [-80.7, -7.8], [-80.7, -5.8], [-80.2, -5.3]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú expanding; becoming major power on Peru coast"
    }
  ],

  // ============ LATE MEDIEVAL PERIOD (900-1300) ============

  "900": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.7, 13.9], [-99.0, 18.3], [-94.8, 19.1], [-94.2, 18.9],
        [-98.3, 14.3], [-98.9, 13.7], [-99.5, 13.8], [-99.7, 13.9]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Autonomous regional kingdoms; competing for influence"
    },
    {
      name: "Toltec Empire (zenith)",
      coords: [[
        [-100.8, 18.0], [-100.0, 20.8], [-96.6, 21.4], [-96.0, 20.9],
        [-99.1, 18.0], [-100.4, 17.8], [-100.8, 18.0]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec at height of power; major Mesoamerican force"
    },
    {
      name: "Postclassic Maya",
      coords: [[
        [-89.0, 20.0], [-86.5, 20.5], [-85.0, 21.0], [-84.0, 22.0],
        [-83.0, 23.5], [-85.0, 22.8], [-88.5, 22.3], [-90.0, 21.5],
        [-89.0, 20.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Northern Maya and Gulf coast cities competing"
    },
    {
      name: "Mixtec kingdoms (rising)",
      coords: [[
        [-98.0, 16.5], [-97.2, 17.3], [-96.3, 17.5], [-95.8, 16.8],
        [-96.3, 16.0], [-97.2, 15.9], [-98.0, 16.5]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms expanding; challenging Zapotec authority"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-80.4, -5.1], [-79.9, -5.6], [-78.1, -7.1], [-77.6, -8.6],
        [-79.1, -9.4], [-80.9, -8.0], [-80.9, -5.6], [-80.4, -5.1]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú expanding; northern coast becoming unified"
    }
  ],

  "1000": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.8, 13.8], [-99.1, 18.4], [-94.7, 19.2], [-94.1, 19.0],
        [-98.4, 14.2], [-99.0, 13.6], [-99.6, 13.7], [-99.8, 13.8]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Fragmented kingdoms; Zapotec cultural legacy continuing"
    },
    {
      name: "Toltec Empire (mature)",
      coords: [[
        [-101.0, 17.8], [-100.2, 20.9], [-96.4, 21.5], [-95.8, 21.0],
        [-99.2, 17.8], [-100.6, 17.6], [-101.0, 17.8]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec confederation mature; extensive trade networks"
    },
    {
      name: "Northern Maya (competing)",
      coords: [[
        [-88.5, 20.5], [-86.0, 21.0], [-84.5, 21.5], [-83.5, 22.5],
        [-82.5, 24.0], [-84.5, 22.9], [-88.0, 22.4], [-89.5, 21.5],
        [-88.5, 20.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Chichen Itza and Maya cities in competition and alliance"
    },
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-98.2, 16.3], [-97.4, 17.4], [-96.1, 17.6], [-95.6, 16.9],
        [-96.1, 15.8], [-97.4, 15.7], [-98.2, 16.3]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec expansion; powerful kingdoms competing with Zapotec"
    },
    {
      name: "Chimú Empire (dominant)",
      coords: [[
        [-80.6, -4.9], [-80.1, -5.4], [-77.9, -6.9], [-77.4, -8.4],
        [-78.9, -9.6], [-81.1, -8.2], [-81.1, -5.4], [-80.6, -4.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire dominant on Peru coast; extensive territories"
    }
  ],

  "1071": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-99.9, 13.7], [-99.2, 18.5], [-94.6, 19.3], [-94.0, 19.1],
        [-98.5, 14.1], [-99.1, 13.5], [-99.7, 13.6], [-99.9, 13.7]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Autonomous kingdoms; Zapotec cultural heritage maintained"
    },
    {
      name: "Toltec Empire (late)",
      coords: [[
        [-101.2, 17.6], [-100.4, 21.0], [-96.2, 21.6], [-95.6, 21.1],
        [-99.3, 17.6], [-100.8, 17.4], [-101.2, 17.6]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec power sustained; stability maintained across region"
    },
    {
      name: "Northern Maya",
      coords: [[
        [-88.0, 21.0], [-85.5, 21.5], [-84.0, 22.0], [-83.0, 23.0],
        [-82.0, 24.5], [-84.0, 23.0], [-87.5, 22.5], [-89.0, 22.0],
        [-88.0, 21.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Maya league cities; Mayapan emerging as dominant power"
    },
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-98.4, 16.1], [-97.6, 17.5], [-95.9, 17.7], [-95.4, 17.0],
        [-95.9, 15.6], [-97.6, 15.5], [-98.4, 16.1]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms powerful; contending regional powers"
    },
    {
      name: "Tarascan/Purépecha (early)",
      coords: [[
        [-102.5, 19.5], [-102.0, 20.2], [-101.0, 20.8], [-100.0, 20.5],
        [-100.8, 19.3], [-101.8, 19.1], [-102.5, 19.5]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Early Tarascan state forming in western Mexico"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-80.8, -4.7], [-80.3, -5.2], [-77.7, -6.7], [-77.2, -8.2],
        [-78.7, -9.8], [-81.3, -8.4], [-81.3, -5.2], [-80.8, -4.7]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire at height; controlling northern Peru coast"
    }
  ],

  "1100": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-100.0, 13.6], [-99.3, 18.6], [-94.5, 19.4], [-93.9, 19.2],
        [-98.6, 14.0], [-99.2, 13.4], [-99.8, 13.5], [-100.0, 13.6]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Divided kingdoms; competing regional powers"
    },
    {
      name: "Toltec Empire (transitioning)",
      coords: [[
        [-101.4, 17.4], [-100.6, 21.1], [-96.0, 21.7], [-95.4, 21.2],
        [-99.4, 17.4], [-101.0, 17.2], [-101.4, 17.4]
      ]],
      isMulti: false,
      color: "#D32F2F",
      desc: "Toltec confederation declining; instability increasing"
    },
    {
      name: "Mayapan League",
      coords: [[
        [-87.5, 21.5], [-85.0, 22.0], [-83.5, 22.5], [-82.5, 23.5],
        [-81.5, 25.0], [-83.5, 23.2], [-87.0, 22.7], [-88.5, 22.2],
        [-87.5, 21.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Mayapan hegemony; northern Maya confederation"
    },
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-98.6, 15.9], [-97.8, 17.6], [-95.7, 17.8], [-95.2, 17.1],
        [-95.7, 15.4], [-97.8, 15.3], [-98.6, 15.9]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms expanding; competing with declining Toltecs"
    },
    {
      name: "Tarascan Empire",
      coords: [[
        [-102.8, 19.3], [-102.2, 20.3], [-100.8, 21.0], [-99.8, 20.7],
        [-101.0, 19.1], [-102.0, 18.9], [-102.8, 19.3]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Tarascan state consolidating; expanding in western Mexico"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-81.0, -4.5], [-80.5, -5.0], [-77.5, -6.5], [-77.0, -8.0],
        [-78.5, -10.0], [-81.5, -8.6], [-81.5, -5.0], [-81.0, -4.5]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire dominant; extensive coastal control"
    }
  ],

  // ============ LATE POSTCLASSICAL (1200-1453) ============

  "1200": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-100.1, 13.5], [-99.4, 18.7], [-94.4, 19.5], [-93.8, 19.3],
        [-98.7, 13.9], [-99.3, 13.3], [-99.9, 13.4], [-100.1, 13.5]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Regional kingdoms; facing pressure from Mixtec expansion"
    },
    {
      name: "Aztec Empire (early)",
      coords: [[
        [-100.5, 19.0], [-99.5, 20.5], [-98.0, 20.8], [-97.0, 19.5],
        [-98.5, 18.5], [-99.8, 18.3], [-100.5, 19.0]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Aztec confederation forming; Tenochtitlan just founded (1325)"
    },
    {
      name: "Mayapan League (dominant)",
      coords: [[
        [-87.0, 22.0], [-84.5, 22.5], [-83.0, 23.0], [-82.0, 24.0],
        [-81.0, 25.5], [-83.0, 23.4], [-86.5, 23.0], [-88.0, 22.5],
        [-87.0, 22.0]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Mayapan dominant; controlling Yucatan peninsula"
    },
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-98.8, 15.7], [-98.0, 17.7], [-95.5, 17.9], [-95.0, 17.2],
        [-95.5, 15.2], [-98.0, 15.1], [-98.8, 15.7]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms powerful; expanding influence"
    },
    {
      name: "Tarascan Empire",
      coords: [[
        [-103.0, 19.1], [-102.4, 20.4], [-100.6, 21.2], [-99.6, 20.9],
        [-101.2, 19.0], [-102.2, 18.7], [-103.0, 19.1]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Tarascan Empire consolidating; competing with Aztecs"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-81.2, -4.3], [-80.7, -4.8], [-77.3, -6.3], [-76.8, -7.8],
        [-78.3, -10.2], [-81.7, -8.8], [-81.7, -4.8], [-81.2, -4.3]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire at peak; vast territories on Peru coast"
    }
  ],

  "1300": [
    {
      name: "Zapotec kingdoms",
      coords: [[
        [-100.2, 13.4], [-99.5, 18.8], [-94.3, 19.6], [-93.7, 19.4],
        [-98.8, 13.8], [-99.4, 13.2], [-100.0, 13.3], [-100.2, 13.4]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Autonomous kingdoms; under pressure from Mixtec and Aztec"
    },
    {
      name: "Aztec Empire (expanding)",
      coords: [[
        [-100.2, 18.8], [-99.2, 20.6], [-97.8, 20.9], [-96.8, 19.6],
        [-98.4, 18.3], [-99.6, 18.1], [-100.2, 18.8]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Aztec confederation expanding; Tenochtitlan growing"
    },
    {
      name: "Mayapan League",
      coords: [[
        [-86.5, 22.5], [-84.0, 23.0], [-82.5, 23.5], [-81.5, 24.5],
        [-80.5, 26.0], [-82.5, 23.6], [-86.0, 23.2], [-87.5, 22.8],
        [-86.5, 22.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Mayapan League controlling Yucatan; fragmentation beginning"
    },
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-99.0, 15.5], [-98.2, 17.8], [-95.3, 18.0], [-94.8, 17.3],
        [-95.3, 15.0], [-98.2, 14.9], [-99.0, 15.5]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec power significant; competing for Mesoamerican influence"
    },
    {
      name: "Tarascan Empire",
      coords: [[
        [-103.2, 18.9], [-102.6, 20.5], [-100.4, 21.4], [-99.4, 21.1],
        [-101.4, 18.8], [-102.4, 18.5], [-103.2, 18.9]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Tarascan Empire well-established; rival to Aztec expansion"
    },
    {
      name: "Muisca Confederation (early)",
      coords: [[
        [-74.3, 5.0], [-73.8, 5.5], [-73.3, 6.2], [-73.5, 6.8],
        [-74.2, 6.5], [-74.5, 5.8], [-74.3, 5.0]
      ]],
      isMulti: false,
      color: "#AB47BC",
      desc: "Muisca confederation developing in Colombian highlands"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-81.4, -4.1], [-80.9, -4.6], [-77.1, -6.1], [-76.6, -7.6],
        [-78.1, -10.4], [-81.9, -9.0], [-81.9, -4.6], [-81.4, -4.1]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire extensive; northern Peru coast unified"
    }
  ],

  "1350": [
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-99.2, 15.3], [-98.4, 17.9], [-95.1, 18.1], [-94.6, 17.4],
        [-95.1, 14.8], [-98.4, 14.7], [-99.2, 15.3]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms dominant in Oaxaca; Zapotec declining"
    },
    {
      name: "Aztec Empire (dominant)",
      coords: [[
        [-100.0, 18.5], [-98.8, 20.8], [-97.4, 21.1], [-96.4, 19.8],
        [-98.2, 18.0], [-99.4, 17.8], [-100.0, 18.5]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Aztec Triple Alliance consolidating; Tenochtitlan powerful"
    },
    {
      name: "Mayapan League (fragmenting)",
      coords: [[
        [-86.0, 23.0], [-83.5, 23.5], [-82.0, 24.0], [-81.0, 25.0],
        [-80.0, 26.5], [-82.0, 23.8], [-85.5, 23.4], [-87.0, 23.1],
        [-86.0, 23.0]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Mayapan League fragmenting; independent cities emerging"
    },
    {
      name: "Tarascan Empire",
      coords: [[
        [-103.4, 18.7], [-102.8, 20.6], [-100.2, 21.6], [-99.2, 21.3],
        [-101.6, 18.6], [-102.6, 18.3], [-103.4, 18.7]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Tarascan Empire strong; expanding; competing with Aztecs"
    },
    {
      name: "Muisca Confederation",
      coords: [[
        [-74.5, 4.8], [-74.0, 5.3], [-73.5, 6.0], [-73.7, 6.9],
        [-74.4, 6.6], [-74.7, 5.6], [-74.5, 4.8]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Muisca confederation established in Colombian highlands"
    },
    {
      name: "Inca Empire (early expansion)",
      coords: [[
        [-78.0, -10.0], [-77.0, -10.5], [-75.5, -12.0], [-75.0, -13.5],
        [-75.5, -15.0], [-77.5, -15.5], [-78.5, -14.0], [-79.0, -12.0],
        [-78.0, -10.0]
      ]],
      isMulti: false,
      color: "#7B1FA2",
      desc: "Inca Empire expanding from Cusco valley; early imperial phase"
    },
    {
      name: "Chimú Empire",
      coords: [[
        [-81.6, -3.9], [-81.1, -4.4], [-76.9, -5.9], [-76.4, -7.4],
        [-77.9, -10.6], [-82.1, -9.2], [-82.1, -4.4], [-81.6, -3.9]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Chimú Empire at zenith; extensive northern Peru coast"
    }
  ],

  "1453": [
    {
      name: "Mixtec kingdoms",
      coords: [[
        [-99.4, 15.1], [-98.6, 18.0], [-94.9, 18.2], [-94.4, 17.5],
        [-94.9, 14.6], [-98.6, 14.5], [-99.4, 15.1]
      ]],
      isMulti: false,
      color: "#FF7043",
      desc: "Mixtec kingdoms; Zapotec heritage; under Aztec pressure"
    },
    {
      name: "Aztec Empire (Triple Alliance at peak)",
      coords: [[
        [-100.2, 18.2], [-98.6, 21.0], [-97.0, 21.3], [-96.0, 20.0],
        [-98.0, 17.6], [-99.6, 17.4], [-100.2, 18.2]
      ]],
      isMulti: false,
      color: "#C62828",
      desc: "Aztec Triple Alliance at peak; extensive tributary empire from 1438"
    },
    {
      name: "Northern Maya (independent cities)",
      coords: [[
        [-85.5, 23.5], [-83.0, 24.0], [-81.5, 24.5], [-80.5, 26.0],
        [-79.5, 27.5], [-81.5, 24.0], [-85.0, 23.6], [-86.5, 23.2],
        [-85.5, 23.5]
      ]],
      isMulti: false,
      color: "#FF5722",
      desc: "Northern Maya independent cities; Mayapan collapsed 1441"
    },
    {
      name: "Tarascan Empire",
      coords: [[
        [-103.6, 18.5], [-103.0, 20.7], [-100.0, 21.8], [-99.0, 21.5],
        [-101.8, 18.4], [-102.8, 18.1], [-103.6, 18.5]
      ]],
      isMulti: false,
      color: "#E53935",
      desc: "Tarascan Empire substantial power; independent rival to Aztecs"
    },
    {
      name: "Muisca Confederation",
      coords: [[
        [-74.7, 4.6], [-74.2, 5.1], [-73.7, 5.8], [-73.9, 7.0],
        [-74.6, 6.7], [-74.9, 5.4], [-74.7, 4.6]
      ]],
      isMulti: false,
      color: "#9C27B0",
      desc: "Muisca confederation; competing cities; before Spanish arrival"
    },
    {
      name: "Inca Empire (Tawantinsuyu - Maximum Extent)",
      coords: [[
        [-81.0, -1.0], [-79.5, -2.0], [-77.5, -4.0], [-76.0, -8.0],
        [-75.0, -12.0], [-75.5, -15.0], [-76.5, -18.0], [-77.5, -20.5],
        [-80.0, -22.0], [-81.5, -20.0], [-82.0, -17.0], [-82.5, -13.0],
        [-82.0, -10.0], [-81.0, -5.0], [-81.0, -1.0]
      ]],
      isMulti: false,
      color: "#6A1B9A",
      desc: "Inca Empire (Tawantinsuyu) at maximum territorial extent; 1438-1533"
    },
    {
      name: "Haudenosaunee/Iroquois Confederacy",
      coords: [[
        [-77.5, 42.5], [-77.0, 43.0], [-75.0, 43.5], [-73.5, 43.0],
        [-73.0, 42.0], [-74.0, 41.5], [-76.0, 41.8], [-77.5, 42.5]
      ]],
      isMulti: false,
      color: "#1A237E",
      desc: "Haudenosaunee (Iroquois) Confederacy; formed traditional date 1142"
    }
  ]
};

// Export for use in atlas
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AMERICAS_ENTITIES;
}
