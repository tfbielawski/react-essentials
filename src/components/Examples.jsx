import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton"
import Section from "./Section";

export default function Examples(){
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

    return(
        <Section id="examples">
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
            {tabContent}
        </Section>
    )
}