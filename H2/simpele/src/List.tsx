import ListItem from "./ListItem";

interface Iitems {
    items:string[]
}

const List = (list: Iitems) => {
    return (
        <>
        <ul>
        {list.items.map((item:string,index:number)=>
        <ListItem key={index} text={item}></ListItem>
    )}
    </ul>
        </>
    );
}

export default List;