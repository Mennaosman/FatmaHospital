import { Component } from '@angular/core';
import { Client } from '../client';
import { services } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clientsData: Client[] = [
    { id: 1, name: 'شركات البترول',description:"",imgsrc:"fa-solid fa-oil-can",subclient:["العامريه للبترول","مصر للبترول", "مصر لصناعة الكيماويات", "بتروكيماويات", "بترومنت", "بوتاجسكو", "جاسكو", "بتروجاس", "اسكندريه للبترول", "بتروجيت"] },
    { id: 2, name: 'شركات التأمين',description:"",imgsrc:"fa-solid fa-hospital-user",subclient:["كير اند كيور", "كير بلاس", "عناية مصر", "اكتيف","اكبا"] },
    { id: 3, name: 'نقابات' ,description:"",imgsrc:"fa-solid fa-people-roof",subclient:["نقابه المهندسين","نقابه المحامين"]},
    // { id: 5, name: 'جهات خاصه' ,subclient:["الحديد والصلب عز الدخيله"]},
    // { id: 6, name: 'التأمين الصحي',subclient:[] },
    // { id: 7, name: 'نفقت الدوله' ,subclient:[]}
  ];

  servicesData:services[]=[


    { id: 1, name: 'العيادات الخارجيه',imgsrc:'fa-solid fa-house-chimney-medical',description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"outsideclinics"},
    { id: 2, name: ' الطوارىء',imgsrc:"fa-solid fa-truck-medical",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer.",routeractive:"services"},
    { id: 3, name: 'المعمل',imgsrc:"fa-solid fa-flask-vial",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"services"}, 
  ];
  servicesData2:services[]=[


    { id: 4, name: ' قسم الاشعه',imgsrc:"fa-solid fa-x-ray",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"xrays"},
    { id: 5, name: ' العنايه المركزه' ,imgsrc:"fa-solid fa-bed-pulse",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"intensivecare"},
    { id: 6, name: ' الحضانه',imgsrc:"fa-solid fa-baby-carriage",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"nursery"},
  ];
  // receiveData(data: Client[]) {
  //   this.clientsData = data;  // Receiving the array of strings from the child component
  // }
}
