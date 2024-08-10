import React, { useEffect, useState } from 'react'
import "./CurrentBlog.scss"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PhoneCall from '../../Components/Forms/PhoneCall/PhoneCall'
import MessageUs from '../../Components/Forms/MessageUs/MessageUs'

export default function CurrentBlog() {
  const [blog, setBlog] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios(`http://localhost:3000/blogs/${id}`)
    .then(res=>setBlog(res.data))
  }, [id])
  

  return (
    <div className='CurrentBlog'>
      <div className="CurrentBlog_content">
        <h1>БЛОГ</h1>
        <h2>{blog?.title?.toUpperCase()}</h2>
        <img src={blog.image}/>
        <p>{blog.desc1}</p>
        {
          blog?.rules?.map(elem=>{
            return(
              <div key={elem.id}>
                <h3>{elem.id}. {elem.title?.toUpperCase()}</h3>
                <p>{elem.desc}</p>
              </div>
            )
          })
        }
        <p>{blog.desc2}</p>
      </div>
      <div className='help'>
        <h1>ВОЗНИКЛИ ВОПРОСЫ ?</h1>
        <p>Мы с радостью ответим на любой вопрос о вашей технике. Позвоните или напишите нам.</p>
        <div className="forms">
          <PhoneCall/>
          <div className='line'></div>
          <MessageUs/>
        </div>
      </div>
    </div>
  )
}
