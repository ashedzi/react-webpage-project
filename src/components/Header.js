import Nav from './Nav';

function Header(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <Nav list={props.navLinks}></Nav>
        </div>
    );
}

export default Header;