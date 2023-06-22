import React, {useEffect, useReact} from 'react';
import Form from '../Form/Form'
import ShelfItem from '../ShelfItem/ShelfItem'
import {useDispatch, useSelector } from 'react-redux'

function ShelfPage() {
const dispatch = useDispatch();
let shelf = useSelector(store => store.shelf);

useEffect( () => {
  dispatch({ type: 'FETCH_SHELF'});
}, [])

  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      <Form />
      <p>All of the available items can be seen here.</p>  
       </div>
   <div>
      {shelf && shelf.map((item, i) => (
         <ShelfItem key={i} item={item} />
      ))}
   </div>
 </>
  );
}

export default ShelfPage;
