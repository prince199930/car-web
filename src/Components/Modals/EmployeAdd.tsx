import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IState as Props } from '../Employe/Employe';
import { useDispatch } from 'react-redux';
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { addData } from '../../state/action-creators';

interface IProps {
    setEmployee: React.Dispatch<React.SetStateAction<Props["employee"]>>
    employee: Props["employee"]
    addModal: boolean
    setAddModal: React.Dispatch<React.SetStateAction<boolean>>
}




const EmployeAdd: React.FC<IProps> = ({ setEmployee, employee, addModal, setAddModal }) => {

    // const [input, setInput] = useState({
    //     name: '',
    //     email: '',
    //     gender: '',
    //     status: ''
    // })

    const dispatch = useDispatch()

    const handleClose = () => setAddModal(false);
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
        // console.log(employee)
    }
    let id = 20;
    const saveData = () => {
        id++
        dispatch(addData(employee, id))
        // dispatch({ type: 'ADD_DATA', payload: employee })  
        // setEmployee(input)
        setAddModal(false)
    }

    return (
        <div>
            <Modal
                open={addModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxContainer sx={{ position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add an new Employee here
                    </Typography>
                    <FormConatiner>
                        <form>
                            <label htmlFor='name'></label>
                            <TextField id="name" label="Name" variant="outlined" fullWidth name="name" type="text" value={employee.name} onChange={onChange} />
                            <label htmlFor='email'></label>
                            <TextField id="email" label="Email" variant="outlined" fullWidth name="email" type="email" value={employee.email} onChange={onChange} />
                            <label htmlFor='gender'></label>
                            <TextField id="gender" label="Gender" variant="outlined" fullWidth name="gender" type="text" value={employee.gender} onChange={onChange} />
                            <label htmlFor='status'></label>
                            <TextField id="status" label="Status" variant="outlined" fullWidth name="status" type="text" value={employee.status} onChange={onChange} />
                            <Button color='primary' variant="contained"  fullWidth onClick={saveData}>Save</Button>
                        </form>
                    </FormConatiner>
                </BoxContainer>
            </Modal>
        </div>
    )
}

export default EmployeAdd

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

const FormConatiner = styled.div`
   border:8px solid green,
`;
