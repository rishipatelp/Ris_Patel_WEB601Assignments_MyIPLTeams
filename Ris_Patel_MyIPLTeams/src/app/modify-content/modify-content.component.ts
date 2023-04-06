import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { IPLTeamsService } from '../iplteams.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  id: number;
  title: string;
  description: string;
  editing = false;
  

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private contentService: IPLTeamsService, private messageService: MessageService) { }

  addContent(newContent: Content) {
    this.contentService.addContent(newContent)
      .subscribe(content => {
        this.messageService.add(`Content added with id ${content.id}`);
        this.contentAdded.emit(content);
        this.title = '';
        this.description = '';
      });
  }

    updateContent(updatedContent: Content) {
      this.contentService.updateContent(updatedContent)
        .subscribe(content => {
          this.messageService.add(`Content updated with id ${content.id}`);
          this.title = '';
          this.description = '';

          this.editing = false;
        });
    }

    onSubmit() {
      if (this.id) {
        this.contentService.getItemById(this.id)
          .subscribe(content => {
            if (content) {
              const updatedContent: Content = { id: this.id, title: this.title, description: this.description };
              this.updateContent(updatedContent);
            } else {
              this.addContent({ id: this.id, title: this.title, description: this.description});
            }
          });
      } else {
        this.addContent({ id: this.id, title: this.title, description: this.description});
    }
  }
}
