import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import SwaggerUi from "swagger-ui-express"



const app = express()

app.use(express())

let company=[
    {name:"HP" , model: "v2" ,launchyear: "2020"},
    {name:"Phlipies" , model: "xs3" ,launchyear: "2019"},
    {name:"Zebronices" , model: "u30s" ,launchyear: "2022"}

]


/**
 * @swagger
 * /data:
 *      get: 
 *       summary: Get all book information
 *       description: This API returns book information
 *       responses: 
 *        200: 
 *         description: successful response with book data.
 *         content:
 *            application/json: 
 *             schema: 
 *              type: string
 *              items:
 *                type: object
 *                properties: 
 *                 id: 
 *                  type: string
 *                 model: 
 *                  type: string
 * 
 * 
 * 
 * 
 */

const options = {
swaggerDefinition:{
openapi:"3.0.0",
info: {
    title: "Node.js project",
    version:"1.0.0"
},
servers:[
    {
        url: "http://localhost:8000/"
    }
]
},
apis:[
    "./index.js"
]
}



const swaggershel = swaggerJSDoc(options)
app.use("/api-docs" , SwaggerUi.serve ,SwaggerUi.setup(swaggershel))




app.get("/data" , (req,res)=>{
    res.status(200).json(company)
    console.log("swagger")


})


app.listen(8000,() =>{
    console.log("server is started")
})
