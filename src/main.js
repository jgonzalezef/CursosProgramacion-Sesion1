// CREAR NUESTRO PRIMER SERVIDOR CON NODE JS Y EXPRESS
const express = require('express');

const app = express();

const PORT = 3000; // 8080 8000 8001 542

// () => {} FUNCION ANONIMA CALLBACK
// function inicialServidor() { // funcion
//
//}

// ES UNA FORMA DE COMO DECLARAMOS NUESTRAS RUTAS
app.use("/facebook/melissa",(req,res) => {


    let nombre = "Melissa";
    let totalAmigos = 10;
    let seguidores = 20;
    let estadoCivil = "casada";

    res.json({
        "facebook":{
            "perfil":{
                "id":"100007136821519",
                "nombre":nombre,
                "total_amigos":totalAmigos,
                "estado_civil":estadoCivil,
                "segidores":seguidores,
                "mejor_amigo":{
                    "id":"gibram.rosascruz",
                    "nombre":"Gibram Rosas",
                    "total_amigos":null,
                    "amigos_en_comun":"58",
                    "estado_civil":"en una relacion",
                    "segidores":null
                }
            }
        }
    });
});

app.use("/facebook/mau",(req,res) => {


    let nombre = "Mauricio";
    let totalAmigos = 480;
    let seguidores = 20;
    let estadoCivil = "Casado";

    res.json({
        "facebook":{
            "perfil":{
                "id":"100007136821519",
                "nombre":nombre,
                "total_amigos":totalAmigos,
                "estado_civil":estadoCivil,
                "segidores":seguidores,
                "mejor_amigo":{
                    "id":"gibram.rosascruz",
                    "nombre":"Gibram Rosas",
                    "total_amigos":null,
                    "amigos_en_comun":"58",
                    "estado_civil":"en una relacion",
                    "segidores":null
                }
            }
        }
    });
});

app.use("facebook/usuarios",(req,res) => {
    // RETORNAR EL LISTADO DE USUARIOS DE MAU Y MELISSA: INVESTIGAR COMO RETORNAR LOS DOS USUARIOS
});

// CUANDO EL PUERTO ES http://localhost:80 = localhost 
app.listen(PORT,() => {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO: "+PORT);
    console.log("NUESTRO PRIMER SERVIDOR WEB HA SIDO CREADO CON EXITO");
});