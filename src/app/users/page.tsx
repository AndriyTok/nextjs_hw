import Link from "next/link";
import { getUsers } from "@/lib/jsonplaceholder";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold">Users</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">{user.name}</h2>
            <p className="mt-2 text-sm text-zinc-500">@{user.username}</p>
            <p className="mt-3 text-zinc-700">{user.email}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default UsersPage;