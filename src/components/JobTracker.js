import React from 'react'

import { Table, TableHeader, TableRow, TableComponent, Row } from '../styles/Table.style'
import { Checkbox } from '../styles/Input.style'

import { MdOutlineLocationOn, MdArrowDropDown } from "react-icons/md";
import { BiBuildings, BiTime, BiCalendar, BiBriefcase, BiEdit } from "react-icons/bi";

function JobTracker() {

    const jobs = [
        {
            position: 'Front-End Developer',
            company: 'Google',
            location: 'SF, California',
            status: 'Applied',
            date: '3/14/23'
        },
        {
            position: 'Manager',
            company: 'Twitter',
            location: 'LA, California',
            status: 'Applied',
            date: '2/12/23'
        },
        {
            position: 'Receptionist',
            company: 'Fcaebook',
            location: 'RA, North Carolina',
            status: 'Applied',
            date: '3/01/23'
        }

    ]

  return (
    <TableComponent>
        <Table>
            <tr>
                <TableHeader></TableHeader>
                <TableHeader>Job Position<BiBriefcase className='icon' /></TableHeader>
                <TableHeader>Company <BiBuildings className='icon' /></TableHeader>
                <TableHeader>Location <MdOutlineLocationOn className='icon' /></TableHeader>
                <TableHeader>Status <BiTime className='icon' /></TableHeader>
                <TableHeader>Date Saved <BiCalendar className='icon' /></TableHeader>
            </tr>

            { jobs && jobs.map((job) => (
                <Row>
                    <TableRow><Checkbox type='checkbox' /></TableRow>
                    <TableRow><div className='info'><h4>{ job.position }</h4> <BiEdit className='icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.company }</h4> <BiEdit className='icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.location }</h4> <BiEdit className='icon' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.status }</h4> <MdArrowDropDown className='icon status-dropdown' /></div></TableRow>
                    <TableRow><div className='info'><h4>{ job.date }</h4> <BiEdit className='icon' /></div></TableRow>
                </Row>
            )) }

        </Table>
    </TableComponent>
  )
}

export default JobTracker