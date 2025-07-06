export async function load() {
    const modules = import.meta.glob('./posts/*/metadata.ts');
    const posts = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
            const slug = path.split('/')[2];
            const metadata = await resolver();
            // @ts-ignore
            return { slug, ...metadata.default };
        })
    );

    return {
        posts
    };
}
