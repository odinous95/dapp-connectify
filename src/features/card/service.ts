import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function getUserById(userId: string) {
    return await repository.getUserByIdFromDb(userId);
  }

  return {
    getUserById,
  };
}
