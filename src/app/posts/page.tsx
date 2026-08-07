import Link from "next/link";
import { getPosts } from "@/lib/jsonplaceholder";

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold">Posts</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md"
          >
            <p className="text-sm font-medium text-zinc-500">Post #{post.id}</p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              {post.title}
            </h2>
            <p className="mt-3 text-zinc-700">
              {post.body.length > 180
                ? `${post.body.slice(0, 180)}...`
                : post.body}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PostsPage;