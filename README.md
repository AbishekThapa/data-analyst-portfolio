# Abishek Thapa - Data Analyst Portfolio

A modern, responsive portfolio website designed specifically for data analysts and business analysts. Built with HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance with minimal dependencies

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Professional summary and key statistics
3. **Skills**: Technical skills with visual progress bars
4. **Projects**: Featured projects with descriptions and technologies used
5. **Experience**: Professional timeline with detailed work history
6. **Contact**: Contact form and social media links

## Customization Guide

### Personal Information
Update the following in `index.html`:

- **Name**: Replace "Abishek Thapa" with your name
- **Title**: Update the job title in the hero section
- **Description**: Modify the professional description
- **Contact Details**: Update email, phone, and location
- **Social Links**: Add your actual social media profiles

### Skills Section
Modify the skills in `index.html`:

```html
<div class="skill-item">
    <span>Your Skill</span>
    <div class="skill-bar"><div class="skill-fill" style="width: 90%"></div></div>
</div>
```

### Projects
Replace the sample projects with your actual work:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-chart-pie"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Project description here...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <a href="#" class="project-link">View Project</a>
    </div>
</div>
```

### Experience
Update the timeline with your actual work experience:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">2022 - Present</p>
        <ul>
            <li>Your achievement 1</li>
            <li>Your achievement 2</li>
        </ul>
    </div>
</div>
```

### Colors and Styling
Customize the color scheme in `styles.css`:

- **Primary Blue**: `#2563eb`
- **Secondary Purple**: `#7c3aed`
- **Accent Yellow**: `#fbbf24`
- **Background**: `#f8fafc`

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment

### Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Create a Netlify account
2. Drag and drop the folder to Netlify
3. Your site will be deployed instantly

### Option 3: Vercel
1. Create a Vercel account
2. Import your GitHub repository
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minimize CSS/JS**: Use minified versions for production
3. **CDN**: Use CDN for external libraries
4. **Caching**: Enable browser caching

## SEO Optimization

The portfolio includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Structured data (can be added)
- Fast loading times

## Analytics

To add Google Analytics:
1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking code to the `<head>` section of `index.html`

## Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS**: Use EmailJS for easy email integration
2. **Netlify Forms**: If using Netlify, forms work automatically
3. **Custom Backend**: Set up your own backend API

## License

This project is open source and available under the MIT License.

## Support

For questions or customization help, feel free to reach out!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio. 