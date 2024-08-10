import React, { useEffect, useReducer, useState } from 'react'
import PhoneCall from '../../Components/Forms/PhoneCall/PhoneCall'
import MessageUs from '../../Components/Forms/MessageUs/MessageUs'
import blogReducer, { initialState } from './blogReducer'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import "./Blog.scss"
import { Link } from 'react-router-dom'

export default function Blog() {
  const [state, dispatch] = useReducer(blogReducer, initialState)
  const [blogsCount, setBlogsCount] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)

  useEffect(() => {
    axios.all(
      [axios("http://localhost:3000/blogs",{
        params:{
          _limit: perPage,
          _start: (page * perPage) - perPage
        }
      }),
      axios("http://localhost:3000/blogs")]
    )
    .then(([res,blogs])=> {
      dispatch({type: "add_blogs", payload: res.data});
      setBlogsCount(blogs.data.length)
    })
  }, [page, perPage])

  const handlePageClick = ({ selected })=>{
    setPage(selected + 1)
  }

  return (
    <div className='Blog'>
      <h1>БЛОГ</h1>
      <div className='Blog_content'>
        {
          state.map(elem=>{
            return(
              <Link key={elem.id} to={`${elem.id}`} className='item'>
                <img src={elem.image}/>
                <h4>{elem.title.toUpperCase()}</h4>
              </Link>
            )
          })
        }
      </div>
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}	
          pageCount={Math.ceil(blogsCount / perPage)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className='feedback__list'
        />
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
