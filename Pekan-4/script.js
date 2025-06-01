function Header(){
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function Main(){
    return (
        <main>
            <p>
                Test
            </p>
        </main>
    )
}

function Footer(){
    return (
        <footer>
            <h2>Footer</h2>
        </footer>
    )
}
function App(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}