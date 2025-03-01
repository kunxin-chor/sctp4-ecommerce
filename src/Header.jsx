// 1. Component is a function which first
// alphabet is uppercase

// 2. return JSX

// 3. The name of the component
// will be the same as the function name

function Header() {
    return (
        <header className="bg-primary text-white text-center py-5">
            <div className="container">
                <h1 className="display-4">Welcome to E-Shop</h1>
                <p className="lead">Discover amazing products at unbeatable prices!</p>
                <a href="#" className="btn btn-light btn-lg">Shop Now</a>
            </div>
        </header>
    );
}

export default Header;