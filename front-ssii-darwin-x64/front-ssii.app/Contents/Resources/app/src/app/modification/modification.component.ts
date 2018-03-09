import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModificationService } from '../service/modification.service';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '../classes/juego';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  game: Juego;
  constructor(private modificationService: ModificationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.game = this.route.snapshot.params['game'];
    console.log(this.game);
  }

  onSubmit(userForm: NgForm) {
    // Como esta funcion se utiliza tambien para el registro de personas, igual se podría sacar a un servicio,
    // teniendo cuidado con los parámetros
    console.log(userForm);
    this.modificationService.updateGame(userForm).subscribe(
      response => console.log('he hecho el patch', response),
      err => console.log(err)
    );
  }

}
