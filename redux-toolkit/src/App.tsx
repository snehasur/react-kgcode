import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import {NumberCounter} from "./features/number/Number"
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <NumberCounter/>
      </header>
    </div>
  )
}

export default App
