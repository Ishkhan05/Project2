import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { object, string } from 'yup'
import { nanoid } from '@reduxjs/toolkit'
import moment from "moment"
import "./MessageUs.scss"
import axios from 'axios'

const initialValues = {
  name: "",
  email: "",
  message: ""
}

const validationSchema = object({
  name: string().min(3).required("Заполните Ваше имя!!!"),
  email: string().required("Заполните Ваш e-mail!!!"),
  message: string().required("Заполните поле Сообщение!!!")
})

export default function MessageUs() {
  const handleSubmit = (values,formik)=>{
    const message = {
      ...values,
      id: nanoid(5),
      createdAt: moment().format('L')
    }
    axios.post('http://localhost:3000/messageUs', message)
      .then(res => {
        formik.resetForm();
      })
  }
  return (
    <div className='MessageUs'>
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
                <label htmlFor="name">
                  <p>Ваше имя <span>*</span></p>
                  <Field type="text" placeholder='Имя' name='name'/>
                </label>
                <label htmlFor="email">
                  <p>Ваш e-mail <span>*</span></p>
                  <Field type="email"  name='email' placeholder="E-mail"/>
                </label>
                <label htmlFor="message">
                  <p>Сообщение <span>*</span></p>
                  <Field as="textarea"  name="message" placeholder="Текст сообщения" rows="4" cols="50"/>
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

