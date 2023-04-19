import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-bulb-switch-on-off-with-sound',
  templateUrl: './light-bulb-switch-on-off-with-sound.component.html',
  styleUrls: ['./light-bulb-switch-on-off-with-sound.component.css']
})
export class LightBulbSwitchOnOffWithSoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn(){
    let container = document.querySelector('.wrapper-container');
    let audio : any = document.querySelector('#audio');
    container?.classList.toggle('on');
    audio?.play();
  }

}
