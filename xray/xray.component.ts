import { Component } from '@angular/core';
import { xraysdepartments } from '../xraysdepartments';

@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrl: './xray.component.css'
})
export class XrayComponent {
Category_Name:string=" قسم الاشعه"

xrays: xraysdepartments[] = [
  { id: 1,department:"اشعه عاديه",imgsrc:"../../assets/xray1.jpg"},
  { id: 2,department:"اشعه مقطعيه",imgsrc:"../../assets/ct1.jpg"},
  { id: 3, department:"اشعه فوق صوتيه",imgsrc:"../../assets/us.jpg"},
  { id: 4, department:"دوبلر",imgsrc:"../../assets/doppler.jpg"},
  { id: 5,department:"بانوراما اسنان",imgsrc:"../../assets/panorama.png"},

];
}
