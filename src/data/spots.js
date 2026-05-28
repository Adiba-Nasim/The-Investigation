// ── ROOM 1 — Anime Detective Office (21 spots) ────────────────────────────
export const SPOTS_R1 = [
  { id: 'r1_filing', label: 'Filing Cabinets', x: 10, y: 55, fallback: 'Rows of filing cabinets. Most locked. The open one is empty — and was emptied recently.' },
  { id: 'r1_gramophone', label: 'Gramophone', x: 5, y: 23, fallback: 'A gramophone with no record on it. The needle is still warm.' },
  { id: 'r1_certs', label: 'Framed Certificates', x: 15, y: 27, fallback: 'Official-looking certificates. One of them is framed upside down — nobody corrected it.' },
  { id: 'r1_small_frame', label: 'Small Frame', x: 13, y: 34, fallback: 'A small framed photograph — the face has been removed with scissors.' },
  { id: 'r1_wallphone', label: 'Wall Telephone', x: 19, y: 42, fallback: 'Dead line. Has been for weeks. But the receiver is off the hook — someone lifted it last.' },
  { id: 'r1_pipes', label: 'Pipe System', x: 8, y: 38, fallback: 'The pipes run from this wall into an exterior duct. One section has been recently opened.' },
  { id: 'r1_coat', label: 'Coat on Chair', x: 25, y: 60, fallback: 'A coat, still damp from two hours ago. Whoever wore it never came back for it.' },
  { id: 'r1_floor_papers', label: 'Floor Papers', x: 23, y: 72, fallback: 'Papers on the floor — knocked off the cabinet above. Something was grabbed in a hurry.' },
  { id: 'r1_lamp', label: 'Desk Lamp', x: 43, y: 57, fallback: 'The bulb is warm. Someone left it on. It has been burning for a long time.' },
  { id: 'r1_corkboard', label: 'Cork Board', x: 48, y: 26, fallback: "A map, pins, string — someone's theory. The pins form a pattern you almost recognise." },
  { id: 'r1_chair', label: 'Wooden Chair', x: 40, y: 76, fallback: 'A wooden chair, pushed back fast. The legs left drag marks in the rug.' },
  { id: 'r1_desk', label: 'Main Desk', x: 49, y: 72, fallback: 'The desk surface has been wiped down. But not well enough — you can see the outline of papers.' },
  { id: 'r1_desk_papers', label: 'Desk Papers', x: 36, y: 65, fallback: 'Scattered papers — deliberately scattered. Someone wanted it to look undisturbed.' },
  { id: 'r1_fan', label: 'Ceiling Fan', x: 50, y: 7, fallback: 'The ceiling fan is still running. Slow. It has been going all night.' },
  { id: 'r1_typewriter', label: 'Typewriter', x: 57, y: 67, fallback: "The ribbon is dry. But the last line typed is still impressed in the platen. You can't quite read it." },
  { id: 'r1_bookshelf', label: 'Bookshelf', x: 77, y: 46, fallback: 'Books and binders. Three volumes are out of order — not randomly. Alphabetically reversed.' },
  { id: 'r1_film_reels', label: 'Film Reels', x: 74, y: 18, fallback: 'Three unlabelled film reels. One has been played recently. The footage it contains is unknown.' },
  { id: 'r1_clock', label: 'Wall Clock', x: 86, y: 36, fallback: 'Stopped at 3:47. The winding mechanism is intact. Nobody stopped it by accident.' },
  { id: 'r1_calendar', label: 'Calendar', x: 91, y: 46, fallback: 'A date circled in red — the circling done repeatedly, pressed deep into the paper.' },
  { id: 'r1_sofa', label: 'Leather Sofa', x: 88, y: 66, fallback: 'An indent in the leather cushion. Someone sat here a very long time and waited.' },
  { id: 'r1_suitcase', label: 'Suitcases', x: 84, y: 84, fallback: 'Packed bags. Not locked. Whoever was leaving did not quite make it out.' },
]

// ── ROOM 2 — FBI Noir Office (20 spots) ───────────────────────────────────
export const SPOTS_R2 = [
  { id: 'r2_agent_left', label: 'Agent at Left Desk', x: 12, y: 55, fallback: 'A figure at the desk, back turned. The paperwork in front of them has not been touched.' },
  { id: 'r2_agent_papers', label: "Agent's Papers", x: 10, y: 68, fallback: 'The papers are all carbon copies — the originals are nowhere in the room.' },
  { id: 'r2_filing_left', label: 'Left Filing Cabinets', x: 22, y: 45, fallback: 'Filing cabinets, government-issue. One drawer is labelled in a different hand than the others.' },
  { id: 'r2_filing_tall', label: 'Tall Cabinets', x: 28, y: 35, fallback: 'A filing cabinet with no label. The lock has been forced and re-locked — badly.' },
  { id: 'r2_clock', label: 'Wall Clock', x: 18, y: 28, fallback: 'The clock is running, but it is three minutes slow. Every clock in this building runs on the same line.' },
  { id: 'r2_desk_equipment', label: 'Desk Equipment', x: 18, y: 60, fallback: 'Communication equipment. One channel is still live, broadcasting static on a frequency not in the logs.' },
  { id: 'r2_light', label: 'Fluorescent Light', x: 50, y: 8, fallback: 'One of the fluorescent lights flickers in a pattern. Not a malfunction. Something deliberate.' },
  { id: 'r2_map', label: 'US Map on Wall', x: 55, y: 28, fallback: 'A map of the country with pins. Three clusters. Each cluster is in a city where a case went cold.' },
  { id: 'r2_column', label: 'Support Column', x: 40, y: 40, fallback: 'Something was taped to this column and removed — you can see the adhesive outline.' },
  { id: 'r2_table', label: 'Evidence Table', x: 58, y: 62, fallback: 'The evidence table has been photographed — the photograph does not match what is on it now.' },
  { id: 'r2_table_items', label: 'Table Evidence Items', x: 52, y: 72, fallback: 'Items laid out in numbered order. Item seven is missing. The number marker is still there.' },
  { id: 'r2_agent_right', label: 'Right Standing Agent', x: 78, y: 65, fallback: 'An agent standing alone, facing away. They have not moved since you entered.' },
  { id: 'r2_glass_window', label: 'Glass Office Window', x: 72, y: 38, fallback: 'An office behind glass. The blinds are closed — but the light inside is on and moving.' },
  { id: 'r2_glass_door', label: 'Glass Office Door', x: 80, y: 50, fallback: 'The glass office door is locked from the outside. The key is not in the room.' },
  { id: 'r2_staircase', label: 'Staircase', x: 85, y: 55, fallback: 'The stairs lead down. There is a sound from below — not footsteps. Something being dragged.' },
  { id: 'r2_right_cabinets', label: 'Right Cabinets', x: 88, y: 42, fallback: 'Display cabinets. The items inside have been catalogued. One tag has been changed.' },
  { id: 'r2_vent', label: 'Overhead Vent', x: 35, y: 18, fallback: 'An air vent, screws recently removed and replaced. What passed through it left no trace.' },
  { id: 'r2_bg_agents', label: 'Background Agents', x: 65, y: 48, fallback: 'Two figures in the background, speaking. When you look directly at them, they stop.' },
  { id: 'r2_floor', label: 'Floor Tiles', x: 38, y: 82, fallback: 'The floor has been cleaned recently — in a specific area. Not the rest of it. Just here.' },
  { id: 'r2_board', label: 'Notice Board', x: 45, y: 38, fallback: 'A notice board. The most recent item pinned is a memo with every identifying detail redacted.' },
]

// ── ROOM 3 — Dark Memorial Study (22 spots) ───────────────────────────────
export const SPOTS_R3 = [
  { id: 'r3_left_plaque', label: 'Left Wall Plaque', x: 5, y: 12, fallback: 'A mounted plaque. The inscription has been partially obscured — not by age, by intent.' },
  { id: 'r3_left_lamp', label: 'Left Table Lamp', x: 4, y: 48, fallback: 'A table lamp casting amber light. The shade has been turned to face the wall.' },
  { id: 'r3_left_sideboard', label: 'Left Sideboard', x: 7, y: 65, fallback: 'A sideboard with locked drawers. The bottom one is slightly open. Empty.' },
  { id: 'r3_framed_flag', label: 'Framed Flag', x: 12, y: 68, fallback: 'A folded flag behind glass, presented but never opened. Something is tucked beneath it.' },
  { id: 'r3_portrait_left', label: 'Portrait Wall Left', x: 14, y: 30, fallback: 'A grid of portrait photographs. One face appears in three different frames under different names.' },
  { id: 'r3_armchair', label: 'Leather Armchair', x: 20, y: 68, fallback: 'A leather armchair angled toward the fireplace. The armrest is worn on one side only.' },
  { id: 'r3_book_chair', label: 'Book on Chair', x: 22, y: 78, fallback: 'A book left open, face down. The page it is open to has a single sentence underlined.' },
  { id: 'r3_window', label: 'Window', x: 38, y: 30, fallback: 'The window overlooks an empty garden. The curtain has been tied back on one side — recently.' },
  { id: 'r3_window_lamp', label: 'Window Desk Lamp', x: 42, y: 55, fallback: 'A small desk lamp by the window. The bulb is new. Everything else in this room is old.' },
  { id: 'r3_window_desk', label: 'Window Desk Items', x: 44, y: 65, fallback: 'Papers and objects on the window desk. One item does not belong to this room — or this decade.' },
  { id: 'r3_centre_plaque', label: 'Centre Wall Plaque', x: 50, y: 10, fallback: 'The largest plaque on the wall. The dedication is to someone whose file was sealed in 1973.' },
  { id: 'r3_portrait_centre', label: 'Centre Portrait Wall', x: 52, y: 35, fallback: 'Dozens of portraits. You count them. Then count again. The number changes.' },
  { id: 'r3_candle', label: 'Coffee Table Candle', x: 50, y: 75, fallback: 'A candle, still burning. The wax pool is shallow — it was only lit recently.' },
  { id: 'r3_table_items', label: 'Coffee Table Items', x: 55, y: 82, fallback: 'Objects arranged on the coffee table. Their placement is deliberate — almost ritualistic.' },
  { id: 'r3_right_plaque', label: 'Right Wall Plaque', x: 80, y: 10, fallback: 'A plaque that contradicts the one on the left. Same event, different date. One of them is wrong.' },
  { id: 'r3_bookshelf_lamp', label: 'Bookshelf and Lamp', x: 72, y: 38, fallback: 'A bookshelf with a lamp nested between volumes. The books around it have never been read.' },
  { id: 'r3_fireplace', label: 'Fireplace', x: 76, y: 68, fallback: 'The fireplace is cold. But there is fresh ash — paper ash. Something was burned here tonight.' },
  { id: 'r3_mantel_photos', label: 'Fireplace Mantel Photos', x: 80, y: 48, fallback: 'Framed photographs on the mantel. The most recent one shows a gathering. You recognise the location.' },
  { id: 'r3_right_sideboard', label: 'Right Sideboard', x: 92, y: 65, fallback: 'A sideboard with candles burning on top. The candles are the same height — lit at the same time.' },
  { id: 'r3_right_lamp', label: 'Right Table Lamp', x: 94, y: 50, fallback: 'The lamp on the right is on a timer. It clicked on three minutes before you arrived.' },
  { id: 'r3_sofa', label: 'Right Sofa', x: 88, y: 84, fallback: 'A sofa with a throw blanket. Beneath the blanket, the cushions have been removed.' },
  { id: 'r3_portrait_right', label: 'Right Portrait Wall', x: 90, y: 25, fallback: 'The portraits on this wall are all the same person at different ages. None of them are labelled.' },
]

// Legacy export
export const SPOTS = SPOTS_R1

export function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── ROOM 3 OVERRIDE — Dark Memorial Study (22 spots) ─────────────────────
// Replaces the previous SPOTS_R3 (FBI office) for the final room assignment
export const SPOTS_R3_MEMORIAL = [
  { id: 'r3m_plaque_left', label: 'Left Wall Plaque', x: 5, y: 12, fallback: 'A memorial plaque. The names have been partially obscured — someone pressed tape over two of them.' },
  { id: 'r3m_lamp_left', label: 'Left Table Lamp', x: 4, y: 48, fallback: 'A lamp still burning. The shade is slightly askew — as if someone brushed past it in a hurry.' },
  { id: 'r3m_sideboard_left', label: 'Left Sideboard', x: 7, y: 65, fallback: 'A sideboard with a locked drawer. The key is not in the room. The lock has been recently scratched.' },
  { id: 'r3m_flag', label: 'Framed Flag', x: 12, y: 68, fallback: 'A folded flag in a display case. The case has been opened and resealed — the hinges show fresh marks.' },
  { id: 'r3m_portraits_left', label: 'Portrait Wall Left', x: 14, y: 30, fallback: 'A wall of portrait photographs. One frame is empty — the photograph removed, the hook still warm.' },
  { id: 'r3m_armchair', label: 'Leather Armchair', x: 20, y: 68, fallback: 'A deep leather armchair. Someone sat here a long time. The cushion is still compressed.' },
  { id: 'r3m_book_chair', label: 'Book on Chair Arm', x: 22, y: 78, fallback: 'A book left face-down on the arm of the chair. The page it was open to has been torn out.' },
  { id: 'r3m_window', label: 'Tall Window', x: 38, y: 30, fallback: 'The window looks out onto darkness. The latch is open. It was not open when this room was last used.' },
  { id: 'r3m_window_lamp', label: 'Window Desk Lamp', x: 42, y: 55, fallback: 'A small lamp on the window desk — angled toward the glass. As if signalling something outside.' },
  { id: 'r3m_window_desk', label: 'Window Desk Items', x: 44, y: 65, fallback: 'A desk beneath the window. Papers, a pen, an empty envelope addressed but never sent.' },
  { id: 'r3m_plaque_centre', label: 'Centre Wall Plaque', x: 50, y: 10, fallback: "The central plaque reads: 'The Legacy of the Hunters Never Ends.' Someone has underlined the word Never in pencil." },
  { id: 'r3m_portraits_centre', label: 'Centre Portrait Wall', x: 52, y: 35, fallback: 'Dozens of portrait photographs. They are arranged in a pattern — not chronological. Something else.' },
  { id: 'r3m_candle', label: 'Coffee Table Candle', x: 50, y: 75, fallback: 'A candle burning on the coffee table. It has been burning for hours. Nobody lit it recently.' },
  { id: 'r3m_table_items', label: 'Coffee Table Items', x: 55, y: 80, fallback: 'Items arranged on the table — a folded cloth, a small case, an object you cannot identify.' },
  { id: 'r3m_plaque_right', label: 'Right Wall Plaque', x: 80, y: 10, fallback: "The right plaque reads: 'Some Stories Don't End. They Pass the Torch.' The word Torch has been circled." },
  { id: 'r3m_bookshelf', label: 'Bookshelf and Lamp', x: 72, y: 38, fallback: 'A bookshelf with a lamp above it. Three books have been pulled forward — markers, or warnings.' },
  { id: 'r3m_fireplace', label: 'Fireplace', x: 76, y: 65, fallback: 'The fireplace is cold. But ash has been disturbed recently — something was burned here, and recently.' },
  { id: 'r3m_mantel', label: 'Fireplace Mantel', x: 80, y: 48, fallback: 'Photographs along the mantel. One has been turned face-down. You resist the urge to turn it back.' },
  { id: 'r3m_sideboard_right', label: 'Right Sideboard', x: 92, y: 65, fallback: 'A sideboard with candles. One candle has been extinguished by hand — the wax shows a thumbprint.' },
  { id: 'r3m_lamp_right', label: 'Right Table Lamp', x: 94, y: 50, fallback: 'The right lamp has been moved — you can see the dust outline of where it previously stood.' },
  { id: 'r3m_sofa_right', label: 'Right Sofa', x: 88, y: 82, fallback: 'A sofa against the right wall. Beneath the cushion, a folded piece of paper. It is blank.' },
  { id: 'r3m_portraits_right', label: 'Portrait Wall Right', x: 90, y: 25, fallback: 'More portraits on the right wall. You notice one subject appears in three separate photographs — each from a different decade.' },
]