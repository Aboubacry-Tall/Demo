import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users!: User[];
  ids = [0];

  ngOnInit(): void {
    this.get_all_users();
  }

  get_all_users() {
    this.usersService.get_all_users().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error)
    );
  }

  setEtat(id: number | undefined) {
    if (id != undefined) this.ids.push(id);
  }

  onDelete() {
    this.usersService.delete_users_by_etat(this.ids).subscribe(
      (data) => {},
      (error) => console.log(error)
    );
    this.ids = [0];
    window.location.reload();
  }
}
