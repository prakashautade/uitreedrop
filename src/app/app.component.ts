import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grocery = [
    {
      id: 1,
      name: 'Oil',
      type: 'grocery',
      children: [
        { id: 2, name: 'Coconut', type: 'grocery' },
        { id: 3, name: 'Sunflower', type: 'grocery' }
      ]
    },
    {
      id: 4,
      name: 'Grains',
      type: 'grocery',
      children: [
        { id: 5, name: 'Wheat', type: 'grocery' },
        {
          id: 6,
          name: 'Rice',
          type: 'grocery',
          children: [
            { id: 7, name: 'Basmati', type: 'grocery' }
          ]
        }
      ]
    }
  ];
  fruits = [
    {
      id: 8,
      hasChildren: false,
      name: 'Mango',
      type: 'fruit',
    },
    {
      id: 9,
      hasChildren: false,
      name: 'Apple',
      type: 'fruit'
    },
    {
      id: 10,
      hasChildren: false,
      name: 'Banana',
      type: 'fruit'
    }
  ];
  options = {
    allowDrag: true,
    allowDrop: false
  };
  title = 'uitreedrop';
  groceryCart = [];
  fruitCart = [];

  onGroceryDrop($event) {
    this.groceryCart.push($event.element.data);
  }

  allowGroceryDrop(element) {
    if (!this.isElementFromGrocery(element.data)) {
      return false;
    }
    return true;
  }

  isElementFromGrocery(element) {
    return element.type === 'grocery';
  }

  onFruitDrop($event) {
    this.fruitCart.push($event.element.data);
  }

  allowFruitDrop(element) {
    if (!this.isElementFromFruit(element.data)) {
      return false;
    }
    return true;
  }

  isElementFromFruit(element) {
    return element.type === 'fruit';
  }
}
