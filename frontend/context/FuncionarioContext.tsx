'use client'

import { adicionarFuncionario, atualizarFuncionario, buscarTodosFuncionarios, deletarFuncionario } from "@/services/apiServices";
import { Children } from "@/types/Children";
import { FuncionarioContextType } from "@/types/FuncionarioContextType";
import { FuncionariosType } from "@/types/FuncionariosType";
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const FuncionarioContext = createContext<FuncionarioContextType | null>(null);

export const FuncionariosProvider = ({ children }: Children) => {

    const [funcionariosLista, setFuncionariosLista] = useState<FuncionariosType[]>([]);

    const estatico: FuncionariosType = {
        id:"",
        nome: '',
        sobrenome: '',
        cargo: '',
        idade: '',
        salario: '',

    }
    const [edit, setEdit] = useState<number | null>(null);
    const [del, setDel] = useState<number | null>(null);
    const [funcionario, setFuncionario] = useState<FuncionariosType>(estatico);
    const [funcionariosFilterLista, setFuncionariosFilterLista] = useState<FuncionariosType[]>(funcionariosLista);
    const [formErro, setFormErro] = useState('');
    const [filtro, setFiltro] = useState<string>('');

    const [modal, setModal] = useState<boolean>(false);
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        return funcionariosLista.find(f => Number(f.id) === id)
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

    useEffect(() => {
        (() => {
            setTimeout(() => {
                setFormErro('')
            }, 3000);
        })()
    }, [formErro])
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormErro("");
        const {id, ...verificados} = funcionario;
        const possuiCampoVazio = Object.values(verificados).some(
            valor => valor === "" || valor === null || valor === undefined
        );

        if (possuiCampoVazio) {
            setFormErro("Campos em branco!");
            return;
        }

        const textRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        const numberRegex = /^\d+$/;

        if (!textRegex.test(funcionario.nome.trim())) {
            setFormErro("Nome não pode possuir números ou caracteres especiais");
            return;
        }

        if (!textRegex.test(funcionario.sobrenome.trim())) {
            setFormErro("Sobrenome não pode possuir números ou caracteres especiais");
            return;
        }

        if (!numberRegex.test(funcionario.salario.toString())) {
            setFormErro("Salário não pode possuir caracteres especiais ou letras");
            return;
        }

        if (Number(funcionario.salario) < 0) {
            setFormErro("Salário não pode ser menor que zero");
            return;
        }

        if (!numberRegex.test(funcionario.idade.toString())) {
            setFormErro("Idade não pode possuir caracteres especiais ou letras");
            return;
        }

        if (Number(funcionario.idade) < 18) {
            setFormErro("Funcionário não pode ter menos de 18 anos");
            return;
        }

        if (funcionario.nome.trim() === funcionario.sobrenome.trim()) {
            setFormErro("Nome e sobrenome não podem ser iguais");
            return;
        }
        if (edit) {
            const funcionarioEditado = await atualizarFuncionario(edit, funcionario);

            if (funcionarioEditado) {
                setFuncionariosLista(prev =>
                    prev.map(f =>
                        Number(f.id) === edit ? funcionario : f
                    )
                );
            }
            setEdit(null)

        } else {
            const {id, ...resto} = funcionario;
            const novoUsuario = await adicionarFuncionario(resto);
            
            if (novoUsuario) {
                setFuncionariosLista(prev => [
                    ...prev, novoUsuario
                ])
                setFuncionario(estatico);
            }
        }
        setModal(prev => !prev);

    };

    const handleDelete = async (id: number) => {
        const funcionarioDeletado = await deletarFuncionario(id);
        if (funcionarioDeletado) {
            setFuncionariosLista(prev => {
                return prev.filter(e => Number(e.id) != id)
            })
            setModal(prev => !prev);
            handleNullValue()
        }
    }
    useEffect(() => {

        async function buscarFuncionarios() {
            const funcionarios = await buscarTodosFuncionarios();
            if (!funcionarios) return;
            setFuncionariosLista(funcionarios);
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

    const FuncionariosContextValue: FuncionarioContextType = {

        funcionariosLista,
        setFuncionariosLista,

        funcionariosFilterLista,
        setFuncionariosFilterLista,

        filtro,
        setFiltro,

        modal,
        setModal,

        handleDelete,

        funcionario,
        setFuncionario,
        handleChangeValue,

        edit,
        setEdit,

        del,
        setDel,

        handleNullValue,
        handleFilterEmployee,

        formErro,
        setFormErro,

        handleSubmit
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