

function ShelfItem({item}) {
console.log('dfkjlsd ajfwelfjewfawd==>',item.description);
    return (
            <div>
            <h4>{item.description} </h4>
            
            <img src={item.image_url} />
   </div> )
}


export default ShelfItem