<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    import PostTitles from "./PostTitles.svelte";
    import PostInfo from "./PostInfo.svelte";

    export let metadata: PostMetadata;
</script>

<section id="post-header" lang="en">
    <PostTitles {metadata} />
    <PostInfo {metadata} />
    <br />
</section>
