import { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  let dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [image_url, setUrl] = useState("");


  function submitTheData(event) {
    event.preventDefault();
    console.log("YES");
    let itemData = {
      description,
      image_url,
    };
    dispatch({
      type: "ADD_ITEM",
      payload: itemData,
    });
  }

  return (
    <form onSubmit={(e) => submitTheData(e)}>
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>Image URL</label>
      <input type="text" onChange={(e) => setUrl(e.target.value)} required />
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default Form;
