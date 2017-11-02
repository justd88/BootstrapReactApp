export default function UserReducer(state = {},action){
    switch (action.type)
    {
        case "LOGIN_USER":
        //state = {...state,users: action.payload};
        break;
    default:
        break;
    }
    return state;
};
