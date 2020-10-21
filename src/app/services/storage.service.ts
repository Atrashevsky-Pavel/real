import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private key = 'storage';
  getStorage(): any[] {
    return  JSON.parse(localStorage.getItem(this.key));
  }
  addItemStorage(value): any[] {
    const memory = JSON.parse(localStorage.getItem(this.key));
    let id;
    (memory.length) ? id = memory[memory.length - 1].id + 1 : id = 1;
    memory.push({
      ...value,
      id
    });
    localStorage.setItem(this.key, JSON.stringify(memory));
    return memory;
  }
  removeItemStorage(value): any[] {
    const memory = JSON.parse(localStorage.getItem(this.key));
    const result = [];
    let counter = 1;
    for (const item of memory) {
      if (item.id !== value.id) {
        result.push({
          title: item.title,
          text: item.text,
          id: counter
        });
        counter++;
      }
    }
    localStorage.setItem(this.key, JSON.stringify(result));
    return result;
  }
  changeItemStorage(value): any[] {
    const memory = JSON.parse(localStorage.getItem(this.key));
    memory.forEach((item) => {
      if (item.id === value.id) {
       item.title = value.title;
       item.text = value.text;
      }
    });
    console.log(memory);
    localStorage.setItem(this.key, JSON.stringify(memory));
    return memory;
  }
}
