import React, { useState, useEffect } from 'react';
import './App.css';
import { supabase } from './Utils/dbclient';

function App() {

  const [investments, setInvestments] = useState([]);
  const [investment, setinvestment] = useState({Asset:"", Amount:""});
  const {Asset, Amount} = investment;

  useEffect(() => {
    fetchInvestments()
  },[])

  async function fetchInvestments(){
    const { data } = await supabase
    .from('investments')
    .select('*')
    setInvestments(data)
  }

async function addInvestment(){
  await supabase
    .from('investments')
    .insert([
      { Asset, Amount },
    ])
    setinvestment({Asset: "", Amount: ""})
    fetchInvestments()
}

  return (
    <div className="App">
      <h1>Investrack</h1>

      <input
      placeholder="Asset"
      value={Asset}
      onChange={e => setinvestment({...investment, Asset: e.target.value})} 
      />
      <input
      placeholder="Amount"
      value={Amount}
      onChange={e => setinvestment({...investment, Amount: e.target.value})} 
      />
      <button onClick={addInvestment}>Add Investment</button>

      {investments?.map(investment => {
        return (
        <div className="red" key={investment.id}>
          <h3>{investment.Asset}</h3>
          <p>{investment.Amount}</p>
        </div>
        )
      })}
    </div>
  )
}

export default App
