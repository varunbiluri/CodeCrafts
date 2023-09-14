import React, { Component } from 'react'
import axios from 'axios';
import Addcode from './addcode';
export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      popupbool: false,
      problem:"",
      problemDescription:"",
      input:"",
      output:"",
      id: "",
    };
  }

  componentDidMount() {
    this.fetchCodeData();
  }

  fetchCodeData() {

    axios.get("http://localhost:3000/codes/see")
    
      .then((res) => {
        console.log(res);
        this.fetchCodeData();
        this.setState({
          list: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addCode= (newCode) => {
    axios.post("http://localhost:3000/codes/add", newCode)
      .then((res) => {
        console.log(res);
        alert("Data added successfully");
        this.fetchCodeData();
        this.closePopup();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  

  updateCode = () => {
    const { problem,problemDescription,input,output,id } = this.state;
    axios
      .put(`http://localhost:3000/codes/update/${id}`, {
        problem: problem,
        problemDescription: problemDescription,
        input: input,
        output: output,
      })
      .then((res) => {
        console.log(res);
        alert("Data updated successfully");
        this.fetchCodeData(); 
        this.closePopup();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  deleteCode = (id) => {
    axios
      .delete(`http://localhost:3000/codes/delete/${id}`)
      .then((res) => {
        console.log(res);
        alert("Data deleted successfully");
        this.fetchCodeData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  showPopup = (id, problem,problemDescription,input,output) => {
    this.setState({
      popupbool: true,
      problem: problem,
      problemDescription: problemDescription,
      input: input,
      output: output,
      id: id,
    });
  };

  closePopup = () => {
    this.setState({
      popupbool: false,
      problem: "",
      problemDescription: "",
      input: "",
      output: "",
      id: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { list, popupbool, problem,problemDescription,input,output } = this.state;
    return (
      <div className="container1">
        <Addcode />
        <br />
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>problem Description</th>
              <th>Input</th>
              <th>Output</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.problem}</td>
                  <td>{item.problemDescription}</td>
                  <td>{item.input}</td>
                  <td>{item.output}</td>
                  <td>
                    <button onClick={() => this.deleteCode(item._id)}>Delete</button>
                    <button onClick={() => this.showPopup(item._id, item.problem, item.problemDescription, item.input, item.output)}>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {popupbool ? (
          <div className="popup">
            <div className="popup_inner">
              <button className="close-button" onClick={this.closePopup}>X</button>
              <div className="container2">
                <h2>Update Coding Problem Details</h2>
                <br />
                <label className="label-problem">Problem</label>
                <input type="text" name="problem" value={problem} onChange={(e) => this.handleInputChange(e)} />
                <br />
                <label className="label-problemDescription">problemDescription</label>
                <input type="text" name="problemDescription" value={problemDescription} onChange={(e) => this.handleInputChange(e)} />
                <br />
                <label className="label-input">Input</label>
                <input type="text" name="input" value={input} onChange={(e) => this.handleInputChange(e)} />
                <br />
                <label className="label-output">Output</label>
                <input type="text" name="output" value={output} onChange={(e) => this.handleInputChange(e)} />
                <br />
                <button onClick={this.updateCode}>Update Code Problem</button>
              </div>
            </div>
          </div>
        ) : null}

      </div>
    )
  }
}

export default Admin