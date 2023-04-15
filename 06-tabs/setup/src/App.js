import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [job,setJob] = useState([]);
  const [value,setValue] = useState(0)

  // async function: chặn thực thi của chương trình cho tới khi nó hoàn tất thao tác và trả ra kết quả
  const fetchJobs = async () =>{
    const response = await fetch(url);
    // khi gặp await trong hàm bất đồng bộ async, chương trình sẽ tạm dừng thực thi hàm đó và cho phếp
    // các tác vụ khác tiếp tục thực hiện. Khi await được hoàn thành,chương trình sẽ tiếp tục thi hàm bất
    // đồng bộ từ nơi nó đã tạm dừng trước đó
    const newJobs = await response.json()
    setJob(newJobs)
    setLoading(false)
  };
   
  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading){
    return (
    <section className='section-loading'>
      <h1>Loading...</h1>
    </section>
    )
  }

  const {company,dates,duties,title} = job[value]

  return <section className='section'>
    <div className='title'>
      <h2>experience</h2>
      <div className='underline'></div>
    </div>

    <div className='job-center'>
      {/* btn container */}
      <div className='btn-container'>
        {
          job.map((item,index)=>{
            return <button key={item.id}
              onClick={()=>setValue(index)}
              className={`job-btn ${index === value &&
              'active-btn'
            }`}            
            >
              {item.company}
            </button>
          })
        }
      </div>
      {/* job info */}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return(
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight
                className='job-icon'
              />
              <p>{duty}</p>
            </div>
          )
        })}
      </article>
    </div>
  </section>
}

export default App
