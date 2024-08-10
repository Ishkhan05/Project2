import React, { useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Link } from 'react-router-dom'
import { boolean, object, string } from "yup"
import classNames from "classnames"
import "./MasterCall.scss"
import { nanoid } from '@reduxjs/toolkit'
import MyContext from '../../../Contexts/context'
import axios from 'axios'

const initialValues = {
  device: "",
  manufacturer: "",
  firstName: "",
  phone: "",
  comment: "",
  accept: false
};

const validationSchema = object({
  device: string().oneOf(["устройство 1","устройство 2","устройство 3","устройство 4","устройство 5"]).required("Выберите устройство!!!"),
  manufacturer: string().oneOf(["производитель 1","производитель 2","производитель 3","производитель 4","производитель 5"]).required("Выберите производителя!!!"),
  firstName: string().min(3).max(12).required("Заполните Ваше имя!!!"),
  phone: string().required("Заполните Ваш телефон!!!"),
  comment: string(),
  accept: boolean().oneOf([true], "Необходимо дать согласие на обработку персональных данных")
})

export default function MasterCall({size = 'small'}) {
  const value = useContext(MyContext)
  const handleSubmit = (values,formik)=>{
    const needMaster = {
      ...values,
      id: nanoid(5)
    }
    axios.post('http://localhost:3000/needMaster', needMaster)
      .then(res => {
        formik.resetForm();
      })
      .finally(value.handleDone())
  }
  return (
    <div className='MasterCall'>
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
              <Form className={classNames ({
                [`${size}`]: true
              })}>
                <label htmlFor="device">
                  <p>Выберите устройство <span>*</span></p>
                  <Field as="select" name="device"> 
                    <option defaultValue="">Выбрать</option>
                    <option value="устройство 1">устройство 1</option>
                    <option value="устройство 2">устройство 2</option>
                    <option value="устройство 3">устройство 3</option>
                    <option value="устройство 4">устройство 4</option>
                    <option value="устройство 5">устройство 5</option>
                  </Field>
                </label>
                <label htmlFor="manufacturer">
                  <p>Выберите производителя <span>*</span></p>
                  <Field as="select"  name="manufacturer"> 
                    <option defaultValue="">Выбрать</option>
                    <option value="производитель 1">производитель 1</option>
                    <option value="производитель 2">производитель 2</option>
                    <option value="производитель 3">производитель 3</option>
                    <option value="производитель 4">производитель 4</option>
                    <option value="производитель 5">производитель 5</option>
                  </Field>
                </label>
                <label htmlFor="firstName">
                  <p>Ваше имя <span>*</span></p>
                  <Field type="text" placeholder='Имя' name='firstName'/>
                </label>
                <label htmlFor="phone">
                  <p>Ваш телефон <span>*</span></p>
                  <Field type="tel"  name='phone' placeholder="+7( __ ) __ - _ - _" pattern="+[0-9]{1}([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
                </label>
                <label htmlFor="comment">
                  <p>Опишите проблему</p>
                  <Field as="textarea"  name="comment" placeholder="Текст сообщения" rows="4" cols="50"/>
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
