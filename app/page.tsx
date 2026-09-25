'use client'
import CardFuncionario from "@/components/Card.Funcionario";
import DeletarFuncionario from "@/components/DeletarFuncionario";
import FormFuncionario from "@/components/Form.Funcionario";
import Modal from "@/components/Modal";
import { Context } from "@/context/FuncionarioContext";
export default function Home() {
  const {funcionariosFilterLista,filtro,setModal, del, setFiltro} = Context()

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
      <section className="container py-5 flex items-center justify-between">
        <h2 className="font-bold text-2xl">Sistema do RH</h2>
        <button className="bg-sky-500 p-1.5 rounded-lg transition-all active:scale-95 cursor-pointer" onClick={() => setModal(prev => !prev)}>
          adicionar funcionario
        </button>
      </section>

      <section className="container flex flex-col gap-5 items-center">
        <div className="bg-gray-800 py-1 px-2 rounded-lg justify-between w-full flex items-center">
          <h2 className="text-xl">
            Funcionário 
          </h2>
          <select name="" id="" className="bg-gray-900 p-2 rounded-lg outline-none" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">Filtrar por cargo</option>
            <option value="advogado">Advogado</option>
            <option value="carpinteiro">Carpinteiro</option>
          </select>
        </div>
         <div className="w-full flex justify-center gap-4.5 flex-wrap">
           {
            funcionariosFilterLista.map(funcionario => (
              <CardFuncionario  key={funcionario.id as number} Funcionarios={funcionario} />
            ))
           }
         </div>
      </section>
    </>
  );
}
