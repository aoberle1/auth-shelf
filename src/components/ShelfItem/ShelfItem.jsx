import { useDispatch, useSelector } from "react-redux";


function ShelfItem({item}) {
console.log('dfkjlsd ajfwelfjewfawd==>',item.description);
const dispatch = useDispatch();
const user = useSelector(store=>store.user);

const handleDelete = (item) => {
    dispatch({type:'DELETE_SHELF_ITEM',
                payload:{ item} })
}
    return (
            <div>
            <h4>{item.description} </h4>
            
            <img src={item.image_url} />
            {/* if the user was the user that added an item, they can delete it, otherwise the button won't show */}
            {user.id===item.user_id &&(
                <button onClick={()=> handleDelete(item)}>DELETE</button>
            )}
            
   </div> 
   )
}


export default ShelfItem