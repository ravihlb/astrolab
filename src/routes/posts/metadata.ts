import fs from "node:fs/promises"
import type { PostMetadata } from '@/src/shared/types/PostMetadata';

export default async function writePostMetadata() {
    const modules = import.meta.glob('./**/metadata.ts', { import: 'default' })
    const promises: Promise<PostMetadata>[] = [];

    for (const mod in modules) {
        promises.push(modules[mod]() as Promise<PostMetadata>)
    }

    const metadataSet: PostMetadata[] = await Promise.all(promises)
    const filepath = "./src/metadata.json"
    console.log("Writing ", filepath)
    console.dir(metadataSet)
    await fs.writeFile(filepath, JSON.stringify(metadataSet, null, 4))

    return metadataSet
}

