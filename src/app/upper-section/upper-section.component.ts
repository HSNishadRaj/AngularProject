import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-section',
  templateUrl: './upper-section.component.html',
  styleUrls: ['./upper-section.component.scss']
})
export class UpperSectionComponent {


  menuItems: any[] = [
    { label: 'Home' },
    { label: 'About', link: '/about' },
    {
      label: 'Our Products',
      children: [
        { label: 'Product 1', link: '/product' },
        { label: 'Product 2', link: '/product' },
        { label: 'Product 3', link: '/product' },
        { label: 'Product 4', link: '/product' }
      ]
    },
    { label: 'Contact Us', link: '/contact' },
  ];
  
}
