import React from "react"
import { FuncionariosType } from "./FuncionariosType"

export type FuncionarioContextType = {
    funcionariosLista: FuncionariosType[]
    setFuncionariosLista: React.Dispatch<React.SetStateAction<FuncionariosType[]>>
    funcionariosFilterLista: FuncionariosType[]
    setFuncionariosFilterLista: React.Dispatch<React.SetStateAction<FuncionariosType[]>>

    filtro: string
    setFiltro: React.Dispatch<React.SetStateAction<string>>

    modal: boolean
    setModal:  React.Dispatch<React.SetStateAction<boolean>>

    funcionario: FuncionariosType
    setFuncionario: React.Dispatch<React.SetStateAction<FuncionariosType>>
    handleChangeValue: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void

    edit: number | null
    setEdit: React.Dispatch<React.SetStateAction<number | null>>

        del: number | null
    setDel: React.Dispatch<React.SetStateAction<number | null>>

    handleNullValue: () => void

    handleFilterEmployee: (id: number) => FuncionariosType | undefined
    
    formErro: string 
    setFormErro: (e: string) => void

    handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
}