import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('frmLogin') frmLogin: NgForm
  constructor(private userS: UserService, private router: Router) { }
  ngOnInit(): void {

  }
  Login(credential: any) {
    this.userS.Login(credential).subscribe(res => {
      if (typeof res == 'object') {
        localStorage.setItem('token', res.token)
        this.router.navigate(['create-product'])
      }
    }, err => {
      alert(err.error.message)
    })
  }
}
