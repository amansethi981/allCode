const EnhancedComponent = (originalComponent) => {
  class NewComponent extends React.Component {
    constructor() {}
    handleClick = () => {};
    render() {
      return <originalComponent />;
    }
  }
  return NewComponent;
};