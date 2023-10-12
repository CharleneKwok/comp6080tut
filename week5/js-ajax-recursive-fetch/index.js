const ul = document.createElement("ul");
document.body.appendChild(ul);

// const li = document.createElement("li");
// ul.appendChild(li);
// li.innerText = "hayden";

// fetch("http://localhost:3000/users");
// fetch("http://localhost:3000/user/0");

const createLi = (user) => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = user.name;
};

const loop = () => {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((ids) => {
      ids.forEach((id) => {
        fetch(`http://localhost:3000/user/${id}`)
          .then((res) => res.json())
          .then((user) => createLi(user));
      });
    });
};

// loop();

const promiseAll = () => {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((ids) => {
      Promise.all(
        ids.map((id) =>
          fetch(`http://localhost:3000/user/${id}`).then((res) => res.json())
        )
      ).then((users) => {
        users.forEach((user) => createLi(user));
      });
    });
};

// promiseAll();

const newPromise = () => {
  const getUsers = new Promise((resolve, reject) => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((ids) => {
        Promise.all(
          [...ids, 4].map((id) =>
            fetch(`http://localhost:3000/user/${id}`).then((res) => res.json())
          )
        )
          .then(resolve)
          .catch(() => reject("Error"));
      });
  });

  getUsers
    .then((users) => {
      users.forEach((user) => createLi(user));
    })
    .catch((err) => console.log(err));
};

newPromise();
