import { Fragment } from "react/jsx-runtime";

const App = () => {
  const random : number = Math.random();
  const getal1 : number = Math.floor(Math.random() * 10);
  const getal2 : number = Math.floor(Math.random() * 10);

  const som = () =>{
    return getal1 + getal2;
  }
  const vermenigvuldiging = () => {
    return getal1 * getal2;
  }

  if(random > 0.5){
    return (
      <Fragment>
        <h1>Labo 1: Expressies</h1>
        <div>Random: {random}</div>
        <div>Getal 1: {getal1}</div>
        <div>Getal 2: {getal2}</div>
      <div>{getal1} + {getal2} = {som()}</div>
      </Fragment>
    )
  }
  else {
  return (
      <Fragment>
        <h1>Labo 1: Expressies</h1>
        <div>Random: {random}</div>
        <div>Getal 1: {getal1}</div>
        <div>Getal 2: {getal2}</div>
          <div>{getal1} * {getal2} = {vermenigvuldiging()}</div>
      </Fragment>
  );
}
}

export default App;