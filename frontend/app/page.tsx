'use client'
import CardFuncionario from "@/components/Card.Funcionario";
import DeletarFuncionario from "@/components/DeletarFuncionario";
import FormFuncionario from "@/components/Form.Funcionario";
import Modal from "@/components/Modal";
import ToastError from "@/components/ToastError";
import { Context } from "@/context/FuncionarioContext";
import { BiSad } from "react-icons/bi";
import { FaSadTear } from "react-icons/fa";
import { MdSentimentDissatisfied } from "react-icons/md";
export default function Home() {
  const { funcionariosFilterLista, filtro, setModal, del, setFiltro, funcionariosLista } = Context()

  return (
    <>
      <Modal>
        {
          del ? (
            <DeletarFuncionario />
          ) : (
            <FormFuncionario />
          )
        }
      </Modal>

      <ToastError />
      <section className="container py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-2xl">Sistema do RH</h2>
          <small className=" bg-emerald-500 rounded-full px-2">Funcionarios no sistema: {funcionariosLista.length}</small>
        </div>
        <button className="bg-sky-500 p-1.5 rounded-lg transition-all active:scale-95 cursor-pointer" onClick={() => setModal(prev => !prev)}>
          adicionar funcionario
        </button>
      </section>

      <section className="container flex flex-col gap-5 items-center">
        <div className="bg-gray-800 py-1.5 px-2 rounded-lg justify-between w-full flex items-center">
          <h2 className="text-xl">
            Funcionário
          </h2>
          <select name="" id="" className="bg-gray-900 p-2 rounded-lg outline-none text-center" value={filtro} onChange={(e) => {
            setFiltro(e.target.value)
          }}>
            <option value="">Filtrar por cargo</option>
            <option value="Advogado">Advogado</option>
            <option value="Carpinteiro">Carpinteiro</option>
            <option value="Contador">Contador</option>
            <option value="Gerente">Gerente</option>
            <option value="Engenheiro">Engenheiro</option>
            <option value="Professor">Professor</option>
          </select>
        </div>
        <div className="w-full items-center flex justify-center gap-4.5 flex-wrap">
          {
            funcionariosLista.length > 0 ? (
              funcionariosFilterLista.map((funcionario, index) => (
                <CardFuncionario key={index} Funcionarios={funcionario} />
              ))
            ) : (
              <div className="text-gray-400 translate-y-52 text-2xl flex flex-col items-center gap-4">
                <MdSentimentDissatisfied size={100} />
                <h2 className="font-bold">Nenhum funcionario cadastrado em nosso sistema.</h2>
              </div>
            )
          }
        </div>
      </section>
    </>
  );
}
