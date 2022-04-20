const Navbar = () => {
    return (
    <nav className="nabar">
        <h1>James Blog</h1>
        <a href="/">Home</a>
        <a href="/create" style={ {
            color: "white",
            backgroundColor="#f1356d",
            borderRadius: '8px'
        } }>New Blog</a>
    </nav>

    );
}

export default Navbar;