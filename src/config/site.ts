export const site = {
  name: "Chat4Meet",
  tagline: "Real connections. Safe and direct.",
  heroTitle: "Meet people where the conversation actually lives.",
  heroSubtitle:
    "Chat, Stories, and Profiles in one calm app — built for real relationships, not noisy feeds.",
  description:
    "Chat4Meet — Chat, Stories, and Profiles in one app. Real connections. Safe and direct.",
  locale: "en",
  storeLinks: {
    appStore: "#",
    playStore: "#",
    storesAvailable: false,
  },
} as const;

export const navLinks = [
  { label: "Tour", href: "#journey" },
  { label: "Why Chat4Meet", href: "#trust" },
  { label: "Get the app", href: "#download" },
] as const;

export const journeySteps = [
  {
    id: "chat",
    label: "Chat",
    title: "Talk without the noise.",
    description:
      "Messages, photos, and voice notes land in real time — with the people you choose, not an endless public stream.",
    points: [
      "Live delivery with typing and read states",
      "Media stays inside the conversation",
      "A calm thread layout you can actually follow",
    ],
  },
  {
    id: "stories",
    label: "Stories",
    title: "Share the moment while it’s still warm.",
    description:
      "Snap, edit, and publish instantly. Your circle sees it now — then you can jump straight into chat.",
    points: [
      "Quick in-app media editor",
      "Immediate publishing to your network",
      "Replies that open a real conversation",
    ],
  },
  {
    id: "profiles",
    label: "Profiles",
    title: "Show up as yourself.",
    description:
      "One clear profile for who you are right now — posts, presence, and connections, kept in sync.",
    points: [
      "Posts, likes, and follows stay consistent",
      "Presence you control",
      "Designed around Chat4Meet’s teal identity",
    ],
  },
] as const;

export const trustPoints = [
  {
    title: "Direct by design",
    body: "Intentional connections first. No viral ranking loops pushing strangers into every scroll.",
  },
  {
    title: "Your media, your circle",
    body: "Chats and published media respect access rules — content stays with the audience you chose.",
  },
  {
    title: "Native feel",
    body: "Crafted in Flutter for fluid motion on iOS and Android — the same teal world you see here.",
  },
] as const;
