import { Component } from '@angular/core';
import { clinics } from '../clinics';

@Component({
  selector: 'app-outside-clinics',
  templateUrl: './outside-clinics.component.html',
  styleUrl: './outside-clinics.component.css'
})
export class OutsideClinicsComponent {
  Category_Name:string="العيادات  الخارجيه"
clinics1:clinics[]=[
{clinic:" عيادة الجراحه العامه",clinic_description:""},
{clinic:"عيادة القلب والايكو",clinic_description:""},
{clinic:"عيادة الباطنه والسكر",clinic_description:""},
{clinic:"عيادة الجهاز الهضمي",clinic_description:""},
{clinic:"عيادة الغدد الصماء",clinic_description:""},
{clinic:"عيادة العظام",clinic_description:""},
{clinic:"عيادة النسا",clinic_description:""},
{clinic:"عيادة الاسنان",clinic_description:""},
{clinic:"عيادة الاطفال",clinic_description:""},
{clinic:"عيادة الرمد",clinic_description:""},


];
clinics2:clinics[]=[

  {clinic:"عيادة الجلديه",clinic_description:""},
  {clinic:"عيادة المخ والاعصاب",clinic_description:""},
  {clinic:"عيادة انف واذن وحنجره",clinic_description:""},
  {clinic:"عيادة الاوعيه الدمويه",clinic_description:""},
  {clinic:"عيادة جراحة التجميل",clinic_description:""},
  {clinic:"عيادة الصدريه",clinic_description:""},
  {clinic:"عيادة النفسيه والعصبيه",clinic_description:""},
  {clinic:"عيادة المسالك البوليه",clinic_description:""},
  {clinic:"عيادة الوجه والفكين",clinic_description:""},
  
  ];
}
