import { AppComponent } from './app.component';

let c = new AppComponent();
console.log(c.string);

interface product  {
  id?: any;
  desc: string;
  price: number;
}

let item: product = {
  desc: "iPhone",
  price: 60000
}

let anotherItem = {
  id: '100',
  desc: 'Merc C5',
  price: 2000000
}

item = anotherItem;
console.log(item);