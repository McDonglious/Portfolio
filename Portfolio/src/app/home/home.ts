import { Component } from '@angular/core';
import {Topbar} from '../topbar/topbar';
import {About} from '../about/about';
import {Projects} from '../projects/projects';
import {Separator} from '../separator/separator';
import {Footer} from '../footer/footer';
import {Hero} from '../hero/hero';
import {Experience} from '../experience/experience';
import {Contact} from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Topbar,
    About,
    Projects,
    Separator,
    Footer,
    Hero,
    Experience,
    Contact,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

}
