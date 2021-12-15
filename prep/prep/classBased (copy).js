class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { faviColor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { faviColor: props.favcol };
  }

  shouldComponentUpdate() {
    return true;
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ faviColor: "yellow" });
    }, 1000);
  }

  componentWillUnmount() {
    alert("hi");
  }
}
