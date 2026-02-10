# PrimeCut Barbershop Website

A modern, responsive website for PrimeCut Barbers with light/dark mode toggle, mobile-first design, and Netlify Forms integration.

## 🚀 Features

- **Light/Dark Mode Toggle** - Switch between themes with persistent preference
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Netlify Forms** - Serverless form handling for bookings
- **Modern UI** - Glassmorphism effects, smooth animations, professional design
- **Mobile-First** - Hamburger menu, touch-friendly interactions
- **SEO Optimized** - Proper meta tags, semantic HTML, fast loading

## 📁 Project Structure

```
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services & pricing
├── gallery.html        # Photo gallery
├── contact.html        # Contact information
├── booking.html        # Booking form with Netlify Forms
├── thank-you.html      # Form submission confirmation
├── css/
│   └── style.css       # Main stylesheet with CSS variables
├── js/
│   ├── mobile-menu.js  # Mobile navigation
│   ├── booking.js      # Legacy booking (replaced by Netlify Forms)
│   └── theme-toggle.js # Light/dark mode functionality
├── image/              # Images and assets
├── netlify.toml        # Netlify configuration
└── _redirects          # Netlify redirects
```

## 🛠️ Local Development

### Prerequisites

- Modern web browser
- Text editor (VS Code recommended)

- A simple HTTP server (Optional)

### Running Locally

Simply open `index.html` in your browser, or use any HTTP server:

```bash
# Method 1: Python
python -m http.server 8000

# Method 2: Node.js
npm install -g http-server
http-server .
```

Then visit your local server
## 🚀 Deploy to Netlify

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login to your account
3. Drag the entire project folder to the deployment area
4. Your site will be live instantly!

### Option 2: GitHub Integration

1. Create a GitHub repository
2. Push your code to GitHub
3. Connect Netlify to your GitHub repo
4. Deploy automatically on every push

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=.
```

## 📧 Netlify Forms Setup

The booking form uses Netlify Forms. After deployment:

1. Go to your Netlify site dashboard
2. Navigate to "Forms" section
3. Enable form detection if needed
4. View submissions in the Netlify dashboard

Form submissions will be emailed to your Netlify account email.

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --bg-primary: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  --text-primary: #e2e8f0;
  --accent-primary: #00d4aa;
  /* ... more variables */
}
```

### Content

Edit HTML files directly:

- `index.html` - Homepage content
- `about.html` - About section
- `services.html` - Services and pricing
- `contact.html` - Contact information

### Images

Replace images in the `image/` folder and update references in HTML.

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints:

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

## 🌙 Theme System

- **Dark Mode:** Default professional theme
- **Light Mode:** Clean alternative theme
- **Persistence:** Theme choice saved in localStorage
- **Toggle:** Moon/sun icon in navigation

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source. Feel free to use and modify.

## 📞 Support

For questions or issues:

- Check the Netlify documentation
- Review browser console for errors
- Test forms in Netlify dashboard

---

**Built with ❤️ for PrimeCut Barbers**
browser console for errors
- Verify WhatsApp phone number is configured correctly in booking.js
- Test in different browsers