# BID DIMENSIONS — DEVOPS & HOSTING DEPLOYMENT MANUAL

**Project**: Bid Dimensions (Full-Service Engineering & Design)  
**Framework**: Next.js 14.1.3 (App Router)  
**Node Requirement**: Node.js `>= 18.17.0` (LTS 20.x recommended)  
**Default Port**: `3000`

---

## 1. Environment Variables Configuration

Create a `.env.local` file in the root directory (or inject these variables into your hosting platform/container settings):

```env
# ==========================================
# BID DIMENSIONS - PRODUCTION CONFIGURATION
# ==========================================

# Recipient Email for Leads & File Attachments
CONTACT_EMAIL=info@biddimensions.us

# Outgoing SMTP Credentials (Example: Google Workspace / Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=info@biddimensions.us
SMTP_PASS=your-16-character-app-password

# Outgoing SMTP Credentials (Alternative Example: Domain cPanel / Webmail)
# SMTP_HOST=mail.biddimensions.us
# SMTP_PORT=465
# SMTP_USER=info@biddimensions.us
# SMTP_PASS=YourEmailPasswordHere

# Canonical Domain URL (No trailing slash)
NEXT_PUBLIC_SITE_URL=https://biddimensions.us
```

---

## 2. Deployment Strategies

### Option A: Modern Edge / Cloud Platforms (Vercel / Netlify / AWS Amplify) — Recommended
This repository is pre-configured for zero-configuration deployment on Vercel:
1. Connect the GitHub repository or import the project directory.
2. The platform automatically detects Next.js:
   - **Build Command**: `next build` (or `npm run build`)
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
3. Add the Environment Variables from Section 1 in the dashboard.
4. Assign custom domain: `biddimensions.us` and `www.biddimensions.us`.
5. Automatic SSL, edge routing, image optimization caching, and Brotli compression will be enabled automatically.

---

### Option B: Self-Hosted Linux Server (Ubuntu / Debian + Nginx + PM2)

#### Step 1: Install Dependencies & Build
```bash
# Enter project directory
cd /var/www/biddimensions

# Install production dependencies
npm install --production=false

# Generate optimized production build
npm run build
```

#### Step 2: Run with PM2 Process Manager
```bash
# Install PM2 globally if not installed
npm install -g pm2

# Start Next.js production daemon
pm2 start npm --name "biddimensions" -- start -- -p 3000

# Save PM2 state for automatic reboot recovery
pm2 save
pm2 startup
```

#### Step 3: Nginx Reverse Proxy Configuration
Create `/etc/nginx/sites-available/biddimensions.us`:

```nginx
server {
    listen 80;
    server_name biddimensions.us www.biddimensions.us;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name biddimensions.us www.biddimensions.us;

    ssl_certificate /etc/letsencrypt/live/biddimensions.us/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/biddimensions.us/privkey.pem;

    # Accommodate large CAD & PDF blueprint uploads (up to 50MB)
    client_max_body_size 50M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site and restart Nginx:
```bash
ln -s /etc/nginx/sites-available/biddimensions.us /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

### Option C: cPanel with "Setup Node.js App"
1. In cPanel, click **Setup Node.js App** -> **Create Application**.
2. Select Node version **18.x or 20.x**.
3. **Application mode**: `Production`.
4. **Application root**: folder path.
5. **Application startup file**: `node_modules/next/dist/bin/next` with command `start`.
6. Run `npm install` and `npm run build`.
7. Add the environment variables under the application details.

---

## 3. Key Endpoints & Verification
- **Homepage**: `GET /` (HTTP 200)
- **Sitemap**: `GET /sitemap.xml` (Dynamically generated)
- **Robots**: `GET /robots.txt`
- **Quote Form API**: `POST /api/quote` (Accepts multipart/form-data with CAD/PDF attachments up to 50MB)

---

## 4. Maintenance & Updates
Whenever pulling new code changes:
```bash
git pull origin main
npm install
npm run build
pm2 reload biddimensions
```
