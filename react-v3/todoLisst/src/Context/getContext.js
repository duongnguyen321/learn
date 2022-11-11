import React, { Component } from "react";
import { ProviderContext } from "./ProviderState";
const getContext = (ParentComponent) => {
  return class extends Component {
    render() {
      return (
        <ProviderContext.Consumer>
          {(dataContext) => {
            return <ParentComponent store={dataContext} {...this.props} />;
          }}
        </ProviderContext.Consumer>
      );
    }
  };
};
export default getContext;
