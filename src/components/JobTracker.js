import { useContext, useState } from 'react'
import { AppContext, FilterContext } from '../App';

import { Table, TableHeader, TableRow, TableComponent, Row, InputContainer, EditDropdown, RowContainer } from '../styles/Table.style'
import { Option } from '../styles/Form.style';
import { Checkbox } from '../styles/Input.style'
import { SaveBtn, CancelBtn } from '../styles/Main.style';

import { MdArrowDropDown } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import { inputInfo } from '../inputInfo';

import DateComponent from './DateComponent';
import NotFound from './NotFound';

function JobTracker() {

    const { jobs, setSelectedJob, selectedJob, search, setJobs } = useContext(AppContext);
    const { filters } = useContext(FilterContext);

    const defaultEditSetting = {...Object.fromEntries(inputInfo.map((el) => [el.type, false])), arrIndex: null, keyIndex: null};

    const[editMode, setEditMode] = useState(defaultEditSetting);
    const[input, setInput] = useState('');
    const[incorrectInput, setIncorrectInput] = useState(false);
    const[displayDropdown, setDisplayDropdown] = useState({
        arrIndex: null,
        keyIndex: null
    });

    const checkItem = (job) => {        
        if (!selectedJob.some((el) => el === job)) {
            setSelectedJob([...selectedJob, job]);
            setEditMode(defaultEditSetting)
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
        setSelectedJob([]);
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

    const handleCancel = (key) => {
        setEditMode({
            ...editMode,
            [key]: false,
            arrIndex: null,
            keyIndex: null
        })
    }

    const handleStatus = (option, arrIndex) => {
        const updatedJobs = jobs.map((job, index) => {
            if (arrIndex === index) {
                return {
                    ...job,
                    status: option
                }
            } return job;
        })

        setJobs(updatedJobs);
        setDisplayDropdown({
            arrIndex: null,
            keyIndex: null
        })
    }

    const filteredJobs = jobs.filter((el) => { // this could be more dynamic-ish
        if (filters.position !== '') {
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
        })

  return (
    <TableComponent>
        <Table>
            <tr className='test'>
                <TableHeader></TableHeader>
                { inputInfo.map((header) => (
                    <TableHeader>{ header.title } { header.icon }</TableHeader>
                ))}
            </tr>
            
            { filteredJobs.length !== 0 ? <RowContainer>
            { jobs && filteredJobs.map((job, index) => (
                <Row className={selectedJob.some((el) => el === job) || editMode.arrIndex === index ? 'activeRow' : ''}>
                    <TableRow><Checkbox type='checkbox' onChange={() => checkItem(job)} checked={selectedJob.some((el) => el === job)} /></TableRow>

                    { Object.keys(job).map((key, i) => (
                        <TableRow>{editMode[key] && editMode.arrIndex === index && editMode.keyIndex === i ? 
                            <InputContainer>
                                { key === 'date' ? <DateComponent setInput={setInput} defaultValue={job[key]} /> : <input type='text' className='editInput' defaultValue={job[key]} onChange={(e) => setInput(e.target.value)} /> }

                                <div className="table-btns">
                                    <CancelBtn onClick={() => handleCancel(key)}>Cancel</CancelBtn>
                                    <SaveBtn onClick={() => handleEdit(index, key)} className={incorrectInput ? 'incorrect-btn' : ''}>Save</SaveBtn>
                                </div>
                            </InputContainer> : 
                            
                            <InputContainer>
                                <h4>{ job[key] }</h4>
                                { key === 'status' ? <MdArrowDropDown className='icon status-dropdown edit-icon' onClick={() => setDisplayDropdown({
                                    arrIndex: displayDropdown.arrIndex !== index && displayDropdown.keyIndex !== i ? index : null,
                                    keyIndex: displayDropdown.arrIndex !== index && displayDropdown.keyIndex !== i ? i : null
                                })} /> : <BiEdit className='icon edit-icon' onClick={() => showEditing(key, index, i)} /> }

                                { displayDropdown.arrIndex === index && displayDropdown.keyIndex === i ? <EditDropdown>

                                          { inputInfo.filter((el) => el.inputType === 'dropdown').map(el => el.options.map((option) => (
                                                <Option onClick={() => handleStatus(option, index)}>{ option }</Option>
                                            ))) }
                            
                                </EditDropdown>  : null }
                            </InputContainer>}
                        </TableRow>
                    )) }
                </Row>

                
            )) }
            </RowContainer> : <NotFound /> }
        </Table>
        
    </TableComponent>
  )
}

export default JobTracker