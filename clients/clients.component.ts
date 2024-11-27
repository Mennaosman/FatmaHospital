import { Component, ElementRef , Output, EventEmitter, Input } from '@angular/core';
import{ Client } from './../client';
import { Element, HtmlTagDefinition } from '@angular/compiler';




@Component({
  selector: 'app-clients',
  templateUrl:'./clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  @Output() dataEmitter: EventEmitter<Client[]> = new EventEmitter<Client[]>();
  Category_Name: string = "العملاء";

  client: Client[] = [
    { id: 1, name: 'شركات البترول',description:"",imgsrc:"fa-solid fa-oil-can",subclient:["العامريه للبترول","مصر للبترول", "مصر لصناعة الكيماويات", "بتروكيماويات", "بترومنت", "بوتاجسكو", "جاسكو", "بتروجاس", "اسكندريه للبترول", "بتروجيت"] },
    { id: 2, name: 'شركات التأمين',description:"",imgsrc:"fa-solid fa-hospital-user",subclient:["كير اند كيور", "كير بلاس", "عناية مصر", "اكتيف","اكبا"] },
    { id: 3, name: 'نقابات' ,description:"",imgsrc:"fa-solid fa-people-roof",subclient:["نقابه المهندسين","نقابه المحامين"]},
    { id: 4, name: 'جهات حكوميه',description:"",imgsrc:"fa-solid fa-building-columns",subclient:["اسكندريه لتداول الحاويات","الجهاز المركزى للمحاسبات"]},
    { id: 5, name: 'جهات خاصه' ,description:"",imgsrc:"fa-solid fa-building",subclient:["الحديد والصلب عز الدخيله"]},
    { id: 6, name: 'التأمين الصحي',description:"",imgsrc:"fa-solid fa-hospital-user",subclient:[] },
    { id: 7, name: 'نفقت الدوله' ,description:"",imgsrc:"fa-solid fa-house-medical-flag",subclient:[]}
  ];

 
}
