import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <h2>Logo</h2>
            <ul>
                <li>
                    <Link href='/'>
                        <a href="">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a href="">Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        <a href="">Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href='/signin'>
                        <a href="">Sign in</a>
                    </Link>
                </li>
                <li>
                    <Link href='/signout'>
                        <a href="">Sign out</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;