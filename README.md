# Abishek Thapa - Data Analyst Portfolio

A sleek, modern personal portfolio website showcasing Abishek Thapa's expertise in data analytics, SQL, Python, Power BI, and ETL pipelines. Built with modern web technologies and featuring a responsive design with dark/light mode support.

## 🚀 Features

### Design & User Experience
- **Modern, Responsive Design**: Clean layout built with Tailwind CSS utility framework
- **Dark/Light Mode Toggle**: Automatic theme detection with manual toggle functionality
- **Smooth Animations**: Custom CSS animations including fade-in, slide-up, float, and glow effects
- **Interactive Elements**: Hover effects, gradient animations, and smooth transitions
- **Professional Color Palette**: Custom accent colors with gradient effects

### Content & Navigation
- **Detailed Project Pages**: Comprehensive case studies with full analysis breakdowns
- **Downloadable Resume**: Direct PDF download functionality for CV/resume
- **Interactive Visualizations**: Local image assets for fast loading project charts
- **Smooth Scrolling Navigation**: Table of contents with anchor links for detailed pages
- **Professional Typography**: Inter font family with responsive scaling

### Sections
1. **Hero Section**: Animated typing effect with "Hi, I'm Abishek", floating profile image with gradient background
2. **About**: Professional background with downloadable CV/resume functionality
3. **Skills**: Interactive skill cards with hover animations showcasing technical expertise
4. **Projects**: Featured project cards with links to detailed case study pages
5. **Contact**: Functional contact form with social media integration
6. **Navigation**: Responsive navbar with mobile menu and theme toggle

### Featured Projects
- **Yelp Academic Dataset Analysis**: Comprehensive case study with detailed findings page (`yelp_analysis.html`)
  - ETL pipeline with Python processing 6M+ records
  - PostgreSQL database design with ERD
  - Statistical analysis with hypothesis testing
  - Business insights and market recommendations
- **South East Queensland Bus Route Analysis**: GTFS data analysis with detailed project page (`gtfs_analysis.html`)
  - Public transport data processing
  - Geographic and temporal analysis
  - Service optimization insights
- **Power BI Australian Housing Market Dashboard**: Advanced business intelligence
- **SQL Optimization & Performance Tuning**: Real interview-style challenges

### Technical Skills Showcase
- **SQL**: Advanced database querying and optimization
- **Python**: Data analysis and automation
- **Power BI**: Business intelligence and dashboards
- **PostgreSQL**: Database management and optimization
- **ETL Pipelines**: Data extraction and transformation
- **Jupyter**: Interactive data analysis
- **DAX**: Advanced data modeling
- **Data Visualization**: Data storytelling and insights

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup structure with modern elements
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **JavaScript**: Interactive features, animations, and theme switching
- **Typed.js**: Animated typing effects for hero section

### External Libraries & Resources
- **Font Awesome 6.0.0**: Professional icons for UI elements and navigation
- **Google Fonts (Inter)**: Modern typography with multiple weights (300-800)
- **Google Fonts (Edu NSW ACT Foundation)**: Cursive font for signature/branding
- **Tailwind CSS CDN**: Latest version for rapid styling and responsive design
- **Typed.js 2.0.16**: Animated typing effects for hero section engagement

### Features
- **Responsive Grid System**: Mobile-first approach with breakpoint optimization
- **Custom CSS Animations**: Keyframe animations for enhanced user experience
- **Theme System**: Dark/light mode with localStorage persistence
- **Gradient Effects**: Custom gradient backgrounds and text effects

## 📁 File Structure

```
data-analyst-portfolio/
├── index.html              # Main portfolio homepage
├── yelp_analysis.html      # Detailed Yelp dataset analysis case study
├── gtfs_analysis.html      # GTFS bus route analysis project page
├── script.js               # JavaScript for interactions and animations
├── profile.jpeg            # Professional profile image
├── resume.pdf              # Downloadable CV/Resume
├── favicon.png             # Website favicon (PNG format)
├── favicon.ico             # Website favicon (ICO format)
├── favicon-64.png          # 64px favicon variant
├── resources/              # Project assets and visualizations
│   ├── yelp/              # Yelp analysis charts and diagrams
│   │   ├── er_diagram.png
│   │   ├── correlation_matrix_of_restaurant_features.png
│   │   ├── distribution_of_users_by_segment.png
│   │   ├── average_stars_given_by_user.png
│   │   ├── city_market_opportunity_restaurant_success_analysis.png
│   │   ├── rating_distribution_elite_vs_non_elite_users.png
│   │   ├── top_10_most_reviewed_american_restsurant.png
│   │   ├── top_10_cities_by_number_of_nightlife_venues.png
│   │   ├── total_restaurant_check_ins_by_day_of_the_week.png
│   │   └── proportion_of_all_reviews_written_by_elite_users_over_time.png
│   └── gfts/              # GTFS analysis visualizations
│       ├── bus_vs_train.png
│       ├── busiest_bus_hub.png
│       ├── busiest_train_hub.png
│       ├── geographic_distribution_of_all_stops.png
│       ├── hourly_activity_heatmaps.png
│       ├── service_levels_by_day_of_the_week.png
│       ├── top_10_bus_route.png
│       └── weekly_activity_heatmaps.png
└── README.md               # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Accent Blue Palette**: Custom 9-shade blue color system (#eff6ff to #1e3a8a)
- **Primary Accent**: #3b82f6 (Blue 500) for main interactive elements
- **Secondary Accent**: #60a5fa (Blue 400) for gradients and highlights
- **Dark Mode**: Optimized color variations for dark theme
- **Gradient Effects**: Linear gradients throughout the interface

### Typography
- **Font Family**: Inter (Google Fonts) - Modern, readable sans-serif
- **Font Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Responsive Scaling**: Dynamic text sizing across all device breakpoints
- **Gradient Text Effects**: Custom gradient text for headings and accents

### Animations & Interactions
- **Custom Keyframe Animations**: 
  - `fadeIn`: Smooth entrance animations
  - `slideUp`: Upward sliding transitions  
  - `glow`: Button glow effects on interaction
  - `float`: Gentle floating animation for profile image
- **Hover Effects**: Scale transforms, color transitions, and shadow changes
- **Heading Fill Animation**: Interactive background fill effect on hover
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Theme Transitions**: Smooth dark/light mode switching

### Responsive Design Breakpoints
- **Mobile**: < 768px (Single column, hamburger menu)
- **Tablet**: 768px - 1024px (Adjusted grid layouts)
- **Desktop**: > 1024px (Full multi-column layouts)
- **Large Desktop**: > 1280px (Maximum width containers)

## 🚀 Getting Started

### Local Development
1. **Clone the Repository**
   ```bash
   git clone https://github.com/AbishekThapa/data-analyst-portfolio.git
   cd data-analyst-portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local development server for best experience

3. **Live Server (Recommended)**
   - Use VS Code Live Server extension, or
   - Run with Python: `python -m http.server 8000`
   - Navigate to `http://localhost:8000`

### Browser Compatibility
- **Chrome/Chromium**: Full support ✅
- **Firefox**: Full support ✅  
- **Safari**: Full support ✅
- **Edge**: Full support ✅
- **Mobile Browsers**: Fully responsive ✅

### Performance Features
- **Fast Loading**: Optimized images and CDN resources
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Accessibility**: ARIA labels and keyboard navigation support

## 📝 Customization Guide

### Updating Personal Information
- **Profile Image**: Replace `profile.jpeg` with your professional photo
- **Resume/CV**: Replace `resume.pdf` with your updated CV
- **Contact Details**: Update email and location in the contact section
- **Social Links**: Modify LinkedIn and GitHub URLs in the HTML
- **Professional Summary**: Edit the hero and about section content
- **Typing Animation**: Modify the greeting text in `script.js` Typed.js configuration

### Adding New Projects
1. Locate the projects section in `index.html`
2. Copy an existing project card structure
3. Update the gradient background color class
4. Modify project title, description, and technology tags
5. Update the project link URL (can link to detailed project pages)
6. Optionally create a new detailed project page following the structure of `yelp_analysis.html`

### Managing Project Assets
- **Images**: Store project visualizations in `resources/project-name/` directories
- **Local Assets**: Use relative paths to resources for faster loading
- **Detailed Pages**: Create comprehensive case studies with table of contents and anchor navigation

### Modifying Skills
1. Find the skills grid in the HTML
2. Update skill icons using Font Awesome classes
3. Modify skill names and descriptions
4. Adjust skill card colors by changing background classes

### Theme Customization
- **Colors**: Modify the Tailwind config accent color palette
- **Animations**: Adjust keyframe animations in the `<style>` section
- **Layout**: Update Tailwind grid and spacing classes
- **Typography**: Change font weights and sizes using Tailwind utilities

## 🎯 Key Features for Recruiters

### Professional Presentation
- **Clean Design**: Modern, data-focused aesthetic suitable for professional environments
- **Dark/Light Theme**: Adaptive interface that works in any lighting condition
- **Mobile Optimized**: Perfect viewing experience on all devices
- **Fast Loading**: Optimized performance for quick access

### Technical Demonstration
- **Interactive Elements**: Showcases frontend development skills
- **Responsive Design**: Demonstrates modern web development practices
- **Accessibility**: Shows attention to inclusive design principles
- **Performance**: Optimized code structure and resource loading

### Contact Integration
- **Multiple Channels**: Email, LinkedIn, and GitHub links
- **Professional Form**: Contact form ready for inquiries
- **Location Display**: Clear geographical availability
- **Social Proof**: Direct links to professional profiles

## 📞 Contact Information

- **Email**: contact@abishekthapa.com
- **Location**: Brisbane, Australia
- **LinkedIn**: [https://www.linkedin.com/in/abishek-thapa-03b700153/](https://www.linkedin.com/in/abishek-thapa-03b700153/)
- **GitHub**: [https://github.com/AbishekThapa](https://github.com/AbishekThapa)
- **Portfolio**: [Live Website](https://abishekthapa.github.io/data-analyst-portfolio/)

## 🚀 Deployment

This portfolio is designed to be easily deployed on various platforms:

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Other Platforms
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Surge.sh**: Use CLI for quick deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

---

**Built with ❤️ using modern web technologies to showcase data analytics expertise and attract professional opportunities.**

*Last updated: August 2025* 