import { FuncionariosType } from "@/types/FuncionariosType";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});


export const buscarTodosFuncionarios = async () => {
    try {

        const response = await api.get("/funcionarios");
        const data:FuncionariosType[] = response.data;

        return data;
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            console.log(error.response?.status);
        } else {
            console.log("Erro desconhecido");
        }

    }
}
export const buscarFuncionarioID = async (id: number) => {
    try {

        const response = await api.put(`/funcionario?id=${id}`);
        const data = response.data;

        return data;
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            console.log(error.response?.status);
        } else {
            console.log("Erro desconhecido");
        }

    }
}
export const adicionarFuncionario = async (
    funcionario: FuncionariosType
) => {
    try {
        const response = await api.post(
            "/funcionarios",
            funcionario
        );

        return response.data;

    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.log("Erro:", error.response?.data);
            console.log("Status:", error.response?.status);
        } else {
            console.log("Erro desconhecido:", error);
        }
    }
}
export const atualizarFuncionario = async (id:number, funcionario: FuncionariosType) => {
    try {

        const response = await api.put(`/funcionarios?id=${id}`, funcionario);
        const data =await response.data;
        console.log("data:",data)
        return data;
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            console.log(error.response?.status);
        } else {
            console.log("Erro desconhecido");
        }

    }
}

export const deletarFuncionario = async (id: number) => {
    try {

        const response = await api.delete(`/funcionarios?id=${id}`);
        const data = response.data;

        return data;
    } catch (error) {

        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            console.log(error.response?.status);
        } else {
            console.log("Erro desconhecido");
        }

    }
}