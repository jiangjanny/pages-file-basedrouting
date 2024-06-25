import { useRouter } from "next/router"
function BlogPostsPage() {
    const router = useRouter()
    console.log('router', router);
    console.log('router.query', router.query.slug);
    return <div>
        <h1>The Blog  Posts--{router.query.slug}</h1>
    </div>
}

export default BlogPostsPage