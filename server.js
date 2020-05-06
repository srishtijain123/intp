const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
mongoose
  .connect(
   "mongodb+srv://rishabh:1827000423@cluster0-iwkpv.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const candidateZoneRouter = require("./routes/candidateZone");
const contactUsRouter = require("./routes/contactUs");
const employerZoneRouter = require("./routes/employerZone");
const partnerZoneRouter = require("./routes/partnerZone");

app.use("/candidateZone", candidateZoneRouter);
app.use("/contactUS", contactUsRouter);
app.use("/employerZone", employerZoneRouter);
app.use("/partnerZone", partnerZoneRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
