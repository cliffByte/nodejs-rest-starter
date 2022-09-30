import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


class CommonEntity {

    @PrimaryGeneratedColumn("uuid")
    id:string;


    @CreateDateColumn({ name: 'created_at'})
    createdAt!: Date;
    
    @UpdateDateColumn({ name: 'updated_at'})
    UpdatedAt!: Date;
    
    
}


export default CommonEntity;