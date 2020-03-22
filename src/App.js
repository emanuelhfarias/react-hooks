import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  // call one time when component mount (componentDidMount)
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  // call every time techs updates (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default App;
