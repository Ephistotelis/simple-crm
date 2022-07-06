

export class User {
    firstName: string;
    lastName: string;
    birthday: number;
    street: string;
    zipCode: string;
    city: string;
    userName: string;
    role: string;
    email: string;
    customIdField: string;
    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthday = obj ? obj.birthday : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.userName = obj ? obj.userName : '';
        this.role = obj ? obj.role : 'User';
        this.email = obj ? obj.email : '';
        this.customIdField = obj ? obj.customIdField : '';
    }

    public toJson(){
       return {
           firstName: this.firstName,
           lastName: this.lastName,
           birthday: this.birthday,
           street: this.street,
           zipCode: this.zipCode,
           city: this.city,
           userName: this.userName,
           role: this.role,
           email: this.email,
        }
    }
}