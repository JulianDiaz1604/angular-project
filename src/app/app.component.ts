import { Component } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Julian';
  age = 20;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Julian',
    age: 20,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = "";
  groups: string[] = ['505', 'Arctic Monkeys', 'Imagine Dragons'];
  newGroup = "";
  phones: Phone[] = [
    {
      name: 'iPhone 12',
      price: 699,
      image: './assets/images/iPhone12.jpg',
      category: 'iPhone'
    },
    {
      name: 'OnePlus 9 Pro',
      price: 799,
      image: './assets/images/OnePlus9Pro.jpg'
    },
    {
      name: 'Samsung S21 Ultra',
      price: 1199,
      image: './assets/images/s21Ultra.jpg'
    },
    {
      name: 'Xiaomi Mi 11',
      price: 239,
      image: './assets/images/XiaomiMi11.jpg'
    }
  ]

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  increaseAge(){
    this.person.age ++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  addGroup(){
    this.groups.push(this.newGroup);
    this.newGroup = "";
  }

  deleteGroup(index: number){
    this.groups.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }
}
