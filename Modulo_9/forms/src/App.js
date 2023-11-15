import React, { useState } from 'react';
import FormAccount from './Components/FormAccount/FormAccount';
import FormProduct from './Components/FormProduct/FormProduct';
import AccountValidation from './Components/Validation/AccountValidation';
import ProductValidation from './Components/Validation/ProductValidation';
import './App.css';

function App() {
  const [isAccEmpty, setIsAccEmpty] = useState(false)
  const [isProdEmpty, setIsProdEmpty] = useState(false)
  const [isEqual, setIsEqual] = useState(true)
  const [validateCPF, setValidateCPF] = useState('')
  const [isCpfValid, setIsCpfValid] = useState(true)

  return (
    <div className="App">
      <h1>Formulários</h1>
      <div id='content'>
        <div id='form-account'>
          <FormAccount setIsAccEmpty={setIsAccEmpty} setIsEqual={setIsEqual}/>
          <AccountValidation 
            isAccEmpty={isAccEmpty}
            isEqual={isEqual}
          />
        </div>
        <div id='form-product'>
          <FormProduct setIsProdEmpty={setIsProdEmpty} validateCPF={validateCPF} setValidateCPF={setValidateCPF} setIsCpfValid={setIsCpfValid}/>
          <ProductValidation
            isProdEmpty={isProdEmpty}
            validateCPF={validateCPF}
            isCpfValid={isCpfValid}
          />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;