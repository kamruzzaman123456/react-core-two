 import {useState} from 'react';
 
 export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const  [sixs , setSixes] = useState(0)
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixs = sixs + 1 
        setRuns(updatedRuns);
        setSixes(updatedSixs)
    }
  return (
    <div>
      <h2>Batsman: {name}</h2>
      <p>Six : {sixs}</p>
      {
        runs > 50 && <p>Century!</p>
      }
      <p>Runs: {runs}</p>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleSix}>Six</button>
      
    </div>
  );
}