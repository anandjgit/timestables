import { useEffect, useState } from 'react';
import './App.css';
import Tables from './components/Tables';

function App() {
  const [table, setTable] = useState(0)
  const [display, setDisplay] = useState(0);
  const [tables, setTables] = useState(0);

  const timeTables = (table, upto = 10) => {
    let generate = []
    for(let i = 1; i <= upto; i++) {
      generate.push({'num': i, 'mul': i * table })
    }
    return generate;
  }

  useEffect(() => {
      let currentRender = true;
      setTimeout(() => {
        if(currentRender) {
          setTables(timeTables(table));
          setDisplay(table);
        }
      }, 1000)
      
      return () => {
        currentRender = false;
      }
  }, [table])
  return (
    <div className="App">
      <input type="number" min="0" id="table" onChange={(e) => setTable(e.target.value)} />
      {display !== "" && <Tables tablename={display} table={tables} />}
    </div>
  );
}

export default App;
