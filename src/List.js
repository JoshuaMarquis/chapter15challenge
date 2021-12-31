import ListItem from "./ListItem"
const List = ({content}) => {
    return (
        <ul>
            {content.map((item) => (
                <ListItem key = {item.id} item={item}></ListItem>
            ))}
        </ul>
    )
}

export default List
