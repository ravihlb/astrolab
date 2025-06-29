<script lang="ts">
    import PointlessLi from "@components/shared/PointlessLi.svelte";
    import PostsClient from "@/src/client/posts";
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";

    let postMetadata: PostMetadata[] = [];

    async function getPostMetadata() {
        postMetadata = await PostsClient.get();

        return postMetadata;
    }
</script>

<div>
    {#await getPostMetadata() then}
        {#each postMetadata as metadata}
            <PointlessLi {metadata} />
        {/each}
    {/await}
</div>
