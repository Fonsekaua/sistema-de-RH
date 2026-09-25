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
    handleChangeValueInput: (e: React.ChangeEvent<HTMLInputElement>) => void

    edit: number | null
    setEdit: React.Dispatch<React.SetStateAction<number | null>>

        del: number | null
    setDel: React.Dispatch<React.SetStateAction<number | null>>

    handleNullValue: () => void

    handleFilterEmployee: (id: number) => FuncionariosType | undefined

    erro: string 
    setErro: (e: string) => void
}