import Header from "./Header";
import List from "./List";
import Footer from "./footer"

const App = () => {
  const items:string[] = ["item 1", "item 2", "item 3"]
  return (
    <>
    <Header title="Labo 2" subtitle="Basic Componentens"></Header>
    <List items={items}></List>
    <Footer copy="Joachim Adomako" year={2024}></Footer>
    </>
  )
}

export default App;