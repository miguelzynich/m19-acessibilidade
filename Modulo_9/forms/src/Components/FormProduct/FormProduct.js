import React, { useState } from 'react'
import './FormProduct.css'

function FormProduct({ setIsProdEmpty, setIsCpfValid}) {
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [product, setProduct] = useState('')

     //fonte do código abaixo: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
     //função feita para checar se o CPF é valido ou não
     const testCPF = (strCPF) => {
        let Soma;
        let Resto;
        let i;
      
        Soma = 0;
        if (strCPF === "00000000000") return false;
      
        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      
        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10))) return false;
      
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
      
        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
      
        return true;
    };

    const handleChange = (event) => {
        const {id, value} = event.target

        switch(id){
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'cpf':
                setCPF(value)
                setIsCpfValid(false)
                break
            case 'product':
                setProduct(value.toString())
                break
            default:
                console.log("Campo não encontrado!")
                break
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setCPF('')
        setProduct('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0 || email.length === 0 || cpf.length === 0 || product.length === 0){
            setIsProdEmpty(true)
            setIsCpfValid(false)
        } else {
            setIsProdEmpty(false)
            if (cpf.length >= 11) { //a função do teste cpf só pode ser acessada se o cpf tiver 11 caracteres, se não o programa da erro
                if (testCPF(cpf)) {
                    setIsCpfValid(true)
                    resetForm()
                } else {
                    setIsCpfValid(false)
                }
            }
        }
    }

    return (
        <form>
            <div className='form product'>
                <div className="field name">
                    <label htmlFor="name">Nome:</label>
                    <input onChange={handleChange} value={name} type="text" id='name'/>
                </div>
                <div className="field email">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={email} type="text" id='email'/>
                </div>
                <div className="field cpf">
                    <label htmlFor="cpf">CPF:</label>
                    <input maxLength={11} onChange={handleChange} value={cpf} type="text" id='cpf'/>
                </div>
                <div className='field product'>
                    <label htmlFor="product">Produto:</label>
                    <select id='product' value={product} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Computador">Computador</option>
                        <option value="Celular">Celular</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Notebook">Notebook</option>
                    </select>
                </div>
                
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}

export default FormProduct;