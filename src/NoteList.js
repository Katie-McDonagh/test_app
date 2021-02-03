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
    this.setState({ notesArray: [...this.state.notesArray, this.state.note] });
    e.preventDefault();
  };

  render() {
    return (
      <div className="NoteList">
        <form>
          <label>
            Note:
            <input type="text" name="name" onChange={this.addNote} />
          </label>
          <input type="submit" value="Submit" onClick={this.displayNote} />
        </form>
        <div className="parent">
          <ul>
            {this.state.notesArray.map(function (note, index) {
              return <li key={index}>{note}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteList;
