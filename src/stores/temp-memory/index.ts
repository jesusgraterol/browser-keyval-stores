import { IRecordID } from '../../shared/types.js';
import { ITempMemoryStore } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Temp Memory Store
 * Object in charge of storing and managing records in a local property.
 */
class TempMemoryStore<T> implements ITempMemoryStore<T> {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // the identifier of the store instance
  public readonly id;

  // this is the fallback store mechanism, it is supported by all browsers
  public readonly isCompatible: boolean = true;

  // the object holding the records
  private readonly __data: Record<string, T> = {};





  /* **********************************************************************************************
   *                                         CONSTRUCTOR                                          *
   ********************************************************************************************** */
  constructor(id: string) {
    this.id = id;
  }





  /* **********************************************************************************************
   *                                           METHODS                                            *
   ********************************************************************************************** */


  /**
   * ...
   * @param id 
   */
  public read(id: IRecordID): T | undefined {

  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type ITempMemoryStore,

  // service
  TempMemoryStore,
};
