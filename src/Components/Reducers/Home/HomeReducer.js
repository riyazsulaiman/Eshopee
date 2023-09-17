const initialState = {
    HomePageItems:{}
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HOME_ITEMS":
        return Object.assign({}, state, {HomePageItems : action.items});
    default:
        return state;
  }
};

export default HomeReducer;