import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

	squares = [];
	player = "O";

  constructor(public navCtrl: NavController) {

  }

  handleMove(position) : void {
  	if (this.squares[position] !== "X" && this.squares[position] !== "O") {
  		this.player = this.player === "X" ? "O" : "X";
  		this.squares[position] = this.player;
  	}
  	//this.squares[position] = "O";
  }

}
