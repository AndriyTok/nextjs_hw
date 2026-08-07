import Link from "next/link";
import { notFound } from "next/navigation";
import { getCommentById, parseRouteId } from "@/lib/jsonplaceholder";

type CommentPageProps = {
  params: Promise<{ id: string }>;
};

const CommentPage = async ({ params }: CommentPageProps) => {
  const { id } = await params;
  const commentId = parseRouteId(id);

  if (commentId === null) {
    notFound();
  }

  const comment = await getCommentById(commentId);

  if (!comment) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link
        href="/comments"
        className="mb-6 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
      >
        Back to comments
      </Link>

      <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-zinc-500">
          Comment #{comment.id} • Post #{comment.postId}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-zinc-900">{comment.name}</h1>
        <p className="mt-2 text-sm text-zinc-500">{comment.email}</p>
        <p className="mt-6 whitespace-pre-line text-lg leading-8 text-zinc-700">
          {comment.body}
        </p>
      </article>
    </main>
  );
};

export default CommentPage;