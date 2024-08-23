const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ummadsofi@gmail.com",
      pass: "vqdn mscy czfn yfpi",
    },
  });

  const mailOptions = {
    from: email,
    to: "ummadsofi@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Message sent successfully");
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
