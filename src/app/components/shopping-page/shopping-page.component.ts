import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {

    this.items = [
      {
        label: 'Women', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              label: 'Clothes',
              items: [{ label: 'Kurtis',  command: (event: any) => { this.menuClick(event) }}, { label: 'Ethnic Dresses', command: (event: any) => { this.menuClick(event) }}]
            },
            {
              label: 'Footwear',
              items: [{ label: 'Flat', command: (event: any) => { this.menuClick(event)}  }, { label: 'Shoes', command: (event: any) => { this.menuClick(event) }}]
            }
          ],
          [
            {
              label: 'Jewellery',
              items: [{ label: 'Fashion Jewellery', command: (event: any) => { this.menuClick(event) }}, { label: 'Earrings', command: (event: any) => { this.menuClick(event) }}]
            },
            {
              label: 'Beauty & Personal Care',
              items: [{ label: 'Makeup', command: (event: any) => { this.menuClick(event) }}, { label: 'Skin Care', command: (event: any) => { this.menuClick(event) }}]
            }
          ]
        ]
      },
      {
        label: 'Men', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Dresses',
              items: [{ label: 'Sports wear', command: (event: any) => { this.menuClick(event) } }, { label: 'Formal Wear', command: (event: any) => { this.menuClick(event) } }, { label: 'Casual Wear', command: (event: any) => { this.menuClick(event) } }]
            },
            {
              label: 'Footwear',
              items: [{ label: 'Shoes', command: (event: any) => { this.menuClick(event) } }, { label: 'Sandals & Floaters', command: (event: any) => { this.menuClick(event) } }]
            },

          ],
          [
            {
              label: 'Personal Care & Grooming',
              items: [{ label: 'Trimmers', command: (event: any) => { this.menuClick(event) } }, { label: 'Sunglasses', command: (event: any) => { this.menuClick(event) } }, { label: 'Watches', command: (event: any) => { this.menuClick(event) } }, { label: 'Perfumes', command: (event: any) => { this.menuClick(event) } }]
            },

          ],
        ]
      },

      {
        label: 'Kids', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Boys Clothing',
              items: [{ label: 'T-shirts, Jeans & Trousers', command: (event: any) => { this.menuClick(event) } }, { label: 'Track Pants & Sleepwear', command: (event: any) => { this.menuClick(event) } }, { label: 'Ethnic Wear', command: (event: any) => { this.menuClick(event) } }]
            },
            {
              label: 'Boys & Girls Footwear',
              items: [{ label: 'Shoes', command: (event: any) => { this.menuClick(event) } }, { label: 'Flip flops', command: (event: any) => { this.menuClick(event) } }]
            },

          ],
          [
            {
              label: 'Girls Clothing',
              items: [{ label: 'Clothing sets', command: (event: any) => { this.menuClick(event) } }, { label: 'SleepWear', command: (event: any) => { this.menuClick(event) } }]
            },
            {
              label: 'Infants',
              items: [{ label: 'Rompers & Onesies', command: (event: any) => { this.menuClick(event) } }, { label: 'Infants Accessories', command: (event: any) => { this.menuClick(event) } }]
            }
          ],
        ]
      },

      {
        label: 'Home & Living', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
          [
            {
              label: 'Bed Linen & Furnishing',
              items: [{ label: 'Bedsheets' }, { label: 'Blankets, Quilts & Dohar', command: (event: any) => { this.menuClick(event) } }, { label: 'Pillows & Pillow Cover', command: (event: any) => { this.menuClick(event) } }]
            },
            {
              label: 'Flooring',
              items: [{ label: 'Carpet', command: (event: any) => { this.menuClick(event) } }, { label: 'Fllor Mats & Door Mats', command: (event: any) => { this.menuClick(event) } }]
            },

          ],
          [
            {
              label: 'Kitchen & Table',
              items: [{ label: 'Cookware & Kitchen Tools', command: (event: any) => { this.menuClick(event) } }, { label: 'Kitchen Storage & Tableware', command: (event: any) => { this.menuClick(event) } }]
            },
            {
              label: 'Home Decor',
              items: [{ label: 'Wall Decor', command: (event: any) => { this.menuClick(event) } }, { label: 'Wind Chimes', command: (event: any) => { this.menuClick(event) } }]
            }
          ],
        ]
      }

    ]

  }

  moveToLogin(){
    this.router.navigateByUrl('loginpage');
  }

  menuClick(event){
    console.log(event.item.label);
    // this.router.navigateByUrl('clothes-item');
    
    this.router.navigate(['clothes-item'], { queryParams: { data: event.item.label } });
  }

}
