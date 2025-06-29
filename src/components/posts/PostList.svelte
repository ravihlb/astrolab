<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import PointlessLi from "@components/shared/PointlessLi.svelte";
    import writePostMetadata from "@/src/routes/posts/metadata";

    let postMetadata: PostMetadata[] = [];

    async function getLocalMetadata() {
        try {
            const imported = await import("@/src/metadata.json");
            postMetadata = imported.default as unknown as PostMetadata[];
        } catch {
            postMetadata = await writePostMetadata();
        }

        postMetadata.sort((a, b) => (a.date > b.date ? -1 : 1));
    }
</script>

<div>
    {#await getLocalMetadata() then}
        {#each postMetadata as metadata}
            <PointlessLi {metadata} />
        {/each}
    {/await}
</div>
