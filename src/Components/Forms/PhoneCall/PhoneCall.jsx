import React, { useContext, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { object, string, boolean } from 'yup'
import { nanoid } from '@reduxjs/toolkit'
import MyContext from '../../../Contexts/context'
import "./PhoneCall.scss"
import axios from 'axios'

const initialValues = {
  firstName: "",
  phone: "",
  accept: false
}

const validationSchema = object({
  firstName: string().min(3).max(12).required("Заполните Ваше имя!!!"),
  phone: string().required("Заполните Ваш телефон!!!"),
  accept: boolean().oneOf([true], "Необходимо дать согласие на обработку персональных данных")
})


export default function PhoneCall() {
  const value = useContext(MyContext)
  const handleSubmit = (values,formik)=>{
    const needPhoneCall = {
      ...values,
      id: nanoid(5)
    }
    axios.post('http://localhost:3000/needCall', needPhoneCall)
      .then(res => {
        formik.resetForm();
      })
      .finally(value.consultationIsDone())
  }
  
  return (
    <div className='PhoneCall'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {
          (formik)=>{
            return(
              <Form>
                <label htmlFor="firstName">
                  <p>Ваше имя <span>*</span></p>
                  <Field type="text" placeholder='Имя' name='firstName'/>
                </label>
                <label htmlFor="phone">
                  <p>Ваш телефон <span>*</span></p>
                  <Field type="tel"  name='phone' placeholder="+7( __ ) __ - _ - _" pattern="+[0-9]{1}([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
                </label>
                <label htmlFor="accept" className='accept'>
                  <Field type='checkbox' id="accept" name='accept' />
                  <p>Даю согласие на обработку моих персональных данных и принимаю <Link to="/">политику конфиденциальности</Link></p>
                </label>
                <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" disabled={!formik.isValid || !formik.values.accept}/>
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
