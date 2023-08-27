export const saveToStorage = ({ board, turn }) => {
  window.localStorage.setItem("turn", turn);
  window.localStorage.setItem("board", JSON.stringify(board));
};

export const resetStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
