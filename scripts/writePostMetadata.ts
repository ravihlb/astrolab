import fs from "node:fs/promises"
import type { PostMetadata } from "../src/shared/types/PostMetadata";
import type { PluginOption } from "vite";

async function writePostMetadata(): Promise<PluginOption> {
    const promises: Promise<Record<string, PostMetadata>>[] = [];
    for await (const filepath of fs.glob("./src/routes/posts/**/metadata.ts")) {
        const promise = import("../" + filepath.replace(".ts", ""))
        promises.push(promise as Promise<Record<string, PostMetadata>>)
    }

    const metadataSet: PostMetadata[] | Record<string, PostMetadata>[] = await Promise.all(promises) as Record<string, PostMetadata>[]
    if (metadataSet.length === 0 || metadataSet.some((v) => v === undefined)) {
        console.error("Error: Empty or invalid metadataSet. Not writing to file.")
        console.error("Exiting...")
        return
    }

    metadataSet.map((v, i, arr) => {
        arr[i] = v.default
    })
    metadataSet.sort((a, b) => (a.date > b.date ? -1 : 1));

    const filepath = "./src/post-metadata.json"
    console.log("Writing to", filepath)
    console.dir(metadataSet)
    await fs.writeFile(filepath, JSON.stringify(metadataSet, null, 4))
}

writePostMetadata()
