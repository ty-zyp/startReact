import { ADD_PERSON } from "../constant";

export function createAddPerson (data) {
  return {
    type:ADD_PERSON,data
  }
}