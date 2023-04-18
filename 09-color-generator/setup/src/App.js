import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setColor] = useState('');
  const[error,setError] = useState(false);
  const[percent,setPercent] = useState(10)
  const [list,setList] = useState(new Values("#f19031").all(10));

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let percentNums = parseInt(percent)
      let colors = new Values(color).all(percentNums);
      setList(colors)      
    } catch (error) {
      setError(true)
      console.error("error: " + error);
    }
  }
  return <> 
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={color} 
          onChange={(e)=>setColor(e.target.value)}
          placeholder='#f1293'
          className={`${error?'error':null} `}
        >
        </input>
        <label className='percent' htmlFor='percent'>percent:</label>
        <input 
          type='text' 
          placeholder='10' 
          id='percent'
          onChange={(e)=>setPercent(e.target.value)}
        ></input>
        <button className='btn' type='submit'> submit</button>
      </form>
    </section>

    <section className='colors'>
      {
        list.map((color,index)=>{
          return(
            <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          )
        })
      }
    </section>
  </>
}

export default App
