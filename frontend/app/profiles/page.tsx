type Profile = {
  id: number;
  name: string;
  age: number;
};

async function getProfiles(): Promise<Profile[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profiles/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch profiles: ${res.status}`);
  }

  return res.json();
}

export default async function ProfilesPage() {
  const profiles = await getProfiles();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold text-center">Profiles</h1>

        <div className="mt-10 space-y-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="rounded-xl border p-4 shadow-sm">
              <div className="text-lg font-semibold">{profile.name}</div>
              <div className="text-gray-600">Age: {profile.age}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
