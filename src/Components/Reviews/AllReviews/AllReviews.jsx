import "./AllReviews.scss"
import React, { useEffect, useReducer, useState } from 'react'
import feedbackReducer, { initialState } from '../../Feedbacks/feedbackReducer'
import axios from "axios"
import ReactPaginate from 'react-paginate';

export default function AllReviews() {
  const [state, dispatch] = useReducer(feedbackReducer, initialState)
  const [feedbacksCount, setFeedbacksCount] = useState(0)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6)

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
    <div className='AllReviews'>
      <div className="AllReviews_content">
        {
          state.map(elem=>{
            return(
              <div key={elem.id} className='feedback'>
                <div className='person'>
                  <h3>{elem.name.toUpperCase()}</h3>
                  <p>{elem.createdAt}</p>
                </div>
                <p>{elem.comment}</p>
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
    </div>
  )
}