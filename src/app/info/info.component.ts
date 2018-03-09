import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { InfoService } from '../service/info.service';
import { Juego } from '../classes/juego';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  game: Juego;
  id: String;
  closeResult: string;
  // player: YT.Player;
  id_video: string;
  constructor(private route: ActivatedRoute, private infoService: InfoService,
     private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    // Se le tiene que pasar el id a la llamada
    this.infoService.getGame().subscribe(data => {
      this.game = new Juego(data.game, data.description,
        data.imageURL, data.infoImage, data.canWatch, data.leftTime, data.videoURL);
      console.log(data.game);
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public onStateChange(event) {
    console.log('player state', event.data);
  }

  modification() {
    console.log(this.game);
    this.router.navigate(['modification', this.game]);
  }

}

