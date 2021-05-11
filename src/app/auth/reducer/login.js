const initial_state = {
  fieldOne: "",
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD_ONE":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
