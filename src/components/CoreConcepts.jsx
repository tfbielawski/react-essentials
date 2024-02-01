import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
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
    )
}
