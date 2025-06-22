# Essa Bokar Sey Campaign Website

A professional campaign website for Essa Bokar Sey's 2026 Presidential Campaign in The Gambia.

## Features

- **Modern Design**: Inspired by successful political campaign websites with bold, impactful design
- **Donation System**: Complete donation form with preset amounts in Gambian Dalasi (GMD)
- **Volunteer Signup**: Comprehensive volunteer registration with multiple activity options
- **Merchandise Shop**: Campaign merchandise section to raise funds
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Gambian Flag Colors**: Design incorporates the national colors (red, blue, green, white)

## Sections Included

1. **Hero Section**: Bold headline with call-to-action buttons
2. **Join Our Movement**: Email and phone signup form
3. **Donation Section**: Secure donation form with preset amounts
4. **Volunteer Section**: Detailed volunteer signup form
5. **Merchandise Shop**: Campaign items for sale
6. **About Section**: Biographical information (placeholder content)
7. **Vision Section**: Campaign vision and goals (placeholder content)
8. **Policies Section**: Policy platform (placeholder content)
9. **News Section**: Latest campaign updates (placeholder content)
10. **Contact Section**: Contact information and ways to support

## Technology Stack

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: High-quality UI components
- **Lucide Icons**: Beautiful icon library
- **Responsive Design**: Mobile-first approach

## Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. **Upload to GitHub**:
   ```bash
   # Extract the zip file
   unzip essa-bokar-sey-campaign.zip
   cd essa-bokar-sey-campaign
   
   # Initialize Git repository
   git init
   git add .
   git commit -m "Initial commit: Essa Bokar Sey campaign website"
   
   # Create GitHub repository and push
   git remote add origin https://github.com/yourusername/essa-bokar-sey-campaign.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a React project
   - Click "Deploy"
   - Your website will be live in minutes!

### Option 2: Deploy to Netlify

1. Upload to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

### Option 3: Manual Deployment

1. Extract the zip file
2. Run `npm install` to install dependencies
3. Run `npm run build` to build for production
4. Upload the `dist` folder to any web hosting service

## Local Development

```bash
# Extract and navigate to project
unzip essa-bokar-sey-campaign.zip
cd essa-bokar-sey-campaign

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization Guide

### Adding Real Content

The website currently contains placeholder content marked with `[Content to be added]`. To customize:

1. **Campaign Information**: Update placeholders in `src/App.jsx`
2. **Images**: Replace images in `src/assets/` folder
3. **Contact Information**: Update contact details in the contact section
4. **Policy Details**: Add specific policy information
5. **News Updates**: Add real news and campaign updates

### Key Sections to Update

- Campaign slogans and messages
- Biographical information
- Policy positions and details
- Contact information (phone, email, address)
- Social media links
- Payment processing integration
- News and events

### Payment Integration

To enable real donations, integrate with payment processors like:
- Stripe
- PayPal
- Local Gambian payment gateways
- Mobile money services (Orange Money, QMoney, etc.)

## File Structure

```
essa-bokar-sey-campaign/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/ui/   # UI components
│   ├── App.jsx         # Main application component
│   ├── App.css         # Styles
│   └── main.jsx        # Entry point
├── dist/               # Built files for production
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Support

For technical support or customization help, contact the development team.

## License

This project is created for the Essa Bokar Sey 2026 Presidential Campaign.

---

**Ready to launch your campaign online!** 🇬🇲

The website is fully functional and ready for deployment. Simply follow the deployment instructions above to get it live on the internet.

