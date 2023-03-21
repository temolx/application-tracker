import { FormWrap, FormInput, FormLabel, InputWrap, SubmitButton, Error } from '../styles/Form.style'
import { IconButton } from '../styles/Main.style';

import { inputInfo } from '../inputInfo'
import { RxEyeClosed } from "react-icons/rx";

import { useContext, useState } from 'react';
import { AppContext } from '../App';

function Form() {

    const { setAddVisible, setJobs, jobs } = useContext(AppContext);

    const[userInput, setUserInput] = useState({
        position: '',
        company: '',
        location: '',
        status: '',
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
    <FormWrap>
        <form onSubmit={addJob}>
            <IconButton
                onClick={() => setAddVisible(false)}
            ><RxEyeClosed className='icon' /></IconButton>

                { inputInfo.map((input) => (
                    <InputWrap>
                        <FormLabel htmlFor=''>{ input.title }</FormLabel>
                        <FormInput type='text' onChange={(e) => setUserInput({
                            ...userInput,
                            [input.type]: e.target.value
                        })} />
                    </InputWrap>
                )) }

                <SubmitButton type='submit' />
        </form>

        <Error>{ errors.empty }</Error>
        <Error>{ errors.exists }</Error>
    </FormWrap>
  )
}

export default Form