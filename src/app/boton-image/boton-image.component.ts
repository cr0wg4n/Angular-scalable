import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDataService} from '../image-data.service'

@Component({
  selector: 'app-boton-image',
  templateUrl: './boton-image.component.html',
  styleUrls: ['./boton-image.component.css']
})
export class BotonImageComponent implements OnInit {
  data$: Observable<any>;
  constructor(private data: ImageDataService) { 
  }
  fetchImage() {
    this.data$ = this.data.fetchImage();
  }
  ngOnInit() {
  }

}
