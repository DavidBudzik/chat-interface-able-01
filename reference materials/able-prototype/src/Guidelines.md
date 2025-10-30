# Able Sidebar Navigation - Design System Guidelines

## Color Palette

### Background Colors
- **Background Default** (#181818): Main sidebar background, provides dark theme foundation
- **Primary Default** (#232323): Used for card backgrounds like video player
- **Primary Active** (#474747): Hover/active states for interactive elements

### Call-to-Action Colors
- **CTA Default** (#e03500): Primary action buttons, active state indicators
- **CTA Active** (#c22d00): Pressed/active state for CTA elements
- **CTA Disabled** (#ffd3c2): Disabled state for buttons

### Text Colors
- **Text Primary** (#ffffff): Main text labels on dark background
- **Text Subtle** (#a0a0a0): Secondary text, placeholders, descriptions
- **Text On Dark** (#ffffff): Ensures readability on dark surfaces

### Border & Icons
- **Border Default** (#2e2e2e): Subtle dividers and borders
- **Icons On Dark** (#ffffff): Primary icon color
- **Icons Default** (#4f4f4f): Secondary icon color
- **Icons Subtle** (#bdbdbd): Tertiary icon color

### Accent Colors
- **Strong 18** (#4ab8f7): Avatar backgrounds, accent highlights

## Typography Scale

### Font Families
- **Primary**: Inter (system UI font for all interface text)
- **Logo**: Helvetica Neue LT Pro 43 Light Extended

### Text Styles
- **Text M Regular**: Inter Regular, 14px, 400 weight, 24px line height
  - Usage: Body text, menu labels, button text
- **Text M Strong Semi Bold**: Inter Semi Bold, 14px, 600 weight, 24px line height
  - Usage: Section headers, emphasized labels
- **Text S Regular**: Inter Regular, 12px, 400 weight, 20px line height
  - Usage: Small descriptions, helper text, avatar initials

## Spacing System

Base unit: 4px

### Scale Application
- **spacing-0** (0px): No spacing
- **spacing-1** (2px): Micro adjustments
- **spacing-2** (4px): Tight gaps within components
- **spacing-3** (8px): Standard gaps between icon and text
- **spacing-4** (12px): Medium padding/gaps
- **spacing-5** (16px): Standard horizontal padding
- **spacing-6** (20px): Large gaps between sections
- **spacing-7** (24px): Extra large spacing
- **spacing-8** (28px): Maximum spacing for special cases

## Component Usage

### Sidebar Navigation (Main Container)
- **When to use**: Primary navigation for application
- **Variants**: Open (280px), Collapsed (64px)
- **Behavior**: Toggle between states with sidebar icon
- **Accessibility**: Use semantic nav element, ARIA labels for collapsed icons

### Menu Item
- **When to use**: Navigation links, folder items
- **Variants**: Default, Search (with filter icon)
- **States**: Default, Hover (background change), Active (orange icon)
- **Interactive**: Keyboard navigable, focus states required

### Primary Button (Create New)
- **When to use**: Main call-to-action in navigation
- **Background**: Orange (#e03500)
- **States**: Default, Hover (darken), Active, Disabled (light orange)
- **Icon**: Plus icon, 24px

### Secondary Button (All Workflows)
- **When to use**: Secondary actions with emphasis
- **Style**: Transparent background with orange border
- **States**: Default, Hover (background tint), Active

### Search Input
- **When to use**: Search functionality in navigation
- **Features**: Icon prefix, filter icon suffix
- **Placeholder**: "Search researches...."
- **Interactive**: Focus ring, clear action

### Folder Item
- **When to use**: List of user folders
- **Icon**: Folder icon (24px)
- **Truncation**: Text truncates with ellipsis if too long
- **Actions**: Click to navigate, right-click for context menu

### Video Player Card
- **When to use**: Onboarding, getting started guides
- **Components**: Title, description, video thumbnail, play button, close icon
- **Size**: 224px width × 262px height
- **Responsive**: Hidden in collapsed sidebar state

### Avatar
- **When to use**: User profile representation
- **Style**: Circular, initials displayed
- **Size**: 24px in sidebar footer
- **Colors**: Varied background colors per user

## Layout Principles

### Grid Structure
- Sidebar uses flexbox column layout
- Sections stack vertically with consistent gaps
- Footer anchored to bottom with flex-1 spacer

### Responsive Behavior
- **Open State**: Full navigation with labels visible
- **Collapsed State**: Icons only, labels hidden
- **Transition**: Smooth width animation (200-300ms)
- **Breakpoint**: Consider auto-collapse on mobile (<768px)

### Alignment Rules
- Left-align all text and icons in open state
- Center-align icons in collapsed state
- Maintain vertical rhythm with consistent heights (40px for items)

## Interaction States

### Hover
- Background: Subtle tint (#1a1a1a or similar)
- Cursor: Pointer for interactive elements
- Transition: 200ms ease

### Active/Selected
- Icon: Orange accent (#e03500)
- Background: Same as hover
- Border: None (distinguish with icon color)

### Focus
- Outline: 2px solid blue (#4ab8f7) or system default
- Offset: 2px from element
- Visible: Always show for keyboard navigation

### Disabled
- Opacity: 50% or use disabled colors
- Cursor: not-allowed
- Interactive: Remove all event handlers

## Accessibility Considerations

### Keyboard Navigation
- Tab order: Logo → Create button → All workflows → Menu items → Folders → Account
- Enter/Space: Activate buttons and links
- Escape: Close any expanded sections
- Arrow keys: Navigate between folder items

### Screen Reader
- Use semantic HTML (nav, button, ul/li for lists)
- ARIA labels for icon-only buttons in collapsed state
- ARIA expanded for folder section toggle
- Announce state changes (opened/collapsed)

### Color Contrast
- Text on dark background: WCAG AA compliant (4.5:1)
- Orange CTA on dark: Verify contrast ratio
- Subtle text (#a0a0a0): Use only for non-critical info

## State Management

### Sidebar Collapsed State
- Store preference in localStorage or user settings
- Persist across sessions
- Animate width transition smoothly
- Update icon positions for center alignment

### Folder Expansion
- Default: Show 5 folders + "See more"
- Expanded: Show all folders + "See less"
- Scrollable: If list exceeds viewport height

### Active Route
- Highlight current page in navigation
- Sync with URL routing
- Maintain state on refresh

## Implementation Notes

### Icons
- Use consistent icon library (e.g., Lucide, Heroicons)
- Size: 24px for all navigation icons
- Stroke width: 2px recommended
- Color: Inherit from parent for state management

### Animations
- Width transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Opacity fade: 200ms for labels in collapse
- Hover effects: 150ms ease for immediate feedback

### Performance
- Lazy load folder list if extensive
- Virtual scrolling for 100+ folders
- Debounce search input (300ms)
- Optimize icon rendering (use SVG sprites)

## Design Tokens Export

For developers, export these as CSS variables or JS constants:

```css
:root {
  /* Colors */
  --bg-default: #181818;
  --cta-default: #e03500;
  --text-primary: #ffffff;
  --text-subtle: #a0a0a0;
  --border-default: #2e2e2e;
  
  /* Spacing */
  --spacing-3: 8px;
  --spacing-4: 12px;
  --spacing-5: 16px;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --text-m: 14px;
  --text-s: 12px;
  
  /* Sizing */
  --sidebar-width-open: 280px;
  --sidebar-width-collapsed: 64px;
  --item-height: 40px;
}
```