
import { useRouter } from "next/router"
function ClientsIDPage() {
    const router = useRouter();
    console.log('router', router);
    console.log('router.query', router.query);
    return (
        <div>
            <h1>The Clients ID Page-{router.query.id}</h1>
        </div>
    )
}

export default ClientsIDPage