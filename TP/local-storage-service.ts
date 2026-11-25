import { Injectable } from '@angular/core';

/**
 * This class is an helper class for maniplating the local storage.
 * It can be injected in your components with the following syntax:
 *
 * ```ts
 * service = inject(LocalStorageService)
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  /**
   * Writes to the localstorage a given object at a given key.
   *
   * @param key the local storage key to write
   * @param object any thing that can be serialized
   *
   * @returns nothing
   *
   *
   * Usage example:
   *
   * ```ts
   * const fruits = ['Apple','Banana', 'Mango']
   * this.service.write('my-fruits', fruits)
   * ```
   *
   */
  write(key: string, object: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(object));
    } catch (e) {
      console.error('Cannot serialize object', object, e);
    }
  }

  /**
   * This method reads some data from the local storage at a given key.
   *
   * @param key the local storage key to read
   * @param defaultValue the defulat value if the data is null, or cannot be deserialized.
   * @returns the data that you want :)
   *
   * Example usage :
   *
   * ```ts
   * const fruits = this.service.read<string[]>('my-fruits',[])
   * ```
   *
   */
  read<T>(key: string, defaultValue: T): T {
    let data: string | null = null;
    try {
      data = localStorage.getItem(key);
      if (data) return JSON.parse(data);
      else return defaultValue;
    } catch (e) {
      console.error('Cannot deserialize object', data, e);
      return defaultValue;
    }
  }
}
