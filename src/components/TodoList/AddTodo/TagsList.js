import as from "./AddTodo.module.css";

function TagsList({items, setHideHiddenTagsDiv, setTag}) {

    return (
            <ul>
                {
                    items.map(item => (
                    <li className={as.tagBlock} key={item.id} onClick={() => {setHideHiddenTagsDiv(true); setTag(item)}} style={{color: item.color}}>
                        {
                        item.title
                        }
                        <hr/>
                    </li>
                    ))
                }
            </ul>
    )
}

export default TagsList;