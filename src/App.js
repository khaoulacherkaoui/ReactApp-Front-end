import './App.css';
import Card from './Card';
import DataList from './DataList';

function App() {
  return (
    <div className="App" class='container' > 
      <img className='img' 
      src='https://media-exp1.licdn.com/dms/image/C4E0BAQHD0YYgDLpV7Q/company-logo_200_200/0/1519907466808?e=1649894400&v=beta&t=re_4qfnPGFPU2ew_q7I8dTAbxmoSFa97Lrv1pVJVij8'/>
      <h1 className='font'>Test #1 : Front-end Development</h1>
      <Card/>
      <DataList/>
    </div>
  );
}

export default App;
