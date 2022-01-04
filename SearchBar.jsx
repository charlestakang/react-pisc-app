import React from "react";

class Searchbar extends React.Component {
 state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="segment ui">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="input">Image Search</label>
            <input
              type="text"
              id="input"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
