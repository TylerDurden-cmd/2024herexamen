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
      naam:"josh",
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
    <ul>
      {lijstVanGetallen.map((getal:number,index:number) => <li key={index}> {getal} </li>)}
    </ul>

    <ol>
      {objectStudents.map((student:Students)=> 
      <li key={student.id}>
        {student.naam}
      </li>
      )}
    </ol>
    </>
  );
}

export default App;