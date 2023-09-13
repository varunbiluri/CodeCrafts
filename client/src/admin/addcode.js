import React, { Component } from 'react';
import axios from 'axios';
import './addcode.css'
class Addcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
        problem: "",
        problemDescription: "",
        input: "",
        output: "",
        };
    }

    addtodobd = () => {
        const { problem,problemDescription,input,output } = this.state;
        axios.post('http://localhost:3000/codes/add', {
            problem: problem,
            problemDescription: problemDescription,
            input: input,
            output: output,

        })
            .then((res) => {
                console.log(res);
                alert("Code details added successfully");
                this.setState({
                    problem: "",
                    problemDescription: "",
                    input: "",
                    output: "",
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const { problem,problemDescription,input,output } = this.state;
        return (
            <div className="container"> 
            <h2>Add the Coding problem</h2>
            <br />
                <label className="label-problem">Problem</label>
                <input type="text" name="problem" value={problem} onChange={(e) => this.setState({ problem: e.target.value })}/>
                <br />
                <label className="label-problemDescription">problem Description</label>
                <input type="text" name="problemDescription" value={problemDescription} onChange={(e) => this.setState({ problemDescription: e.target.value })}/>
                <br />
                <label className="label-input">Input</label>
                <input type="text" name="input" value={input} onChange={(e) => this.setState({ input: e.target.value })}/>
                <br />
                <label className="label-output">Output</label>
                <input type="text" name="output" value={output} onChange={(e) => this.setState({ output: e.target.value })}/>
                <br />
                <button onClick={this.addtodobd}>Add Coding Problem</button>
            </div>
        );
    }
}

export default Addcode;
