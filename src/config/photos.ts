/**
 * Each Pexels photo is assigned to exactly one place on the page.
 * Hero phone uses a chat UI mock (no stock photo).
 */
import photoChat from "../assets/photos/scene-chat.jpg"; // 8957072 — Experience: Chat
import photoStories from "../assets/photos/scene-stories.jpg"; // 9320841 — Experience: Stories
import photoProfiles from "../assets/photos/scene-profiles.jpg"; // 5677481 — Experience: Profiles

export const photos = {
  experienceChat: photoChat,
  experienceStories: photoStories,
  experienceProfiles: photoProfiles,
} as const;
