interface Ifooter {
    copy:string;
    year:number
}

const footer = (prop:Ifooter) => {
    return (
        <>
        <p>&copy; {prop.copy} ({prop.year}) </p>
        </>
    );
}

export default footer; 