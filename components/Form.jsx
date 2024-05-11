'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import Image from 'next/image'
import ImageForm from '../assets/amico.svg'
import * as Yup from 'yup'

export const ContactForm = () => {
  return (
    <div className='h-auto w-full py-10 px-8 md:px-[50px] 2xl:px-[90px] flex flex-col md:flex-row  justify-between items-center'>
      <div className='flex w-full md:w-[50%] justify-center items-center h-full'>
        <div className='w-full md:w-[445px] h-full flex flex-col justify-center items-center gap-[40px]'>
          <h2 className='text-[24px] text-[#142e38]'>Cotiza ahora tu nuevo espacio</h2>
          <Formik
            initialValues={{ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' }}
            validationSchema={Yup.object({
              nombre: Yup.string()
                .max(20, 'Máximo 20 caracteres')
                .required('Campo requerido'),
              apellido: Yup.string()
                .max(20, 'Máximo 20 caracteres')
                .required('Campo requerido'),
              email: Yup.string().email('Dirección de email inválida')
                .required('Campo requerido'),
              telefono: Yup.string().length(10, 'El número debe tener 10 dígitos').matches(/^[0-9]*$/, 'Solo puede contener números')
                .required('Campo requerido'),
              mensaje: Yup.string()
                .max(100, 'Máximo 100 caracteres')
                .required('Campo requerido')
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
              setSubmitting(false)
            }}
          >
            <Form className='w-full h-auto flex flex-col justify-start items-center gap-[30px]'>
              <div className='flex flex-col md:flex-row w-full justify-center gap-7 items-start'>
                <div className='flex flex-col w-full'>
                  <label htmlFor='nombre' className='text-[#142e38] text-[16px]'>Nombre *</label>
                  <Field name='nombre' type='text' className='bg-[#2c8093] rounded-[5px] h-[45px] md:h-[35px] text-[#f0fbfb] pl-1.5 text-[16px]' />
                  <ErrorMessage name='nombre' component='p' className='text-red-500' />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='apellido' className='text-[#142e38] text-[16px]'>Apellido *</label>
                  <Field name='apellido' type='text' className='bg-[#2c8093] rounded-[5px] h-[45px] md:h-[35px] text-[#f0fbfb] pl-1.5 text-[16px]' />
                  <ErrorMessage name='apellido' component='p' className='text-red-500' />
                </div>
              </div>

              <div className='flex w-full flex-col md:flex-row justify-center gap-7 items-start'>
                <div className='flex flex-col w-full'>
                  <label htmlFor='email' className='text-[#142e38] text-[16px]'>Email *</label>
                  <Field name='email' type='email' className='bg-[#2c8093] rounded-[5px] h-[45px] md:h-[35px] text-[#f0fbfb] pl-1.5 text-[16px]' />
                  <ErrorMessage name='email' component='p' className='text-red-500' />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='telefono' className='text-[#142e38] text-[16px]'>Teléfono *</label>
                  <Field name='telefono' type='phone' className='bg-[#2c8093] rounded-[5px] h-[45px] md:h-[35px] text-[#f0fbfb] pl-1.5 text-[16px]' />
                  <ErrorMessage name='telefono' component='p' className='text-red-500' />
                </div>
              </div>

              <div className='flex flex-col w-full'>
                <label htmlFor='mensaje' className='text-[#142e38] text-[16px]'>Mensaje *</label>
                <Field name='mensaje' component='textarea' rows='5' className='bg-[#2c8093] rounded-[5px] text-[#f0fbfb] pl-1.5 text-[16px] resize-none' />
                <ErrorMessage name='mensaje' component='p' className='text-red-500' />
              </div>

              <button type='submit' className='w-auto h-auto py-1.5 px-11 md:px-8 text-[16px] bg-[#142e38] text-[#f0fbfb] rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>Enviar</button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className='h-full w-full md:w-[50%] flex justify-center items-center'>
        <Image src={ImageForm} alt='Image form' width='auto' height='auto' />
      </div>
    </div>
  )
}
