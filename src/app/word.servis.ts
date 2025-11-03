import { Injectable } from "@angular/core";
import { Word } from './word';

@Injectable()
export class WordServis {
  urel = "http://localhost:3000/words";
  /**
  /**
   * 
   */

  async getAllWords(): Promise<Word[]> {
      const data = await fetch(this.urel);
      return (await data.json()) ?? [];
  }
  /**
   * 
   */
  async getWordById(id: number) {
      const word = await fetch(`${this.urel}/${id}`);
      return (await word.json()) ?? [];
  }
  /**
   * 
   */
  sendData(fio: string, comment: string) {
      alert(`${fio}: ${comment}`)
  }
}