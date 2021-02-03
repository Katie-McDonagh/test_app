import React, { Component } from "react";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
  }
  addNote = (e) => {
    this.setState({ note: e.target.value });
  };
  render() {
    return (
      <div className="NoteList">
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={this.addNote} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.note}
      </div>
    );
  }
}

export default NoteList;
