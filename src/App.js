// import SearchPage from "./Components/SearchPage";
// import React from "react";

// export function App() {
//   return <SearchPage />;
// }



import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './docs/data';

const animatedComponents = makeAnimated();

export function App() {
  return (

<Select
  closeMenuOnSelect={false}
  components={animatedComponents}
  defaultValue={[colourOptions[4], colourOptions[5]]}
  isMulti
  options={colourOptions}
/>
  );
}

export default App;
