import { AiOutlineFileSearch as SearchIcon } from 'react-icons/ai'

import { EmptyWrapper } from '../styles/Empty.style';

function NotFound() {
  return (
    <EmptyWrapper>
        <SearchIcon className='emptyIcon' />
    </EmptyWrapper>
  )
}

export default NotFound