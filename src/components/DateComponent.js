import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from "@mui/material";
import dayjs from 'dayjs';

import { DateContainer } from '../styles/Form.style';

function DateComponent({ setInput, input, dateKey, defaultValue }) {
  return (
    <DateContainer>
        <DatePicker 
                onChange={(date) => {
                    input && dateKey ?
                    setInput({
                        ...input,
                        [dateKey.type]: date.$d.toLocaleDateString('en-US')
                    }) : setInput(date.$d.toLocaleDateString('en-US'))
                }}

                defaultValue={defaultValue && dayjs(defaultValue.replace(/\//g, '-'))}
                inputFormat="MM-DD-YYYY"
                label=''
                className='datepicker'
                sx={{
                    "& .MuiInputBase-root": {
                        height: '31px',
                        "& .MuiButtonBase-root": {
                            },
                            "& .MuiInputBase-input": {
                            padding: '5px',
                            fontWeight: 600,
                            textTransform: 'lowercase',
                            fontSize: '15px',
                            marginRight: 2
                            }
                    },
                    svg: {
                        width: 20,
                        color: '#000',
                    }
                }}
                renderInput={(params) => <TextField {...params} />}
        />
    </DateContainer>
  )
}

export default DateComponent