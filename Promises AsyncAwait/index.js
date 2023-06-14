// https://www.javascripttutorial.net/es6/javascript-promises/

/* function getUsers() {
    let users = [];

    // delay 1 second (1000ms)
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
  
    return users;
  }
  
  function findUser(username) {
    const users = getUsers(); 
    const user = users.find((value) => value.username === username);
    return user;
  }
  
  console.log(findUser('john')); */  // This output will come as undefined



  // We can make use of callback for resolving the issue.
  function getUsers(callback) {
    let users = [];

    // delay 1 second (1000ms)
    setTimeout(() => {
      callback(users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  
    return users;
  }
  
  function findUser(username, callback) {
    getUsers((users)=>{
    const user = users.find((value) => value.username === username);
    callback(user)
   })
  }
//   findUser('john', console.log);

  /* 
  In this example, the getUsers() function accepts a callback function as an argument and invokes it with the users array inside the setTimeout() function. Also, the findUser() function accepts a callback function that processes the matched user.

The callback approach works very well. However, it makes the code more difficult to follow. Also, it adds complexity to the functions with callback arguments.

If the number of functions grows, you may end up with the callback hell problem. To resolve this, JavaScript comes up with the concept of promises.
  */



//  Fulfilled Examples ------------------------

function getUsers1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 5000);
    });
  }
  
  function onFulfilled(users) {
    console.log(users);
  }
  
  const promise = getUsers1();
  promise.then(onFulfilled);


//   Catch promise error

  const success = false;

function getUsers2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

const promise1 = getUsers2();

promise1.catch((error) => {
  console.log(error);
});


// Finally

// Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected.

const render = () => {
    console.log("Hello")
};
  
  getUsers1()
    .then((users) => {
      console.log(users);
      render();
    })
    .catch((error) => {
      console.log(error);
      render();
    });

   /* As you can see, the render() function call is duplicated in both then() and catch() methods.

To remove this duplicate and execute the render() whether the promise is fulfilled or rejected, you use the finally() method, like this: */


const render1 = () => {
    console.log("Finally Came")
};
  
  getUsers1()
    .then((users) => {
      console.log(users);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      render1();
    });
  