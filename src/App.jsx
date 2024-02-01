import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcept";
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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Map over core concepts data
                For each conceptItem, spread in conceptItem data 
                Render object data dynamically
              */}
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept key={conceptItem.title} 
              {...conceptItem}/>
            )}
          </ul>
          </section>  
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* Anony arrow func passed as a value */}
              {/* Allows for controlling exec, passing args, etc */}
              <TabButton 
                // If selectedTop === component, send true back to tabButton.jsx
                isSelected={selectedTopic === "components"} 
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"} 
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton 
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton 
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>
            {/* I prefer this over below condition--more concise. 
                Keeping as a reference.*/}
            {tabContent}
            {/* if no topic selected, display <p>, otherwise display the <div> */}
              {/* {!selectedTopic ? <p>Please Select a Topic</p> :
                  <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                      </pre>
                  </div>
              }     */}
          </section>
        </main>
    </>
  );
}

export default App;
