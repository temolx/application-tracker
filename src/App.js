import { GlobalStyles } from './styles/Global.style';
import { AppWrap } from './styles/Main.style';

import JobTracker from './components/JobTracker';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

import { createContext, useState } from 'react';

export const AppContext = createContext(null);

function App() {

  const[addVisible, setAddVisible] = useState(false);
  const[jobs, setJobs] = useState([]);

  return (
    <AppContext.Provider value={{ jobs, setJobs, addVisible, setAddVisible }}>
      <AppWrap>
        <GlobalStyles />

        <Sidebar />
        <Header />
        <JobTracker />

        { addVisible ? <Form /> : null }
      </AppWrap>
    </AppContext.Provider>
  );
}

export default App;
