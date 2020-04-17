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
      oSquares: [],
      winner: null,
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
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (this.state.winner) {
      return;
    }
    let squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    let xSquares = this.state.xSquares.slice();
    let oSquares = this.state.oSquares.slice();
    this.state.xIsNext ? xSquares.push(i) : oSquares.push(i);
    let finalWinner = null;
    let winner = this.state.winner;

    this.state.wins.forEach((winCombo) => {
      if (winCombo.every((value) => xSquares.includes(value))) {
        finalWinner = "X";
      }
      if (winCombo.every((value) => oSquares.includes(value))) {
        finalWinner = "O";
      }
    });
    winner = finalWinner;
    let xIsNext = !this.state.xIsNext;
    let history = this.state.history.slice(0, this.state.move + 1);
    let move = this.state.move + 1;
    this.setState({
      squares,
      xIsNext,
      move,
      history,
      xSquares,
      oSquares,
      winner,
      history: [...history, { squares, xIsNext, xSquares, oSquares, winner }],
    });
  }

  goBack(i) {
    let squares = this.state.history[i].squares.slice();
    let xIsNext = this.state.history[i].xIsNext;
    let xSquares = this.state.history[i].xSquares.slice();
    let oSquares = this.state.history[i].oSquares.slice();
    let winner = this.state.history[i].winner;
    let move = i;
    this.setState({ squares, xIsNext, xSquares, oSquares, move, winner });
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
        {this.state.winner ? (
          <div>{`${this.state.winner} won the game!`}</div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Board;
