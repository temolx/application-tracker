import { useContext, useState } from 'react'
import { AppContext } from '../App';

import { Table, TableHeader, TableRow, TableComponent, Row, InputContainer } from '../styles/Table.style'
import { Checkbox } from '../styles/Input.style'
import { SaveBtn } from '../styles/Main.style';

import { MdArrowDropDown } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import { inputInfo } from '../inputInfo';

function JobTracker() {

    const { jobs, setSelectedJob, selectedJob, filters, search, setJobs } = useContext(AppContext);

    const[editMode, setEditMode] = useState({...Object.fromEntries(inputInfo.map((el) => [el.type, false])), arrIndex: null, keyIndex: null});
    const[input, setInput] = useState('');
    const[incorrectInput, setIncorrectInput] = useState(false);

    const checkItem = (job) => {        
        if (!selectedJob.some((el) => el === job)) {
            setSelectedJob([...selectedJob, job]);
        }
        else {
            const updatedSelected = selectedJob.filter((el) => el !== job);
            setSelectedJob(updatedSelected);
        }
    }

    const showEditing = (myKey, arrIndex, keyIndex) => {
        setEditMode({
            ...editMode,
            [myKey]: true,
            arrIndex,
            keyIndex,
        })

        setIncorrectInput(false);
    }

    const handleEdit = (arrIndex, key) => {
        if (input !== '') {
            const updatedJobs = jobs.map((job, index) => {
                if (index === arrIndex) {
                    return {
                        ...job,
                        [key]: input
                    }
                }
                return job;
            })

            setJobs(updatedJobs);
            setEditMode({
                ...editMode,
                [key]: false,
                arrIndex: null,
                keyIndex: null
            })
        }
        else setIncorrectInput(true);

        setInput('');
    }

  return (
    <TableComponent>
        <Table>
            <tr>
                <TableHeader></TableHeader>
                { inputInfo.map((header) => (
                    <TableHeader>{ header.title } { header.icon }</TableHeader>
                ))}
            </tr>

            { jobs && jobs.filter((el) => {
                if (filters.position !== '') { // this could be more dynamic-ish
                    return filters.position === el.position;
                } else return el;
            }).filter((el) => {
                if (filters.company !== '') {
                    return filters.company === el.company;
                } else return el;
            }).filter((el) => {
                if (filters.location !== '') {
                    return filters.location === el.location;
                } else return el;
            }).filter((el) => {
                if (filters.status !== '') {
                    return filters.status === el.status;
                } else return el;
            }).filter((el) => {
                if (filters.date !== '') {
                    return filters.date === el.date;
                } else return el;
            }).filter((el) => {
                if (search !== '') {
                    return el.position.toLowerCase().includes(search.toLowerCase()) || el.company.toLowerCase().includes(search.toLowerCase());
                } return el;
            }).map((job, index) => (
                <Row className={selectedJob.some((el) => el === job) ? 'activeRow' : ''}>
                    <TableRow><Checkbox type='checkbox' onChange={() => checkItem(job)} checked={selectedJob.some((el) => el === job)} /></TableRow>

                    { Object.keys(job).map((key, i) => (
                        <TableRow>{editMode.position && editMode.arrIndex === index && editMode.keyIndex === i ? 
                            <InputContainer>
                                <input type='text' defaultValue={job[key]} onChange={(e) => setInput(e.target.value)} />
                                <SaveBtn onClick={() => handleEdit(index, key)} className={incorrectInput ? 'incorrect-btn' : ''}>Save</SaveBtn>
                            </InputContainer> : 
                            
                            <InputContainer>
                                <h4>{ job[key] }</h4>
                                { key === 'status' ? <MdArrowDropDown className='icon status-dropdown edit-icon' /> : <BiEdit className='icon edit-icon' onClick={() => showEditing('position', index, i)} /> }
                            </InputContainer>}
                        </TableRow>
                    )) }
                </Row>
            )) }

        </Table>
    </TableComponent>
  )
}

export default JobTracker