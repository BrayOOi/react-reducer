const initialState = 0;

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'click/add':
      return state + 1;
    case 'click/minus':
      return state - 1;
    default:
      return state;
  }
}