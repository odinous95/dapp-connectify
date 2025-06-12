import { createAuthService } from "./service";

function craeteAuthFeature() {
  const service = createAuthService();
  return {
    service,
  };
}

export const authFeature = craeteAuthFeature();
