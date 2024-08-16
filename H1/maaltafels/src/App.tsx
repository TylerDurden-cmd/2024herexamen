import { Fragment } from "react/jsx-runtime";

const App = () =>{

  const content: number[] = [1,2,3,4,5,6,7,8,9,10];

  return (
    <Fragment>
      <table>
        {content.map((num:number)=>
        <tr key={num}>
          {content.map((column) =>
          <td>{num * column}</td>
          )}
        </tr>
        )}
      </table>
    </Fragment>
  );
}


export default App;
