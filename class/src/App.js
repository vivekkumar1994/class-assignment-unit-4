import Input from "./day2/Input"
import Button from "./day2/Button"
import './App.css'
// import List from "./Day1/List"
import EmployeeDetails from "./day2/EmployeeDetails"
import { Todo } from "./day2/Todo"
import List1 from "./day1/List1"
function App (){
  return (
    <div className="App">
      <h1 className="header">Student Form </h1>
    <Input/>
    <Button/>
    <List1/>
    <EmployeeDetails/>
    <Todo/>
    </div>
  )
}
export default App