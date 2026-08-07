import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, parseRouteId } from "@/lib/jsonplaceholder";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;
  const postId = parseRouteId(id);

  if (postId === null) {
    notFound();
  }

  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/posts"
        className="mb-6 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
      >
        Back to posts
      </Link>

      <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-zinc-500">
          Post #{post.id} • User #{post.userId}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-zinc-900">{post.title}</h1>
        <p className="mt-6 whitespace-pre-line text-lg leading-8 text-zinc-700">
          {post.body}
        </p>
      </article>
    </main>
  );
};

export default PostPage;