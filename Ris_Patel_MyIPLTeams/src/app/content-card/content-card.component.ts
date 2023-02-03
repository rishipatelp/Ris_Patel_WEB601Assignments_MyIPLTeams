import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  iplteams : ContentList = new ContentList();

  iplteam1 : Content = {
    id: 0,
    title: 'Chennai Super Kings',
    description: 'Chennai Super Kings is an Indian Premier League franchise cricket team based in Chennai, Tamil Nadu, India. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai. The team is owned by India Cements Limited through the Chennai Super Kings Cricket Limited holding company. ',
    creator: 'Chennai Super Kings Cricket Ltd'
  }
  iplteam2 : Content = {
    id: 1,
    title: 'Mumbai Indians',
    description: 'Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles. Founded in 2008, the team is owned by Indias biggest conglomerate, Reliance Industries, through its 100% subsidiary Indiawin Sports',
    creator: 'Ambani Group'
  }
  iplteam3 : Content = {
    id: 2,
    title: 'Royal Challengers Banglore',
    description: 'Royal Challengers Bangalore are a franchise cricket team based in Bengaluru, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the companys liquor brand Royal Challenge.',
    creator: 'Vijay Maliya'
  }

  constructor(){
    this.iplteams.addFunction(this.iplteam1);
    this.iplteams.addFunction(this.iplteam2);
    this.iplteams.addFunction(this.iplteam3);
  }

  displayMyIndex(index : number): string {
    return this.iplteams.printIndex(index);
  }
}