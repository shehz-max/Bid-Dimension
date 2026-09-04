# CLIENT EMAIL & FORM SETUP GUIDE

**Project**: Bid Dimensions  
**Purpose**: Instructions to connect your email to the website's engineering quote portal.

---

### Why is this needed?
Your website features an interactive **Engineering Quote Portal** where clients can submit:
- Contact information (Name, Company, Phone, Email)
- Project details (Discipline, Square Footage, Timeline, Location)
- Direct uploads of Architectural CAD drawings and PDF blueprints

To ensure these leads and files land immediately in your inbox (such as `info@biddimensions.us`), the website needs authorization to send emails through your email server.

---

## Instructions (Choose Option A or Option B)

### Option A: If You Access Email via Google / Gmail (Most Common)
Google accounts require a secure **16-letter App Password** (you do not need to share your personal password):

1. Go to **Google Account Settings**: [myaccount.google.com](https://myaccount.google.com)
2. In the left navigation menu, click **Security**.
3. Under "How you sign in to Google", ensure **2-Step Verification** is turned **ON**.
4. In the top search bar, type **"App passwords"** and click on it.
5. In the "App name" field, enter: `Bid Dimensions Website` and click **Create**.
6. Google will display a **16-letter password** (e.g. `abcd efgh ijkl mnop`).
7. **Provide these 2 items to your developer:**
   - Your Email Address: (e.g., `info@biddimensions.us`)
   - The 16-letter App Password

---

### Option B: If You Use Custom Webmail, cPanel, Titan, or Microsoft 365
If your business email is hosted with your domain provider (e.g., GoDaddy, Namecheap, cPanel, Microsoft 365):

**Provide these 4 items to your developer:**
1. **Email Address**: (e.g., `info@biddimensions.us`)
2. **Email Password**
3. **Outgoing Mail Server (SMTP Host)**: (e.g., `mail.biddimensions.us` or `smtp.office365.com`)
4. **SMTP Port Number**: Usually `465` (SSL) or `587` (TLS)

*(Your hosting provider lists these exact details inside your email account control panel under "Connect Devices / Mail Client Settings".)*

---

## What Happens Once Connected?
- **Instant Admin Alert**: Every time a client submits a quote request, an email is instantly delivered to `info@biddimensions.us` containing all project specifications and all attached blueprint files.
- **Client Auto-Confirmation**: The client immediately receives a branded receipt confirming their submission with your 5–10 day turnaround notice.
