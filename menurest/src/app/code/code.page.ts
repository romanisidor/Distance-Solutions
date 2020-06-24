import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../controllers/user';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  constructor( private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  

  onLogin(form):void{
    
       JSON.stringify(form.value);
       this.auth.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');  
     })

    // console.log('acceso', form.value)

  }



  // navigate(){
  //   this.router.navigate(['home'])
  // }
  
}
