import { Component, OnInit } from '@angular/core';

import { GbStorage } from "../shared/services/gb-storage.service";

import { GbEntry } from "../shared/models/gb-entry.model";

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {

  private entries: GbEntry[] = [];

  constructor(private storage: GbStorage) { }

  ngOnInit() {
    this.entries = this.storage.getEntries();
  }

}
