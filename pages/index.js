import Link from 'next/link'
function HomePage() {
    return <div>
        <h1>Welcome to Next.js!</h1>
        <ul>
            <li>
                <Link href="/about">
                    <a>Go to page/about.js</a>
                </Link>
            </li>
            <li>
                <Link href="/works/abc?foo=bar">
                    <a>Also goes to pages/works/[pid].js</a>
                </Link>
            </li>
        </ul>

    </div>
}

export default HomePage