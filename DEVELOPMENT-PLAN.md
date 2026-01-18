# BLB3D Shopify Theme Development Plan
## Dawn Fork → Custom Brand Implementation

---

## Team Roles

| Role | Who | Responsibilities |
|------|-----|------------------|
| **Architect** | Claude | Strategy, specs, design decisions, code review, problem-solving |
| **Implementor** | VS Code + Copilot | Writing code, file creation, testing, commits |
| **Product Owner** | You | Decisions, content, approval, deployment |

---

## Phase 0: Repository Setup

### 0.1 Fork Dawn
```bash
# Go to: https://github.com/Shopify/dawn
# Click "Fork" → Create fork to your GitHub account
# Name it: blb3d-theme
```

### 0.2 Clone Locally
```bash
git clone https://github.com/[YOUR-USERNAME]/blb3d-theme.git
cd blb3d-theme
```

### 0.3 Install Shopify CLI
```bash
# Mac
brew tap shopify/shopify
brew install shopify-cli

# Windows (via npm)
npm install -g @shopify/cli @shopify/theme
```

### 0.4 Connect to Shopify Store
```bash
shopify theme dev --store=blb3d-printing.myshopify.com
```
This opens a local preview. Changes sync live.

### 0.5 Connect GitHub to Shopify
1. Shopify Admin → Online Store → Themes
2. Add theme → Connect from GitHub
3. Select your forked repo + main branch
4. Now pushes to main auto-deploy to Shopify

---

## Phase 1: Project Structure

### 1.1 Files We'll Modify

```
blb3d-theme/
├── assets/
│   ├── base.css                 # Modify: Add CSS variables
│   ├── blb3d-custom.css         # CREATE: All custom styles
│   └── blb3d-custom.js          # CREATE: Any custom JS
├── config/
│   └── settings_schema.json     # Modify: Add brand color settings
├── layout/
│   └── theme.liquid             # Modify: Link custom CSS/JS
├── locales/
│   └── en.default.json          # Modify: Custom text strings
├── sections/
│   ├── header.liquid            # Modify: Logo, nav styling
│   ├── footer.liquid            # Modify: Footer structure
│   ├── blb3d-hero.liquid        # CREATE: Custom hero section
│   ├── blb3d-quote-cta.liquid   # CREATE: Quote CTA section
│   ├── blb3d-b2b-teaser.liquid  # CREATE: B2B section
│   └── blb3d-social-proof.liquid # CREATE: Testimonial section
├── snippets/
│   └── blb3d-logo.liquid        # CREATE: Logo snippet
└── templates/
    └── index.json               # Modify: Homepage section order
```

### 1.2 Files We WON'T Touch (Use Dawn's)
- Cart functionality
- Product pages (mostly)
- Collection pages (mostly)
- Checkout (can't customize much anyway)
- Account pages

---

## Phase 2: Brand Foundation

### Task 2.1: CSS Variables Setup
**File:** `assets/blb3d-custom.css`

```css
:root {
  /* BLB3D Brand Colors */
  --blb3d-blue: #026DF8;
  --blb3d-blue-dark: #0155c7;
  --blb3d-orange: #EE7A08;
  --blb3d-orange-dark: #cc6a07;
  --blb3d-dark: #0F0F1E;
  --blb3d-dark-lighter: #1a1a2e;
  --blb3d-white: #FFFFFF;
  --blb3d-gray-light: #F8F9FA;
  --blb3d-text-muted: rgba(255, 255, 255, 0.7);
  
  /* Typography */
  --blb3d-font-heading: 'Inter', sans-serif;
  --blb3d-font-body: 'Inter', sans-serif;
  
  /* Spacing */
  --blb3d-section-padding: 80px;
  --blb3d-container-max: 1200px;
}
```

### Task 2.2: Theme Settings Schema
**File:** `config/settings_schema.json`

Add a new section for BLB3D brand controls:
```json
{
  "name": "BLB3D Brand",
  "settings": [
    {
      "type": "color",
      "id": "blb3d_primary_color",
      "label": "Primary Blue",
      "default": "#026DF8"
    },
    {
      "type": "color", 
      "id": "blb3d_accent_color",
      "label": "Accent Orange",
      "default": "#EE7A08"
    },
    {
      "type": "image_picker",
      "id": "blb3d_logo",
      "label": "Logo"
    },
    {
      "type": "image_picker",
      "id": "blb3d_logo_dark",
      "label": "Logo (for light backgrounds)"
    }
  ]
}
```

### Task 2.3: Link Custom Assets
**File:** `layout/theme.liquid`

Add before `</head>`:
```liquid
{{ 'blb3d-custom.css' | asset_url | stylesheet_tag }}
```

Add before `</body>`:
```liquid
<script src="{{ 'blb3d-custom.js' | asset_url }}" defer></script>
```

---

## Phase 3: Custom Sections

### Task 3.1: Hero Section
**File:** `sections/blb3d-hero.liquid`

**Spec:**
- Full viewport height (90vh minimum)
- Dark gradient background (#0F0F1E → #1a1a2e)
- Subtle dot grid overlay
- Left side: Headline, subtext, 2 CTA buttons
- Right side: Image placeholder (configurable in editor)
- Mobile: Stack vertically, image below text

**Schema Settings:**
- heading (text)
- heading_highlight (text) - the blue part
- subheading (textarea)
- button_1_label, button_1_link
- button_2_label, button_2_link
- background_image (image_picker)
- overlay_opacity (range 0-100)

### Task 3.2: Quote CTA Section
**File:** `sections/blb3d-quote-cta.liquid`

**Spec:**
- Dark background (#0F0F1E)
- 2-column layout: Image left, content right
- Content: Section label, headline, paragraph, bullet list, CTA button
- Orange accents on checkmarks and button
- Mobile: Stack, image on top

**Schema Settings:**
- section_label (text)
- heading (text)
- description (richtext)
- features (blocks of type "feature" with text field)
- button_label, button_link
- image (image_picker)

### Task 3.3: Social Proof Section  
**File:** `sections/blb3d-social-proof.liquid`

**Spec:**
- White background
- Centered layout
- Testimonial quote (large text)
- Attribution below quote
- 3-column stats below (number + label)
- Orange section label

**Schema Settings:**
- section_label (text)
- testimonial_text (textarea)
- testimonial_author (text)
- stat_blocks (blocks with number + label fields)

### Task 3.4: B2B Teaser Section
**File:** `sections/blb3d-b2b-teaser.liquid`

**Spec:**
- Blue gradient background (#026DF8 → #0155c7)
- Centered content, max-width 800px
- Section label, headline, description, service list, CTA
- White text, white button with blue text

**Schema Settings:**
- section_label (text)
- heading (text)
- description (textarea)
- services_list (text) - comma separated
- button_label, button_link

### Task 3.5: About Teaser Section
**File:** `sections/blb3d-about-teaser.liquid`

**Spec:**
- Light gray background (#F8F9FA)
- 2-column: Content left, image right
- Orange section label, dark text
- Link instead of button

**Schema Settings:**
- section_label (text)
- heading (text)
- description (richtext)
- link_label, link_url
- image (image_picker)

---

## Phase 4: Header & Footer

### Task 4.1: Header Modifications
**File:** `sections/header.liquid`

**Changes:**
- Replace logo with BLB3D logo (SVG preferred)
- Style nav links: white text on dark, proper spacing
- "Get a Quote" button styled with accent color
- Sticky header with dark background
- Mobile: Hamburger menu

### Task 4.2: Footer Modifications
**File:** `sections/footer.liquid`

**Changes:**
- Dark background (#0F0F1E)
- 4-column layout: Logo+tagline, Shop links, Services links, Company links
- Bottom bar: Copyright, legal links
- Proper spacing and typography

---

## Phase 5: Homepage Assembly

### Task 5.1: Homepage Template
**File:** `templates/index.json`

```json
{
  "sections": {
    "hero": {
      "type": "blb3d-hero",
      "settings": { ... }
    },
    "collection-list": {
      "type": "collection-list",
      "settings": { ... }
    },
    "quote-cta": {
      "type": "blb3d-quote-cta", 
      "settings": { ... }
    },
    "social-proof": {
      "type": "blb3d-social-proof",
      "settings": { ... }
    },
    "b2b-teaser": {
      "type": "blb3d-b2b-teaser",
      "settings": { ... }
    },
    "about-teaser": {
      "type": "blb3d-about-teaser",
      "settings": { ... }
    }
  },
  "order": [
    "hero",
    "collection-list", 
    "quote-cta",
    "social-proof",
    "b2b-teaser",
    "about-teaser"
  ]
}
```

---

## Phase 6: Polish & Optimization

### Task 6.1: Global Styles
- Button styles (primary blue, secondary orange outline)
- Link styles
- Typography scale
- Section spacing consistency
- Focus states for accessibility

### Task 6.2: Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### Task 6.3: Performance
- Lazy load images
- Preconnect to fonts
- Minimize custom CSS
- No heavy JS libraries

---

## Development Workflow

### Daily Flow
```
1. Pull latest from GitHub
   git pull origin main

2. Start Shopify dev server
   shopify theme dev --store=blb3d-printing.myshopify.com

3. Work on tasks (VS Code implements, Claude reviews)

4. Test in browser (dev server gives you live preview URL)

5. Commit changes
   git add .
   git commit -m "feat: Add hero section"

6. Push to GitHub (auto-deploys to Shopify)
   git push origin main
```

### Branching Strategy (Optional)
```
main           → Production (auto-deploys)
develop        → Staging/testing
feature/hero   → Individual features
```

---

## Task Breakdown for VS Code

### Sprint 1: Foundation (Day 1)
- [ ] Fork Dawn repo
- [ ] Clone locally
- [ ] Connect Shopify CLI
- [ ] Create `blb3d-custom.css` with variables
- [ ] Link custom CSS in theme.liquid
- [ ] Test dev server works

### Sprint 2: Hero Section (Day 2)
- [ ] Create `sections/blb3d-hero.liquid`
- [ ] Add schema settings
- [ ] Style with custom CSS
- [ ] Test responsive
- [ ] Add to index.json

### Sprint 3: Quote CTA + Social Proof (Day 3)
- [ ] Create `sections/blb3d-quote-cta.liquid`
- [ ] Create `sections/blb3d-social-proof.liquid`
- [ ] Style both sections
- [ ] Add to index.json

### Sprint 4: B2B + About Sections (Day 4)
- [ ] Create `sections/blb3d-b2b-teaser.liquid`
- [ ] Create `sections/blb3d-about-teaser.liquid`
- [ ] Style both sections
- [ ] Add to index.json

### Sprint 5: Header + Footer (Day 5)
- [ ] Modify header.liquid
- [ ] Upload logo assets
- [ ] Modify footer.liquid
- [ ] Test navigation

### Sprint 6: Polish (Day 6-7)
- [ ] Global button styles
- [ ] Typography consistency
- [ ] Mobile responsive pass
- [ ] Cross-browser testing
- [ ] Performance check

---

## File Templates

When VS Code is ready to implement, Claude will provide:
1. Complete Liquid template for each section
2. CSS for each section
3. Schema JSON for each section
4. Step-by-step implementation instructions

---

## Questions to Resolve Before Starting

1. **Store URL:** What's your myshopify.com URL?
2. **GitHub account:** Ready to fork?
3. **Shopify CLI:** Installed or need help?
4. **Logo files:** Do you have SVG versions ready?
5. **Photos:** Any product/hero photos ready, or using placeholders?

---

## Next Action

When you say "go", I'll provide the complete code for Sprint 1 (Foundation) that VS Code can implement directly.
