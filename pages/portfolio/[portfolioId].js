
import { useRouter } from "next/router"
function PortfolioIDPage() {
    const router = useRouter();
    console.log('router', router);
    console.log('router.query', router.query.pportfolioId);
    return (
        <div>
            <h1>The Portolio ID Page {router.query.portfolioId}</h1>
        </div>
    )
}

export default PortfolioIDPage