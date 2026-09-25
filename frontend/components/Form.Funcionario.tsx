import React from 'react'
import Input from './Input'
import { Context } from '@/context/FuncionarioContext'
import CancelButton from './CancelButton'

export default function FormFuncionario() {
const {edit} = Context()
  return (
    <form className='bg-gray-950 p-3 rounded-lg w-lg flex flex-col items-center gap-10'> 
        <h2 className='text-2xl font-bold text-sky-600'>{edit?"Editar":"Cadastrar"} Funcionario</h2>
        <div className='flex flex-col gap-5 w-full'>
            <Input label='Nome' name='nome' placeholder='Digite seu nome...' type='string'/>
            <Input label='Sobrenome' name='sobrenome' placeholder='Digite seu sobrenome...' type='string'/>
            <Input label='Idade' name='idade' placeholder='Digite sua idade...' type='number'/>
            <Input label='Salario' name='salario' placeholder='Digite seu salário...' type='number'/>
            <label htmlFor="cargo" className='flex flex-col gap-0.5'>
                <span>Cargo</span>
                <select name="cargo" id="" className='bg-gray-900 px-0.5 py-2.5 rounded-sm text-white outline-none' required>
                    <option value="" className=''>Selecione seu cargo</option>
                    <option value="advogado">advogado</option>
                    <option value="carpinteiro">carpinteiro</option>
                </select>
            </label>
        </div>

        <div className='flex items-center justify-between w-full *:transition-all *:active:scale-95 *:cursor-pointer *:w-full gap-2 *:p-2 *:rounded-sm *:hover:opacity-80'>
            <CancelButton  className='bg-rose-500'/>
            <button className='bg-sky-500' type='submit'>
                {edit?"Editar":"Cadastrar"}
            </button>
        </div>
    </form>
  )
}
