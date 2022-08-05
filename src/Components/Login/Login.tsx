import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm, SubmitHandler } from 'react-hook-form'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface ILoginForm {
    managerId: string,
    mangerpsswrd: string
}
    

function Login() {

    const [form, setForm] = useState<ILoginForm>({managerId:"", mangerpsswrd:""})
    const history = useHistory()

    const ManagerLogin = () => {
        if (form.managerId == "test-admin" && form.mangerpsswrd == "test-admin") {
            localStorage.setItem("user", JSON.stringify("admin"))
            history.push("/employe")
        }
    }

    const onChangeName = (e:any)=>{
        setForm({...form, managerId: e.target.value})
    }
    const onChangeAge = (e:any)=>{
        setForm({...form, mangerpsswrd: e.target.value})
    }

    return (

        <div className="manager-login">
            <Grid>
                <Paper elevation={10} style={{ padding: '20px', height: "50vh", width: "320px", margin: "20px auto" }}>
                    <Avatar style={{ margin: "auto", backgroundColor: "green" }}>
                        <LockOutlinedIcon />
                    </Avatar><h2>Sign In</h2>

                    <label htmlFor="username"></label>
                    <TextField id="username" label="Username" variant="standard" name="usernmae" placeholder='Enter UserName' fullWidth required type="text" style={{ margin: "0px 8px" }} value={form.managerId} onChange={onChangeName}/>
                    <label htmlFor='password'></label>
                    <TextField id="password" label="Password" name='password' variant="standard" placeholder='Enter Password' type='password' fullWidth required style={{ margin: "8px 8px" }} value={form.mangerpsswrd} onChange={onChangeAge}/>
                    <Button onClick={ManagerLogin} color='primary' variant="contained" fullWidth style={{ margin: "8px 8px" }}>Submit</Button>

                </Paper>

            </Grid>

        </div>

    )
}

export default Login


