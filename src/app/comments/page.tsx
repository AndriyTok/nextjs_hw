import Link from "next/link";
import { getComments } from "@/lib/jsonplaceholder";

const CommentsPage = async () => {
  const comments = await getComments();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-bold">Comments</h1>

      <div className="grid gap-4">
        {comments.map((comment) => (
          <Link
            key={comment.id}
            href={`/comments/${comment.id}`}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-md"
          >
            <p className="text-sm font-medium text-zinc-500">
              Comment #{comment.id} • Post #{comment.postId}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              {comment.name}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{comment.email}</p>
            <p className="mt-3 text-zinc-700">
              {comment.body.length > 180
                ? `${comment.body.slice(0, 180)}...`
                : comment.body}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default CommentsPage;