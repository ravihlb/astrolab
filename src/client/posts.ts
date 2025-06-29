import { API_ROUTES } from "@constants/routes"
import type { PostMetadata } from "../shared/types/PostMetadata";

export default class PostsClient {
    static async get(): Promise<PostMetadata[]> {
        const response = await fetch(API_ROUTES.posts)
        return response.json();
    }
}
