import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from 'src/app/services/announcements.service';
import {Announcement} from "../../data/Announcement";

@Component({
  selector: 'app-announcements-component',
  templateUrl: './announcements-component.component.html',
  styleUrls: ['./announcements-component.component.css']
})
export class AnnouncementsComponentComponent implements OnInit {

  announcements: Announcement[] = [];

  constructor(private service: AnnouncementsService) { }

  ngOnInit(): void {
      this.service.getAnnouncements()
      .subscribe(
        (result) => {
          this.announcements = result;
        });
  }

}
