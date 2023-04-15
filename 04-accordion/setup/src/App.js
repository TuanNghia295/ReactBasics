import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import questions from './data';
function App() {
  return <main>
    <div className='container'>
      <h3>Question and answers about login</h3>
      <section className='info'>
        {
          questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default App;
