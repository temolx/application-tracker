import { useContext, useState } from 'react'
import { AppContext } from '../App';

import { Table, TableHeader, TableRow, TableComponent, Row, InputContainer } from '../styles/Table.style'
import { Checkbox } from '../styles/Input.style'
import { SaveBtn } from '../styles/Main.style';

import { MdArrowDropDown } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import { inputInfo } from '../inputInfo';

function JobTracker() {

    const { jobs, setSelectedJob, selectedJob, filters, search } = useContext(AppContext);

    const[editMode, setEditMode] = useState({...Object.fromEntries(inputInfo.map((el) => [el.type, false])), index: null});

    const checkItem = (job) => {        
        if (!selectedJob.some((el) => el === job)) {
            setSelectedJob([...selectedJob, job]);
        }
        else {
            const updatedSelected = selectedJob.filter((el) => el !== job);
            setSelectedJob(updatedSelected);
        }
    }

    const handleEdit = (myKey, index) => {
        setEditMode({
            ...editMode,
            [myKey]: true,
            index: index
        })

        console.log(editMode);
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
                    return el.position.toLowerCase().includes(search.toLowerCase());
                } return el;
            }).map((job, index) => (
                <Row className={selectedJob.some((el) => el === job) ? 'activeRow' : ''}>
                    <TableRow><Checkbox type='checkbox' onChange={() => checkItem(job)} checked={selectedJob.some((el) => el === job)} /></TableRow>

                    <TableRow>{editMode.position && editMode.index === index ? <InputContainer><input type='text' defaultValue={job.position} /> <SaveBtn>Save</SaveBtn></InputContainer> : <InputContainer><h4>{ job.position }</h4> <BiEdit className='icon edit-icon' onClick={() => handleEdit('position', index)} /></InputContainer>}</TableRow>

                    <TableRow>{editMode.company && editMode.index === index ? <InputContainer><input type='text' defaultValue={job.company} /> <SaveBtn>Save</SaveBtn></InputContainer> : <InputContainer><h4>{ job.company }</h4> <BiEdit className='icon edit-icon' onClick={() => handleEdit('company', index)} /></InputContainer>}</TableRow>

                    
                    {/* <TableRow><div className='info'><h4>{ job.company }</h4> <BiEdit className='icon edit-icon' /></div></TableRow> */}
                    <TableRow><div className='info'><h4>{ job.location }</h4> <BiEdit className='icon edit-icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.status }</h4> <MdArrowDropDown className='icon status-dropdown edit-icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.date }</h4> <BiEdit className='icon edit-icon' /></div></TableRow>
                </Row>
            )) }

        </Table>
    </TableComponent>
  )
}

export default JobTracker