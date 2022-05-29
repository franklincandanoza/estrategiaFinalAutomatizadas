import {faker} from "@faker-js/faker"

export class DataForMember {

    create_email(){
        return faker.internet.email()
    }

    create_name(){

        return faker.name.firstName()
    }

    create_labels(){
        return faker.lorem.paragraph()
    }

    create_note(){
        return faker.lorem.paragraph()
    }

    build_member_data(rows){

        let data = []

        for(var i = 0; i < rows ; i++){
            data[i] = {"name":this.create_name(), "email": this.create_email(), "labels": this.create_labels(), "note": this.create_note()}
        }

        return data

    }

}