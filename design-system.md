# CVCraft AI — Design System Specification

> A comprehensive design system for building professional resume and portfolio applications.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Border Radius](#5-border-radius)
6. [Shadows](#6-shadows)
7. [Components](#7-components)
8. [Animations](#8-animations--transitions)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Dark Mode](#10-dark-mode)
11. [Accessibility](#11-accessibility)

---

## 1. Design Philosophy

### Core Principles

- **Clean & Professional**: A resume/portfolio builder should convey professionalism and trust
- **Modern & Approachable**: Avoid corporate stiffness; make it feel inviting
- **Focus on Content**: The design should highlight user's achievements, not overshadow them
- **Accessibility First**: WCAG 2.1 AA compliance

### Brand Values

- **Trust**: Reliable, secure, professional
- **Simplicity**: Easy to use, intuitive
- **Innovation**: AI-powered suggestions
- **Quality**: Excellent output

---

## 2. Color Palette

### 2.1 Primary Colors (Sky Blue - Trust & Professionalism)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-primary-50` | `#f0f9ff` | 240, 249, 255 | Lightest tint (backgrounds) |
| `--color-primary-100` | `#e0f2fe` | 224, 242, 254 | Subtle backgrounds |
| `--color-primary-200` | `#bae6fd` | 186, 230, 253 | Disabled backgrounds |
| `--color-primary-300` | `#7dd3fc` | 125, 211, 252 | Hover states |
| `--color-primary-400` | `#38bdf8` | 56, 189, 248 | Active/pressed |
| `--color-primary-500` | `#0ea5e9` | 14, 165, 233 | **Primary brand color** |
| `--color-primary-600` | `#0284c7` | 2, 132, 199 | Primary buttons |
| `--color-primary-700` | `#0369a1` | 3, 105, 161 | Button hover |
| `--color-primary-800` | `#075985` | 7, 89, 133 | Focus rings |
| `--color-primary-900` | `#0c4a6e` | 12, 74, 110 | Darkest shade |
| `--color-primary-950` | `#082f49` | 8, 47, 73 | Near black |

### 2.2 Secondary Colors (Violet - Innovation & Creativity)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-secondary-50` | `#f5f3ff` | 245, 243, 255 | Lightest tint |
| `--color-secondary-100` | `#ede9fe` | 237, 233, 254 | Subtle backgrounds |
| `--color-secondary-200` | `#ddd6fe` | 221, 214, 254 | Disabled backgrounds |
| `--color-secondary-300` | `#c4b5fd` | 196, 181, 253 | Hover states |
| `--color-secondary-400` | `#a78bfa` | 167, 139, 250 | Active/pressed |
| `--color-secondary-500` | `#8b5cf6` | 139, 92, 246 | **Secondary accent** |
| `--color-secondary-600` | `#7c3aed` | 124, 58, 237 | Secondary hover |
| `--color-secondary-700` | `#6d28d9` | 109, 40, 217 | Focus rings |
| `--color-secondary-800` | `#5b21b6` | 91, 33, 182 | Darkest shade |
| `--color-secondary-900` | `#4c1d95` | 76, 29, 149 | Near black |

### 2.3 Semantic Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-success` | `#10b981` | 16, 185, 129 | Success states, valid |
| `--color-success-light` | `#d1fae5` | 209, 250, 229 | Success backgrounds |
| `--color-warning` | `#f59e0b` | 245, 158, 11 | Warnings |
| `--color-warning-light` | `#fef3c7` | 254, 243, 199 | Warning backgrounds |
| `--color-error` | `#ef4444` | 239, 68, 68 | Errors, required |
| `--color-error-light` | `#fee2e2` | 254, 226, 226 | Error backgrounds |
| `--color-info` | `#3b82f6` | 59, 130, 246 | Informational |
| `--color-info-light` | `#dbeafe` | 219, 234, 254 | Info backgrounds |

### 2.4 Neutral Colors (Grays)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-gray-50` | `#fafafa` | 250, 250, 250 | Page backgrounds |
| `--color-gray-100` | `#f4f4f5` | 244, 244, 245 | Card backgrounds |
| `--color-gray-200` | `#e4e4e7` | 228, 228, 231 | Borders |
| `--color-gray-300` | `#d4d4d8` | 212, 212, 216 | Input borders |
| `--color-gray-400` | `#a1a1aa` | 161, 161, 170 | Placeholders |
| `--color-gray-500` | `#71717a` | 113, 113, 122 | Secondary text |
| `--color-gray-600` | `#52525b` | 82, 82, 91 | Body text |
| `--color-gray-700` | `#3f3f46` | 63, 63, 70 | Headings |
| `--color-gray-800` | `#27272a` | 39, 39, 42 | Primary text |
| `--color-gray-900` | `#18181b` | 24, 24, 27 | Darkest text |
| `--color-gray-950` | `#09090b` | 9, 9, 11 | Near-black |

### 2.5 Dark Mode Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-dark-bg` | `#09090b` | 9, 9, 11 | Page background |
| `--color-dark-surface` | `#18181b` | 24, 24, 27 | Card background |
| `--color-dark-surface-elevated` | `#27272a` | 39, 39, 42 | Elevated surfaces |
| `--color-dark-border` | `#3f3f46` | 63, 63, 70 | Borders |
| `--color-dark-text-primary` | `#fafafa` | 250, 250, 250 | Primary text |
| `--color-dark-text-secondary` | `#a1a1aa` | 161, 161, 170 | Secondary text |

---

## 3. Typography

### 3.1 Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-sans` | `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` | Body text, UI elements |
| `--font-display` | `"Plus Jakarta Sans", Inter, system-ui, sans-serif` | Headings, hero text |
| `--font-mono` | `"JetBrains Mono", "Fira Code", Consolas, monospace` | Code snippets, technical content |

### 3.2 Font Sizes (Rem Scale)

| Token | px | rem | Line Height | Usage |
|-------|-----|-----|------------|-------|
| `--text-xs` | 12px | 0.75 | 1 | Labels, captions |
| `--text-sm` | 14px | 0.875 | 1.25 | Secondary text, small UI |
| `--text-base` | 16px | 1 | 1.5 | Body text |
| `--text-lg` | 18px | 1.125 | 1.5 | Large body, small headings |
| `--text-xl` | 20px | 1.25 | 1.375 | Section headings |
| `--text-2xl` | 24px | 1.5 | 1.25 | Page headings |
| `--text-3xl` | 30px | 1.875 | 1.2 | Hero headings |
| `--text-4xl` | 36px | 2.25 | 1.1 | Landing hero |
| `--text-5xl` | 48px | 3 | 1 | Large hero |
| `--text-6xl` | 60px | 3.75 | 1 | Display text |
| `--text-7xl` | 72px | 4.5 | 1 | Hero impact |

### 3.3 Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-thin` | 100 | Decorative |
| `--font-extralight` | 200 | Very light headings |
| `--font-light` | 300 | Light body, emphasis |
| `--font-normal` | 400 | Body text |
| `--font-medium` | 500 | UI elements, labels |
| `--font-semibold` | 600 | Headings, buttons |
| `--font-bold` | 700 | Strong emphasis |
| `--font-extrabold` | 800 | Hero text |
| `--font-black` | 900 | Display |

### 3.4 Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tighter` | -0.05em | Large headings |
| `--tracking-tight` | -0.025em | Headings |
| `--tracking-normal` | 0 | Body |
| `--tracking-wide` | 0.025em | Small caps, labels |
| `--tracking-wider` | 0.05em | All caps |

### 3.5 Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-none` | 1 | Headings |
| `--leading-tight` | 1.25 | Large headings |
| `--leading-snug` | 1.375 | Headings |
| `--leading-normal` | 1.5 | Body text |
| `--leading-relaxed` | 1.625 | Large body |
| `--leading-loose` | 2 | Captions |

---

## 4. Spacing System (8px Base)

| Token | px | rem | Usage |
|-------|-----|-----|-------|
| `--space-0` | 0 | 0 | No spacing |
| `--space-px` | 1px | 0.0625 | Hairline |
| `--space-0.5` | 2px | 0.125 | Tight gaps |
| `--space-1` | 4px | 0.25 | Icon gaps |
| `--space-1.5` | 6px | 0.375 | Tight padding |
| `--space-2` | 8px | 0.5 | Default gaps |
| `--space-2.5` | 10px | 0.625 | Button gap |
| `--space-3` | 12px | 0.75 | Form fields |
| `--space-3.5` | 14px | 0.875 | Small cards |
| `--space-4` | 16px | 1 | Section padding |
| `--space-5` | 20px | 1.25 | Cards |
| `--space-6` | 24px | 1.5 | Large cards |
| `--space-7` | 28px | 1.75 | Sections |
| `--space-8` | 32px | 2 | Page sections |
| `--space-9` | 36px | 2.25 | Hero sections |
| `--space-10` | 40px | 2.5 | Large sections |
| `--space-11` | 44px | 2.75 | Features |
| `--space-12` | 48px | 3 | Page margins |
| `--space-14` | 56px | 3.5 | Hero |
| `--space-16` | 64px | 4 | Major sections |
| `--space-20` | 80px | 5 | Page breaks |
| `--space-24` | 96px | 6 | Full sections |
| `--space-28` | 112px | 7 | Split sections |
| `--space-32` | 128px | 8 | Landing hero |

---

## 5. Border Radius

### 5.1 Sizing

| Token | px | rem | Usage |
|-------|-----|-----|-------|
| `--radius-none` | 0 | 0 | No radius |
| `--radius-sm` | 2px | 0.125 | Tags, badges |
| `--radius-default` | 4px | 0.25 | Inputs |
| `--radius-md` | 6px | 0.375 | Buttons |
| `--radius-lg` | 8px | 0.5 | Cards |
| `--radius-xl` | 12px | 0.75 | Modals |
| `--radius-2xl` | 16px | 1 | Large cards |
| `--radius-3xl` | 24px | 1.5 | Hero cards |
| `--radius-full` | 9999px | 9999px | Pills, circles |

### 5.2 Shadows with Radius

| Token | Radius | Usage |
|-------|--------|-------|
| `--radius-sm` | 2px | Inline buttons |
| `--radius-md` | 6px | Default buttons |
| `--radius-lg` | 8px | Cards |
| `--radius-xl` | 12px | Modals |

---

## 6. Shadows

### 6.1 Elevation Shadows

```css
/* Subtle - inline elements */
--shadow-sm:
  0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Cards, buttons */
--shadow-md:
  0 1px 3px 0 rgb(0 0 0 / 0.1),
  0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Elevated cards */
--shadow-lg:
  0 4px 6px -1px rgb(0 0 0 / 0.1),
  0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Modals, dropdowns */
--shadow-xl:
  0 10px 15px -3px rgb(0 0 0 / 0.1),
  0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Hover cards */
--shadow-2xl:
  0 20px 25px -5px rgb(0 0 0 / 0.1),
  0 8px 10px -6px rgb(0 0 0 / 0.1);

/* Inner shadow */
--shadow-inner:
  0 2px 4px 0 rgb(0 0 0 / 0.05);

/* Focus rings */
--shadow-focus:
  0 0 0 3px rgb(14 165 233 / 0.4);

/* Primary button glow */
--shadow-primary:
  0 0 0 3px rgb(14 165 233 / 0.5),
  0 4px 6px -1px rgb(14 165 233 / 0.3);
```

### 6.2 Dark Mode Shadows

```css
--shadow-dark-sm:
  0 1px 2px 0 rgb(0 0 0 / 0.3);

--shadow-dark-md:
  0 1px 3px 0 rgb(0 0 0 / 0.4),
  0 1px 2px -1px rgb(0 0 0 / 0.3);

--shadow-dark-lg:
  0 4px 6px -1px rgb(0 0 0 / 0.4),
  0 2px 4px -2px rgb(0 0 0 / 0.3);
```

---

## 7. Components

### 7.1 Buttons

#### Primary Button
```css
/* Default */
background: var(--color-primary-600);
color: white;
border-radius: var(--radius-md);
padding: var(--space-2) var(--space-4);
font-weight: var(--font-medium);
transition: all var(--duration-fast) var(--ease-in-out);

/* Hover */
background: var(--color-primary-700);
transform: translateY(-1px);
box-shadow: var(--shadow-lg);

/* Focus */
box-shadow: var(--shadow-focus);

/* Active */
background: var(--color-primary-800);
transform: translateY(0);
```

#### Secondary Button
```css
background: var(--color-gray-100);
color: var(--color-gray-700);
border: 1px solid var(--color-gray-200);

/* Hover */
background: var(--color-gray-200);
```

#### Outline Button
```css
background: transparent;
color: var(--color-primary-600);
border: 1px solid var(--color-primary-600);

/* Hover */
background: var(--color-primary-50);
```

#### Ghost Button
```css
background: transparent;
color: var(--color-gray-600);

/* Hover */
background: var(--color-gray-100);
```

#### Danger Button
```css
background: var(--color-error);
color: white;

/* Hover */
background: #dc2626;
```

#### Button Sizes

| Size | Padding | Font Size | Height |
|------|---------|----------|--------|
| `btn-xs` | px-2 py-1 | text-xs | 24px |
| `btn-sm` | px-3 py-1.5 | text-sm | 32px |
| `btn-base` | px-4 py-2 | text-base | 40px |
| `btn-lg` | px-5 py-2.5 | text-lg | 48px |
| `btn-xl` | px-6 py-3 | text-xl | 56px |

### 7.2 Form Inputs

#### Text Input
```css
border: 1px solid var(--color-gray-300);
border-radius: var(--radius-lg);
padding: var(--space-3) var(--space-4);
font-size: var(--text-base);
color: var(--color-gray-800);
background: white;
transition: all var(--duration-fast);

/* Placeholder */
color: var(--color-gray-400);

/* Focus */
border-color: var(--color-primary-500);
box-shadow: var(--shadow-focus);

/* Error */
border-color: var(--color-error);
color: var(--color-error);
```

#### Textarea
```css
/* Same as text input, but min-height */
min-height: 100px;
resize: vertical;
```

#### Select
```css
/* Same as text input + custom arrow */
background-image: url("data:image/svg+xml...");
background-repeat: no-repeat;
background-position: right 12px center;
```

#### Checkbox / Radio
```css
width: 18px;
height: 18px;
border: 2px solid var(--color-gray-300);
border-radius: var(--radius-sm);
accent-color: var(--color-primary-600);
```

### 7.3 Cards

#### Base Card
```css
background: white;
border: 1px solid var(--color-gray-200);
border-radius: var(--radius-xl);
padding: var(--space-6);
box-shadow: var(--shadow-sm);
transition: all var(--duration-normal);
```

#### Interactive Card
```css
/* Hover */
border-color: var(--color-primary-300);
box-shadow: var(--shadow-lg);
transform: translateY(-2px);
```

### 7.4 Modals

```css
/* Overlay */
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(4px);

/* Dialog */
background: white;
border-radius: var(--radius-2xl);
max-width: 480px;
box-shadow: var(--shadow-2xl);
```

### 7.5 Badges/Tags

```css
/* Base */
display: inline-flex;
align-items: center;
padding: var(--space-1) var(--space-2);
font-size: var(--text-xs);
font-weight: var(--font-medium);
border-radius: var(--radius-full);
```

---

## 8. Animations & Transitions

### 8.1 Timing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### 8.2 Durations

```css
--duration-fast: 100ms;
--duration-fastest: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
--duration-slowest: 750ms;
```

### 8.3 Keyframe Animations

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```
Usage: Page transitions, modal enter

#### Fade Out
```css
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
```
Usage: Modal exit

#### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
Usage: Card stagger, list items

#### Slide Down
```css
@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
```

#### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

#### Shake
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}
```
Usage: Validation errors

#### Spin
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
Usage: Loading spinners

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```
Usage: Hero elements

### 8.4 Page Transitions

```css
/* Enter */
animation:
  fadeIn var(--duration-slow) var(--ease-out) forwards,
  slideUp var(--duration-slow) var(--ease-out) forwards;

/* Exit */
animation: fadeOut var(--duration-fast) var(--ease-in) forwards;
```

---

## 9. Responsive Breakpoints

### 9.1 Breakpoint Values

| Name | Min Width | Max Width | Device |
|------|-----------|-----------|--------|
| `xs` | 0 | 639px | Phones (legacy) |
| `sm` | 640px | 767px | Large phones |
| `md` | 768px | 1023px | Tablets |
| `lg` | 1024px | 1279px | Laptops |
| `xl` | 1280px | 1535px | Desktops |
| `2xl` | 1536px | - | Large screens |
| `3xl` | 1920px | - | Ultra-wide |

### 9.2 Container Max Widths

| Container | Max Width | Padding |
|-----------|---------|---------|
| `sm` | 640px | var(--space-4) |
| `md` | 768px | var(--space-4) |
| `lg` | 1024px | var(--space-6) |
| `xl` | 1280px | var(--space-6) |
| `2xl` | 1536px | var(--space-8) |

---

## 10. Dark Mode

### 10.1 Implementation

- Use Tailwind v4's class-based dark mode
- Toggle by adding/removing `class="dark"` on `<html>` element
- Use CSS custom properties for theming

### 10.2 Color Mapping

| Light Mode | Dark Mode | Usage |
|------------|-----------|-------|
| `gray-50` | `gray-950` | Background |
| `gray-100` | `gray-900` | Card background |
| `gray-200` | `gray-800` | Borders |
| `gray-300` | `gray-700` | Input borders |
| `gray-400` | `gray-500` | Placeholders |
| `gray-500` | `gray-400` | Secondary text |
| `gray-600` | `gray-300` | Body text |
| `gray-700` | `gray-200` | Headings |
| `gray-800` | `gray-100` | Primary headings |
| `gray-900` | `gray-50` | Darkest text |

### 10.3 Background Pattern

```css
background:
  radial-gradient(circle at 50% 0%, var(--color-primary-500 / 0.08) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, var(--color-secondary-500 / 0.08) 0%, transparent 50%),
  var(--color-dark-bg);
```

---

## 11. Accessibility

### 11.1 Focus States

```css
/* Always visible focus */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### 11.2 Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### 11.3 Minimum Touch Targets

- Minimum: 44px × 44px (WCAG)
- Recommended: 48px × 48px

### 11.4 Color Contrast Ratios

| Level | Ratio | Usage |
|-------|-------|-------|
| AAA | 7:1 | Body text, headings |
| AA | 4.5:1 | Large text, UI |
| AA Large | 3:1 | Buttons, icons |

---

## 12. Utility Classes (Quick Reference)

### 12.1 Common Classes

```css
/* Layout */
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
.block { display: block; }
.inline { display: inline; }
.inline-flex { display: inline-flex; }

/* Positioning */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Sizing */
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.max-w-screen { max-width: 100vw; }

/* Spacing */
.p-0 { padding: 0; }
.p-4 { padding: var(--space-4); }
.m-0 { margin: 0; }
.m-auto { margin: auto; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }

/* Typography */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.uppercase { text-transform: uppercase; }
.capitalize { text-transform: capitalize; }

/* Effects */
.transition { transition: all var(--duration-normal) var(--ease-in-out); }
.shadow { box-shadow: var(--shadow-md); }
.rounded { border-radius: var(--radius-md); }
.rounded-full { border-radius: var(--radius-full); }

/* State */
.hover\:opacity-80:hover { opacity: 0.8; }
.focus\:outline:focus { outline: 2px solid var(--color-primary-500); }
.disabled\:opacity-50:disabled { opacity: 0.5; }
```

### 12.2 Z-Index Scale

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## Appendix A: CSS Variables Export

```css
:root {
  /* Colors - Primary */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-200: #bae6fd;
  --color-primary-300: #7dd3fc;
  --color-primary-400: #38bdf8;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-primary-800: #075985;
  --color-primary-900: #0c4a6e;
  --color-primary-950: #082f49;

  /* Colors - Secondary */
  --color-secondary-500: #8b5cf6;
  --color-secondary-600: #7c3aed;

  /* Colors - Semantic */
  --color-success: #10b981;
  --color-success-light: #d1fae5;
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  --color-info: #3b82f6;
  --color-info-light: #dbeafe;

  /* Colors - Grays */
  --color-gray-50: #fafafa;
  --color-gray-100: #f4f4f5;
  --color-gray-200: #e4e4e7;
  --color-gray-300: #d4d4d8;
  --color-gray-400: #a1a1aa;
  --color-gray-500: #71717a;
  --color-gray-600: #52525b;
  --color-gray-700: #3f3f46;
  --color-gray-800: #27272a;
  --color-gray-900: #18181b;
  --color-gray-950: #09090b;

  /* Fonts */
  --font-sans: Inter, system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow Focus: 0 0 0 3px rgb(14 165 233 / 0.4);

  /* Transitions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
}
```

---

> **Version**: 1.0.0
> **Last Updated**: 2026-04-18
> **Project**: CVCraft AI
> **Maintainer**: Development Team