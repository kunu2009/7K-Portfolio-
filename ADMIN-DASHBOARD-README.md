# Universal Settings Dashboard

A comprehensive admin dashboard for managing all aspects of your portfolio in one place.

## 🌟 Features

### 📱 Apps Management
- View and edit all portfolio applications
- Update app details (name, description, links, images)
- Add/remove apps
- Auto-commit changes to GitHub

### 📚 Books Management
- Upload Markdown (.md) files
- Auto-generate chapters from MD headings
- Edit book metadata (title, author, synopsis, cover image)
- Manage chapters and page ranges
- Preview book structure

### 👤 Portfolio Settings (Coming Soon)
- Personal information
- Social links
- Bio and description

### ⚙️ General Settings (Coming Soon)
- Theme preferences
- SEO settings
- Analytics configuration

## 🚀 Access

### URLs
- **Production**: `https://7kc.me/admin`
- **Local Development**: `http://localhost:3000/admin`

### Credentials
- **Username**: `7k`
- **Password**: `7KC&meenter`

## 📖 How to Use

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
   ```

2. **Edit Existing App**
   ```
   Click on any app from the list
   Update details in the editor
   Click "Save Apps"
   ```

3. **Add New App**
   ```
   Click "Add New App"
   Fill in all fields
   Save changes
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

- [ ] Cover image upload
- [ ] Chapter content editor
- [ ] Book preview/reader
- [ ] Export books to PDF/EPUB
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Theme customization
- [ ] SEO optimization tools

## 📞 Support

For issues or questions:
1. Check console logs (F12)
2. Review Git commit history
3. Verify file formats
4. Test on localhost first
