import type { PostMetadata } from "@/src/shared/types/PostMetadata";

export async function load() {
    const modules = import.meta.glob('./posts/*/metadata.ts');
    const posts: PostMetadata[] = await Promise.all<PostMetadata>(
        Object.entries(modules).map(async ([path, resolver]) => {
            const slug = path.split('/')[2];
            const metadata = await resolver();
            // @ts-ignore
            return { slug, ...metadata.default };
        })
    );

    posts.sort((a, b) => a.date < b.date ? 1 : -1);

    return {
        posts
    };
}
