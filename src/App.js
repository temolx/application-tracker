import { GlobalStyles } from './styles/Global.style';
import { AppWrap } from './styles/Main.style';

import JobTracker from './components/JobTracker';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Filter from './components/Filter';

import { createContext, useState } from 'react';
import { inputInfo } from './inputInfo';

export const AppContext = createContext(null);

function App() {

  const[addVisible, setAddVisible] = useState(false);
  const[jobs, setJobs] = useState([
    {
      position: 'Front-End Developer',
      company: 'Google',
      location: 'Los Angelesm CA',
      status: 'Applied',
      date: '3/27/23',
    },
    {
      position: 'Back-End Developer',
      company: 'Meta',
      location: 'San Francisco CA',
      status: 'Interview',
      date: '3/26/23',
    },
    {
      position: 'Financial Assistant',
      company: 'Netflix',
      location: 'Atnalnta GA',
      status: 'Applied',
      date: '3/24/23',
    },
    {
      position: 'Back-End Developer',
      company: 'Pornhub',
      location: 'Los Angeles CA',
      status: 'Accepted',
      date: '3/27/23',
    },
  ]);
  const[selectedJob, setSelectedJob] = useState([]);
  const[filters, setFilters] = useState(Object.fromEntries(inputInfo.map((item) => [item.type, ''])))
  const[filterVisibility, setFilterVisibility] = useState(false);

  return (
    <AppContext.Provider value={{ jobs, setJobs, addVisible, setAddVisible, selectedJob, setSelectedJob, selectedJob, filters, setFilters, setFilterVisibility, filterVisibility }}>
      <AppWrap>
        <GlobalStyles />

        <Sidebar />
        <Header />
        <JobTracker />

        { filterVisibility ? <Filter /> : null }
        { addVisible ? <Form /> : null }
      </AppWrap>
    </AppContext.Provider>
  );
}

export default App;
