function Nav(props) {
    return (
        <div className='nav-list flex gap-24'>
            {props.list.map(navLink => (
                <div key={navLink.index}>
                    <nav>
                        <ul>
                            <li><a href="navLink.url">{navLink.name}</a></li>
                        </ul>
                    </nav>
                </div>
            ))}
        </div>

    );
}

export default Nav;