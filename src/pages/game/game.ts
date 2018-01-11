import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

	squares = [];
	player = "O";
	display = "X";
  message = "";
  win = false;

  constructor(public navCtrl: NavController) {
    this.message = "It is currently "+this.display+"'s turn";
  }

  handleMove(position) : void {
  	if (this.squares[position] !== "X" && this.squares[position] !== "O" && this.win !== true) {
  		this.player = this.player === "O" ? "X" : "O";
  		this.display = this.display === "X" ? "O" : "X";
      this.message = "It is currently "+this.display+"'s turn";
  		this.squares[position] = this.player;
      if (this.checkWin()) {
        this.win = true;
        this.message = this.player+" has made a Tic Tac Toe! \n (Press the reset button to play again)";
      }
  	}
  	//this.squares[position] = "O";
  }

  reset() : void {
  	for(var i=0;i<this.squares.length;i++) {
  		this.squares[i] = "";
  	}
    this.message = "It is currently "+this.display+"'s turn";
    this.win = false;
  }

  checkWin() : boolean {
    return true;
  }

}
