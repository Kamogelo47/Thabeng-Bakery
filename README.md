# Thabeng Bakery Website

## WEDE5020 – Web Development

### Student Information

**Student Name:** Kamogelo Matseke  
**Student Number:** ST10494978

---

## 1. Project Overview

Thabeng Bakery is a fictional small bakery based in Hartbeespoort, North West, South Africa. The website was developed as part of the WEDE5020 Web Development project.

The website provides customers with information about the bakery, its products, custom cake services, enquiry options and contact information.

The project consists of five main pages:

- Home
- About Us
- Products
- Enquiry
- Contact

Part 1 focused on project initiation, planning, content research and the initial HTML website structure.

Part 2 focused on improving the website's visual appearance using CSS and implementing a responsive design.

Part 3 focuses on JavaScript functionality, interactive website elements, SEO improvements, form validation, image optimisation and website deployment preparation.

---

## 2. Website Goals and Objectives

The goals of the Thabeng Bakery website are to:

- Establish a professional online presence for the bakery.
- Increase awareness of the bakery and its products.
- Showcase available baked products.
- Allow customers to make product and custom cake enquiries.
- Provide customers with contact information and location details.
- Provide simple and consistent navigation.
- Create a visually appealing user experience.
- Ensure that the website works effectively on desktop, tablet and mobile devices.
- Improve website visibility through search engine optimisation.
- Provide interactive features that improve customer engagement.

### Key Performance Indicators

The success of the website can be measured using:

- Number of website visitors.
- Number of product page views.
- Number of enquiry form submissions.
- Number of customer quotation requests.
- Number of visitors accessing the Contact page.
- Number of successful contact form submissions.

---

## 3. Technologies Used

The following technologies and tools were used:

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Website styling and responsive layouts |
| JavaScript | Interactive features and form functionality |
| Leaflet.js | Interactive location map |
| OpenStreetMap | Map information and map tiles |
| FormSubmit | Contact and enquiry form email integration |
| Visual Studio | Website development and code editing |
| Google Chrome | Website testing and debugging |
| GitHub | Source code management and repository hosting |

---

## 4. Website Pages and Sitemap

The website contains five interconnected pages.

```text
Thabeng Bakery
│
├── Home
│   └── index.html
│
├── About Us
│   └── about.html
│
├── Products
│   └── products.html
│
├── Enquiry
│   └── enquiry.html
│
└── Contact
    └── contact.html
```

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces Thabeng Bakery and provides calls to action |
| About Us | `about.html` | Provides information about the bakery, its mission and vision |
| Products | `products.html` | Displays bakery products, images and pricing |
| Enquiry | `enquiry.html` | Allows customers to submit product enquiries |
| Contact | `contact.html` | Provides contact information, a contact form and an interactive map |

---

## 5. File and Folder Structure

The project uses the following structure:

```text
Thabeng-Bakery/
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── animations.js
│   ├── script.js
│   ├── enquiry.js
│   └── contact.js
│
└── images/
    ├── bread.webp
    ├── birthday-cake-11.webp
    ├── cookie-monster-cupcakes.webp
    ├── pastries.webp
    ├── custom-cake.webp
    └── ass-baked-cakes.webp
```

---

# Part 1 – Building the Foundation

## 6. Part 1 Details

Part 1 focused on the initiation, research, planning and initial implementation of the Thabeng Bakery website.

The following activities were completed:

- Selected a small business as the target organisation.
- Developed website project proposals.
- Selected Thabeng Bakery as the website project.
- Identified the target audience.
- Defined website goals and objectives.
- Researched suitable website content.
- Planned the website structure.
- Developed a sitemap.
- Developed low-fidelity wireframes.
- Established the website file and folder structure.
- Created five HTML pages.
- Added semantic HTML elements.
- Added bakery content and product information.
- Added product images.
- Created navigation links between all five pages.
- Developed enquiry and contact forms.

## 7. Part 1 Feedback and Corrections

The Part 1 feedback indicated that the project demonstrated effort in researching and preparing content for the proposed bakery website.

The feedback also identified areas where planning, design, technical and implementation deliverables required further attention.

The project was reviewed before continuing with Part 2.

The following improvements were made:

- Reviewed the website project documentation.
- Reviewed the sitemap and wireframes.
- Confirmed that all five required HTML pages were present.
- Reviewed navigation links across the website.
- Confirmed the project file and folder structure.
- Improved technical documentation in the README.
- Prepared the project for further CSS and responsive-design improvements.

---

# Part 2 – Designing the Visuals: CSS Styling and Responsive Design

## 8. External CSS Stylesheet

The website uses an external stylesheet:

`css/style.css`

The stylesheet is linked to the HTML pages using:

```html
<link rel="stylesheet" href="css/style.css">
```

Using an external stylesheet allows the website to maintain a consistent visual design while avoiding unnecessary duplication of CSS code.

## 9. Base Styling

A CSS reset is used to reduce browser inconsistencies.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

Base styling defines the website's:

- Font family.
- Text colour.
- Background colour.
- Line height.
- Spacing.
- Box sizing.

The main colour palette consists of warm bakery-inspired colours, including brown, cream and gold.

## 10. Typography

Typography was styled using CSS properties including:

- `font-family`
- `font-size`
- `font-weight`
- `line-height`
- `letter-spacing`

Georgia is used for prominent headings while Arial and Helvetica are used for readable body content.

Relative units such as `rem` are used to improve scalability across screen sizes.

## 11. Desktop Layout

The desktop version uses CSS Flexbox and CSS Grid.

### Flexbox

Flexbox is used for:

- Header alignment.
- Navigation.
- Hero buttons.
- Flexible content alignment.

### CSS Grid

CSS Grid is used for:

- Homepage product highlights.
- Product catalogue layouts.

On larger displays, the product catalogue uses a multi-column layout.

## 12. Visual Styling

The website uses CSS visual properties including:

- `color`
- `background-color`
- `border`
- `border-radius`
- `box-shadow`
- `transition`
- `transform`

Product cards contain shadows and rounded corners to create visual separation.

Interactive elements use pseudo-classes including:

- `:hover`
- `:focus`
- `:active`

These provide users with visual feedback while navigating and interacting with the website.

## 13. Responsive Design

The website follows a responsive design approach so that content adapts to different screen sizes.

### Responsive Breakpoints

| Device Type | Breakpoint | Layout |
|---|---|---|
| Desktop | Above 900px | Multi-column desktop layout |
| Tablet | 900px and below | Adjusted tablet layout |
| Mobile | 600px and below | Single-column layout |

Media queries modify:

- Navigation layout.
- Grid columns.
- Hero height.
- Heading sizes.
- Section spacing.
- Product image dimensions.
- Enquiry form spacing.
- Button positioning.

## 14. Responsive Images

Images are styled to prevent overflow and maintain their proportions.

Example:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Product images are also optimised through JavaScript image-loading improvements implemented in Part 3.

## 15. Responsive Testing

The website was tested using Google Chrome Developer Tools.

Testing included desktop, tablet and mobile viewport sizes.

### Testing Results

Testing confirmed that:

- Navigation remained accessible.
- Text remained readable.
- Content remained within the viewport.
- Product layouts responded to screen size changes.
- Images remained responsive.
- Buttons remained usable.
- Forms remained accessible.
- No unnecessary horizontal scrolling was observed during testing.

## 16. Browser Testing

The website was primarily tested using Google Chrome and Chrome Developer Tools.

HTML structure, links, images, forms and responsive layouts were reviewed during development.

Further cross-browser testing can be performed using Microsoft Edge and Mozilla Firefox.

---

# Part 3 – Enhancing Functionality and SEO

## 17. Part 3 Overview

Part 3 focused on improving the functionality, accessibility, search engine visibility and overall user experience of the Thabeng Bakery website.

JavaScript was introduced and improved to provide interactive features and dynamic content.

Search engine optimisation techniques were also implemented to improve how search engines understand the website.

The following areas were addressed:

- JavaScript functionality.
- Dynamic product content.
- Product search, filtering and sorting.
- Interactive image gallery.
- Website animations.
- Interactive location map.
- HTML5 form validation.
- JavaScript form handling.
- SEO metadata.
- Image optimisation.
- Search engine indexing preparation.
- Website performance improvements.

## 18. JavaScript Functionality

JavaScript was used to improve user interaction and provide additional website functionality.

The JavaScript files are stored in the `js/` folder.

| JavaScript File | Purpose |
|---|---|
| `script.js` | Dynamic product display, search, filtering, sorting and image gallery |
| `enquiry.js` | Enquiry form validation and submission handling |
| `contact.js` | Contact form validation and submission handling |
| `animations.js` | Scroll-based website animations |

### 18.1 Dynamic Product Listings

The Products page displays bakery products dynamically using JavaScript.

The product information is stored in a JavaScript array containing:

- Product name.
- Product category.
- Product description.
- Product price.
- Display price.
- Product image.
- Image alternative text.

The current product catalogue contains six products:

1. Fresh Bread.
2. Birthday Cakes.
3. Specialty Cupcakes.
4. Pastries.
5. Custom Cakes.
6. Assorted Baked Cakes.

### 18.2 Product Search

A search feature allows visitors to search for products using product names, descriptions and categories.

The product list updates dynamically based on the search input.

### 18.3 Product Filtering

Visitors can filter products according to their category.

Available categories include:

- Bread.
- Cakes.
- Cupcakes.
- Pastries.

### 18.4 Product Sorting

Visitors can sort products using:

- Default order.
- Price: Low to High.
- Price: High to Low.
- Name: A to Z.

Products without a fixed price are displayed at the end of the price-sorted results.

### 18.5 Interactive Image Gallery

An image lightbox was implemented to allow visitors to view larger versions of product images.

The lightbox supports:

- Opening images when clicked.
- Closing using the close button.
- Closing by clicking outside the image.
- Closing using the Escape key.

Keyboard interaction is also supported when selecting product images.

## 19. Website Animations

The website uses JavaScript animations to improve the visual experience.

The `animations.js` file implements scroll-based reveal effects using the Intersection Observer API.

These animations allow selected website elements to appear as visitors scroll through the pages.

CSS transitions are also used to provide smoother visual interaction.

## 20. Interactive Map

An interactive map was added to the Contact page using Leaflet.js.

The map uses OpenStreetMap map tiles.

The implementation includes:

- Interactive map navigation.
- Zoom controls.
- A map marker.
- A popup identifying the general Hartbeespoort area.
- OpenStreetMap attribution.

The map represents the general area served by Thabeng Bakery and does not identify an exact street address.

## 21. Form Validation and Email Integration

HTML5 and JavaScript were used to improve the enquiry and contact forms.

### 21.1 HTML5 Validation

The forms use HTML attributes including:

- `required`
- `type="email"`
- `type="tel"`
- `minlength`
- `maxlength`
- `pattern`

These attributes help prevent incomplete or incorrectly formatted submissions.

### 21.2 Phone Number Validation

South African mobile number validation was implemented using a regular expression.

The contact and enquiry forms validate mobile numbers using the following pattern:

```html
pattern="(\+27|0)[6-8][0-9]{8}"
```

### 21.3 JavaScript Validation

JavaScript is used to handle form validation and provide feedback to users.

The forms also use response messages to communicate submission status.

### 21.4 Asynchronous Form Submission

FormSubmit was configured to support asynchronous form submissions.

The configured recipient address is:

`thabengbakery@gmail.com`

The integration is intended to allow customer enquiries and contact messages to be delivered through email without requiring a custom server-side email system.

**Verification note:** Local form validation and page behaviour were tested successfully. Actual email delivery and first-use FormSubmit activation still require confirmation.

## 22. Search Engine Optimisation (SEO)

SEO improvements were implemented to make the website easier for search engines to understand.

### 22.1 Page Titles

Each main website page uses a descriptive and relevant title.

Examples include:

- Thabeng Bakery | Fresh Bread, Cakes and Pastries.
- About Thabeng Bakery | Our Story and Values.
- Bakery Products | Fresh Bread, Cakes and Pastries | Thabeng Bakery.
- Bakery Enquiries and Custom Cake Orders | Thabeng Bakery.
- Contact Thabeng Bakery | Hartbeespoort, North West.

### 22.2 Meta Descriptions

Meta descriptions were added to the website pages.

These descriptions summarise the content of each page and include relevant bakery-related keywords.

### 22.3 Keywords

Relevant keywords include:

- Thabeng Bakery.
- Hartbeespoort bakery.
- Fresh bread.
- Birthday cakes.
- Cupcakes.
- Pastries.
- Custom cakes.
- Bakery enquiries.

### 22.4 Heading Structure

Semantic heading elements such as `h1`, `h2` and `h3` are used to organise the content and establish a clear page hierarchy.

### 22.5 Internal Linking

Internal links connect the five main pages.

Visitors can navigate between the Home, About, Products, Enquiry and Contact pages.

These links also help search engines discover website content.

### 22.6 Image Alternative Text

Descriptive alternative text was added to dynamically generated product images.

This improves accessibility and helps explain image content to search engines.

## 23. Image Optimisation and Website Performance

JavaScript image-loading improvements were implemented to support website performance.

The product images use:

- Descriptive alternative text.
- Lazy loading for images further down the product list.
- Eager loading for the first product image.
- High fetch priority for the first product image.
- Asynchronous image decoding.
- Explicit image width and height attributes to reserve layout space.

These improvements help reduce unnecessary image loading and improve the image-rendering experience.

## 24. Search Engine Crawling Files

Two additional files were created to prepare the website for search engine crawling.

### 24.1 robots.txt

The `robots.txt` file contains:

```text
User-agent: *
Allow: /
```

This allows search engine crawlers to access the website's public pages.

### 24.2 sitemap.xml

A sitemap file was created to list the main website pages:

- Home.
- About Us.
- Products.
- Enquiry.
- Contact.

The sitemap currently contains placeholder website URLs.

**Deployment requirement:** The placeholder URLs must be replaced with the actual published website address before submitting the sitemap to search engines.

## 25. Part 3 Testing

The following functionality was tested during development.

| Feature | Testing Performed | Result |
|---|---|---|
| Homepage | Styling, navigation, hero background and animations | Passed |
| Products page | Product display and image loading | Passed |
| Product search | Searching for products | Passed |
| Category filtering | Filtering products by category | Passed |
| Product sorting | Price and alphabetical sorting | Passed |
| Image lightbox | Opening and closing product images | Passed |
| Contact page | Styling and page layout | Passed |
| Contact form | Required field validation | Passed |
| Phone validation | Invalid phone number rejection | Passed |
| Contact map | Interactive map loading | Passed |
| Email link | Opening the configured email application | Passed |
| FormSubmit delivery | Actual email delivery | Pending verification |
| Deployment | Publishing the website | Pending |

## 26. Part 3 Changelog

### Version 0.8 – JavaScript Functionality

- Implemented dynamic product listings.
- Added product search functionality.
- Added category filtering.
- Added product sorting.
- Added dynamic product count updates.
- Implemented the product image lightbox.
- Added keyboard interaction for product images.
- Added scroll-based animations.

### Version 0.9 – Forms and Interactive Map

- Improved enquiry form validation.
- Improved contact form validation.
- Added South African mobile number validation.
- Configured FormSubmit email integration.
- Added asynchronous form submission handling.
- Added an interactive Leaflet map.
- Integrated OpenStreetMap map tiles.
- Added a general Hartbeespoort area marker.

### Version 1.0 – SEO Improvements

- Added descriptive page titles.
- Improved meta descriptions.
- Added relevant SEO keywords.
- Added author metadata.
- Added robots indexing directives.
- Improved heading hierarchy.
- Improved internal linking.
- Added descriptive product image alternative text.
- Added `robots.txt`.
- Created `sitemap.xml`.

### Version 1.1 – Image Optimisation and Performance

- Added lazy loading to product images.
- Added eager loading for the first product image.
- Added fetch priority for the first product image.
- Added asynchronous image decoding.
- Added explicit image dimensions.
- Improved image alternative text.
- Corrected the homepage stylesheet reference to use a relative path instead of a computer-specific file path.

### Version 1.2 – Part 3 Testing and Documentation

- Tested homepage styling and navigation.
- Tested dynamic product functionality.
- Tested search, filtering and sorting.
- Tested image lightbox functionality.
- Tested contact form validation.
- Tested the interactive map.
- Updated README documentation.
- Documented the Part 3 implementation and changelog.
- Identified remaining email delivery and deployment verification tasks.

---

## 27. Deployment Status

The website is being prepared for deployment using a free hosting platform.

Possible deployment platforms include:

- GitHub Pages.
- Netlify.

The final deployment process will include:

- Uploading the completed website files.
- Publishing the website.
- Testing all website pages using the published URL.
- Testing forms on the hosted website.
- Verifying image and stylesheet paths.
- Updating the sitemap with the actual website URL.
- Checking the website on desktop, tablet and mobile devices.

**Current status:** Deployment and final hosted-site verification remain outstanding.

---

## 28. Project References

The following resources were used during the planning, development, testing and validation of the website:

- World Wide Web Consortium (W3C). HTML and Web Standards. https://www.w3.org/
- W3C. Markup Validation Service. https://validator.w3.org/
- W3C. CSS Validation Service. https://jigsaw.w3.org/css-validator/
- MDN Web Docs. HTML. https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN Web Docs. CSS. https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs. JavaScript. https://developer.mozilla.org/en-US/docs/Web/JavaScript
- MDN Web Docs. Intersection Observer API. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Leaflet. Leaflet Documentation. https://leafletjs.com/
- OpenStreetMap. Copyright and Licence. https://www.openstreetmap.org/copyright
- FormSubmit. FormSubmit Documentation. https://formsubmit.co/
- GitHub. Documentation. https://docs.github.com/
- Google. SEO Starter Guide. https://developers.google.com/search/docs/fundamentals/seo-starter-guide

---

## 29. Project Status

**WEDE5020 Part 1:** Completed and reviewed following lecturer feedback.

**WEDE5020 Part 2:** CSS styling and responsive design implemented and tested.

**WEDE5020 Part 3:** JavaScript functionality, interactive features, form validation, SEO improvements and image optimisation implemented and tested.

**Remaining tasks:** Verify actual email delivery, complete deployment, replace sitemap placeholders and perform final hosted-site testing.
