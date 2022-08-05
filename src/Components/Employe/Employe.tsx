import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index1'
import { RootState } from '../../state/reducers/EmployeReducer'
import Button from '@mui/material/Button';
import EmployeAdd from '../Modals/EmployeAdd'
import EmployeEdit from '../Modals/EmployeEdit'
import styled from 'styled-components';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Pagination from '@mui/material/Pagination';
import useCheckSize from '../../Hooks/useCheckSize';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export interface IState {
    employee: {
        name: string
        email: string
        gender: string
        status: string
    }
}

function Employe() {

    const size = useCheckSize()
    const dispatch = useDispatch()
    const { getData, addData, editData } = bindActionCreators(actionCreators, dispatch)
    const [page, setPage] = useState<number>(1)
    useEffect(() => {
        dispatch({ type: 'callSaga', payload: page })
        // onSort()
    }, [page])

    useEffect(() => {
        console.log(size)
    }, [size])

    const state = useSelector((state: RootState) => state)
    // console.log(state)

    const [employee, setEmployee] = useState<IState['employee']>({
        name: '',
        email: '',
        gender: '',
        status: ''
    })
    const [addModal, setAddModal] = useState<boolean>(false)
    const [editModal, setEditModal] = useState<boolean>(false)
    const [currentKey, setCurrentKey] = useState<number>(1)
    const [sorting, setSorting] = useState<string>("")
    const [filteredEmployees, setFilteredEmployees] = useState<any>(state)
    const newData = () => {
        setAddModal(true)
    }

    const editEmploye = (key: any) => {
        setCurrentKey(key)
        setEditModal(true)
    }


    function goToFirstPage() {
        if (page == 0) { return };
        setPage(1)
        // setPage(p => p - 1)
        dispatch({ type: 'callSaga', payload: page, })
    }

    function goToLastPage() {
        setPage(74)
        dispatch({ type: 'callSaga', payload: page })
    }

    // const sortingData = () => {
    //     const a = filteredEmployees.sort((a: any, b: any) => {
    //         return a.name.localeCompare(b.name)
    //     })

    //     setSorting(a)
    // }
    const [sortButton, setSortButton] = useState<any>("")
    const sortingDataByAsc = () => {

        filteredEmployees.sort((a: any, b: any) => {
            return a.name.localeCompare(b.name)
        })


    }
    const sortingDataByDesc = () => {

        filteredEmployees.sort((a: any, b: any) => {
            return b.name.localeCompare(a.name)
        })


    }


    const onSort = () => {
        if (sorting == "") {
            sortingDataByAsc()
            setSorting("asc")
            setSortButton(<ArrowDropUpOutlinedIcon />)

        }

        else if (sorting == "asc") {
            sortingDataByDesc()
            setSorting("desc")
            setSortButton(<ArrowDropDownOutlinedIcon />)

        }
        else if (sorting == "desc") { setSorting(""); setSortButton(""); setFilteredEmployees(state) }

    }




    const [nameSearch, setNameSearch] = useState<string>("")

    useEffect(() => {

        setFilteredEmployees([...state])

    }, [state])
    const onSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameSearch(e.target.value)
        setFilteredEmployees(state.filter((item: any) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const sortingNext = () => {

        if (sorting == "asc") {
            sortingDataByAsc()
            // setSorting("desc")
            setSortButton(<ArrowDropUpOutlinedIcon />)

        }

        else if (sorting == "desc") {
            sortingDataByDesc()
            // setSorting("")
            setSortButton(<ArrowDropDownOutlinedIcon />)
            setFilteredEmployees(state)

        }
        else if (sorting == "") { setSortButton("") }

    }

    return (
        <>

            <EmployeAdd
                employee={employee}
                setEmployee={setEmployee}
                addModal={addModal}
                setAddModal={setAddModal}
            />

            <EmployeEdit
                employee={employee}
                setEmployee={setEmployee}
                editModal={editModal}
                setEditModal={setEditModal}
                currentKey={currentKey} />
            <TopContainer>
                <SearchContainer type="text" placeholder='Search here...' value={nameSearch} onChange={onSearchNameChange}></SearchContainer>
                <ButtonContainer onClick={newData} color='primary' variant="contained">Add</ButtonContainer>
            </TopContainer>
            {size >= 1024 ?
                <WrapperTableContainer>
                    <Grid container spacing={3}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ display: "flex" }}><NameContainer onClick={onSort}>Name</NameContainer><Button>{sortButton}</Button></TableCell>
                                        <TableCell align="left"><strong>Email</strong></TableCell>
                                        <TableCell align="left"><strong>gender</strong></TableCell>
                                        <TableCell align="left"><strong>Status</strong></TableCell>
                                        <TableCell align="left"><strong>Buttons</strong></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {filteredEmployees.length ? filteredEmployees.map((item: any, i: any) => (
                                        <>

                                            <TableRow
                                                key={item.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell align="left">{item.email}</TableCell>
                                                <TableCell align="left">{item.gender}</TableCell>
                                                <TableCell align="left">{item.status}</TableCell>
                                                <TableCell align="left">
                                                    <EditOutlinedIcon onClick={() => editEmploye(i)}>Edit</EditOutlinedIcon>
                                                </TableCell>
                                            </TableRow>

                                        </>

                                    )) : <div>loading</div>}
                                    <PageContainer>
                                        <FirstPageContainer onClick={goToFirstPage} /><Pagination count={74} color="primary" defaultPage={page} onChange={(event, value) => { setPage(value); sortingNext() }} /><LastPageContainer onClick={goToLastPage} />
                                    </PageContainer>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </WrapperTableContainer> :
                <>
                <NameContainer onClick={onSort}>Sort By Name</NameContainer><Button>{sortButton}</Button>
                
                <Container>
                    

                    <Grid container spacing={3}>
                    
                        {filteredEmployees.length ? filteredEmployees.map((item: any, i: any) =>
                            <>
                                <Grid item xs={12} md={6} lg={4}>
                                    <Card elevation={1}>
                                        <CardContent>
                                            <Typography variant="body2" color="textSeconday">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSeconday">
                                                {item.email}
                                            </Typography>
                                            <Typography variant="body2" color="textSeconday">
                                                {item.gender}
                                            </Typography>
                                            <Typography variant="body2" color="textSeconday">
                                                {item.status}
                                            </Typography>
                                        </CardContent>
                                        <EditOutlinedIcon onClick={() => editEmploye(i)} />

                                    </Card>
                                </Grid></>) : <div>"loading"</div>}
                        <PageContainer>
                            <FirstPageContainer onClick={goToFirstPage} /><Pagination count={74} color="primary" defaultPage={page} onChange={(event, value) => { setPage(value); sortingNext() }} /><LastPageContainer onClick={goToLastPage} />
                        </PageContainer>
                       

                    </Grid>
                </Container></>}
        </>
    )
}

export default Employe


const ButtonContainer = styled(Button)`
    margin: 8px 8px;
`

const TopContainer = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
`

const SearchContainer = styled.input`
    width: 17vw;
    padding: 15px;
    border-radius: 5px;
    @media only screen and (max-width: 600px) {
        width: 29vw;
        height: 6px;
 }
    
`

const WrapperTableContainer = styled(Container)`
    margin-top: 50px;
`

const NameContainer = styled.strong`
    @media only screen and (max-width: 600px) {
        margin-top:5px;
 }
`

const PageContainer = styled(Grid)`
    display: flex;
    padding: 10px;
`

const FirstPageContainer = styled(KeyboardDoubleArrowLeftIcon)`
    margin-top:3px`

const LastPageContainer = styled(KeyboardDoubleArrowRightIcon)`
    margin-top:3px`


