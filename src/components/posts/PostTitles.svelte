<script lang="ts">
    import type { PostMetadata } from "@/src/shared/types/PostMetadata";
    export let metadata: PostMetadata;
    const { title, subtitle } = metadata;
</script>

<title>{title}</title>
<section id="post-header">
    <h1>{title}</h1>
    {#if subtitle}
        <h2>{subtitle}</h2>
    {/if}
</section>
