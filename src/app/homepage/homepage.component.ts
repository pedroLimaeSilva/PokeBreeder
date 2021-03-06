import { Component, OnInit } from '@angular/core';
declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;
import "gsap";

import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [PokemonService]
})
export class HomepageComponent implements OnInit {

  eggs: any;

  constructor( private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getEggs()
                       .subscribe(
                         data => this.eggs = data,
                         error => console.log(error),
                         ()=>{console.log(this.eggs)}
                       );

    let tl = new TimelineMax();
    let h1 = document.getElementById("h1");
    let h2 = document.getElementById("h2");

   // tl.set('#h1', {transformOrigin:"0% 0%"});
    tl.from(h1, 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, 0.4);
    tl.from(h2, 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "-=1");
   // tl.from(h2, 1, { y: -200, opacity:0, ease:  Power4.easeInOut  }, "-=0.5");
   // tl.to(h1, 0.4, { ease: Power2.easeInOut }, "-=0.5");
   // tl.to(h1, 0.4, { rotationY:360,transformOrigin:" -1%" }, "+=0.5");
   // tl.to(h2, 1, { y:100, scale: 2, ease:  Power4.easeInOut  }, "+=0.5");
   // tl.to(h2, 1, { rotateY:360, ease:  Power4.easeInOut  }, "+=0.5");
   // tl.to(h1,0.2,{css: { textTransform: "capitalize"}},"-=.1");

    // tl.play();
  }

}
