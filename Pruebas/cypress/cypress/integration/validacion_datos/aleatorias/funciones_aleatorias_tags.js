import {faker} from "@faker-js/faker"

export class DataForTags {

    create_name(){
        return faker.name.firstName()
    }

    create_slug(){

        return faker.name.lastName()
    }

    create_description(){
        return faker.lorem.paragraph()
    }

    build_tag_data(rows){

        let data = []

        for(var i = 0; i < rows ; i++){
            data[i] = {"name":this.create_name(), "slug": this.create_slug(), "description": this.create_description()}
        }

        return data
    }

}