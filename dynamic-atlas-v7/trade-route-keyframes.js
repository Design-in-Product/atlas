const TRADE_ROUTE_KEYFRAMES = [
  {
    year: -500,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      }
    ]
  },
  {
    year: -480,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      }
    ]
  },
  {
    year: -336,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      }
    ]
  },
  {
    year: -323,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      }
    ]
  },
  {
    year: -200,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      }
    ]
  },
  {
    year: -150,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: -44,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: -27,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 50,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Royal Road",
        color: "#FF9800",
        desc: "The Achaemenid Royal Road from Sardis to Susa, one of the ancient world's great highways. Courier stations allowed messages to cross the empire in days.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[27.0, 38.5], [29.0, 39.0], [32.0, 39.5], [35.0, 38.0], [37.0, 37.5], [39.0, 37.0], [43.0, 35.0], [46.0, 34.0], [48.5, 32.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 117,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 200,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 250,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Incense Route",
        color: "#AB47BC",
        desc: "Carried frankincense and myrrh from southern Arabia (modern Yemen/Oman) north through the Hejaz to markets in the Levant and Egypt. Enormously profitable in antiquity.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[45.0, 14.0], [44.0, 17.0], [42.0, 21.0], [39.8, 24.5], [37.0, 27.5], [36.0, 29.5], [35.5, 31.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 300,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 350,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 395,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 476,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 530,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 570,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 632,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 680,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 750,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 850,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 900,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1000,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1071,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1100,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1200,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1300,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 4,
        opacity: 0.9,
        status: "peak",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1350,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  },
  {
    year: 1453,
    features: [
      {
        name: "Silk Road (Northern)",
        color: "#FFD700",
        desc: "The great overland trade corridor connecting the Mediterranean world to China via Central Asia. Carried silk, spices, gems, and ideas across thousands of miles.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[36.2, 36.2], [38.0, 36.5], [40.5, 37.5], [43.0, 36.5], [44.4, 33.3], [47.0, 34.0], [51.4, 35.7], [54.0, 36.5], [58.5, 37.5], [62.0, 37.0], [66.0, 37.5]]
      },
      {
        name: "Mediterranean Sea Lanes",
        color: "#42A5F5",
        desc: "The great maritime highways connecting all the major ports of the Mediterranean. Grain from Egypt, wine from Greece, metals from Iberia, and every commodity in between.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[-5.0, 36.0], [-1.0, 37.0], [3.0, 37.5], [9.0, 37.5], [13.0, 37.5], [15.0, 38.5], [18.0, 39.5], [21.5, 37.5], [24.5, 36.0], [28.0, 36.5], [30.0, 35.0], [33.0, 34.5], [35.0, 34.5]]
      },
      {
        name: "Egypt–Alexandria Route",
        color: "#42A5F5",
        desc: "Branch connecting Alexandria and the Nile Delta to the main Mediterranean sea lanes. Alexandria was the ancient world's greatest commercial port.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[24.5, 36.0], [26.0, 34.0], [28.5, 32.0], [29.9, 31.2]]
      },
      {
        name: "Red Sea–India Route",
        color: "#26A69A",
        desc: "Maritime trade through the Red Sea using monsoon winds to reach India. Roman merchants exported gold and imported pepper, silk, and gems. Later dominated by Arab traders.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.9, 31.2], [32.0, 30.0], [33.5, 28.0], [35.5, 24.0], [38.0, 19.0], [43.0, 13.0], [48.0, 11.0], [55.0, 15.0], [60.0, 22.0]]
      },
      {
        name: "Persian Gulf Route",
        color: "#26A69A",
        desc: "Maritime route through the Persian Gulf connecting Mesopotamia to India and beyond. Basra and Siraf were major entrepots, especially under the Abbasid Caliphate.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[47.5, 30.5], [49.5, 29.5], [51.0, 28.0], [53.0, 26.5], [56.0, 25.0], [58.0, 23.0], [60.0, 22.0]]
      },
      {
        name: "Constantinople–Black Sea",
        color: "#78909C",
        desc: "Trade through the Bosphorus into the Black Sea, connecting Constantinople to the grain-producing regions of Crimea, the Caucasus, and the steppe peoples.",
        weight: 2.5,
        opacity: 0.7,
        status: "active",
        waypoints: [[29.0, 41.0], [30.5, 41.5], [32.0, 42.0], [34.0, 43.0], [36.5, 44.5], [38.0, 45.5]]
      },
      {
        name: "Via Egnatia",
        color: "#FF7043",
        desc: "The great Roman road connecting Constantinople (Byzantium) westward through Thessalonica to the Adriatic coast. A vital artery for both trade and military logistics.",
        weight: 1.5,
        opacity: 0.4,
        status: "minor",
        waypoints: [[29.0, 41.0], [27.0, 41.0], [24.5, 40.8], [22.9, 40.6], [21.0, 40.5], [20.0, 41.0], [19.5, 41.3]]
      }
    ]
  }
];