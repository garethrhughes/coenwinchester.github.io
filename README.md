# Guitar Teacher Website

A responsive Jekyll-based website for a private guitar lesson business, optimized for GitHub Pages deployment.

## Features
- Home page with hero image, location & rates, and a "Book a Lesson" button
- FAQ page with collapsible sections
- Blog/Articles section for guitar-related content
- Fully responsive design with SCSS
- SEO optimized
- GitHub Pages compatible

## Development Setup

### Windows Setup Instructions

1. **Install Ruby**
   - Download the Ruby+Devkit installer from [RubyInstaller](https://rubyinstaller.org/downloads/)
   - Choose Ruby version 3.2.x (x64) with DevKit
   - Run the installer and make sure to check "Add Ruby executables to your PATH"
   - At the end of installation, run the `ridk install` step and choose option 3

2. **Install Jekyll and Bundler**
   Open Command Prompt as Administrator and run:
   ```bash
   gem install jekyll bundler
   ```

3. **Verify Installation**
   ```bash
   ruby -v
   gem -v
   jekyll -v
   ```

### Mac/Linux Setup
1. Install Ruby via rbenv or RVM
2. Run `gem install jekyll bundler`

## Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/garethrhughes/coenwinchester.github.io
   cd guitar-teacher-site
   ```

2. **Install Dependencies**
   ```bash
   bundle install
   ```

3. **Run the Development Server**
   ```bash
   bundle exec jekyll serve
   ```
   The site will be available at `http://localhost:4000`

## Directory Structure
```
.
├── _config.yml          # Site configuration
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _posts/            # Blog posts
├── assets/            # Static files
│   ├── scss/         # SCSS source files
│   ├── css/          # Compiled CSS
│   └── img/          # Images
└── pages/            # Static pages
```

## Making Changes

### Content Updates
- Edit markdown files in `_posts/` for blog posts
- Update `_config.yml` for site-wide settings
- Modify files in `_includes/` for reusable components

## Deployment

1. **GitHub Pages**
   - Push changes to the `main` branch

## Troubleshooting

### Windows-Specific Issues
- If you get SSL errors, try:
  ```bash
  gem source -r https://rubygems.org/
  gem source -a http://rubygems.org/
  ```
- If `bundle install` fails, run:
  ```bash
  ridk exec pacman -S mingw-w64-x86_64-gmp
  ```

### General Issues
- Clear Jekyll cache: `bundle exec jekyll clean`
- Update dependencies: `bundle update`
- Check Jekyll version: `jekyll -v`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source under the MIT license. Static Site (GitHub Pages)
