export function createRepository() {
  async function signupUserInDb(email, password, name) {
        await db.
  }
  return {
    signupUserInDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
