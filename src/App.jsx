import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
  function handleSelect(selectedButton) {
    //components, jsx, props, state
    console.log(selectedButton);    
}
  return (
    <div>
      <Header />      
        <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
              {/* shorter version of above. uses spread op, brings in the whole object */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          </section>  
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* Anony arrow func passed as a value */}
              {/* Ensures handleSelect not executed until clicked */}
              {/* Allows for controlling exec, passing args, etc */}
              <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            Dynamic Content
          </section>
        </main>
    </div>
  );
}

export default App;
