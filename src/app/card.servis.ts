import { Injectable } from "@angular/core";
import { Card } from './card';

@Injectable()
export class CardServis {
    urel = "http://localhost:3000/cards";
    /**
     * 
     */
    async getAllCards(): Promise<Card[]> {
        const data = await fetch(this.urel);
        return (await data.json()) ?? [];
    }
    /**
     * 
     */
    async getCardById(id: number) {
        const card = await fetch(`${this.urel}/${id}`);
        return (await card.json()) ?? [];
    }
    /**
     * 
     */
    sendData(fio: string, comment: string) {
        alert(`${fio}: ${comment}`)
    }
}