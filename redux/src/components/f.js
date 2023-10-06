
export const asyncThunk = () => async (dispatch, getState) => {
  const response = await fetch("http://localhost:8080/todos");
  const todos = await response.json();
  console.log(todos);
};
