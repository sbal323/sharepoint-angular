import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AnnouncementsService } from 'src/app/services/announcements.service';
import {Announcement} from "../../data/Announcement";

@Component({
  selector: 'app-announcements-component',
  templateUrl: './announcements-component.component.html',
  styleUrls: ['./announcements-component.component.css']
})
export class AnnouncementsComponentComponent implements OnInit {

  announcements: Announcement[] = [];

  constructor(private service: AnnouncementsService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
      this.initIcons();
      
      this.service.getAnnouncements()
      .subscribe(
        (result) => {
          this.announcements = result;
        });
  }

  initIcons(){
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'boottrap-icons';
    style.rel = 'stylesheet';
    style.href = `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css`;

    head.appendChild(style);
  }

}
