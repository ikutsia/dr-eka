# Dr. Ekaterina Kutsia - Online Video Courses

A professional website for Dr. Ekaterina Kutsia's online video courses for pregnant women and new parents.

## 🚀 Features

- **Professional Design**: Light pastel colors with pediatric themes
- **Responsive Layout**: Works perfectly on all devices
- **Course Catalog**: 5 comprehensive courses covering pregnancy to toddler care
- **Testimonials**: Social proof from satisfied parents
- **FAQ Section**: Common questions and answers
- **Contact Information**: Easy ways to get in touch

## 🛠 Tech Stack

- **React 19.1.1**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Netlify**: Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dr-eka
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🌐 Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub**: 
   - Create a GitHub repository
   - Push your code to GitHub

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose your repository

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Deploy**:
```bash
netlify deploy --prod --dir=build
```

### Option 3: Drag & Drop

1. **Build the project**:
```bash
npm run build
```

2. **Drag the `build` folder** to [netlify.com](https://netlify.com)

## 🔧 Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `public/_redirects`: SPA routing support
- `tailwind.config.js`: Tailwind CSS configuration

## 📁 Project Structure

```
dr-eka/
├── public/
│   ├── _redirects          # Netlify redirects
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Hero.js         # Hero section
│   │   ├── Courses.js      # Course catalog
│   │   ├── Testimonials.js # Testimonials section
│   │   ├── QandA.js        # FAQ section
│   │   └── Footer.js       # Footer component
│   ├── App.js              # Main app component
│   ├── index.js            # App entry point
│   └── index.css           # Global styles
├── netlify.toml            # Netlify configuration
└── package.json
```

## 🎨 Customization

### Colors
The website uses custom pastel colors defined in `tailwind.config.js`:
- `pastel-pink`, `pastel-blue`, `pastel-green`, `pastel-yellow`, `pastel-purple`
- `soft-pink`, `soft-blue`, `soft-green`, `soft-yellow`, `soft-purple`

### Content
- Update course information in `src/components/Courses.js`
- Modify testimonials in `src/components/Testimonials.js`
- Edit FAQ in `src/components/QandA.js`
- Update contact information in `src/components/Footer.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## 🔒 Security Headers

The `netlify.toml` file includes security headers:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📈 Performance

- Optimized build with gzip compression
- Static assets cached for 1 year
- Lazy loading for better performance

## 🚀 Next Steps

1. **Add Dr. Ekaterina's photo** to the hero section
2. **Update social media links** with actual URLs
3. **Connect forms** to backend services
4. **Add actual course content** and video integration
5. **Set up analytics** (Google Analytics, etc.)

## 📞 Support

For questions or support, contact:
- Email: contact@drekaterina.com
- Website: [Your Netlify URL]

---

© 2025 Dr. Ekaterina Kutsia. All rights reserved.
