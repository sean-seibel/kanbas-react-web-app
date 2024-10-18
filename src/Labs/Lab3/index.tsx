import ArrowFunctions from "./Functions/ArrowFunctions";
import BooleanVariables from "./Basics/BooleanVariables";
import ConditionalOutputIfElse from "./Basics/ConditionalOutputIfElse";
import ConditionalOutputInline from "./Basics/ConditionalOutputInline";
import IfElse from "./Basics/IfElse";
import ImpliedReturn from "./Functions/ImpliedReturn";
import LegacyFunctions from "./Functions/LegacyFunctions";
import TemplateLiterals from "./Functions/TemplateLiterals";
import TernaryOperator from "./Basics/TernaryOperator";
import VariablesAndConstants from "./Basics/VariablesAndConstants";
import VariableTypes from "./Basics/VariableTypes";
import ArrayIndexAndLength from "./Structures/ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./Structures/AddingAndRemovingToFromArrays";
import ForLoops from "./Structures/ForLoops";
import MapFunction from "./Structures/MapFunction";
import FindFunction from "./Structures/FindFunction";
import FindIndex from "./Structures/FindIndex";
import FilterFunction from "./Structures/FilterFunction";
import House from "./Structures/House";
import TodoList from "./Structures/todos/TodoList";
import Spreading from "./Structures/Spreading";
import Destructing from "./Structures/Destructing";
import FunctionDestructing from "./Structures/FunctionDestructing";
import DestructingImports from "./Structures/DestructingImports";
import Classes from "./DynamicStyling/Classes";
import Styles from "./DynamicStyling/Styles";
import Add from "./Parameterizing/Add";
import Square from "./Parameterizing/Square";
import Highlight from "./Parameterizing/Highlight";
import PathParameters from "./Parameterizing/PathParameters";

export default function Lab3() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <h3>JavaScript</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <PathParameters />
    </div>
  );
}
