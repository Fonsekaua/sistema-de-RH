import React from 'react'
import Input from './Input'
import { Context } from '@/context/FuncionarioContext'
import CancelButton from './CancelButton'

export default function FormFuncionario() {
    const { edit, handleSubmit, funcionario, handleChangeValue } = Context()
    return (
        <form className='bg-gray-950 p-3 rounded-lg w-auto lg:w-lg flex flex-col items-center gap-10' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold text-sky-600'>{edit ? "Editar" : "Cadastrar"} Funcionario</h2>
            <div className='flex flex-col gap-5 w-full'>
                <Input label='Nome' name='nome' placeholder='Digite seu nome...' type='string' />
                <Input label='Sobrenome' name='sobrenome' placeholder='Digite seu sobrenome...' type='string' />
                <div className='flex items-center justify-between *:w-full gap-4'>
                    <Input label='Idade' name='idade' placeholder='Digite sua idade...' type='number' />
                    <Input label='Salario' name='salario' placeholder='Digite seu salário...' type='number' />
                </div>
                <label htmlFor="cargo" className='flex flex-col gap-0.5'>
                    <span>Cargo</span>
                    <select name="cargo" id="" value={funcionario.cargo} className='bg-gray-900 px-0.5 py-2.5 rounded-sm text-white outline-none' onChange={handleChangeValue} >
                        <option value="" className=''>Selecione seu cargo</option>
                        <option value="Advogado">Advogado</option>
                        <option value="Carpinteiro">Carpinteiro</option>
                        <option value="Contador">Contador</option>
                        <option value="Gerente">Gerente</option>
                        <option value="Engenheiro">Engenheiro</option>
                        <option value="Professor">Professor</option>
                    </select>
                </label>
            </div>

            <div className='flex items-center justify-between gap-4 w-full *:transition-all *:active:scale-95 *:cursor-pointer *:w-full *:p-2 *:rounded-sm *:hover:opacity-80'>
                <CancelButton className='bg-rose-500' />
                <button className={`bg-sky-500 `} type='submit'>
                    {edit ? "Editar" : "Cadastrar"}
                </button>
            </div>
        </form>
    )
}
