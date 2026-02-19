# Religion Layer — Keyframe Sketch (Draft)

## Design Principles

- Show **majority/dominant tradition** per region, not individual belief
- Boundaries are approximate — think classroom map, not census data
- Where genuinely mixed or contested, we can leave gaps or show overlap
- Religion changes slower than politics, so not every political keyframe needs a religion change — many consecutive keyframes will share the same religion map
- Aligned to our existing 29 political keyframes (500 BCE – 1453 CE)

## Traditions to Track

| Code | Tradition | Color suggestion |
|------|-----------|-----------------|
| POLY-GR | Greek polytheism | light purple |
| POLY-EG | Egyptian polytheism | gold |
| POLY-ME | Mesopotamian / Levantine polytheism | amber |
| POLY-RO | Roman polytheism (absorbs Greek) | light purple (same family) |
| ZORO | Zoroastrianism | deep orange |
| JUDA | Judaism (where majority, i.e., Judea) | blue |
| CHRIS | Christianity (undifferentiated, pre-schism) | red-pink |
| CHAL | Chalcedonian / Orthodox Christianity | red |
| MIAPH | Miaphysite Christianity (Coptic, Armenian, Syriac) | rose/salmon |
| EAST | Church of the East (Nestorian) | dark pink |
| LATIN | Latin-rite / Catholic Christianity | crimson |
| SUNNI | Sunni Islam | green |
| SHIA | Shia Islam | darker green / teal |
| PAGAN | Steppe / pre-conversion traditions | gray |
| ARAB-P | Pre-Islamic Arabian polytheism | tan |

Note: We probably don't need all of these at launch. A first pass could collapse to ~6-7 categories and split finer later. See "Simplified First Pass" at the end.

---

## Keyframe-by-Keyframe Sketch

### -500 (500 BCE) — Classical Polytheism + Zoroastrianism

| Zone | Tradition | Notes |
|------|-----------|-------|
| Greece, Aegean, W. Anatolia | POLY-GR | Greek city-states |
| Egypt | POLY-EG | Late pharaonic period |
| Levant, Mesopotamia | POLY-ME | Mixed Babylonian/Aramean |
| Persia, E. Mesopotamia, E. Anatolia | ZORO | Achaemenid state religion |
| Judea (small zone) | JUDA | Post-exilic Judaism |
| Arabia | ARAB-P | Various tribal polytheisms |

**Religion keyframe: YES — baseline**

### -480 to -323 (Persian Wars through Alexander)

Same map. Alexander conquers the Persian Empire but doesn't change anyone's religion. Greek culture spreads (Hellenization) but that's culture, not religion per se. Zoroastrianism continues in the east, Greek polytheism continues in the west.

**Religion keyframe: NO — same as -500**

### -200 to -44 (Hellenistic / Late Republic)

Subtle shift: Hellenistic syncretism means Greek and Near Eastern religions blend (Serapis cult, etc.), but the *zones* don't really change. Zoroastrianism still dominant in Parthian territory. Judaism still centered in Judea but diaspora communities in Alexandria, Antioch, Rome.

**Religion keyframe: NO — same as -500 (with minor label updates at most)**

### -27 to 117 (Early Roman Empire)

The map is still polytheist-west, Zoroastrian-east, with Judaism in Judea. Christianity exists but is a tiny minority — not mappable at our scale yet. The big change: Roman polytheism has now absorbed/succeeded Greek polytheism across the western half. Functionally similar, but we could relabel.

**Religion keyframe: MINOR — relabel POLY-GR → POLY-RO in Roman territories. Zones unchanged.**

### 200 (Severan Dynasty)

Christianity is now a significant minority across the Roman Empire but not yet majority anywhere at the provincial scale. Zoroastrianism still holds east. Judaism dispersed after 70 CE and 135 CE (Temple destruction, Bar Kokhba). Mani is about to start Manichaeism in Persia.

**Religion keyframe: MINOR — remove JUDA as a territorial block (diaspora now). Otherwise similar.**

### 250–300 (Crisis through Tetrarchy)

Christianity growing rapidly, maybe 10-15% of Roman population. Still not majority at our scale. Zoroastrian east unchanged. The map looks similar.

**Religion keyframe: NO**

### 350 (Constantinian era)

**Big shift.** Christianity is now favored (Edict of Milan 313, Constantinople founded 330, Council of Nicaea 325). By ~350 it's arguably majority in much of the eastern Roman Empire — certainly in the Levant, Egypt, Anatolia, Greece. The western empire is more mixed but trending Christian. Persia is still Zoroastrian.

| Zone | Tradition | Notes |
|------|-----------|-------|
| Roman Empire (east) | CHRIS | Majority Christian, state-favored |
| Roman Empire (west) | CHRIS | Growing majority, some rural paganism |
| Sasanian Persia | ZORO | State Zoroastrianism |
| Arabia | ARAB-P | Still pre-Islamic polytheism |
| Armenia (small) | CHRIS | First state to adopt Christianity, ~301 |

**Religion keyframe: YES — major transition (polytheism → Christianity across Roman world)**

### 395 (East-West Split)

Same religion map as 350 essentially. The political split doesn't immediately create a religious split — both halves are Christian, both under Nicene orthodoxy (mostly). The Christological controversies are brewing but the formal splits come later.

**Religion keyframe: NO — same as 350**

### 476 (Fall of Western Rome)

Still largely the same. The Germanic kingdoms that replace Western Rome mostly convert to Arian Christianity or are converting to Catholic Christianity. The east is solidly Christian. Persia still Zoroastrian. The Christological splits are now more visible:

- Council of Chalcedon (451) creates the Chalcedonian/Miaphysite divide
- Egypt (Coptic), Armenia, parts of Syria → Miaphysite
- Constantinople, Greece, Anatolia → Chalcedonian
- Mesopotamia/Persia (Christian minority) → Church of the East

| Zone | Tradition | Notes |
|------|-----------|-------|
| Constantinople, Greece, Anatolia | CHAL | Chalcedonian orthodoxy |
| Egypt | MIAPH | Coptic Miaphysite |
| Armenia | MIAPH | Armenian Apostolic |
| Parts of Syria | MIAPH | Syriac Orthodox |
| Western Europe | LATIN | Latin Christianity (proto-Catholic) |
| Sasanian Persia | ZORO | With Church of the East minority |
| Arabia | ARAB-P | Mixed — some Christian and Jewish communities |

**Religion keyframe: YES — Christological splits now geographically visible**

### 530 (Justinian)

Same as 476. Justinian tries to reconcile Chalcedonians and Miaphysites but fails.

**Religion keyframe: NO**

### 570 (Eve of Muhammad)

Same map. Arabia is the interesting zone — mixed polytheist, Jewish, and Christian communities in the Hejaz. But at our scale, it reads as ARAB-P still.

**Religion keyframe: NO**

### 632 (Death of Muhammad)

Islam now controls the Arabian Peninsula. This is the hinge moment.

| Zone | Change |
|------|--------|
| Arabia | ARAB-P → SUNNI (Islam, not yet formally split) |
| Everything else | Unchanged from 476 |

**Religion keyframe: YES — Islam appears**

### 680 (Early Umayyad)

Massive change. Islam has swept across the Levant, Egypt, Persia, North Africa.

| Zone | Tradition | Notes |
|------|-----------|-------|
| Arabia, Levant, Egypt, N. Africa, Mesopotamia, Persia | SUNNI | Umayyad Caliphate — Islam now majority or ruling |
| Anatolia, Greece, Balkans | CHAL | Byzantine/Chalcedonian |
| Armenia | MIAPH | Persists under Islamic rule as majority locally |
| Western Europe | LATIN | |

Key nuance: the conquered populations don't convert instantly. Egypt is still majority Coptic Christian in 680, but governed by Muslims. Do we show *ruling religion* or *majority population*? I'd suggest ruling/dominant — it's what a map at this scale can honestly show, and conversion follows within a century or two.

**Religion keyframe: YES — Islam's great expansion**

### 750 (Abbasid Revolution)

Similar to 680 but Islam is now more deeply rooted. The Sunni/Shia question: the Abbasid revolution had Shia support but the Abbasids governed as Sunni. The map at this point is still basically "Islamic world" vs "Christian world" with the Sunni/Shia split not yet geographically clean.

**Religion keyframe: MINOR — possibly same as 680**

### 850 (Abbasid Fragmentation)

Now it gets interesting. Fragmentation of the caliphate doesn't change the religion map much — the fragments are all still Muslim. But Shia dynasties are starting to emerge in specific places.

**Religion keyframe: NO — political fragmentation, not religious**

### 900–1000

The Fatimid Caliphate (Ismaili Shia) takes Egypt and North Africa by 969. This is the first geographically clear Shia zone at our scale.

| Zone | Tradition | Notes |
|------|-----------|-------|
| Egypt, N. Africa, parts of Levant | SHIA | Fatimid (Ismaili) |
| Rest of Islamic world | SUNNI | Abbasid sphere |
| Anatolia, Greece, Balkans | CHAL | Byzantine |
| Western Europe | LATIN | |

**Religion keyframe: YES (at 1000) — Sunni/Shia geographic split visible**

### 1071 (Manzikert)

Seljuk Turks enter Anatolia. They're Sunni Muslim. Central Anatolia starts shifting. The religion map is changing — Islamic territory now pushing into what was Byzantine/Chalcedonian heartland.

**Religion keyframe: YES — Islam enters Anatolia**

### 1100–1200 (Crusader period)

Small Crusader states in the Levant (Latin Christian). Interesting but tiny on the map. Anatolia increasingly mixed — western coast still Christian, interior increasingly Muslim.

| Zone | Tradition | Notes |
|------|-----------|-------|
| Crusader states (thin coastal strip) | LATIN | Might be too small to show |
| Fatimid → Ayyubid Egypt | SUNNI | Saladin restores Sunni rule in Egypt by 1171 |

**Religion keyframe: YES (at 1200) — Egypt flips back to Sunni, Anatolia shifting**

### 1300

Mongol invasions didn't change the religion map permanently — the Ilkhanate converts to Islam within a generation. Ottoman territory in NW Anatolia is Sunni. Byzantine remnant still Chalcedonian but shrinking.

**Religion keyframe: MINOR — Ottoman Anatolia now mostly Sunni**

### 1350–1453

The final picture for our timeframe:

| Zone | Tradition |
|------|-----------|
| Ottoman territory (Anatolia, Balkans expanding) | SUNNI |
| Constantinople (tiny) | CHAL |
| Egypt, Levant, Arabia | SUNNI |
| Persia | SUNNI (but Shia undercurrent — the Safavid flip comes in 1501, after our scope) |
| N. Africa | SUNNI |
| Western fringe | LATIN |

**Religion keyframe: YES (at 1453) — final state**

---

## Summary: Religion Keyframes Needed

Out of our 29 political keyframes, the religion map has ~10 distinct states:

| Religion Keyframe | Aligns to Political KF | What Changes |
|-------------------|----------------------|--------------|
| 1. Baseline | -500 | Polytheist patchwork + Zoroastrian east |
| 2. Roman relabel | ~117 | POLY-GR → POLY-RO, Judaism disperses |
| 3. Christianization | 350 | Roman world → Christian |
| 4. Christological splits | 476 | Chalcedonian / Miaphysite / Latin visible |
| 5. Islam appears | 632 | Arabia turns Islamic |
| 6. Islamic expansion | 680 | Islam sweeps Levant, Egypt, Persia, N. Africa |
| 7. Sunni/Shia split | 1000 | Fatimid Egypt = Shia zone |
| 8. Islam enters Anatolia | 1071 | Seljuks push into Byzantine heartland |
| 9. Egypt flips Sunni | 1200 | Ayyubids restore Sunni Egypt; Anatolia shifting |
| 10. Final state | 1453 | Sunni-dominant Islamic world, Orthodox remnant |

That's ~10 religion keyframes mapped onto 29 political keyframes. Between religion keyframes, the religion layer simply holds steady while politics churns underneath. This is actually a nice property — it visually communicates that religion changes on slower timescales.

---

## Simplified First Pass (Recommended)

For v7, collapse to **6 categories**:

| Code | Tradition | Color |
|------|-----------|-------|
| POLY | Polytheism (Greek/Roman/Egyptian/Mesopotamian) | light purple |
| ZORO | Zoroastrianism | deep orange |
| CHRIS | Christianity (undifferentiated) | red-pink |
| ISLAM | Islam (undifferentiated) | green |
| ARAB-P | Pre-Islamic Arabian | tan |
| JUDA | Judaism (Judea only, early period) | blue |

This tells the big story — polytheism → Christianity → Islam — without getting into Christological or Sunni/Shia splits yet. We can split those out in a later pass once the layer architecture works.

6 categories, 10 keyframes, ~5-8 polygons per keyframe. Very manageable as hand-curated data.
