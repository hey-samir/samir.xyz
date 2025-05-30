# Changelog

All notable changes to the Portfolio Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Versioning Methodology

This project uses a custom implementation of Semantic Versioning:
- **Major versions (X.0.0)**: Dictated by user requirement changes or significant architectural shifts
- **Minor versions (0.X.0)**: Represent new chat/interaction cycles with the AI assistant
- **Patch versions (0.0.X)**: Individual commits within a single chat session

## [Unreleased]

## [8.5.3] - 2025-04-27
### Changed
- Updated ventures grid layout to display 4 columns on desktop viewports (2 rows of 4)
- Maintained 2 columns on mobile viewports (4 rows of 2)
- Added user agent detection for better mobile/desktop detection
- Made CSS media queries more robust with !important flags for grid layout
- Changed page background color to #2d0c6a across the site
- Updated filter categories in company-section to use #2d0c6a background
- Improved hover overlay gradient with new color scheme
- Updated profile section text to include Hudson River Trading experience
- Changed "I drive impact at startups" to be bold and text-secondary color

### Fixed
- Set viewport breakpoint to 480px for mobile devices (was 768px)
- Fixed inconsistency between CSS variables and Tailwind config
- Harmonized background colors throughout the application
- Added proper spacing in profile text (comma after "algorithmic market maker")

## [8.5.2] - 2025-04-25
### Documentation
- Updated README.md with accurate project structure reflecting current codebase
- Enhanced configuration documentation with database configuration details
- Improved Development Tools & Scripts section with accurate script descriptions
- Added detailed Building and Running section with database setup instructions
- Updated Replit-specific configuration information

## [8.5.1] - 2025-04-25
### Documentation
- Updated README.md with comprehensive project documentation
- Added detailed project structure, configuration, and development guidelines
- Updated version history section with latest version information
- Added the Seven Laws of Artificial Intelligence to documentation
- Enhanced project cleanup notes with latest improvements

## [8.5.0] - 2025-04-25
### Changed
- Converted website from single-page to multi-page application with separate tabs
- Updated navigation to point to separate pages
- Removed buttons from Profile section
- Made footer match navbar color (#8c5cf6)
- Updated footer with "Copyright 2025 Interspace Ventures" and "Version 8.5.0 | Built with Replit at the speed of thought"
- Fixed issues with Tailwind CSS configurations

## [8.15.0] - 2025-04-09
### Added
- Created an emergency navbar that loads via a separate script for guaranteed rendering
- Enhanced navbar with right-aligned navigation links and proper wordmark logo positioning

### Changed
- Implemented a simplified navbar component with improved structure and styling
- Updated navbar with Alexandria font, purple background color, and correct dimensions (80px height)
- Fixed navbar position to stay at the top when scrolling
- Updated footer with version number linked to changelog and consistent purple styling

### Fixed
- Fixed menu items to appear on the same line as logo with proper spacing
- Ensured navbar spans the full width of the page with no white borders

## [8.14.0] - 2025-04-07
### Added
- Implemented shadcn CSS variable system for more consistent theming
- Created custom button variant for filter categories to avoid conflicts
- Added proper theme configuration using shadcn conventions

### Changed
- Updated globals.css to use CSS variables for colors and design tokens
- Replaced direct color references with CSS variables
- Refactored button component to use data attributes for state

### Removed
- Eliminated !important flags by implementing proper CSS specificity
- Removed hard-coded color values in favor of themeable variables 

## [8.13.1] - 2025-04-07
### Fixed
- Fixed styling issue with navbar and footer background color not correctly displaying #5239cc
- Fixed filter category styling to ensure selected categories properly show purple background
- Added CSS specificity overrides with !important flags to resolve styling conflicts
- Resolved Button component styling conflicts by removing defaults that were overriding custom styles

## [8.13.0] - 2025-04-07
### Added
- Enhanced visual styling of active filter categories with purple background and white text

### Changed
- Updated navbar and footer background color to #5239cc for consistent branding
- Simplified portfolio filter categories to match the provided design
- Improved the overall visual consistency of the website

### Fixed
- Fixed duplicate 'All' button issue in the portfolio filters

### Maintained
- Portfolio stats section with TVPI, Gross Multiple, Net Multiple, and IRR metrics
- Portfolio cards displaying in 2 columns on all screen sizes, including mobile

## [8.12.3] - 2025-04-06
### Enhanced Filter Categories Design
- **Implemented Premium Filter Button Styling**
  - Added gradient backgrounds with purple accents for selected filters
  - Implemented hover effects with subtle scaling animations for better interactivity
  - Enhanced visual polish with shadow effects and proper border styling
  - Created a refined filter container with gradient background and border styling
  - Improved spacing and padding for better visual hierarchy
  - Added smooth transitions for hover and click states

### Maintained Previous Improvements
- **Portfolio Card Layout Enhancements**
  - Kept the two-column layout for portfolio cards on all screen sizes
  - Maintained improved company card styling with full width support
  - Preserved proper spacing between cards for better readability
  - Continued using the original stats section design with 4-column layout

### Added
- Added complete stats display with TVPI (1.44x), Gross Multiple (1.22x), Net Multiple (1.12x), and IRR (10%)

## [8.12.2] - 2025-04-06
### Fixed Portfolio Card Layout
- **Ensured Two-Column Layout on All Screen Sizes**
  - Modified grid layout to always display 2 columns, even on mobile devices
  - Improved company card width and responsive behavior for consistent layout
  - Increased spacing between cards for better readability and visual separation
  - Enhanced card container to maintain proper dimensions on all screen sizes

### Maintained Previous Improvements
- **Continued Portfolio Page Enhancements**
  - Kept the reverted stats section with original 4-column layout 
  - Maintained the investment metrics display with TVPI, Gross Multiple, Net Multiple, and IRR
  - Preserved dark background with white text and gray labels for consistent visual identity
  - Retained properly styled filter categories with purple accents

## [8.12.1] - 2025-04-06
### Reverted Stats Section to Original Design
- **Restored Classic Portfolio Stats Layout**
  - Reverted to the original 4-column stats layout from the design reference
  - Added complete investment metrics with TVPI, Gross Multiple, Net Multiple, and IRR
  - Maintained dark background with white text and gray labels for consistent visual identity
  - Improved responsive design with 2 columns on mobile and 4 columns on desktop
  - Added proper spacing between stat rows for better readability

### Portfolio Page Enhancements
- **Maintained Other Portfolio Improvements**
  - Kept the fixed white text header with dark background
  - Maintained properly styled filter categories with purple accents
  - Preserved the white background container for company cards
  - Retained the company card layout with at least 2 cards per row
  - Continued using direct Tailwind classes for better maintainability

## [8.12.0] - 2025-04-06
### Fixed Portfolio Page Styling
- **Improved Portfolio Page Design**
  - Fixed header with proper white text on dark background
  - Implemented properly styled stats section with consistent layout
  - Enhanced filter categories with proper styling and purple accents
  - Created white background container for company cards
  - Fixed company card layout to display at least 2 cards per row
  - Replaced CSS module styles with direct Tailwind classes for better maintainability
  - Implemented responsive design for different screen sizes
  - Improved badge styling with better colors and positioning

### Code Quality Improvements
- **Enhanced Styling Approach**
  - Removed unnecessary CSS classes in favor of direct Tailwind utility classes
  - Eliminated redundant styling properties by using Tailwind's design system
  - Improved component composition with better styling practices
  - Removed any need for !important flags by using proper CSS specificity

## [8.11.0] - 2025-04-05
### Changed
- Updated asset path references in portfolio.ts from `/assets/` to `/attached_assets/`
- Updated favicon references in layout.tsx from `/assets/images/favicon.svg` to `/attached_assets/favicon.png`

### Fixed
- Fixed README.md table of contents link to point correctly to 'Seven Laws of Artificial Intelligence' section
- Verified all asset references using the centralized path structure
- Eliminated 404 errors for images by ensuring consistent asset path usage

### Implemented
- Applied Law #7 principle of using centralized configuration and avoiding duplication

## [7.9.0] - 2025-04-04
### Added
- Added webview compatibility support for Replit environment with specialized scripts
- Created globals.d.ts with TypeScript declarations for webview compatibility

### Changed
- Enhanced CSS with forced visibility rules to prevent loading state in webview
- Improved ThemeProvider with webview-specific detection and rendering optimizations
- Added client-side visibility enforcement via ClientLayout component

### Fixed
- Added CSS fallbacks to ensure content is always visible regardless of theme state
- Fixed discrepancy between browser and webview rendering behaviors

## [7.3.0] - 2025-03-31
### Documentation
- Enhanced documentation consolidation with centralized management in /docs folder
- Created final-documentation-cleanup.sh script for comprehensive documentation handling
- Added symlinks for all README files to point to the consolidated docs
- Excluded system libraries from documentation processing
- Updated consolidated-README.md with documentation consolidation details
- Added documentation cleanup tracking in version-config.json
- Added documentation cleanup to start.sh to automate the process during startup
- Updated root README.md to be concise and point to the consolidated documentation

## [7.2.0] - 2025-03-31
### Asset Management
- Improved asset organization with consolidated public/attached_assets directory
- Created final-cleanup.sh script to completely remove root attached_assets after migration
- Updated organize-assets.sh to preserve error logs in public/logs/errors
- Added backward compatibility with symlinks for smoother transition
- Created dedicated public/screenshots directory for screenshot assets
- Added version tracking for asset cleanup status in version.json

### Build Process
- Updated start.sh (v4.3) to perform more selective cleanup rather than full cache wipes
- Enhanced script permissions handling for more reliable execution
- Added proper directory structure creation to ensure consistent runtime environment
- Improved workflow configuration for better startup performance

### Project Structure
- Improved project directory organization with more logical structure
- Moved portfolio.html to docs/snapshots for better organization
- Moved screenshot.jpg to public/screenshots directory
- Created dedicated public/logs/errors directory for capturing error information
- Enhanced version.json with new features tracking section

## [7.1.0] - 2025-03-31
### Documentation
- Consolidated all documentation into a single comprehensive document in the docs folder
- Created consolidated-README.md with complete project documentation including:
  - Technology stack details
  - Project structure and architecture
  - Configuration guidelines
  - Development tools and scripts
  - Development best practices
  - Building and running instructions
- Updated main README.md with simplified overview and links to consolidated docs
- Updated docs/index.md to reference the consolidated documentation
- Modified config/README.md and tools/README.md to point to main documentation
- Reorganized documentation structure for improved maintainability
- Enhanced documentation with more detailed section organization
- Preserved previous READMEs with legacy reference notes

## [5.0.0] - 2025-03-30
### Added
- Added data-status attributes for enhanced CSS targeting of status badges
- Added comprehensive node validation to prevent DOM manipulation errors 
- Added enhanced image timeout handling with better error recovery
- Added improved element connectivity checks before DOM operations

### Fixed
- Fixed portfolio card styling to match design reference with clean white cards
- Fixed badge styling with proper purple color for "Markup" and gray for "Acquired"
- Fixed DOM manipulation errors with proper parent node validation
- Fixed portfolio grid appearance with better spacing and consistent card heights

### Changed
- Redesigned portfolio cards to match the clean, white card design from reference
- Updated badge styling with the specified purple for "Markup" badges
- Increased logo container dimensions from 70x140px to 85x160px for better display
- Increased logo image max-height from 50px to 70px for improved visibility
- Enhanced reset-portfolio.js script with safer DOM operations

## [4.9.0] - 2025-03-29
### Added
- Added DOM operation safety checks to prevent "removeChild" Node errors
- Added error boundary patterns with proper fallback display for image components
- Added enhanced image timeouts with safe node manipulation techniques
- Added consistent error logging for improved debugging with custom error types

## [4.7.0] - 2025-03-29
### Fixed
- Fixed logo display issues within cards for consistent visual presentation
- Standardized card padding (16px) on all sides for uniform appearance
- Fixed filter categories functionality to properly show/hide relevant companies
- Improved image path handling in portfolio.ts to resolve logo loading issues

### Changed
- Changed hover-over gradient from purple to gray for more professional look
- Removed 'Back to Profile' button from portfolio page bottom
- Enhanced client-side reset script (v4.0) to ensure consistent styling across all cards
- Improved fallback handling for problematic logos with better error recovery

## [4.6.0] - 2025-03-29
### Changed
- Enhanced portfolio card display with improved visual elements and interactions:
  - Increased logo size from 40px to 50px max-height for better visibility
  - Enlarged logo container from 45px to 60px height with proper centering
  - Added subtle drop shadow to logos for improved visual separation
  - Increased spacing between cards from 1rem to 1.5rem for better layout flow
  - Refined the grid layout with 92% width and 0.5rem padding for consistent spacing
  - Enhanced markup/acquired badges with rounded corners and subtle shadow effects

### Enhancement
- Improved hover animations for better user interaction:
  - Added subtle card lift effect (-translate-y-1) on hover
  - Enhanced purple gradient overlay with higher opacity and inner shadow
  - Implemented staggered animation for text elements on hover
  - Added text shadow to description text for better readability
  - Improved transition timing and easing functions for smoother animations

## [4.5.0] - 2025-03-29
### Changed
- Improved navbar responsiveness to show menu at all but the narrowest viewports
- Updated mobile breakpoint to 420px to ensure menu visibility at most screen sizes
- Implemented responsive gap spacing for menu items using min() function
- Fixed mobile menu button to properly hide on larger viewports

### Enhancement
- Enhanced menu visibility based on content width rather than device type
- Created smoother transition between desktop and mobile navigation modes
- Ensured consistent styling across viewport size changes 
- Preserved purple accent styling in both navigation modes

### Fixed
- Resolved Turbopack HMR error related to version.json import
- Improved version fetching to use client-side fetch instead of direct import
- Enhanced footer component with more reliable version display
- Added version.json to public directory for proper client-side access

## [4.2.0] - 2025-03-29
### Added
- Created dedicated directories for improved project organization:
  - `/tools/scripts/` - For helper scripts and automation tools
  - `/docs/snapshots/` - For HTML snapshots and reference files
  - `/docs/references/` - For content reference and template files

### Changed
- Relocated script files to appropriate directories:
  - Moved build-next-site.sh to tools/scripts/
  - Moved smart-start.sh to tools/scripts/
  - Moved screenshot.html to docs/snapshots/
  - Moved other tools and reference files to their dedicated directories
- Updated script references to work with the new file locations
- Enhanced start.sh to handle scripts in new locations
- Improved project organization for better maintainability

### Documentation
- Cleaned up root directory by moving non-essential files to appropriate folders
- Ensured all scripts maintain proper references after relocation
- Maintained backward compatibility with workflow configuration

## [4.1.0] - 2025-03-24
### Added
- Enhanced documentation with new Outline section for easier navigation
- Comprehensive Repository Overview with detailed folder structure explanations
- Naming Conventions subsection with patterns for files, components, and directories
- Reorganized Stack section into logical categories for better readability:
  - Core Framework & Runtime
  - Frontend Libraries
  - Styling & UI
  - CSS Processing
  - Development & Deployment

### Changed
- Updated version tracking in version.json to reflect documentation improvements
- Improved README.md structure with anchor links to all major sections
- Restructured technology stack presentation with categorized groupings

### Documentation
- Streamlined documentation organization for better readability
- Added descriptive text to navigation links for better context
- Updated Latest Version section to show only current version details
- Enhanced Stack section with clearer categorization of technologies

## [4.0.0] - 2025-03-23
### Added
- New "Outline" section with navigation links to all major sections
- New "Artificial Intelligence Model Instructions" section in README
- Comprehensive "Five Laws of Artificial Intelligence" for model guidance
- Enhanced "Stack" section with detailed package version information
- Added "Repository Overview" section with folder hierarchy explanation
- Added "Naming Conventions" subsection to Repository Overview
- Expanded versioning philosophy explanation

### Changed
- Renamed "Technology Stack" to "Stack" with more comprehensive details
- Renamed "Running the Application" to "Build Instructions"
- Consolidated all documentation to the docs directory
- Removed redundant README.md and CHANGELOG.md from root directory

### Documentation
- Added detailed explanations for each technology in the stack
- Created comprehensive project folder structure documentation
- Created new License section
- Enhanced Version History section with versioning philosophy
- Improved overall documentation structure and clarity

## [3.4.3] - 2025-03-23
### Fixed
- Added symbolic link for attached_assets to ensure images load properly
- Enhanced public directory structure for better asset accessibility
- Improved application startup reliability

## [3.4.2] - 2025-03-23
### Fixed
- Corrected serverExternalPackages configuration key location for Next.js 15
- Moved from deprecated serverComponentsExternalPackages to serverExternalPackages at the top level
- Updated version number in configuration comments for better tracking

## [3.4.1] - 2025-03-23
### Fixed
- Corrected Next.js configuration to follow latest Next.js 15 standards
- Fixed server component configuration warning by updating the configuration format
- Improved startup script permissions and reliability
- Enhanced cache clearing in start.sh for better React 19 compatibility

## [3.4.0] - 2025-03-23
### Fixed
- Resolved React 19 ReactCurrentDispatcher errors affecting client-side rendering
- Fixed infinite loading issues by simplifying client components structure
- Eliminated incompatibilities between Next.js 15 and React 19
- Enhanced webpack configuration to properly handle React 19 JSX runtime

### Changed
- Streamlined theme provider components to prevent hydration issues
- Simplified layout structure for more reliable rendering across browsers
- Removed unused dependencies to reduce potential conflicts
- Added cache clearing to start.sh script for cleaner application starts
- Created a more direct rendering path by eliminating unnecessary component nesting

## [3.3.0] - 2025-03-23
### Changed
- Updated navbar to match specific design requirements:
  - Fixed full-width layout with proper spacing
  - Added custom 'xs' breakpoint (480px) in Tailwind for responsive design
  - Implemented hamburger menu that only shows on iPhone-sized screens
  - Applied dark background with white text for better contrast
  - Positioned theme toggle correctly on the right side of navigation
- Enhanced About page with clickable links for all company references
- Increased top padding in layout to prevent navbar overlap with content

### Documentation
- Enhanced documentation with clear AI interaction guidelines
- Structured version and progress tracking for better collaboration
- Updated README with detailed instructions for AI assistance

## [3.2.2] - 2025-03-22
### Changed
- Fixed padding to prevent content overlap with navbar
- Applied consistent styling across mobile and desktop views
- Enhanced visibility of navigation elements in dark mode

## [3.2.1] - 2025-03-22
### Changed
- Implemented feedback from initial navbar implementation
- Fine-tuned spacing and alignment in responsive layout

## [3.2.0] - 2025-03-22
### Performance
- Fixed workflow configuration issues for reliable deployment
- Improved startup time to ~1.6 seconds (down from 2.2s)
- Optimized memory usage to ~51MB for better efficiency
- Updated experimental Next.js configuration to use latest turbo rules format
- Created alternative startup mechanism with run.js for better reliability

### Changed
- Moved configuration files into dedicated subdirectories with symlinks from root
- Created more efficient server initialization process
- Enhanced error handling and recovery in startup scripts
- Added runtime performance measurements to monitor load times

## [3.1.0] - 2025-03-22
### Performance
- Implemented modular configuration structure for better organization
- Optimized webpack configuration to reduce build and load times
- Enhanced security headers for better protection
- Reduced page load times from 2.2s toward 200ms target
- Created dedicated configuration modules for performance, security, and webpack

### Changed
- Moved Next.js configuration to dedicated config directory
- Updated custom-start.js to use ES modules instead of CommonJS
- Implemented performance optimizations for faster page loads
- Enhanced start script with version detection and proper execution

## [3.0.0] - 2025-03-22
### Fixed
- Resolved critical client-side hydration issues in Replit environment
- Fixed infinite loading problem where server would start but site would never load
- Eliminated source map related errors in webpack that were preventing client-side rendering
- Resolved TypeError related to webpack client rendering

### Changed
- Switched from Node.js to Bun runtime for better Next.js compatibility in Replit
- Optimized Next.js configuration for Replit environment
- Enhanced webpack configuration to eliminate client-side hydration errors
- Improved client-side wrapper components for better hydration stability

### Added
- Implemented safeguards against source map related errors
- Added version tracking in configuration files
- Created this changelog to track version history

## [2.0.0] - 2025-03-15
### Added
- Improved portfolio cards with category filtering
- Enhanced client-side hydration with ClientWrapper component
- Added error boundaries for better error handling
- Implemented stats section on homepage

### Changed
- Updated to Next.js 15.2.3
- Enhanced mobile responsiveness

## [1.0.0] - 2025-03-01
### Added
- Initial portfolio website with server-side rendering
- Basic portfolio showcase functionality
- Responsive design with Tailwind CSS
- Dark/light mode support