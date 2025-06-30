<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import PointlessLi from "@components/shared/PointlessLi.svelte";

    let postMetadata: PostMetadata[] = [];

    async function getLocalMetadata() {
        const imported = await import("@/src/post-metadata.json");
        postMetadata = imported.default as PostMetadata[];
    }
</script>

<div>
    {#await getLocalMetadata() then}
        {#each postMetadata as metadata}
            <PointlessLi {metadata} />
        {/each}
    {/await}
</div>
