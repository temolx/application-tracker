import { MdLibraryAdd, MdFilterList } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HeaderWrap } from '../styles/Header.style';
import { IconButton } from '../styles/Main.style';

import { useContext } from "react";
import { AppContext } from "../App";

function Header() {

  const { setAddVisible } = useContext(AppContext);

  return (
    <HeaderWrap>
        <IconButton
          onClick={() => setAddVisible(true)}
        ><MdLibraryAdd className='icon' /></IconButton>
        <IconButton><MdFilterList className='icon' /></IconButton>
        <IconButton><BiDotsVerticalRounded className='icon settins-icon' /></IconButton>
    </HeaderWrap>
  )
}

export default Header