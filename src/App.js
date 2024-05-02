// import logo from './logo.svg';
import './App.css';
// import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchOption from './components/SearchOption';
import JobCard from './components/JobCard';
import { FIELDS, FIELDDATA } from './utils/constants';
import useJobsApi from './hooks/useJobsApi';
import { useState, useEffect } from 'react';
import useObserve from './hooks/useObserve';

function App() {

  const [apiData, setApiData] = useState([])
  const [offset, setOffset] = useState(0)
  const page = useJobsApi(offset)

  useEffect(() => {
    console.log("Api called")
    setApiData(prev => [...prev, ...page])
  }, [page]);

  const increaseOffset = () => {
    setOffset(prev => prev + 1);
  }

  //If shimmer2 is onscreen, we observe that and change offset
  //On change of offset, useJobsApi() is called and page gets updated
  //when page gets updated, useEffect is called, page gets appended to apiData
  const ref = useObserve(apiData.length, increaseOffset)

  return (
    <>
      <h1>Search Jobs</h1>
      <div className='searchfields'>
        {FIELDS.map(
          (field, index) => <SearchOption key={index} fieldName={field} fieldData={FIELDDATA[index]} />
        )}
        <FormControl sx={{ m: 1, width: 200 }}>
          <TextField id="outlined-basic" label="Search Company Name" variant="outlined" />
        </FormControl>
      </div>

      <div className='alljobs'>
        {apiData.length === 0 && <div className='shimmer1'></div>}
        {apiData.length > 0 && apiData.map((job, index) => <JobCard
          key={job.jUid}
          id={job.jUid}
          name={"Company " + (index + 1)}
          role={job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}
          details={job.jobDetailsFromCompany}
          location={job.location.charAt(0).toUpperCase() + job.location.slice(1)}
          maxExp={job.maxExp}
          minExp={job.minExp}
          minsalary={job.minJdSalary}
          maxsalary={job.maxJdSalary}
        />)}
        {apiData.length > 0 && <div className='shimmer2' ref={ref}></div>}
      </div >
    </>
  );
}

export default App;
