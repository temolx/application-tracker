import { FormWrap, FormInput, FormLabel, InputWrap, SubmitButton, Error, DropdownContainer, Option, DateContainer } from '../styles/Form.style'
import { BGContainer } from '../styles/Main.style';
import { IconButton } from '../styles/Main.style';

import { inputInfo } from '../inputInfo'
import { RxEyeClosed } from "react-icons/rx";
import { MdOutlineArrowDropDown as DropdownIcon } from "react-icons/md";

import { useContext, useState } from 'react';
import { AppContext } from '../App';

import DateComponent from './DateComponent';

function Form() {

    const todayDate = new Date().toLocaleDateString();

    const { setAddVisible, setJobs, jobs } = useContext(AppContext);

    const[dropdownVisible, setDropdownVisible] = useState(false);
    const[currentOption, setCurrentOption] = useState('Applied');

    const[userInput, setUserInput] = useState({
        position: '',
        company: '',
        location: '',
        status: currentOption,
        date: ''
    })

    const[errors, setErrors] = useState({
        empty: '',
        exists: ''
    })

    const addJob = (e) => {
        e.preventDefault();

        if (jobs.some((el) => Object.values(el).every((value, index) => value === Object.values(userInput)[index]))) {
            setErrors({
                emtpy: '',
                exists: 'This job already exists.'
            })
            return;
        }
        if (Object.values(userInput).every((value) => value !== '')) {
            setJobs([...jobs, userInput])
            // console.log(jobs);

            setErrors({
                empty: '',
                exists: ''
            })

            setAddVisible(false);
        }
        else if (Object.values(userInput).some((value) => value === '')) {
            setErrors({
                empty: 'All fields are required.',
                exists: ''
            })
        }
    }

  return (
    <BGContainer>
    <FormWrap>
        <form onSubmit={addJob}>
            <IconButton
                onClick={() => setAddVisible(false)}
            ><RxEyeClosed className='closeIcon' /></IconButton>

                { inputInfo.map((input) => (
                    <InputWrap>
                        <FormLabel>{ input.title }</FormLabel>
                        
                        { input.inputType !== 'dropdown' && input.inputType !== 'date' ? <FormInput type='text' onChange={(e) => setUserInput({
                            ...userInput,
                            [input.type]: e.target.value
                        })} /> : (input.inputType !== 'date' ? <DropdownContainer onClick={() => setDropdownVisible(!dropdownVisible)}>
                                    <div className='dropdownInput'>{ currentOption }</div>
                                    <DropdownIcon className='dropdownIcon' />

                                    { dropdownVisible ? <div className='dropdown'>
                                        { input.options.map((option) => (
                                            <Option onClick={() => { setCurrentOption(option); setUserInput({
                                                ...userInput,
                                                [input.type]: option
                                            })}}>{ option }</Option>
                                        )) }
                                    </div> : null }
                                 </DropdownContainer> : <DateComponent setInput={setUserInput} input={userInput} dateKey={input} />)}
                    </InputWrap>
                )) }

                <SubmitButton type='submit' />
        </form>

        <Error>{ errors.empty }</Error>
        <Error>{ errors.exists }</Error>
    </FormWrap>
    </BGContainer>
  )
}

export default Form