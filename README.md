# Milestone Studios — website redesign

A static site (plain HTML/CSS/JS, no build step). Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8765
```

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: release carousel → book the studio → our artists → **Listen now** (a Spotify tab per artist) → editorial cards → impact partners → client logos → newsletter |
| `label.html` | **First Milestone**: developmental label for first-time **school and university** artists, two entry tracks, FAQ, application form (asks for a parent/guardian when under 18) |
| `impact.html` | **Impact Partners** for brands (logo on the label, an artist or the programme, plus a seat in the event network) and for event companies & venues (list events to the network). Includes **Open Stages** and two tabbed forms: Partner your brand / List an event or venue |
| `team.html` | The team: full bios for all five team members |
| `artists.html` | Full roster (circular portraits, campus filter) + artist booking enquiry form |
| `artist.html?a=<slug>` | One page per artist, generated from `data.js`: portrait, socials, music player, bio/stats, "Book this artist" form |
| `videos.html` | Behind-the-scenes video library with category filters and a pop-up player |
| `studio.html` | Rooms, gear, team, history |
| `contact.html` | Studio enquiry form, contact details, map |

## Day-to-day editing: `assets/js/data.js`

**Home carousel:** edit the `SLIDES` list (kicker, title, subtitle, image, link).
**Open stages:** edit the `EVENTS` list (events disappear automatically once their date passes).

**Add an artist:** copy one of the `ARTISTS` entries and change the values. For `music`, paste any share link:
- Spotify: `https://open.spotify.com/artist/...` (also album / track / playlist)
- Apple Music: `https://music.apple.com/za/album/...`
- YouTube / YouTube Music: `https://www.youtube.com/watch?v=...`
- SoundCloud: `https://soundcloud.com/...`

The player is built automatically, and the artist gets a playable card in the home page's **Listen now** grid and on the Artists page. Paste their Spotify *artist* link to show their top tracks.
Artists can be searched by name or genre, both on the home page and on the Artists page. Genre filters come from the `genre` field, split on "/", so `"Jazz / Neo-soul"` appears under both Jazz and Neo-soul. You can link straight to a filtered list with `artists.html?genre=Jazz` or `artists.html?q=kai`. Remove `sample: true` for real signings, and add a `photo` (otherwise a coloured cover with initials is generated, and `hue` sets the colour).

**Add a video:** add an entry to `VIDEOS` with the YouTube link or ID and a `category`
(`Behind the Scenes`, `Studio Tour`, `Artist Sessions`, `Productions`). Entries with `youtube: ""` show as "Coming soon" cards.

## Before going live

1. **Forms:** set `formEndpoint` in `data.js` (e.g. a free [Formspree](https://formspree.io) form). Until then, forms open the visitor's email app pre-filled to info@milestones.co.za.
2. **Images:** currently loaded from the existing milestones.co.za WordPress uploads. Copy them into `assets/img/` and update the paths before the old site is switched off.
3. **Replace sample artists** (marked "Sample") and the placeholder behind-the-scenes videos.
4. **Confirm the label terms** in `label.html`: free to apply, artists keep masters/publishing, 12–24 months, closing date, intake year. These are draft copy.
5. Optional: swap the home hero image for a looping studio video (instructions in a comment in `index.html`).
