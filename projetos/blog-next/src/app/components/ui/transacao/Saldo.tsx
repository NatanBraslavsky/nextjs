export interface SaldoProps{
    nome: string
    valor: number
}

export default function Saldo(props: SaldoProps){
    return(
        <div className="border rounded-lg flex flex-col gap-0.5 px-3 py-2 text-[20px] max-sm:py-1">
            <p className="font-bold max-sm:text-[18px]">{props.nome} R$</p>
            <p className="max-sm:text-[14px]">{props.valor}</p>
        </div>
    )
}