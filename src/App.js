import { GlobalStyles } from './styles/Global.style';
import { AppWrap } from './styles/Main.style';

import JobTracker from './components/JobTracker';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Filter from './components/Filter';

import { createContext, useState } from 'react';
import { inputInfo } from './inputInfo';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const AppContext = createContext(null);
export const FilterContext = createContext(null)

function App() {

  const[addVisible, setAddVisible] = useState(false);
  const[jobs, setJobs] = useState([
    {
      position: 'Front-End Developer',
      company: 'Google',
      location: 'Los Angeles, CA',
      status: 'Applied',
      date: '2/27/2023',
    },
    {
      position: 'Back-End Developer',
      company: 'Meta',
      location: 'San Francisco, CA',
      status: 'Interview',
      date: '3/26/2023',
    },
    {
      position: 'Financial Assistant',
      company: 'Netflix',
      location: 'Atlanta, GA',
      status: 'Applied',
      date: '3/24/2023',
    },
    {
      position: 'Back-End Developer',
      company: 'Twitter',
      location: 'Los Angeles, CA',
      status: 'Accepted',
      date: '3/27/2023',
    },
  ]);
  const[selectedJob, setSelectedJob] = useState([]);
  const[search, setSearch] = useState('');

  const[filters, setFilters] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))
  const[filterVisibility, setFilterVisibility] = useState(false);
  const[currentFilters, setCurrentFilters] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))
  const[filterVisible, setFilterVisible] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, false])));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppContext.Provider value={{ jobs, setJobs, addVisible, setAddVisible, selectedJob, setSelectedJob, selectedJob, search, setSearch }}>
      <FilterContext.Provider value={{ filters, setFilters, filterVisibility, setFilterVisibility, currentFilters, setCurrentFilters, filterVisible, setFilterVisible }}>
        <AppWrap>
          <GlobalStyles />

          <Sidebar />
          <Header />
          <JobTracker />

          { filterVisibility ? <Filter /> : null }
          { addVisible ? <Form /> : null }
        </AppWrap>
      </FilterContext.Provider>
    </AppContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
