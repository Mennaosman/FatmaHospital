import { Component,ElementRef , Output, EventEmitter, Input} from '@angular/core';
import { services } from './../services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Output() dataEmitter: EventEmitter<services[]> = new EventEmitter<services[]>();  Category_Name:string="خدماتنا";

  services: services[] = [
    { id: 1, name: 'العيادات الخارجيه',imgsrc:'../../assets/download (1)..jfif',description:"يوجد بمستشفى فاطمه الزهراء عدد من العيادات المتخصصة تقديم الخدمات المهنية للمرضى",routeractive:"outsideclinics"},
    { id: 2, name: ' الطوارىء',imgsrc:"fa-solid fa-truck-medical",description:"نتميز بالريادة في خدمات ا لطوارئ والحالات الحرجة, حيث تعد واحدة من أحدث و أقوي وحدات الطوارئ",routeractive:"services"},
    { id: 3, name: 'المعمل',imgsrc:"fa-solid fa-flask-vial",description:"تلك مستشفى فاطمه الزهراء معمل تحاليل طبية على أعلى مستوى، يقوم بإجراء كافة أنواع التحاليل بدقة وسرعة عالية، مع إمكانية أخذ العينة من مكان تواجد المريض، يعمل المعمل على مدار الساعة ",routeractive:"services"}, 
    { id: 4, name: ' قسم الاشعه',imgsrc:"fa-solid fa-x-ray",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"xrays"},
    { id: 5, name: ' العنايه المركزه' ,imgsrc:"fa-solid fa-bed-pulse",description:"تمتلك مستشفى فاطمه الزهراء وحدة عناية مركزة متميزة، معدة للتعامل مع جميع الحالات الحرجة وحالات ما بعد الجراحة، تحت إشراف مجموعة متميزة من أساتذة كلية الطب على قدر كبير من الخبرة والكفاء",routeractive:"intensivecare"},
    { id: 6, name: ' الحضانه',imgsrc:"fa-solid fa-baby-carriage",description:"تعمل بسعة 6 حاضنات قابلة للنقل و مزودة بأحدث المعدات الطبية لتسهيل إدارة الحالات الحرجة للأطفال حديثي الولادة ويتم التشغيل تحت إشراف استشاريين فى طب الأطفال وحديثي الولادة.",routeractive:"nursery"},
    { id: 7, name: ' العمليات' ,imgsrc:"fa-regular fa-hospital",description:"مستشفى فاطمه الزهراء مزودة بغرف عمليات على أعلى مستوى مجهزة بأحدث المعدات والمستلزمات الطبية تستخدم أحدث التقنيات على مستوى العالم مما يجعلها مناسبة تماما لإجراء أكثر العمليات الجراحية دقة وتعقيدا",routeractive:"operations"},
    { id: 8, name: ' القسم الداخلي' ,imgsrc:"fa-solid fa-bed-pulse",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"operations"},
    { id: 9, name: ' القسطره' ,imgsrc:"fa-solid fa-heart",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"operations"},
    { id: 10, name: ' مركز العلاج الطبيعي' ,imgsrc:"fa-solid fa-person-dots-from-line",description:"This is a longer card with supporting description below as a natural lead-in to additional content. This content is a little bit longer",routeractive:"operations"}

  ];
}
