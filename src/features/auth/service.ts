import { Repository } from "./repository";

export function createAuthService(repository: Repository) {
  async function setProfileImageUrl(userId: number, imageUrl: string) {
    await repository.setProfileImageUrlInDb(userId, imageUrl);
  }
  return {
    setProfileImageUrl,
  };
}
