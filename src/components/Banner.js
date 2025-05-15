import Button from './Button';

function Banner(props) {
    return (
        <div className="container">
            <section className='hero-section flex flex-column center'>
                <h2>{props.heroText}</h2>
                <p>{props.heroSubtext}</p>
                <div className='button-container flex gap-16'>
                <Button isLoggedIn={true}/>
                <Button isLoggedIn={false}/>
                </div>
            </section>
        </div>
    );
}

export default Banner;