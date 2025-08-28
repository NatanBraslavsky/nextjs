interface ThProps{
    children:string
}

function Th({children}: ThProps){
    return(
        <th className="text-start text-2xl border-b border-b-white">{children}</th>
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
                <tbody>
                    <td>Salario</td>
                    <td>1500</td>
                    <td>✅</td>
                    <td></td>
                </tbody>
            </table>
        </div>
    )
}