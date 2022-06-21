import React from "react";
import { useState, useEffect, useRef } from "react";

function App() {
  let [user, setUser] = useState("");
  let [name, setName] = useState("");
  //   let [data, setData] = useState(null);
  // console.log(data, "data");
  let data = useRef(null);
  console.log(data ,name);
  function handleChange(e) {
    setUser((user = e.target.value));
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((userdata) => (data.current = userdata));
  },[name]);

  function handleSubmit(e) {
    e.preventDefault();
    let username = e.target[0].value;
    setName((name = username));
    setUser((user = ""));
  }
  return (
    <>
      <h2>Github user data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Github user name"
          onChange={handleChange}
          name="user"
          value={user}
        />{" "}
        <br></br>
        <button type="submit">Search</button>
      </form>
      {/* {data.current === null? (
        <h2>Loading ...</h2>
      ) : (
        <div>
          <img src={data.current.avatar_url} alt="img" />
          <p>{data.current.name}</p>
        </div>
      )} */}
      {data.current === null ? (
        <h3>loading</h3>
      ) : (
        <div>
          <img src={data.current.avatar_url} alt="img" />
          <p>{data.current.name}</p>
        </div>
      )}
    </>
  );
}

export default App;
