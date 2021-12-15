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
  
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
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
