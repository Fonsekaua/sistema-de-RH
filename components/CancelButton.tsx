'use client'

import { Context } from "@/context/FuncionarioContext"

type Props = {
    className: string
}
export default function CancelButton({className}: Props) {
    const {handleNullValue} = Context();
    return (
   <button className={className} type='button' onClick={handleNullValue}>
        Cancelar
   </button>
  )
}
