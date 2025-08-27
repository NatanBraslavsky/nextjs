export interface SaldoProps{
    nome: string
    valor: number
}

export default function Saldo(props: SaldoProps){
    return(
        <div className=" border border-zinc-300 rounded-lg flex flex-col gap-0.5 px-3 py-2 text-[20px]">
            <p className="font-bold">{props.nome} R$</p>
            <p>{props.valor}</p>
        </div>
    )
}