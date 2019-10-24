const initialState = {
    createdPackage : {
        wayBillNumber : "",
        recipient: "",
        phone : "",
        weight: ""
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_PACKAGE":
        return {...state, createdPackage: action.payload};
        default:
            return state;
    }
};