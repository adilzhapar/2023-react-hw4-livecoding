const Header = () => {
    return (
        <header className="bg-gray-900" text-white>
            <nav className="container mx-auto flex items-center justify-between py-4">
                <a href="/" className="text-xl font-bold text-white">
                    Rick&Morty App
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300">
                            About
                        </a>

                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;