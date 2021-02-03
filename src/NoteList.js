import React, { Component } from "react";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      notesArray: [],
    };
  }
  addNote = (e) => {
    this.setState({ note: e.target.value });

  };

  displayNote = (e) => {
    let n = this.state.note
    let array = this.state.notesArray
    array.push(n)
    this.setState({noteArray: array})
    // this.setState({finalNote: this.state.note});
    e.preventDefault();
  };

  render() {
    return (
      <div className="NoteList">
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={this.addNote}/>
          </label>
          <input type="submit" value="Submit" onClick={this.displayNote}  />
        </form>
        <div className='parent'>
        <ul>
        {this.state.notesArray.map(function (note) {
            return (
              
              <li>{note}</li>
            )
        })}
        </ul>
        </div>
      </div>
    );
  }
}

export default NoteList;
