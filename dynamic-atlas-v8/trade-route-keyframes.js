const TRADE_ROUTE_KEYFRAMES = [
  {
    "year": -500,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -480,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -336,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -323,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -200,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -150,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -44,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": -27,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 50,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Royal Road",
        "color": "#FF9800",
        "desc": "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            27,
            38.5
          ],
          [
            29,
            39
          ],
          [
            32,
            39.5
          ],
          [
            35,
            38
          ],
          [
            37,
            37.5
          ],
          [
            39,
            37
          ],
          [
            43,
            35
          ],
          [
            46,
            34
          ],
          [
            48.5,
            32.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 117,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 200,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 250,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Incense Route",
        "color": "#FFB300",
        "desc": "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            45,
            14
          ],
          [
            44,
            17
          ],
          [
            42,
            21
          ],
          [
            39.8,
            24.5
          ],
          [
            37,
            27.5
          ],
          [
            36,
            29.5
          ],
          [
            35.5,
            31.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 300,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Amber Road",
        "color": "#FFAB00",
        "desc": "Ancient route carrying Baltic amber south to the Mediterranean. Connected Germanic and Celtic lands to the Roman world.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            18.5,
            54.5
          ],
          [
            17.5,
            52
          ],
          [
            16,
            50
          ],
          [
            15,
            48
          ],
          [
            15.5,
            46.5
          ],
          [
            14,
            45
          ],
          [
            13.5,
            43.5
          ],
          [
            13,
            41
          ],
          [
            12.5,
            38.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 350,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 395,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 476,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 530,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 570,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      }
    ]
  },
  {
    "year": 632,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 680,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 750,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 850,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Varangian Trade Route",
        "color": "#B0BEC5",
        "desc": "Norse trade route from Scandinavia down the Dnieper to Constantinople. Viking merchants traded furs, honey, and slaves for East Roman silk and silver.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18,
            59
          ],
          [
            20,
            57
          ],
          [
            24,
            55
          ],
          [
            26,
            53
          ],
          [
            28,
            51
          ],
          [
            30.5,
            49
          ],
          [
            32,
            47
          ],
          [
            33,
            45
          ],
          [
            33.5,
            43
          ],
          [
            29,
            41
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 900,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Varangian Trade Route",
        "color": "#B0BEC5",
        "desc": "Norse trade route from Scandinavia down the Dnieper to Constantinople. Viking merchants traded furs, honey, and slaves for East Roman silk and silver.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            18,
            59
          ],
          [
            20,
            57
          ],
          [
            24,
            55
          ],
          [
            26,
            53
          ],
          [
            28,
            51
          ],
          [
            30.5,
            49
          ],
          [
            32,
            47
          ],
          [
            33,
            45
          ],
          [
            33.5,
            43
          ],
          [
            29,
            41
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1000,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Varangian Trade Route",
        "color": "#B0BEC5",
        "desc": "Norse trade route from Scandinavia down the Dnieper to Constantinople. Viking merchants traded furs, honey, and slaves for East Roman silk and silver.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18,
            59
          ],
          [
            20,
            57
          ],
          [
            24,
            55
          ],
          [
            26,
            53
          ],
          [
            28,
            51
          ],
          [
            30.5,
            49
          ],
          [
            32,
            47
          ],
          [
            33,
            45
          ],
          [
            33.5,
            43
          ],
          [
            29,
            41
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 1.5,
        "opacity": 0.5,
        "status": "emerging",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1071,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Varangian Trade Route",
        "color": "#B0BEC5",
        "desc": "Norse trade route from Scandinavia down the Dnieper to Constantinople. Viking merchants traded furs, honey, and slaves for East Roman silk and silver.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            18,
            59
          ],
          [
            20,
            57
          ],
          [
            24,
            55
          ],
          [
            26,
            53
          ],
          [
            28,
            51
          ],
          [
            30.5,
            49
          ],
          [
            32,
            47
          ],
          [
            33,
            45
          ],
          [
            33.5,
            43
          ],
          [
            29,
            41
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1100,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Varangian Trade Route",
        "color": "#B0BEC5",
        "desc": "Norse trade route from Scandinavia down the Dnieper to Constantinople. Viking merchants traded furs, honey, and slaves for East Roman silk and silver.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            18,
            59
          ],
          [
            20,
            57
          ],
          [
            24,
            55
          ],
          [
            26,
            53
          ],
          [
            28,
            51
          ],
          [
            30.5,
            49
          ],
          [
            32,
            47
          ],
          [
            33,
            45
          ],
          [
            33.5,
            43
          ],
          [
            29,
            41
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1200,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1300,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1350,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  },
  {
    "year": 1453,
    "features": [
      {
        "name": "Silk Road (Northern)",
        "color": "#FFD700",
        "desc": "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            36.2,
            36.2
          ],
          [
            38,
            36.5
          ],
          [
            40.5,
            37.5
          ],
          [
            43,
            36.5
          ],
          [
            44.4,
            33.3
          ],
          [
            47,
            34
          ],
          [
            51.4,
            35.7
          ],
          [
            54,
            36.5
          ],
          [
            58.5,
            37.5
          ],
          [
            62,
            37
          ],
          [
            66,
            37.5
          ]
        ]
      },
      {
        "name": "Mediterranean Sea Lanes",
        "color": "#42A5F5",
        "desc": "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            -5,
            36
          ],
          [
            -1,
            37
          ],
          [
            3,
            37.5
          ],
          [
            9,
            37.5
          ],
          [
            13,
            37.5
          ],
          [
            15,
            38.5
          ],
          [
            18,
            39.5
          ],
          [
            21.5,
            37.5
          ],
          [
            24.5,
            36
          ],
          [
            28,
            36.5
          ],
          [
            30,
            35
          ],
          [
            33,
            34.5
          ],
          [
            35,
            34.5
          ]
        ]
      },
      {
        "name": "Egypt–Alexandria Route",
        "color": "#42A5F5",
        "desc": "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            24.5,
            36
          ],
          [
            26,
            34
          ],
          [
            28.5,
            32
          ],
          [
            29.9,
            31.2
          ]
        ]
      },
      {
        "name": "Red Sea–India Route",
        "color": "#EC407A",
        "desc": "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29.9,
            31.2
          ],
          [
            32,
            30
          ],
          [
            33.5,
            28
          ],
          [
            35.5,
            24
          ],
          [
            38,
            19
          ],
          [
            43,
            13
          ],
          [
            48,
            11
          ],
          [
            55,
            15
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Persian Gulf Route",
        "color": "#26A69A",
        "desc": "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            47.5,
            30.5
          ],
          [
            49.5,
            29.5
          ],
          [
            51,
            28
          ],
          [
            53,
            26.5
          ],
          [
            56,
            25
          ],
          [
            58,
            23
          ],
          [
            60,
            22
          ]
        ]
      },
      {
        "name": "Constantinople–Black Sea",
        "color": "#78909C",
        "desc": "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            29,
            41
          ],
          [
            30.5,
            41.5
          ],
          [
            32,
            42
          ],
          [
            34,
            43
          ],
          [
            36.5,
            44.5
          ],
          [
            38,
            45.5
          ]
        ]
      },
      {
        "name": "Via Egnatia",
        "color": "#FF7043",
        "desc": "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        "weight": 1.5,
        "opacity": 0.4,
        "status": "minor",
        "waypoints": [
          [
            29,
            41
          ],
          [
            27,
            41
          ],
          [
            24.5,
            40.8
          ],
          [
            22.9,
            40.6
          ],
          [
            21,
            40.5
          ],
          [
            20,
            41
          ],
          [
            19.5,
            41.3
          ]
        ]
      },
      {
        "name": "Silk Road (Eastern Extension)",
        "color": "#FFD700",
        "desc": "Eastern continuation of the Silk Road through the Tarim Basin oasis cities to Chang'an (Xi'an), the Tang capital and terminus of the great trade highway.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            66,
            37.5
          ],
          [
            67,
            38.5
          ],
          [
            69.2,
            39.7
          ],
          [
            71.3,
            40.9
          ],
          [
            73.5,
            39.5
          ],
          [
            75.9,
            39.5
          ],
          [
            78,
            40.5
          ],
          [
            80.5,
            41
          ],
          [
            83.5,
            41.7
          ],
          [
            87,
            42.8
          ],
          [
            90,
            42.9
          ],
          [
            94.7,
            40.1
          ],
          [
            98.5,
            39.7
          ],
          [
            101.8,
            38.5
          ],
          [
            104.1,
            36.6
          ],
          [
            107.5,
            34.8
          ],
          [
            108.9,
            34.3
          ]
        ]
      },
      {
        "name": "Silk Road (Southern)",
        "color": "#FFC107",
        "desc": "Southern branch of the Silk Road through Bactria, the Karakoram passes, and into the Tarim Basin. Carried Buddhism from India into Central Asia and China.",
        "weight": 2,
        "opacity": 0.5,
        "status": "declining",
        "waypoints": [
          [
            51.4,
            35.7
          ],
          [
            56,
            34
          ],
          [
            60,
            33
          ],
          [
            63,
            34
          ],
          [
            66.5,
            34.5
          ],
          [
            69.5,
            35.5
          ],
          [
            72,
            36.5
          ],
          [
            74.5,
            37
          ],
          [
            76.5,
            38
          ],
          [
            78.5,
            38.5
          ]
        ]
      },
      {
        "name": "Indian Ocean Maritime Route",
        "color": "#1E88E5",
        "desc": "Monsoon-driven maritime trade linking the Red Sea and Persian Gulf to India. Ships waited for seasonal winds to carry them across; the foundation of ancient global commerce.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            35,
            31
          ],
          [
            33.5,
            28
          ],
          [
            35,
            22
          ],
          [
            38,
            17
          ],
          [
            42,
            12.5
          ],
          [
            45,
            12
          ],
          [
            50,
            14
          ],
          [
            56,
            18
          ],
          [
            60,
            22
          ],
          [
            65,
            23.5
          ],
          [
            70,
            22
          ],
          [
            72.5,
            19
          ],
          [
            75,
            15
          ],
          [
            77,
            10
          ],
          [
            79,
            7
          ]
        ]
      },
      {
        "name": "Spice Route (SE Asia)",
        "color": "#E91E63",
        "desc": "Maritime route from India through the Strait of Malacca to the Spice Islands. Carried cloves, nutmeg, pepper, and cinnamon westward.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            79,
            7
          ],
          [
            82,
            5
          ],
          [
            86,
            4
          ],
          [
            92,
            5
          ],
          [
            96,
            6
          ],
          [
            99,
            5
          ],
          [
            101,
            2.5
          ],
          [
            103.5,
            1.5
          ],
          [
            105,
            0
          ],
          [
            107,
            -2
          ],
          [
            108,
            -4
          ],
          [
            110,
            -7
          ]
        ]
      },
      {
        "name": "South China Sea Route",
        "color": "#00897B",
        "desc": "Maritime route from the Strait of Malacca through the South China Sea to Chinese ports at Guangzhou, Quanzhou, and Hangzhou.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            103.5,
            1.5
          ],
          [
            105,
            3
          ],
          [
            107,
            6
          ],
          [
            109,
            10
          ],
          [
            110,
            14
          ],
          [
            112,
            18
          ],
          [
            114,
            22.5
          ],
          [
            117,
            25
          ],
          [
            120,
            28
          ],
          [
            121.5,
            31
          ]
        ]
      },
      {
        "name": "East African Coast Trade",
        "color": "#7C4DFF",
        "desc": "Monsoon-driven trade along the Swahili coast: gold, ivory, and slaves from the African interior exchanged for Indian cloth, Chinese porcelain, and Arab glass.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            45,
            12
          ],
          [
            44.5,
            8
          ],
          [
            43,
            4
          ],
          [
            41.5,
            1
          ],
          [
            40,
            -2
          ],
          [
            39.5,
            -4
          ],
          [
            39.5,
            -6.5
          ],
          [
            40,
            -8.5
          ],
          [
            40.5,
            -10
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (West)",
        "color": "#FF8F00",
        "desc": "Gold and salt trade across the western Sahara, connecting Morocco and the Maghreb to the Ghana/Mali empires. Camel caravans crossing vast desert.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -8,
            32
          ],
          [
            -6,
            30
          ],
          [
            -5,
            27
          ],
          [
            -4,
            24
          ],
          [
            -3.5,
            20
          ],
          [
            -3,
            17.5
          ],
          [
            -4,
            15
          ],
          [
            -5.5,
            13.5
          ],
          [
            -8,
            12.5
          ]
        ]
      },
      {
        "name": "Trans-Saharan Route (Central)",
        "color": "#FF8F00",
        "desc": "Central trans-Saharan route connecting North Africa to the Hausa city-states and Lake Chad region through Agadez.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            3,
            34
          ],
          [
            4,
            31
          ],
          [
            5,
            28
          ],
          [
            6,
            25
          ],
          [
            7,
            22
          ],
          [
            8,
            19
          ],
          [
            8.5,
            16
          ],
          [
            8,
            14
          ],
          [
            7.5,
            12
          ]
        ]
      },
      {
        "name": "Hanseatic Trade Network",
        "color": "#546E7A",
        "desc": "League of trading cities controlling commerce across the North Sea and Baltic. Furs, fish, grain, timber, and Flemish cloth.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -1,
            54
          ],
          [
            3,
            53.5
          ],
          [
            7,
            53.5
          ],
          [
            10,
            53.5
          ],
          [
            12,
            54
          ],
          [
            14,
            54.5
          ],
          [
            18,
            54.5
          ],
          [
            21,
            55
          ],
          [
            24,
            56.5
          ],
          [
            26,
            59
          ]
        ]
      },
      {
        "name": "Mesoamerican Trade Network",
        "color": "#EF6C00",
        "desc": "Exchange networks linking the Valley of Mexico, Oaxaca, and the Maya lowlands. Obsidian, cacao, jade, quetzal feathers, and cotton.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -99,
            19.5
          ],
          [
            -97,
            18.5
          ],
          [
            -95.5,
            17
          ],
          [
            -93,
            17
          ],
          [
            -91,
            17.5
          ],
          [
            -90,
            18.5
          ],
          [
            -89,
            20
          ],
          [
            -88,
            21
          ]
        ]
      },
      {
        "name": "Andean Exchange Route",
        "color": "#8D6E63",
        "desc": "Trade and exchange along the Andes spine, connecting coastal fishing communities with highland agricultural centers. Precursor to the Inca Qhapaq Ñan road system.",
        "weight": 4,
        "opacity": 0.9,
        "status": "peak",
        "waypoints": [
          [
            -80,
            -4
          ],
          [
            -79.5,
            -6
          ],
          [
            -78.5,
            -8
          ],
          [
            -77,
            -10
          ],
          [
            -76,
            -12
          ],
          [
            -75.5,
            -14
          ],
          [
            -75,
            -16
          ],
          [
            -70,
            -17.5
          ]
        ]
      },
      {
        "name": "Grand Canal",
        "color": "#4FC3F7",
        "desc": "China's Grand Canal: the world's longest artificial waterway, linking the Yangtze Delta to northern China. Critical for grain transport and military logistics.",
        "weight": 2.5,
        "opacity": 0.7,
        "status": "active",
        "waypoints": [
          [
            120.5,
            31
          ],
          [
            118.5,
            32.5
          ],
          [
            117,
            34
          ],
          [
            115,
            35.5
          ],
          [
            114.5,
            37
          ],
          [
            116.5,
            39.5
          ],
          [
            117,
            40
          ]
        ]
      }
    ]
  }
];
