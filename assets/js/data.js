/* ==========================================================================
   SITE DATA — edit this file to update artists, videos and settings.
   No coding needed: copy an existing entry, change the values, save.
   ========================================================================== */

window.SITE = {
  /* Label name — change here and it updates everywhere it is rendered by JS.
     (Also find/replace "First Milestone" in the .html files.) */
  labelName: "First Milestone",

  /* FORMS
     Paste a form endpoint here (e.g. Formspree: https://formspree.io/f/xxxxxx,
     Basin, Getform, or your own backend). Leave empty and forms fall back to
     opening an email to `email` below with everything pre-filled. */
  formEndpoint: "",
  email: "info@milestones.co.za",
};

/* --------------------------------------------------------------------------
   HOME CAROUSEL — the big rotating banner at the top of the home page.
   kicker: small italic line ("New single", "Now signing"…)
   title / subtitle: the big text bottom-right
   link: where the slide goes when clicked
   -------------------------------------------------------------------------- */
window.SLIDES = [
  {
    kicker: "Now signing",
    title: "First Milestone",
    subtitle: "Our label for first-time school & university artists",
    image: "https://milestones.co.za/wp-content/uploads/2022/09/Milestone-Music-Recording-stuio-in-Cape-Town-sag-aftra-studio-007-scaled.jpg",
    link: "label.html",
  },
  {
    kicker: "New single",
    title: "Golden Hour",
    subtitle: "Naledi Sky",
    image: "https://milestones.co.za/wp-content/uploads/2021/05/Raindirk-scaled.jpg",
    link: "artist.html?a=naledi-sky",
  },
  {
    kicker: "In the studio",
    title: "Dolby Atmos 7.1.4",
    subtitle: "Spatial mixing in Cape Town",
    image: "https://milestones.co.za/wp-content/uploads/2021/06/studio-c-scaled.jpg",
    link: "studio.html#atmos",
  },
  {
    kicker: "New EP",
    title: "Off the Floor",
    subtitle: "Bloem St. Collective",
    image: "https://milestones.co.za/wp-content/uploads/2021/06/studio-b-scaled.jpg",
    link: "artist.html?a=the-bloem-st-collective",
  },
  {
    kicker: "Behind the glass",
    title: "Studio on film",
    subtitle: "Sessions, tours & stories",
    image: "https://milestones.co.za/wp-content/uploads/2021/05/Lexicon-480L-reverb-scaled.jpg",
    link: "videos.html",
  },
];

/* --------------------------------------------------------------------------
   ARTISTS
   music: paste ANY of these share links — the site turns them into players:
     - Spotify:      https://open.spotify.com/artist/...  (or /album/, /track/, /playlist/)
     - Apple Music:  https://music.apple.com/za/album/...
     - YouTube:      https://www.youtube.com/watch?v=...   (for YouTube Music / videos)
     - SoundCloud:   https://soundcloud.com/artist/track
   photo: path or URL to a square-ish image. Leave "" for a generated cover.
   campus: the school or university (used for the filter on the Artists page).
   track: "university" or "school".
   Every artist with a `music` link also gets a tab in the "Listen now" player
   on the home page — paste their Spotify ARTIST link to show their top tracks.
   The artists below are SAMPLES — replace with real signings.
   -------------------------------------------------------------------------- */
window.ARTISTS = [
  {
    slug: "naledi-sky",
    name: "Naledi Sky",
    sample: true,
    campus: "UCT",
    track: "university",
    genre: "Alt R&B",
    year: "Class of 2026",
    bio: "Bedroom-pop textures, choir-trained harmonies. Tracked her debut EP in Studio 1 with a live string quartet.",
    hue: 18,
    photo: "",
    stats: { shows: 14, streams: "48K", releases: 2 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp",
    links: { instagram: "#", spotify: "#", youtube: "#" },
  },
  {
    slug: "the-bloem-st-collective",
    name: "Bloem St. Collective",
    sample: true,
    campus: "UWC",
    track: "university",
    genre: "Jazz / Neo-soul",
    year: "Class of 2026",
    bio: "A seven-piece born in a campus practice room. Cape jazz meets broken-beat, recorded live off the floor.",
    hue: 200,
    photo: "",
    stats: { shows: 22, streams: "31K", releases: 1 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk",
    links: { instagram: "#", spotify: "#", youtube: "#" },
  },
  {
    slug: "kai-m",
    name: "KAI.M",
    sample: true,
    campus: "Stellenbosch",
    track: "university",
    genre: "Amapiano / House",
    year: "Class of 2027",
    bio: "Producer-DJ blending log-drum grooves with live keys. Residency at two campus venues and counting.",
    hue: 140,
    photo: "",
    stats: { shows: 31, streams: "112K", releases: 4 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    links: { instagram: "#", spotify: "#", youtube: "#" },
  },
  {
    slug: "river-and-stone",
    name: "River & Stone",
    sample: true,
    campus: "CPUT",
    track: "university",
    genre: "Indie Folk",
    year: "Class of 2027",
    bio: "Acoustic duo with a cinematic streak. Their first single was mixed in our Dolby Atmos suite.",
    hue: 280,
    photo: "",
    stats: { shows: 9, streams: "12K", releases: 1 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DWWEJlAGA9gs0",
    links: { instagram: "#", spotify: "#", youtube: "#" },
  },
  {
    slug: "amahle-z",
    name: "Amahle Z.",
    sample: true,
    campus: "Schools programme",
    track: "school",
    genre: "Gospel / Soul",
    year: "Grade 11",
    bio: "Found through a school choir competition. A huge voice at sixteen, now writing her own songs with our engineers after school.",
    hue: 45,
    photo: "",
    stats: { shows: 6, streams: "4K", releases: 1 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO",
    links: { instagram: "#", spotify: "#" },
  },
  {
    slug: "youngbloods-crew",
    name: "Youngbloods Crew",
    sample: true,
    campus: "Schools programme",
    track: "school",
    genre: "Hip-Hop",
    year: "Grade 12",
    bio: "Three matrics who met in their school's music room. Bilingual bars over live drums, recorded in Studio 1 during the holidays.",
    hue: 330,
    photo: "",
    stats: { shows: 11, streams: "9K", releases: 2 },
    music: "https://open.spotify.com/playlist/37i9dQZF1DWTggY0yqBxES",
    links: { instagram: "#", youtube: "#" },
  },
];

/* --------------------------------------------------------------------------
   OPEN STAGES — concerts & events looking for artists (Impact Partners page).
   date: YYYY-MM-DD (events disappear automatically once the date has passed)
   type: Concert, Schools, Festival, Corporate, Brand activation…
   The events below are SAMPLES — replace with real opportunities.
   -------------------------------------------------------------------------- */
window.EVENTS = [
  {
    sample: true,
    title: "Spring Campus Showcase",
    date: "2026-11-14",
    city: "Cape Town",
    type: "Concert",
    slots: "3 acts",
    paid: true,
    genres: "Any genre",
    blurb: "Afternoon showcase for emerging student acts. 20-minute sets with full PA and backline provided.",
  },
  {
    sample: true,
    title: "Corporate Year-End Dinner",
    date: "2026-12-04",
    city: "Stellenbosch",
    type: "Corporate",
    slots: "1 act",
    paid: true,
    genres: "Acoustic / Jazz",
    blurb: "Acoustic duo or trio for a 200-guest year-end dinner. Two 45-minute sets.",
  },
  {
    sample: true,
    title: "Summer Festival: Emerging Stage",
    date: "2027-01-23",
    city: "Western Cape",
    type: "Festival",
    slots: "6 acts",
    paid: true,
    genres: "Any genre",
    blurb: "Daytime emerging-artist stage at a regional summer festival, with a sponsor slot open for naming rights.",
  },
  {
    sample: true,
    title: "Youth Day Schools Concert",
    date: "2027-06-16",
    city: "Cape Town",
    type: "Schools",
    slots: "8 acts",
    paid: false,
    genres: "Any genre",
    blurb: "Learners from partner schools share the stage with First Milestone artists. Looking for a CSI partner to fund transport and production.",
  },
  {
    sample: true,
    title: "Heritage Month Brand Activation",
    date: "2027-09-18",
    city: "Johannesburg",
    type: "Brand activation",
    slots: "2 acts",
    paid: true,
    genres: "Amapiano / Afro-pop",
    blurb: "Mall activation for a consumer brand. High-energy 30-minute sets and social content on the day.",
  },
];

/* --------------------------------------------------------------------------
   VIDEOS
   youtube: the video ID (the bit after v= in a YouTube link), or a full link.
   Leave youtube "" to show a "coming soon" card using `poster`.
   category: one of "Behind the Scenes", "Studio Tour", "Artist Sessions", "Productions"
   -------------------------------------------------------------------------- */
window.VIDEOS = [
  {
    title: "Inside Studio 1: the 100m² live room",
    category: "Studio Tour",
    youtube: "",
    poster: "https://milestones.co.za/wp-content/uploads/2022/09/Milestone-Music-Recording-stuio-in-Cape-Town-sag-aftra-studio-007-scaled.jpg",
    length: "",
    featured: true,
  },
  {
    title: "Tracking a choir on the Raindirk Symphony",
    category: "Behind the Scenes",
    youtube: "",
    poster: "https://milestones.co.za/wp-content/uploads/2021/05/Raindirk-scaled.jpg",
    length: "",
  },
  {
    title: "First Milestone: day one in the studio",
    category: "Artist Sessions",
    youtube: "",
    poster: "https://milestones.co.za/wp-content/uploads/2021/06/studio-a-scaled.jpg",
    length: "",
  },
  {
    title: "Mixing in Dolby Atmos 7.1.4",
    category: "Behind the Scenes",
    youtube: "",
    poster: "https://milestones.co.za/wp-content/uploads/2021/06/studio-c-scaled.jpg",
    length: "",
  },
  {
    title: "King Baboon's New Year's Party (Storytime Africa)",
    category: "Productions",
    youtube: "h8Mp26UqHbY",
  },
  {
    title: "The Frog Who Lost Her Hop (Storytime Africa)",
    category: "Productions",
    youtube: "oqWtezgW_Vk",
  },
  {
    title: "The Baboon Who Went to the Moon (Storytime Africa)",
    category: "Productions",
    youtube: "ntBYHuNpDis",
  },
  {
    title: "Live session: the outboard rack",
    category: "Artist Sessions",
    youtube: "",
    poster: "https://milestones.co.za/wp-content/uploads/2021/05/Lexicon-480L-reverb-scaled.jpg",
    length: "",
  },
];
