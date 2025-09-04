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
            <Banner>Posts teste</Banner>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-5 text-white">
                {data.posts.map(post=>(
                    <Link href={`/posts/${post.id}`} key={post.id} className="space-y-2 p-3 shadow-md bg-[#0F0F12] rounded-2xl">
                        <h1 className="text-[22px]">{post.title}</h1>
                        <p className="text-[15px] font-medium text-gray-400">{post.body}</p>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}