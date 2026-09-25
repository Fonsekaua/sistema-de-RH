'use client'
import { Context } from '@/context/FuncionarioContext'
import { Children } from '@/types/Children'
export default function Modal({children}:Children) {
  const {modal} = Context();
  return (
    <div className={`fixed flex items-center justify-center w-screen h-screen inset-0 transition-all duration-400 bg-gray-900/50 backdrop-blur-xs z-10 ${modal?'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'}`}>
        {children}
    </div>
  )
}
