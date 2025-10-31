import { Injectable } from "@angular/core";
import { Word } from './word';

@Injectable()
export class WordServis {
  "words": Word[] = [
    {
      "id": 1,
      "title": "Nissan",
      "text": "5NPDH4AE1CH568079",
      "photo": "../assets/image/ASUS_Logo.png"
    },
    {
      "id": 2,
      "title": "Volkswagen",
      "text": "KL4CJESB6EB246448",
      "photo": "../assets/image/Apple-logo.png"
    },
    {
      "id": 3,
      "title": "GMC",
      "text": "1C3CC4FB8AN503644",
      "photo": "../assets/image/iron-small-2.png"
    },
    {
      "id": 4,
      "title": "Dodge",
      "text": "WAUSF98E08A488901",
      "photo": "../assets/image/galaxy-s21.png"
    },
    {
      "id": 5,
      "title": "Toyota",
      "text": "WDDHF0EB3FB731424",
      "photo": "../assets/image/shivaki.png"
    },
    {
      "id": 6,
      "title": "Hyundai",
      "text": "KMHTC6AD4DU766591",
      "photo": "../assets/image/Samsung_Logo.png"
    },
    {
      "id": 7,
      "title": "Mitsubishi",
      "text": "5UXWX7C53EL069257",
      "photo": "../assets/image/Rectangle 6.jpg"
    },
    {
      "id": 8,
      "title": "Volkswagen",
      "text": "WBASN4C54BC191283",
      "photo": "../assets/image/halal.png"
    },
    {
      "id": 9,
      "title": "Porsche",
      "text": "5J8TB4H31GL253254",
      "photo": "../assets/image/hairbrush.png"
    },
    {
      "id": 10,
      "title": "Ford",
      "text": "KNAGM4AD5F5477320",
      "photo": "../assets/image/photo_camera.png"
    }
  ]
  /**
   * 
   */

  getAllWords() {
    return this.words;
  }
  /**
   * 
   */
  getWordById(id: number) {
    return this.words.find((word) => word.id === id)
  }
  // urel = "http://localhost:3000/cards";
  /**
   * 
   */
  // async getAllCards(): Promise<Word[]> {
  //     const data = await fetch(this.urel);
  //     return (await data.json()) ?? [];
  // }
  /**
   * 
   */
  // async getCardById(id: number) {
  //     const card = await fetch(`${this.urel}/${id}`);
  //     return (await card.json()) ?? [];
  // }
  /**
   * 
   */
  // sendData(fio: string, comment: string) {
  //     alert(`${fio}: ${comment}`)
  // }
}