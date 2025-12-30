const router = require("express").Router();
const Enquiry = require("../models/Enquiry");
const transporter = require("../config/mailer");

const DISPOSITION_EMAILS = {
  "Customer Support": "ayan@multycomm.com",
  "Consultant Support": "akash@multycomm.com",
  "B2B Lead": "deepak@multycomm.com",
  "New Lead": "aveek@multycomm.com",
  "General Enquiry": null
};

router.post("/", async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    const receiver = DISPOSITION_EMAILS[req.body.disposition];

    if (receiver) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: receiver,
        subject: "New Client Enquiry from MultyComm Form",
        text: `
Greetings!

We have received an inquiry for the client detailed below.

Client/Caller Name: ${req.body.name}
Company: ${req.body.company}
Gender: ${req.body.gender}
Age: ${req.body.age}
Email: ${req.body.email}
Query: ${req.body.query}

Thank You!
        `
      });
    }

    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
