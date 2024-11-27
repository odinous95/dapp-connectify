import { userFeature } from "@/features/user-managment";
import { platformFeature } from "@/features/platform-mangament";

export const seedUsers = async (count: number) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    console.log(`Seeding user ${i + 1}`);
    users.push({
      name: `user ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
      password: `user${i + 1}@gmfasAAdf!!!il.com`,
    });
  }
  for (const user of users) {
    await userFeature.service.signup(user);
    console.log("users seeded successfully");
  }
};

export const seedPlatforms = async () => {
  try {
    const users = await userFeature.service.getAllUsers();

    const samplePlatforms = [
      { platformName: "GitHub", platformUrl: "https://github.com" },
      { platformName: "LinkedIn", platformUrl: "https://linkedin.com" },
      { platformName: "Twitter", platformUrl: "https://twitter.com" },
    ];

    for (const user of users) {
      console.log(`Seeding platforms for user: ${user.name} (ID: ${user.id})`);
      for (const platform of samplePlatforms) {
        const platformPayload = {
          userId: user.id,
          platformName: platform.platformName,
          platformUrl: platform.platformUrl,
        };

        const response = await platformFeature.service.addPlatform(
          platformPayload
        );

        if (response.success) {
          console.log(
            `Platform '${platform.platformName}' added for user ${user.name}`
          );
        } else {
          console.error(
            `Failed to add platform '${platform.platformName}' for user ${user.name}:`,
            response.errors
          );
        }
      }
    }

    console.log("Platform seeding completed!");
  } catch (error) {
    console.error("Error during platform seeding:", error);
  }
};

const seedAllData = async () => {
  //   await seedUsers(10);
  await seedPlatforms();
  console.log("Hurrra! Seeding all data is donne!");
};

seedAllData();
