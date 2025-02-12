
export class Employee {
    employeeId!: string;
    firstName!: string;
    lastName!: string;
    role!: 'ADMIN' | 'Manager' | "Employee";
    gender!: 'Male' | 'Female';
    joinedDate! : Date | string;
    dob!: Date | string;
    addressLine01!: string;
    addressLine02!: string;
    addressLine03!: string;
    addressLine04!: string;
    addressLine05!: string;
    postalCode!: string;
    contactNo!: string;
    email! : string;
}