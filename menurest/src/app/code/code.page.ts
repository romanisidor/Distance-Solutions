import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../controllers/user';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  disabledButton;

  constructor( private router: Router, public auth: AuthService,
    private toastCtrl: ToastController,
  	private loadingCtrl: LoadingController,
  	private alertCtrl: AlertController,
    public navCtrl: NavController,
    private storage: Storage,
    public platform: Platform,
                      ) { 
      
    }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }
  

  onLogin(form):void{
    if(form.value.code==""){
      this.presentToast('Debe ingresar un codigo');
  }else{
      this.disabledButton = true;
       JSON.stringify(form.value);
       this.platform.ready().then(()=>{
        this.loadingCtrl.create({
          message: "Por favor, espere un momento..."
        }).then((loadingElement)=>{
          loadingElement.present();
          var ref = this;
          setTimeout(function(){
            ref.loadingCtrl.dismiss();
          }, 8000)
        })
      })
       this.auth.login(form.value).subscribe(res => {
      this.presentToast("Acceso exitoso");
      this.storage.set('storage_xxx', res)
      this.navCtrl.navigateRoot(['/home']);
     
      })
      
  } 
  

    // console.log('acceso', form.value)
    

  }


  async presentToast(a){
  	const toast = await this.toastCtrl.create({
    		message: a,
    		duration: 1500,
    		position: 'bottom'
  	});
  	toast.present();
  }


  // navigate(){
  //   this.router.navigate(['home'])
  // }
  
}

