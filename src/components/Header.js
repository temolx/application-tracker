import { MdLibraryAdd, MdFilterList } from "react-icons/md";
import { BiDotsVerticalRounded, BiTrash, BiCheckSquare } from "react-icons/bi";
import { HeaderWrap, SettingsDropdown } from '../styles/Header.style';
import { IconButton } from '../styles/Main.style';

import { useContext, useState } from "react";
import { AppContext } from "../App";

function Header() {

  const { setAddVisible, selectedJob, setSelectedJob, setJobs, jobs, setFilterVisibility, filterVisibility, addVisible } = useContext(AppContext);

  const[visible, setVisible] = useState(false);

  const showDropdown = () => {
    setVisible(!visible);
  }

  const handleDelete = () => {
    const updatedJobs = jobs.filter((el) => {
      return !selectedJob.some((element) => element === el);
    })

    setJobs(updatedJobs);
    setSelectedJob([]);
    setVisible(false);
  }

  return (
    <HeaderWrap>
        <IconButton
          onClick={() => !filterVisibility && setAddVisible(true)}
        ><MdLibraryAdd className='icon' /></IconButton>
        <IconButton
          onClick={() => !addVisible && setFilterVisibility(true)}
        ><MdFilterList className='icon' /></IconButton>
        
        <IconButton onClick={showDropdown}>
          
          <BiDotsVerticalRounded className='icon settins-icon' />
          </IconButton>

          { visible ? <SettingsDropdown>
            <button onClick={() => handleDelete()} disabled={selectedJob.length === 0}>Delete <BiTrash className='icon' /></button>
            <button disabled={selectedJob.length === 0}>Complete <BiCheckSquare className='icon' /></button>
          </SettingsDropdown> : null }
    </HeaderWrap>
  )
}

export default Header