import React, { useEffect, useState } from 'react'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism.js CSS for styling

const DisplayRunContent = (arr) => {
    const [runDescription, setRunDescription] = useState("")
    const [stdout, setStdout] = useState("")
    const [compile_output, setCompile_output] = useState("")
    const [message, setMessage]= useState("")

    useEffect(() => {
      Prism.highlightAll();
    }, []);

    useEffect(()=>{
        setRunDescription(arr.arr.runDescription)
        setStdout(arr.arr.stdout)
        setCompile_output(arr.arr.compile_output)
        setMessage(arr.arr.message)
        
    },[arr.arr.compile_output, arr.arr.message, arr.arr.runDescription, arr.arr.stdout])
    
    console.log("--run--", arr)

  
    return (
        <div>
            <h1 className={`flex font-bold text-lg mb-3 ${runDescription === "Accepted" ? "text-green-500":"text-red-500"}`}>
                {runDescription}
            </h1>
              {stdout && <div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>Output: </p>
                <p className='pl-2 font-semibold text-sm'>
                  {stdout}
                </p>
              </div>}
              {
                compile_output!=="" && <div className='flex bg-white rounded-lg mb-3 h-40 '>
                  <textarea value={compile_output} 
                    spellcheck="false"
                    className='disabled 
                      pl-2 font-semibold text-sm 
                      border border-red-500
                      resize-none border rounded-lg w-full focus:border-2 focus:border-red-500 
                      outline-none' 
                      
                      />
                    
                </div>
              }
              {message&&<div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>message: </p>
                <p className='pl-2 font-semibold text-sm'>{message}</p>
              </div>}
              
        </div>
    )
}

export default DisplayRunContent