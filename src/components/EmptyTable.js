import { useContext } from 'react'
import { AppContext } from '../App';
import { EmptyWrapper } from '../styles/Empty.style';

import { MdOutlinePostAdd as AddIcon } from "react-icons/md";

function EmptyTable() {

    const { setAddVisible } = useContext(AppContext);

  return (
    <EmptyWrapper>
        <AddIcon className='emptyIcon addIcon icon' onClick={() => setAddVisible(true)} />
    </EmptyWrapper>
  )
}

export default EmptyTable