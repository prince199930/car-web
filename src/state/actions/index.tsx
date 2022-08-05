import {ActionType} from '../action-types'
interface GetDataAction {
    type: ActionType.GETDATA
    payload: any
}
interface AddDataAction {
    type: ActionType.ADDADATA
    payload: any
}
interface EditDataAction {
    type: ActionType.EDITDATA
    payload: any
    id:number
}
// interface ErrorAction {
//     type: ActionType.EDITDATA
//     props:any
// }

interface DeleteDataAction {
    type: ActionType.DELETEDATA
    id: any
    payload: any
}


export type Action = GetDataAction | AddDataAction | EditDataAction 