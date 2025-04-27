import { createRepository } from "./repository";
import { createAuthService } from "./service";

function craeteAuthFeature() {
  const repository = createRepository();
  const service = createAuthService(repository);
  return {
    service,
  };
}

export const authFeature = craeteAuthFeature();
