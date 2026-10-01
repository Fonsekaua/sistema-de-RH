'use client'

import { Context } from "@/context/FuncionarioContext"
import { useEffect, useState } from "react";

export default function ToastError() {
    const {formErro} = Context();
    const [status,setStatus] = useState(false);
    useEffect(() => {
      (() => {
        if(formErro){ 
          setStatus(true)
        
        setTimeout(() => {
          setStatus(false)
        }, 3000)
      }
      })()
    },[formErro])
  return (
    <div className={`w-sm bg-gray-950 h-48 rounded-lg fixed z-10 top-10 flex flex-col items-center justify-center text-center transition-all duration-800 p-4 gap-2 ${status?"translate-y-0 opacity-100":"-translate-y-96 opacity-0"}`}>
        <div className='text-red-600 font-extralight flex flex-col items-center'>
            <span className='w-14 h-14 flex items-center justify-center rounded-full border-2 text-red-600 text-2xl'>
            X 
        </span>
        <p className='text-xl font-medium'>Ocorreu um erro</p>
        </div>

        <p className='text-mist-300'>{formErro}</p>
    </div>
  );
}
