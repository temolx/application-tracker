import { BiBuildings, BiTime, BiCalendar, BiBriefcase } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

export const inputInfo = [
 { title: 'Job Position', icon: <BiBriefcase className='icon headerIcon' />, inputType: 'text', type: 'position' }, 
 { title: 'Company', icon: <BiBuildings className='icon headerIcon' />, inputType: 'text', type: 'company' }, 
 { title: 'Location', icon: <MdOutlineLocationOn className='icon headerIcon' />, inputType: 'text', type: 'location' }, 
 { title: 'Status', icon: <BiTime className='icon headerIcon' />, inputType: 'dropdown', type: 'status', options: ['Applied', 'Interview', 'Rejected', 'Accepted'] }, 
 { title: 'Date Saved', icon: <BiCalendar className='icon headerIcon' />, inputType: 'date', type: 'date' }
]