// code without DI
// class Tyre{

// }

// class Engine{
    
// }

// class Car{
//     engine: Engine = '';
//     tyre: Tyre = '';

//     constructor(){
//         this.engine = new Engine();
//         this.tyre = new Tyre();
//     }

// }



// code with DI
class Tyre{
    constructor(tyre: string){

    }
}

class Engine{
    constructor(tyre: string){

    }
}

// let engine = new Engine();
// let tyre = new Tyre();

class Car{
    engine: Engine = '';
    tyre: Tyre = '';

    constructor(engine: Engine, tyre: Tyre){
        this.engine = engine;
        this.tyre = tyre;
    }

}