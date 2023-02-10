import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  content: Content[];
  
  constructor() {

  this.content = [{
    id: 0,
    title: 'Chennai Super Kings',
    description: 'Chennai Super Kings is an Indian Premier League franchise cricket team based in Chennai, Tamil Nadu, India. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai. The team is owned by India Cements Limited through the Chennai Super Kings Cricket Limited holding company. ',
    creator: 'Chennai Super Kings Cricket Ltd',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1024px-Chennai_Super_Kings_Logo.svg.png',
    tags: ['Cricket Team']
  },
  {
    id: 1,
    title: 'Mumbai Indians',
    description: 'Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles. Founded in 2008, the team is owned by Indias biggest conglomerate, Reliance Industries, through its 100% subsidiary Indiawin Sports',
    creator: 'Ambani Group',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1024px-Mumbai_Indians_Logo.svg.png',
    tags: ['Cricket Team']
  },
  {
    id: 2,
    title: 'Royal Challengers Banglore',
    description: 'Royal Challengers Bangalore are a franchise cricket team based in Bengaluru, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the companys liquor brand Royal Challenge.',
    creator: 'Vijay Maliya',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/800px-Royal_Challengers_Bangalore_2020.svg.png',
    tags: ['Cricket Team']
  },
  {
    id: 3,
    title: 'Gujarat Titans',
    description: 'Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League (IPL). Founded in 2021, Gujarat Titans home ground is Narendra Modi Stadium in Motera.',
    creator: 'Captial Partners',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1024px-Gujarat_Titans_Logo.svg.png',
    tags: ['Cricket Team']
  },
  {
    id: 4,
    title: 'Kolkata Knight Riders',
    description: 'Kolkata Knight Riders (KKR) are a franchise cricket team representing the city of Kolkata in the Indian Premier League.',
    creator: 'SRK',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/800px-Kolkata_Knight_Riders_Logo.svg.png',
    tags: ['Cricket Team']
  },
]
}
    ngOnInit(): void {
  }
}
