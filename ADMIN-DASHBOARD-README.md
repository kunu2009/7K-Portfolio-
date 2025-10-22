# Universal Settings Dashboard

A comprehensive admin dashboard for managing all aspects of your portfolio in one place.

## 🌟 Features

### 📱 Apps Management ✅ IMPLEMENTED
- View and edit all portfolio applications
- **Reorder apps** with up/down arrows (changes display order)
- Update app details (name, description, links, images, status)
- Add/remove apps
- See position numbers (#1, #2, etc.)
- Auto-commit changes to GitHub

### 📚 Books Management ✅ IMPLEMENTED
- Upload Markdown (.md) files
- Auto-generate chapters from MD headings
- Edit book metadata (title, author, synopsis, cover image)
- **Reorder books** with drag controls
- Manage chapters and page ranges
- Preview book structure
- See position numbers for display order

### 👤 Portfolio Settings ✅ IMPLEMENTED
- Edit personal information (name, title, location)
- Update bio and description
- Manage social links (GitHub, LinkedIn, Twitter)
- Live preview of portfolio card
- Email configuration

### ⚙️ General Settings ✅ IMPLEMENTED
- Site name and URL configuration
- Meta description for SEO
- SEO preview card
- Analytics tracking toggle
- Maintenance mode toggle
- Live statistics dashboard (Apps, Books, Chapters, Live Apps count)
- Cache management

## 🚀 Access

### URLs
- **Production**: `https://7kc.me/admin`
- **Local Development**: `http://localhost:3000/admin`

### Credentials
- **Username**: `7k`
- **Password**: `7KC&meenter`

## 📖 How to Use

### Reordering Apps/Books

**Apps and Books display order matters!** The order in the admin dashboard determines how they appear on your portfolio homepage.

1. **View Current Order**
   - Each item shows its position (#1, #2, #3, etc.)
   - #1 appears first on the homepage
   
2. **Reorder Items**
   - Click the up arrow (▲) to move item up
   - Click the down arrow (▼) to move item down
   - Changes take effect immediately in the list
   
3. **Save Order**
   - Click "Save Changes" to commit the new order
   - Order is preserved in the data file
   - Vercel redeploys with new order

**Example Order:**
```
Apps List:
#1 7K Life        ← Shows first on homepage
#2 7K LawPrep     ← Shows second
#3 7K Itihaas     ← Shows third
#4 7K Money       ← Shows fourth

Books List:
#1 Ethos          ← Featured book
#2 Kup Games      ← Secondary book
```

### Managing Books

1. **Access the Dashboard**
   ```
   Navigate to /admin
   Sign in with credentials
   Click on the "Books" tab
   ```

2. **Add a New Book**
   ```
   Click the "+" button in the Books panel
   Fill in book details (title, author, category, etc.)
   ```

3. **Upload MD File**
   ```
   Select a book from the list
   Click "Upload MD File"
   Choose your .md file
   Chapters will auto-generate from ## headings
   ```

4. **MD File Format**
   ```markdown
   # Book Title

   ## Chapter 1: Introduction
   This is the content of chapter 1...

   ## Chapter 2: Getting Started
   This is the content of chapter 2...

   ## Chapter 3: Advanced Topics
   This is the content of chapter 3...
   ```

5. **Save Changes**
   ```
   Click "Save Changes" button
   Changes commit to GitHub automatically (localhost only)
   Vercel redeploys automatically
   ```

### Managing Apps

1. **Access Apps Tab**
   ```
   Sign in to /admin
   Click on the "Apps" tab
   View all apps with their current position
   ```

2. **Edit Existing App**
   ```
   Click on any app from the list
   Update details in the editor:
   - Name, tagline, description
   - URL and category
   - Status (live, beta, coming-soon)
   - Rating and review count
   Click "Save Changes"
   ```

3. **Add New App**
   ```
   Click "+" button in Apps panel
   Fill in all fields
   Position starts at the end (#last)
   Save changes
   ```

4. **Reorder Apps**
   ```
   Use up/down arrows on each app card
   Move important apps to top positions
   First app shows prominently on homepage
   Save to commit new order
   ```

### Managing Portfolio

1. **Personal Info**
   ```
   Go to Portfolio tab
   Edit name, title, email, location
   Update bio text
   ```

2. **Social Links**
   ```
   Enter usernames (not full URLs)
   - GitHub: username only
   - LinkedIn: username only  
   - Twitter/X: username only
   Links auto-generate on portfolio
   ```

3. **Preview**
   ```
   See live preview at bottom of Portfolio tab
   Shows exactly how info appears
   ```

### Managing General Settings

1. **Site Configuration**
   ```
   Go to Settings tab
   Update site name and URL
   Edit meta description for SEO
   View SEO preview
   ```

2. **Features Toggle**
   ```
   Enable/disable Analytics tracking
   Turn on Maintenance mode
   ```

3. **View Statistics**
   ```
   See total apps count
   View total books
   Check chapter count
   Monitor live apps
   ```

## 🔧 Technical Details

### File Structure
```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Universal settings dashboard
│   ├── api/
│   │   ├── auth/
│   │   │   └── route.ts      # Authentication API
│   │   ├── apps/
│   │   │   └── route.ts      # Apps CRUD API
│   │   └── books/
│   │       └── route.ts      # Books CRUD API
│   └── settings/
│       └── page.tsx          # Legacy settings (Apps only)
├── lib/
│   ├── auth.ts               # Authentication utilities
│   ├── apps-data.ts          # Apps data store
│   └── books-data.ts         # Books data store
```

### Authentication
- Uses SHA-256 hashed credentials
- Session stored in sessionStorage (1 hour timeout)
- Same auth used across all settings pages

### Data Persistence
- **Localhost**: Saves to files, commits to Git, pushes to GitHub
- **Production (Vercel)**: Read-only, direct GitHub editing required

### MD Parser
- Splits content by `##` headings (chapters)
- Auto-generates chapter numbers
- Estimates page ranges (10 pages per chapter)
- Extracts chapter content between headings

## 🛠️ Development

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access admin dashboard
open http://localhost:3000/admin
```

### Testing Books Upload
1. Create a test MD file:
```markdown
## Introduction
Welcome to the book...

## The Beginning
Once upon a time...

## The Middle
Things get interesting...

## The End
And they lived happily ever after.
```

2. Upload in admin dashboard
3. Verify chapters are parsed correctly
4. Save and commit

### Git Workflow
```bash
# Changes are automatically committed with message:
"Update books data from universal settings panel"

# Manual review:
git log
git diff HEAD~1

# If needed, amend:
git commit --amend
git push --force
```

## 📝 Notes

- Old `/settings` page still works for Apps only
- New `/admin` page is the unified interface
- Books require MD files for content
- Cover images should be in `/public/images/books/`
- All changes require localhost for auto-commit

## 🐛 Troubleshooting

### Authentication Fails
- Clear browser cache and cookies
- Hard refresh (Ctrl + Shift + R)
- Check console for hash mismatches
- Verify credentials: `7k` / `7KC&meenter`

### MD Upload Not Working
- Ensure file has `.md` extension
- Check file uses `##` for chapter headings
- Verify content is UTF-8 encoded

### Changes Not Saving
- Running on localhost? (Production is read-only)
- Check console for API errors
- Verify Git is configured locally
- Check file permissions

### Chapters Not Parsing
- Use `##` (double hash) for chapters
- Use `#` (single hash) only for book title
- Ensure blank line after heading
- Check MD syntax is valid

## 🚀 Future Enhancements

- [x] Apps fetching and editing
- [x] Apps reordering
- [x] Books reordering  
- [x] Portfolio information management
- [x] Social links management
- [x] General settings (SEO, analytics)
- [x] Statistics dashboard
- [ ] Cover image upload
- [ ] Chapter content editor
- [ ] Book preview/reader
- [ ] Export books to PDF/EPUB
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Theme customization UI
- [ ] Backup and restore functionality

## 📞 Support

For issues or questions:
1. Check console logs (F12)
2. Review Git commit history
3. Verify file formats
4. Test on localhost first
