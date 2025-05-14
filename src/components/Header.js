import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <div className="container flex align-center space-between">
                <div>
                    <h1>{props.title}</h1>
                </div>
                <Nav list={props.navLinks}></Nav>
            </div>
        </header>
    );
}

export default Header;