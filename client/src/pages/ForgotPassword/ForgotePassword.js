import React from 'react'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { Button, Card, Input } from '@nextui-org/react';

export const ForgotePassword = () => {
  return (
    <div>
      <Header />

      <div className=" flex justify-center p-10 ">
        <Card className=" max-w-4xl p-8">
          <h2 className='font-bold text-lg'>Forgot your password?</h2>
          <p className='p-10 text-justify font-medium text-lg	'>Enter your email address or username so we can send you a link to reset your password.
          </p>
          <div>
            <Input variant='underlined' placeholder='Email adresse' />

          </div>

          <div className='pt-8 '>
            <Button color='primary' className='w-full' ><span className='text-sm'>Send reset Link </span></Button>
          </div>



        </Card>




      </div>




    </div>
  )
}
