export default function (state = [], action) {
    console.log("I am in users reducer");
    if (action) {
        switch (action.type) {
            case 'GET_USERS': return action.payload.data;
            default: return state;
        }
    }
}
