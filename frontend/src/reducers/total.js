import { CAL_TOTAL } from "../constants/actionTypes";



export default (total = null, action) => {
    switch (action.type) {
        case CAL_TOTAL:
            return action.payload;   
        default:
            return total;
    }
}