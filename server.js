// imports packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
 const dotenv = require("dotenv");
 const connectDB = require("./config/db");

//env config
 dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
 const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
 connectDB();




//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json()); // resive json data by client
app.use(morgan("dev"));

//routes
// app.get('/',(req,res)=>{
//     res.status(200).send({
//         "message":"node server"
//     })
//  })


 app.use("/api/v1/user", userRoutes);
 app.use("/api/v1/blog", blogRoutes);

 




 // app.listen(8080, () => {
//       console.log("server runing on port 8080 ")
//     });


// Port
const PORT = process.env.PORT || 8080;
 //listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan
      .white
  );
});


