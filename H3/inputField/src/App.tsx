import { useState } from "react";

const InputField = () => {
  const [inputField,SetInputField] = useState<string>("");
  return (
    <>
    <input type="text" value={inputField} onChange={((e)=> SetInputField(e.target.value))}/>
    <input type="text" value={inputField} onChange={((e)=> SetInputField(e.target.value))}/>
    <input type="text" value={inputField} onChange={((e)=> SetInputField(e.target.value))}/>
    <input type="text" value={inputField} onChange={((e)=> SetInputField(e.target.value))}/>
    <input type="text" value={inputField} onChange={((e)=> SetInputField(e.target.value))}/>
    </>
  );
}

const App = () => {
  return (
    <>
    <InputField/>
    </>
  );
}

export default App;