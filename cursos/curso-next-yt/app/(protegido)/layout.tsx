const ProtectedLayout = ({ children } : { children: React.ReactNode}) =>{
    return(
        <div>
            <h1>Protected layout</h1>
            {children}
        </div>
    )
}

export default ProtectedLayout;