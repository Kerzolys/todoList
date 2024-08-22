const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
};

export const apiTodo = {
  getTodos: (config) => {
    return fetch(config.baseUrl, {
      headers: config.headers,
    }).then(handleResponse);
  },
  getLimitedAmountOfTodos: (config, number) => {
    return fetch(`${config.baseUrl}?limit=${number}`, {
      headers: config.headers,
    }).then(handleResponse);
  },
  addNewTodo: (config, dataTodo) => {
    return fetch(`${config.baseUrl}/add`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(dataTodo),
    }).then(handleResponse);
  },
};
