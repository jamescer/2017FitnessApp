import { Component, OnInit } from '@angular/core';

declare const navProperties: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  
  // $(function() {
  //   $("#header-placeholder").load("_header.html", function() {
  //     $("#nav-placeholder").load(navProperties.mainNav, function() {
  //       $(".nav-link").removeClass("active");
  //       $(`#${navProperties.currentSection}-link`).addClass("active");
  //     });
  //   });
  // });
  
  // $(function() {
  //   $("#footer-placeholder").load("_footer.html", function() {});
  // });
  // $(function() {
  //   $("#scripts-placeholder").load("_scripts.html", function() {});
  // });
  
}
