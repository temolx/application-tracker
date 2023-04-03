import { BiBuildings, BiTime, BiCalendar, BiBriefcase } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

export const inputInfo = [
 { title: 'Job Position', icon: <BiBriefcase className='icon' />, inputType: 'text', type: 'position' }, 
 { title: 'Company', icon: <BiBuildings className='icon' />, inputType: 'text', type: 'company' }, 
 { title: 'Location', icon: <MdOutlineLocationOn className='icon' />, inputType: 'text', type: 'location' }, 
 { title: 'Status', icon: <BiTime className='icon' />, inputType: 'dropdown', type: 'status', options: ['Applied', 'Interview', 'Rejected', 'Accepted'] }, 
 { title: 'Date Saved', icon: <BiCalendar className='icon' />, inputType: 'date', type: 'date' }
]