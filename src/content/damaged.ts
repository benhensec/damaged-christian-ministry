import type { SiteContent } from "./types";
import { withPublicBase } from "@/lib/asset";

const m1 = `You already know the title is not a marketing line. You have the nights to prove it. The diagnosis. The betrayal. The church meeting that left you smaller than when you walked in. The quiet, ordinary damage nobody put on a prayer chain because it did not look spiritual enough.

Paul writes to a church that was tired of being impressive: “We have this treasure in jars of clay.” Not marble. Not a brand. Clay. The kind that chips if you look at it wrong. The miracle is not that the jar is pretty. The miracle is that the treasure did not leak out when the jar cracked.

If you came here hoping we would tell you the damage was a dream, you will be disappointed. We tell the truth first. The wound is real. The loss is real. The anger at God, at pastors, at yourself — real. Pretending is what got a lot of us hurt in the first place.

Here is the other half of the truth, and we will not whisper it. You are not the sum of what broke. The gospel is not a self-improvement plan for people who are almost fine. It is God putting His own life inside wreckage and calling it a temple. “Struck down, but not destroyed.” That is not a slogan. It is a location. You can live there.

This ministry exists for people who are done performing Christianity and are not done with Christ. Bring the limp. Bring the questions that would get you uninvited from a small group. Bring the Bible you have not opened because you were afraid it would take their side.

We will not rush you. We will not call your caution “unbelief” so we can feel like better evangelists. We will sit at the table, open the book, and tell the truth until the treasure is louder than the cracks.

If that is you — damaged, still here — you are not late. You are not a project. You are the reason this work exists. Welcome.`;

const m2 = `Some of you did not leave Jesus. You left a room that used His name like a lock. There is a difference, and it matters.

Church hurt is not a punchline and it is not proof that you were never serious. It is what happens when power, image, and unaccountable people get baptized in spiritual language. The wound is often worse than ordinary cruelty because it arrived wearing a verse.

Hear this without the usual disclaimers: if someone used Scripture to silence you, isolate you, or make you complicit in your own diminishing, that was not “a season of pruning.” That was sin. Naming it is not gossip. Naming it is how the body stops bleeding on the carpet while everyone sings.

And still — this is the hard, holy part — Jesus does not abandon His church because she has been a poor witness. He washes feet. He walks into locked rooms. He does not recruit you into a private spirituality that never has to forgive, never has to be known, never has to sit next to an actual sinner who is also trying.

The work is to tell two true sentences in the same breath:
The church can be dangerous.
The church is still Christ’s idea.

You do not have to sprint back into the building that broke you. You do have to stay close enough to other believers that your faith does not become a monologue. A table of three honest people and an open Bible will do more for a damaged disciple than a thousand-seat room that never learned your name.

If you need permission to go slow, you have it. If you need permission to expect better shepherds, you have it. If you need permission to still belong to Jesus while you figure out where you can stand without flinching — you have it. That is the real church. Not a brand. A people.`;

const m3 = `People will tell you God never wastes a hurt. Sometimes that sentence is a kindness. Sometimes it is a way to skip the funeral.

We will not skip it. Loss has a name. Trauma has a body. There are prayers that end in silence and mornings that arrive anyway. A faith that cannot sit shiva is not faith. It is optimism in religious clothing.

Look at the scarred God we actually follow. The risen Christ still has wounds. He does not come back polished. He comes back recognizable by the damage — and that is how Thomas believes. Heaven did not delete the story. Heaven transfigured it.

“Waste” is the wrong fear. The real fear is that the pain will be the only story. That you will become a museum of what happened to you. Christ is not looking for curators of injury. He is looking for people who will let Him tell the next chapter without erasing the last one.

In this ministry we practice a stubborn kind of hope. Not the kind that says it was fine. The kind that says: this was not fine, and God is still here, and those two facts can occupy the same chest.

If you are in the middle of it, you do not have to find the lesson yet. You have to keep breathing, keep telling the truth, and keep one small act of trust within reach — a psalm, a walk, a meal with someone who will not fix you. The Spirit is patient with unfinished people. He should be. He lives in clay.`;

const m4 = `There is a particular loneliness that only prayer people know: you used to talk to God like a friend, and now the ceiling is just a ceiling.

We will not scold you for that. The psalms are full of it. “How long?” is canon. “Why have you forgotten me?” is worship. If your church never taught you the angry psalms, they taught you a thinner Bible than the one God actually inspired.

Prayer is not a vending machine and it is not a performance review. When it dries up, the invitation is not to pretend harder. The invitation is to tell the truth in God’s direction even when you do not feel Him answering. That is still prayer. Grunts count. Tears count. The Lord’s Prayer said through clenched teeth counts.

Sometimes the silence is not absence. Sometimes it is God refusing to compete with the false voices that got there first — the ones that said you had to be impressive to be loved. He will wait those out. He is not fragile.

If you cannot pray, borrow one. Psalm 13. Psalm 88, the one that does not resolve. The Jesus Prayer. A single sentence: “Lord, I believe; help my unbelief.” Say it while you wash dishes. Say it until it is less of a speech and more of a pulse.

We practice this together because isolation makes silence feel like a verdict. In a room of damaged people, silence is just weather. It passes. God is not the weather.`;

const m5 = `Shame is not the same thing as conviction. Conviction is a light in a room. Shame is a locked door and a story about how you are the room.

The enemy of your soul is a poor theologian and an excellent narrator. He will take a real failure — or a real wound you did not choose — and write a whole identity around it. You stop being a person who sinned, or a person who was sinned against. You become the sin. You become the wound. You start answering to a name God never gave you.

Christ does not negotiate with that name. He calls you out of tombs. He feeds people who betrayed Him. He puts a robe on a son who spent the inheritance. The gospel is not “try to feel better about yourself.” The gospel is “you are not your worst day, and you are not your most viral wound, because you have been claimed.”

If you need a practice: when the old sentence starts — I am ruined, I am dirty, I am the problem — answer with a louder, shorter one. “I am baptized.” “I am His.” “This is not the last word.” You do not have to feel it for it to be true. Feelings are late to every resurrection.

Bring shame into the light with one safe person. Shame dies of exposure the way mold dies of sun. That is why we tell the truth here without making a spectacle of anyone. You are not a cautionary tale. You are a brother, a sister, still in the making.`;

const m6 = `Coming back to faith after damage is not the same as coming back to the building. Do not let anyone confuse the two.

You can love Christ and still need different doors, different hours, different people. You can take communion with trembling hands. You can sit in the back. You can leave before the greeting time. None of that makes you a second-class Christian. It makes you a wise one.

What we ask is simpler and harder than attendance: do not come back as a performer. Do not put the old mask on because it makes other people comfortable. If you are angry, be angry without contempt. If you are skeptical, be skeptical without cynicism. If you are hungry, eat.

The church that is worth returning to will not require you to be impressive. She will require you to be present. She will preach Christ crucified, not a personality. She will handle power like it can hurt people, because it can. She will make room for your limp.

If you cannot find that room yet, start with a table. Two or three. Scripture. Silence. A meal. The Spirit has never been limited to a soundboard. Jesus built a kingdom on beaches and borrowed upper rooms. He can handle Yulee. He can handle you.

You do not have to pretend you were never damaged. You only have to stop believing that damage gets the last word. It does not. He does. And He is not done.`;

export const damaged: SiteContent = withPublicBase({
  id: "damaged",
  name: "Damaged Christian Ministry",
  shortName: "Damaged",
  legalName: "Damaged Christian Ministry",
  tagline: "Damaged. Not destroyed.",
  lede: "A media ministry and table for people who still want Jesus — just not the performance.",
  domain: "damagedchristian.ministry",
  location: "Yulee & Nassau County, Florida",
  addressLines: ["Yulee, Florida", "Nassau County & the First Coast"],
  email: "hello@damagedchristian.ministry",
  youtube: "https://www.youtube.com/@DamagedChristian",
  nav: [
    { label: "Home", to: "/", icon: "home" },
    { label: "Watch", to: "/watch", icon: "watch" },
    { label: "Podcast", to: "/podcast", icon: "listen" },
    { label: "Books", to: "/books", icon: "books" },
    { label: "About", to: "/about", icon: "about" },
    { label: "Gather", to: "/gather", icon: "visit" },
    { label: "Give", to: "/give", icon: "give" },
  ],
  mobileNav: [
    { label: "Home", to: "/", icon: "home" },
    { label: "Watch", to: "/watch", icon: "watch" },
    { label: "Listen", to: "/podcast", icon: "listen" },
    { label: "Books", to: "/books", icon: "books" },
    { label: "More", to: "/about", icon: "about" },
  ],
  moreNav: [
    { label: "About the ministry", to: "/about", icon: "about" },
    { label: "Gather with us", to: "/gather", icon: "visit" },
    { label: "Pray", to: "/pray", icon: "pray" },
    { label: "Give", to: "/give", icon: "give" },
    { label: "Contact", to: "/contact", icon: "contact" },
  ],
  heroImage: "/images/damaged-hero.jpg",
  heroKicker: "Yulee, Florida · Watch · Listen · Read",
  heroTitle: "You can be damaged and still belong to Christ.",
  heroBody:
    "Teachings, a podcast, and books for people carrying church hurt, trauma, grief, and a faith that refuses to die. No hype. No polish. Just the gospel in jars of clay.",
  services: [
    {
      day: "Monthly",
      time: "Evening table",
      title: "The Damaged Table",
      note: "Small gathering in Nassau County — scripture, silence, and a meal. Request a seat.",
    },
    {
      day: "Weekly",
      time: "New drop",
      title: "YouTube message",
      note: "A teaching premieres on the channel. Read and listen here anytime.",
    },
    {
      day: "Weekly",
      time: "Audio",
      title: "The Damaged Table podcast",
      note: "Honest conversations about faith after the wound.",
    },
  ],
  people: [
    {
      name: "The Table",
      role: "A small staff of pastors, counselors, and recovering church people",
      bio: "Damaged Christian Ministry is a teaching and hospitality work rooted on Florida’s First Coast. We write, record, and gather for people who love Jesus and are done pretending they are fine. We are not a megachurch and we are not a brand. We are a table.",
    },
  ],
  messages: [
    {
      slug: "damaged-not-destroyed",
      title: "Damaged, Not Destroyed",
      series: "Not Destroyed",
      scripture: "2 Corinthians 4:7–9",
      date: "2026-08-30",
      duration: "18 min",
      image: "/images/damaged-hero.jpg",
      summary: "Clay jars, real cracks, and a treasure that does not leak out when the performance ends.",
      body: m1,
    },
    {
      slug: "church-hurt-real-church",
      title: "Church Hurt and the Real Church",
      series: "Not Destroyed",
      scripture: "John 20:19–22",
      date: "2026-08-16",
      duration: "16 min",
      image: "/images/damaged-circle.jpg",
      summary: "You can name the harm without giving up on the people Jesus still calls His body.",
      body: m2,
    },
    {
      slug: "god-does-not-waste-pain",
      title: "The God Who Does Not Waste Pain",
      series: "Not Destroyed",
      scripture: "John 20:24–29",
      date: "2026-08-02",
      duration: "15 min",
      image: "/images/damaged-water.jpg",
      summary: "Resurrection did not sand the wounds off Christ. It transfigured them.",
      body: m3,
    },
    {
      slug: "prayer-like-a-wall",
      title: "When Prayer Feels Like a Wall",
      series: "Not Destroyed",
      scripture: "Psalm 13",
      date: "2026-07-19",
      duration: "14 min",
      image: "/images/damaged-journal.jpg",
      summary: "The angry psalms are still worship. Silence is weather. God is not.",
      body: m4,
    },
    {
      slug: "shame-is-a-liar",
      title: "Shame Is a Liar",
      series: "Not Destroyed",
      scripture: "Romans 8:1, 15–16",
      date: "2026-07-05",
      duration: "15 min",
      image: "/images/book-scar-tissue.jpg",
      summary: "Conviction is a light. Shame is a locked door. Christ calls you by a different name.",
      body: m5,
    },
    {
      slug: "coming-back",
      title: "Coming Back Without Pretending",
      series: "Not Destroyed",
      scripture: "Luke 24:28–35",
      date: "2026-06-21",
      duration: "17 min",
      image: "/images/damaged-circle.jpg",
      summary: "Return to Christ at the pace of honesty. The mask is not required.",
      body: m6,
    },
  ],
  episodes: [
    {
      slug: "why-we-started",
      number: 1,
      title: "Why We Started The Damaged Table",
      date: "2026-06-03",
      duration: "42 min",
      topics: ["origin", "church hurt", "honesty"],
      summary: "A ministry for people who still want Jesus and are finished performing.",
      body: `We did not start this because the internet needed another Christian show. We started it because the after-service conversations — the real ones, in parking lots — were more gospel than the platform.

This episode is our working confession. We talk about the difference between conviction and control, why “just have more faith” is not a pastoral strategy, and how a table in Nassau County became a YouTube channel, a podcast, and a stack of pages.

If you are allergic to branding and still hungry for Christ, you are the listener we had in mind. Pull up a chair. We will not waste the first ten minutes pretending we are fine.`,
    },
    {
      slug: "inventory-your-life",
      number: 2,
      title: "Inventory Your Life",
      date: "2026-06-17",
      duration: "38 min",
      topics: ["discipleship", "recovery", "truth"],
      summary: "You cannot heal what you will not name. A searching, gentle moral inventory for disciples.",
      body: `Before there is a plan, there is a list. Not a self-obsession list. A truth list. What happened. What you did. What was done to you. What you keep carrying like it is a sacrament.

We walk through a simple inventory shaped by the psalms and by recovery wisdom — without turning the gospel into a twelve-step franchise. The point is not to become a better project. The point is to stop lying to the God who already knows.

Bring a notebook. Leave the performance voice at the door. The Spirit is not shocked by your inventory. He is the one who asked for it.`,
    },
    {
      slug: "identity-after-the-wound",
      number: 3,
      title: "Identity After the Wound",
      date: "2026-07-01",
      duration: "44 min",
      topics: ["identity", "trauma", "baptism"],
      summary: "You are not the worst thing that happened in the building.",
      body: `Trauma tries to become a name. So does failure. So does a church’s rumor mill. This conversation is about baptism as a better naming — not as magic water, but as God’s public decision about you.

We talk about how to walk back into rooms without wearing the old story like a name tag, and how community either reinforces the wound or tells a truer word. If you have been reduced to a cautionary tale, this one is for you.`,
    },
    {
      slug: "forgiveness-is-not-amnesia",
      number: 4,
      title: "Forgiveness Is Not Amnesia",
      date: "2026-07-15",
      duration: "47 min",
      topics: ["forgiveness", "justice", "boundaries"],
      summary: "You can forgive and still tell the truth. You can love an enemy and not hand them the keys.",
      body: `Cheap forgiveness is how abusers get re-platformed. Unforgiveness is how wounds become a second religion. We want neither.

This episode is slow on purpose. We distinguish reconciliation from forgiveness, consequences from bitterness, and the cross from a demand that victims hurry up and make everyone comfortable. Jesus forgives from wounds that still show. That should tell us something.`,
    },
    {
      slug: "finding-a-safe-church",
      number: 5,
      title: "Finding a Safe Church",
      date: "2026-07-29",
      duration: "41 min",
      topics: ["church", "discernment", "community"],
      summary: "Red flags, green flags, and permission to go slow.",
      body: `Not every congregation is a refuge. Not every refuge looks impressive on a Sunday. We talk about power, money, how leaders handle criticism, whether women and children are actually safe, and why a small honest church will outlive a charismatic machine.

If you are church-shopping with a limp, this is a field guide — not a guaranteed map. Bring a friend. Ask better questions. Leave if you need to. Christ is not trapped in one narthex.`,
    },
    {
      slug: "body-and-spirit",
      number: 6,
      title: "The Body Keeps the Score. The Spirit Keeps the Promise.",
      date: "2026-08-12",
      duration: "45 min",
      topics: ["embodiment", "counseling", "hope"],
      summary: "Prayer is not a substitute for care. Care is not a substitute for Christ.",
      body: `Some of you were told that therapy meant you did not trust God. Some of you were told that prayer was naive. Both of those voices are thin.

We talk about bodies that flinch in worship, about sleep and panic and the long work of rewiring, and about the Spirit who does not compete with good counselors. Jesus heals with spit and mud and meals and time. We would like to be at least as earthy as our Lord.`,
    },
  ],
  books: [
    {
      slug: "scar-tissue",
      title: "Scar Tissue",
      subtitle: "Faith after the wound",
      author: "Damaged Christian Ministry",
      year: "2025",
      pages: "184",
      cover: "/images/book-scar-tissue.jpg",
      blurb:
        "A short, unsparing book for people who still believe and can no longer pretend the cut was a gift. Scripture, practices, and permission to tell the truth.",
      chapters: [
        {
          title: "The cut is not a metaphor",
          body: `The first lie damaged Christians are asked to swallow is that what happened was spiritually useful before it was even named. We start somewhere ruder. The cut is a cut. Blood is blood. If your church taught you to spiritualize harm on contact, they taught you to abandon yourself in the name of maturity.

This chapter is a walk through the psalms of lament and the wounds of Christ. We will not rush the resurrection paragraph. Scar tissue is stronger than the skin it replaces, and it is also a record. God does not ask you to delete the record. He asks you to stop living as if the record is the whole book.

Keep a pen in this chapter. Write the true names of things in the margin. If you cannot write them yet, underline the sentences that feel like they were already living in your chest. That is enough for today.`,
        },
        {
          title: "Two true sentences",
          body: `You will be pressured to pick a team: either the church is good or you are justified in leaving Jesus. That is a false exam.

Sentence one: what happened was wrong. Sentence two: Jesus is still Lord, and He still has a people. Holding both is the beginning of a grown faith. This chapter gives you language for the both, and a set of questions to take to a trusted friend — not to a comment section.

If you only have energy for one practice, try this: once a day, say the two sentences out loud. Not as a slogan. As a refusal to let either cynicism or denial drive.`,
        },
      ],
    },
    {
      slug: "still-his",
      title: "Still His",
      subtitle: "A field guide for damaged disciples",
      author: "Damaged Christian Ministry",
      year: "2026",
      pages: "212",
      cover: "/images/book-still-his.jpg",
      blurb:
        "Identity, belonging, and a slow way back to the table — without the mask the last room required.",
      chapters: [
        {
          title: "The name that survived the fire",
          body: `Before you were a wounded person you were a named person. Baptism is not a mood. It is a naming that outlives the fire. This chapter is about answering to that name when every other voice is louder — family systems, pulpits, your own 2 a.m. narrator.

We look at Hagar, at Peter, at the Gerasene man who ends up clothed and in his right mind. Recovery is not a personality transplant. It is the old name coming back to the surface.`,
        },
        {
          title: "How to sit in a pew without lying",
          body: `A practical chapter. Where to sit. When to leave. What to do with the greeting time. How to take communion when your hands shake. How to listen to a sermon without handing the preacher the keys to your nervous system.

None of this is cynical. It is hospitality toward your own body while you practice belonging again. If a church cannot tolerate a limp, it cannot tolerate the gospel, which is full of limps.`,
        },
      ],
    },
    {
      slug: "unbroken-thread",
      title: "The Unbroken Thread",
      subtitle: "Forty days of scripture for people who almost quit",
      author: "Damaged Christian Ministry",
      year: "2026",
      pages: "160",
      cover: "/images/book-unbroken.jpg",
      blurb:
        "A daily reading companion. Short entries. No homework. Just a thread through the dark you can hold with one hand.",
      chapters: [
        {
          title: "Day 1 — Clay",
          body: `Read 2 Corinthians 4:7–12 slowly, twice. Do not mine it for a caption. Notice that Paul is not ashamed of the cracks. The cracks are how the light is described.

Write one sentence: “Today I am a jar, not a brand.” Carry it. If you forget, that is fine. Clay is not dramatic. Clay is just true.`,
        },
        {
          title: "Day 2 — How long",
          body: `Psalm 13 is four movements: complaint, protest, petition, a thin layer of trust at the end. You are allowed to stop at protest. God can handle an unfinished psalm. Many of us were taught to skip to verse five because it photographs better.

Pray the first four verses until they bore you. Boredom in prayer is sometimes the nervous system standing down. That is not a failure. That is a beginning.`,
        },
      ],
    },
  ],
  events: [
    {
      id: "table-sep",
      title: "The Damaged Table — Nassau County",
      date: "2026-09-18",
      time: "6:30 PM",
      place: "Yulee, FL (seat requested)",
      summary: "Scripture, silence, a simple meal. Twelve chairs. No program except the gospel.",
    },
    {
      id: "premiere-sep",
      title: "YouTube premiere: Coming Back Without Pretending",
      date: "2026-09-13",
      time: "7:00 PM",
      place: "YouTube · Damaged Christian",
      summary: "Live chat after the teaching. Bring the question you would not ask in a lobby.",
    },
    {
      id: "table-oct",
      title: "The Damaged Table — October",
      date: "2026-10-16",
      time: "6:30 PM",
      place: "Yulee, FL (seat requested)",
      summary: "A second sitting for those who could not make September. Same table. Same book.",
    },
  ],
  ministries: [
    {
      name: "Watch",
      summary: "The Not Destroyed teaching series — messages you can read, hear, and share.",
    },
    {
      name: "The Damaged Table podcast",
      summary: "Weekly conversations on church hurt, identity, forgiveness, and a slow faith.",
    },
    {
      name: "Books",
      summary: "Short pastoral books meant to be underlined, not displayed.",
    },
    {
      name: "The Table",
      summary: "A monthly in-person gathering in Nassau County. Small on purpose.",
      when: "Monthly · evening",
    },
  ],
  beliefs: [
    {
      title: "Jesus is Lord",
      body: "We confess the triune God — Father, Son, and Holy Spirit — and Jesus Christ crucified and risen as the center of all we say.",
    },
    {
      title: "Scripture tells the truth",
      body: "The Bible is the living Word. We read it whole, including the psalms that shout, the wounds that remain, and the mercy that will not quit.",
    },
    {
      title: "The church is a people, not a performance",
      body: "We love the church enough to tell the truth about her. We will not abandon Christ’s body because she has been a poor witness, and we will not call harm “growth.”",
    },
    {
      title: "Damage is not disqualification",
      body: "The treasure is in clay jars. Healing may include prayer, counseling, medicine, time, and a table. None of that competes with the Spirit.",
    },
  ],
  mission:
    "To tell the truth about damage, preach Christ without the mask, and keep a table for people who thought they were finished.",
  vision:
    "A First Coast community — and a wider media table — where wounded disciples become honest ones, and honest ones become free.",
  about: [
    "Damaged Christian Ministry began the way most honest work begins: in a conversation after the hallway lights were off. People were still in love with Jesus and no longer willing to fake the rest. We started writing the things we wished a pastor would say without a smile stapled on.",
    "We now teach on YouTube, record The Damaged Table podcast, and publish short books you can finish. Once a month we set a physical table in Nassau County, Florida — Yulee and the island towns nearby. Twelve chairs. An open Bible. Food. No fog machine.",
    "We are not a substitute for a local church. We are a companion to people finding their way back to one, or surviving until they can. If you need the gospel without the gloss, you are already one of us.",
  ],
  visitorNotes: [
    "You do not have to sign anything.",
    "You can sit with your arms folded. Christ is not bothered.",
    "If a gathering is full, we will put you on the next list instead of packing the room until it feels like the last place that hurt you.",
    "Online, start with a message, then an episode, then a chapter. Slow is faithful.",
  ],
  givingNote:
    "Gifts keep the teachings free, the books inexpensive, and the table set. We would rather have fewer dollars than a story we cannot tell in the light.",
  sister: {
    label: "Prince of Peace Lutheran Church",
    to: "https://www.princeofpeacelutheran.com",
    hint: "Our sister parish on Amelia Island — Sunday worship, Holy Communion, and a place to belong in person.",
  },
});
