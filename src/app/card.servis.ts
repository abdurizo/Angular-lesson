import { Injectable } from "@angular/core";
import { Card } from './card';

@Injectable()
export class CardServis {
    cards: Card[] = [
        {
            id: 1,
            title: 'Lincoln',
            text: 'Read It and Weep',
            photo: '../assets/image/ASUS_Logo.png',
        },
        {
            id: 2,
            title: 'Mazda',
            text: 'Happiness',
            photo: '../assets/image/Apple-logo.png',
        },
        {
            id: 3,
            title: 'Audi',
            text: '12:08 East of Bucharest (A fost sau n-a fost?)',
            photo: '../assets/image/iron-small-2.png',
        },
        {
            id: 4,
            title: 'Chevrolet',
            text: 'Drums Along the Mohawk',
            photo: '../assets/image/galaxy-s21.png',
        },
        {
            id: 5,
            title: 'Hyundai',
            text: 'Old Boy',
            photo: '../assets/image/shivaki.png',
        },
        {
            id: 6,
            title: 'GMC',
            text: 'Evocateur: The Morton Downey Jr. Movie',
            photo: '../assets/image/Samsung_Logo.png',
        },
        {
            id: 7,
            title: 'Pontiac',
            text: 'Penthouse',
            photo: '../assets/image/Rectangle 6.jpg',
        },
        {
            id: 8,
            title: 'Nissan',
            text: 'Night Moves',
            photo: '../assets/image/halal.png',
        },
        {
            id: 9,
            title: 'Ford',
            text: 'King Is Alive, The',
            photo: '../assets/image/hairbrush.png',
        },
        {
            id: 10,
            title: 'Toyota',
            text: 'Van, The',
            photo: '../assets/image/photo_camera.png',
        },
    ];
    /**
     * 
     * @returns 
     */
    getAllCards() {
        return this.cards
    }
    /**
     * 
     */
    getCardById(id: number) {
        return this.cards.find((card) => card.id === id)
    }
    /**
     * 
     */
    sendData(fio:string, comment:string){
        alert(`${fio}: ${comment}`)
    }
}