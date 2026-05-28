// seeded.js — Full fallback case data for all 3 rooms
// Each case has 7 clues (5 real, 2 false), 3 theories (1 correct), explanations
// Used when Gemini API is unavailable or slow

export const SEEDED_CASES = {

  // ── ROOM 1 — Anime Detective Office ───────────────────────────────────────
  // Door 1: Cold Cases / Disappearances / Non-Violent Mysteries

  1: [
    {
      caseName: 'The Sodder Children Disappearance',
      clues: [
        {
          fact: "You find a photograph of five children, the youngest barely four years old. A note on the back reads 'Christmas, 1945.' Their expressions are unreadable — not happy, not afraid. Simply present, as if they already knew something was coming.",
          source: "West Virginia State Archives — Sodder Family Records, 1945",
          ref: "wvculture.org/history",
          isReal: true,
        },
        {
          fact: "You discover a handwritten letter from the mother, written years after the incident. She describes waking to find the house on fire — and noticing that the family's two trucks, usually parked outside, had been moved during the night by an unknown party.",
          source: "Smithsonian Magazine — The Sodder Children, 2019",
          ref: "smithsonianmag.com/history/the-sodder-children",
          isReal: true,
        },
        {
          fact: "You find a fire marshal's report dated three days after the blaze. It states the fire burned too fast and too completely for a residential structure. The origin point listed is the basement — but the family had no basement furnace running that night.",
          source: "Fayette County Fire Investigation Report, December 1945",
          ref: "newspapers.com/fayettecounty",
          isReal: true,
        },
        {
          fact: "A witness statement from a neighbour describes seeing a man throw a ball of fire at the house from the roadside in the hours before the blaze began. The statement was taken but never included in the official investigation summary.",
          source: "Fayette County Sheriff's Department — Witness Statements, 1945",
          ref: "wvrecordnews.com",
          isReal: true,
        },
        {
          fact: "You find a photograph mailed to the family eighteen years after the disappearance — no return address, no message. The photograph shows a man in his early twenties whose face bears a striking resemblance to one of the missing boys as he would have aged.",
          source: "Life Magazine — The Sodder Mystery, 1967",
          ref: "life.com/history/sodder",
          isReal: true,
        },
        {
          fact: "A coroner's report lists the remains of all five children as confirmed recovered from the scene. However, the remains were buried within 24 hours without independent examination — and the total mass recovered was inconsistent with five bodies.",
          source: "West Virginia Department of Health — Incident Report, 1945",
          ref: "wvdhhr.org/records",
          isReal: false,
          falseExplanation: "No coroner formally identified five sets of remains. The burial was premature and the remains were later found to be an unrelated animal spine — this clue plants a false official confirmation that did not exist.",
        },
        {
          fact: "A telephone operator later stated that calls placed from the Sodder residence on the night of the fire were never connected — and that the lines appeared to have been cut at the junction box before the fire began.",
          source: "Associated Press — Sodder Case Retrospective, 1949",
          ref: "apnews.com/archive",
          isReal: false,
          falseExplanation: "The telephone line failure was real, but no operator confirmed deliberate cutting at a junction box. This detail was a rumour that circulated locally but was never substantiated by any telephone company record.",
        },
      ],
      theories: [
        {
          label: "The children survived the fire and were taken by parties unknown — possibly connected to the father's refusal to join a criminal organisation he had been pressured to support.",
          isCorrect: true,
        },
        {
          label: "The fire was accidental and all five children perished. The family's refusal to accept the loss created a decades-long search for answers that did not exist.",
          isCorrect: false,
        },
        {
          label: "The father staged the disappearance himself to collect insurance and relocate the children to relatives in Italy, where the family had ties.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Investigators and the family came to believe the children were abducted — possibly by individuals connected to a man who had threatened the father months before the fire. The case remains officially unsolved and open.",
    },

    {
      caseName: 'The Somerton Man',
      clues: [
        {
          fact: "You find a physical description: a well-dressed man, athletic build, no identification. Found on a beach at dawn. His shoes were polished. His clothes had all labels removed — every single one, cut out cleanly before he arrived.",
          source: "South Australian Police — Incident Report, December 1948",
          ref: "police.sa.gov.au/history",
          isReal: true,
        },
        {
          fact: "You discover a hidden pocket sewn into the waistband of his trousers — inside, a tightly rolled scrap of paper with two words printed from a rare book: Tamam Shud. In Persian, it means 'it is ended.'",
          source: "University of Adelaide — Tamam Shud Investigation Files, 1949",
          ref: "adelaide.edu.au/library/special",
          isReal: true,
        },
        {
          fact: "A copy of the Rubaiyat of Omar Khayyam — the only known edition containing the torn page — was found in a car parked near the beach. Inside the back cover: an uncracked code of five lines, and a phone number.",
          source: "Australian National Archives — Somerton Man File, 1949",
          ref: "naa.gov.au/explore-collection/somerton-man",
          isReal: true,
        },
        {
          fact: "The phone number in the book led to a woman who denied knowing the man — but who, when shown a cast of his face, visibly reacted and looked away. She would not speak further and was never formally charged.",
          source: "Adelaide Advertiser — Somerton Man Investigation, 1949",
          ref: "adelaidenow.com.au/archive",
          isReal: true,
        },
        {
          fact: "Toxicology found no cause of death. His organs showed signs consistent with poisoning by a rare undetectable compound — but the technology of the time could not isolate it. His body was exhumed decades later for DNA analysis.",
          source: "Journal of Forensic Sciences — Somerton Exhumation Review, 2022",
          ref: "onlinelibrary.wiley.com/journal/jofs",
          isReal: true,
        },
        {
          fact: "A railway worker confirmed checking a suitcase into the Adelaide train station on the morning of the discovery — matching the man's description. The suitcase was found to contain a stencilling tool used in military supply operations.",
          source: "South Australian Railways — Luggage Log, December 1948",
          ref: "history.sa.gov.au",
          isReal: false,
          falseExplanation: "The suitcase was real, but no railway worker confirmed seeing the man personally. The stencilling tool's military connection was speculated but never confirmed as evidence of espionage activity.",
        },
        {
          fact: "Dental records submitted to Interpol in 1950 returned a match to a former Soviet intelligence officer reported missing in Vienna in 1947. The match was later quietly withdrawn without explanation.",
          source: "Interpol Missing Persons Registry — Cross Reference Report, 1950",
          ref: "interpol.int/archive",
          isReal: false,
          falseExplanation: "No confirmed Interpol match was ever returned for this case. This clue reflects a persistent rumour about Cold War espionage involvement — plausible given the era, but entirely unverified.",
        },
      ],
      theories: [
        {
          label: "A Cold War intelligence operative who deliberately concealed his identity and took his own life on a foreign shore — carrying a coded message that was never decoded.",
          isCorrect: true,
        },
        {
          label: "A heartbroken man who travelled to the beach to end his life after a failed love affair with the woman whose number was in the book.",
          isCorrect: false,
        },
        {
          label: "A merchant sailor who died of natural causes — the mystery of his identity the result of a simple bureaucratic failure to cross-reference shipping manifests.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The prevailing theory among investigators is Cold War espionage — the removed labels, the rare coded book, the undetectable poison, and the woman's reaction all point to a trained operative. His identity remains officially unknown.",
    },

    {
      caseName: 'The Beaumont Children',
      clues: [
        {
          fact: "You find a bus ticket stub for three children — two girls and a boy, the youngest four. They were seen boarding alone on a summer morning in January 1966. A witness watched them walk toward the beach. That was the last confirmed sighting.",
          source: "South Australian Police — Beaumont Case File, 1966",
          ref: "police.sa.gov.au/cold-cases/beaumont",
          isReal: true,
        },
        {
          fact: "Multiple witnesses reported seeing the children at the beach with a tall, blond man — approximately thirty years old. The children appeared comfortable with him, as though they knew him. He bought them lunch. Nobody knew who he was.",
          source: "Adelaide Advertiser — Beaumont Investigation, January 1966",
          ref: "adelaidenow.com.au/beaumont",
          isReal: true,
        },
        {
          fact: "The eldest girl had been given money for the bus fare home — a pound note. At the milk bar, she paid for food with a larger note and received change. She did not have that money when she left home. Someone gave it to her.",
          source: "Beaumont Family Statement — South Australian Police Records, 1966",
          ref: "police.sa.gov.au/cold-cases",
          isReal: true,
        },
        {
          fact: "A psychic hired by a television network claimed to identify a burial site on a property in Mildura. Excavation was conducted in 2006 and again in 2013. Ground-penetrating radar detected anomalies — but excavation found nothing conclusive.",
          source: "ABC Australia — Beaumont Children Investigation, 2013",
          ref: "abc.net.au/news/beaumont",
          isReal: true,
        },
        {
          fact: "A man named Arthur Stanley Brown was later identified by investigators as a strong suspect — a known predator who lived near the beach. He died in 1995 without confessing. A property he owned was excavated after his death.",
          source: "South Australian Major Crime Investigation Branch — Cold Case Review, 2018",
          ref: "police.sa.gov.au/mcib",
          isReal: true,
        },
        {
          fact: "A signed note was recovered from the beach area matching the eldest girl's handwriting. It read simply: 'We are going with a friend.' Handwriting analysts confirmed authenticity in 1968.",
          source: "Forensic Document Laboratory — South Australia, 1968",
          ref: "forensicscience.sa.gov.au",
          isReal: false,
          falseExplanation: "No such note was ever recovered or authenticated. This clue implies the children went willingly and knowingly — a misleading detail designed to support the 'accidental separation' theory.",
        },
        {
          fact: "The family's regular bus driver later stated he believed the children had taken a different route that day — possibly toward Glenelg North rather than the beach — contradicting all witness accounts placing them at Colley Reserve.",
          source: "Adelaide Transit Authority — Driver Statement, 1966",
          ref: "adelaidemetro.com.au/history",
          isReal: false,
          falseExplanation: "Witness accounts consistently placed the children at Colley Reserve beach. No bus driver statement contradicted this. This false clue is designed to create geographic confusion and undermine the blond man sightings.",
        },
      ],
      theories: [
        {
          label: "The children were taken by a known predator who had been operating in the area — a man with a history of approaching children at the beach who died before he could be charged.",
          isCorrect: true,
        },
        {
          label: "The children wandered from the beach and drowned in a rip current. Their bodies were never recovered due to the strength of the tides that day.",
          isCorrect: false,
        },
        {
          label: "The children were taken interstate by a couple who had been seen near the beach — not a lone man — and were raised under assumed identities.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Arthur Stanley Brown remains the strongest suspect. He matched the description of the man seen with the children and had a documented history of predatory behaviour in the area. The case remains open.",
    },

    {
      caseName: 'The Flannan Isles Lighthouse Mystery',
      clues: [
        {
          fact: "You find the lighthouse log. The final entry is dated December 15th, 1900 — three days before the relief vessel arrived to find the lighthouse empty. The last words written describe a storm more violent than any the keepers had seen in twenty years.",
          source: "Northern Lighthouse Board — Flannan Isles Log, December 1900",
          ref: "nlb.org.uk/lighthouse-records",
          isReal: true,
        },
        {
          fact: "You discover that one of the three keepers had left the lighthouse without his waterproof coat — an act no experienced lighthouse keeper would commit willingly in Atlantic weather. The coat was hanging on its hook, undisturbed.",
          source: "Commissioners of Northern Lighthouses — Investigation Report, 1901",
          ref: "nlb.org.uk/flannan-inquiry",
          isReal: true,
        },
        {
          fact: "A chair inside the lighthouse had been knocked over and not righted. A meal was set on the table — half eaten, then abandoned mid-bite. Whatever caused the men to leave did so with extreme and sudden urgency.",
          source: "Edinburgh Evening News — Flannan Isles Report, January 1901",
          ref: "britishnewspaperarchive.co.uk",
          isReal: true,
        },
        {
          fact: "The relief vessel captain noted that one of the iron railings on the western landing had been bent and twisted — a level of force that would require either extraordinary wave action or considerable mechanical effort to produce.",
          source: "Captain Harvie's Official Report — Northern Lighthouse Board, January 1901",
          ref: "nlb.org.uk/captain-harvie",
          isReal: true,
        },
        {
          fact: "You find a second log — an informal personal journal kept by one keeper — in which he writes of his colleagues becoming increasingly disturbed in the days before the disappearance. He describes one man weeping and another refusing to speak.",
          source: "Personal Effects — Flannan Isles Keeper's Journal, recovered 1901",
          ref: "nationalarchives.gov.uk/scotland",
          isReal: true,
        },
        {
          fact: "A passing cargo vessel logged a distress signal from the Flannan Isles direction on the night of December 14th — a series of flashes inconsistent with the lighthouse's official pattern. The signal was not investigated.",
          source: "Board of Trade Shipping Records — December 1900",
          ref: "maritimehistoryarchive.org",
          isReal: false,
          falseExplanation: "No distress signal from the lighthouse was logged by any passing vessel in December 1900. This clue falsely implies an outside vessel witnessed the event — designed to support theories involving a visiting ship.",
        },
        {
          fact: "A local fisherman claimed to have seen three men on the rocks below the lighthouse on the afternoon of December 15th — arguing violently. He did not report it until the disappearance became public knowledge weeks later.",
          source: "Hebrides Witness Statements — Northern Lighthouse Board Inquiry, 1901",
          ref: "nlb.org.uk/witness-statements",
          isReal: false,
          falseExplanation: "No such witness statement exists in the official inquiry. This clue is designed to make a conflict-between-keepers theory seem credible — but it has no basis in the historical record.",
        },
      ],
      theories: [
        {
          label: "A rogue wave or series of extreme waves struck the western landing while the men were inspecting storm damage — sweeping all three into the sea before any could raise an alarm.",
          isCorrect: true,
        },
        {
          label: "A violent altercation between the keepers resulted in two deaths and one disappearance — the overturned chair and abandoned meal evidence of a sudden confrontation.",
          isCorrect: false,
        },
        {
          label: "A foreign vessel made an unscheduled landing at the island and took the men aboard — either by force or by some arrangement that was never recorded.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The most widely accepted explanation is a rogue wave event. The bent railing, the missing coat, the abandoned meal, and the storm log all point to an emergency at the western landing that gave the men no time to react.",
    },

    {
      caseName: 'The Isabella Stewart Gardner Museum Theft',
      clues: [
        {
          fact: "You find the security log from the night of March 18th, 1990. Two men in police uniforms arrived at 1:24am and told the guard there was a disturbance. The guard — against protocol — buzzed them in without calling the police to verify.",
          source: "Isabella Stewart Gardner Museum — Security Incident Report, March 1990",
          ref: "gardnermuseum.org/theft",
          isReal: true,
        },
        {
          fact: "The thieves spent 81 minutes inside the museum. They handcuffed both guards to pipes in the basement, then moved methodically through three rooms — cutting canvases from frames, leaving the frames behind. They knew exactly what they wanted.",
          source: "FBI Art Crime Team — Gardner Museum Case File, 1990",
          ref: "fbi.gov/investigate/violent-crime/art-theft/gardner",
          isReal: true,
        },
        {
          fact: "Among the thirteen stolen works was Vermeer's 'The Concert' — one of only 34 known Vermeers in existence. The theft represented the largest private property theft in history. The works have never been recovered.",
          source: "Interpol Art Theft Database — Gardner Case Entry, 1990",
          ref: "interpol.int/art-theft/gardner",
          isReal: true,
        },
        {
          fact: "The FBI later confirmed they knew the identity of the thieves — two men connected to the Boston criminal underworld. Both died before charges could be filed. The paintings are believed to have passed through multiple hands since.",
          source: "Boston Globe — Gardner Museum Investigation, 2013",
          ref: "bostonglobe.com/gardner-theft",
          isReal: true,
        },
        {
          fact: "The museum still displays the empty frames where the paintings hung. A $10 million reward remains unclaimed. The FBI received a credible tip in 2013 placing the works in Connecticut and Philadelphia — neither lead was confirmed.",
          source: "FBI Press Release — Gardner Museum Reward, March 2013",
          ref: "fbi.gov/news/press-releases/gardner-museum",
          isReal: true,
        },
        {
          fact: "A guard who was on duty that night passed a polygraph examination administered by the FBI the following week, confirming he had no prior knowledge of the theft or the identities of the men.",
          source: "FBI Internal Memorandum — Gardner Investigation, April 1990",
          ref: "fbi.gov/vault/gardner",
          isReal: false,
          falseExplanation: "The guard was investigated but no polygraph results were made public. One guard was later believed by investigators to have possibly had prior knowledge of or connection to the thieves — this clue falsely clears him.",
        },
        {
          fact: "Security footage recovered from a camera covering the museum's rear entrance shows a van parked outside from 11pm — two hours before the thieves arrived at the front — suggesting a second team performed surveillance.",
          source: "Gardner Museum CCTV Analysis — FBI Evidence File, 1990",
          ref: "fbi.gov/vault/gardner-cctv",
          isReal: false,
          falseExplanation: "The museum's security camera system was not functioning properly that night. No usable rear entrance footage was recovered. This clue falsely implies a two-team operation with a surveillance phase.",
        },
      ],
      theories: [
        {
          label: "An organised crime operation commissioned the theft as a way to secure leverage — stolen masterworks used as collateral in criminal negotiations, never intended to be sold openly.",
          isCorrect: true,
        },
        {
          label: "A private collector hired the thieves to steal specific works for a personal collection — the methodical selection of pieces evidence of a pre-existing wish list.",
          isCorrect: false,
        },
        {
          label: "The theft was an inside job orchestrated by museum staff who had financial motives and provided floor plans and schedules to the thieves in advance.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The FBI's strongest theory is organised crime — specifically figures connected to the Boston Irish mob who used stolen art as bargaining chips. The paintings have likely changed hands multiple times and may be hidden or destroyed.",
    },
  ],

  // ── ROOM 2 — FBI Noir Office ───────────────────────────────────────────────
  // Door 2: Unsolved Homicides / Suspicious Deaths

  2: [
    {
      caseName: 'The Black Dahlia Murder',
      clues: [
        {
          fact: "You find a police photograph taken at the scene in Leimert Park, January 1947. The body had been placed — not dumped — with a precision that suggested medical knowledge. The positioning was deliberate. Someone wanted her to be found exactly this way.",
          source: "Los Angeles Police Department — Case File B-47-0071, January 1947",
          ref: "lapdonline.org/history",
          isReal: true,
        },
        {
          fact: "The victim had been completely drained of blood before being left at the scene. The medical examiner confirmed the body had been washed and cleaned post-mortem — and that the cuts were made with surgical precision by someone with anatomical knowledge.",
          source: "Los Angeles County Coroner — Autopsy Report, January 1947",
          ref: "lacoroner.lacounty.gov/history",
          isReal: true,
        },
        {
          fact: "A package was mailed to the Los Angeles Examiner containing the victim's birth certificate, address book, and photographs — the sender had washed the items in gasoline to remove fingerprints. The postmark was downtown Los Angeles.",
          source: "Los Angeles Examiner — Editorial Archive, January 1947",
          ref: "usc.edu/libraries/la-examiner-archive",
          isReal: true,
        },
        {
          fact: "Over 150 people confessed to the murder in the weeks following press coverage. Investigators spent months eliminating false confessions. The real killer — if they confessed at all — was lost in the noise.",
          source: "LAPD Homicide Division — Black Dahlia Case Summary, 1951",
          ref: "lapdonline.org/black-dahlia",
          isReal: true,
        },
        {
          fact: "A prime suspect — a doctor with a history of violence toward women and a documented fascination with surgical procedures — was interviewed twice and released both times. He died in 1982. His son later wrote a book naming him as the killer.",
          source: "Steve Hodel — Black Dahlia Avenger, Arcade Publishing, 2003",
          ref: "blackdahliaavenger.com",
          isReal: true,
        },
        {
          fact: "A witness placed a black sedan outside the crime scene at 3am — and reported seeing two men transfer a large package from the vehicle. Their description matched composite sketches produced from other witness accounts that week.",
          source: "LAPD Witness Statement — Case File B-47-0071, January 1947",
          ref: "lapdonline.org/vault",
          isReal: false,
          falseExplanation: "No witness reported seeing two men at the scene. The two-person theory is speculative. Most investigators believe the killer acted alone — this clue plants a false second perpetrator.",
        },
        {
          fact: "The address book recovered in the package contained a page with an entry torn out — the torn edge still visible. Police theorised the killer removed their own name before mailing it.",
          source: "FBI Field Office Los Angeles — Evidence Analysis, February 1947",
          ref: "fbi.gov/vault/black-dahlia",
          isReal: false,
          falseExplanation: "The address book was reported to have had pages removed, but investigators could not confirm the killer removed their own name — this detail was press speculation presented as fact.",
        },
      ],
      theories: [
        {
          label: "A doctor or medical professional with surgical training and a documented history of violence — someone who knew the victim personally and staged the scene as a deliberate performance.",
          isCorrect: true,
        },
        {
          label: "A Hollywood figure who used his connections to suppress the investigation — the victim's proximity to the film industry pointing to a powerful figure who was never seriously questioned.",
          isCorrect: false,
        },
        {
          label: "A serial killer operating in Los Angeles during this period who was never identified — the Black Dahlia one of multiple victims whose cases were never connected.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Dr. George Hodel remains the strongest suspect among investigators and researchers. The surgical precision, the staging, and his proximity to the victim all point to him. The case remains officially unsolved.",
    },

    {
      caseName: 'The JonBenét Ramsey Case',
      clues: [
        {
          fact: "You find a ransom note — two and a half pages long, written in the house, on paper from inside the house, with a pen from inside the house. Ransom notes are almost never written at the scene. Kidnappers do not linger.",
          source: "Boulder Police Department — Ramsey Case File, December 1996",
          ref: "bouldercounty.org/district-attorney/ramsey",
          isReal: true,
        },
        {
          fact: "The ransom demand was $118,000 — almost exactly equal to the father's Christmas bonus that year, a figure that was not public knowledge. Whoever wrote the note knew the family's finances intimately.",
          source: "Boulder Police Department — Financial Records Analysis, 1997",
          ref: "bouldercounty.org/da/ramsey-financial",
          isReal: true,
        },
        {
          fact: "The child's body was found in the wine cellar of the family home by the father — who was searching the house with a family friend eight hours after the ransom note was discovered. Police had not yet searched that room.",
          source: "Boulder Police Department — Crime Scene Report, December 1996",
          ref: "bouldercounty.org/police/ramsey",
          isReal: true,
        },
        {
          fact: "DNA found under the child's fingernails and on her clothing did not match any family member. In 2008, a new DNA profile was developed from the same samples — still unmatched in any database as of the last public update.",
          source: "Colorado Bureau of Investigation — DNA Analysis Report, 2008",
          ref: "colorado.gov/cbi/ramsey-dna",
          isReal: true,
        },
        {
          fact: "A grand jury voted to indict both parents in 1999 on charges of child abuse resulting in death — but the district attorney refused to sign the indictment, citing insufficient evidence. The indictment remained sealed for thirteen years.",
          source: "Boulder County District Attorney — Grand Jury Records, released 2013",
          ref: "bouldercounty.org/da/grand-jury",
          isReal: true,
        },
        {
          fact: "A former housekeeper gave a statement confirming that a known acquaintance of the family had asked detailed questions about the home's layout and security system six weeks before the murder.",
          source: "Boulder Police Department — Supplemental Witness Statements, 1997",
          ref: "bouldercounty.org/police/statements",
          isReal: false,
          falseExplanation: "No housekeeper gave such a statement. This clue is constructed to make the intruder theory more convincing — specifically to implicate a named outsider who had no such documented contact with staff.",
        },
        {
          fact: "Handwriting analysis conducted by three independent experts in 1997 conclusively eliminated both parents as the author of the ransom note, finding no common characteristics with either writing sample.",
          source: "FBI Forensic Document Unit — Handwriting Analysis Report, 1997",
          ref: "fbi.gov/vault/ramsey",
          isReal: false,
          falseExplanation: "Handwriting analysis was conducted but results were contested — not conclusive. Some analysts found similarities to the mother's writing. 'Conclusively eliminated' is false and designed to close off the family theory prematurely.",
        },
      ],
      theories: [
        {
          label: "A family member was responsible — the length and intimacy of the ransom note, the financial reference, and the location of the body all point to someone who lived in or knew the house completely.",
          isCorrect: true,
        },
        {
          label: "An intruder entered the home through an unsecured window — the unmatched DNA evidence confirming an unknown male presence in the house that night.",
          isCorrect: false,
        },
        {
          label: "A known associate of the family with a prior history of inappropriate behaviour toward children — someone who had access to the home and was never seriously investigated.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The grand jury's sealed indictment of the parents, the ransom note written inside the house, and the precise financial knowledge all point toward family involvement. The unmatched DNA complicates but does not resolve this. The case remains open.",
    },

    {
      caseName: 'The Disappearance of Maura Murray',
      clues: [
        {
          fact: "You find a record of her final days: a series of emails sent to professors and employers on the afternoon she disappeared, citing a family emergency. No family emergency existed. Nobody knows why she sent them.",
          source: "University of Massachusetts — Email Records, February 2004",
          ref: "umass.edu/news/maura-murray",
          isReal: true,
        },
        {
          fact: "She withdrew $280 in cash from an ATM on the day she disappeared — after purchasing MapQuest directions to a cabin rental area in Vermont. The cabin was never booked. The cash was never found.",
          source: "New Hampshire State Police — Murray Case File, February 2004",
          ref: "nh.gov/safety/divisions/nhsp/cold-cases",
          isReal: true,
        },
        {
          fact: "A witness saw her car crashed against a snowbank on Route 112 at approximately 7:27pm. He stopped and spoke to her. She told him not to call police — that she had already called AAA. She had not called anyone.",
          source: "New Hampshire State Police — Witness Statement, February 2004",
          ref: "nh.gov/safety/nhsp/murray-witness",
          isReal: true,
        },
        {
          fact: "When police arrived minutes later, she was gone. Tracking dogs followed her scent to the edge of the road — then lost it. As if she had been picked up. A local man living near the site was later identified as a person of interest.",
          source: "New Hampshire State Police — Search Report, February 2004",
          ref: "nh.gov/safety/nhsp/murray-search",
          isReal: true,
        },
        {
          fact: "You find a record of a call placed from her phone at 7:24pm — three minutes before the crash witness arrived. The call lasted four seconds and connected to a number that has never been publicly identified.",
          source: "AT&T Call Records — Subpoenaed by NH State Police, 2004",
          ref: "nh.gov/safety/nhsp/murray-phone",
          isReal: true,
        },
        {
          fact: "A liquor store receipt found in the crashed vehicle confirmed she had purchased wine on the afternoon of her disappearance — and a second receipt showed she had also bought a bus ticket to Montreal, suggesting a planned border crossing.",
          source: "New Hampshire State Police — Vehicle Evidence Log, 2004",
          ref: "nh.gov/safety/nhsp/murray-vehicle",
          isReal: false,
          falseExplanation: "A liquor store purchase was confirmed but no bus ticket to Montreal was ever found. This clue is designed to support a 'planned escape to Canada' theory that investigators do not believe is credible.",
        },
        {
          fact: "Her boyfriend, contacted at West Point on the evening of the disappearance, confirmed she had called him to say she was heading home for the weekend after an argument with a roommate.",
          source: "West Point Military Academy — Contact Log, February 2004",
          ref: "westpoint.edu",
          isReal: false,
          falseExplanation: "Her boyfriend was contacted but no such specific call was confirmed. This clue fabricates a mundane domestic reason for her journey — contradicting the more troubling pattern of pre-planned withdrawal and deception.",
        },
      ],
      theories: [
        {
          label: "She was planning to disappear voluntarily — then encountered something or someone on that road that turned a planned vanishing into something far more dangerous.",
          isCorrect: true,
        },
        {
          label: "She lost control of her vehicle in winter conditions, wandered into the woods in a confused state, and died of exposure — her body undiscovered due to the depth of snowfall that winter.",
          isCorrect: false,
        },
        {
          label: "She was abducted by the driver who stopped to help her — a local man with a prior history who has since been named as a person of interest by investigators.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Most investigators believe Maura was planning to leave her life — the cash, the fake emergency emails, the MapQuest directions all suggest preparation. What happened after the crash remains unknown. The case is open.",
    },

    {
      caseName: 'The Delphi Murders',
      clues: [
        {
          fact: "You find a photograph taken by one of the two girls on the trail — a man walking toward them, hands in pockets, head slightly down. She uploaded it to Snapchat moments before the trail went silent. He did not know he had been photographed.",
          source: "Indiana State Police — Delphi Case Evidence Release, February 2017",
          ref: "in.gov/isp/cold-cases/delphi",
          isReal: true,
        },
        {
          fact: "A recording captured on one girl's phone contains a male voice saying three words clearly: 'Down the hill.' The voice is calm. Unhurried. As if giving an instruction he expected to be followed without question.",
          source: "Indiana State Police — Audio Evidence Statement, February 2017",
          ref: "in.gov/isp/delphi-audio",
          isReal: true,
        },
        {
          fact: "The bodies were found the following morning — positioned in a way that suggested the killer returned after the initial act and staged the scene. The positioning indicated knowledge of investigative procedures.",
          source: "Carroll County Coroner — Delphi Case Report, February 2017",
          ref: "carrollcountyin.gov/coroner",
          isReal: true,
        },
        {
          fact: "A man was arrested in 2022 — a local former school employee who lived near the trail. Evidence collected from his property included items linked to the crime scene. He pleaded not guilty. His trial began in 2024.",
          source: "Indiana State Police — Arrest Statement, October 2022",
          ref: "in.gov/isp/delphi-arrest",
          isReal: true,
        },
        {
          fact: "Investigators revealed the killer had left behind material evidence at the scene — including what appeared to be a deliberate written communication, found with the victims, that referenced a historical criminal case.",
          source: "Indiana State Police — Evidence Summary, released 2023",
          ref: "in.gov/isp/delphi-evidence",
          isReal: true,
        },
        {
          fact: "A retired law enforcement officer who lived three miles from the trail was investigated in 2019 after his former colleagues identified similarities between the bridge photograph and his physical description. He was cleared by DNA.",
          source: "Indiana State Police — Person of Interest Elimination Report, 2019",
          ref: "in.gov/isp/delphi-poi",
          isReal: false,
          falseExplanation: "While multiple persons of interest were investigated, no retired law enforcement officer was publicly named or cleared by DNA in connection with the Delphi case before the 2022 arrest.",
        },
        {
          fact: "The girls had told their parents they were meeting a third friend on the trail — a detail that initially led investigators to search for a witness who may have seen the suspect approach. No third friend ever came forward.",
          source: "Carroll County Sheriff — Initial Investigation Notes, February 2017",
          ref: "carrollcountyin.gov/sheriff",
          isReal: false,
          falseExplanation: "There was no confirmed third friend. This clue creates a false witness thread — designed to make the 'abduction by stranger' theory seem more witnessed and documented than it was.",
        },
      ],
      theories: [
        {
          label: "A local man — known to the community, unremarkable in appearance — who had studied investigative methods and selected the trail deliberately, knowing its blind spots and remoteness.",
          isCorrect: true,
        },
        {
          label: "An outsider passing through — the crime opportunistic rather than planned, the trail chosen at random on a day when the girls happened to be alone.",
          isCorrect: false,
        },
        {
          label: "Two perpetrators working together — the calm voice and the staging of the scene suggesting a level of organisation unlikely for a single individual.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Richard Allen, a local pharmacist and frequent user of the trail, was arrested in 2022 and charged with both murders. Evidence linked him to the scene. His trial is ongoing. The case is considered active.",
    },

    {
      caseName: 'The Chicago Tylenol Murders',
      clues: [
        {
          fact: "You find a toxicology report from September 1982. Seven people in the Chicago area died within days of each other — all from cyanide poisoning. All had taken Extra-Strength Tylenol purchased from different stores across the city.",
          source: "Illinois Department of Public Health — Toxicology Report, October 1982",
          ref: "dph.illinois.gov/history",
          isReal: true,
        },
        {
          fact: "The capsules had been opened, laced with cyanide, and resealed — then returned to store shelves. Whoever did this had access to multiple stores, a working knowledge of pharmacy packaging, and patience.",
          source: "FDA Investigation Report — Tylenol Tampering, October 1982",
          ref: "fda.gov/history/tylenol-tampering",
          isReal: true,
        },
        {
          fact: "The case triggered a complete redesign of pharmaceutical packaging across the United States — the tamper-evident seal now standard on all medication is a direct result of these seven deaths. The killer changed an entire industry.",
          source: "FDA — Tamper-Resistant Packaging Regulations, 1983",
          ref: "fda.gov/drugs/tamper-evident-packaging",
          isReal: true,
        },
        {
          fact: "A man named James Lewis wrote a letter to Johnson and Johnson demanding $1 million to stop the killings — he was convicted of extortion but never of murder. He always denied planting the capsules. He died in 2023.",
          source: "FBI — Tylenol Murders Case File, 1982",
          ref: "fbi.gov/history/famous-cases/tylenol-murders",
          isReal: true,
        },
        {
          fact: "The FBI tested over 1,500 bottles recovered from store shelves across Chicago. Only the contaminated bottles — all traceable to a specific distribution zone — contained cyanide. The tampering occurred after the products left the factory.",
          source: "FBI Evidence Analysis — Tylenol Investigation, 1982",
          ref: "fbi.gov/vault/tylenol",
          isReal: true,
        },
        {
          fact: "A disgruntled Johnson and Johnson employee was identified as a suspect in 1983 after colleagues reported he had made threatening comments about the company. He passed a polygraph and was eliminated from the investigation.",
          source: "FBI Internal Investigation File — Tylenol, 1983",
          ref: "fbi.gov/vault/tylenol-employees",
          isReal: false,
          falseExplanation: "No Johnson and Johnson employee was ever seriously investigated as a suspect. The tampering occurred at retail level, not at the factory — making an employee with factory access an implausible suspect.",
        },
        {
          fact: "Surveillance footage from two of the affected stores showed the same individual browsing the pharmacy section in the week before the poisonings — a detail withheld from the public to avoid tipping off the suspect.",
          source: "Chicago PD — Tylenol Investigation Evidence Log, 1982",
          ref: "chicagopolice.org/history",
          isReal: false,
          falseExplanation: "No surveillance footage linking a single individual to multiple stores was ever confirmed. Store security technology in 1982 was limited and no such footage was used as evidence in the investigation.",
        },
      ],
      theories: [
        {
          label: "A random actor with no direct grievance — someone who targeted a mass-market product to cause maximum harm anonymously, with no personal connection to the victims.",
          isCorrect: true,
        },
        {
          label: "James Lewis — who demonstrated both knowledge of the case and willingness to exploit it financially — carried out the poisonings himself before sending the extortion letter as a calculated distraction.",
          isCorrect: false,
        },
        {
          label: "A disgruntled pharmacy worker with access to multiple stores who targeted the product after a personal grievance with Johnson and Johnson.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The case was never solved. James Lewis remains the only person charged — for extortion, not murder. The FBI investigated over 100 suspects. The killer's identity and motive remain unknown.",
    },
  ],

  // ── ROOM 3 — Dark Memorial Study ──────────────────────────────────────────
  // Door 3: Serial Killings / Violent Unsolved Cases

  3: [
    {
      caseName: 'The Zodiac Killer',
      clues: [
        {
          fact: "You find a letter sent to the San Francisco Chronicle in August 1969. It contains a cipher — 408 symbols divided into three parts and sent to three different newspapers simultaneously. The writer demanded it be printed on the front page or he would kill again.",
          source: "San Francisco Chronicle — Zodiac Letter Archive, 1969",
          ref: "sfchronicle.com/zodiac-archive",
          isReal: true,
        },
        {
          fact: "The cipher was cracked within a week by a schoolteacher and his wife using frequency analysis. The decoded message read: 'I like killing people because it is so much fun.' A second cipher sent later has never been decoded.",
          source: "FBI Cryptanalysis Unit — Zodiac Cipher Report, 1969",
          ref: "fbi.gov/history/famous-cases/zodiac-killer",
          isReal: true,
        },
        {
          fact: "At one crime scene the killer cut a piece of fabric from a victim's shirt and later mailed it to police as proof. He was taunting investigators — demonstrating he had been at the scene and taken something they hadn't noticed was missing.",
          source: "Vallejo Police Department — Crime Scene Evidence Log, 1969",
          ref: "vallejopd.net/zodiac-case",
          isReal: true,
        },
        {
          fact: "A survivor described the attacker at Lake Berryessa as wearing a homemade executioner's hood with a crossed-circle symbol — the same symbol used in all the Zodiac letters. He spoke calmly before the attack began.",
          source: "Napa County Sheriff — Survivor Statement, September 1969",
          ref: "napapolice.com/zodiac",
          isReal: true,
        },
        {
          fact: "The letters contained references to collecting 'slaves for the afterlife' — a concept with parallels in specific occult texts. Investigators pursued this angle briefly before the letters became too numerous to analyse individually.",
          source: "SFPD Homicide Division — Zodiac Case Summary, 1970",
          ref: "sfpd.org/history/zodiac",
          isReal: true,
        },
        {
          fact: "A graphologist hired by the Chronicle in 1970 compared the Zodiac's handwriting against samples from 200 suspects and identified a 97% match with a Bay Area high school teacher who was never formally investigated.",
          source: "San Francisco Chronicle — Internal Investigation Report, 1970",
          ref: "sfchronicle.com/zodiac-graphology",
          isReal: false,
          falseExplanation: "No graphologist produced a 97% match result that was suppressed. Handwriting analysis was used but never produced a conclusive match. This clue invents a suppressed suspect to support a particular theory.",
        },
        {
          fact: "A fingerprint recovered from the cab of the final confirmed victim was matched in 2002 to a man who had died in 1992 — eliminating him as a living suspect but confirming he had contact with the scene.",
          source: "SFPD Cold Case Unit — Fingerprint Reanalysis, 2002",
          ref: "sfpd.org/cold-cases/zodiac",
          isReal: false,
          falseExplanation: "No confirmed fingerprint match has ever been produced in the Zodiac case. A partial print from the cab was analysed but never matched to any suspect. This clue falsely implies the case was close to resolution.",
        },
      ],
      theories: [
        {
          label: "A single organised offender with above-average intelligence — someone who lived and worked in the Bay Area, had military or law enforcement familiarity, and stopped killing but continued writing to maintain the terror.",
          isCorrect: true,
        },
        {
          label: "Multiple individuals using a shared identity — the variation in handwriting, weapon choice, and attack style suggesting the 'Zodiac' was a collective rather than a single killer.",
          isCorrect: false,
        },
        {
          label: "A known suspect — Arthur Leigh Allen — who was investigated three times and matched physical descriptions but whose DNA did not match samples from the letters.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The Zodiac is believed to be a single individual who committed at least five confirmed murders in Northern California between 1968 and 1969. The case remains open. No suspect has ever been charged.",
    },

    {
      caseName: 'Jack the Ripper',
      clues: [
        {
          fact: "You find a police surgeon's report from September 1888. The wounds on the victim indicate the killer possessed anatomical knowledge — the organs removed with speed and precision that suggested either medical training or extensive experience with a blade.",
          source: "Metropolitan Police — Whitechapel Murder Files, September 1888",
          ref: "nationalarchives.gov.uk/whitechapel",
          isReal: true,
        },
        {
          fact: "All five canonical victims were killed within a defined area of East London — each murder within walking distance of the others. The killer knew Whitechapel intimately. Every alley, every dead end, every shadow.",
          source: "Metropolitan Police — Whitechapel District Crime Map, 1888",
          ref: "met.police.uk/history/jack-the-ripper",
          isReal: true,
        },
        {
          fact: "The 'Dear Boss' letter, received by the Central News Agency in September 1888, coined the name 'Jack the Ripper' and promised to send the writer's 'next piece of work' — the ear of the next victim. Days later, another woman died.",
          source: "Scotland Yard — Dear Boss Letter Analysis, 1888",
          ref: "met.police.uk/archives/dear-boss",
          isReal: true,
        },
        {
          fact: "A chalk message found near a piece of evidence read: 'The Juwes are the men that will not be blamed for nothing.' Commissioner Warren ordered it erased before it could be photographed — a decision that has never been fully explained.",
          source: "Metropolitan Police Commissioner's Order — October 1888",
          ref: "nationalarchives.gov.uk/metropolitan-police",
          isReal: true,
        },
        {
          fact: "The murders stopped abruptly after November 1888. No final letter, no escalation, no known arrest. Theories include emigration, imprisonment for an unrelated offence, institutionalisation, or death. None have been confirmed.",
          source: "Casebook: Jack the Ripper — Academic Overview, 2001",
          ref: "casebook.org/ripper-suspects",
          isReal: true,
        },
        {
          fact: "A diary discovered in Liverpool in 1991 purported to be the confession of a cotton merchant — its authenticity debated for decades, with ink analysis in 2006 confirming the paper was consistent with Victorian manufacture.",
          source: "Journal of the Forensic Science Society — Diary Ink Analysis, 2006",
          ref: "forensic-science-international.com",
          isReal: false,
          falseExplanation: "The Liverpool Diary's authenticity remains deeply contested. Ink analysis produced conflicting results — some suggesting Victorian-era, others suggesting modern forgery. 'Confirmed consistent' overstates the evidence significantly.",
        },
        {
          fact: "Metropolitan Police files declassified in 1992 revealed that a named suspect had been identified by two independent witnesses in October 1888 and that an arrest warrant had been drafted but never served due to the suspect's social standing.",
          source: "Metropolitan Police — Declassified Whitechapel Files, 1992",
          ref: "nationalarchives.gov.uk/metropolitan-police-1992",
          isReal: false,
          falseExplanation: "No arrest warrant for any named suspect has been found in declassified Metropolitan Police files. This clue falsely implies a cover-up protecting a high-status individual — a popular theory with no documentary support.",
        },
      ],
      theories: [
        {
          label: "A local man with medical or butchering knowledge — socially invisible, familiar with the district's geography, and operating in a community so used to violence that he moved through it unnoticed.",
          isCorrect: true,
        },
        {
          label: "A member of the establishment whose identity was suppressed by the Metropolitan Police — the erased chalk message and the failure to pursue key leads evidence of deliberate obstruction from above.",
          isCorrect: false,
        },
        {
          label: "Aaron Kosminski — the suspect named in a recently analysed shawl containing DNA evidence — a Polish barber living in Whitechapel who was later institutionalised.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Jack the Ripper's identity has never been established. The most credible suspects share three traits: local knowledge, anatomical skill, and social invisibility. The case is the oldest unsolved serial murder investigation in history.",
    },

    {
      caseName: 'The Golden State Killer',
      clues: [
        {
          fact: "You find a pattern across three counties spanning twelve years — fifty rapes, thirteen murders, over 100 burglaries. The offender studied his targets in advance, disabled exterior lights before entering, and called victims by phone before and after attacks.",
          source: "California Department of Justice — East Area Rapist Case File, 1976–1986",
          ref: "oag.ca.gov/goldenstateKiller",
          isReal: true,
        },
        {
          fact: "Investigators noted he often brought his own rope and tape — never leaving tools at the scene. After binding victims, he would stack dishes outside bedroom doors and threaten to kill everyone if he heard the dishes fall. He had done this before.",
          source: "Sacramento County Sheriff — EAR Case Report, 1978",
          ref: "sacsheriff.com/cold-cases/ear",
          isReal: true,
        },
        {
          fact: "A caller identifying himself as the East Area Rapist contacted investigators by phone in 1977 and recited an original poem — suggesting literary intelligence and a desire for recognition that went beyond the crimes themselves.",
          source: "Sacramento Police Department — Recorded Call Transcript, 1977",
          ref: "sacpd.org/history/ear",
          isReal: true,
        },
        {
          fact: "Genealogical DNA analysis — using a public ancestry database — identified a suspect in 2018. He was a retired police officer and forensic technician who had worked cases in the same jurisdictions during the exact years of the attacks.",
          source: "California Department of Justice — Press Release, April 2018",
          ref: "oag.ca.gov/news/press-releases/gsk-arrest",
          isReal: true,
        },
        {
          fact: "The suspect pleaded guilty in 2020 to thirteen counts of murder and admitted to being the East Area Rapist. He died in prison in 2018 — before sentencing. His victims have never received a formal apology from any institution.",
          source: "Sacramento Superior Court — Plea Agreement, June 2020",
          ref: "saccourt.ca.gov/gsk",
          isReal: true,
        },
        {
          fact: "A retired FBI profiler who worked the case in the 1980s stated in a 2016 interview that he had identified the suspect by name in 1984 but was overruled by superiors who believed the crimes had stopped and resources should be reallocated.",
          source: "FBI Behavioral Science Unit — Retrospective Interview, 2016",
          ref: "fbi.gov/bsu/gsk-interview",
          isReal: false,
          falseExplanation: "No FBI profiler has publicly claimed to have identified DeAngelo by name in 1984. This clue invents a suppressed identification to create a false cover-up narrative — the case was genuinely cold until DNA genealogy cracked it.",
        },
        {
          fact: "Neighbours of the suspect later confirmed to investigators that they had reported suspicious behaviour to local police on three separate occasions in the 1990s — each time being told the reports were insufficient to act upon.",
          source: "Citrus Heights Police Department — Public Records Request, 2018",
          ref: "citrusheights.net/police/gsk",
          isReal: false,
          falseExplanation: "No neighbour reports to police connecting the suspect to suspicious behaviour were confirmed in the public record. This clue fabricates missed warning signs to support a 'system failure' theory.",
        },
      ],
      theories: [
        {
          label: "A law enforcement insider who used his professional knowledge to evade detection, study investigation techniques, and select targets in areas he knew would be under-resourced.",
          isCorrect: true,
        },
        {
          label: "A military veteran whose crimes reflected disciplined operational planning — the rope, the reconnaissance, and the controlled violence consistent with training rather than law enforcement experience.",
          isCorrect: false,
        },
        {
          label: "Two individuals — an organiser and an actor — whose partnership ended in the mid-1980s, explaining the sudden cessation of attacks at the height of the spree.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Joseph James DeAngelo, a former police officer, was identified through genealogical DNA in 2018 and pleaded guilty in 2020. He died in prison. This is one of the only cold cases in this collection that was solved.",
    },

    {
      caseName: 'The Axeman of New Orleans',
      clues: [
        {
          fact: "You find a police report from May 1918. A grocer and his wife were found in their bedroom, attacked with their own axe. The axe was found washed and left in the bathroom. A panel had been chiselled from the back door — the killer's preferred method of entry.",
          source: "New Orleans Police Department — Incident Report, May 1918",
          ref: "neworleanspolice.org/history",
          isReal: true,
        },
        {
          fact: "Over eighteen months, at least eight people were attacked — mostly Italian-American grocers. Investigators noted the victims shared an ethnicity and profession, suggesting either a personal vendetta or a pattern of targeted intimidation.",
          source: "New Orleans Times-Picayune — Axeman Coverage, 1918–1919",
          ref: "timespicayune.com/archive",
          isReal: true,
        },
        {
          fact: "A letter published in the Times-Picayune in March 1919 — signed 'The Axeman' — declared he was a demon from hottest hell and that on the night of the following Tuesday, he would spare only those homes from which jazz music could be heard.",
          source: "New Orleans Times-Picayune — Axeman Letter, March 1919",
          ref: "timespicayune.com/axeman-letter",
          isReal: true,
        },
        {
          fact: "On the night specified in the letter, jazz played across New Orleans until dawn. No attack occurred. Whether the letter writer kept their word — or whether there was no attack planned — was never determined.",
          source: "New Orleans Times-Picayune — Morning Edition, March 1919",
          ref: "timespicayune.com/jazz-night",
          isReal: true,
        },
        {
          fact: "The attacks stopped as suddenly as they began in October 1919. One theory links the cessation to the murder of a suspect — an Italian man shot dead in Los Angeles whose connections to New Orleans were never fully investigated.",
          source: "Los Angeles Police Department — Incident Report Cross-Reference, 1919",
          ref: "lapdonline.org/history/axeman",
          isReal: true,
        },
        {
          fact: "A Pinkerton detective hired privately by the Italian-American community produced a report in 1919 naming a suspect — a local businessman with a grudge against competing grocers. The report was handed to police and subsequently lost.",
          source: "Pinkerton National Detective Agency — New Orleans Field Report, 1919",
          ref: "pinkertons.com/history/archives",
          isReal: false,
          falseExplanation: "No Pinkerton report naming a suspect has been found in the historical record. This clue invents a suppressed private investigation to support a business-rivalry motive that has no documented basis.",
        },
        {
          fact: "A survivor of one attack later identified her attacker from a photograph as a man who had previously attempted to purchase her husband's grocery business — an offer her husband had refused three months before the attack.",
          source: "New Orleans Police Department — Survivor Statement, 1919",
          ref: "neworleanspolice.org/axeman-survivor",
          isReal: false,
          falseExplanation: "No survivor produced a photo identification of a business rival. While the business-grudge theory has been proposed, no victim or witness statement supports a specific commercial motive with a named individual.",
        },
      ],
      theories: [
        {
          label: "A single individual with a cultural or criminal grudge against Italian-American grocers — possibly connected to Black Hand extortion rackets operating in New Orleans at the time.",
          isCorrect: true,
        },
        {
          label: "Multiple attackers using a shared method — the variation in attack severity and the gaps between incidents suggesting opportunistic copycats rather than a single organised killer.",
          isCorrect: false,
        },
        {
          label: "A journalist or public figure who manufactured the 'Axeman' identity to sell newspapers — the jazz letter a publicity stunt, the attacks real but unconnected.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The Axeman of New Orleans was never identified. The most credible theory connects the attacks to Black Hand extortion — Italian criminals who targeted community members who refused to pay protection. The case remains unsolved.",
    },

    {
      caseName: 'The Texarkana Moonlight Murders',
      clues: [
        {
          fact: "You find a pattern across ten weeks in 1946 — five attacks, three of which were fatal, all occurring on weekends, all near lovers' lanes on the outskirts of a small town on the Texas-Arkansas border. The moon was bright on every occasion.",
          source: "Texarkana Gazette — Moonlight Murders Coverage, 1946",
          ref: "texarkanagazette.com/archive/moonlight-murders",
          isReal: true,
        },
        {
          fact: "Every victim was attacked from behind. The killer used a .32 pistol consistently. No shell casings were ever recovered — the killer retrieved them each time, a level of discipline suggesting either military training or prior experience.",
          source: "Texas Ranger Division — Texarkana Investigation Report, 1946",
          ref: "texasrangers.org/history/moonlight-murders",
          isReal: true,
        },
        {
          fact: "A sole survivor described her attacker as wearing a white cloth bag over his head with rough eye holes cut out. She said he spoke very little and moved quietly — as if he had done this before and knew exactly where to stand.",
          source: "Bowie County Sheriff — Survivor Statement, April 1946",
          ref: "bowiecountytx.gov/sheriff/history",
          isReal: true,
        },
        {
          fact: "The attacks stopped completely after the final killing in May 1946. A local man — a drifter with a violent history — was the prime suspect. He was later convicted of an unrelated murder in another state and died in prison.",
          source: "Texas Ranger Division — Suspect Summary, 1947",
          ref: "texasrangers.org/history/moonlight-suspect",
          isReal: true,
        },
        {
          fact: "The case inspired a 1976 film that dramatised the investigation. The film's release prompted new witnesses to come forward — one of whom described seeing a man matching the suspect's description near the final crime scene on the night of the attack.",
          source: "Texarkana Gazette — Post-Film Witness Accounts, 1976",
          ref: "texarkanagazette.com/archive/1976",
          isReal: true,
        },
        {
          fact: "A Texas Ranger working the case filed a private report naming a prominent local businessman — not the drifter — as his primary suspect. The report was submitted to the Governor's office and has never been made public.",
          source: "Texas State Library and Archives — Sealed Records, 1946",
          ref: "tsl.texas.gov/ranger-reports",
          isReal: false,
          falseExplanation: "No Texas Ranger report naming a prominent businessman has been found in state archives. This clue constructs a suppressed elite-suspect theory with no documentary support.",
        },
        {
          fact: "Shell casings were in fact recovered at two scenes but were withheld from public reporting to avoid tipping off the killer. Ballistic analysis confirmed both were fired from the same weapon — a military-issue pistol.",
          source: "Texas Department of Public Safety — Evidence Log, 1946",
          ref: "dps.texas.gov/history/moonlight",
          isReal: false,
          falseExplanation: "No shell casings were recovered — their absence was one of the defining features of the investigation. This clue contradicts established fact and falsely introduces military weapon provenance as confirmed evidence.",
        },
      ],
      theories: [
        {
          label: "A transient predator — possibly with military experience — who moved through the area during a specific window, committed a series of attacks, and left before investigators could close the net.",
          isCorrect: true,
        },
        {
          label: "A local resident with deep knowledge of the area — someone who attended community events, knew the victims by sight, and was never seriously investigated due to their standing in the town.",
          isCorrect: false,
        },
        {
          label: "Two individuals operating together — one who selected targets and one who carried out the attacks — explaining the survivor's account of the attacker seeming to know exactly where to position himself.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Youell Swinney, a drifter arrested in 1947 for car theft, was the prime suspect. His wife gave statements implicating him but later recanted. He was never charged with the murders. The case remains officially unsolved.",
    },
  ],
}

// Helper to get a case by room and name
export function getSeededCase(roomNum, caseName) {
  const pool = SEEDED_CASES[roomNum] || []
  return pool.find(c => c.caseName === caseName) || null
}