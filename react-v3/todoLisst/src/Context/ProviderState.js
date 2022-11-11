import React, { Component } from "react";
export const ProviderContext = React.createContext();
class ProviderState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doLists: [],
      isLoading: true,
    };
  }
  dispatch = (data) => {
    this.setState(data);
  };
  render() {
    const { children } = this.props;
    return (
      <ProviderContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </ProviderContext.Provider>
    );
  }
}
export default ProviderState;
