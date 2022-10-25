import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#181818] flex justify-center items-center p-4' >
        <form method='POST' action='https://getform.io/f/1f61d29a-888f-4365-8253-4565a87ad352' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#edfe58] text-[#edfe58]'>Contact</p>
                <p className='text-[#edfe58] py-4'>Submit the form below or email karimahmediphone@gmail.com</p>
            </div>
            <input className='bg-violet-300 p-2'type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-violet-300' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-violet-300 p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-[#edfe58] border-2 rounded-lg border-[#edfe58] bg-violet-300 px-4 py-1 my-8 mx-auto flex items-center
             hover:bg-yellow-500 hover:text-[#edfe58] hover:font-bold'>Submit</button>
        </form>
    </div>
  )
}

export default Contact