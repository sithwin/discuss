import type { Post } from "@prisma/client";
import { db } from "@/db";

type PostAggregate = Post & {
  topic: { slug: string };
  user: { name: string };
  _count: { comments: number };
};

export function fetchPostsByTopicSlug(slug: String): Promise<PostAggregate> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
