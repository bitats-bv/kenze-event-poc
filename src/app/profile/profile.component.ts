import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type ProfileType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [],
})
export class ProfileComponent implements OnInit {
  profile: ProfileType | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProfile('https://login.microsoftonline.com/common');
  }

  getProfile(url: string) {
    this.http.get(url).subscribe((profile) => {
      this.profile = profile;
    });
  }
}
