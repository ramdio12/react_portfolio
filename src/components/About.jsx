import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b 
    from-gray-500 to-black text-white'>

    <div className="max-w-screen-lg p-4 mx-auto flex 
    flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Accusantium pariatur
              doloremque enim! Dolor explicabo tenetur
               aliquam quisquam vitae molestiae saepe, 
               consectetur assumenda architecto autem unde 
               nostrum facilis iure tempora sapiente?
        </p>
        <br/>
        <p className='text-xl'>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. 
             Voluptas corporis explicabo 
             assumenda eius laudantium esse,
              placeat ab odit maiores sunt 
              reiciendis omnis at ipsum repellendus
               fugit accusamus qui. Dolore, quidem.</p>
    </div>

    </div>
  )
}

export default About