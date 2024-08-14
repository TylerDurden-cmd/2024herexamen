const App = () => {
  
  const alphabet: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const images:string[] = [];
    for(let i = 0; i < alphabet.length;i++){
      images[i] = `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${alphabet[i].toUpperCase()}.png`;
    }

  return (
    <>
    <h1>
      Hello, world
    </h1>

    {images.map((letter:string,index:number)=>
    <button key={index}><img src={letter}></img></button>
    )}
    </>
  );
}

export default App;