import { Column, Entity } from "typeorm";
import CommonEntity from "./common.entity";

@Entity({
  name: "user",
})
class User extends CommonEntity {
    @Column({
        name:"first_name"
    })
    firstName!:string;


     @Column({
        name:"middle_name"
    })
    middleName!:string;

    
    @Column({
        name:"last_name"
    })
    lastName!:string;

    @Column({
        name:"email",
        unique:true
    })
    email!:string;

    @Column({
        name:"password"
    })
    password!:string;

    
}
export default User;