import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "chepkorircarren9@gmail.com",
    pass: "ffixcfwjcreytdap",
  },
});

app.use(express.json());
app.use(cors());

app.post("/api/submit", async (req, res) => {
  try {
    const { name, email, message, phonenumber, subject } = req.body;

    const mailOptions = {
      from: "chepkorircarren9@gmail.com",
      to: "recipient@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone Number: ${phonenumber}\nSubject: ${subject}`,
    };
    console.log("sending email....");

    await transporter.sendMail(mailOptions);
    console.log("email send successfully");
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
