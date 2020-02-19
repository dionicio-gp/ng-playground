import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@models/user';
import { UserService } from '@services/user.service';

import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  faEdit = faEdit;
  faEye = faEye;
  users: User[] = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  }];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.search().subscribe(response => {
      this.users = response;
    });
  }

  goToUserPosts(id: number) {
    this.router.navigate(['/users', id, '/posts']);
  }

  goToEditUser(id: number) {
    this.router.navigate(['/users', id]);
  }
}
