type ProfileBioProps = {
  name: string;
  biography: string | null | undefined;
};

export async function ProfileBio({ biography, name }: ProfileBioProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white">{name}</h2>
      {biography ? (
        <p className="text-lg text-white">{biography}</p>
      ) : (
        <p className="text-sm text-gray-400">No biography available yet</p>
      )}
    </div>
  );
}
