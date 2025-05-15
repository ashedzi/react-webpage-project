
function Button(props) {
    return (
        <button className={props.isLoggedIn ? 'primary' : 'secondary'}>
            {props.isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}

export default Button;