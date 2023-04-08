import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { inputInfo } from '../inputInfo'

import { SelectWrap, FilterSelect, FilterLabel, ClearButton } from '../styles/Filter.style'
import { FormWrap, SubmitButton, DropdownContainer, Option } from '../styles/Form.style'
import { IconButton, BGContainer } from '../styles/Main.style'

import { RxEyeClosed } from "react-icons/rx";
import { AiOutlinePlusSquare as PlusIcon, AiOutlineMinusSquare as MinusIcon } from "react-icons/ai";

function Filter() {

    const { jobs, setFilters, setFilterVisibility } = useContext(AppContext);

    const[filterVisible, setFilterVisible] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, false])));
    const[currentFilters, setCurrentFilters] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))

    const[dropdownVisible, setDropdownVisible] = useState(null);

    // const[currentInput, setCurrentInput] = useState({
    //     position: jobs[0].position,
    //     company: jobs[0].company,
    //     location: jobs[0].location,
    //     status: 'Applied',
    //     date: jobs[0].date
    // })

    const displayFilter = (e, type) => {
        e.preventDefault();

        setFilterVisible(currentVal => ({
            ...currentVal,
            [type]: true
        }))
    }

    const hideFilter = (e, type) => {
        e.preventDefault();

        setFilterVisible(currentVal => ({
            ...currentVal,
            [type]: false
        }))

        setCurrentFilters(currentVal => ({
            ...currentVal,
            [type]: ''
        }))
    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        
        setFilters(currentFilters);
        setFilterVisibility(false);
    }

    const handleClear = (e) => {
        e.preventDefault();

        setCurrentFilters(Object.fromEntries(inputInfo.map((item) => [item.type, ''])));
        setFilterVisible(Object.fromEntries(inputInfo.map((item) => [item.type, false])));
        handleSubmit();
    }

  return (
    <BGContainer>
    <FormWrap>
        <form onSubmit={handleSubmit}>
            <IconButton><RxEyeClosed className='closeIcon'
                onClick={() => setFilterVisibility(false)}
            /></IconButton>

            { inputInfo.map((inputItem, index) => (
                <SelectWrap>

                <FilterLabel htmlFor={inputItem.type}>{ inputItem.title }</FilterLabel>
                { !filterVisible[inputItem.type] ? <IconButton onClick={(e) => { displayFilter(e, inputItem.type); setDropdownVisible(null) }}><PlusIcon className='icon plusIcon' /></IconButton> : <IconButton onClick={(e) => hideFilter(e, inputItem.type)}><MinusIcon className='icon minusIcon' /></IconButton> }

                <DropdownContainer>
                    { filterVisible[inputItem.type] ? <div><FilterSelect onClick={() => setDropdownVisible(dropdownVisible !== index ? index : null)}>{ currentFilters[inputItem.type] === '' ? jobs[0][inputItem.type] : currentFilters[inputItem.type] }</FilterSelect>

                    { dropdownVisible === index ?
                    <div className='dropdown'>
                    { jobs && jobs.filter((job, i) => {
                        if (!jobs.some((el, index) => el[inputItem.type] === job[inputItem.type] && i !== index && i < index)) { // 'i < index' makes sure we only return ONE of those dublicates
                            return job;
                        }
                    }).map((job) => (
                            <Option onClick={() => { setCurrentFilters({
                                ...currentFilters,
                                [inputItem.type]: job[inputItem.type]
                            }); setDropdownVisible(null) } }>{ job[inputItem.type] }</Option>
                    )) }
                    </div> : null }
                    
                    </div> : null }
                </DropdownContainer>

                </SelectWrap>
            )) }

            <ClearButton onClick={handleClear}>Clear</ClearButton>
            <SubmitButton type='submit' />
        </form>
    </FormWrap>
    </BGContainer>
  )
}

export default Filter