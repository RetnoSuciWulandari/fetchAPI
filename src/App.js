import React from "react";
import axios from "axios";
import DisplayQuotes from "./DisplayQuotes";
import GenerateQuotes from "./GenerateQuotes";

const simpsonsQuote = {
  character: "Homer",
  characterDirection: "Right",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  quote: "'D'oh!'"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: simpsonsQuote,
      count: 0
    };
    this.getQuote = this.getQuote.bind(this);
  }

  render() {
    return (
      <div>
        <DisplayQuotes q={this.state.quotes} />
        <GenerateQuotes selectQuote={() => this.getQuote()} />
      </div>
    );
  }

  getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(response => {
        //console.log(response);
        this.setState({
          quotes: response.data[this.state.count],
          count: (this.state.count += 1)
        });
      });
  }
}

export default App;
