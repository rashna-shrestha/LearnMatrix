import React, { useState } from 'react'

function ForgetPassword() {
  const [step,setStep] = useState(1)
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 '>
      {/* step-1 */}
   {step ==1 && <div className='bg-white shadow-md rounded-xl p-8 max-w-md w-full '>
         <h2 className='text-2xl font-bold mb-6 text-center text-gray-800 '>Forget Your Password</h2> 
         <form className='space-y-4'> 
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700 '>Enter your email address</label>
            <input id='email' type="text" className='my-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[black]' placeholder='you@example.com' required/>
          </div>
          <button className='w-full bg-[black] hover:bg-[#4b4b4b] text-white py-2 px-4 rounded-md font-medium  cursor-pointer '>Send OTP</button>
         </form>

    </div>}

    {/* step-2 */}
   {step ==2 && <div>

    </div>}

  {/* step-3 */}
   {step ==3 && <div>

    </div>}

    </div>
  )
}

export default ForgetPassword