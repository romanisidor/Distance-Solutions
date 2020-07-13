import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../services/auth.service';
import { User } from '../controllers/user';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataStorage: any;
  tableName:string;

  constructor( private router: Router, public auth: AuthService,
    private toastCtrl: ToastController,
  	private loadingCtrl: LoadingController,
  	private alertCtrl: AlertController,
    public navCtrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.storage.get('storage_xxx').then((res)=>{

      this.dataStorage = res;
      this.tableName = this.dataStorage.dataUser.name;
    
    });

  }
  
  navigate(){
    this.router.navigate(['ayuda'])
  }

  async logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/code']);
    const toast = await this.toastCtrl.create({
      message: 'Ha cerrado sesión, vuelva pronto',
      duration:1500,
      position: 'bottom'
    });
    toast.present();

  }
}
