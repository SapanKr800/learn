import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState([]);
  const fetchNews = async () => {

    const newItem = await axios('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a3f73a84a50947a19f2d055f7219bb58');
    setData(newItem.data.articles);
  }

  useEffect(() => {
    fetchNews()
  }, [])



  return (
    <>

<div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>

      {
        data.map((details, i) => {
          return (
            <NewsCard details={details} key={i} />
          )
        })
      }

</div>

    </>
  )
}


const NewsCard = ({details}) => {
  return (

    <>

      <div className="card bg-[#28292c] shadow-sm " >
        <figure>
          <img
            src={details.urlToImage}
            alt={details.title} onClick={() => window.open(details.url)} className="cursor-pointer object-cover h-37.5 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title line-clamp-2 cursor-pointer" onClick={() => window.open(details.url)}>{details.title}</h2>
          <p className='line-clamp-3'>{details.description}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn badge-outline" onClick={() => window.open(details.url)} >Read More</button>
          </div>
        </div>
      </div>

    </>


  )
}

export default Home