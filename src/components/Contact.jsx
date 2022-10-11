import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Contact</p>
                <p className='py6'>Submit the form below</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/c59fd6de-5d91-4c2f-a8b1-fd92e15b2b0f' method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" id="" placeholder='enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                    '/>
                    <input type="email" name="name" id="" placeholder='enter your email' 
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none
                    '/>
                    <textarea name="message" rows="10" className='p-2 bg-transparent
                    border-2 rounded-md text-white focus:outline-none' placeholder='enter message'>

                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110
                    duration-300'>
                        Submit
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact