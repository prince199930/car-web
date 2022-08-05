import { type } from "os"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export interface IEmploye {
    id:string
    name:string
    email:string
    gender:string
    status:string
}
const initialState:Array<IEmploye> = []



const reducer = (state:Array<IEmploye>= initialState, action:Action) => {
    switch (action.type) {
        case ActionType.GETDATA:
            return[...action.payload]
        case ActionType.ADDADATA:
            return [...state, action.payload]
        case ActionType.EDITDATA:
            let newState = state.filter((item,i)=>i !== action.id)
            return [...newState, action.payload]
        
        default:
            return state
    }
}

export default reducer
export type RootState = ReturnType<typeof reducer>

// case ActionType.DELETEDATA:
//             let mydata= state.filter((item)=>item.id !== action.id)
//             console.log(mydata)
//             return mydata


