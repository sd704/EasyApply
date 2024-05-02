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
import { useDispatch } from 'react-redux';
import { addItems } from './redux/filtersSlice'

function App() {

  const [apiData, setApiData] = useState([])
  const [offset, setOffset] = useState(0)
  const [searchfield, setSearchField] = useState("")
  const page = useJobsApi(offset)
  const dispatch = useDispatch();
  dispatch(addItems({ fieldName: "search", selectedFields: searchfield }))

  useEffect(() => {
    setApiData(prev => [...prev, ...page])
  }, [page]);

  const increaseOffset = () => {
    setOffset(prev => prev + 1);
  }

  //If shimmer2 is onscreen, we observe that and change offset
  //On change of offset, useJobsApi() is called and page gets updated
  //when page gets updated, useEffect is called, page gets appended to apiData
  const ref = useObserve(increaseOffset)

  const handleSearchfieldChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <>
      <h1>Search Jobs</h1>
      <div className='searchfields'>
        {FIELDS.map(
          (field, index) => <SearchOption key={index} fieldName={field} fieldData={FIELDDATA[index]} />
        )}
        <FormControl sx={{ m: 1, width: 200 }}>
          <TextField id="outlined-basic" label="Search anything" variant="outlined"
            value={searchfield} onChange={handleSearchfieldChange} />
        </FormControl>
      </div>

      <div className='alljobs'>
        {apiData.length === 0 && <div className='shimmer1'></div>}
        {apiData.length === 0 && <div className='shimmer1'></div>}
        {apiData.length === 0 && <div className='shimmer1'></div>}
        {apiData.length === 0 && <div className='shimmer1'></div>}
        {apiData.length > 0 && apiData.map((job, index) => <JobCard
          key={job.jdUid + (index + 1)}
          id={job.jdUid + (index + 1)}
          name={"Company " + (index + 1)}
          role={job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}
          details={job.jobDetailsFromCompany.substring(0, 390) + "  ...Click to read more."}
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
