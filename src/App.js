import { useEffect, useState } from 'react';
import './App.css';
import Tables from './components/Tables';

function App() {
  const [table, setTable] = useState()
  const [display, setDisplay] = useState();
  const [tables, setTables] = useState(undefined);

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
          if(table !== "" || table !== undefined) {
            setTables(timeTables(table));
            setDisplay(table);
          }
        }
      }, 1000)
      
      return () => {
        currentRender = false;
      }
  }, [table])
  return (
    <div className="App">
      Enter the Times Tables No : <input type="number" min="0" id="table" onChange={(e) => setTable(e.target.value)} />
      {(display !== "" && display !== undefined && tables !== undefined ) && <Tables tablename={display} table={tables} />}
    </div>
  );
}

export default App;
