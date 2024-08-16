const App = () => {

  const colors = Array.from({length: 100}, (_, i) => `hsl(${i * 360 / 100}, 100%, 50%)`);
  return (
    <>
    {colors.map((color:string)=>
    <div style={{width: "max", height: 20, background: color}}>
    </div>

    )}
    </>
  );
}

export default App;