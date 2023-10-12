const API_URL = "https://jsonplaceholder.typicode.com";

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
    .then((res) => {
      // console.log(res);
      if (res.status === 404) {
        return Promise.reject(`Could not find a user with id ${id}`);
      } else if (!res.ok) {
        return Promise.reject(
          new Error(` Something went wrong when getting user with id ${id}`)
        );
      }
      return res.json();
    })
    .then((user) => {
      if (user.username !== username) {
        throw new Error(
          `The user with id ${id} does not have username '${username}'`
        );
      }
      return user;
    });
}

const params = new URLSearchParams(location.search);
const id = params.get("id");
const username = params.get("username");
console.log(id);

const body = document.body;
body.classList.add("loading");

const result = document.getElementById("result");

getUserByIdAndUsername(id, username)
  .then((user) => {
    result.innerText = JSON.stringify(user);
    result.style.display = "block";
  })
  .catch((err) => alert(err))
  .finally(() => {
    body.classList.replace("loading", "done");
  });
