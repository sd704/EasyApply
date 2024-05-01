// import logo from './logo.svg';
import './App.css';
import SearchOption from './components/SearchOption';
import { FIELDS, FIELDDATA } from './utils/constants';

function App() {

  return (
    <>
    <h1>Search Jobs</h1>
      {FIELDS.map(
        (field, index) => <SearchOption key={index} fieldName={field} fieldData={FIELDDATA[index]} />
      )}
    </>
  );
}

export default App;
