import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [username, setUsername] = useState([]);
  const [userData, setUserData] = useState([]);
  let getInputTimeout = null;
  console.log(userData);

  // I wanna fetch api when username is changed
  // useEffect lets you perform side effect in function components
  useEffect(() => {
    // dependency empty, just run on first time render
    // another [] because of strictmode -> helps to check if there is any potential problems in your app

    /* async/await
    let newUserData = [];
    username.forEach(async (name) => {
      console.log(name);
      const resp = await fetch(`https://api.github.com/users/${name}`);
      const data = await resp.json();
      const info = [
        {
          name: data.name,
          avatar_url: data.avatar_url,
          url: data.url,
        },
      ];
      newUserData.push(info);
    });
    setUserData(newUserData);
     */

    Promise.all(
      username.map((name) =>
        fetch(`https://api.github.com/users/${name}`).then((resp) =>
          resp.json()
        )
      )
    ).then((data) => setUserData(data));
  }, [username]);

  const handleInputChange = (value) => {
    // clear last timeout task
    // otherwise if user types very fast, this function will be called multi times and these will create lots of timeout tasks in short time
    // it is unnecessary
    // helps us to set the final input
    clearTimeout(getInputTimeout);
    getInputTimeout = setTimeout(() => {
      // 1. split value into array
      // 2. remove all the empty spaces
      // 3. remove unmeaningful username e.g hi, hi,
      setUsername(
        value
          .split(",")
          .map((v) => v.trim())
          // '' is falsy value in js
          // if v is not empty string and then return it
          .filter((v) => v)
      );
    }, 500);
  };

  return (
    <div className="App">
      <label htmlFor="usernames">Enter Github usernames</label>
      <input
        type="text"
        id="usernames"
        // DO NOT DO THIS, this function will be called when component renders
        // onChange={handleInputChange()}
        // onChange={handleInputChange}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <div className="container">
        {userData.map((data, i) => (
          // give key to component like a unique id
          // helps react to identify each Card
          // sometimes assigning key can avoid werid errors or content messed up
          <Card data={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
