/**
 * Each Pexels photo is assigned to exactly one place on the page.
 */
import photoChat from "../assets/photos/scene-chat.jpg"; // 8957072 — Experience: Chat
import photoStories from "../assets/photos/scene-stories.jpg"; // 9320841 — Experience: Stories
import photoProfiles from "../assets/photos/scene-profiles.jpg"; // 5677481 — Experience: Profiles
import photoHero from "../assets/photos/person-jules.jpg"; // 8602629 — Hero phone only

export const photos = {
  heroPhone: photoHero,
  experienceChat: photoChat,
  experienceStories: photoStories,
  experienceProfiles: photoProfiles,
} as const;
