import { useContext } from 'react'
import { AppContext } from '../App';

import { Table, TableHeader, TableRow, TableComponent, Row } from '../styles/Table.style'
import { Checkbox } from '../styles/Input.style'

import { MdArrowDropDown } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import { inputInfo } from '../inputInfo';

function JobTracker() {

    const { jobs, setSelectedJob, selectedJob, filters } = useContext(AppContext);

    const checkItem = (job) => {        
        if (!selectedJob.some((el) => el === job)) {
            setSelectedJob([...selectedJob, job]);
        }
        else {
            const updatedSelected = selectedJob.filter((el) => el !== job);
            setSelectedJob(updatedSelected);
        }
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
            }).map((job) => (
                <Row className={selectedJob.some((el) => el === job) ? 'activeRow' : ''}>
                    <TableRow><Checkbox type='checkbox' onChange={() => checkItem(job)} checked={selectedJob.some((el) => el === job)} /></TableRow>
                    <TableRow><div className='info'><h4>{ job.position }</h4> <BiEdit className='icon edit-icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.company }</h4> <BiEdit className='icon edit-icon' /></div></TableRow>
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