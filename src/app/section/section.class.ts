

// function identity<Type>(arg: Type): Type {
//     return arg;
//   }
// let ko=identity("xd");
// interface StringArray {
//     [index: number]: string;
//   }
// const myArray: StringArray = ["asd","qwe","zxc","ghj"];
// const secondItem = myArray["5"];
// type Xd = number[]
// function firstElement<Xd>(arr: Xd[]): Xd {
//     return arr[0];
// }
// const arr1:number[] = [1, 2, 3];
// const arr2:number[] = [4, 5, 6];
// arr1.push(...arr2);
// function multiply(n: number, ...m: number[]) {
//     return m.map((x) => n * x);
//   }
//   // 'a' gets value [10, 20, 30, 40]
// export const a = multiply(10, 1, 2, 3, 4);




export class Lenguage{

    private _name:string;
    private _skill:number;

    constructor(value1:string,value2?:number){
        this._name=value1;
        this._skill=value2 ?? 0;
    }

    

    get name():string{
        return this._name.toUpperCase();
    }

    set name(value:string){
        this._name=value;
    }

    get skill(){
        return this._skill;
    }

    set skill(value){
        this._skill=value;
    }

    objLenguage():Object{
        let lenguageobj={
            name:this._name,
            skill:this._skill,
        }

        return lenguageobj;
    }

    textofunc(){
        return `${this._name}  ${this._skill}`
    }

    category():string{
        const rank=this._skill > 8 ? "EXPERT":"DEV";
        return rank;
    }




    
}


export default class Portafolio{

    readonly _datame:any;
    readonly _lenguages:any;

    constructor(value:any,value2:any){
        this._datame=value;
        this._lenguages=value2
    }


    get datame():any{
        return this._datame
    }

    get lenguages():any{
        return this._lenguages
    }

}