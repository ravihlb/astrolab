<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import PointlessLi from "@components/shared/PointlessLi.svelte";

    export let posts: PostMetadata[] = [];
</script>

<div>
    {#each posts as metadata}
        <PointlessLi {metadata} />
    {/each}
</div>
