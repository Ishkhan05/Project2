import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { object, string } from 'yup'
import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import moment from "moment"
import "./LeaveAReview.scss"

const initialValues = {
  name: "",
  email: "",
  comment: ""
}

const validationSchema = object({
  name: string().min(3).required("Заполните Ваше имя!!!"),
  email: string().required("Заполните Ваш e-mail!!!"),
  comment: string().required("Заполните поле Ваш отзыв!!!")
})

export default function LeaveAReview() {
  const handleSubmit = (values,formik)=>{
    const comment = {
      ...values,
      id: nanoid(5),
      createdAt: moment().format('L')
    }
    axios.post('http://localhost:3000/feedback', comment)
      .then(res => {
        formik.resetForm();
      })
  }
  return (
    <div className='LeaveAReview'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {
          (formik)=>{
            console.log(formik.isValid)
            console.log(formik.values.accept)
            return(
              <Form>
                <label htmlFor="name">
                  <p>Ваше имя <span>*</span></p>
                  <Field type="text" placeholder='Имя' name='name'/>
                </label>
                <label htmlFor="email">
                  <p>Ваш e-mail <span>*</span></p>
                  <Field type="email"  name='email' placeholder="E-mail"/>
                </label>
                <label htmlFor="comment">
                  <p>Ваш отзыв <span>*</span></p>
                  <Field as="textarea"  name="comment" placeholder="Текст отзыва" rows="4" cols="50"/>
                </label>
                <label htmlFor="accept" className='accept'>
                  <Field type='checkbox' id="accept" name='accept' />
                  <p>Даю согласие на обработку моих персональных данных и принимаю <Link to="/">политику конфиденциальности</Link></p>
                </label>
                <input type="submit" value="ОТПРАВИТЬ" disabled={!formik.isValid || !formik.values.accept}/>
                <ErrorMessage>
                  {(errMessage) => {
                    return (
                      <div className="errors">
                        {Object.keys(errMessage).map(elem => {
                          return (
                            <p key={elem} className='errors-item'><i className="bi bi-exclamation-octagon-fill"></i> {errMessage[elem]}</p>
                          )
                        })}
                      </div>
                    )
                  }}
                </ErrorMessage>
              </Form>
            )
          }
        }
      </Formik>    
    </div>
  )
}
