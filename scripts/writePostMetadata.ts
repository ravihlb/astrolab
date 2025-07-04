import fs from "node:fs/promises"
import type { PostMetadata } from "../src/shared/types/PostMetadata";

async function writePostMetadata(): Promise<void> {
    let set: PostMetadata[] = []
    for await (const filepath of fs.glob("./src/routes/posts/**/metadata.ts")) {
        const module: { default: PostMetadata } = await import("../" + filepath.replace(".ts", ""))
        const path = filepath.replace("src/routes/", "").replace("/metadata.ts", "")
        module.default['date'] = new Date(module.default['date'])
        const metadata: PostMetadata = {
            ...module.default,
            path
        }

        set.push(metadata)
    }
    set.sort((a, b) => (a.date > b.date ? -1 : 1))

    const filepath = "./src/post-metadata.json"
    console.log("Writing to", filepath)
    console.dir(set, { depth: null })
    await fs.writeFile(filepath, JSON.stringify(set, null, 4))
}

writePostMetadata()
