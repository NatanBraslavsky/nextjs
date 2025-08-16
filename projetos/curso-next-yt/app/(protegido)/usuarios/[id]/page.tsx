interface UsuarioProps {
    params: Promise <{id: string}>
}

const Usuario = async({ params }: UsuarioProps) => {
    const { id } = await params;
    return (
        <div>
            <h1>Usuario com id: {id}</h1>
        </div>
    )
}

export default Usuario;