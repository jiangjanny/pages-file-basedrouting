import Link from "next/link"

function HomePage() {
    return (
        <div>
            <h1>The Home Page.</h1>
            <ul>
                <li>
                    {/* replace 不能回到上一個畫面 只能回到再上一個 */}
                    <Link replace href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link replace href="/clients">Clients</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage