'use client'
import { useEffect, useState } from 'react'
import { FuncionariosType } from '@/types/FuncionariosType';
import { Context } from '@/context/FuncionarioContext';

type Props = {
    Funcionarios: FuncionariosType
}
export default function CardFuncionario({ Funcionarios }: Props) {
    const [style,setStyle] = useState('');
    const {setEdit,setModal,setDel} = Context();
    const {id, nome, sobrenome, cargo, salario } = Funcionarios
    useEffect(() => {
        (() => {
            switch(cargo.toLowerCase()) {
                case 'advogado': 
                    setStyle('border-sky-500 text-sky-500')
                    break;
                case 'carpinteiro': 
                    setStyle('border-orange-500 text-orange-500')
            }
        })()
    },[])
    return (
        <article className={`bg-gray-800 p-4 w-60 h-72 rounded-lg flex flex-col relative items-center border ${style}`} >

            <div className="w-full flex flex-col gap-4 mt-2">

                <div className="text-center">
                    <span className="text-gray-400 text-sm">Nome</span>
                    <p className="text-white text-lg font-semibold">
                        {nome} {sobrenome}
                    </p>
                </div>

                <div className="flex justify-between border-t border-b border-gray-700 py-3">
                    <div>
                        <span className="text-gray-400 text-sm">Idade</span>
                        <p className="text-white font-medium">25 anos</p>
                    </div>

                    <div className="text-right">
                        <span className="text-gray-400 text-sm">Salário</span>
                        <p className="text-emerald-400 font-semibold">
                            {salario.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <span className="text-gray-400 text-sm">Cargo</span>
                <p className={`text-lg font-semibold border-none ${style}`}>
                    {cargo}
                </p>
            </div>
            <div className='text-white flex items-center gap-2 *:border *:rounded-lg *:cursor-pointer *:transition-all *:active:scale-95 *:px-3 py-4 *:w-full w-full'>
                <button className='bg-rose-700 border-rose-500'onClick={() => {
                    setDel(id as number)
                    setModal(prev => !prev)
                }}>
                    deletar 
                </button>
                <button className='bg-emerald-500 border-emerald-400' onClick={() => {
                    setEdit(id as number)
                    setModal(prev => !prev)
                }}>
                    editar
                </button>
            </div>
        </article>
    );
}
