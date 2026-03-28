# Content Tab - Complete Homepage Control

## 🎯 Overview

The **Content tab** in the admin dashboard gives you complete control over ALL sections of your portfolio homepage. You can edit text, images, links, and even enable/disable entire sections.

## 🚀 Features

### ✅ All Sections Fully Implemented
1. **Hero Section** - Main landing section with title, subtitle, description, CTA buttons, and background
2. **About Section** - Personal bio with highlights and profile image
3. **Philosophy Section** - Your core principles and values (up to unlimited philosophies)
4. **Services Section** - Services you offer with features arrays
5. **Portfolio Showcase** - Featured project cards with images and categories
6. **Ecosystem Section** - 7K Apps ecosystem description with features list
7. **Projects Section** - Full project portfolio with tech stacks, links, and GitHub repos
8. **Contact Section** - Email, phone, availability, and social links
9. **Journey Section** - Timeline of milestones with year/title/description
10. **Recommendations Section** - Testimonials from clients/colleagues with avatars
11. **Support Section** - Donation links (Buy Me a Coffee, Patreon, PayPal)

## 📖 How to Use

### Accessing the Content Tab
1. Go to `/admin` in your browser
2. Login with credentials:
   - Username: `7k`
   - Password: (your password)
3. Click on the **Content** tab (third tab with Layout icon)

### Editing a Section
1. **Select a section** from the left sidebar (e.g., "Hero", "About")
2. **Toggle enable/disable** at the top of the editor
3. **Edit the content** in the form fields
4. **Click "Save Changes"** when done

### Hero Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Main headline (e.g., "Kunal Chheda")
- **Subtitle**: Supporting text (e.g., "Student Developer & Polyglot")
- **Description**: Brief introduction
- **Background Image URL**: Hero background image
- **Primary CTA Button**:
  - Text (e.g., "Explore Apps")
  - Link (e.g., "/apps")
- **Secondary CTA Button**:
  - Text (e.g., "View Projects")
  - Link (e.g., "#projects")

### About Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "About Me")
- **Subtitle**: Section subtitle (e.g., "Who I Am")
- **Description**: Your bio/introduction
- **Profile Image URL**: Your profile picture
- **Highlights**: List of key points
  - Use **Add Highlight** button to add more
  - Use **trash icon** to remove highlights
  - Edit inline by typing in the input fields

### Philosophy Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Philosophy")
- **Subtitle**: Section subtitle (e.g., "What Drives Me")
- **Philosophies**: Array of philosophy items
  - Each has: title, description, icon (optional)
  - Use **Add Philosophy** button to add more
  - Use **trash icon** to remove a philosophy
  - Edit all fields inline

### Services Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Services")
- **Subtitle**: Section subtitle (e.g., "What I Offer")
- **Services**: Array of service offerings
  - Each service has: id, title, description, icon
  - **Features sub-array**: Each service can have multiple features
  - Use **Add Service** to create new service
  - Use **Add Feature** within each service to add features
  - Remove with trash/X icons

### Portfolio Showcase Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Featured Work")
- **Subtitle**: Section subtitle
- **Showcase Items**: Array of featured projects
  - Each has: id, title, description, image URL, link, category
  - Use **Add Showcase Item** button
  - Remove with trash icon

### Ecosystem Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "7K Ecosystem")
- **Subtitle**: Section subtitle
- **Description**: Detailed description of your ecosystem
- **Features**: Array of feature points
  - Add/remove features with buttons

### Projects Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Projects")
- **Subtitle**: Section subtitle
- **Projects**: Array of project items
  - Each has: id, title, description, link, github, image
  - **Tech Stack sub-array**: Technologies used
  - Use **Add Project** to create new project
  - Use **Add Tech** within each project for tech stack
  - All fields optional except id, title, description

### Contact Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Get in Touch")
- **Subtitle**: Section subtitle
- **Email**: Your contact email
- **Phone**: Your phone number (optional)
- **Availability**: Status message (e.g., "Available for freelance")
- **Social Links**: Object with 4 platforms
  - GitHub, LinkedIn, Twitter, Instagram
  - All optional

### Journey Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "My Journey")
- **Subtitle**: Section subtitle
- **Milestones**: Array of timeline events
  - Each has: year, title, description
  - Use **Add Milestone** button
  - Remove with trash icon
  - Perfect for career timeline

### Recommendations Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Testimonials")
- **Subtitle**: Section subtitle
- **Testimonials**: Array of recommendations
  - Each has: id, name, role, company, text, avatar URL
  - Use **Add Testimonial** button
  - Auto-generates unique IDs
  - Remove with trash icon

### Support Section Fields
- **Enabled**: Toggle to show/hide this section
- **Title**: Section title (e.g., "Support My Work")
- **Subtitle**: Section subtitle
- **Description**: Why you need support
- **Donation Links**: Object with 3 platforms
  - Buy Me a Coffee
  - Patreon
  - PayPal
  - All optional

## 🔧 Technical Details

### Data Storage
All section data is stored in:
```
src/lib/sections-data.ts
```

### API Endpoint
Changes are saved via:
```
POST /api/sections
```

### Git Integration
Every save automatically:
- ✅ Commits changes to Git
- ✅ Pushes to remote repository
- ✅ Message: "Update portfolio sections from admin panel"

### Production Note
⚠️ **Vercel Deployment**: On Vercel (production), the filesystem is read-only. Changes will be saved to your local Git repository during development, then deployed via Git push.

## 🎨 Section Layout

The Content tab uses a **two-column layout**:

**Left Column** (Sidebar):
- List of all 11 sections
- Click any section to edit it
- Active section is highlighted

**Right Column** (Editor):
- Section-specific form fields
- Enable/disable toggle at top
- Save Changes button at top-right
- Dynamic inputs based on section type

## 🛠️ Data Structure

Each section has a consistent structure:

```typescript
{
  enabled: boolean,         // Show/hide section
  title: string,           // Section heading
  subtitle: string,        // Section subheading
  // Section-specific fields...
}
```

### Hero Section Structure
```typescript
{
  enabled: true,
  title: "Kunal Chheda",
  subtitle: "Student Developer & Polyglot",
  description: "Building the 7K Ecosystem...",
  ctaText: "Explore Apps",
  ctaLink: "/apps",
  secondaryCtaText: "View Projects",
  secondaryCtaLink: "#projects",
  backgroundImage: "/images/main-background.svg"
}
```

### About Section Structure
```typescript
{
  enabled: true,
  title: "About Me",
  subtitle: "Who I Am",
  description: "I'm Kunal — a 12th-grade...",
  highlights: [
    "12th Grade Student",
    "20+ Apps Built",
    "Chess Player (1300 Rating)",
    "Polyglot in Progress"
  ],
  image: "/images/profile.jpg"
}
```

## 🔐 Security

- **Authentication Required**: Must login to access admin dashboard
- **SHA-256 Hashing**: Passwords are hashed using Node.js crypto
- **Session Management**: 1-hour session timeout
- **Git Commits**: All changes are tracked in version control

## 📊 Current Status

| Section | Status | Fields |
|---------|--------|--------|
| Hero | ✅ Complete | Title, Subtitle, Description, BG Image, 2 CTA Buttons |
| About | ✅ Complete | Title, Subtitle, Description, Image, Highlights Array |
| Philosophy | ✅ Complete | Title, Subtitle, Philosophies Array (title/description/icon) |
| Services | ✅ Complete | Title, Subtitle, Services Array with Features Sub-arrays |
| Portfolio Showcase | ✅ Complete | Title, Subtitle, Showcase Items Array (id/title/desc/image/link/category) |
| Ecosystem | ✅ Complete | Title, Subtitle, Description, Features Array |
| Projects | ✅ Complete | Title, Subtitle, Projects Array with Tech Stack Sub-arrays |
| Contact | ✅ Complete | Title, Subtitle, Email, Phone, Availability, Social Links Object |
| Journey | ✅ Complete | Title, Subtitle, Milestones Timeline Array |
| Recommendations | ✅ Complete | Title, Subtitle, Testimonials Array (id/name/role/company/text/avatar) |
| Support | ✅ Complete | Title, Subtitle, Description, Donation Links Object |

## � All Sections Complete!

Every section editor is now fully functional with:
- ✅ Enable/disable toggles
- ✅ Text inputs for titles, subtitles, descriptions
- ✅ Array managers with add/remove functionality
- ✅ Nested sub-arrays (features, tech stacks)
- ✅ Object editors (social links, donation links)
- ✅ Auto-generated IDs for new items
- ✅ Full CRUD operations

## 💡 Tips

1. **Test Changes Locally**: Always test changes on localhost before deploying
2. **Image URLs**: Use absolute URLs or paths starting with `/`
3. **Links**: Can be internal (`/apps`) or external (`https://...`) or anchors (`#projects`)
4. **Highlights**: Keep them concise (3-5 words each)
5. **Backup**: All changes are in Git, so you can always revert

## 🐛 Troubleshooting

**Problem**: Changes not saving
- **Solution**: Check browser console for errors, ensure you're logged in

**Problem**: Section not appearing on homepage
- **Solution**: Make sure "Enabled" toggle is ON for that section

**Problem**: Images not loading
- **Solution**: Verify image URLs are correct and accessible

**Problem**: Git commit failed
- **Solution**: Check Git is configured correctly in your local environment

## 📞 Support

If you encounter issues or need help:
1. Check browser console (F12) for error messages
2. Review `ADMIN-DASHBOARD-README.md` for general admin docs
3. Check Git commits to see what changed
4. Verify all required fields are filled in

---

**Last Updated**: January 2025  
**Version**: 2.0 (All 11 sections complete!)  
**Lines of Code**: 3,100+ in admin dashboard  
**Features**: Complete content management for entire portfolio homepage
