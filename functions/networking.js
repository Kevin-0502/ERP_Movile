const getUsers = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((user) => {
        return user.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };