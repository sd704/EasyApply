// import logo from './logo.svg';
import './App.css';
// import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchOption from './components/SearchOption';
import JobCard from './components/JobCard';
import { FIELDS, FIELDDATA } from './utils/constants';
import useJobsApi from './hooks/useJobsApi';


function App() {

  const apiData = useJobsApi(0)
  // console.log(apiData)

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
        {apiData && apiData.map((job, index) => <JobCard
          key={job.jUid}
          id={job.jUid}
          name={"Company " + index}
          role={job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}
          details={job.jobDetailsFromCompany}
          location={job.location.charAt(0).toUpperCase() + job.location.slice(1)}
          maxExp={job.maxExp}
          minExp={job.minExp}
          minsalary={job.minJdSalary}
          maxsalary={job.maxJdSalary}
        />)}
      </div>
    </>
  );
}

export default App;
