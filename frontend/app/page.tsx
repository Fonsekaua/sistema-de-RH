'use client'
import CardFuncionario from "@/components/Card.Funcionario";
import DeletarFuncionario from "@/components/DeletarFuncionario";
import FormFuncionario from "@/components/Form.Funcionario";
import Modal from "@/components/Modal";
import ToastError from "@/components/ToastError";
import { Context } from "@/context/FuncionarioContext";
import { useEffect, useState } from "react";
import { MdSentimentDissatisfied } from "react-icons/md";
export default function Home() {
  const { funcionariosFilterLista, filtro, setModal, del, setFiltro, funcionariosLista } = Context()
  const [quantidade, setQuantidade] = useState<boolean>(funcionariosLista.length % 2 == 0);
  useEffect(() => {

  },[funcionariosLista])
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
      <section className="container px-2 py-5 flex items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
          <h2 className="font-bold text-2xl">Sistema do RH</h2>
          <small className=" bg-emerald-500 rounded-full px-2">Funcionarios no sistema: {funcionariosLista.length}</small>
        </div>
        <button className="bg-sky-500 p-1.5 rounded-lg transition-all active:scale-95 cursor-pointer" onClick={() => setModal(prev => !prev)}>
          adicionar funcionario
        </button>
      </section>

      <section className="container px-2 flex flex-col gap-5 items-center">
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
        <div className={`w-full items-center flex ${quantidade ? 'justify-center' : 'justify-between'} gap-4.5 flex-wrap`}>
          {
            funcionariosLista.length > 0 ? (
              funcionariosFilterLista.map((funcionario, index) => (
                <CardFuncionario key={index} Funcionarios={funcionario} />
              ))
            ) : (
              <div className="text-gray-400 translate-y-52 text-2xl flex flex-col items-center gap-4 text-center">
                <MdSentimentDissatisfied className="text-6xl  sm:text-8xl" />
                <h2 className="font-bold text-xl w-xs sm:w-auto sm:text-2xl lg:text-3xl">
                  Nenhum {filtro.toLowerCase() || 'funcionário'} cadastrado em nosso sistema.</h2>
              </div>
            )
          }
        </div>
      </section>
      
    </>
  );
}
