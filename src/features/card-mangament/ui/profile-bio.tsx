type ProfileBioProps = {
  name: string;
  biography: string | null | undefined;
};

export function ProfileBio({ biography, name }: ProfileBioProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-black dark:text-white">
        {name}
      </h2>
      {biography ? (
        <p className="text-lg text-gray-800 dark:text-white">{biography}</p>
      ) : (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          | Web Developer
        </p>
      )}

      <h3 className="text-sm font-semibold text-black dark:text-white">
        TECH STACK
      </h3>
      {biography ? (
        <p className="text-lg text-gray-800 dark:text-white">{biography}</p>
      ) : (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          NEXTJS | React | Postgres | AWS | Drizzle
        </p>
      )}
    </div>
  );
}
