import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function getUserProfileById(userId: number) {
    return await repository.getUserProfileByIdFromDb(userId);
  }

  return {
    getUserProfileById,
  };
}
