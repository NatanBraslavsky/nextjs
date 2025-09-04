import { IoTrashOutline } from "react-icons/io5";

interface ThProps{
    children:string
}

function Th({children}: ThProps){
    return(
        <th className="text-start text-[18px] sm:text-2xl pb-5">{children}</th>
    )
}

export default function Tabela(){
    return(
        <div className="flex justify-center w-full mt-10">
            <table className="w-[90%]">
                <thead>
                    <tr>
                        <Th>Descrição</Th>
                        <Th>Valor</Th>
                        <Th>Tipo</Th> 
                    </tr>
                </thead>
                <tbody className="text-[14px] sm:text-[1.1rem] text-zinc-400">
                    <td className="pb-2">Salario</td>
                    <td className="pb-2">R$1500</td>
                    <td className="pb-2 pl-2 sm:pl-3">✅</td>
                    <td className="pb-2"><IoTrashOutline className="hover:cursor-pointer w-5 h-5 sm:w-7 sm:h-7"/></td>
                </tbody>
                <tbody className="text-[14px] sm:text-[1.1rem] text-zinc-400">
                    <td>Salario</td>
                    <td>R$1500</td>
                    <td className="pl-2 sm:pl-3">❌</td>
                    <td ><IoTrashOutline className="hover:cursor-pointer w-5 h-5 sm:w-7 sm:h-7"/></td>
                </tbody>
            </table>
        </div>
    )
}