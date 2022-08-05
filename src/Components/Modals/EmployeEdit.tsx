import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IState as Props } from '../Employe/Employe';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../state/reducers/EmployeReducer'
import { editData } from '../../state/action-creators';

interface IProps {
    setEmployee: React.Dispatch<React.SetStateAction<Props["employee"]>>
    employee: Props["employee"]
    editModal: boolean
    setEditModal: React.Dispatch<React.SetStateAction<boolean>>
    currentKey: any
}




const EmployeEdit: React.FC<IProps> = ({ setEmployee, employee, editModal, setEditModal, currentKey }) => {


    const dispatch = useDispatch()
    console.log(currentKey)
    const state = useSelector((state: RootState) => state[currentKey])
    console.log(state)

    const handleClose = () => setEditModal(false);
    const [employeeEdit, setEmployeeEdit] = useState<Props["employee"]>({
        name: '',
        email: '',
        gender: '',
        status: ""
    })




    return (
        <div>
            <Modal
                open={editModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxContainer sx={{ position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Employee here
                    </Typography>
                    <div>
                        {employeeEdit && <form>
                            <label htmlFor='name'></label>
                            <TextField id="name" label="Name" variant="outlined" fullWidth name="name" type="text" value={employeeEdit.name}  />
                            <label htmlFor='email'></label>
                            <TextField id="email" label="Email" variant="outlined" fullWidth name="email" type="email" value={employeeEdit.email}  />
                            <label htmlFor='gender'></label>
                            <TextField id="gender" label="Gender" variant="outlined" fullWidth name="gender" type="text" value={employeeEdit.gender}  />
                            <label htmlFor='status'></label>
                            <TextField id="status" label="Status" variant="outlined" fullWidth name="status" type="text" value={employeeEdit.status}  />
                            <Button color='primary' variant="contained" fullWidth >Edit</Button>
                        </form>}
                    </div>
                </BoxContainer>
            </Modal>
        </div>
    )
}

export default EmployeEdit

const BoxContainer = styled(Box)`
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
`
