let users = [];

export const userList = async (payload) => {
  const { page, limit } = payload;
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   if (!resp.ok) {
  //     throw new Error(`Error: ${resp.status}`);
  //   }

  const data = await resp.json();

  // Paginado en la respuesta
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = data.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    total: data.length,
    page,
    limit,
  };
};

export const patchUser = async (payload) => {
  const url = `https://jsonplaceholder.typicode.com/users/${payload.id}`;
  const body = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const resp = await fetch(url, body);
  const data = await resp.json();
  return data;
};

export const postUser = async (payload) => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const resp = await fetch(url, body);
  const data = await resp.json();
  return data;
};

export const login = async (payload) => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();
  const res = data.find((row) => row.email === payload.email);
  console.log("entro");
  if (payload.password != "1234") {
    return undefined;
  } else {
    return res;
  }
};
