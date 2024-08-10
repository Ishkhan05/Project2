import "./Feedbacks.scss"
import React, { useEffect, useReducer, useState } from 'react'
import feedbackReducer, { initialState } from './feedbackReducer'
import axios from "axios"
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function Feedbacks() {
  const [state, dispatch] = useReducer(feedbackReducer, initialState)
  const [feedbacksCount, setFeedbacksCount] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    axios.all(
      [axios("http://localhost:3000/feedback",{
        params:{
          _limit: perPage,
          _start: (page * perPage) - perPage
        }
      }),
      axios("http://localhost:3000/feedback")]
    )
    .then(([res,feedbacks])=> {
      dispatch({type: "add_feedback", payload: res.data});
      setFeedbacksCount(feedbacks.data.length)
    })
  }, [page, perPage])
  const handlePageClick = ({ selected })=>{
    setPage(selected + 1)
  }
  return (
    <div className='Feedbacks'>
      <h1>ОТЗЫВЫ КЛИЕНТОВ</h1>
      <div className="Feedbacks_content">
        {
          state.map(elem=>{
            return(
              <div key={elem.id} className='feedback'>
                <div className='person'>
                  <p>{elem.name.slice(0,1).toUpperCase()}</p>
                  <h3>{elem.name.toUpperCase()}</h3>
                </div>
                <div className='date'>
                  <span></span>
                  <p>{elem.createdAt}</p>
                  <span></span>
                </div>
                {
                  elem.comment.length>550?
                  <p>{elem.comment.slice(0,450)} <span>Читать весь отзыв</span> </p>
                  :<p>{elem.comment.slice(0,450)}</p>
                }
              </div>
            )
          })
        }
      </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={0}	
          pageCount={Math.ceil(feedbacksCount / perPage)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className='feedback__list'
        />
      <div className='links'>
        <div className="link">
          <p>Мы на </p>
          <Link to="https://www.irecommend.ru/" target='_blanc'>www.irecommend.ru</Link>
        </div>
        <div className="link">
          <p>Мы на </p>
          <Link to="https://www.otzovik.com/" target='_blanc'>www.otzovik.com</Link>
        </div>
      </div>
    </div>
  )
}
