const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();

// //Password handler
// // const bcrypt = require('bcrypt');

// //Mongodb user model
// const patientuser = require("./models/patientuser");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// All get requests for webpages
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/forgot", function (req, res) {
  res.render("forgot");
});
app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});
app.get("/verify", function (req, res) {
  res.render("verify");
});
// // All post requests from forms

// app.post("/patientSignup", function (req, res) {
//   var patientData = req.body;
//   let {
//     firstname,
//     lastname,
//     phone,
//     gender,
//     address1,
//     address2,
//     zipcode,
//     state,
//     city,
//     country,
//     dob,
//     email,
//     passwd,
//   } = patientData;

//   firstname = patientData.firstname; //firstname.trim();
//   lastname = patientData.lastname; //lastname.trim();
//   phone = patientData.phone; //phone.trim();
//   gender = patientData.gender; //gender.trim();
//   address1 = patientData.address1; //address1.trim();
//   address2 = patientData.address2; //address2.trim();
//   zipcode = patientData.zipcode; //zipcode.trim();
//   state = patientData.state; //state.trim();
//   city = patientData.city; //city.trim();
//   country = patientData.country; //country.trim();
//   dob = patientData.dob; //dob.trim();
//   email = patientData.email; //email.trim();
//   passwd = patientData.passwd; //passwd.trim();

//   if (
//     firstname == "" ||
//     lastname == "" ||
//     phone == "" ||
//     gender == "" ||
//     address1 == "" ||
//     address2 == "" ||
//     zipcode == "" ||
//     state == "" ||
//     city == "" ||
//     country == "" ||
//     dob == "" ||
//     email == "" ||
//     passwd == ""
//   ) {
//     res.json({
//       status: "FAILED",
//       message: "Empty input fields!",
//     });
//   } else if (!/^[a-zA-Z ]*$/.test(firstname)) {
//     res.json({
//       status: "FAILED",
//       message: "Invalid firstname Entered",
//     });
//   } else if (!/^[a-zA-Z ]*$/.test(lastname)) {
//     res.json({
//       status: "FAILED",
//       message: "Invalid lastnae Entered",
//     });
//   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//     res.json({
//       status: "FAILED",
//       message: "Invalid email Entered",
//     });
//   } else if (!new Date(dob).getTime()) {
//     res.json({
//       status: "FAILED",
//       message: "Invalid date Entered",
//     });
//   }
//   // else if(passwd.length()<8){
//   //     res.json({
//   //         status:"FAILED",
//   //         message:"Password is too short"
//   //     });
//   // }
//   else {
//     // check if user is already present or not !
//     patientuser
//       .find({ email })
//       .then((result) => {
//         if (result.length) {
//           //A user already exists
//           res.json({
//             status: "FAILED",
//             message: "User already exist with that email",
//           });
//         } else {
//           // try to create a new user!
//           // passwd handling
//           const saltRounds = 10;
//           bcrypt
//             .hash(passwd, saltRounds)
//             .then((hashedpasswd) => {
//               const newpatientuser = new patientuser({
//                 firstname,
//                 lastname,
//                 phone,
//                 gender,
//                 address1,
//                 address2,
//                 zipcode,
//                 state,
//                 city,
//                 country,
//                 dob,
//                 email,
//                 passwd,
//               });
//               newpatientuser
//                 .save()
//                 .then((result) => {
//                   res.json({
//                     status: "Success",
//                     message: "Signup success",
//                     data: result,
//                   });
//                 })
//                 .catch((err) => {
//                   res.json({
//                     status: "Failed",
//                     message: "Error occured while signing up!",
//                   });
//                 });
//             })
//             .catch((err) => {
//               res.json({
//                 status: "FAILED",
//                 message: "Error occured while hashing passwd!",
//               });
//             });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json({
//           status: "FAILED",
//           message: "Error occurred while checking for existing user!",
//         });
//       });
//   }
// });

// app.post("/hospSignup", function (req, res) {
//   var hospitalData = req.body;
//   res.send(hospitalData);
// });

// app.post("/orgSignup", function (req, res) {
//   var orgData = req.body;
//   res.send(orgData);
// });

// app.post("/forgot", function (req, res) {
//   var email = req.body.email;
//   res.send(email);
// });

// app.post("/login", function (req, res) {
//   var loginData = req.body;
//   res.send(loginData);
// });

// app.post("/contact", function (req, res) {
//   var contactData = req.body;
//   res.send(contactData);
// });

//app running on http://localhost:3000/
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
