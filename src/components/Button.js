
function Button(props) {
    return (
        <button className={props.isLoggedIn ? 'primary' : 'secondary'}>
            {props.isLoggedIn ? 'Login' : 'View movies'}
        </button>
    );
}

export default Button;