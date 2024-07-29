interface Students{
  id:number,
  naam:string,
  leeftijd:number,
}

const App = () => {
  const lijstVanGetallen : number[] = [3,3,5,2,1,4,6]

  const objectStudents: Students [] =[
    {
      id:0,
      naam:"Josh",
      leeftijd:23,
    },{
      id:0,
      naam:"jeff",
      leeftijd:28,
    },{
      id:0,
      naam:"christiaan",
      leeftijd:20,
    },{
      id:0,
      naam:"stef",
      leeftijd:21,
    },
    {
      id:0,
      naam:"liangelo",
      leeftijd:22,
    },
  ]

  return (
    <>
    <h2>Getallenlijst</h2>
    <ul>
      {lijstVanGetallen.map((getal:number,index:number) => <li key={index}> {getal} </li>)}
    </ul>
    
    <h2>Studentenlijst</h2>
    <ol>
      {objectStudents.map((student:Students)=> 
      <li key={student.id}>
        {student.naam}
      </li>
      )}
    </ol>
    
    <h2>Studentenlijst met J</h2>
    <ol>
      {objectStudents.filter((student) => student.naam.toLowerCase().startsWith("j")).map((student) =>
      <li key={student.id}>{student.naam}</li>
      )}
    </ol>
    <h2>Select</h2>
    <select name="listStudents" id="">
      <option disabled value={""}>select an option</option>
      {objectStudents.map((student:Students,index:number)=> 
      <option value={student.naam} key={index}>{student.naam}</option>
    )}
      </select>
      
      <h2>Table</h2>
      <table className="tableBody">
        <tr>
          <th>Naam</th>
          <th>Leeftijd</th>
        </tr>
          {objectStudents.map((student)=> 
          <tr key={student.id}>
          <td>{student.naam}</td>
          <td>{student.leeftijd}</td>
          </tr>
        )}
      </table>

    </>
  );
}

export default App;