import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function ShelfItem({item}) {
console.log('item.description is:', item.description);
const dispatch = useDispatch();
const user = useSelector(store=>store.user);

const [newDescription, setNewDescription] = useState(item.description);
const [newImageUrl, setNewUrl] = useState(item.image_url);

const [editOn, setEditOn] = useState(false)

// const editOn = false;


function handleEdit () {
    setEditOn(true);
}

const handleDelete = (item) => {
    dispatch({type:'DELETE_SHELF_ITEM',
                payload:{ item} })
}

function submitEdit () {
    dispatch({ type: 'EDIT_ITEM', payload: {description: newDescription, image_url: newImageUrl, item_id: item.id, user_id: item.user_id}})
    setEditOn(false)
}

    return (
            <div>
            <h4>{item.description} </h4>
            {editOn && (
                    <form onSubmit={(e) => submitEdit(e)}>
                    <label>Description</label>
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      required
                    />
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      required 
                      />
                    <input type="submit" value="Submit"></input>
                  </form>
            )}
            <button onClick={() => handleEdit()}>EDIT</button>
            
            <img src={item.image_url} />
            {/* if the user was the user that added an item, they can delete it, otherwise the button won't show */}
            {user.id===item.user_id &&(
                <button onClick={()=> handleDelete(item)}>DELETE</button>
            )}
            
   </div> 
   )
}


export default ShelfItem