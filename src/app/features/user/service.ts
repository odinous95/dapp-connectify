import { createRepository } from "./repository";
const repository = createRepository();
export function createService() {
  return {
    signup() {
      repository.signupUserInDb();
    },
  };
}
