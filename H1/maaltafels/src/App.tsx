import { Fragment } from "react/jsx-runtime";

const App = () =>{

  const content: number[] = [1,2,3,4,5,6,7,8,9,10];
  const multiplier:number[] = [];

  for(let i = 0; i < content.length;i++){
    for(let j = i; j < content.length; j+2){
      console.log(j)
    }
  }

  return (
    <Fragment>
      <table>
        {content.map((num:number)=>
        <tr key={num}>
          <td>{num}
          </td>
        </tr>
        )}
      </table>
    </Fragment>
  );
}


export default App;
