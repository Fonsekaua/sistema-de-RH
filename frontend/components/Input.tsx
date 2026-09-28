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
        handleChangeValue,
    } = Context();
    const [erro, setErro] = useState('');
    const regexText = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexNumber = /^\d+$/;
    const handleVerifyValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, type } = e.target;

        if (value.length === 0) {
            setErro("");
            return;
        }

        if (type === "text") {
            if (!regexText.test(value.trim())) {
                setErro("Campo com caracteres inválidos!");
            } else {
                setErro("");
            }
        }

        else if (type === "number") {
            if (!regexNumber.test(value.trim())) {
                setErro("Campo com caracteres inválidos!");
            } else {
                setErro("");
            }
        }
    };
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
                    handleChangeValue(e)
                    handleVerifyValue(e)
                }}
                className={`py-2 px-1 bg-gray-900 shadow shadow-gray-800 rounded-sm ${erro && "outline outline-rose-500 text-rose-800"}`}

                min={0}
            />
            {
                <small className='text-rose-500 h-1'>{erro}</small>
            }
        </label>
    );
}