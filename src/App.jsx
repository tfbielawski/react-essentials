import { useState } from "react";

import { EXAMPLES } from "./data";
import Header from "./components/Header/Header"
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //components, jsx, props, state
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);    
}

  let tabContent =<p>Please Select a Topic</p>;
  if (selectedTopic){
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
    </div>
  )}
  return (
    <>
      <Header />      
        <main>
        <CoreConcepts />
          
        </main>
    </>
  );
}

export default App;
