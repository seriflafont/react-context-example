export const sampleReducer = (state, action) => {
    if (action.type === "TOGGLE_DARK_MODE") {
      return { ...state, darkMode: !state.darkMode }
    } else if (action.type === "SET_NAME") {
      return { ...state, name: action.value }
    }
  }