# docs-kepler-ai

The documentation of Spatial Data Analysis with Kepler.gl AI Assistant

## Getting Started

This documentation is built with [VitePress](https://vitepress.dev/), a modern static site generator powered by Vite and Vue.

### Prerequisites

- Node.js 18 or higher

Install: https://nodejs.org/en/download

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173/`

### Build

Build the documentation for production:

```bash
npm run docs:build
```

The built files will be in `docs/.vitepress/dist/`

### Preview

Preview the production build locally:

```bash
npm run docs:preview
```

## Documentation Content

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.js       # VitePress configuration
│   ├── public/
│   │   └── images/
│   │       └── sys-arch-openassistant.png
│   ├── index.md            # Home page
│   ├── guide.md            # Introduction
│   ├── 1-get-started.md
│   ├── 2-spatial-data-wrangling.md
│   ├── 3-spatial-data-2.md
│   ├── 4-basic-mapping.md
│   └── 5-map-rates.md
├── package.json
└── README.md
```

## Adding New Pages

To add new documentation pages:

1. **Create a new markdown file in the `docs/` directory**
   - Use descriptive filenames (e.g., `6-advanced-analysis.md`)
   - Follow the existing naming convention with numbers for ordering

2. **Update the VitePress sidebar configuration**
   - Edit `docs/.vitepress/config.js`
   - Add your new page to the `sidebar` array in the correct order:
   ```javascript
   sidebar: [
     {
       text: 'Documentation',
       items: [
         { text: 'Introduction', link: '/guide' },
         { text: 'Get Started', link: '/1-get-started' },
         // ... existing pages ...
         { text: 'Your New Page', link: '/6-your-new-page' },
       ],
     },
   ],
   ```

3. **Update this README**
   - Add the new file to the project structure tree above
   - Update any relevant sections as needed

4. **Best practices for new pages**
   - Start with a clear title using `# Page Title`
   - Include a brief introduction explaining what the page covers
   - Use consistent formatting and structure
   - Add internal links to related pages when relevant
   - Test locally with `npm run docs:dev` before committing

## Adding Images to Documentation

To add images to your markdown files:

1. **Place images in the `docs/public/images/` directory**

   - Create subdirectories as needed for organization
   - Supported formats: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`

2. **Reference images in markdown using relative paths**

   ```markdown
   ![Alt text](/images/filename.png)
   ![Alt text](/images/subfolder/filename.jpg)
   ```

3. **Example usage**

   ```markdown
   ![System Architecture](/images/sys-arch-openassistant.png)
   ```

4. **Best practices**
   - Use descriptive alt text for accessibility
   - Optimize image sizes for web (compress large images)
   - Use consistent naming conventions
   - Consider using SVG for diagrams and icons

## Contributing

Contributions are welcome! Here's how to contribute to this documentation:

### 1. Create an Issue First
- Go to the [GitHub Issues](https://github.com/geodaai/docs-kepler-ai/issues) page
- Create a new issue describing what you want to add or fix
- This helps coordinate work and avoid duplicate efforts

### 2. Create a Branch
- **Option A: Use GitHub's interface**
  - On the issue page, look for the "Development" section in the right side panel
  - Click "Create a branch" to automatically create a branch for this issue
  - GitHub will suggest a branch name based on the issue number
- **Option B: Create manually**
  - Create a new branch from `main` using the issue number:
    ```bash
    git checkout -b issue-123-description
    ```
  - Replace `123` with your actual issue number and add a brief description

### 3. Make Your Changes
- Use your preferred editor (e.g., VS Code) to add or modify documentation pages
- Follow the guidelines in the "Adding New Pages" and "Adding Images to Documentation" sections above
- Test your changes locally:
  ```bash
  npm run docs:dev
  ```
- Ensure all links work and the documentation renders correctly

### 4. Create a Pull Request
- Commit your changes with a descriptive message:
  ```bash
  git add .
  git commit -m "Add new page: Advanced Analysis Techniques"
  git push origin issue-123-description
  ```
- Go to the [Pull Requests](https://github.com/geodaai/docs-kepler-ai/pulls) page
- Click "New Pull Request"
- Link your PR to the original issue using `Closes #123` in the description
- Request review from maintainers

### 5. Review and Merge
- Address any feedback from reviewers
- Once approved, your changes will be merged into the main branch
- The updated documentation will be automatically deployed

### Contribution Guidelines
- Follow the existing documentation style and structure
- Use clear, concise language
- Include relevant examples and code snippets
- Test all links and images before submitting
- Keep commits focused and well-described

## License

ISC
