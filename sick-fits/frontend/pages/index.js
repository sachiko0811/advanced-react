import Link from 'next/link';

const Home = props => {
    return(
        <>
        <p>Home!</p>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>
        </>
    )
}

export default Home;