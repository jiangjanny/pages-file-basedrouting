import { useRouter } from "next/router"
function ClientsIDPage() {
    const router = useRouter()
    console.log('router', router.query);

    function loadProjectHandler() {
        // router.push("/clients/324/435345")
        // or
        router.push({
            pathname: '/clients/[id]/[clientProjectid]',
            query: {
                id: 'max',
                clientProjectid: 'projecta'
            }
        })
    }
    return (
        <div>
            <h1>The Clients ID Page</h1>
            {/* <Link replace href="/clients/435345">Clients ID</Link> */}
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div >
    )
}

export default ClientsIDPage