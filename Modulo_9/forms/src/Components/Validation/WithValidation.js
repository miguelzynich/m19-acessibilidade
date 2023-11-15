export function withValidation(Component) {
    return({isAccEmpty, isProdEmpty, isEqual, isCpfValid}) => {
        const parsedEqual = !isEqual? (<p>As senhas não conferem!</p>) : ""
        const parsedAccEmpty = isAccEmpty? (<p>Preencha todos os campos!</p>) : ""
        const contentProduct = isProdEmpty? (<p>Preencha todos os campos!</p>) : ""

        const parsedCPF = isProdEmpty? "" : isCpfValid? "" : (<p>CPF inválido!</p>) // a mensagem de erro só irá ser mostrada caso o usuário não tenha enviado o formulário e o cpf seja inválido.

        return(
            <Component 
            parsedAccEmpty={parsedAccEmpty}
            parsedEqual={parsedEqual}
            contentProduct={contentProduct}
            parsedCPF={parsedCPF}
            />
        )
    }
}