import ArrayStateVariable from "./ComponentState/ArrayStateVariable";
import BooleanStateVariables from "./ComponentState/BooleanStateVariables";
import Counter from "./ComponentState/Counter";
import DateStateVariable from "./ComponentState/DateStateVariable";
import ClickEvent from "./HandlingUserEvents/ClickEvent";
import EventObject from "./HandlingUserEvents/EventObject";
import PassingDataOnEvent from "./HandlingUserEvents/PassingDataOnEvent";
import PassingFunctions from "./HandlingUserEvents/PassingFunctions";
import ObjectStateVariable from "./ComponentState/ObjectStateVariable";
import ParentStateComponent from "./ComponentState/ParentStateComponent";
import StringStateVariables from "./ComponentState/StringStateVariables";
import ReduxExamples from "./ReduxExamples";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab3">
      <h3>Lab 4</h3>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  );
}
