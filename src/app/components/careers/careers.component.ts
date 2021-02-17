import { Component, OnInit,ChangeDetectorRef,Input, ViewChild ,NgZone,ElementRef } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
// import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {  FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CommonService } from '../../common/services/common/common.service';
import { MetaServiceService } from '../../common/meta-service.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  loading :boolean = true; 
  career: FormGroup;
  contact : any = [];
  contacts :any;
  footersection: any;
  fileBase64 : any;
  imageError : Number = 0;
  // certEscolar: File ;

  constructor(public comman:CommonService,private meta : MetaServiceService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataInit();
    this.MetaTags();
    this.career = this.formBuilder.group({
        name : ['',[Validators.required]],
        email: ['',[Validators.required]],
        reach: ['',[Validators.required]],
        tell_us: ['',[Validators.required]],
        resume: ['',[Validators.required]],
        // fileSource: ['',[Validators.required]],
    });
    // this.contact = this.route.snapshot.data['contact'];
    // this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
    // this.footersection = JSON.stringify(this.contact['footersection']) 
    //  console.log(this.contact, "contact");    
  }

  get f() { return this.career.controls; }

  getDataInit(){
    let dataReq = {
      "pagename": "careers"
  }
  this.comman.carerrsData(dataReq).subscribe(data => {
    if(data){
      this.contact = data;
       this.contacts = this.sanitizer.bypassSecurityTrustHtml(this.contact.details.contacts);
      this.footersection = JSON.stringify(this.contact['footersection']) 
     console.log(this.contact, "contact");    
    }    
});


    
  }
  // public onFileChanged(event: any) {
  //   if (event.target.files && event.target.files.length) {
  //   const file = event.target.files[0];
  //   this.certEscolar = file;
  //   }
  // }
  // onFileChange(event) {
  
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.career.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }


  handleUpload(event : any) {
    this.imageError = 0;
    this.loading = true;
    console.log("file Upload", event.target.files[0], "size is", event.target.files[0].size )
    // const max_size = 625000; 253104
    // const allowed_types = ['image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'image/jpg', 'application/pdf', ];
    // const max_height = 15200;
    // const max_width = 25600;

    if (event.target.files[0].size <= 250000) {
      this.imageError = 0;
      // console.log(event, "file Upload", event.target.files[0], "size is", event.target.files[0].size )
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.loading = false;
          this.fileBase64 = reader.result;
          console.log(this.fileBase64, "base 64 bytes");
      };
    }else{
      this.loading = false;
      this.imageError = 1;  // 1 for max size exceed;
      console.log("size exceed");
    }

}




// fileChangeEvent(fileInput: any) {
//   this.imageError = '';
//   if (fileInput.target.files && fileInput.target.files[0]) {
//       // Size Filter Bytes
//       const max_size = 20971520;
//       const allowed_types = ['image/png', 'image/jpeg'];
//       const max_height = 15200;
//       const max_width = 25600;

//       if (fileInput.target.files[0].size > max_size) {
//           this.imageError =
//               'Maximum size allowed is ' + max_size / 1000 + 'Mb';

//           return false;
//       }

//       if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
//           this.imageError = 'Only Images are allowed ( JPG | PNG )';
//           return false;
//       }
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//           const image = new Image();
//           image.src = e.target.result;
//           image.onload = rs => {
//               const img_height = rs.currentTarget['height'];
//               const img_width = rs.currentTarget['width'];

//               console.log(img_height, img_width);


//               if (img_height > max_height && img_width > max_width) {
//                   this.imageError =
//                       'Maximum dimentions allowed ' +
//                       max_height +
//                       '*' +
//                       max_width +
//                       'px';
//                   return false;
//               } else {
//                   const imgBase64Path = e.target.result;
//                   this.cardImageBase64 = imgBase64Path;
//                   this.isImageSaved = true;
//                   // this.previewImagePath = imgBase64Path;
//               }
//           };
//       };

//       reader.readAsDataURL(fileInput.target.files[0]);
//   }
// }


  onSubmit(){
    this.loading = true;

    let myFormValue = this.career.value;

    myFormValue.fileBase64 = this.fileBase64;

    console.log(myFormValue,'myFormData');
   
    this.comman.career(myFormValue).subscribe(data=> {
      this.loading = false;
      if(data['response'] == 200){
        this.career.reset();
      }
      console.log(data, "contact");    
    });
  }

  MetaTags(){
    let dataReq = {
      "page": "careers",
      "id": ""
    }
    this.meta.getProduct(dataReq).subscribe(data => {
        this.meta.updateMetaTags(data['seodata']);
        this.loading = false;
    });
  }
  
}
