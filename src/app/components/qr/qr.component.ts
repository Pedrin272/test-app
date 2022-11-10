import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent implements OnInit, AfterViewInit {
  correctionLevel = 'H';
  form: any;
  value!: string;
  dowload!: ImageData;
  constructor(private formBuilder: FormBuilder) {}
  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe((value: any) => {
      this.value = value.text;
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [''],
    });
  }
  submit() {
    alert(this.form.value.text);
  }
  url: SafeUrl = '';
  onCodeChange(url: SafeUrl) {
    this.url = url;
  }
}
