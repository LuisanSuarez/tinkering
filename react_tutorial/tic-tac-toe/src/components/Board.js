import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      move: 0,
      history: [{ squares: Array(9).fill(null), xIsNext: true }],
      xSquares: [],
      ySquares: [],
      wins: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      winner: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log(" props!:", i, this.state);
    let squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    let xSquares = this.state.xSquares.slice();
    let ySquares = this.state.ySquares.slice();
    this.state.xIsNext ? xSquares.push(i) : ySquares.push(i);
    let Winner = null;
    let winner = this.state.winner;

    this.state.wins.forEach((winCombo) => {
      let winner;
      if (this.state.xIsNext && xSquares.length > 2) {
        console.log({ winCombo, xSquares: this.state.xSquares });
        winner = "X";
        this.state.xSquares.forEach((number) => {
          if (!winCombo.includes(number)) {
            console.log("NEVER runs, really");
            winner = null;
          }
        });
      } else if (ySquares.length > 2) {
        winner = "Y";
        this.state.ySquares.forEach((number) => {
          if (!winCombo.includes(number)) {
            winner = null;
          }
        });
      }
      if (winner) {
        Winner = winner;
      }
    });
    winner = Winner;
    let xIsNext = !this.state.xIsNext;
    let history = this.state.history.slice(0, this.state.move + 1);
    let move = this.state.move + 1;
    this.setState({
      squares,
      xIsNext,
      move,
      history,
      xSquares,
      ySquares,
      winner,
      history: [...history, { squares, xIsNext, xSquares, ySquares, winner }],
    });
  }

  goBack(i) {
    let squares = this.state.history[i].squares.slice();
    let xIsNext = this.state.history[i].xIsNext;
    let history = this.state.history.slice();
    let move = i;
    // history.splice(++i);
    this.setState({ squares, xIsNext, move, history });
  }

  render() {
    return (
      <>
        <div class="row">
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[0]}
            value={0}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[1]}
            value={1}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[2]}
            value={2}
          />
        </div>
        <div class="row">
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[3]}
            value={3}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[4]}
            value={4}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[5]}
            value={5}
          />
        </div>
        <div class="row">
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[6]}
            value={6}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[7]}
            value={7}
          />
          <Square
            handleClick={this.handleClick}
            display={this.state.squares[8]}
            value={8}
          />
        </div>
        <div class="history">
          {this.state.history.map((item, index) =>
            index ? (
              <button onClick={() => this.goBack(index)}>
                {`Go back to move # ${index}`}
              </button>
            ) : (
              <button
                onClick={() => this.goBack(0)}
              >{`Go to game start`}</button>
            )
          )}
        </div>
      </>
    );
  }
}

export default Board;
