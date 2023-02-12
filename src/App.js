import {useState} from 'react';
import './App.css';
import Table from './components/table';

function App() {
  const startingData = [
    {id:1, header1: "test", header2: "test2", header3: "ddd"},
    {id:2, header1: "row2", header2: "row2", header3: "eee"}
]

const [data, setData] = useState(startingData);

function deleteData(){
  setData(prevState => prevState.filter(x => x.id != 2));
}

function addData(){
  setData(prevState => [...prevState, {id: 3, header1:"third row", header2:"test3", header3: "fff"}]);
}
  return (
    <div className="App">
      <Table data={data}/>
      <button onClick={addData}>Add Data</button>
      <button onClick={deleteData}>deleteData</button>
    </div>
  );
}

export default App;
