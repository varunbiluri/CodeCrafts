import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      index: 0,
    };
    this.textArray = ['Crack Interviews with Confidence, Effective, and Data-Driven Interview Prep with CodeCraft!'];
    this.typeWriterInterval = null;
  }

  componentDidMount() {
    this.typeWriterInterval = setInterval(this.typeWriter, 50);
  }

  

  typeWriter = () => {
    const { text, index } = this.state;
    const currentText = this.textArray[index];
    if (text.length < currentText.length) {
      this.setState((prevState) => ({
        text: prevState.text + currentText.charAt(prevState.text.length),
      }));
    } 
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

export default Text;
