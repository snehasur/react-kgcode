import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import {Number} from "./features/number/Number"
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Number/>
      </header>
    </div>
  )
}

export default App
