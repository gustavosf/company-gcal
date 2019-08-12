import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

const FilterInput = ({ options }) => (
  <Typeahead
    labelKey="name"
    highlightOnlyResult={true}
    minLength={3}
    selectHintOnEnter={true}
    placeholder="Name"
    options={options}
    multiple
    clearButton
  />
);

export default FilterInput;
