const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const router = express.Router();

require('dotenv').config();

router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // 設定郵件傳送器
  let transporter = nodemailer.createTransport({
    service: 'gmail',  // 這裡可以使用其他郵件服務，例如 Yahoo, Outlook 等
    auth: {
      user: process.env.EMAIL_USER,     // 你的郵件地址
      pass: process.env.EMAIL_PASS      // 你的郵件密碼或應用專用密碼
    }
  });

  // 設定郵件選項
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,  // 你希望接收郵件的信箱
    subject: `聯絡我們表單來自: ${name}`,
    text: message
  };

  try {
    // 發送郵件
    await transporter.sendMail(mailOptions);
    res.send({ success: true, message: '郵件已成功發送' });
  } catch (error) {
    console.error('發送郵件時出錯:', error);
    res.status(500).send({ success: false, message: '發送郵件時出錯' });
  }
});

module.exports = router;