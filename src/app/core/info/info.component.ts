import { Component, Input, OnInit } from '@angular/core';
import { WorldTime } from '../../model/worldTime';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnInit {
  @Input() worldTime: WorldTime = new WorldTime();

  constructor() {}

  ngOnInit(): void {}
}
