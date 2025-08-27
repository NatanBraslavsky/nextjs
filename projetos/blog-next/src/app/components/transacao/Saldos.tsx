import Saldo from "./Saldo"

const saldos = [
    {nome: 'Entradas', valor: 0},
    {nome: 'Saídas', valor: 0},
    {nome: 'Total', valor: 0},
]

export default function Saldos(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {saldos.map((saldo) => {
                return (
                    <Saldo key={saldo.nome} nome={saldo.nome}  valor={saldo.valor} />
                )
            })}
        </div>
    )   
}