import React from 'react'
export const Poll = ({data}) => {
  
  const title = data.title;
  const  choices = ["MI","RCB"]
  
  return (
    <div className=' bg-purple-700 border border-neutral-900 rounded-2xl w-80 p-2 backdrop-blur-sm shadow-lg transition-all  hover:shadow-slate-500 max-h-60'>
                {/* LOGO AND TITLE */}
                <div className='flex space-x-3'>
                     <div>
                         <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzXk-Es5uSaQxsJbB5PnWfS_3mGLJLpHO-g&s" className='h-20 rounded-xl'></img>
                     </div>
                     <div className='font-bold from-neutral-900'>
                          <div>{title}</div>
                     </div>
                </div>

                {/* OPTIONS OF QUESTIONS  */}
                <div className='mt-4 flex flex-col space-y-2 '>
                  {choices.map((option,index)=>(
                    <div key = {index} className='bg-neutral-500 border border-stone-500 rounded-lg min-h-8 my-auto px-2'> {option} </div>
                  ))} 
                </div>
    </div>
  )
}
