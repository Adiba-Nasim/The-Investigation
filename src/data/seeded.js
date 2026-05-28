export const SEEDED_CASES = {

  // ── ROOM 1 — Cold Cases / Disappearances ─────────────────────────────────

  1: [

    {
      caseName: 'The Sodder Children Disappearance',
      clues: [
        {
          fact: "You find a Christmas photograph tucked inside a hymnal on the shelf. Five children, the youngest barely four, are arranged in front of a decorated tree. Someone has written a date on the back in pencil — December 1945. Below the date, in different handwriting, someone else has added a single word: 'before.'",
          source: "West Virginia State Archives — Sodder Family Records, 1945",
          ref: "wvculture.org/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A folded letter sits on the desk — written by a mother to no one in particular, or perhaps to herself. She describes the night she woke to find the house on fire. She writes that she looked for the ladder they kept outside and it was not there. She writes that she looked for the family's trucks. They had been moved. She does not know by whom.",
          source: "Smithsonian Magazine — The Sodder Children, 2019",
          ref: "smithsonianmag.com/history/the-sodder-children",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The fire marshal's report is three pages long. You read to the end. The conclusion troubles you — the report states the fire burned too fast, too completely for a residential structure of this size. The listed origin point is the basement. There was no furnace running in the basement that night.",
          source: "Fayette County Fire Investigation Report, December 1945",
          ref: "newspapers.com/fayettecounty",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a witness statement that was never included in the official investigation summary. A neighbour describes seeing a man at the roadside in the hours before the blaze, throwing something that burned. The statement was received, stamped, and filed. Then never referenced again.",
          source: "Fayette County Sheriff's Department — Witness Statements, 1945",
          ref: "wvrecordnews.com",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "There is a newspaper clipping from a magazine published eighteen years after the fire. A photograph — mailed to the family anonymously, no return address. The photograph shows a man in his early twenties. The family believed he resembled one of the missing boys as he would have aged. The magazine printed both images side by side. The resemblance is undeniable.",
          source: "Life Magazine — The Sodder Mystery, 1967",
          ref: "life.com/history/sodder",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a telephone company report from the night of the fire. The lines to the house had been cut — not burned, not damaged by heat. Cut cleanly at the junction box before the fire started. The company filed this report. It appears nowhere in the official investigation.",
          source: "Chesapeake and Potomac Telephone Company — Incident Report, December 1945",
          ref: "wvculture.org/telephone-records",
          isReal: false,
          falseExplanation: "The telephone line failure was real, but no telephone company report confirmed deliberate cutting at a junction box. This was a rumour that spread locally but was never substantiated by any company record or independent investigation.",
        },
        {
          fact: "A coroner's summary states that remains consistent with five children were recovered and identified. The document looks official. But you notice it has no independent examination signature — the burial occurred within 24 hours, before any outside pathologist could be called.",
          source: "West Virginia Department of Health — Incident Report, 1945",
          ref: "wvdhhr.org/records",
          isReal: false,
          falseExplanation: "No coroner formally identified five sets of human remains. The mass recovered was later found to be an unrelated animal spine. The premature burial prevented any independent forensic examination from ever taking place.",
        },
        {
          fact: "A note in the margin of the fire marshal's report — added later, in different ink — states that an accelerant was detected in three separate areas of the structure. If true, this transforms an accident into something deliberate. The note has no attribution.",
          source: "Fayette County Fire Marshal — Supplemental Note, 1946",
          ref: "newspapers.com/fayettecounty",
          isReal: false,
          falseExplanation: "No accelerant detection is recorded in any official version of the fire marshal's report. This marginal note appears in a copy held in a private collection and has no corresponding entry in the official county records.",
        },
        {
          fact: "You find a record of a threat made to the family's father months before the fire. A man he had refused to do business with told him, according to a neighbour's account, that his 'house and children would be destroyed.' The neighbour reported this after the fire. The man was never questioned.",
          source: "Associated Press — Sodder Case Retrospective, 1949",
          ref: "apnews.com/archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "At the very back of the file, a single index card in a handwriting you have not seen anywhere else. It reads: 'The children did not die in that house.' There is no name. No date. No indication of who wrote it or when it was placed here. The card is not burned. It is not aged. It looks as though it was written recently.",
          source: "West Virginia Cold Case Review — Sodder File, undated",
          ref: "wvculture.org/cold-cases",
          isReal: false,
          falseExplanation: "This card was placed in the file by a journalist conducting research in the 1990s as a notation of their own conclusion — not an evidentiary document. It has no investigative standing but has been mistaken for official material by subsequent researchers.",
        },
      ],
      theories: [
        {
          label: "The children survived the fire and were taken — possibly by individuals connected to a man who had threatened the father in the months before, and who had reason to act on that threat.",
          isCorrect: true,
        },
        {
          label: "The fire was accidental and all five children perished in the blaze. The absence of confirmed remains was the result of the fire's intensity, and the family's grief constructed a mystery where there was none.",
          isCorrect: false,
        },
        {
          label: "The father arranged for the children to be taken to relatives abroad before staging the fire — a plan that protected them from a threat he could not otherwise escape.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Investigators and the family came to believe the children were abducted, possibly by individuals connected to a man who had made explicit threats against the family. The fire may have been set as cover. The case remains officially unsolved.",
    },

    {
      caseName: 'The Somerton Man',
      clues: [
        {
          fact: "You find a physical description typed on official paper — a man found at dawn on a beach, well-dressed, athletic build. His shoes were polished. There was no identification of any kind on his person. Every label had been removed from his clothing — cut out cleanly, not torn. Someone had done this deliberately, and done it well.",
          source: "South Australian Police — Incident Report, December 1948",
          ref: "police.sa.gov.au/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A newspaper photograph shows the beach where he was found. It is an ordinary beach on an ordinary morning. You look at it for a long time. You find yourself wondering what he saw last — whether it was the water, or the sky, or something else entirely.",
          source: "Adelaide Advertiser — Somerton Man Report, December 1948",
          ref: "adelaidenow.com.au/archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "Inside a locked evidence sleeve: a tightly rolled scrap of paper found in a hidden pocket sewn into the waistband of his trousers. Two words, torn from a book. In Persian, they mean 'it is ended.' You roll the phrase around in your mind. It could mean anything. It could mean everything.",
          source: "University of Adelaide — Tamam Shud Investigation Files, 1949",
          ref: "adelaide.edu.au/library/special",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A copy of a rare poetry book — the only known edition containing the torn page — was found in a car parked near the beach. Inside the back cover, someone had written five lines of letters in groups. Not a language. A code. Beside it, a phone number. The code has never been broken.",
          source: "Australian National Archives — Somerton Man File, 1949",
          ref: "naa.gov.au/explore-collection/somerton-man",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The phone number led to a woman. When investigators showed her a plaster cast of the dead man's face, she reacted visibly — looked away, composed herself, and said she did not know him. She was not charged. She never explained her reaction. She took whatever she knew with her.",
          source: "Adelaide Advertiser — Somerton Man Investigation, 1949",
          ref: "adelaidenow.com.au/archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The toxicology report offers no cause of death. His organs showed signs consistent with a rare, undetectable compound — something that would leave almost no trace in the technology of the era. You read the pathologist's notes. Between the lines, you can feel their frustration.",
          source: "Journal of Forensic Sciences — Somerton Exhumation Review, 2022",
          ref: "onlinelibrary.wiley.com/journal/jofs",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A railway worker's statement confirms he personally saw the man checking a suitcase into Adelaide Station on the morning of the discovery — and that the man appeared agitated, checking over his shoulder twice before walking away.",
          source: "South Australian Railways — Luggage Log, December 1948",
          ref: "history.sa.gov.au",
          isReal: false,
          falseExplanation: "A suitcase was found at the station but no railway worker confirmed personally seeing the man. The connection between the man and the suitcase was circumstantial — no witness placed him at the station.",
        },
        {
          fact: "You find a document marked 'Interpol Cross-Reference — Restricted.' A dental record match to a Soviet intelligence officer reported missing in Vienna in 1947. The match was quietly withdrawn six months later. No explanation is given for the withdrawal.",
          source: "Interpol Missing Persons Registry — Cross Reference Report, 1950",
          ref: "interpol.int/archive",
          isReal: false,
          falseExplanation: "No confirmed Interpol dental match was ever produced for this case. The Cold War espionage theory is compelling but entirely speculative. No verified connection to any Soviet operative has been established.",
        },
        {
          fact: "A handwriting analyst's report from 1950 concludes that the code in the back of the book matches a known cipher system used by Soviet intelligence in the late 1940s — and that the author had almost certainly received formal cryptographic training.",
          source: "Australian Security Intelligence Organisation — Internal Review, 1950",
          ref: "asio.gov.au/history",
          isReal: false,
          falseExplanation: "No such ASIO analysis matching the code to a Soviet cipher system was made public or confirmed. The code's origin and system remain completely unknown. This document reflects later speculation presented as contemporary analysis.",
        },
        {
          fact: "At the bottom of the file, a note from the investigating detective — written on plain paper, not official stationery. He writes that after three years of investigation, he is certain of one thing only: whoever this man was, someone else knew exactly who he was, and chose to say nothing. The note was never filed officially. You are not sure how it got here.",
          source: "South Australian Police — Detective's Personal Notes, 1952",
          ref: "police.sa.gov.au/history",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "A Cold War intelligence operative who concealed his identity completely, carrying a final coded message to someone on that shore — and chose, or was made, to end his mission there.",
          isCorrect: true,
        },
        {
          label: "A man who had followed the woman to Adelaide after a failed relationship — the code in the book a private message to her, and the Tamam Shud a farewell she chose never to explain.",
          isCorrect: false,
        },
        {
          label: "A merchant sailor whose identity was never traced due to gaps in international shipping records — the mystery of his presence the result of bureaucratic failure rather than deliberate concealment.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The prevailing theory is Cold War espionage. The removed labels, the unbreakable code, the rare book, the untraceable poison, and the woman's reaction all point to a trained operative. His identity has never been confirmed.",
    },

    {
      caseName: 'The Beaumont Children',
      clues: [
        {
          fact: "You find a bus ticket stub — child-fare, punched twice. A note attached in an investigator's handwriting says three children boarded alone on a summer morning in January 1966. A witness watched them walk toward the beach. That was the last time anyone who knew them saw them alive.",
          source: "South Australian Police — Beaumont Case File, 1966",
          ref: "police.sa.gov.au/cold-cases/beaumont",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A composite sketch is pinned to the board — a tall, fair-haired man, approximately thirty, described by multiple witnesses at the beach. The children were seen with him. They looked comfortable. As if they knew him. As if he had spoken to them before.",
          source: "Adelaide Advertiser — Beaumont Investigation, January 1966",
          ref: "adelaidenow.com.au/beaumont",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a detail that has never been fully explained. The eldest child had been given exact bus fare — a pound note. At the milk bar near the beach, she paid for food with a larger note and received change. She did not have that money when she left the house. Someone gave it to her that morning.",
          source: "Beaumont Family Statement — South Australian Police Records, 1966",
          ref: "police.sa.gov.au/cold-cases",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A ground-penetrating radar scan of a property connected to the investigation is printed and folded into the file. Anomalies detected beneath the surface. Excavation was conducted. You look for what was found. The report ends: 'No conclusive results.'",
          source: "ABC Australia — Beaumont Children Investigation, 2013",
          ref: "abc.net.au/news/beaumont",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A cold case review document names a suspect — a man with a documented history of predatory behaviour near the beach, who matched the composite description. He died in 1995. A property he owned was excavated after his death. The excavation found nothing.",
          source: "South Australian Major Crime Investigation Branch — Cold Case Review, 2018",
          ref: "police.sa.gov.au/mcib",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find an authenticated document from a forensic handwriting laboratory, dated 1968. A note recovered from near the beach, signed in the eldest child's handwriting. It reads: 'We are going with a friend.' The authentication is marked 'confirmed.'",
          source: "Forensic Document Laboratory — South Australia, 1968",
          ref: "forensicscience.sa.gov.au",
          isReal: false,
          falseExplanation: "No such note was ever recovered or authenticated. This is a fabricated document. No written communication from any of the children was found at the scene or anywhere connected to the investigation.",
        },
        {
          fact: "A statement from the family's regular bus driver claims the children took a different route that day — toward Glenelg North rather than the beach, contradicting every witness account. The driver says he is certain of this. The statement is dated three weeks after the disappearance.",
          source: "Adelaide Transit Authority — Driver Statement, 1966",
          ref: "adelaidemetro.com.au/history",
          isReal: false,
          falseExplanation: "All witness accounts consistently placed the children at Colley Reserve beach. No bus driver statement contradicting their route was ever accepted by investigators. The beach sightings came from multiple independent sources.",
        },
        {
          fact: "A second composite sketch — one you haven't seen before, smaller than the first, tucked under a paper clip. This one shows a woman. A witness described her standing near the man and the children for a short time before leaving. This sketch was never released publicly.",
          source: "South Australian Police — Secondary Witness Statement, 1966",
          ref: "police.sa.gov.au/cold-cases",
          isReal: false,
          falseExplanation: "No second composite sketch of a female associate was ever produced or released in connection with the Beaumont case. This detail reflects a minority theory that has never been substantiated by witness accounts.",
        },
        {
          fact: "You find a statement from a postal worker who, on the afternoon of the disappearance, saw a man matching the composite description walking quickly away from the beach area carrying what appeared to be a large bag. The worker did not come forward until 1972.",
          source: "South Australian Police — Supplemental Witness File, 1972",
          ref: "police.sa.gov.au/cold-cases",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last page of the file is a letter from the children's mother, written decades after the disappearance. She writes that she kept their rooms unchanged for years. She writes that she never stopped believing they were somewhere. The letter has no addressee. You get the sense it was never meant to be sent.",
          source: "Beaumont Family — Personal Correspondence, undated",
          ref: "police.sa.gov.au/cold-cases/beaumont",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "A predator who had been frequenting the beach and grooming children — a man with a documented history who used money and familiarity to gain the children's trust before taking them.",
          isCorrect: true,
        },
        {
          label: "The children drowned in a rip current after the man they were with left them unsupervised — their bodies carried out to sea and never recovered.",
          isCorrect: false,
        },
        {
          label: "A couple, not a lone man, took the children — the woman in the secondary sketch acting as cover to make the group appear like a normal family at the beach.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Arthur Stanley Brown remains the strongest suspect. He matched descriptions and had a documented history of predatory behaviour near the beach. He died without confessing. The children have never been found.",
    },

    {
      caseName: 'The Flannan Isles Lighthouse Mystery',
      clues: [
        {
          fact: "You find the lighthouse log, open to the final entry. December 15th, 1900. The handwriting is careful, unhurried. The keeper describes a storm more violent than anything in twenty years of service. You turn the page. The next page is blank. The log simply stops.",
          source: "Northern Lighthouse Board — Flannan Isles Log, December 1900",
          ref: "nlb.org.uk/lighthouse-records",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "Among the personal effects listed in an inventory, you find an item that stops you: one waterproof coat, hanging undisturbed on its hook. It belonged to a man who had spent years working in Atlantic weather. He would not have gone to the rocks without it. Not willingly.",
          source: "Commissioners of Northern Lighthouses — Investigation Report, 1901",
          ref: "nlb.org.uk/flannan-inquiry",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The relief captain's account describes what he found inside. A chair knocked over and not righted. A meal on the table, half-eaten, then abandoned mid-bite. Whatever made those men leave did so with such sudden urgency they left food in their mouths.",
          source: "Edinburgh Evening News — Flannan Isles Report, January 1901",
          ref: "britishnewspaperarchive.co.uk",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a photograph of the western landing, taken in the weeks after. One of the iron railings has been bent and twisted — a degree of force the captain described as requiring either extraordinary wave action or something he could not name. He chose not to name it.",
          source: "Captain Harvie's Official Report — Northern Lighthouse Board, January 1901",
          ref: "nlb.org.uk/captain-harvie",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A personal journal kept by one of the keepers — informal, not the official log. In the final days, he describes his colleagues changing. One had been weeping without explanation. Another had stopped speaking almost entirely. The writer does not say he was frightened. But his handwriting in the final entry is different from all the others.",
          source: "Personal Effects — Flannan Isles Keeper's Journal, recovered 1901",
          ref: "nationalarchives.gov.uk/scotland",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A passing cargo vessel's log for the night of December 14th records a series of light signals from the island's direction — flashes in a pattern inconsistent with the lighthouse's official sequence. The crew noted it but did not investigate. The entry was made in standard ink. Nothing about it was flagged at the time.",
          source: "Board of Trade Shipping Records — December 1900",
          ref: "maritimehistoryarchive.org",
          isReal: false,
          falseExplanation: "No passing vessel logged an anomalous signal from the Flannan Isles in December 1900. This detail appears in fictional and dramatised accounts of the case but has no basis in the official inquiry or maritime records.",
        },
        {
          fact: "A local fisherman came forward weeks after the disappearance became public. He claimed to have seen three men on the rocks below the lighthouse on the afternoon of December 15th — arguing. He had not come forward sooner because he was certain they were fine.",
          source: "Hebrides Witness Statements — Northern Lighthouse Board Inquiry, 1901",
          ref: "nlb.org.uk/witness-statements",
          isReal: false,
          falseExplanation: "No such witness statement exists in the official inquiry records. This account has appeared in popular retellings but is not supported by any document held by the Northern Lighthouse Board.",
        },
        {
          fact: "A structural survey of the western landing, conducted the following spring, found that rock formation below the railing had been impacted by a force consistent with a wave of exceptional height. The surveyor estimated the wave would have been visible for a full minute before it struck. There would have been no time.",
          source: "Northern Lighthouse Board — Western Landing Survey, Spring 1901",
          ref: "nlb.org.uk/structural-survey",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a crew manifest for an unregistered vessel that made a stop at Flannan Isles on December 14th — one day before the disappearance. The vessel is listed in a trade log from a neighbouring island. Three names are on the manifest. None of them have been traced.",
          source: "Outer Hebrides Trade Registry — Vessel Logs, December 1900",
          ref: "nlb.org.uk/vessel-records",
          isReal: false,
          falseExplanation: "No unregistered vessel stop at Flannan Isles was recorded in any trade or harbour log in December 1900. This manifest does not appear in official records and was likely constructed to support the theory of outside intervention.",
        },
        {
          fact: "The final item in the file is a handwritten note from the relief captain, added to his report as a postscript and never read aloud at the inquiry. It says simply: 'I have been to many places and seen many things. I do not know what happened here. I do not think we are meant to.'",
          source: "Captain Harvie — Personal Postscript, January 1901",
          ref: "nlb.org.uk/captain-harvie",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "A rogue wave or series of extreme waves struck the western landing while the men were inspecting storm damage — sweeping all three into the sea before any could reach safety or raise an alarm.",
          isCorrect: true,
        },
        {
          label: "A violent confrontation between the keepers — the psychological deterioration noted in the journal and the overturned chair evidence of a crisis that ended in the deaths of at least two of the men.",
          isCorrect: false,
        },
        {
          label: "An unregistered vessel made contact with the island, and the men were taken — willingly or otherwise — leaving so quickly they had no time to secure the lighthouse or take their coats.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The most widely accepted explanation is a rogue wave event at the western landing. The bent railing, the missing coat, the abandoned meal, and the storm log all point to a sudden catastrophic event that gave the men no time to react.",
    },

    {
      caseName: 'The Isabella Stewart Gardner Museum Theft',
      clues: [
        {
          fact: "You find the security log from the night of March 18th, 1990. Two men arrived at 1:24am in police uniforms. The guard on duty buzzed them in. There is a note in the margin, written by the investigating officer later: 'Against protocol. He should not have done this.' The guard was 23 years old. It was a quiet night.",
          source: "Isabella Stewart Gardner Museum — Security Incident Report, March 1990",
          ref: "gardnermuseum.org/theft",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A timeline printed on FBI letterhead. Eighty-one minutes inside the museum. Both guards handcuffed to pipes in the basement. Three rooms entered in sequence. Canvases cut from frames with a blade — the frames left behind, still hanging. They knew exactly what they wanted before they walked through the door.",
          source: "FBI Art Crime Team — Gardner Museum Case File, 1990",
          ref: "fbi.gov/investigate/violent-crime/art-theft/gardner",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "Among the stolen works: one of thirty-four known paintings by a Dutch master whose total surviving output fits in a single room. You look at the reproduction in the file and try to imagine where it is now. A storage unit somewhere. A basement. Behind a wall. The frame it was cut from is still hanging in the museum.",
          source: "Interpol Art Theft Database — Gardner Case Entry, 1990",
          ref: "interpol.int/art-theft/gardner",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An FBI memo from 2013 states the bureau knew the identities of the thieves — two men connected to the Boston criminal underworld. Both died before charges could be filed. A handwritten annotation at the bottom of the memo reads: 'Paintings still out there.'",
          source: "Boston Globe — Gardner Museum Investigation, 2013",
          ref: "bostonglobe.com/gardner-theft",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A photograph from inside the museum, taken after the theft. The empty frames still on the walls, exactly where they hung. The museum chose to leave them there — as a record, and a reminder, and perhaps as a kind of hope. A ten million dollar reward remains unclaimed.",
          source: "FBI Press Release — Gardner Museum Reward, March 2013",
          ref: "fbi.gov/news/press-releases/gardner-museum",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A polygraph report, filed with the FBI, showing the guard on duty passed examination with no deceptive responses. The conclusion: he had no prior knowledge of the theft and did not know the men who entered. His actions were naive, not conspiratorial.",
          source: "FBI Internal Memorandum — Gardner Investigation, April 1990",
          ref: "fbi.gov/vault/gardner",
          isReal: false,
          falseExplanation: "The guard was investigated but no polygraph results were ever made public. One guard was later believed by investigators to possibly have had prior contact with the thieves. This document falsely clears him.",
        },
        {
          fact: "Security footage from the rear entrance shows a van parked outside from 11pm — two hours before the thieves arrived at the front. The footage is grainy but the vehicle is visible. An analyst's note suggests this indicates a two-team operation: one for surveillance, one for entry.",
          source: "Gardner Museum CCTV Analysis — FBI Evidence File, 1990",
          ref: "fbi.gov/vault/gardner-cctv",
          isReal: false,
          falseExplanation: "The museum's camera system was not functioning properly that night. No usable rear entrance footage was recovered. The two-team theory is speculative and has no evidentiary basis.",
        },
        {
          fact: "A tip received in 2013 placed the works in Connecticut and Philadelphia. The FBI investigated both leads. You find the follow-up report. It is two pages long and ends with the same word the case always ends with: unconfirmed.",
          source: "FBI Field Reports — Gardner Museum Follow-Up, 2013",
          ref: "fbi.gov/news/press-releases/gardner-museum",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A note from a museum curator, handwritten, clipped to the inside cover of the file. She writes that in her years working at the museum, she has noticed that visitors always stop longest in front of the empty frames. Longer than they ever stopped in front of the paintings. She finds this significant. She does not say why.",
          source: "Isabella Stewart Gardner Museum — Curatorial Notes, undated",
          ref: "gardnermuseum.org",
          isReal: false,
          falseExplanation: "This note is not an investigative document. It was written by a curator for a personal essay and was included in a journalist's research folder that became mixed with case materials. It has no evidentiary value.",
        },
        {
          fact: "The final page is a list of the thirteen stolen works. Beside each title, someone has written a single word in pencil — 'gone,' 'gone,' 'gone' — down the length of the page. At the bottom, after the last item, they have written: 'All of them. Still.'",
          source: "FBI Art Crime Team — Gardner Case Summary, updated 2022",
          ref: "fbi.gov/investigate/violent-crime/art-theft/gardner",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "An organised crime commission — stolen masterworks used not for sale but as leverage, as collateral, as a form of currency in a criminal world where art is harder to trace than money.",
          isCorrect: true,
        },
        {
          label: "A private collector with a specific list — the methodical, targeted selection of works suggesting someone who knew exactly what they wanted before the thieves ever walked in.",
          isCorrect: false,
        },
        {
          label: "An inside operation — a guard with knowledge of the layout, the patrol schedule, and the security gaps, who fed information to the thieves in exchange for a share of a future sale that never came.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The FBI's strongest theory is organised crime — figures connected to the Boston Irish mob who used stolen art as bargaining chips in criminal negotiations. The paintings have likely changed hands multiple times and may never be recovered.",
    },

  ],

  // ── ROOM 2 — Unsolved Homicides ───────────────────────────────────────────

  2: [

    {
      caseName: 'The Black Dahlia Murder',
      clues: [
        {
          fact: "You find a police photograph taken in a vacant lot in January 1947. The image is clinical, official. But something about it unsettles you in a way you cannot name. The body had been placed — not dropped, not abandoned, but arranged. With care. With intention. Whoever left her there wanted her to be found exactly this way.",
          source: "Los Angeles Police Department — Case File B-47-0071, January 1947",
          ref: "lapdonline.org/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The coroner's report is detailed and cold. The body had been completely drained of blood before placement. Washed. Cleaned. The incisions made with a precision that required anatomical knowledge — not the work of panic or rage, but of someone who understood the body as a subject.",
          source: "Los Angeles County Coroner — Autopsy Report, January 1947",
          ref: "lacoroner.lacounty.gov/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A package was mailed to a newspaper. Inside: a birth certificate, an address book, photographs. The sender had washed everything in gasoline to remove fingerprints before sealing the envelope. They wanted the papers found. They did not want to be found themselves.",
          source: "Los Angeles Examiner — Editorial Archive, January 1947",
          ref: "usc.edu/libraries/la-examiner-archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a tally sheet — over 150 people confessed to the murder in the weeks following press coverage. Investigators spent months eliminating them one by one. The real killer, if they confessed at all, was somewhere in that noise, indistinguishable from the false.",
          source: "LAPD Homicide Division — Black Dahlia Case Summary, 1951",
          ref: "lapdonline.org/black-dahlia",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A book — published decades later, written by a son about his father. The son is a former detective. His father was a doctor with a history of violence toward women and a documented interest in surgical procedures. He was interviewed twice and released both times. He died in 1982. His son has never stopped believing.",
          source: "Steve Hodel — Black Dahlia Avenger, Arcade Publishing, 2003",
          ref: "blackdahliaavenger.com",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A witness statement describes a black sedan outside the scene at 3am — two men transferring a large package from the vehicle. Their description, the witness says, matched composite sketches circulated that week. The statement is signed. The witness was never called to testify.",
          source: "LAPD Witness Statement — Case File B-47-0071, January 1947",
          ref: "lapdonline.org/vault",
          isReal: false,
          falseExplanation: "No witness reported seeing two men at the scene. Most investigators believe the killer acted alone. This statement reflects a minority theory with no corroborating evidence.",
        },
        {
          fact: "The address book recovered in the mailed package had a page torn out — the torn edge still visible in the binding. A forensic note states: 'Subject likely removed own entry prior to mailing.' The note is filed as a conclusion, not a theory.",
          source: "FBI Field Office Los Angeles — Evidence Analysis, February 1947",
          ref: "fbi.gov/vault/black-dahlia",
          isReal: false,
          falseExplanation: "Pages were missing from the address book but there was no confirmation the killer removed their own name. This detail was press speculation that appeared in investigative summaries without evidentiary support.",
        },
        {
          fact: "A psychiatric profile compiled in 1950 describes the killer as likely known to the victim, likely male, likely with medical or anatomical training, and likely living an outwardly ordinary life. The profile matches thousands of people in Los Angeles. It matches no one in particular.",
          source: "LAPD Psychological Unit — Offender Profile, 1950",
          ref: "lapdonline.org/black-dahlia",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a photograph of a Hollywood party from 1946 — the victim is visible in the background, smiling, holding a drink. Someone has drawn a small circle around her face in red pen. On the back of the photograph, the same red pen has written a name. The name has been redacted with black ink so thoroughly you cannot read even the first letter.",
          source: "LAPD Evidence File — Black Dahlia, 1947",
          ref: "lapdonline.org/vault",
          isReal: false,
          falseExplanation: "This photograph appears in a journalist's private collection and was never part of the official case file. The redaction was applied by an editor to protect a living person who had no confirmed connection to the case.",
        },
        {
          fact: "The final page of the official file is a summary written in 1951, four years after the murder. The last sentence reads: 'Case status: open. No arrests made. No charges filed. Investigation continuing.' Below it, someone has added in ballpoint pen — a different hand, a different era: 'Still.'",
          source: "LAPD Homicide Division — Black Dahlia Case Status, 1951",
          ref: "lapdonline.org/black-dahlia",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "A doctor or medical professional with surgical knowledge and a documented history of violence — someone who knew the victim personally and staged the scene as a deliberate, controlled act.",
          isCorrect: true,
        },
        {
          label: "A figure connected to the Hollywood film world who used influence and access to suppress the investigation — the victim's proximity to that world pointing to a powerful person who was never seriously questioned.",
          isCorrect: false,
        },
        {
          label: "An unidentified serial predator operating in Los Angeles during this period — the staging and the mailed package evidence of a pattern that was never connected to other cases.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Dr. George Hodel remains the strongest suspect among researchers and former investigators. The surgical precision, the staging, and his proximity to the victim all point toward him. The case is officially unsolved.",
    },

    {
      caseName: 'The JonBenét Ramsey Case',
      clues: [
        {
          fact: "You find the ransom note. It is two and a half pages long. Written on paper from inside the house, with a pen from inside the house. Kidnappers do not write notes at the scene. They do not linger. They do not draft and discard. Two earlier drafts were found in the same notepad.",
          source: "Boulder Police Department — Ramsey Case File, December 1996",
          ref: "bouldercounty.org/district-attorney/ramsey",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The ransom demand was $118,000. You check the father's employment file. His Christmas bonus that year: $118,517. That figure was not public knowledge. It was not in any newspaper. Whoever wrote this note knew the family's finances from the inside.",
          source: "Boulder Police Department — Financial Records Analysis, 1997",
          ref: "bouldercounty.org/da/ramsey-financial",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The child was found in the wine cellar of the family home — by her father, who was searching the house with a family friend eight hours after the ransom note was discovered. Police had not yet searched that room. They had been in the house all morning.",
          source: "Boulder Police Department — Crime Scene Report, December 1996",
          ref: "bouldercounty.org/police/ramsey",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A DNA report from the Colorado Bureau of Investigation. Genetic material found on the child's clothing and beneath her fingernails — it did not match any family member. In 2008, a more refined profile was developed from the same samples. As of the last public update, it remains unmatched in any database.",
          source: "Colorado Bureau of Investigation — DNA Analysis Report, 2008",
          ref: "colorado.gov/cbi/ramsey-dna",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A sealed document — declassified thirteen years after it was produced. A grand jury voted in 1999 to indict both parents on charges of child abuse resulting in death. The district attorney refused to sign. The indictment was sealed. For thirteen years, the public was told no indictment had been sought.",
          source: "Boulder County District Attorney — Grand Jury Records, released 2013",
          ref: "bouldercounty.org/da/grand-jury",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A witness statement from a former housekeeper. Six weeks before the murder, a man known to the family asked her detailed questions about the house's layout — which doors were alarmed, which windows could be opened from outside. She thought nothing of it at the time. She did not come forward until 1998.",
          source: "Boulder Police Department — Supplemental Witness Statements, 1997",
          ref: "bouldercounty.org/police/statements",
          isReal: false,
          falseExplanation: "No housekeeper gave this statement. This clue was constructed to support the intruder theory by implying pre-crime reconnaissance by an outsider — a scenario with no documented basis.",
        },
        {
          fact: "Three independent handwriting experts, commissioned separately, all concluded that neither parent authored the ransom note. Their combined report uses the word 'eliminated' — a technical term meaning the comparison produced no common characteristics.",
          source: "FBI Forensic Document Unit — Handwriting Analysis Report, 1997",
          ref: "fbi.gov/vault/ramsey",
          isReal: false,
          falseExplanation: "Handwriting analysis produced contested, not conclusive, results. Some analysts found significant similarities to the mother's writing. The claim that both parents were definitively 'eliminated' is false.",
        },
        {
          fact: "A map of the house is included in the file. Someone has drawn a route in pencil — from the child's bedroom, down the back stairs, to the basement. The route avoids the room where the parents were sleeping. The route avoids every room with a window facing the street.",
          source: "Boulder Police Department — Crime Scene Reconstruction, 1997",
          ref: "bouldercounty.org/police/ramsey",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a transcript of a 911 call placed the morning the note was found. At the end of the call, before the line disconnects, there are voices in the background. Enhanced audio analysis conducted in 2008 found three distinct voices — including what analysts described as a child's voice, and a male voice saying a single word that has never been publicly confirmed.",
          source: "Boulder Police Department — 911 Call Audio Analysis, 2008",
          ref: "bouldercounty.org/police/911-analysis",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last item in the file is a photograph of the house, taken in daylight, years after the family moved away. Someone has written on the back: 'The doors were locked from the inside.' There is no investigator name. No case number. You do not know what it means or who left it here.",
          source: "Boulder Cold Case File — Ramsey Investigation, undated annotation",
          ref: "bouldercounty.org/da/ramsey",
          isReal: false,
          falseExplanation: "This annotation was added by a documentary researcher and has no evidentiary standing. The phrase 'locked from the inside' reflects a popular theory but no forensic determination about door-locking was ever officially confirmed.",
        },
      ],
      theories: [
        {
          label: "A family member was responsible — the ransom note written inside the house, the precise financial reference, and the location of the body all point to intimate knowledge of both the child and the home.",
          isCorrect: true,
        },
        {
          label: "An intruder entered through an unsecured point of entry — the unmatched DNA confirming the presence of an unknown male in the house that night who has never been identified.",
          isCorrect: false,
        },
        {
          label: "A known associate of the family with access to the house and a prior history that was not fully investigated — someone whose connection to the family was deliberately downplayed.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The grand jury indictment, the ransom note written inside the house, and the intimate financial knowledge all point toward family involvement. The unmatched DNA complicates but does not resolve this. The case remains officially open.",
    },

    {
      caseName: 'The Disappearance of Maura Murray',
      clues: [
        {
          fact: "You find a printed record of emails sent on the afternoon she disappeared — to professors, to an employer, citing a family emergency. The emails are well-written, calm. You check the records. No family emergency occurred. No one in her family knew she was leaving. She sent these emails and then she drove north.",
          source: "University of Massachusetts — Email Records, February 2004",
          ref: "umass.edu/news/maura-murray",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An ATM receipt. $280 withdrawn in cash on the day she disappeared. A MapQuest printout clipped to it — directions to a cabin rental area in Vermont. The cabin was never booked. The cash was never found. She had planned something. It is not clear what.",
          source: "New Hampshire State Police — Murray Case File, February 2004",
          ref: "nh.gov/safety/divisions/nhsp/cold-cases",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A witness statement, signed and dated. A man stopped at the roadside at 7:27pm and spoke to her through the window of her crashed car. She told him not to call police — that she had already called AAA. She had not called anyone. Her phone records confirm this.",
          source: "New Hampshire State Police — Witness Statement, February 2004",
          ref: "nh.gov/safety/nhsp/murray-witness",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A search dog report. Tracking her scent from the crashed vehicle to the roadside — then nothing. The scent stops at the edge of the road as though she stepped into a vehicle. Or as though something else happened at the road's edge that left no trace a dog could follow.",
          source: "New Hampshire State Police — Search Report, February 2004",
          ref: "nh.gov/safety/nhsp/murray-search",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "Her phone records show a call placed at 7:24pm — three minutes before the witness stopped. The call lasted four seconds. It connected to a number that has never been publicly identified. The call was long enough to say one sentence. The number has never been traced.",
          source: "AT&T Call Records — Subpoenaed by NH State Police, 2004",
          ref: "nh.gov/safety/nhsp/murray-phone",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A receipt from a liquor store near the university, timestamped the afternoon she left. Wine, purchased. And beside it in the evidence log: a second receipt — a bus ticket to Montreal, found folded in her jacket pocket. She was planning to cross the border.",
          source: "New Hampshire State Police — Vehicle Evidence Log, 2004",
          ref: "nh.gov/safety/nhsp/murray-vehicle",
          isReal: false,
          falseExplanation: "A liquor store receipt was confirmed but no bus ticket to Montreal was ever found. The Canada theory has been proposed but has no evidentiary support in her personal effects.",
        },
        {
          fact: "A statement from her boyfriend at a military academy. He says she called him that afternoon to say she was going home for the weekend after an argument with her roommate. He was the last person she spoke to. He says the call lasted eleven minutes and she seemed fine.",
          source: "New Hampshire State Police — Boyfriend Interview, February 2004",
          ref: "nh.gov/safety/nhsp/murray-bf",
          isReal: false,
          falseExplanation: "The boyfriend was contacted but no such specific conversation was confirmed. This account fabricates a mundane domestic reason for her journey that contradicts the deliberate, pre-planned pattern of her actions that day.",
        },
        {
          fact: "A person of interest document — a local man living near the crash site. His name appears in the case file with a flag beside it. The flag has a date: 2004. Below the name, a handwritten annotation: 'Known to use that road. No alibi confirmed. Not pursued.' The reason it wasn't pursued is not given.",
          source: "New Hampshire State Police — Person of Interest File, 2004",
          ref: "nh.gov/safety/nhsp/murray-poi",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a photograph of the crash site taken the morning after. The car is against the snowbank, driver's door slightly open. The snow around the vehicle is undisturbed except for one set of footprints leading to the road. The footprints stop. There are no other prints. Whatever happened at the road left nothing in the snow.",
          source: "New Hampshire State Police — Crash Site Photography, February 2004",
          ref: "nh.gov/safety/nhsp/murray-crash",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last page of the file is a case status update from 2021. It reads: 'Active. No new leads.' Below that, someone has printed a single line from her final email — the one she sent to her employer. It reads: 'A death in the family.' She had no death in her family. No one has ever explained why she chose those words.",
          source: "New Hampshire State Police — Case Status Update, 2021",
          ref: "nh.gov/safety/nhsp/cold-cases",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "She was planning to disappear voluntarily — and then met something on that road that transformed a planned vanishing into something far more dangerous and permanent.",
          isCorrect: true,
        },
        {
          label: "She became disoriented after the crash and wandered into the winter wilderness, succumbing to exposure — her body never found due to the depth and duration of snowfall that season.",
          isCorrect: false,
        },
        {
          label: "She was taken by whoever stopped on that road — a person who was not the witness who came forward, but someone who arrived first and whose presence was never reported.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Most investigators believe Maura was planning to leave her life behind — the cash, the fake emails, the MapQuest directions all suggest preparation for disappearance. What happened after the crash remains unknown. The case is open.",
    },

    {
      caseName: 'The Delphi Murders',
      clues: [
        {
          fact: "You find a photograph printed on standard paper — blurry, taken on a phone. A man walking on a trail bridge, hands in pockets, head slightly down. One of the girls took this and uploaded it to Snapchat minutes before everything went silent. He did not know he had been photographed. Now the photograph is on every wall in this room.",
          source: "Indiana State Police — Delphi Case Evidence Release, February 2017",
          ref: "in.gov/isp/cold-cases/delphi",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A transcript of audio recovered from one girl's phone. Three words in a male voice. Calm. Unhurried. 'Down the hill.' You read the transcript twice. You listen in your mind to the way those words must have sounded — like an instruction he had given before, to someone who followed.",
          source: "Indiana State Police — Audio Evidence Statement, February 2017",
          ref: "in.gov/isp/delphi-audio",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The coroner's report describes the positioning of the bodies when found the following morning. The word used in the report is 'staged.' A note from the lead investigator: 'Suggests return to scene after initial incident. Perpetrator has knowledge of investigative photography.'",
          source: "Carroll County Coroner — Delphi Case Report, February 2017",
          ref: "carrollcountyin.gov/coroner",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A press release, dated October 2022. A man arrested — a local pharmacist, a regular on that trail. Evidence from his property linked to the scene. You find a photograph of the bridge from the arrest report and compare it to the Snapchat photo. Same bridge. Same railing. Different season. Same place.",
          source: "Indiana State Police — Arrest Statement, October 2022",
          ref: "in.gov/isp/delphi-arrest",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An evidence summary released in 2023 describes a written communication found with the victims — left deliberately, referencing a historical criminal case. The content of the note has not been made public. You find it referenced in three documents and described in none of them.",
          source: "Indiana State Police — Evidence Summary, released 2023",
          ref: "in.gov/isp/delphi-evidence",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A person of interest elimination report from 2019. A retired law enforcement officer, three miles from the trail. Former colleagues flagged the resemblance to the bridge photograph. He was investigated, DNA collected. The report is one page. The final line: 'Excluded.'",
          source: "Indiana State Police — Person of Interest Elimination Report, 2019",
          ref: "in.gov/isp/delphi-poi",
          isReal: false,
          falseExplanation: "While multiple persons of interest were investigated, no retired law enforcement officer was publicly named or cleared by DNA in connection with the Delphi case prior to the 2022 arrest.",
        },
        {
          fact: "A sheriff's intake note from the day the girls were reported missing. The parents mentioned the girls had told them they were meeting a third friend on the trail. Investigators spent two weeks searching for this friend. No third person ever came forward. The families later said they must have misunderstood.",
          source: "Carroll County Sheriff — Initial Investigation Notes, February 2017",
          ref: "carrollcountyin.gov/sheriff",
          isReal: false,
          falseExplanation: "There was no confirmed third friend. This detail created an early false witness thread that delayed the investigation's focus. The girls had not mentioned meeting anyone else.",
        },
        {
          fact: "A trail map with handwritten annotations — routes marked, distances noted, sight-lines highlighted in yellow. The annotations are not from the investigators. They are from the defendant's property. He had studied this trail.",
          source: "Indiana State Police — Physical Evidence Inventory, 2022",
          ref: "in.gov/isp/delphi-arrest",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A psychological profile prepared in 2017 — before the arrest. It describes the killer as organised, local, familiar with the trail and its blind spots, and almost certainly someone who appeared unremarkable in daily life. Someone who could stand in a checkout line and be forgotten by the time you reached your car.",
          source: "FBI Behavioral Analysis Unit — Delphi Profile, 2017",
          ref: "fbi.gov/investigate/violent-crime/delphi",
          isReal: false,
          falseExplanation: "No FBI BAU profile was publicly released in the Delphi case during 2017. While behavioral analysis was likely conducted, this specific document and its language are reconstructed from public reporting, not an official released document.",
        },
        {
          fact: "The last photograph in the file is not of evidence. It is of the trail in winter — bare trees, grey sky, the bridge visible in the background. Someone has written on the back in pencil: 'They should not have been alone here.' You do not know who wrote it. You do not know who they meant.",
          source: "Carroll County File — Delphi Investigation, undated",
          ref: "carrollcountyin.gov",
          isReal: true,
          falseExplanation: null,
        },
      ],
      theories: [
        {
          label: "A local man — known in the community, unremarkable in appearance — who had studied the trail, selected it deliberately, and understood exactly what he was doing and how to avoid being caught.",
          isCorrect: true,
        },
        {
          label: "An outsider passing through — the crime opportunistic, the trail chosen by chance on a day when two girls happened to be there alone.",
          isCorrect: false,
        },
        {
          label: "Two perpetrators acting together — the calm voice and the staged scene suggesting a level of planning unlikely for a single individual acting alone.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Richard Allen, a local pharmacist and frequent user of the trail, was arrested in 2022 and charged with both murders. Evidence linked him directly to the scene. His trial began in 2024. The case is considered active.",
    },

    {
      caseName: 'The Chicago Tylenol Murders',
      clues: [
        {
          fact: "You find a toxicology summary from September 1982. Seven people, in different parts of the same city, died within days of each other. Different ages, different lives, no connection between them. The one thing they shared: they had each taken capsules from a bottle they bought at a store.",
          source: "Illinois Department of Public Health — Toxicology Report, October 1982",
          ref: "dph.illinois.gov/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A pharmaceutical analysis report. The capsules had been opened, filled with cyanide — enough to kill within minutes — and resealed so carefully that no one could tell by looking. Then returned to store shelves. This was done across multiple stores. Someone moved through this city like a shadow.",
          source: "FDA Investigation Report — Tylenol Tampering, October 1982",
          ref: "fda.gov/history/tylenol-tampering",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A regulatory document from 1983. The tamper-evident seal now on every medication you have ever bought — the foil, the shrink wrap, the warnings — is a direct consequence of these seven deaths. You have handled thousands of these seals in your life. You never knew who made them necessary.",
          source: "FDA — Tamper-Resistant Packaging Regulations, 1983",
          ref: "fda.gov/drugs/tamper-evident-packaging",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A letter to a pharmaceutical company, filed as evidence. The writer demands one million dollars to stop the killings. The letter writer was found, convicted of extortion, and sentenced. He always denied planting the capsules. He died in 2023, still denying it.",
          source: "FBI — Tylenol Murders Case File, 1982",
          ref: "fbi.gov/history/famous-cases/tylenol-murders",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An FBI contamination map. Over 1,500 bottles recovered and tested. The poisoned ones formed a cluster — all traceable to a single distribution zone in Chicago. The tampering did not happen at the factory. It happened after. In stores. On shelves. Among other bottles that were fine.",
          source: "FBI Evidence Analysis — Tylenol Investigation, 1982",
          ref: "fbi.gov/vault/tylenol",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An internal investigation file. A disgruntled employee — a man who had made threatening comments about the company — was identified in 1983. You find the polygraph report at the back. He passed. The investigation concluded he was not involved. The file is marked closed.",
          source: "FBI Internal Investigation File — Tylenol, 1983",
          ref: "fbi.gov/vault/tylenol-employees",
          isReal: false,
          falseExplanation: "No company employee was ever seriously investigated as a suspect. The tampering occurred at retail level, not at the factory — making an employee with factory access an implausible perpetrator. No such polygraph report exists in the public record.",
        },
        {
          fact: "Security footage described in an FBI memo — two stores, same individual visible in the pharmacy section the week before the poisonings. The memo states this footage was withheld from the public to avoid alerting the suspect. The memo is dated November 1982.",
          source: "Chicago PD — Tylenol Investigation Evidence Log, 1982",
          ref: "chicagopolice.org/history",
          isReal: false,
          falseExplanation: "No surveillance footage linking a single individual to multiple stores was ever confirmed or used as evidence. Store security in 1982 was extremely limited and no such footage formed part of the investigation.",
        },
        {
          fact: "A timeline reconstructed from store purchase records and victim death certificates. Seven people bought the capsules across a three-day window. The youngest victim was twelve years old. She had a headache. She took the recommended dose.",
          source: "Cook County Medical Examiner — Victim Summary, 1982",
          ref: "cookcountyme.gov/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a photograph of a store shelf, taken by investigators in October 1982. The shelf looks entirely ordinary. The bottles are neatly arranged. There is no way to tell. That is the point. That was always the point.",
          source: "FDA Evidence Photography — Tylenol Investigation, 1982",
          ref: "fda.gov/history/tylenol-tampering",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last page of the file is a case status summary from 2022. Forty years. Over 100 suspects investigated. No charges ever filed for the murders. The summary ends with a section marked 'Conclusion.' The section is blank.",
          source: "FBI — Tylenol Murders Cold Case Status, 2022",
          ref: "fbi.gov/history/famous-cases/tylenol-murders",
          isReal: false,
          falseExplanation: "While the case remains unsolved, no FBI summary document with a blank 'Conclusion' section has been made public. This document was constructed to reflect the case's unresolved status but is not an actual released file.",
        },
      ],
      theories: [
        {
          label: "A random actor with no personal grievance against the victims — someone who chose a mass-market product to cause maximum harm anonymously, for reasons that were never understood.",
          isCorrect: true,
        },
        {
          label: "The extortion letter writer — who demonstrated both knowledge of the case and a willingness to exploit it — carried out the poisonings himself before sending the letter as a calculated distraction.",
          isCorrect: false,
        },
        {
          label: "A pharmacy employee with access to multiple store locations who targeted the product after a personal grievance with the company that manufactured it.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The case was never solved. James Lewis was convicted of extortion but never of murder. The FBI investigated over 100 suspects across four decades. The killer's identity and motive remain entirely unknown.",
    },

  ],

  // ── ROOM 3 — Serial / Violent Cases ──────────────────────────────────────

  3: [

    {
      caseName: 'The Zodiac Killer',
      clues: [
        {
          fact: "You find a letter — or rather, a copy of one, the original held elsewhere under glass. It was sent to three newspapers simultaneously, divided into thirds, demanding front-page publication or more people would die. The writer included a cipher. 408 symbols. He had been planning this for a long time.",
          source: "San Francisco Chronicle — Zodiac Letter Archive, 1969",
          ref: "sfchronicle.com/zodiac-archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A solution key — the cipher cracked within a week by a schoolteacher and his wife using frequency analysis. You read the decoded message. It ends mid-sentence, as though the writer ran out of symbols before he finished his thought. A second cipher sent later has never been decoded by anyone.",
          source: "FBI Cryptanalysis Unit — Zodiac Cipher Report, 1969",
          ref: "fbi.gov/history/famous-cases/zodiac-killer",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An evidence log from a crime scene in 1969. Listed among items recovered: a piece of fabric cut from a victim's shirt. You look for the corresponding letter. It was mailed to police two weeks later. He had taken it as proof, kept it, then sent it when he felt they needed reminding.",
          source: "Vallejo Police Department — Crime Scene Evidence Log, 1969",
          ref: "vallejopd.net/zodiac-case",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A survivor's statement — taken at the hospital, still in shock. She describes the man wearing a homemade hood over his head, a crossed-circle symbol on the front, made from dark fabric. He spoke to them calmly before the attack. He introduced himself. He used the name everyone now knows.",
          source: "Napa County Sheriff — Survivor Statement, September 1969",
          ref: "napapolice.com/zodiac",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A San Francisco Police Department case summary from 1971. By this point the letters had become too numerous to analyse individually. The summary notes references in the letters to collecting 'slaves for the afterlife' — a concept with parallels in specific occult traditions. The summary recommends this line of inquiry be deprioritised. It was.",
          source: "SFPD Homicide Division — Zodiac Case Summary, 1971",
          ref: "sfpd.org/history/zodiac",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A graphology report, commissioned by a newspaper, comparing the Zodiac's handwriting against 200 samples. The report identifies a 97% match with a Bay Area schoolteacher. The report was never submitted to police. The teacher was never formally investigated. The report is filed here under 'Miscellaneous — unverified.'",
          source: "San Francisco Chronicle — Internal Investigation Report, 1970",
          ref: "sfchronicle.com/zodiac-graphology",
          isReal: false,
          falseExplanation: "No graphological analysis produced a 97% match result in the Zodiac case. Handwriting analysis was used but never produced a conclusive identification. This report does not exist in official files.",
        },
        {
          fact: "A cold case unit report from 2002. A partial fingerprint recovered from a victim's vehicle, reanalysed using updated techniques. A match returned — to a man who died in 1992. The report notes this eliminates him as a living suspect but confirms his presence at the scene.",
          source: "SFPD Cold Case Unit — Fingerprint Reanalysis, 2002",
          ref: "sfpd.org/cold-cases/zodiac",
          isReal: false,
          falseExplanation: "No confirmed fingerprint match has ever been produced in the Zodiac case. A partial print from the cab was analysed but never matched to any suspect, living or dead.",
        },
        {
          fact: "A map of Northern California. Six confirmed attack locations marked in red. You draw a line between them in your mind. The locations form no pattern — no route, no geometry, no logic you can find. That may be intentional. Or it may mean there is a logic you simply cannot see yet.",
          source: "California Department of Justice — Zodiac Case Map, 1970",
          ref: "oag.ca.gov/zodiac",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A letter received in 1974, years after the last confirmed killing. The tone has changed — less controlled, more fragmented. Investigators noted at the time that the writing style differed from earlier letters. Some believed the killings had stopped. Some believed he was still watching. He signed it the same way.",
          source: "San Francisco Chronicle — Zodiac Letter, 1974",
          ref: "sfchronicle.com/zodiac-archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The final item in the file is not a document. It is a photograph of a wall — covered in letters, maps, photographs, strings connecting names to dates to places. Someone spent years building this. Below the photograph, a handwritten note: 'Whoever he was, he's still here somewhere. He didn't stop. He just stopped writing.'",
          source: "SFPD Cold Case — Zodiac Investigation Wall, undated",
          ref: "sfpd.org/cold-cases/zodiac",
          isReal: false,
          falseExplanation: "This photograph and note were compiled by a private investigator whose materials were donated to a research archive. They represent personal conclusions, not official investigative findings.",
        },
      ],
      theories: [
        {
          label: "A single, intelligent, organised individual who lived and worked in the Bay Area — someone who stopped killing but continued writing, maintaining the terror without the risk.",
          isCorrect: true,
        },
        {
          label: "Multiple individuals using a shared identity — the variation in attack method and weapon suggesting the 'Zodiac' was a collective whose members operated independently.",
          isCorrect: false,
        },
        {
          label: "A known investigated suspect whose physical description matched survivors' accounts but whose DNA did not match material recovered from the letters — raising questions about the letter samples' integrity.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The Zodiac is believed to be a single individual who committed at least five confirmed murders in Northern California between 1968 and 1969. He was never identified or charged. The case remains open.",
    },

    {
      caseName: 'Jack the Ripper',
      clues: [
        {
          fact: "A police surgeon's report, September 1888. The wounds to the victim required anatomical knowledge — specific, deliberate, efficient. This was not performed in panic or passion. It was performed with the calm competence of someone who had opened a body before, and knew what they were looking for.",
          source: "Metropolitan Police — Whitechapel Murder Files, September 1888",
          ref: "nationalarchives.gov.uk/whitechapel",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a map. Five locations marked in a tight cluster in East London. You measure the distances with your finger. The furthest two are less than a mile apart. Every alley, every dead end, every shadow in that area — he knew them all. He moved through Whitechapel like someone who had lived there long enough to stop seeing it.",
          source: "Metropolitan Police — Whitechapel District Crime Map, 1888",
          ref: "met.police.uk/history/jack-the-ripper",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A facsimile of the 'Dear Boss' letter — received by the Central News Agency in September 1888. It named itself. It promised to send an ear. Days later, another woman was killed and part of an ear was found nearby. The letter may have been a journalist's invention. The body was real.",
          source: "Scotland Yard — Dear Boss Letter Analysis, 1888",
          ref: "met.police.uk/archives/dear-boss",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An order, signed by the Metropolitan Police Commissioner, dated October 1888. A message had been chalked on a wall near a piece of evidence. He ordered it erased before it could be photographed. He gave his reason. No one has ever fully accepted it. The message was never recorded.",
          source: "Metropolitan Police Commissioner's Order — October 1888",
          ref: "nationalarchives.gov.uk/metropolitan-police",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A case analysis from Scotland Yard, 1888. The murders stopped after November. No final communication. No known arrest. The summary lists possible explanations in order of likelihood: emigration, imprisonment for an unrelated offence, institutionalisation, death. None have been confirmed. None have been ruled out.",
          source: "Casebook: Jack the Ripper — Academic Overview, 2001",
          ref: "casebook.org/ripper-suspects",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A journal, discovered in Liverpool in 1991, purporting to be the confession of a cotton merchant. An ink analysis report from 2006 concludes the paper composition is consistent with Victorian manufacture. The report is filed here as supporting documentation.",
          source: "Journal of the Forensic Science Society — Diary Ink Analysis, 2006",
          ref: "forensic-science-international.com",
          isReal: false,
          falseExplanation: "The Liverpool Diary's authenticity remains deeply contested. Ink analysis produced conflicting results — some consistent with Victorian era, some suggesting modern forgery. 'Consistent with' does not mean confirmed, and this summary overstates the evidence.",
        },
        {
          fact: "Metropolitan Police files declassified in 1992 — a named suspect identified by two independent witnesses in October 1888. An arrest warrant was drafted. The warrant was never served. A handwritten note at the bottom of the file: 'Not to be pursued. Commissioner's decision.'",
          source: "Metropolitan Police — Declassified Whitechapel Files, 1992",
          ref: "nationalarchives.gov.uk/metropolitan-police-1992",
          isReal: false,
          falseExplanation: "No arrest warrant for any named suspect has been found in declassified Metropolitan Police files. This document reflects the popular 'royal conspiracy' or high-status cover-up theory, which has no documentary support.",
        },
        {
          fact: "A list of suspects compiled by a senior detective in 1894 — internal, never published in his lifetime. Three names. Beside each, a brief note. You read all three. None of them were ever charged. None of them were ever publicly named at the time. One of them was institutionalised the following year.",
          source: "Metropolitan Police — Macnaghten Memoranda, 1894",
          ref: "nationalarchives.gov.uk/macnaghten",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A shawl — or a photograph of one. Reportedly found near a victim in 1888, held in private possession for over a century, then sold at auction. A DNA report from 2014 claims a mitochondrial DNA match to a suspect. The report has been disputed by multiple independent scientists.",
          source: "Journal of Forensic Genetics — Ripper Shawl Analysis, 2014",
          ref: "researchgate.net/ripper-shawl",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "At the back of the file, a single sheet of paper — a list of everything that was never found: no weapon, no witness who saw a face, no confirmed identity, no motive, no confession that was believed. At the bottom of the list, the final item reads: 'The killer.' Below it, a blank line. Still blank.",
          source: "Metropolitan Police — Whitechapel Case Summary, undated",
          ref: "nationalarchives.gov.uk/whitechapel",
          isReal: false,
          falseExplanation: "This summary document was compiled by a crime historian for an exhibition catalogue, not by the Metropolitan Police. It is included in the file as supplementary material and has no investigative standing.",
        },
      ],
      theories: [
        {
          label: "A local man with medical or butchering knowledge — invisible within his community, intimate with the district's geography, operating in a world so accustomed to violence that no one noticed him moving through it.",
          isCorrect: true,
        },
        {
          label: "A member of the establishment whose identity was actively suppressed — the erased wall message and the unserved warrant evidence of deliberate obstruction from within the police itself.",
          isCorrect: false,
        },
        {
          label: "A Polish barber living in Whitechapel, later institutionalised — identified by a senior detective and recently linked by contested DNA evidence to material found at a scene.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Jack the Ripper's identity has never been established. The most credible suspects share local knowledge, anatomical skill, and social invisibility. The case is the oldest unsolved serial murder investigation in recorded history.",
    },

    {
      caseName: 'The Golden State Killer',
      clues: [
        {
          fact: "You find a pattern document — three counties, twelve years, fifty sexual assaults, thirteen murders, over a hundred burglaries. One perpetrator. The same method, evolving over time, becoming more controlled, more deliberate. He studied his targets. He disabled their exterior lights before entering. He called them by phone before and after.",
          source: "California Department of Justice — East Area Rapist Case File, 1976–1986",
          ref: "oag.ca.gov/goldenstateKiller",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A detective's notes from 1978. The attacker brought his own rope and tape — left no tools behind. He would stack dishes outside bedroom doors and tell his victims he would kill everyone in the house if he heard the dishes fall. He had learned this worked. He had done it before.",
          source: "Sacramento County Sheriff — EAR Case Report, 1978",
          ref: "sacsheriff.com/cold-cases/ear",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A call transcript from 1977. He telephoned investigators directly. He recited a poem he had written — original, composed for the call. You read the transcript. The poem is not good. But it is deliberate. He wanted them to know he had a mind, not just a body. He wanted recognition.",
          source: "Sacramento Police Department — Recorded Call Transcript, 1977",
          ref: "sacpd.org/history/ear",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A press release from the California Department of Justice, April 2018. Genealogical DNA analysis through a public ancestry database. A match. A name. A retired police officer and forensic technician who had worked cases in the same jurisdictions during the exact years of the attacks. He had processed crime scenes. He knew what not to leave behind.",
          source: "California Department of Justice — Press Release, April 2018",
          ref: "oag.ca.gov/news/press-releases/gsk-arrest",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A court document, June 2020. He pleaded guilty to thirteen counts of murder and admitted to being the East Area Rapist. The courtroom was full of survivors and families of victims who had waited decades for this day. He died in prison in 2018, before sentencing could be carried out.",
          source: "Sacramento Superior Court — Plea Agreement, June 2020",
          ref: "saccourt.ca.gov/gsk",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "An interview transcript from 2016 — a retired FBI profiler, now in his seventies. He states that by 1984, he had compiled enough behavioural data to identify the suspect by name. He submitted his findings. His superiors told him the crimes had stopped and resources were needed elsewhere. He says he has never forgiven them.",
          source: "FBI Behavioral Science Unit — Retrospective Interview, 2016",
          ref: "fbi.gov/bsu/gsk-interview",
          isReal: false,
          falseExplanation: "No FBI profiler has publicly claimed to have identified DeAngelo by name in 1984. The case was genuinely cold until genealogical DNA analysis solved it in 2018. This interview reflects retrospective frustration that has been misrepresented as a suppressed identification.",
        },
        {
          fact: "A public records request document from 2018, filed by a journalist. Neighbour reports to local police from the 1990s — three separate occasions on which residents reported concerning behaviour from the same address. Each report was filed. None were followed up. The reason column in each case reads: 'Insufficient grounds.'",
          source: "Citrus Heights Police Department — Public Records Request, 2018",
          ref: "citrusheights.net/police/gsk",
          isReal: false,
          falseExplanation: "No confirmed neighbour reports to police connecting the suspect to suspicious behaviour were found in the public record. This clue fabricates missed warning signs to construct a 'system failure' narrative.",
        },
        {
          fact: "A photograph of a street in a Sacramento suburb. An ordinary house. A garden. A car in the driveway. This is where he lived while he was doing it. He went to work. He mowed his lawn. He attended his daughter's school events. Nobody knew. Nobody looked.",
          source: "Sacramento Bee — Profile of the Golden State Killer, 2018",
          ref: "sacbee.com/news/local/crime/gsk",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A victim's testimony, given at the preliminary hearing in 2020 — forty years after the attack. She describes waiting for him to come back for thirty years. She says she kept a light on in every room for a decade. She says the guilty plea felt like being handed something she had not expected to ever hold.",
          source: "Sacramento Superior Court — Victim Testimony, 2020",
          ref: "saccourt.ca.gov/gsk-testimony",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The final document in the file is a single printed page. At the top: a name. Below it, dates — first known offence, last known offence, arrest, plea, death. The case that spanned more than four decades summarised in eight lines. At the bottom, a handwritten note from the lead investigator: 'For the ones we never got to tell.'",
          source: "California Department of Justice — Case Summary, 2020",
          ref: "oag.ca.gov/goldenstateKiller",
          isReal: false,
          falseExplanation: "This summary document and the handwritten note were reconstructed from public reporting for an investigative documentary. The note itself is not part of an official DOJ file.",
        },
      ],
      theories: [
        {
          label: "A law enforcement insider who used his professional knowledge to evade detection — understanding forensics, selecting targets in under-resourced jurisdictions, and knowing exactly what investigators would look for.",
          isCorrect: true,
        },
        {
          label: "A military veteran whose methodical operational planning — the reconnaissance, the equipment, the controlled escalation — reflected training rather than law enforcement experience.",
          isCorrect: false,
        },
        {
          label: "Two individuals operating in coordination — an organiser and an actor — whose partnership ended in the mid-1980s and explained the sudden cessation of attacks.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Joseph James DeAngelo, a former police officer, was identified through genealogical DNA in 2018 and pleaded guilty in 2020. He died in prison. This is one of the only cases in this collection that was solved.",
    },

    {
      caseName: 'The Axeman of New Orleans',
      clues: [
        {
          fact: "You find a police report from May 1918. A couple found in their bedroom, attacked with their own axe. The axe was washed and left in the bathroom. A panel had been chiselled from the back door — from the outside, quietly, without waking the street. This was not a first attempt. This was someone who had done this before.",
          source: "New Orleans Police Department — Incident Report, May 1918",
          ref: "neworleanspolice.org/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A pattern analysis compiled over eighteen months. Eight attacks. Mostly Italian-American grocers, mostly at night, mostly from the back. You write out the variables and stare at them. The ethnicity and profession of the victims is not random. Someone chose them. For a reason.",
          source: "New Orleans Times-Picayune — Axeman Coverage, 1918–1919",
          ref: "timespicayune.com/archive",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find the letter. Published in the Times-Picayune on March 13th, 1919. Signed 'The Axeman.' He declares himself a demon from the hottest hell. He names a specific Tuesday. On that night, he writes, he will pass over every home from which jazz music can be heard. The city played music until dawn.",
          source: "New Orleans Times-Picayune — Axeman Letter, March 1919",
          ref: "timespicayune.com/axeman-letter",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A morning edition of the newspaper, dated the Wednesday after. No attack occurred on the Tuesday the letter specified. Whether this means the letter writer kept their word, or whether there was never an attack planned, is a question that was never resolved and perhaps never could be.",
          source: "New Orleans Times-Picayune — Morning Edition, March 1919",
          ref: "timespicayune.com/jazz-night",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A cross-referenced police report from Los Angeles — October 1919. An Italian man with known connections to New Orleans was shot dead. The Axeman's attacks stopped the same month. The report notes the timing. It also notes that no connection between the two cases was ever formally established.",
          source: "Los Angeles Police Department — Incident Report Cross-Reference, 1919",
          ref: "lapdonline.org/history/axeman",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A Pinkerton detective agency report, 1919, commissioned privately by the Italian-American community. It names a suspect — a local businessman with financial grievances against multiple grocery competitors. The report was submitted to the New Orleans Police Department and subsequently disappeared from their records.",
          source: "Pinkerton National Detective Agency — New Orleans Field Report, 1919",
          ref: "pinkertons.com/history/archives",
          isReal: false,
          falseExplanation: "No Pinkerton report naming a suspect has been found in the historical record. This clue constructs a suppressed private investigation to support a commercial motive that has no documented basis.",
        },
        {
          fact: "A survivor's statement from 1919. She describes looking at a photograph shown to her by a detective — a man who had previously made an offer to buy her husband's business, an offer her husband refused. She identified him from the photograph without hesitation. The detective's follow-up note reads: 'Not pursued.'",
          source: "New Orleans Police Department — Survivor Statement, 1919",
          ref: "neworleanspolice.org/axeman-survivor",
          isReal: false,
          falseExplanation: "No survivor produced a photo identification of a business rival. While the commercial motive has been proposed by historians, no victim or witness statement naming a specific individual exists in the official record.",
        },
        {
          fact: "A sociological study published in 1922 — three years after the attacks ended — connects the pattern of victims to Black Hand extortion activity in the Italian-American community of New Orleans. Grocers who refused to pay, it argues, were being made into examples. The study names no names. It was not widely read.",
          source: "New Orleans Historical Society — Urban Crime Study, 1922",
          ref: "neworleanshistory.org",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "You find a photograph of a back door — chiselled panel removed, the wood still splintered around the edges. The craftwork is careful. The tool marks are consistent across multiple incidents. Someone owned a chisel and knew how to use it quietly. In eighteen months, no one ever heard them.",
          source: "New Orleans Police Department — Crime Scene Photographs, 1918–1919",
          ref: "neworleanspolice.org/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last item in the file is not a document. It is a handwritten note on a strip of paper, folded four times. It reads: 'He walked through this city every day after. We passed him on the street. We will never know his face.' There is no author. There is no date. The fold lines are old.",
          source: "Axeman of New Orleans — Cold Case File, undated",
          ref: "neworleanspolice.org/cold-cases",
          isReal: false,
          falseExplanation: "This note was written by a crime historian as a concluding observation for a lecture and was included in a research packet that was later filed with case materials. It has no investigative standing.",
        },
      ],
      theories: [
        {
          label: "A single individual connected to Black Hand criminal activity — targeting Italian-American grocers who refused to pay protection, using violence to enforce compliance and send a message to others.",
          isCorrect: true,
        },
        {
          label: "Multiple unconnected attackers exploiting a climate of fear — the consistent method a result of copycat behaviour after the first attacks were publicised, not a single perpetrator.",
          isCorrect: false,
        },
        {
          label: "A local figure using the attacks as commercial sabotage — eliminating competitors through violence while the city's attention was fixed on a phantom demon rather than a very real businessman.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "The Axeman was never identified. The most credible theory links the attacks to Black Hand extortion — Italian criminal networks that targeted community members who refused protection payments. The case remains unsolved.",
    },

    {
      caseName: 'The Texarkana Moonlight Murders',
      clues: [
        {
          fact: "You find a pattern charted on a single sheet of paper — five attacks across ten weeks in the spring of 1946, all on weekends, all on the rural outskirts of a town straddling two state lines. All near lovers' lanes. All at night. All when the moon was full enough to see by.",
          source: "Texarkana Gazette — Moonlight Murders Coverage, 1946",
          ref: "texarkanagazette.com/archive/moonlight-murders",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A ballistics summary. Every attack involving a firearm used the same calibre — a .32 pistol. No shell casings were ever recovered. The investigator's note: 'Collected after each incident. Deliberate.' A person who retrieves their casings in the dark, in a field, after an attack, is not panicking.",
          source: "Texas Ranger Division — Texarkana Investigation Report, 1946",
          ref: "texasrangers.org/history/moonlight-murders",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The survivor's statement — taken slowly, carefully, in a hospital room in April 1946. She describes a white cloth bag over his face, rough holes cut for his eyes. She describes the way he moved — quiet, certain, as if he had already decided where to stand and what to do before he arrived.",
          source: "Bowie County Sheriff — Survivor Statement, April 1946",
          ref: "bowiecountytx.gov/sheriff/history",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A suspect profile from the Texas Rangers, 1947. A drifter with a violent history, arrested the following year for car theft. His wife gave investigators three statements implicating him — then recanted all three. He was never charged with the murders. He died in prison on an unrelated conviction.",
          source: "Texas Ranger Division — Suspect Summary, 1947",
          ref: "texasrangers.org/history/moonlight-suspect",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A 1976 film clipping — a dramatisation of the case, produced thirty years after the murders. A note from an investigator attached to it: 'Film release prompted new witnesses. One placed a man matching the suspect near the final scene on the night of the attack.' The witness's name is redacted.",
          source: "Texarkana Gazette — Post-Film Witness Accounts, 1976",
          ref: "texarkanagazette.com/archive/1976",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A sealed file — marked 'Texas State Archives, restricted.' A Texas Ranger's private report naming a prominent local businessman as his primary suspect, not the drifter. The report was submitted to the Governor's office in 1947. It has never been made public. This is a copy, origin unknown.",
          source: "Texas State Library and Archives — Sealed Records, 1946",
          ref: "tsl.texas.gov/ranger-reports",
          isReal: false,
          falseExplanation: "No Texas Ranger report naming a prominent businessman as the primary suspect has been found in state archives. This clue constructs a suppressed elite-suspect theory with no documentary support.",
        },
        {
          fact: "A revised evidence log — marked as superseding the original. It states that shell casings were in fact recovered at two scenes but withheld from public reporting to avoid alerting the killer. Ballistic analysis confirmed they were fired from a military-issue pistol.",
          source: "Texas Department of Public Safety — Evidence Log Revision, 1946",
          ref: "dps.texas.gov/history/moonlight",
          isReal: false,
          falseExplanation: "No shell casings were ever recovered at any Texarkana crime scene — their absence was one of the defining features of the investigation. This revised log directly contradicts established fact.",
        },
        {
          fact: "A newspaper front page from May 1946. The headline announces the final attack. Below the fold, a smaller article: the town is under a self-imposed curfew. Lovers' lanes are empty. Drive-in theatres are closed. An entire community has changed how it lives because of a man no one can name.",
          source: "Texarkana Gazette — Front Page, May 1946",
          ref: "texarkanagazette.com/archive/moonlight-murders",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "A psychiatric assessment of the prime suspect, conducted during his later imprisonment. The assessor notes extreme compartmentalisation, above-average intelligence, and a 'complete absence of expressed remorse for any act of violence across his lifetime.' The murders are not mentioned in the assessment. They could not be.",
          source: "Texas Department of Corrections — Psychological Assessment, 1955",
          ref: "tdcj.texas.gov/records",
          isReal: true,
          falseExplanation: null,
        },
        {
          fact: "The last page of the file is a letter from a resident of Texarkana, written to the sheriff in 1986, forty years after the murders. She writes that she grew up being told never to park on those roads at night. She writes that she still does not. She writes: 'Whoever he was, he's still here in the way we live. We haven't shaken him yet.'",
          source: "Bowie County Sheriff — Public Correspondence File, 1986",
          ref: "bowiecountytx.gov/sheriff",
          isReal: false,
          falseExplanation: "While correspondence of this kind may exist in local archives, this specific letter was composed for an oral history project and included in a researcher's case materials. It is not an official investigative document.",
        },
      ],
      theories: [
        {
          label: "A transient offender — possibly with military experience accounting for his discipline and weapon handling — who moved through the area during a specific window and disappeared before the investigation could close around him.",
          isCorrect: true,
        },
        {
          label: "A local resident with deep community knowledge — someone whose standing protected him from serious scrutiny, and who stopped only when the investigation made the roads too dangerous to use.",
          isCorrect: false,
        },
        {
          label: "Two individuals acting in coordination — the survivor's description of the attacker knowing exactly where to stand suggesting prior planning that is unlikely for a single person acting alone.",
          isCorrect: false,
        },
      ],
      correctTheoryExplanation: "Youell Swinney, a drifter arrested in 1947, was the prime suspect. His wife gave statements implicating him, then recanted. He was never charged with the murders. The case remains officially unsolved.",
    },

  ],
}

// Helper to get a case by room and name
export function getSeededCase(roomNum, caseName) {
  const pool = SEEDED_CASES[roomNum] || []
  return pool.find(c => c.caseName === caseName) || null
}
