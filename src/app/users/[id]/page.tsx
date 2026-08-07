import Link from "next/link";
import { notFound } from "next/navigation";
import { getUserById, parseRouteId } from "@/lib/jsonplaceholder";

type UserPageProps = {
  params: Promise<{ id: string }>;
};

const UserPage = async ({ params }: UserPageProps) => {
  const { id } = await params;
  const userId = parseRouteId(id);

  if (userId === null) {
    notFound();
  }

  const user = await getUserById(userId);

  if (!user) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/users"
        className="mb-6 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
      >
        Back to users
      </Link>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-4xl font-bold text-zinc-900">{user.name}</h1>
        <p className="mt-2 text-lg text-zinc-500">@{user.username}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-zinc-900">Contacts</h2>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span> {user.website}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-zinc-900">Address</h2>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
            <p>
              <span className="font-semibold">Geo:</span> {user.address.geo.lat},{" "}
              {user.address.geo.lng}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h2 className="text-xl font-semibold text-zinc-900">Company</h2>
          <p>
            <span className="font-semibold">Name:</span> {user.company.name}
          </p>
          <p>
            <span className="font-semibold">Catch phrase:</span>{" "}
            {user.company.catchPhrase}
          </p>
          <p>
            <span className="font-semibold">Business:</span> {user.company.bs}
          </p>
        </div>
      </section>
    </main>
  );
};

export default UserPage;