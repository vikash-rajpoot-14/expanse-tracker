const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
//.env
dotenv.config({ path: `${__dirname}/config.env` });

//database
const PORT = process.env.PORT || 5000;
//routes
const UserRoutes = require("./routes/user");
const ExpenseRoutes = require("./routes/expense");
// const PaymentRoutes = require("./routes/razorpay");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", UserRoutes);
app.use("/expenses", ExpenseRoutes);
// app.use("/payment", PaymentRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, `frontend/${req.url}`));
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, `frontend/Login/login.html`));
});

mongoose.connect(process.env.DB).then(() => {
    console.log("connected to DB");
    app.listen(PORT,()=>{
      console.log(`listening on http://localhost:${PORT}`);
    })
}).catch(err => {console.log(err);})