import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  
  logo = '../../assets/logo.png';

  ngOnInit(){
      
          console.log($('.programming').toggleClass)
          $(window).scroll(function() {
            var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
              if (isMobile) {
                  console.log("mobile!")
              }
              else{

          var $win = $(window)
          var logo = $('.logo')

                if ($win.scrollTop() < 50){
                  logo.attr('src' , '../../assets/logo.png')
                  $('.navbar').delay(3000).css({'height': '100px'})
                  $('.logo').delay(3000).css({'width': '65px'})
                }
                else if($win.scrollTop() < 60){
                  logo.attr('src' , '../../assets/longlogo.png')
                }
                else {
                  logo.attr('src' , '../../assets/longlogo.png')
                  $('.navbar').delay(3000).css({'height': '50px'})
                  $('.logo').delay(3000).css({'width': '100px'})
                }

              }

          
              })
      

          }

}

