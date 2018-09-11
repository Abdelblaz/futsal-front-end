import { IHall } from './ihall';

export interface IPlace {
id: number;
name: string;
city: string;
locality: string;
street: string;
nStreet: number;
postcode: number;
hOpen: number;
hClose: number;
shower: boolean;
listHall: Array<IHall>;

}
