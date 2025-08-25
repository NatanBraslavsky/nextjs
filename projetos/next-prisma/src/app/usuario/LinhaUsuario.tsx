import { Usuario } from "@/core/model/Usuario"
import Image from "next/image"

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
    return (
        <div className="bg-zinc-900 flex items-center gap-5 p-4 rounded-md">
            <Image 
                src="https://avatar.iran.liara.run/public" width={50} height={50} className="rounded-full" 
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-bold">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}