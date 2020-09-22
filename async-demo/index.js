console.log("before");
getUser(1, (user) => {
  console.log("User:", user.gitHubUsername);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("repos:", repos);
  });
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUsername: "mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("getting repos");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
