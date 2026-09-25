'use client'

import { Context } from "@/context/FuncionarioContext"
import CancelButton from "./CancelButton";

export default function DeletarFuncionario() {
    const {del,handleNullValue,handleFilterEmployee} = Context();
    const funcionario = handleFilterEmployee(del as number);
    return (


    <form className="w-full max-w-md rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-2xl">

        <div className="mb-5">
            <h2 className="text-xl font-bold text-white">
                Excluir funcionário
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                Tem certeza que deseja excluir este funcionário?
                Essa ação não poderá ser desfeita.
            </p>
        </div>

        <div className="rounded-lg bg-gray-800 p-4 mb-6">
            <p className="font-semibold text-white">
                {funcionario?.nome}
            </p>

            <p className="text-sm text-gray-400">
                {funcionario?.cargo}
            </p>
        </div>

        <div className="flex justify-end gap-3 *:cursor-pointer *:transition-all *:active:scale-95 *:outline-none">

            <CancelButton className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-gray-700" />
            <button
                type="submit"
                className="rounded-lg bg-rose-500  px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
            >
                Excluir
            </button>

        </div>

    </form>


  )
}
