import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.itemReducer);
  const user = useSelector(store=>store.userReducer);

  const deleteBtn = (item) =>{
    if(user.id === item.user_id){
      dispatch({type:'DELETE_SHELF_ITEM', payload: item});
    }
    
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
