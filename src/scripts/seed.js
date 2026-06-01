import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envPath = path.resolve(__dirname, '../../.env.local')
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf-8')
    .split('\n')
    .forEach(line => {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
    })
} else {
  console.error('❌  .env.local not found at', envPath)
  process.exit(1)
}

const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY)

// All 15 cases sourced directly from seeded.js, restructured for the DB schema
const CASES = [

  // ── ROOM 1 — Cold Cases / Disappearances ──────────────────────────────────

  {
    case_name:   'The Sodder Children Disappearance',
    room_id:     1,
    description: 'Five children vanish after a Christmas Eve fire in 1945 West Virginia. No remains. No answers.',
    clues: [
      { fact: 'Five children were last seen on Christmas Eve 1945, with a photograph taken that day being the final confirmed record of their presence.',                                                                         source: 'West Virginia State Archives — Sodder Family Records, 1945',          is_real: true,  sort_order: 1 },
      { fact: "The mother noted that the family's two trucks, usually parked outside, had been moved during the night by an unknown party at the time of the fire.",                                                             source: 'Smithsonian Magazine — The Sodder Children, 2019',                    is_real: true,  sort_order: 2 },
      { fact: 'A fire marshal\'s report stated the fire burned too fast and too completely for a residential structure, with the origin point listed as the basement despite no furnace running that night.',                   source: 'Fayette County Fire Investigation Report, December 1945',             is_real: true,  sort_order: 3 },
      { fact: 'A witness described seeing a man throw a ball of fire at the house from the roadside before the blaze began — a statement taken but never included in the official investigation summary.',                      source: 'Fayette County Sheriff\'s Department — Witness Statements, 1945',    is_real: true,  sort_order: 4 },
      { fact: 'A photograph mailed to the family eighteen years after the disappearance — no return address, no message — showed a man whose face bore a striking resemblance to one of the missing boys as he would have aged.', source: 'Life Magazine — The Sodder Mystery, 1967',                             is_real: true,  sort_order: 5 },
      { fact: 'A coroner\'s report lists the remains of all five children as confirmed recovered from the scene, buried within 24 hours after independent examination.',                                                         source: 'West Virginia Department of Health — Incident Report, 1945',         is_real: false, sort_order: 6 },
      { fact: 'A telephone operator stated that calls placed from the Sodder residence on the night of the fire were never connected and that the lines appeared to have been cut at the junction box before the fire began.',   source: 'Associated Press — Sodder Case Retrospective, 1949',                  is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Somerton Man',
    room_id:     1,
    description: 'An unidentified man found dead on an Adelaide beach in 1948. All labels removed. A coded message. No name.',
    clues: [
      { fact: 'A well-dressed man of athletic build was found on the beach at dawn with no identification — every clothing label had been cut out cleanly before he arrived.',                                                   source: 'South Australian Police — Incident Report, December 1948',           is_real: true,  sort_order: 1 },
      { fact: 'A hidden pocket sewn into his waistband contained a tightly rolled scrap of paper with two words printed from a rare book: Tamam Shud — meaning "it is ended" in Persian.',                                     source: 'University of Adelaide — Tamam Shud Investigation Files, 1949',      is_real: true,  sort_order: 2 },
      { fact: 'A copy of the Rubaiyat of Omar Khayyam containing the torn page was found in a nearby car, with an uncracked five-line code and a phone number written inside the back cover.',                                 source: 'Australian National Archives — Somerton Man File, 1949',             is_real: true,  sort_order: 3 },
      { fact: 'The phone number led to a woman who denied knowing the man but visibly reacted when shown a cast of his face and refused to speak further.',                                                                     source: 'Adelaide Advertiser — Somerton Man Investigation, 1949',             is_real: true,  sort_order: 4 },
      { fact: 'Toxicology found no cause of death, though organs showed signs consistent with poisoning by a rare undetectable compound the technology of the time could not isolate.',                                         source: 'Journal of Forensic Sciences — Somerton Exhumation Review, 2022',   is_real: true,  sort_order: 5 },
      { fact: 'A railway worker confirmed checking in a suitcase matching the man\'s description, found to contain a stencilling tool used in military supply operations.',                                                     source: 'South Australian Railways — Luggage Log, December 1948',             is_real: false, sort_order: 6 },
      { fact: 'Dental records submitted to Interpol in 1950 returned a match to a former Soviet intelligence officer reported missing in Vienna in 1947, later quietly withdrawn without explanation.',                          source: 'Interpol Missing Persons Registry — Cross Reference Report, 1950',  is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Beaumont Children',
    room_id:     1,
    description: 'Three children vanish from an Adelaide beach in January 1966. A tall blond man. No trace.',
    clues: [
      { fact: 'Three children were seen boarding a bus alone on a summer morning in January 1966, witnessed walking toward the beach — that was the last confirmed sighting.',                                                  source: 'South Australian Police — Beaumont Case File, 1966',                 is_real: true,  sort_order: 1 },
      { fact: 'Multiple witnesses reported seeing the children at the beach with a tall blond man of about thirty who bought them lunch — the children appeared comfortable with him, as though they knew him.',                source: 'Adelaide Advertiser — Beaumont Investigation, January 1966',         is_real: true,  sort_order: 2 },
      { fact: 'The eldest girl paid for food with a note larger than her bus fare — she did not have that money when she left home, meaning someone had given it to her at the beach.',                                         source: 'Beaumont Family Statement — South Australian Police Records, 1966', is_real: true,  sort_order: 3 },
      { fact: 'Ground-penetrating radar detected anomalies at a property linked to a named suspect — excavations conducted in 2006 and 2013 found nothing conclusive.',                                                        source: 'ABC Australia — Beaumont Children Investigation, 2013',             is_real: true,  sort_order: 4 },
      { fact: 'Arthur Stanley Brown, a known predator who lived near the beach matching witness descriptions, was identified as a strong suspect and died in 1995 without confessing.',                                         source: 'South Australian Major Crime Investigation Branch — Cold Case Review, 2018', is_real: true, sort_order: 5 },
      { fact: 'A signed note recovered from the beach area matching the eldest girl\'s handwriting read simply: "We are going with a friend." Handwriting analysts confirmed authenticity in 1968.',                            source: 'Forensic Document Laboratory — South Australia, 1968',               is_real: false, sort_order: 6 },
      { fact: 'The family\'s regular bus driver stated he believed the children had taken a different route toward Glenelg North rather than the beach, contradicting all witness accounts.',                                   source: 'Adelaide Transit Authority — Driver Statement, 1966',                is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Flannan Isles Lighthouse Mystery',
    room_id:     1,
    description: 'Three experienced lighthouse keepers vanish from a remote Scottish island in December 1900. No bodies. No explanation.',
    clues: [
      { fact: 'The final log entry dated December 15th, 1900 described a storm more violent than any the keepers had seen in twenty years — written three days before the relief vessel arrived to find the lighthouse empty.',  source: 'Northern Lighthouse Board — Flannan Isles Log, December 1900',      is_real: true,  sort_order: 1 },
      { fact: 'One keeper had left without his waterproof coat — an act no experienced lighthouse keeper would commit willingly in Atlantic weather. The coat remained hanging on its hook, undisturbed.',                      source: 'Commissioners of Northern Lighthouses — Investigation Report, 1901', is_real: true,  sort_order: 2 },
      { fact: 'A chair inside the lighthouse had been knocked over and not righted, and a meal was set on the table — half eaten, then abandoned mid-bite, as if the men left with extreme and sudden urgency.',               source: 'Edinburgh Evening News — Flannan Isles Report, January 1901',        is_real: true,  sort_order: 3 },
      { fact: 'The relief vessel captain noted one of the iron railings on the western landing had been bent and twisted — a level of force requiring either extraordinary wave action or considerable mechanical effort.',      source: 'Captain Harvie\'s Official Report — Northern Lighthouse Board, January 1901', is_real: true, sort_order: 4 },
      { fact: 'A personal journal kept by one keeper described his colleagues becoming increasingly disturbed in the days before the disappearance — one man weeping, another refusing to speak.',                               source: 'Personal Effects — Flannan Isles Keeper\'s Journal, recovered 1901', is_real: true,  sort_order: 5 },
      { fact: 'A passing cargo vessel logged a distress signal from the Flannan Isles direction on the night of December 14th — a series of flashes inconsistent with the lighthouse\'s official pattern.',                     source: 'Board of Trade Shipping Records — December 1900',                   is_real: false, sort_order: 6 },
      { fact: 'A local fisherman claimed to have seen three men on the rocks below the lighthouse arguing violently on the afternoon of December 15th, not reporting it until the disappearance became public weeks later.',     source: 'Hebrides Witness Statements — Northern Lighthouse Board Inquiry, 1901', is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Isabella Stewart Gardner Museum Theft',
    room_id:     1,
    description: 'Two men posing as police officers steal thirteen works of art worth over $500 million. The largest art theft in history. Nothing recovered.',
    clues: [
      { fact: 'Two men in police uniforms arrived at 1:24am and told the guard there was a disturbance — the guard buzzed them in without calling police to verify, against protocol.',                                         source: 'Isabella Stewart Gardner Museum — Security Incident Report, March 1990', is_real: true, sort_order: 1 },
      { fact: 'The thieves spent 81 minutes inside, handcuffed both guards in the basement, then moved methodically through three rooms cutting canvases from frames — they knew exactly what they wanted.',                   source: 'FBI Art Crime Team — Gardner Museum Case File, 1990',                is_real: true,  sort_order: 2 },
      { fact: 'Among the thirteen stolen works was Vermeer\'s "The Concert" — one of only 34 known Vermeers in existence — representing the largest private property theft in history.',                                       source: 'Interpol Art Theft Database — Gardner Case Entry, 1990',             is_real: true,  sort_order: 3 },
      { fact: 'The FBI confirmed they knew the identity of the thieves — two men connected to the Boston criminal underworld — but both died before charges could be filed.',                                                  source: 'Boston Globe — Gardner Museum Investigation, 2013',                  is_real: true,  sort_order: 4 },
      { fact: 'A $10 million reward remains unclaimed, and a credible 2013 FBI tip placed the works in Connecticut and Philadelphia — neither lead was confirmed.',                                                             source: 'FBI Press Release — Gardner Museum Reward, March 2013',              is_real: true,  sort_order: 5 },
      { fact: 'The on-duty guard passed a polygraph examination administered by the FBI the following week, confirming he had no prior knowledge of the theft or the identities of the men.',                                   source: 'FBI Internal Memorandum — Gardner Investigation, April 1990',        is_real: false, sort_order: 6 },
      { fact: 'Security footage from a camera covering the rear entrance shows a van parked outside from 11pm — two hours before the thieves arrived at the front — suggesting a second surveillance team.',                   source: 'Gardner Museum CCTV Analysis — FBI Evidence File, 1990',             is_real: false, sort_order: 7 },
    ],
  },

  // ── ROOM 2 — Unsolved Homicides / Suspicious Deaths ───────────────────────

  {
    case_name:   'The Black Dahlia Murder',
    room_id:     2,
    description: 'A young woman found bisected and drained of blood in a Los Angeles park in January 1947. The killer was never found.',
    clues: [
      { fact: 'The body had been placed — not dumped — with a precision suggesting medical knowledge. The positioning was deliberate, as if the killer wanted her found exactly this way.',                                     source: 'Los Angeles Police Department — Case File B-47-0071, January 1947',  is_real: true,  sort_order: 1 },
      { fact: 'The medical examiner confirmed the body was completely drained of blood, washed post-mortem, and that the cuts were made with surgical precision by someone with anatomical knowledge.',                         source: 'Los Angeles County Coroner — Autopsy Report, January 1947',          is_real: true,  sort_order: 2 },
      { fact: 'A package mailed to the Los Angeles Examiner contained the victim\'s birth certificate, address book, and photographs — the sender had washed the items in gasoline to remove fingerprints.',                   source: 'Los Angeles Examiner — Editorial Archive, January 1947',             is_real: true,  sort_order: 3 },
      { fact: 'Over 150 people confessed to the murder in the weeks following press coverage — investigators spent months eliminating false confessions.',                                                                      source: 'LAPD Homicide Division — Black Dahlia Case Summary, 1951',           is_real: true,  sort_order: 4 },
      { fact: 'A prime suspect — a doctor with a history of violence toward women — was interviewed twice and released. He died in 1982. His son later wrote a book naming him as the killer.',                                source: 'Steve Hodel — Black Dahlia Avenger, Arcade Publishing, 2003',        is_real: true,  sort_order: 5 },
      { fact: 'A witness placed a black sedan outside the crime scene at 3am and reported seeing two men transfer a large package — their description matched composite sketches produced that week.',                          source: 'LAPD Witness Statement — Case File B-47-0071, January 1947',         is_real: false, sort_order: 6 },
      { fact: 'The address book recovered in the package contained a page with an entry torn out — police theorised the killer removed their own name before mailing it.',                                                     source: 'FBI Field Office Los Angeles — Evidence Analysis, February 1947',    is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The JonBenét Ramsey Case',
    room_id:     2,
    description: 'A six-year-old girl found murdered in her family home on Boxing Day 1996. A ransom note written inside the house. The case remains unsolved.',
    clues: [
      { fact: 'A two-and-a-half-page ransom note was written at the scene on paper from inside the house with a pen from inside the house — ransom notes are almost never written at the scene.',                              source: 'Boulder Police Department — Ramsey Case File, December 1996',        is_real: true,  sort_order: 1 },
      { fact: 'The ransom demand was $118,000 — almost exactly equal to the father\'s Christmas bonus that year, a figure that was not public knowledge.',                                                                     source: 'Boulder Police Department — Financial Records Analysis, 1997',       is_real: true,  sort_order: 2 },
      { fact: "The child's body was found in the wine cellar of the family home by the father eight hours after the ransom note was discovered — in a room police had not yet searched.",                                      source: 'Boulder Police Department — Crime Scene Report, December 1996',      is_real: true,  sort_order: 3 },
      { fact: "DNA found under the child's fingernails and on her clothing did not match any family member, and as of the last public update remains unmatched in any database.",                                              source: 'Colorado Bureau of Investigation — DNA Analysis Report, 2008',       is_real: true,  sort_order: 4 },
      { fact: 'A grand jury voted to indict both parents in 1999 on charges of child abuse resulting in death — but the district attorney refused to sign the indictment, citing insufficient evidence.',                      source: 'Boulder County District Attorney — Grand Jury Records, released 2013', is_real: true, sort_order: 5 },
      { fact: 'A former housekeeper confirmed that a known acquaintance of the family had asked detailed questions about the home\'s layout and security system six weeks before the murder.',                                  source: 'Boulder Police Department — Supplemental Witness Statements, 1997', is_real: false, sort_order: 6 },
      { fact: 'Handwriting analysis by three independent experts in 1997 conclusively eliminated both parents as the author of the ransom note, finding no common characteristics with either writing sample.',                 source: 'FBI Forensic Document Unit — Handwriting Analysis Report, 1997',     is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Disappearance of Maura Murray',
    room_id:     2,
    description: 'A University of Massachusetts student crashes her car on a remote New Hampshire road in 2004 and vanishes — after sending fake emails about a family emergency.',
    clues: [
      { fact: 'On the afternoon she disappeared, she sent emails to professors and employers citing a family emergency — no family emergency existed and nobody knows why she sent them.',                                      source: 'University of Massachusetts — Email Records, February 2004',         is_real: true,  sort_order: 1 },
      { fact: 'She withdrew $280 in cash from an ATM and purchased MapQuest directions to a cabin rental area in Vermont — the cabin was never booked and the cash was never found.',                                          source: 'New Hampshire State Police — Murray Case File, February 2004',       is_real: true,  sort_order: 2 },
      { fact: 'A witness saw her car crashed against a snowbank and spoke to her — she told him not to call police, saying she had already called AAA. She had not called anyone.',                                            source: 'New Hampshire State Police — Witness Statement, February 2004',      is_real: true,  sort_order: 3 },
      { fact: 'When police arrived minutes later she was gone — tracking dogs followed her scent to the edge of the road, then lost it, as if she had been picked up by a passing vehicle.',                                  source: 'New Hampshire State Police — Search Report, February 2004',          is_real: true,  sort_order: 4 },
      { fact: 'A four-second call was placed from her phone at 7:24pm — three minutes before the crash witness arrived — to a number that has never been publicly identified.',                                               source: 'AT&T Call Records — Subpoenaed by NH State Police, 2004',            is_real: true,  sort_order: 5 },
      { fact: 'A liquor store receipt in the vehicle confirmed a wine purchase, and a second receipt showed she had bought a bus ticket to Montreal — suggesting a planned border crossing.',                                  source: 'New Hampshire State Police — Vehicle Evidence Log, 2004',            is_real: false, sort_order: 6 },
      { fact: 'Her boyfriend at West Point confirmed she had called him to say she was heading home for the weekend after an argument with a roommate.',                                                                       source: 'West Point Military Academy — Contact Log, February 2004',           is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Delphi Murders',
    room_id:     2,
    description: 'Two teenage girls are murdered on a hiking trail in Delphi, Indiana in 2017. One of them photographed the killer on her phone.',
    clues: [
      { fact: 'One girl uploaded a photograph to Snapchat of a man walking toward them on the trail — hands in pockets, head slightly down — moments before the trail went silent.',                                           source: 'Indiana State Police — Delphi Case Evidence Release, February 2017', is_real: true, sort_order: 1 },
      { fact: 'A recording captured on one girl\'s phone contains a male voice saying three words clearly: "Down the hill" — calm and unhurried, as if giving an instruction he expected to be followed.',                    source: 'Indiana State Police — Audio Evidence Statement, February 2017',    is_real: true,  sort_order: 2 },
      { fact: 'The bodies were found the following morning positioned in a way suggesting the killer returned after the initial act and staged the scene — indicating knowledge of investigative procedures.',                  source: 'Carroll County Coroner — Delphi Case Report, February 2017',         is_real: true,  sort_order: 3 },
      { fact: 'A local former school employee who lived near the trail was arrested in 2022 — evidence from his property included items linked to the crime scene. He pleaded not guilty.',                                    source: 'Indiana State Police — Arrest Statement, October 2022',              is_real: true,  sort_order: 4 },
      { fact: 'Investigators revealed the killer left behind a deliberate written communication found with the victims that referenced a historical criminal case.',                                                            source: 'Indiana State Police — Evidence Summary, released 2023',             is_real: true,  sort_order: 5 },
      { fact: 'A retired law enforcement officer living three miles from the trail was investigated in 2019 after colleagues identified similarities between the bridge photograph and his description — cleared by DNA.',      source: 'Indiana State Police — Person of Interest Elimination Report, 2019', is_real: false, sort_order: 6 },
      { fact: 'The girls had told their parents they were meeting a third friend on the trail — initially leading investigators to search for a witness who may have seen the suspect approach. No third friend ever came forward.', source: 'Carroll County Sheriff — Initial Investigation Notes, February 2017', is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Chicago Tylenol Murders',
    room_id:     2,
    description: 'Seven people die in Chicago in 1982 after taking cyanide-laced Tylenol capsules. The killer was never identified. Tamper-evident packaging now exists because of these deaths.',
    clues: [
      { fact: 'Seven people in the Chicago area died within days of each other from cyanide poisoning — all had taken Extra-Strength Tylenol purchased from different stores across the city.',                                 source: 'Illinois Department of Public Health — Toxicology Report, October 1982', is_real: true, sort_order: 1 },
      { fact: 'The capsules had been opened, laced with cyanide, and resealed before being returned to store shelves — requiring access to multiple stores and knowledge of pharmacy packaging.',                               source: 'FDA Investigation Report — Tylenol Tampering, October 1982',         is_real: true,  sort_order: 2 },
      { fact: 'The case triggered a complete redesign of pharmaceutical packaging across the United States — the tamper-evident seal now standard on all medication is a direct result of these seven deaths.',                 source: 'FDA — Tamper-Resistant Packaging Regulations, 1983',                 is_real: true,  sort_order: 3 },
      { fact: 'James Lewis wrote a letter to Johnson and Johnson demanding $1 million to stop the killings — convicted of extortion but never of murder, he always denied planting the capsules and died in 2023.',            source: 'FBI — Tylenol Murders Case File, 1982',                              is_real: true,  sort_order: 4 },
      { fact: 'Only the contaminated bottles — all traceable to a specific distribution zone — contained cyanide across over 1,500 bottles tested, confirming the tampering occurred after the products left the factory.',    source: 'FBI Evidence Analysis — Tylenol Investigation, 1982',                is_real: true,  sort_order: 5 },
      { fact: 'A disgruntled Johnson and Johnson employee was identified as a suspect in 1983 after colleagues reported threatening comments — he passed a polygraph and was eliminated from the investigation.',               source: 'FBI Internal Investigation File — Tylenol, 1983',                    is_real: false, sort_order: 6 },
      { fact: 'Surveillance footage from two of the affected stores showed the same individual browsing the pharmacy section in the week before the poisonings — a detail withheld from the public.',                          source: 'Chicago PD — Tylenol Investigation Evidence Log, 1982',              is_real: false, sort_order: 7 },
    ],
  },

  // ── ROOM 3 — Serial Killings / Violent Unsolved Cases ─────────────────────

  {
    case_name:   'The Zodiac Killer',
    room_id:     3,
    description: 'A serial killer operates in Northern California in the late 1960s, taunting police with encrypted letters. At least five confirmed victims. Never identified.',
    clues: [
      { fact: 'A cipher of 408 symbols divided into three parts was sent simultaneously to three different newspapers — the writer demanded front-page publication or promised to kill again.',                                 source: 'San Francisco Chronicle — Zodiac Letter Archive, 1969',              is_real: true,  sort_order: 1 },
      { fact: 'The cipher was cracked within a week by a schoolteacher and his wife using frequency analysis — the decoded message read: "I like killing people because it is so much fun." A second cipher has never been decoded.', source: 'FBI Cryptanalysis Unit — Zodiac Cipher Report, 1969',           is_real: true,  sort_order: 2 },
      { fact: 'At one crime scene the killer cut a piece of fabric from a victim\'s shirt and later mailed it to police as proof — taunting investigators by demonstrating he had taken something they had not noticed was missing.', source: 'Vallejo Police Department — Crime Scene Evidence Log, 1969',    is_real: true,  sort_order: 3 },
      { fact: 'A survivor described the attacker at Lake Berryessa wearing a homemade executioner\'s hood bearing the crossed-circle Zodiac symbol — he spoke calmly before the attack began.',                                source: 'Napa County Sheriff — Survivor Statement, September 1969',           is_real: true,  sort_order: 4 },
      { fact: 'The letters contained references to collecting "slaves for the afterlife" — a concept with parallels in specific occult texts that investigators briefly pursued before the volume of letters became unmanageable.',  source: 'SFPD Homicide Division — Zodiac Case Summary, 1970',             is_real: true,  sort_order: 5 },
      { fact: 'A graphologist hired by the Chronicle in 1970 compared Zodiac\'s handwriting against 200 suspects and identified a 97% match with a Bay Area high school teacher who was never formally investigated.',            source: 'San Francisco Chronicle — Internal Investigation Report, 1970',     is_real: false, sort_order: 6 },
      { fact: 'A fingerprint recovered from the cab of the final confirmed victim was matched in 2002 to a man who had died in 1992 — eliminating him as a living suspect but confirming contact with the scene.',               source: 'SFPD Cold Case Unit — Fingerprint Reanalysis, 2002',                 is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'Jack the Ripper',
    room_id:     3,
    description: 'At least five women murdered in the Whitechapel district of London in 1888. The killer was never identified. The oldest unsolved serial murder investigation in history.',
    clues: [
      { fact: 'A police surgeon\'s report from September 1888 indicated the wounds showed anatomical knowledge — organs removed with speed and precision suggesting medical training or extensive experience with a blade.',     source: 'Metropolitan Police — Whitechapel Murder Files, September 1888',    is_real: true,  sort_order: 1 },
      { fact: 'All five canonical victims were killed within a defined area of East London — each murder within walking distance of the others, indicating the killer knew every alley and dead end in Whitechapel.',           source: 'Metropolitan Police — Whitechapel District Crime Map, 1888',         is_real: true,  sort_order: 2 },
      { fact: 'The "Dear Boss" letter received in September 1888 coined the name "Jack the Ripper" and promised to send the next victim\'s ear — days later another woman died.',                                              source: 'Scotland Yard — Dear Boss Letter Analysis, 1888',                   is_real: true,  sort_order: 3 },
      { fact: 'A chalk message found near evidence read: "The Juwes are the men that will not be blamed for nothing." Commissioner Warren ordered it erased before it could be photographed.',                                  source: 'Metropolitan Police Commissioner\'s Order — October 1888',           is_real: true,  sort_order: 4 },
      { fact: 'The murders stopped abruptly after November 1888 — no final letter, no escalation, no known arrest. Theories include emigration, imprisonment, institutionalisation, or death. None confirmed.',                 source: 'Casebook: Jack the Ripper — Academic Overview, 2001',               is_real: true,  sort_order: 5 },
      { fact: 'A diary discovered in Liverpool in 1991 purported to be the confession of a cotton merchant — ink analysis in 2006 confirmed the paper was consistent with Victorian manufacture.',                              source: 'Journal of the Forensic Science Society — Diary Ink Analysis, 2006', is_real: false, sort_order: 6 },
      { fact: 'Metropolitan Police files declassified in 1992 revealed that a named suspect had been identified by two witnesses in October 1888 and that an arrest warrant was drafted but never served due to his social standing.', source: 'Metropolitan Police — Declassified Whitechapel Files, 1992',    is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Golden State Killer',
    room_id:     3,
    description: 'A single offender commits over fifty rapes and thirteen murders across California between 1976 and 1986. Identified by DNA genealogy forty years later.',
    clues: [
      { fact: 'A pattern across three counties spanning twelve years — fifty rapes, thirteen murders, over 100 burglaries — the offender studied targets in advance, disabled exterior lights, and called victims before and after attacks.', source: 'California Department of Justice — East Area Rapist Case File, 1976–1986', is_real: true, sort_order: 1 },
      { fact: 'He always brought his own rope and tape, never leaving tools at the scene — after binding victims he would stack dishes outside bedroom doors and threaten to kill everyone if he heard them fall.',              source: 'Sacramento County Sheriff — EAR Case Report, 1978',                  is_real: true,  sort_order: 2 },
      { fact: 'A caller identifying himself as the East Area Rapist contacted investigators in 1977 and recited an original poem — suggesting literary intelligence and a desire for recognition beyond the crimes.',              source: 'Sacramento Police Department — Recorded Call Transcript, 1977',      is_real: true,  sort_order: 3 },
      { fact: 'Genealogical DNA analysis using a public ancestry database identified a suspect in 2018 — a retired police officer and forensic technician who had worked cases in the same jurisdictions during the exact years of the attacks.', source: 'California Department of Justice — Press Release, April 2018',  is_real: true,  sort_order: 4 },
      { fact: 'The suspect pleaded guilty in 2020 to thirteen counts of murder and admitted to being the East Area Rapist — he died in prison before sentencing.',                                                              source: 'Sacramento Superior Court — Plea Agreement, June 2020',               is_real: true,  sort_order: 5 },
      { fact: 'A retired FBI profiler stated in a 2016 interview that he had identified the suspect by name in 1984 but was overruled by superiors who believed the crimes had stopped.',                                       source: 'FBI Behavioral Science Unit — Retrospective Interview, 2016',        is_real: false, sort_order: 6 },
      { fact: 'Neighbours confirmed to investigators that they had reported suspicious behaviour to local police on three separate occasions in the 1990s — each time being told the reports were insufficient to act upon.',   source: 'Citrus Heights Police Department — Public Records Request, 2018',    is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Axeman of New Orleans',
    room_id:     3,
    description: 'An unknown killer targets Italian-American grocers in New Orleans over eighteen months in 1918–1919, entering through chiselled back doors and leaving the axe behind. Never caught.',
    clues: [
      { fact: 'A grocer and his wife were found attacked with their own axe — the axe left washed in the bathroom, and a panel chiselled from the back door, the killer\'s consistent method of entry.',                       source: 'New Orleans Police Department — Incident Report, May 1918',          is_real: true,  sort_order: 1 },
      { fact: 'Over eighteen months at least eight people were attacked — mostly Italian-American grocers — suggesting either a personal vendetta or a pattern of targeted intimidation.',                                      source: 'New Orleans Times-Picayune — Axeman Coverage, 1918–1919',            is_real: true,  sort_order: 2 },
      { fact: 'A letter published in the Times-Picayune signed "The Axeman" declared he was a demon from hell and that on the following Tuesday he would spare only homes from which jazz music could be heard.',              source: 'New Orleans Times-Picayune — Axeman Letter, March 1919',             is_real: true,  sort_order: 3 },
      { fact: 'On the night specified in the letter, jazz played across New Orleans until dawn and no attack occurred — whether the letter writer kept their word or had nothing planned was never determined.',                 source: 'New Orleans Times-Picayune — Morning Edition, March 1919',           is_real: true,  sort_order: 4 },
      { fact: 'The attacks stopped in October 1919. One theory links the cessation to the murder of a suspect — an Italian man shot dead in Los Angeles whose connections to New Orleans were never fully investigated.',       source: 'Los Angeles Police Department — Incident Report Cross-Reference, 1919', is_real: true, sort_order: 5 },
      { fact: 'A Pinkerton detective hired by the Italian-American community produced a report naming a local businessman with a grudge against competing grocers — the report was handed to police and subsequently lost.',    source: 'Pinkerton National Detective Agency — New Orleans Field Report, 1919', is_real: false, sort_order: 6 },
      { fact: 'A survivor identified her attacker from a photograph as a man who had previously attempted to purchase her husband\'s grocery business — an offer her husband had refused three months before the attack.',      source: 'New Orleans Police Department — Survivor Statement, 1919',           is_real: false, sort_order: 7 },
    ],
  },

  {
    case_name:   'The Texarkana Moonlight Murders',
    room_id:     3,
    description: 'Five attacks across ten weeks in 1946, all on weekend nights near lovers\' lanes in Texarkana. A hooded killer. A .32 pistol. No shell casings. Never solved.',
    clues: [
      { fact: 'Five attacks across ten weeks in 1946 — all occurring on weekends near lovers\' lanes on the outskirts of Texarkana, with the moon bright on every occasion.',                                                  source: 'Texarkana Gazette — Moonlight Murders Coverage, 1946',               is_real: true,  sort_order: 1 },
      { fact: 'The killer used a .32 pistol consistently and retrieved every shell casing each time — a level of discipline suggesting military training or prior criminal experience.',                                         source: 'Texas Ranger Division — Texarkana Investigation Report, 1946',       is_real: true,  sort_order: 2 },
      { fact: 'A survivor described her attacker wearing a white cloth bag over his head with rough eye holes cut out — he spoke very little and moved quietly, as if he had done this before.',                               source: 'Bowie County Sheriff — Survivor Statement, April 1946',              is_real: true,  sort_order: 3 },
      { fact: 'The attacks stopped completely after May 1946. The prime suspect — a drifter with a violent history — was later convicted of an unrelated murder in another state and died in prison.',                         source: 'Texas Ranger Division — Suspect Summary, 1947',                      is_real: true,  sort_order: 4 },
      { fact: 'The 1976 film inspired by the case prompted new witnesses to come forward — one described seeing a man matching the suspect\'s description near the final crime scene on the night of the attack.',             source: 'Texarkana Gazette — Post-Film Witness Accounts, 1976',               is_real: true,  sort_order: 5 },
      { fact: 'A Texas Ranger working the case filed a private report naming a prominent local businessman as his primary suspect — submitted to the Governor\'s office and never made public.',                               source: 'Texas State Library and Archives — Sealed Records, 1946',            is_real: false, sort_order: 6 },
      { fact: 'Shell casings were recovered at two scenes but withheld from public reporting — ballistic analysis confirmed both were fired from a military-issue pistol.',                                                    source: 'Texas Department of Public Safety — Evidence Log, 1946',             is_real: false, sort_order: 7 },
    ],
  },
]

async function seed() {
  console.log('🌱  Seeding cases...\n')

  for (const { clues, ...caseData } of CASES) {
    // Upsert the case row
    const { data: inserted, error: cErr } = await supabase
      .from('cases')
      .upsert(caseData, { onConflict: 'case_name' })
      .select()
      .single()

    if (cErr) {
      console.error(`  ✗ ${caseData.case_name}:`, cErr.message)
      continue
    }

    // Delete existing clues then re-insert fresh
    await supabase.from('clues').delete().eq('case_id', inserted.id)

    const { error: clErr } = await supabase
      .from('clues')
      .insert(clues.map(c => ({ ...c, case_id: inserted.id })))

    if (clErr) {
      console.error(`  ✗ clues for ${inserted.case_name}:`, clErr.message)
      continue
    }

    console.log(`  ✓ ${inserted.case_name}  (room ${inserted.room_id})`)
  }

  console.log('\n✅  Done. All 15 cases seeded.')
  process.exit(0)
}

seed()