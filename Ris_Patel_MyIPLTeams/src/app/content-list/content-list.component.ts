import { Component, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TmplAstBoundText } from '@angular/compiler';
import { FliterPipe } from '../fliter.pipe';
import { FormsModule } from '@angular/forms';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  content: Content[];
  public inputvalue?: Optional;
  constructor() {
  this.content = [{
    id: 0,
    title: 'Chennai Super Kings',
    description: 'Chennai Super Kings is an Indian Premier League franchise cricket team based in Chennai, Tamil Nadu, India. Founded in 2008, the team plays its home matches at the M. A. Chidambaram Stadium in Chennai. The team is owned by India Cements Limited through the Chennai Super Kings Cricket Limited holding company. ',
    creator: 'Chennai Super Kings Cricket Ltd',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1024px-Chennai_Super_Kings_Logo.svg.png',
    tags: ['Cricket Team'],
    type: 'Super Kings'
  },
  {
    id: 1,
    title: 'Mumbai Indians',
    description: 'Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League and is the most successful team of the tournament with 5 titles. Founded in 2008, the team is owned by Indias biggest conglomerate, Reliance Industries, through its 100% subsidiary Indiawin Sports',
    creator: 'Ambani Group',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1024px-Mumbai_Indians_Logo.svg.png',
    tags: ['Cricket Team'],
    type: 'Indians'
  },
  {
    id: 2,
    title: 'Royal Challengers Banglore',
    description: 'Royal Challengers Bangalore are a franchise cricket team based in Bengaluru, Karnataka, that plays in the Indian Premier League. It was founded in 2008 by United Spirits and named after the companys liquor brand Royal Challenge.',
    creator: 'Vijay Maliya',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/800px-Royal_Challengers_Bangalore_2020.svg.png',
    tags: ['Cricket Team'],
    type: 'Challengers'
  },
  {
    id: 3,
    title: 'Gujarat Titans',
    description: 'Gujarat Titans is a franchise cricket team based in Ahmedabad, Gujarat, India. The Titans compete in the Indian Premier League (IPL). Founded in 2021, Gujarat Titans home ground is Narendra Modi Stadium in Motera.',
    creator: 'Captial Partners',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1024px-Gujarat_Titans_Logo.svg.png',
    tags: ['Cricket Team'],
    type: 'Titans'
  },
  {
    id: 4,
    title: 'Kolkata Knight Riders',
    description: 'Kolkata Knight Riders (KKR) are a franchise cricket team representing the city of Kolkata in the Indian Premier League.',
    creator: 'SRK',
    //imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/800px-Kolkata_Knight_Riders_Logo.svg.png',
    tags: ['Cricket Team'],
    type: 'Knight Riders'
  },
  {
    id: 5,
    title: 'Sunrisers Hyderabad',
    description: 'Sunrisers Hyderabad are a franchise cricket team based in Hyderabad, Telangana, India, that plays in the Indian Premier League. The franchise is owned by Kalanithi Maran of the SUN Group and was founded in 2012 after the Hyderabad-based Deccan Chargers were terminated by the IPL.',
    creator: 'Kalanithi Maran',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png',
    tags: ['Cricket Team'],
    type: 'SRH'
  },
  {
    id: 6,
    title: 'Lucknow Super Giants',
    description: 'Lucknow Super Giants is a franchise cricket team based in Lucknow, Uttar Pradesh. They play in the Indian Premier League. The Lucknow franchise formed in 2021. Sanjeev Goenka is its principal owner. The team is captained by KL Rahul and coached by Andy Flower. ',
    creator: 'RPSG Group',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Lucknow_Super_Giants_logo.png',
    tags: ['Cricket Team'],
    type: 'LSG'
  }
]
this.inputvalue ="";
}
    ngOnInit(): void {
  }
  clickEvent(): any {
  
    for(let i = 0;  i < this.content.length; i++) {
     console.log(this.content[i].type);
     let abj =  <HTMLInputElement>document.getElementById('aut');   
     console.log(abj.value);
     if(this.content[i].type === abj.value){
       let out= <HTMLInputElement>document.getElementById('msg');
        out.innerHTML = 'we found the item with other';
      }
    }
  }
  filteredContents: Content[] = [];
  filterText: string;
  errorMessage: string;

  onContentCreated(content: Content) {
    this.addContent(content)
      .then(() => {
        console.log(`Successfully added ${content.title}.`);
        this.errorMessage = '';
      })
      .catch(() => {
        console.error(`Failed to add ${content.title}.`);
        this.errorMessage = 'Failed to add content.';
      });
  }

  addContent(content: Content): Promise<void> {
    return new Promise((resolve, reject) => {
      const requiredFields = ['id', 'title', 'description', 'creator'];
      const missingFields = requiredFields.filter(type => !content[type]);
      if (missingFields.length > 0) {
        reject();
        this.errorMessage = `Please fill in the required fields: ${missingFields.join(', ')}.`;
        return;
      }
      const existingContent = this.content.find(c => c.id === content.id);
      if (existingContent) {
        reject();
        this.errorMessage = `Content with ID ${content.id} already exists.`;
        return;
      }
      const clonedContent = { ...content };
      this.content.push(clonedContent);
      this.filterContents();
      resolve();
    });
  }

  filterContents() {
    this.filteredContents = this.content.filter(content => {
      const filterText = this.filterText ? this.filterText.toLowerCase() : '';
      const contentTitle = content.title.toLowerCase();
      const contentDescription = content.description.toLowerCase();
      return contentTitle.includes(filterText) || contentDescription.includes(filterText);
    });
  }
}