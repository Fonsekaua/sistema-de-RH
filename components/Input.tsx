'use client'

import { Context } from '@/context/FuncionarioContext'
import { InputType } from '@/types/InputType'
import { FuncionariosType } from '@/types/FuncionariosType'
import { ChangeEvent, useState } from 'react';

export default function Input({
    label,
    name,
    type,
    placeholder
}: InputType) {

    const {
        funcionario,
        handleChangeValueInput,
        erro,
        setErro
    } = Context();
    const handleVerifyValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target
        const regex = /^[A-Za-z]+$/;
        if (type == "text") {
            if (value.length > 0 && !regex.test(value.trim())) {
                setErro('Campo de texto não pode ter numeros!')
            } else {
                setErro("")
            }

        } else if (type == "number") {
            if (value.length > 0 && regex.test(value.trim())) {
                setErro('Campo de numero não pode ter textos!')
            } else {
                setErro("")
            }
        }
    }
    return (
        <label
            htmlFor={name}
            className="flex flex-col gap-0.5"
        >
            <span className={`capitalize ${erro && "text-rose-500"}`}>
                {label}
            </span>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={funcionario[name as keyof FuncionariosType]}
                onChange={(e) => {
                    handleChangeValueInput(e)
                    handleVerifyValue(e)
                }}
                className={`py-2 px-1 bg-gray-900 shadow shadow-gray-800 rounded-sm ${erro && "outline outline-rose-500 text-rose-800"}`}
                required
                min={0}
            />
            {
                <small className='text-rose-500 h-1'>{erro}</small>
            }
        </label>
    );
}