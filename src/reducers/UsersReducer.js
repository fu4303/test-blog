import { statement } from "@babel/template";

export default (statement, action) => {
  switch (action.type) {
      case 'FETCH_USER':
        return [...state, action.payload];
    default:
      return state;
  }
};