type ProfileBioProps = {
  biography: string | null | undefined;
};
export async function ProfileBio({ biography }: ProfileBioProps) {
  return <div>{biography}</div>;
}
