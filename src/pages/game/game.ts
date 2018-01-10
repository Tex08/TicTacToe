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

  constructor(public navCtrl: NavController) {
    this.message = "It is currently "+this.display+"'s turn";
  }

  handleMove(position) : void {
  	if (this.squares[position] !== "X" && this.squares[position] !== "O") {
  		this.player = this.player === "O" ? "X" : "O";
  		this.display = this.display === "X" ? "O" : "X";
      this.message = "It is currently "+this.display+"'s turn";
  		this.squares[position] = this.player;
  	}
  	//this.squares[position] = "O";
  }

  reset() : void {
  	for(var i=0;i<this.squares.length;i++) {
  		this.squares[i] = "";
  	}
  }

}
