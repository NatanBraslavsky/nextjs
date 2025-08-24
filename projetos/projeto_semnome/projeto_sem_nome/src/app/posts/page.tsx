import Link from "next/link";
import Banner from "../ui/components/banner"

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

export default async function Page(){
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json();
    return(
        <div>
            <Banner>Posts</Banner>
            <div className="flex flex-col gap-3 m-2.5">
                {data.posts.map(post=>(
                    <Link href={`/posts/${post.id}`} key={post.id} className="bg-gray-200 space-y-2 p-3">
                        <h1 className="text-2xl">{post.title}</h1>
                        <p>{post.body}</p>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}