import { useContext, useState } from 'react'
import { AppContext } from '../App'
import { inputInfo } from '../inputInfo'

import { SelectWrap, FilterSelect, FilterLabel, ClearButton } from '../styles/Filter.style'
import { FormWrap, SubmitButton } from '../styles/Form.style'
import { IconButton } from '../styles/Main.style'

import { RxEyeClosed } from "react-icons/rx";
import { AiOutlinePlusSquare as PlusIcon, AiOutlineMinusSquare as MinusIcon } from "react-icons/ai";

function Filter() {

    const { jobs, setFilters, setFilterVisibility } = useContext(AppContext);

    const[filterVisible, setFilterVisible] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, false])));
    const[currentFilters, setCurrentFilters] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))

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

    const selectFilter = (type, e) => {
        setCurrentFilters(currentVal => ({
            ...currentVal,
            [type]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilters(currentFilters);
    }

    const handleClear = (e) => {
        e.preventDefault();

        setCurrentFilters(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))
        setFilterVisible(Object.fromEntries(inputInfo.map((item) => [item.type, false])))
    }

  return (
    <FormWrap>
        <form onSubmit={handleSubmit}>
            <IconButton><RxEyeClosed className='closeIcon'
                onClick={() => setFilterVisibility(false)}
            /></IconButton>

            { inputInfo.map((inputItem) => (
                <SelectWrap>
                <FilterLabel htmlFor={inputItem.type}>{ inputItem.title }</FilterLabel>
                { !filterVisible[inputItem.type] ? <IconButton onClick={(e) => displayFilter(e, inputItem.type)}><PlusIcon className='icon plusIcon' /></IconButton> : <IconButton onClick={(e) => hideFilter(e, inputItem.type)}><MinusIcon className='icon minusIcon' /></IconButton> }

                    { filterVisible[inputItem.type] ? <FilterSelect name={inputItem.type} onChange={(e) => selectFilter(inputItem.type, e)}>
                    { jobs && jobs.filter((job, i) => {
                        if (!jobs.some((el, index) => el[inputItem.type] === job[inputItem.type] && i !== index && i < index)) { // 'i < index' makes sure we only return ONE of those dublicates
                            return job;
                        }
                    }).map((job) => (
                            <option value={job[inputItem.type]}>{ job[inputItem.type] }</option>
                    )) }
                    </FilterSelect> : null }

                </SelectWrap>
            )) }

            <ClearButton onClick={handleClear}>Clear</ClearButton>
            <SubmitButton type='submit' />
        </form>
    </FormWrap>
  )
}

export default Filter