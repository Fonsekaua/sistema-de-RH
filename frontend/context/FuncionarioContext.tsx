'use client'

import { Children } from "@/types/Children";
import { FuncionarioContextType } from "@/types/FuncionarioContextType";
import { FuncionariosType } from "@/types/FuncionariosType";
import {
    ChangeEvent,
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const FuncionarioContext = createContext<FuncionarioContextType | null>(null);

export const FuncionariosProvider = ({ children }: Children) => {

    const [funcionariosLista, setFuncionariosLista] = useState<FuncionariosType[]>([]);

    const estatico: FuncionariosType = {
        id: '',
        nome: '',
        sobrenome: '',
        cargo: '',
        idade: 0,
        salario: 0,

    }
    const [edit, setEdit] = useState<number | null>(null);
    const [del, setDel] = useState<number | null>(null);
    const [erro,setErro] = useState('')
    const [funcionario, setFuncionario] = useState<FuncionariosType>(estatico);
    const [funcionariosFilterLista, setFuncionariosFilterLista] = useState<FuncionariosType[]>(funcionariosLista);

    const [filtro, setFiltro] = useState<string>('');

    const [modal, setModal] = useState<boolean>(false);
    const handleChangeValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFuncionario(prev => ({
            ...prev,
            [name]: value
        }))

    }
    const handleNullValue = () => {
        setModal(prev => !prev);


        setTimeout(() => {
            setEdit(null);
            setDel(null)
        }, 600);
    }

    const handleFilterEmployee = (id: number) => {
        return funcionariosLista.find(f => f.id === id as number)
    }
    useEffect(() => {
        (() => {
            if (!edit) {
                setFuncionario(estatico);
            }
            const data = handleFilterEmployee(edit as number);
            if (!data) return;
            setFuncionario(data);
        })()
    }, [edit])

    // Buscar funcionários
    useEffect(() => {

        async function buscarFuncionarios() {

            const response = await fetch(
                'http://localhost:8080/funcionarios'
            );

            const data: FuncionariosType[] =
                await response.json();

            setFuncionariosLista(data);
        }

        buscarFuncionarios();

    }, []);

    // Atualizar lista filtrada quando a lista original mudar
    useEffect(() => {

        function atualizarLista() {
            setFuncionariosFilterLista(funcionariosLista);
        }

        atualizarLista();

    }, [funcionariosLista]);





    // Filtrar funcionários
    useEffect(() => {

        function filtrarFuncionarios() {

            setFuncionariosFilterLista(() => {

                if (filtro.length > 0) {

                    return funcionariosLista.filter(
                        funcionario =>
                            funcionario.cargo.toLowerCase() ===
                            filtro.toLowerCase()
                    );

                } else {

                    return funcionariosLista;

                }
            });
        }

        filtrarFuncionarios();

    }, [filtro, funcionariosLista]);

    const cadastrarFuncionario = () => {

    }

    const FuncionariosContextValue: FuncionarioContextType = {

        funcionariosLista,
        setFuncionariosLista,

        funcionariosFilterLista,
        setFuncionariosFilterLista,

        filtro,
        setFiltro,

        modal,
        setModal,

        funcionario,
        handleChangeValueInput,

        edit,
        setEdit,

        del,
        setDel,

        handleNullValue,
        handleFilterEmployee,

        erro,
        setErro
    };

    return (
        <FuncionarioContext.Provider
            value={FuncionariosContextValue}
        >
            {children}
        </FuncionarioContext.Provider>
    );
};

export const Context = () => {

    const ctx = useContext(FuncionarioContext);

    if (!ctx) {
        throw new Error(
            'Context deve estar dentro do provider'
        );
    }

    return ctx;
};