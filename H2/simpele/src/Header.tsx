interface HeaderFace {
    title:string;
    subtitle:string;
}

const Header = ( props: HeaderFace) => {
    return (
        <>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </>
    );
}


export default Header