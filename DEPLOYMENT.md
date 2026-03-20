# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages and set up a custom domain.

## 🚀 GitHub Pages Deployment

### Step 1: Push to GitHub

1. Make sure you have a GitHub repository created
2. Push your code to the main branch:

```bash
git add .
git commit -m "Add portfolio with GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under "Build and deployment", select **GitHub Actions** as the source
5. The deployment will automatically trigger when you push to main branch

### Step 3: Verify Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Wait for the deployment workflow to complete
3. Your site will be available at: `https://[username].github.io/portfolio_1/`

## 🌐 Custom Domain Setup

### Option 1: GitHub Pages Custom Domain

1. In your repository, go to **Settings** > **Pages**
2. Under "Custom domain", enter your domain (e.g., `yourdomain.com`)
3. Click **Save**

### Option 2: Subdomain Setup

For a subdomain like `portfolio.yourdomain.com`:

1. Go to your domain registrar's DNS settings
2. Add a CNAME record:
   - **Type**: CNAME
   - **Name**: portfolio (or your desired subdomain)
   - **Value**: [username].github.io
   - **TTL**: 3600 (or default)

### Option 3: Apex Domain Setup

For a root domain like `yourdomain.com`:

1. Go to your domain registrar's DNS settings
2. Add these records:
   - **Type**: A
   - **Name**: @
   - **Value**: 185.199.108.153
   - **Type**: A
   - **Name**: @
   - **Value**: 185.199.109.153
   - **Type**: A
   - **Name**: @
   - **Value**: 185.199.110.153
   - **Type**: A
   - **Name**: @
   - **Value**: 185.199.111.153

### Step 4: DNS CNAME File

Create a CNAME file in your repository root:

```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

## 🔧 Configuration Details

### Vite Configuration
The project is configured with:
- Base path: `/portfolio_1/` for production
- Build output: `dist` directory
- Source maps enabled for debugging

### GitHub Actions Workflow
- Triggers on push to main branch
- Uses Node.js 18 and pnpm for dependency management
- Automatically builds and deploys to GitHub Pages
- Caches dependencies for faster builds

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- Desktop browsers
- Tablet devices
- Mobile phones
- Various screen sizes

## 🔄 Automatic Updates

Your site will automatically redeploy when:
- You push changes to the main branch
- The GitHub Actions workflow runs
- The build completes successfully

## 🛠️ Troubleshooting

### Common Issues

1. **404 Errors**: Check that the `base` path in `vite.config.ts` matches your repository name
2. **White Screen**: Check the browser console for JavaScript errors
3. **Styles Not Loading**: Ensure CSS files are properly referenced in the built HTML
4. **Deployment Fails**: Check the Actions tab for error logs

### Debug Steps

1. Check the GitHub Actions workflow logs
2. Verify the build output locally with `npm run preview`
3. Test the deployment on different browsers
4. Check DNS propagation for custom domains

## 📊 Performance

The built site includes:
- Minified CSS and JavaScript
- Optimized images
- Gzip compression
- Source maps for debugging
- Lazy loading for better performance

## 🎯 Next Steps

After deployment:

1. Test all functionality on the live site
2. Set up analytics if desired
3. Configure SEO meta tags
4. Set up monitoring for uptime
5. Consider adding a sitemap for better SEO

---

For support, check the [GitHub Pages documentation](https://docs.github.com/en/pages) or create an issue in your repository.
