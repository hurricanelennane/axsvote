export class Vote {
    constructor(
        //public id:number,
        public name:string,
        public subject:string,
        public type:string,
        public response:string
    ){}
    public isResponse = function(){
        return this.type == "Response";
    }
}
