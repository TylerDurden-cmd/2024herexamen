interface ListItemInter{
    text:string;
}

const ListItem = (item: ListItemInter) => {
    return (
    <><li>{item.text}</li></>
    );
}

export default ListItem;
