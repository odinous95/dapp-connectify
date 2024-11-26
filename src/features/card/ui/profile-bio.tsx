type Props = {
  profile: {
    name: string;
    bio: string;
  };
};

export async function ProfileBio({ profile }: Props) {
  return (
    <>
      <div className="mb-3">
        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
          {profile.name}
        </h4>
      </div>
      <div>{profile.bio}</div>
    </>
  );
}
