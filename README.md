# MultyComm Full-Stack Enquiry Form

## Architecture
Frontend: React  
Backend: Node.js + Express  
Database: MongoDB  
Email: Nodemailer (Gmail SMTP)

## Logic
- All form submissions are stored in MongoDB.
- Email is conditionally triggered based on Disposition.
- "General Enquiry" skips email notification.

## Disposition Mapping
- Customer Support → ayan@multycomm.com
- Consultant Support → akash@multycomm.com
- B2B Lead → deepak@multycomm.com
- New Lead → aveek@multycomm.com
- General Enquiry → No email

## Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
node server.js




cd frontend
npm install
npm start
# assignment
