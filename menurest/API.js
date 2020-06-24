var faker=require('faker/locale/es_MX')
function generateComida(){
    //arreglo para la funcio de objetos que se van a trabajar
    var comida=[]
    for (var id=0;id<20;id++){
        var name = faker.commerce.product();
        var details= faker.lorem.words();
        var price= faker.commerce.price();
        var food= faker.image.food();

        comida.push({
            //organiza la informacion descargada de faker en etiquetas de json
            //en mayusuclas
            "id": id,
            "NAME": name,
            "DETAILS": details,
            "PRICE": price,
            "FOOD": food
        })
    }
    return{"Comida":comida}
}
//modulo de exportacion para el archivo json
module.exports=generateComida
