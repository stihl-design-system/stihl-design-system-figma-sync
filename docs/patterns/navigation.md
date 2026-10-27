---
id: navigation
title: Navigation
category: pattern
importNames:
  - DSHeader
  - DSMegaMenu
  - DSTopBar
package: "@stihl-design-system/components"
keywords:
  - navigation
  - header
  - mega menu
  - dropdown menu
  - top bar
  - mobile navigation
figmaFile: Web Pattern Library
figmaProject: 03. Platform Libraries
figmaFileKey: Ie2r0R9QwjEc7O3nrFbXhV
figmaNodeId: 5381:18
figmaVersion: "2370898144407684143"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-06-30T14:44:46Z
syncedAt: 2026-10-27T13:40:17.138Z
sourceUrl: https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=5381-18
---

# Navigation

## Navigation: Introduction

**Overview**

The navigation system offers clear, consistent pathways for users to explore content across the product ecosystem. It includes key patterns like the main header, sidebar navigation, and menus, designed for use across all products, platforms, and devices. These components support intuitive wayfinding, maintain content hierarchy, and uphold accessibility.

**Key Features**

- **Flexible Layouts** The header supports multiple configurations for branding, navigation, search, and user actions — ideal for both simple and complex interfaces.
- **Platform Consistency** Reusable across all screen sizes and products, with consistent placement of global nav, utilities, and responsive behaviors.
- **Modular Structure** Built from interchangeable components — Top Bar, Navigation Bar, Utility Menu, and contextual actions — customizable for any product or layout.
- **Responsive Design** Elements adapt across breakpoints. Navigation collapses into dropdowns or mobile menus to stay usable on any screen.
- **Branding Support** Flexible zones allow for logo placement and scaling to suit various layout needs.

**The following elements are documented in detail:**

- [Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)
   - [Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)
   - [Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)
   - [Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)
- [Mega Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-87264)
- [Dropdown Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-85690)
- [Sidebar Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-79899)
- [Navigation Elements](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6924-87853)
   - [Action Items](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)
   - [Text Component](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-74332)
   - [Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

### Navigation Structural Patterns

Depending on the product context and content complexity, the navigation system can be composed using different structural patterns. Each pattern consists of modular components and is tailored to specific use cases. The following presets represent recommended combinations:

**Mega Navigation**

**Recommended for:** Large E-Commerce and Brand platforms with deep page hierarchies. **Must have:** Top Bar, Nav Bar, Mega Menu **Optional:** Utility Menu

![Navigation Structural Patterns](navigation/navigation-structural-patterns-6830-53517.png)

**Dropdown Navigation**

**Recommended for:** Smaller brand and marketing platforms or portals with moderate content depth. **Must have:** Top Bar, Nav Bar, Dropdown Menu **Optional:** Utility Menu

![Navigation Structural Patterns](navigation/navigation-structural-patterns-6830-53546.png)

**Sidebar Navigation**

**Recommended for:** Portals, dashboards, or tools with many sections. **Must have:** Top Bar, Sidebar **Optional:** Nav Bar, Utility Menu

![Navigation Structural Patterns](navigation/navigation-structural-patterns-6830-53575.png)

**Reduced Navigation**

**Recommended for:** Focused flows like checkout, onboarding, or standalone tools. **Must have:** Top Bar

![Navigation Structural Patterns](navigation/navigation-structural-patterns-6830-53487.png)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Mega Navigation: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**E-Shop**

The navigation is optimized for browsing and product discovery. It provides access to categories, search, cart, and user account.

![Mega Navigation: Examples](navigation/mega-navigation-examples-6558-29974.png)

![Mega Navigation: Examples](navigation/mega-navigation-examples-6833-52880.png)

![Mega Navigation: Examples](navigation/mega-navigation-examples-6833-53286.png)

## Dropdown Navigation: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**Corporate**

A content-driven structure highlights brand identity, services, press, and company information. The dropdown menu supports moderate content depth without overwhelming users.

![Dropdown Navigation: Examples](navigation/dropdown-navigation-examples-6833-54416.png)

![Dropdown Navigation: Examples](navigation/dropdown-navigation-examples-6833-55224.png)

![Dropdown Navigation: Examples](navigation/dropdown-navigation-examples-6833-54513.png)

## Sidebar Navigation: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**STIHL Service Communication (SSC)**

Internal tool for quickly finding spare parts and relevant information for STIHL products, primarily used by official dealers and customer service teams.

The sidebar provides fast access to categories and search functions, supporting a high-frequency workflow.

![Sidebar Navigation: Examples](navigation/sidebar-navigation-examples-7133-35827.png)

![Sidebar Navigation: Examples](navigation/sidebar-navigation-examples-7133-36200.png)

**Connected Portal**

A logged-in user portal designed to navigate between tools and manage STIHL products. The sidebar supports quick orientation and task switching.

![Sidebar Navigation: Examples](navigation/sidebar-navigation-examples-6833-55606.png)

![Sidebar Navigation: Examples](navigation/sidebar-navigation-examples-6833-55655.png)

## Reduced Navigation: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**Checkout**

A minimal, linear flow that guides users step-by-step through the purchase process. Distractions are removed to reduce friction and focus attention on the task.

![Reduced Navigation: Examples](navigation/reduced-navigation-examples-6838-60728.png)

![Reduced Navigation: Examples](navigation/reduced-navigation-examples-6838-61101.png)

## Header: Overview

**Recommended for:** all sites and platforms **Must have:** Top Bar **Optional:** Nav Bar, Utility Menu

The Header is the primary navigation pattern located at the top of the page, combining brand identity, core site navigation, and essential user tools.

It includes links to key sections — like **Home**, **Products**, or **Services** — and actions such as **Login** and **Language Selector**, ensuring a consistent and intuitive experience across all products and platforms.

![Header: Overview](navigation/header-overview-6583-79294.png)

### Header Variants

#### Top Bar – Only The basic version of the Header.

In addition to displaying **logos** and **platform names**, the Top Bar includes **user tools** and **system-level actions** that enhance the overall user experience without being part of the main site navigation. Common examples include: Search, Cart, Wishlist, Language Selector, and User Profile. [Go to Top bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

![Top Bar – Only The basic version of the Header.](navigation/top-bar-only-the-basic-version-of-the-header-6576-37764.png)

#### Top Bar + Nav Bar Adds a primary navigation layer to the Top Bar.

The Nav Bar represents the **primary level of navigation** and defines the core structure of the site or application. It includes links to key sections — such as Products, Services, or Blog — guiding users through the main content and helping them understand the overall offering. [Go to Nav Bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

![Top Bar + Nav Bar Adds a primary navigation layer to the Top Bar.](navigation/top-bar-nav-bar-adds-a-primary-navigation-layer-to-the-top-b-6583-79722.png)

#### Top Bar + Nav Bar (Optional) + Utility Menu A fully featured header, enhanced with a Utility Menu.

The Utility Menu is a popover component that provides quick access to **essential functions**, **user tools**, and **system-level actions** — such as login, language selection, and other key options. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar + Nav Bar (Optional) + Utility Menu A fully featured header, enhanced with a Utility Menu.](navigation/top-bar-nav-bar-optional-utility-menu-a-fully-featured-heade-6583-79430.png)

#### Top Bar – reduced Minimal header for focused user flows.

The reduced variant of the Top Bar is typically used in **focused flows**, such as the checkout process, where minimizing navigation elements helps reduce distractions. [Go to Top bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

![Top Bar – reduced Minimal header for focused user flows.](navigation/top-bar-reduced-minimal-header-for-focused-user-flows-6583-79419.png)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Header: Pattern

> The Header is provided as a frame that includes the two components: Top Bar and Nav Bar. This structure allows for easy customization and flexibility when adapting or modifying the components within the header container.

![Header: Pattern](navigation/header-pattern-6240-50805.png)

### Further guidelines

[Storybook Documentation](https://feat-ds-971--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/templates-header--documentation)

### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Header: Top Bar

Overview:

- The **Top Bar** is the uppermost section of the header and can be used alongside a Nav Bar or Sidebar.
- It is always required, as it houses the **logo and company or platform name**, ensuring **consistent branding**.
- Beyond branding, the Top Bar contains **user tools and system-level actions** that enhance the overall experience but are not part of the main site navigation.
- **Common elements include:** Search, Cart, Wishlist, Language Selector, and User Profile.

![Header: Top Bar](navigation/header-top-bar-5381-2193.png)

### Further guidelines

[Storybook Documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-header--documentation)

### Related elements

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Sidebar Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-79899)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Top Bar: Formatting and Behaviour

### Anatomy

The Top Bar is a flexible layout component made up of up to three configurable areas. These areas can be used in a two- or three-area layout, depending on the product’s needs.

**Areas Overview**

The Top Bar consists of the following layout areas, which build on each other in order:

**a. Brand Area**

**b. Primary Area**

**c. Secondary Area (optional)**

![Anatomy](navigation/anatomy-6576-39330.png)

### Area Configuration & Content

When using the Top Bar the user can chose between using one or two areas besides the brand area. There are two layout ways to use these areas:

#### Two-Area Layout

**Includes**:

Brand Area

Primary Area

**a. Brand Area** Positioned on the left and always visible. This area is reserved for brand elements such as the logo and optional extensions (e.g., platform name, tagline, additional picture or anniversary logo). [→ See the Brand Area section for details.](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-53815)

**b. Primary Area** Positioned to the right of the Brand Area. It can contain:

1. The Top Bar Nav component (Action items or an Avatar component)
1. A search bar
1. Icon-text combinations

Alignment and spacing may vary based on the elements included.

[→ See the Primary Area section for details.](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-55805)

![Two-Area Layout](navigation/two-area-layout-7624-39982.png)

#### Three-Area Layout

**Includes**:

Brand Area

Primary Area

Secondary Area

**a. Brand Area** Same as in the two-area layout: always visible and positioned on the left for brand elements. [→ See the Brand Area section for details.](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-53815)

**b. Primary Area** When all three areas are used, the Primary Area is typically used for:

1. A Search bar

**c. Secondary Area** Positioned alongside the Brand Area and Primary Area. It is typically used for:

1. The Top Bar Nav component (Action items or an Avatar component)

[→ See the Primary and Secondary Area section for details.](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-55805)

![Three-Area Layout](navigation/three-area-layout-7624-41127.png)

### Responsive Behaviour

The Top Bar adapts fluidly across viewports. Its behavior depends on the number of active areas (Brand, Primary, Secondary) and the presence of brand add-ons.

#### Top Bar responsive behavior – Two-area layout

**Includes**:

Brand Area

Primary Area

1. **Default**
   - **All breakpoints:** Brand Area and Primary Area are placed side by side in a single row
1. **With Brand Add-On**
   - **Breakpoints xl, l and m:** Brand Area and Primary Area are placed side by side in a single row
   - **Breakpoint** **s**: Brand Area and Primary Area are stacked vertically for clarity and space management

![Top Bar responsive behavior – Two-area layout](navigation/top-bar-responsive-behavior-two-area-layout-6576-39553.png)

#### Top Bar responsive behavior – Three-area layout

**Includes**:

Brand Area

Primary Area

Secondary Area

1. **Default**
   - **Breakpoints xl and l:** All areas are placed inline, in a single row
   - **Breakpoints m and s:** The Primary Area (typically containing a search bar) moves below the Brand Area and Secondary Area. The Brand Area remains left-aligned, the Secondary Area stays top-right
1. **With Brand Add-On**
   - **Breakpoints xl and l:** All areas are placed inline, in a single row
   - **Breakpoint** **m**: The Brand Area and Secondary Area appear side by side, while the Primary Area shifts below and spans the full width.
   - **Breakpoint** **s**: The Brand Area spans the full width. The Primary Area and Secondary Area are placed side by side underneath the Brand Area

![Top Bar responsive behavior – Three-area layout](navigation/top-bar-responsive-behavior-three-area-layout-6576-39460.png)

#### Combinations and flexibility

The responsive behaviors described above are **recommended best practices** and have been tested for usability and performance.

However, specific use cases may require different responsive approaches. Its components and responsive logic can be customized per breakpoint:

For example, if the Search function should be prominent on desktop but takes a secondary role on tablet and mobile, it can be displayed as a full **Search Field** on desktop and as an **Action Item** on smaller screens.

![Combinations and flexibility](navigation/combinations-and-flexibility-6576-39628.png)

### Grid Variants

The Top Bar can be configured using two layout variants:

**1. Main**

- **Content width:** Aligned with the main content area
- **Use case:** Ideal for e-commerce, brand, or marketing pages
- **Effect:** More white space left and right creates a clean and open appearance
- **Reference:** [Grid Guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=1-857&t=s1tr0PVToE1CuUp6-4)

**2. Full**

- **Content width:** Spans the full screen width
- **Use case:** Suitable for dashboards, internal tools, or content-dense interfaces
- **Effect:** Maximizes horizontal space; often used together with a sidebar
- **Reference:** [Grid Guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=1-857&t=s1tr0PVToE1CuUp6-4)

**a. Desktop b. Mobile** At **breakpoint** **m** and **s**, the Top Bar automatically adjusts to span the full width of the screen.

![Grid Variants](navigation/grid-variants-6885-67932.png)

#### Do not modify the breakpoint properties of nested components.

![Do not modify the breakpoint properties of nested components.](navigation/do-not-modify-the-breakpoint-properties-of-nested-components-13494-38411.png)

#### Do modify the overall breakpoint property that’s affecting all nested components.

![Do modify the overall breakpoint property that’s affecting all nested components.](navigation/do-modify-the-overall-breakpoint-property-that-s-affecting-a-13528-38623.png)

### Scroll behaviour

The Header adapts dynamically to the user's scroll direction to optimize visibility and usability:

1. **Default (Top of Page):** Top Bar and Nav Bar are visible.
1. **On Scroll Down:** Nav Bar hides to maximize content visibility. The Top Bar remains visible for persistent access to tools like search, cart, or profile.
1. **On Scroll Up:** Nav Bar reappears for easy access. The Top Bar is still visible.
1. **Back at Top:** Both Top Bar and Nav Bar are fully visible again.

#### Motion

**Animation type:** move up/down **Duration:** 400ms **Easing:** motion-functional-ease-out

![Motion](navigation/motion-7624-39905.png)

## Top Bar: Brand Area

### Elements

The Brand Area consists of two interchangeable elements, offering maximum flexibility to accommodate a wide range of use cases:

1. **Logo** The Logo component ([see Core Component Library](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=9050-2)) is used in this instance. It supports both the primary STIHL logo and official digital product logos (e.g., STIHL Connected, MySTIHL, etc.). If your specific logo is not yet available, use the main STIHL logo as a temporary solution and contact us [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=A0kNEkSswKSae9BE-4) to request a variant.
1. **Brand Add-On (optional)** The Brand Add-On provides an additional slot that can be combined with the logo. Available variations include:
   1. **Title – Single** Used for digital product or platform names. (e.g. "STIHL Connected" - see example in use case section below)
   1. **Title – Double** Intended for authorized dealers or official importers. (See example in use case section below)
   1. **Placeholder** A flexible slot for use cases not covered above — such as anniversary badges (e.g., 100 Years of STIHL) or localized components like the U.S. shop dealer information that must remain visible in the top bar. (See examples in use case section below)

> **Note:** To ensure proper scaling in the Figma component, a Logo Helper component has been included (Figma only).

![Elements](navigation/elements-6576-39360.png)

### Logo

#### Don’t modify the ‘logo’ element directly.

Otherwise it may cause unexpected behaviour.

![Don’t modify the ‘logo’ element directly.](navigation/don-t-modify-the-logo-element-directly-13268-46392.png)

#### Do modify the ‘logo’ element through the Top Bar component property panel.

![Do modify the ‘logo’ element through the Top Bar component property panel.](navigation/do-modify-the-logo-element-through-the-top-bar-component-pro-13494-38914.png)

### Brand Add-On

**Brand Add-On use cases**

On the right are examples of how the Brand Add-On can be used.

![Brand Add-On](navigation/brand-add-on-6583-53824.png)

### Brand Add-On max length

To ensure proper spacing and visual consistency, the following character limits apply to Brand Add-On titles:

1. **Title Single:** Maximum 24 characters
1. **Title Double:** First line: Maximum 14 characters Second line: Maximum 18 characters

![Brand Add-On max length](navigation/brand-add-on-max-length-6576-39660.png)

### Link Behavior

Both the logo and the brand add-on can be linked. While it’s technically possible to assign different link destinations to each element, it is strongly recommended to use the same destination for both. Users generally perceive the logo and add-on as a unified element and expect a consistent linking behavior.

The most common link destination is the product’s main homepage.

![Link Behavior](navigation/link-behavior-7673-39283.png)

### Additional Logo usage

To add another logo, replace “.placeholder: generic” by using Swap Instance.

Ensure the additional logo remains smaller than the main logo. To obtain a visual balance the placeholder component includes a built-in safety padding (xl–m: 4px, s: 2px).

![Additional Logo usage](navigation/additional-logo-usage-13470-37471.png)

## Top Bar: Primary and Secondary (Optional) Area

### Elements/ Building Blocks

#### Search

The Top Bar uses the Input Search Component from the [Core Component Library](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?m=auto&node-id=2141-6712&t=SHmk2ghTC37Ex5QG-1), with a localized visual override: a custom corner radius differentiates it from in-content search fields. It inherits all states and behaviors from the base component. An example of the override is provided in the code to illustrate the styling customization.

![Search](navigation/search-6576-39375.png)

#### Icon with Text (for Reduced Navigation)

This element can be placed inside the Primary Area of the Top Bar.

**Use Case:** Commonly used in specific flows like the checkout process, where most navigation elements are hidden to reduce distractions — only the logo and this icon with text combination remain visible.

![Icon with Text (for Reduced Navigation)](navigation/icon-with-text-for-reduced-navigation-6576-39393.png)

#### Top Bar Nav

The Top Bar Nav can be placed in the Primary or Secondary Area of the Top Bar, depending on layout and content.

It consists of a group of **Action Items (1), Avatar (2), and Divider (3).**

![Top Bar Nav](navigation/top-bar-nav-6885-68867.png)

1. **Action Items** An Action Item can be either a button or a link, depending on its function — whether it navigates to a page or triggers a Utility Menu. They are mainly used for user tools and system-level actions such as Login, Cart, Wishlist and Language Selector. Each item includes the following elements:
   1. **Icon**
   1. **Label**
   1. **Chevron (button only)**: Displayed when the item opens a dropdown menu.
   1. **Number Indicator (optional)**: Used to show specific counts, such as the number of items in a shopping cart.
   1. **Minimized Indicator (optional):** A subtle visual cue indicating an update or notification without showing an exact number —commonly used for unread messages or new alerts. In-depths documentation for Action Items can be found [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372).

![Top Bar Nav](navigation/top-bar-nav-6885-69051.png)

1. **Avatar** The Avatar is displayed once the user is logged into their account. The component supports two variations:
   1. **Initials:** This is the default fallback when no profile image is available. The generation logic for user initials is not handled within the design system. It is the responsibility of the product development team.
   1. **Image:** Displayed when image upload is supported and the user has uploaded a profile picture.

![Top Bar Nav](navigation/top-bar-nav-6885-69313.png)

1. **Divider** The Divider visually separates items within the Top Bar Navigation:
   - **Left-side items (a):** Variable, product-specific
   - **Right-side items (b):** Core items such as STIHL World and Login/Avatar that appear consistently across platforms

![Top Bar Nav](navigation/top-bar-nav-6885-69223.png)

### Content & Assets

#### Max. length Action Item label

The label for an Action Item should be no longer than **20 characters**.

To ensure clarity and usability, it’s recommended to collaborate with a UX writer to craft concise, meaningful labels that clearly communicate the item’s purpose. Labels should be brief and noun-based, avoiding action-oriented phrases or call-to-action language.

![Max. length Action Item label](navigation/max-length-action-item-label-6576-39672.png)

#### Action Item visibility

The number of visible Action Items depends on:

- Breakpoint size (xl, l, m, s)
- Layout type (e.g., 2 vs. 3 areas)
- Use of Brand Add-On

**For breakpoint from xl to l:**

- display **max. 6 Action Items** at a time to reduce cognitive load

**For breakpoint m and s:**

- Low-priority items should be moved to the Mobile Menu
- Each product team should define which items are kept and which are moved

![Action Item visibility](navigation/action-item-visibility-6576-39683.png)

### Examples and Use Cases

#### Search behaviour

On click, the Search Field opens a **combobox** that displays suggestions based on user input, with the option to **group the results into categories.**

The same behaviour applies to smaller screens.

**Please note:** This behaviour is not yet available in code.

![Search behaviour](navigation/search-behaviour-6576-48656.png)

#### Login

The “**Login” Action Item** **(1)** opens a **Utility Menu (2)** when clicked, containing several links that all direct the user to the **Login / Create Account page** **(3)**.

Once the user has successfully logged in or created an account, the Action Item in the Top Bar is replaced by the **Avatar** **component** **(4)**.

Clicking the **Avatar (5)** opens a different **Utility Menu (6)**, displaying the user’s name, profile picture, links to sections within the profile, and a Sign Out button.

**Please note:** This Avatar section within the Utility Menu is not yet available as a component. It will be provided in a future release.

On **breakpoint s** and **m**, Utility Menus are not used. Instead:

- If the user is **not logged in**, tapping the Action Item navigates directly to the **Login / Create Account** page.
- If the user is **logged in**, it navigates directly to the **User Profile** page.

![Login](navigation/login-6583-58194.png)

#### Language selector

The **“Language” Action Item (1)** opens a **Utility Menu (2)** when clicked, containing a search field and a list of language options.

Once a language is selected, the chosen option is displayed as the **label** within the **Action Item (3)**.

**Please note:** This is a temporary solution that will be reviewed and optimized in future sprints.

![Language selector](navigation/language-selector-6583-57826.png)

## Top Bar: Accessibility

### Focus Order

1. **Skip Link** Provides a quick way to bypass header content for keyboard users. Appears in the top-left corner when using keyboard navigation.
1. **Top Bar**
   1. **Logo** Should be focusable only if it functions as a link (typically to the homepage).
   1. **Primary Area** Focus moves from left to right if multiple elements are present.
   1. **Secondary Area** Focus moves from left to right if multiple elements are present.

![Focus Order](navigation/focus-order-7434-43960.png)

### Keyboard Navigation

Users can navigate through focusable elements in the Top Bar using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to open a Utility Menu by pressing **“Space”** or **“Enter”**
- to close or exit a Utility Menu by pressing **“Esc”**
- to navigate to a page by pressing **“Enter”**

![Keyboard Navigation](navigation/keyboard-navigation-7434-43998.png)

## Building elements

![Building elements](navigation/building-elements-7366-46192.png)

![Building elements](navigation/building-elements-7366-46542.png)

![Building elements](navigation/building-elements-7366-46669.png)

![Building elements](navigation/building-elements-7366-46667.png)

![Building elements](navigation/building-elements-7366-46677.png)

## Header: Nav Bar

Overview:

- Represents the **primary level of navigation** and defines the core structure of the site or platform
- Includes **links to key sections** — such as Products, Services, or Blog — guiding users through the main content and helping them understand the overall offering
- For **breakpoint s** and **m** it moves inside the Mobile Menu
- **Optional usage:** The Nav Bar is an optional component within the Header layout. It is recommended when the platform or site has multiple core sections that users need to access frequently or in a structured way — such as Products, Services, or Resources. In simplified or focused flows (e.g., onboarding, checkout, standalone tools), the Nav Bar may be omitted to reduce distractions and streamline the interface.

> **Development Status:** This component currently exists only in Figma. In development, it is based on the Scroller component.

![Header: Nav Bar](navigation/header-nav-bar-6263-49220.png)

![Header: Nav Bar](navigation/header-nav-bar-6263-49227.png)

### Further guidelines

[Storybook Documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-scroller--documentation)

### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Mega Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-87264)

[Dropdown Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-85690)

[Button Nav](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=34553-28432&t=3sTzEA7VPrbAfAzB-4)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Nav Bar: Formatting and Construction

### Anatomy

#### Elements

The Nav Bar is a key element in the header pattern and is composed of the following components:

1. **Nav Bar Group** Organizes navigation items and includes a button for overflow handling when space is limited.
1. **Button Nav Variant** A button style specifically designed for use within the Nav Bar. More [here](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=34553-28432&t=1rKqAUVYwkeozHmM-4).
1. **Icon Button (Conditional )** An icon-only button, placed on the left or right side. It includes chevrons to indicate additional hidden items due to overflow.

![Elements](navigation/elements-6583-60085.png)

### Grid Variants

The Nav Bar can be configured using two layout variants:

**1. Main**

- **Content width:** Aligned with the main content area
- **Use case:** Ideal for e-commerce, brand, or marketing pages
- **Effect:** More white space left and right creates a clean and open appearance
- **Reference:** [Grid Guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=1-857&t=s1tr0PVToE1CuUp6-4)

**2. Full**

- **Content width:** Spans the full screen width
- **Use case:** Suitable for dashboards, internal tools, or content-dense interfaces
- **Effect:** Maximizes horizontal space; often used together with a sidebar
- **Reference:** [Grid Guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=1-857&t=s1tr0PVToE1CuUp6-4)

**a. Desktop b. Mobile** At **breakpoint** **m** and **s**, the Nav Bar content is no longer displayed directly and is instead accessible through a **Mobile Menu**.

![Grid Variants](navigation/grid-variants-6885-70468.png)

## Nav Bar: Content and Assets

### Amount of items in the Nav Bar

While the Nav Bar is flexible and supports a dynamic number of items, we recommend adhering to the following best practices to ensure clarity, usability, and accessibility:

- **Use clear and concise labels.** Each item should clearly communicate its destination or function. Avoid jargon or overly technical terms unless appropriate for your audience.
- **Group related items logically.** For large menus, consider Dropdown Menus or Mega Menu to organize related links.
- **Prioritize key actions.** Place the most important or frequently used links first.
- **Avoid overwhelming the user.** Too many navigation choices can reduce usability and increase cognitive load. Focus on what’s most relevant to your users.

![Amount of items in the Nav Bar](navigation/amount-of-items-in-the-nav-bar-6583-60167.png)

### Maximum character in the label

For navigation links and menu items, aim to keep label text **between 20 and 25 characters** whenever possible. Shorter labels help maintain a clean layout and ensure readability across devices. However, longer labels may be necessary in specific cases, such as names or when supporting translations into other languages. Always make sure labels fit well within the available space and remain clear to users in all supported languages.

![Maximum character in the label](navigation/maximum-character-in-the-label-6583-60172.png)

### Overflow

When the number of navigation items exceeds the available horizontal space, **horizontal overflow** occurs.

In this case, **navigation buttons (left and/or right)** appear, enabling users to scroll through the hidden items — either by clicking the buttons or using horizontal mouse scrolling.

(For keyboard navigation details, see the Accessibility section on the next page)

![Overflow](navigation/overflow-6583-60177.png)

### Link vs. Button

The Nav Bar Items ca be implemented as either a **link (1)** or a **button (2)**. When used as a **button,** it includes a **chevron icon** to indicate that it triggers a Dropdown Menu or Mega Menu.

![Link vs. Button](navigation/link-vs-button-7267-36160.png)

### Motion

**Animation type:** move left/right **Duration:** 400ms **Easing:** motion-functional-ease-out

![Motion](navigation/motion-7695-40327.png)

## Nav Bar: Accessibility

### Focus Order

1. **Scroll container** When horizontal overflow is active, the entire Nav Bar container becomes focusable. It receives a visible outline and allows horizontal scrolling using arrow keys left and right. This enables users to explore hidden navigation items without tabbing through every element. The scroll container does not replace item-level navigation — it enhances it when content exceeds the visible width.
1. **Buttons Nav** Focus moves from left to right across each visible item in the Button Nav group. This includes both links and buttons (e.g., dropdown triggers).

![Focus Order](navigation/focus-order-7434-45587.png)

### Keyboard Navigation

Users can navigate through focusable elements in the Nav Bar using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to scroll the container horizontally by pressing **“Arrow left”** and **“Arrow right”**
- to open a Menu by pressing **“Space”** or **“Enter”**
- to navigate to a page by pressing **“Enter”**

![Keyboard Navigation](navigation/keyboard-navigation-7434-45618.png)

## Header: Utility Menu

**Overview:**

- Built on the [Popover component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=35223-10505) from the Core Component Library (coming soon)
- Offers quick access to essential functions, user tools, and system-level actions — such as login, language selection, and other key options
- Displays a linear list of options triggered by a button or navigation item (e.g., Login, Language, User Avatar)
- Supports various content types, including **Text Components** (e.g., labels, section headers), **Action Items** (e.g., links to login, preferences, profile), and **Buttons** (e.g., sign out, switch context)
- Includes a flexible placeholder for custom content (e.g., User profile area, search fields)
- Utility Menus are intended for compact, focused tasks — not for deep navigation or multi-step workflows.

> **Development Status:** This pattern is currently Figma-only and not available as a standalone code component. In development, it’s implemented using the Popover component with a configurable container.

![Header: Utility Menu](navigation/header-utility-menu-7158-33072.png)

### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Text Component](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-74332)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

[Popover Component (coming soon)](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=35223-10505)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Utility Menu: Formatting and Construction

### Anatomy

#### Elements

The Utility Menu is built on the core [Popover component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=35223-10505) and is used for navigation within the Top Bar.

It consists of two key elements:

1. **Anchor Element** A vertically stacked Action Item placed in the Top Bar that triggers the menu. It should include a chevron icon to indicate that it opens a menu.
1. **Utility Menu Container** A flexible container that holds the menu content. This can include Action Items, Text Elements, or other navigational components, such as User profile preview, Language search field, Dealer info or contextual notices depending on the context. Content and structure depend on the trigger context and product-specific needs. The Utility Menu is single-level only – avoid nesting or submenus.

![Elements](navigation/elements-7399-38617.png)

#### Utility Menu Container

The Utility Menu Container is flexible and can be customized. The current design in Figma is based on current user needs. The container includes the following elements:

1. **Text Components** Used for structure, grouping and plain information:
   1. Main Titles
   1. Group Titles
   1. Descriptive or informational Text
1. **Placeholder Component** A flexible slot for custom content provided by specific teams.
1. **Separators** Used to visually divide sections within the menu.
1. **Action Items** For navigation or quick access to important functions.
1. **Button Component** Used for actions such as login, logout, or call-to-action elements.

![Utility Menu Container](navigation/utility-menu-container-7399-40871.png)

### Sizing

#### Min and Max width

The width of the Utility menu is dynamic and adjusts based on the content inside — typically the width of the longest Action Item.

However, to maintain consistency and usability, the following constraints apply:

- **Minimum Width:** 200px
- **Maximum Width:** 540px

These limits ensure the utility menu remains readable and visually balanced, regardless of content length.

![Min and Max width](navigation/min-and-max-width-7399-38627.png)

#### Maximum height

The height of the Utility Menu is determined by its content. However, to ensure proper display and avoid visual overflow, the following rule applies:

**There must be a minimum distance of 48px between the bottom of the Utility menu container and the bottom edge of the viewport.**

If the content exceeds the available space, the Utility Menu Container becomes scrollable, preventing it from extending beyond the visible area.

![Maximum height](navigation/maximum-height-7399-38648.png)

### Alignment

**By default, the Utility Menu is left-aligned with its Anchor Element.**

If left alignment would cause the utility menu to **extend beyond the viewport** (e.g., when placed near the right edge of the screen or on small devices), the menu container **switches to right alignment** to remain fully visible.

This responsive behavior ensures optimal positioning and prevents content from being cut off.

![Alignment](navigation/alignment-7399-38689.png)

## Utility Menu: Content and Assets

### Placeholder (Optional)

The placeholder area is optional and designed to accommodate a variety of content types — from simple elements like a **search field (1)** to more complex patterns, such as the **avatar area (2)** for login and user actions.

> **Please note:** The avatar area examples shown in this documentation are early drafts provided by stakeholders and are intended for illustrative purposes only. Functionality, specific elements, and accessibility requirements have not been evaluated, and these examples are not intended to serve as finalized design components.

![Placeholder (Optional)](navigation/placeholder-optional-7472-40034.png)

## Utility Menu: Behavior

### Breakpoints l and xl

- Utility Menus open as popovers from their anchor elements in the Top Bar
- Ideal for quick access to login, language switch, or user-specific actions without leaving the current page

### Breakpoints m and s

Instead, they follow one of two patterns:

1. **Open as a dialog**
- The menu content appears in a lightweight, centered dialog — ideal for short, focused tasks.
- Use case example: **Language Selector**
   - A dialog allows users to quickly search or filter for a language and make a selection. This is especially useful when no standalone language settings page exists.
1. **Redirect to page**
- The action item navigates directly to a dedicated page, such as a profile or login screen.
- Use case example: **User Menu (Login / Profile)**
   - Redirecting to a full profile or account page provides users with access to all related features in the appropriate context. In this case, an intermediate popover is unnecessary.

![Breakpoints m and s](navigation/breakpoints-m-and-s-7422-36672.png)

### Responsiveness

## Utility Menu: Accessibility

### Focus Order

When a Utility Menu is opened using the keyboard, the first focusable element inside the menu receives focus automatically.

The overall focus order follows a left-to-right and top-to-bottom pattern, depending on the layout of each section:

1. **Placeholder Area** Uses a horizontal layout, so focus moves from left to right across elements
1. **Action Item** Arranged vertically, so focus moves from top to bottom through the list of Action Items
1. **Button**

![Focus Order](navigation/focus-order-7456-44092.png)

### Keyboard Navigation

Users can navigate through focusable elements in the Utility Menu using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to open a Utility Menu by pressing **“Enter”** or **“Space”**
- to close or exit a Utility Menu by pressing **“Esc”**

![Keyboard Navigation](navigation/keyboard-navigation-7456-44138.png)

## Utility Menu: Examples

### App Switcher

The App Switcher, labeled "STIHL World", allows users to switch between different STIHL apps and platforms.

Content structure:

1. **Main Title** Clearly labels the menu.
1. **Separators** Visually divide different sections for clarity.
1. **Action Items (with images**) Represent each app or platform with a label and visual identifier.
1. **Button** Positioned at the end of the menu to link to an overall overview page

![App Switcher](navigation/app-switcher-7399-38747.png)

### Log-in

Clicking on "Login" in the Top Navigation opens a Utility Menu with quick access to account-related actions.

Content structure:

1. **Buttons** 1a) Primary Button for login 1b) Secondary Button to create an account
1. **Important Links** Action Items related to the user account

![Log-in](navigation/log-in-7423-36932.png)

### Account and Settings

This example illustrates a potential future state of the Utility Menu used for managing user accounts.

Content structure:

1. **Custom Component** A dedicated section for managing the user account, including avatar customization and account details.
1. **Group Labels** Used to organize related Action Items into clear sections.
1. **Action Items with Icons** Provide quick access to common account-related actions.
1. **Text Component** Displays contextual information, such as the current app version.
1. **Sign Out Button** Placed at the bottom of the menu.

![Account and Settings](navigation/account-and-settings-7407-38626.png)

### Language Selector

The Language Selector allows users to choose between a country-specific or global page, paired with a preferred language.

Content structure:

1. **Search Input** Use a search field to quickly find a specific country or language.
1. **Group Labels** Used to organize related Action Items into clear sections.
1. **Action items (without icons)** Users select a option from a list of available country-language combinations.

> **Please note:** This is a temporary solution that will be reviewed and optimized in future sprints.

![Language Selector](navigation/language-selector-7402-43883.png)

## Header Mobile & Tablet: Overview

**Recommended for:** all sites and platforms **Must have:** Top Bar Items **Optional:** Nav Bar Items, Utility Menu Items

On mobile and tablet breakpoints (s and m), elements from the **Top Bar**, such as Search, Cart, and Account, are relocated into the **Mobile Menu**, or opened as dialogs depending on interaction type and use case.

The **Top Bar**, **Nav Bar**, and **Utility Menu** no longer appear as full, fixed-position components. Instead, their content is broken down into individual functional units referred to as:

- **Top Bar Items** (e.g., logo, search, tools)
- **Nav Bar Items** (e.g., category links or top-level navigation)
- **Utility Menu Items** (e.g., login, language, app switcher)

The following sections illustrate how each item behaves and repositions in the responsive layout, even when their original container is no longer fully visible.

Full **Mobile Menu** documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Header Mobile & Tablet: Overview](navigation/header-mobile-tablet-overview-6897-84351.png)

### Mobile Header Variants

#### Top Bar Items – Only The basic version of the Header.

On tablets and mobile devices, only the most relevant **Top Bar Items** remain visible. Lower-priority items are moved into the Mobile Menu. [Go to Top bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

![Top Bar Items – Only The basic version of the Header.](navigation/top-bar-items-only-the-basic-version-of-the-header-6897-84371.png)

#### Top Bar Items + Nav Bar Items Adds a primary navigation layer to the Top Bar.

All **Nav Bar Items** relocate to the Mobile Menu on tablet and mobile, becoming accessible when the menu is opened. [Go to Nav Bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

![Top Bar Items + Nav Bar Items Adds a primary navigation layer to the Top Bar.](navigation/top-bar-items-nav-bar-items-adds-a-primary-navigation-layer--6897-84384.png)

#### Top Bar Items + Nav Bar Items (Optional) + Utility Menu Items A fully featured header with enhanced utility.

On mobile and tablet devices, **Utility Menu Items** do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar Items + Nav Bar Items (Optional) + Utility Menu Items A fully featured header with enhanced utility.](navigation/top-bar-items-nav-bar-items-optional-utility-menu-items-a-fu-6897-84398.png)

#### Top Bar – reduced Minimal header for focused user flows.

Since there are fewer elements, all of them remain visible across all breakpoints. [Go to Top bar →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

![Top Bar – reduced Minimal header for focused user flows.](navigation/top-bar-reduced-minimal-header-for-focused-user-flows-6897-84417.png)

#### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Button Nav](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=34553-28432&t=3sTzEA7VPrbAfAzB-4)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Header Mobile & Tablet: Behavior

### Responsiveness

The Header is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** Not all Top Bar Items displayed in the desktop version are visible on tablet and mobile devices. Only the most relevant items remain visible **(1a)**, while lower-priority items are moved into the **Mobile Menu (4)** and become accessible when the menu is opened **(1b)**. Each product team defines which items stay visible at each breakpoint based on user needs and space constraints.
1. **Nav Bar Items** The Nav Bar Items are displayed only on desktop. On **breakpoint** **s** and **m** the Nav Bar Items move into the **Mobile Menu (4)** and become accessible when the menu is opened.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Responsiveness](navigation/responsiveness-6897-80662.png)

### Scroll behaviour

1. **Default (Top of Page):** Top Bar is visible
1. **On Scroll Down:** Top Bar hides to maximize content visibility
1. **On Scroll Up:** Top Bar reappears for easy access

### Motion

**Animation type:** move up/down **Duration:** 400ms **Easing:** motion-functional-ease-out

![Motion](navigation/motion-6931-97157.png)

## Mega Navigation: Overview

**Recommended for:** Large E-Commerce and Brand platforms with deep page hierarchies **Must have:** Top Bar, Nav Bar, Mega Menu **Optional:** Utility Menu

Mega Navigation provides structured access to deeply nested navigation items, helping users explore deeper levels of content with ease.

![Mega Navigation: Overview](navigation/mega-navigation-overview-6869-65558.png)

### Mega Navigation Variants

#### Top Bar + Nav Bar + Mega Menu This is the standard version of the Mega Menu.

It provides access to one to two levels of site navigation, offering users a clear and structured overview of available content within the main navigation.

![Top Bar + Nav Bar + Mega Menu This is the standard version of the Mega Menu.](navigation/top-bar-nav-bar-mega-menu-this-is-the-standard-version-of-th-7364-35484.png)

#### Top Bar + Nav Bar + Mega Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.

The Utility Menu is a popover component that offers quick access to essential user functions and system-level actions, such as Login or Language selection

This version combines comprehensive navigation with enhanced usability features, streamlining access to both content and core user functions. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar + Nav Bar + Mega Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.](navigation/top-bar-nav-bar-mega-menu-utility-menu-this-is-the-standard--7401-41152.png)

## Mega Menu: Component

**Overview:**

- Multi-column dropdown for dense navigation needs
- It spans the full width of the screen
- Supports two levels of navigation
   - Primary categories (e.g., “Products”, “Services”)
   - Subcategories or featured links nested within each group
- It can include visual elements (images, teasers, or feature highlights) to promote content, reinforce brand identity, and enhance the overall browsing experience.

> **Development Status:** This component currently exists only in Figma and has not yet been implemented as a standalone component in code.

![Mega Menu: Component](navigation/mega-menu-component-6263-50689.png)

### Related elements

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Mega Menu: Formatting, Construction and Behaviour

### Anatomy

#### Elements

The Mega Menu is divided into two main sections:

1. **Navigation** This section displays a list of Action Items representing the third level of the site’s overall navigation structure.
1. **Placeholder** This area serves as a flexible space that can include fourth-level Action Items, as well as visual elements like images, teasers, or promotional content.

![Elements](navigation/elements-6885-71180.png)

### Placement and sizing

1. **Placement** The Mega Menu is always positioned left aligned and directly below the Nav Bar.
1. **Width** While the Mega Menu stretches across the full width of the screen, its content is aligned with the main content area (see [Grid Guidelines](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?m=auto) for reference). It is typically used alongside a Nav Bar and Top Bar that also follows the main content area width, ensuring consistent horizontal alignment between both elements.

> **Note:** Using a Mega Menu is not recommended in full-width layouts. Full-width layouts are typically reserved for dashboards or information-heavy pages, where Dropdown Menus and/or Sidebar Menus provide a more suitable and efficient user experience.

1. **Height** The height of the Mega Menu is flexible and adapts to the screen size:
   - Max height: **640px**
   - Min distance to viewport bottom: **64px**
   - Min width: **380px**

![Placement and sizing](navigation/placement-and-sizing-6897-71478.png)

### Content Overflow

If the content exceeds the available height, it should become scrollable by enabling a vertical scrollbar.

![Content Overflow](navigation/content-overflow-6897-78721.png)

> Overflowing menus should be avoided whenever possible, as they hinder ease of use and reduce scannability.

It’s recommended to either reduce the number of menu items or make better use of the Mega Menu’s horizontal space by organizing Action Items into multiple columns.

**Note:** Using multiple columns limits the available space, making it suitable only for displaying 3rd-level navigation.

![Content Overflow](navigation/content-overflow-7367-35912.png)

### Usage

#### Avoid Mixing Menu Types

Nav Bar Items should trigger a consistent Menu Type — either all Dropdown Menus or all Mega Menus. Do not combine both.

![Avoid Mixing Menu Types](navigation/avoid-mixing-menu-types-7979-40713.png)

### Motion

#### Enter animation Mega Menu

**Interaction trigger:** on click

**Animation type:** Container: move in from top Content: fade in after delay (1ms) **Duration:** 400ms **Easing:** motion-functional-ease-out

#### Exit animation Mega Menu

**Interaction trigger:** on click

**Animation type:** move out to top **Duration:** 400ms **Easing:** motion-functional-ease-in

#### Transition to other Mega Menu

**Interaction trigger:** on click

**Animation type:** instant **Duration:** – **Easing:** –

![Transition to other Mega Menu](navigation/transition-to-other-mega-menu-6897-72346.png)

## Mega Menu: Navigation Hierarchy

The Mega Menu supports different navigation hierarchies based on content depth and complexity. Each level in the structure is reflected in both **the navigation and breadcrumb trail**, helping users understand where they are and how to move between sections.

### Three-Level Navigation

This structure is designed for simpler content hierarchies, typically used in product or service areas with limited depth.

It includes a homepage, a primary navigation page, and a category page. The streamlined format supports ease of navigation while maintaining clarity.

**A) Level 1: Service Homepage** The top-level landing page for the product or service. It always sits at the root of the information architecture.

**B) Level 2: Primary Navigation Page** (e.g. “Products”) Appears in the header navigation. These are core site sections that fall directly under the homepage in the hierarchy.

**C) Level 3: Category Page** (e.g. “Sawing and Cutting”) Shown as the only level within the mega menu. These are child pages of the primary navigation page (Level 2) and represent specific content groupings.

**Breadcrumb Alignment**

Mega Menu levels are reflected in the breadcrumb trail to support user orientation and wayfinding.

![Three-Level Navigation](navigation/three-level-navigation-7247-36325.png)

### Four-Level Navigation

Designed for more complex content ecosystems, the 4-level navigation introduces an additional layer of categorization.

This structure is ideal for detailed product areas where deeper grouping is required.

**A) Level 1: Service Homepage** The top-level landing page for the product or service. It always sits at the root of the information architecture.

**B) Level 2: Primary Navigation Page** (e.g. “Products”) Appears in the header navigation. These are core site sections that fall directly under the homepage in the hierarchy.

**C) Level 3: Category Page** (e.g. “Sawing and Cutting”) Displayed as the first level within the Mega Menu. These are child pages of the primary navigation page (Level 2) and represent specific content groupings.

**D) Level 4: Subcategory Page** (e.g. “Chainsaws and Power Saws”) Displayed as the second level in the Mega Menu. These are child pages of the category page (Level 3), providing more specific groups within a defined area.

**Breadcrumb Alignment**

Mega Menu levels are reflected in the breadcrumb trail to support user orientation and wayfinding.

![Four-Level Navigation](navigation/four-level-navigation-7247-36394.png)

### Chevron Usage

1. **Action Item with Chevron:** Leads to deeper menu level, to indicate expandable level
1. **Action iItem without Chevron:** Direct page link, no submenu

![Chevron Usage](navigation/chevron-usage-7247-37646.png)

## Mega Menu: Content and Assets

### Placeholder usage

> Comprehensive layout examples, usage variations, and best-practice guidelines for populating the Mega Menu will be included in the future.

#### Three-Level Navigation

1. **Visual Content in the Mega Menu** In a three-level navigation structure, the Mega Menu placeholder can optionally include visual content to enhance the user experience. This content can be used to spotlight key content, promote products, reinforce brand identity and create a more engaging browsing experience You may incorporate elements such as:
   - Images
   - Teasers
   - Videos
1. **Behavior of Third-Level Action Items** If the navigation is limited to three levels, Action Items in the third level will not display an active state, as there is no fourth level to indicate a deeper selection.

![Three-Level Navigation](navigation/three-level-navigation-6897-80147.png)

#### Four-Level Navigation

1. **Fourth-Level Links** In a four-level navigation structure, the Mega Menu placeholder can include a headline for orientation, followed by a list of Action Items. These links guide users to specific pages at the fourth level of the site hierarchy.
1. **Visual Content (Optional)** Alongside the fourth-level Action Items, you may optionally include visual content to enhance the user experience. This content can be used to spotlight key content, promote products, reinforce brand identity and create a more engaging browsing experience You may incorporate elements such as:
   - Images
   - Teasers
   - Videos
1. **Behavior of Third-Level Action Items** When a fourth navigation level is present, third-level Action Items display an active state, as there is a deeper level to reflect the user’s selection.

![Four-Level Navigation](navigation/four-level-navigation-7247-34735.png)

## Mega Menu: Accessibility

### Focus Order

> These guidelines will be reviewed and refined during the implementation phase.

When a Mega Menu is opened using the keyboard, the first focusable element inside the menu receives focus automatically.

The overall focus order follows a top-to-bottom and left-to-right pattern, depending on the layout of each section:

1. **Third-Level Navigation** Arranged vertically, so focus moves from top to bottom through the list of Action Items. If a fourth-level menu exists, focus shifts to the right after the current column.
1. **Fourth-Level Navigation** Arranged vertically, so focus moves from top to bottom through the list of Action Items. After that the Focus goes back to the third-Level navigation restarting the cycle.
1. **Placeholder** Focus behavior depends on the content inside:
   - If the placeholder contains a single interactive element (e.g. a button in a teaser), that element receives focus.
   - If the entire block is interactive, it can be focused as a whole.

![Focus Order](navigation/focus-order-7446-39344.png)

### Keyboard Navigation

> These guidelines will be reviewed and refined during the implementation phase.

Users can navigate through focusable elements in the Mega Menu using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to switch between levels and items by pressing **“Arrow left”** or **“Arrow right”** or **“Arrow down”** or **“Arrow up”**
- to open a Mega Menu by pressing **“Space”**
- to close or exit a Mega Menu by pressing **“Esc”**

![Keyboard Navigation](navigation/keyboard-navigation-7446-39390.png)

## Mega Menu: Example

### E-Shop

The navigation is optimized for browsing and product discovery. It provides access to categories, search, cart, and user account.

![E-Shop](navigation/e-shop-7700-44318.png)

## Mega Navigation Mobile & Tablet: Overview

**Recommended for:** Large E-Commerce and Brand platforms with deep page hierarchies **Must have:** Top Bar Items, Nav Bar Items, Mega Menu Items **Optional:** Utility Menu Items

On mobile and tablet breakpoints (s and m), elements from the **Top Bar**, such as Search, Cart, and Account, are relocated into the **Mobile Menu**, or opened as dialogs depending on interaction type and use case.

The **Nav Bar** and **Mega Menu** transition from click-based overlays to a tap-based drilldown pattern inside the **Mobile Menu**.

Since the **Top Bar**, **Nav Bar**, **Mega Menu** and **Utility Menu** no longer appear as full, fixed-position components. Instead, their content is broken down into individual functional units referred to as:

- **Top Bar Items** (e.g., logo, search, tools)
- **Nav Bar Items** (e.g., category links or top-level navigation)
- **Mega Menu Items** (e.g., subcategory links or secondary level navigation)
- **Utility Menu Items** (e.g., login, language, app switcher)

The following sections illustrate how each item behaves and repositions in the responsive layout, even when their original container is no longer fully visible.

Full **Mobile Menu** documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

> The structure of this navigation pattern is identical to that of the **Dropdown Menu Navigation Pattern**.

![Mega Navigation Mobile & Tablet: Overview](navigation/mega-navigation-mobile-tablet-overview-6924-86683.png)

### Mega Navigation Variants

#### Top Bar Items + Nav Bar Items + Mega Menu Items This is the standard version of the Mega Menu.

On mobile screens, the Mega Menu’s wide-screen overlay is replaced with a drilldown navigation pattern, showing one level at a time to provide a touch-friendly and focused user experience.

![Top Bar Items + Nav Bar Items + Mega Menu Items This is the standard version of the Mega Menu.](navigation/top-bar-items-nav-bar-items-mega-menu-items-this-is-the-stan-7373-42468.png)

1. **Top Bar Items + Nav Bar Items + Mega Menu Items + Utility Menu Items** This is the fully featured version, enhanced with a Utility Menu.

On mobile and tablet devices, **Utility Menu Items** do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar Items + Nav Bar Items + Mega Menu Items This is the standard version of the Mega Menu.](navigation/top-bar-items-nav-bar-items-mega-menu-items-this-is-the-stan-7401-42093.png)

#### Related elements

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Mega Menu Mobile & Tablet: Behavior

### Responsiveness

The Mega Menu Navigation is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** Not all Top Bar Items displayed in the desktop version are visible on tablet and mobile devices. Only the most relevant items remain visible **(1a)**, while lower-priority items are moved into the **Mobile Menu (4)** and become accessible when the menu is opened **(1b)**. Each product team defines which items stay visible at each breakpoint based on user needs and space constraints.
1. **Nav Bar Items** The Nav Bar Items are displayed only on desktop. On **breakpoint** **s** and **m** the Nav Bar Items move into the **Mobile Menu (4)** and become accessible when the menu is opened.
1. **Mega Menu Items** The Mega Menu is not displayed on tablet and mobile breakpoints. Instead, its content is integrated into the **Mobile Menu (4)** and accessed through **drilldown navigation (5)**. The **first drilldown (third-level navigation) (3a)** is triggered by tapping the relevant **Nav Bar Item (2)**, while the **second drilldown (fourth-level navigation) (3b)** is accessed by selecting an item within the first drilldown.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

> The behavior of this navigation pattern closely mirrors the **Dropdown Menu Navigation Pattern**. However, the Dropdown Menu supports only one drilldown, allowing for up to a third level of navigation.

![Responsiveness](navigation/responsiveness-6924-85787.png)

## Dropdown Navigation: Overview

**Recommended for:** Smaller brand and marketing platforms or portals with moderate content depth **Must have:** Top Bar, Nav Bar, Dropdown Menu **Optional:** Utility Menu

Dropdown Navigation provides structured access to slightly nested navigation items, helping users explore deeper levels of content with ease.

It supports a single level of navigation and is best suited for simple site structures or compact lists.

![Dropdown Navigation: Overview](navigation/dropdown-navigation-overview-6897-80609.png)

### Dropdown Navigation Variants

#### Top Bar + Nav Bar + Dropdown Menu This is the standard version of the Dropdown Menu.

Dropdown Menus is triggered via Button Nav Items in the Nav Bar, each revealing a short list of links related to the selected section.

![Top Bar + Nav Bar + Dropdown Menu This is the standard version of the Dropdown Menu.](navigation/top-bar-nav-bar-dropdown-menu-this-is-the-standard-version-o-7422-37754.png)

#### Top Bar + Nav Bar + Dropdown Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.

The Utility Menu is a popover that gives quick access to user-related tools and system-level actions like login, language selection, or account settings. It is triggered by clicking the Action Item in the Top Bar.

In contrast, Dropdown Menus are used for site navigation and are triggered via Button Nav items in the Nav Bar.

This setup separates content navigation from user functions, ensuring a clearer and more efficient user experience. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar + Nav Bar + Dropdown Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.](navigation/top-bar-nav-bar-dropdown-menu-utility-menu-this-is-the-stand-7422-38402.png)

## Dropdown Menu: Component

**Overview:**

- Built on the [Popover component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=35223-10505) from the Core Component Library (coming soon)
- Provides quick access to nested navigation items
- Displays a linear list of Action Items, triggered by clicking a Button Nav in the Nav Bar
- Designed to support a single level of navigation

> **Development Status:** This pattern is currently Figma-only and not available as a standalone code component. In development, it’s implemented using the Popover component with a configurable container.

![Dropdown Menu: Component](navigation/dropdown-menu-component-6263-62120.png)

### Related elements

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Popover Component (coming soon)](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=35223-10505)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Dropdown Menu: Formatting, Construction and Behaviour

### Anatomy

#### Elements

1. **Anchor Element** A Button Nav that triggers the Dropdown Menu when clicked. It should include a chevron icon to indicate that it opens a dropdown.
1. **List** A container that holds the Dropdown content, typically composed of Action Items.

![Elements](navigation/elements-6583-85991.png)

### Sizing

#### Min. and max. width

The width of the Dropdown Menu is dynamic and adjusts based on the content inside — typically the width of the longest Action Item.

However, to maintain consistency and usability, the following constraints apply:

- **Minimum Width:** 200px
- **Maximum Width:** 540px

These limits ensure the dropdown remains readable and visually balanced, regardless of content length.

![Min. and max. width](navigation/min-and-max-width-7388-47354.png)

#### Maximum height

The height of the Dropdown Menu is determined by its content. However, to ensure proper display and avoid visual overflow, the following rule applies:

**There must be a minimum distance of 48px between the bottom of the dropdown and the bottom edge of the screen.**

If the content exceeds the available space, the Dropdown Menu becomes scrollable, preventing it from extending beyond the visible area.

![Maximum height](navigation/maximum-height-7388-47359.png)

### Alignment

**By default, the Utility Menu is left-aligned with its Anchor Element.**

If left alignment would cause the utility menu to **extend beyond the viewport** (e.g., when placed near the right edge of the screen or on small devices), the menu container **switches to right alignment** to remain fully visible.

This responsive behavior ensures optimal positioning and prevents content from being cut off.

![Alignment](navigation/alignment-6583-85997.png)

### Usage

#### Avoid Mixing Menu Types

Nav Bar Items should trigger a consistent Menu Type — either all Dropdown Menus or all Mega Menus. Do not combine both.

![Avoid Mixing Menu Types](navigation/avoid-mixing-menu-types-7999-41871.png)

## Dropdown Menu: Accessibility

### Focus Order

When a Dropdown Menu is opened using the keyboard, the first focusable element inside the menu receives focus automatically.

The overall focus order follows a top-to-bottom pattern.

![Focus Order](navigation/focus-order-7446-41809.png)

### Keyboard Navigation

Users can navigate through focusable elements in the Dropdown Menu using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to open a Dropdown Menu by pressing **“Space”** or **“Enter”**
- to close or exit a Dropdown Menu by pressing **“Esc”**

![Keyboard Navigation](navigation/keyboard-navigation-7446-41855.png)

## Dropdown Menu: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

### STIHL Corporate

On the STIHL Corporate and Career website, when the navigation structure is simple and does not require a mega menu, a Dropdown Menu is used to reveal a secondary layer of navigation.

![STIHL Corporate](navigation/stihl-corporate-7388-48224.png)

## Dropdown Navigation Mobile & Tablet: Overview

**Recommended for:** Smaller brand and marketing platforms or portals with moderate content depth **Must have:** Top Bar Items, Nav Bar Items, Dropdown Menu Items **Optional:** Utility Menu Items

On mobile and tablet breakpoints (s and m), elements from the **Top Bar**, such as Search, Cart, and Account, are relocated into the **Mobile Menu**, or opened as dialogs depending on interaction type and use case.

The **Nav Bar** and **Dropdown Menu** transition from click-based overlays to a tap-based drilldown pattern inside the **Mobile Menu**.

Since the **Top Bar**, **Nav Bar**, **Dropdown Menu** and **Utility Menu** no longer appear as full, fixed-position components. Instead, their content is broken down into individual functional units referred to as:

- **Top Bar Items** (e.g., logo, search, tools)
- **Nav Bar Items** (e.g., category links or top-level navigation)
- **Dropdown Menu Items** (e.g., subcategory links)
- **Utility Menu Items** (e.g., login, language, app switcher)

The following sections illustrate how each item behaves and repositions in the responsive layout, even when their original container is no longer fully visible.

Full **Mobile Menu** documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

> The structure of this navigation pattern is identical to that of the **Mega Menu Navigation Pattern**.

![Dropdown Navigation Mobile & Tablet: Overview](navigation/dropdown-navigation-mobile-tablet-overview-7422-38981.png)

### Mega Navigation Variants

#### Top Bar Items + Nav Bar Items + Dropdown Menu Items This is the standard version of the Dropdown Menu.

On mobile screens, the Dropdown popover is replaced with a drilldown navigation pattern, showing one level at a time to provide a touch-friendly and focused user experience.

![Top Bar Items + Nav Bar Items + Dropdown Menu Items This is the standard version of the Dropdown Menu.](navigation/top-bar-items-nav-bar-items-dropdown-menu-items-this-is-the--7422-44871.png)

1. **Top Bar Items + Nav Bar Items + Dropdown Menu Items + Utility Menu Items** This is the fully featured version, enhanced with a Utility Menu.

On mobile and tablet devices, **Utility Menu Items** do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar Items + Nav Bar Items + Dropdown Menu Items This is the standard version of the Dropdown Menu.](navigation/top-bar-items-nav-bar-items-dropdown-menu-items-this-is-the--7422-45483.png)

#### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Dropdown Menu Mobile & Tablet: Behavior

### Responsiveness

The Dropdown Menu Navigation is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** Not all Top Bar Items displayed in the desktop version are visible on tablet and mobile devices. Only the most relevant items remain visible **(1a)**, while lower-priority items are moved into the **Mobile Menu (4)** and become accessible when the menu is opened **(1b)**. Each product team defines which items stay visible at each breakpoint based on user needs and space constraints.
1. **Nav Bar Items** The Nav Bar Items are displayed only on desktop. On **breakpoint** **s** and **m** the Nav Bar Items move into the **Mobile Menu (4)** and become accessible when the menu is opened.
1. **Dropdown Menu Items** The Dropdown Menu is not displayed on tablet and mobile breakpoints. Instead, its content is integrated into the **Mobile Menu (4)** and accessed through **drilldown navigation (5)**. The **drilldown (third-level navigation)** is triggered by tapping the relevant **Nav Bar Item (2)**.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

> The behavior of this navigation pattern is nearly identical to that of the **Mega Menu Navigation Pattern**. However, the Mega Menu includes a second drilldown, enabling support for a fourth level of navigation.

![Responsiveness](navigation/responsiveness-7402-43961.png)

## Sidebar Navigation: Overview

**Recommended for:** Portals, dashboards, or tools with many sections **Must have:** Top Bar, Sidebar **Optional:** Nav Bar, Utility Menu

The Sidebar Navigation pattern provides a persistent, vertically stacked menu for structured, in-depth navigation. It is especially useful in complex applications (e.g. dashboards) where users need quick access to multiple views, features, or settings without losing context.

The Sidebar Navigation is always used in combination with the Header, while the Nav Bar is optional. When present, the Nav Bar represents the second level of navigation, with the Sidebar handling the third level.

![Sidebar Navigation: Overview](navigation/sidebar-navigation-overview-6869-65976.png)

### Sidebar Navigation Variants

#### Top Bar + Nav Bar (Optional) + Sidebar Menu This is the standard version of the Sidebar Menu.

The Sidebar Menu combines vertical and horizontal navigation. Useful when a platform includes both global categories and section-specific navigation layers.

![Top Bar + Nav Bar (Optional) + Sidebar Menu This is the standard version of the Sidebar Menu.](navigation/top-bar-nav-bar-optional-sidebar-menu-this-is-the-standard-v-7158-36600.png)

#### Top Bar + Nav Bar (Optional) + Sidebar Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.

The Utility Menu is a popover that provides quick access to user-related tools and system-level actions, such as login, language selection, or account settings. It is triggered by clicking the Action Item in the Top Bar.

In contrast, Sidebar Menus are used for product-specific navigation and remain constantly visible, supporting focused interaction within a particular area of the application.

This separation of content navigation and user functions helps create a more organized and efficient user experience. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar + Nav Bar (Optional) + Sidebar Menu + Utility Menu This is the standard version, enhanced with a Utility Menu.](navigation/top-bar-nav-bar-optional-sidebar-menu-utility-menu-this-is-t-7401-57910.png)

## Sidebar Menu: Component

**Overview:**

- Provides structured, vertical navigation for complex interfaces
- Anchored to the left side of the screen
- Supports both top-level and nested navigation items
- Can include icons, labels, and optional badges for clarity and hierarchy
- Collapsible to save space on smaller screens or when not in use
- Responsive behavior adapts to different screen sizes and layouts
- Active state highlights the current page or section

> **Development Status:** This component currently exists only in Figma and has not yet been implemented as a standalone component in code.

![Sidebar Menu: Component](navigation/sidebar-menu-component-6263-51863.png)

![Sidebar Menu: Component](navigation/sidebar-menu-component-6263-56826.png)

### Related elements

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Accordion](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=17260-166)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Sidebar Menu: Formatting and Construction

### Anatomy

#### States

There are two possible states for sidebars:

1. **Expanded** This is the default state, where all sidebar elements – including labels, icons, and groupings – are fully visible.
1. **Collapsed** This is a user-triggered state where the sidebar is minimized, showing limited content. Note that not all sidebars have to support this functionality.

![States](navigation/states-6924-89469.png)

#### Elements

1. **Group Title** A title used to categorize and group related Action Items.
1. **Action Item** An interactive list item that functions as a link or button.
1. **Divider** A visual separator used to distinguish different groups within the sidebar.
1. **Collapse Button** A control that allows users to collapse or expand the sidebar.
1. **Expandable Item** The Expandable Item is technically built using the [Accordion component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=17260-166) from the Core Library. It allows users to expand or collapse grouped Action Items under a shared heading, to show or hide related content as needed.

![Elements](navigation/elements-6931-91782.png)

### Background colour

The sidebar background color can adapt based on layout needs:

1. **Default:** background-color-primary – used in most layouts with a header and sidebar.
1. **Alternative:** background-color-secondary – provides greater visual separation from the main content area when needed.

![Background colour](navigation/background-colour-7700-46442.png)

### Grid

> **Status:** This is currently in development and will be available shortly.

## Sidebar Menu: Navigation Hierarchy

The Sidebar Menu can display different levels of navigation depending on its configuration and whether it includes a Nav Bar.

### Without Nav Bar: Starting from level two

When no Nav Bar is present, the Sidebar automatically represents the **second level** of navigation, directly following the home page.

**A) Level 1: Service Homepage** This is the main landing page or introduction to the product. It always sits at the top level of the information architecture (IA).

**B) Level 2: Page** A secondary-level page within the product. These pages fall directly under the homepage in the IA hierarchy.

**C) Level 2: Filtered Views or In-Page Sections (Optional)** These represent either filtered versions of a page or direct links to specific sections within a page. They do not constitute a separate level in the information architecture.

**Breadcrumb Alignment**

The different levels are reflected in the breadcrumb trail to support user orientation and wayfinding.

![Without Nav Bar: Starting from level two](navigation/without-nav-bar-starting-from-level-two-7379-40585.png)

### With Nav Bar: Starting from level three

When a Nav Bar is present, the Sidebar automatically represents the **third level** of navigation, following the homepage and secondary-level pages.

**A) Level 1: Service Homepage** This is the main landing page or introduction to the product. It always sits at the top level of the information architecture (IA).

**B) Level 2: Page** A page directly beneath the homepage in the IA hierarchy. These are accessible via the Nav Bar and provide access to key product sections.

**C) Level 3: Sub-Page** A page that falls directly under a secondary-level page. These are typically accessed through the Sidebar when a Nav Bar is present.

**C) Filtered Views or In-Page Sections (Optional)** These represent either filtered versions of a page or direct links to specific sections within a page. They do not constitute a separate level in the information architecture.

**Breadcrumb Alignment**

The different levels are reflected in the breadcrumb trail to support user orientation and wayfinding.

![With Nav Bar: Starting from level three](navigation/with-nav-bar-starting-from-level-three-7379-35273.png)

## Sidebar Menu: Navigation Patterns

The Sidebar Menu supports multiple structural patterns to accommodate different product needs and navigation depths. Each pattern offers a different way of organizing links, with optional enhancements to aid orientation and usability.

> The following Sidebar Navigation Patterns can be built using the provided components. Additional patterns will be introduced over time. If your use case isn’t covered by the examples below, please reach out [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

### Simple Navigation Pattern

A flat hierarchy of links, presented consecutively without structural nesting.

**Use Case:** For straightforward navigation with few pages or when grouping is unnecessary.

**Features:** Pages are listed one after another. Dividers can optionally separate links into loose visual groups for scannability. All items represent the same IA level (typically level two or three, depending on the presence of a Nav Bar).

Example Structure:

**A) Level 1: Service Homepage B) Level 2: Page** (Check previous page for hierarchy information)

![Simple Navigation Pattern](navigation/simple-navigation-pattern-7379-37092.png)

### Organized with Sections

Links are grouped under non-clickable section headers to reinforce relationships and support visual scanning.

**Use Case:** Ideal for medium-scale navigation where users benefit from seeing related pages grouped under a shared context.

**Features:** Section headers are not interactive. Each section contains direct links that are conceptually related.

Example Structure:

**A) Level 1: Service Homepage B) Level 2: Page**

**Correspondence with breadcrumbs (Optional)**

Section headers can optionally be included in breadcrumbs as a prefix to the current page’s breadcrumb item, separated by a colon.

This is recommended when the added context helps users better understand and maintain the overall structure of the information architecture.

> Breadcrumbs are used only when the interface displays more than two hierarchical levels. The following example is for illustrative purposes only.

![Organized with Sections](navigation/organized-with-sections-7379-37162.png)

### Organized with Group Sections (Expandable)

Groups of related pages are nested within expandable containers (accordion), providing greater control over complex navigation.

**Use Case:** Recommended for dashboards, tools, or portals with multiple subgroups or when minimizing vertical space is important.

**Features:** Section groups are expandable containers (e.g., using the Accordion component). Section headers are not clickable — they only expand or collapse.

**Important:** Nested links in the accordion do not reflect separate IA levels and are not included in the breadcrumb hierarchy.

Example Structure:

**A) Level 1: Service Homepage B) Level 2: Page C) Level 2: Filtered Views / In-Page Sections**

**Correspondence with breadcrumbs (Optional)**

Section headers can optionally be included in breadcrumbs as a prefix to the current page’s breadcrumb item, separated by a colon.

This is recommended when the added context helps users better understand and maintain the overall structure of the information architecture.

Since the links within the accordion do not represent distinct page levels, they are not included in the breadcrumb trail.

> Breadcrumbs are used only when the interface displays more than two hierarchical levels. The following example is for illustrative purposes only.

![Organized with Group Sections (Expandable)](navigation/organized-with-group-sections-expandable-7379-37266.png)

### Organized with Group Sections (Not expandable)

Groups of related pages are organized under a single umbrella page, indicated by a visual indent in the navigation.

**Use Case:** Ideal for dashboards, tools, or portals with multiple sub-sections or content groups.

**Features:** Each item is an individual, clickable page. Supports up to three levels of hierarchy.

Example Structure:

**A) Level 1: Service Homepage B) Level 2: Page C) Level 3: Sub-Page**

**Correspondence with breadcrumbs (Optional)**

Section headers can optionally be included in breadcrumbs as a prefix to the current page’s breadcrumb item, separated by a colon.

This is recommended when the added context helps users better understand and maintain the overall structure of the information architecture.

![Organized with Group Sections (Not expandable)](navigation/organized-with-group-sections-not-expandable-7827-43030.png)

## Sidebar Menu: Content and Assets

### Icons

Using icons in the Sidebar is encouraged to enhance scannability and support quick recognition of content.

Be sure to choose icons that are clear, intuitive, and effectively convey the intended meaning.

Avoid abstract or ambiguous symbols unless they are commonly understood.

![Icons](navigation/icons-6938-99526.png)

### Label weight

The visual hierarchy of text labels plays a key role in guiding users through the navigation structure.

1. **Default Styling:** **1.a) Enabled items:** Use Regular weight for standard sidebar Action Items. **1.b) Active item:** Use Bold weight to indicate the current page and enhance visibility.
1. **For Expandable Groups:** Use Bold weight for **top-level Action Items** to visually differentiate them from:
   - Section labels within Expandable Group headers (which are typically smaller/lighter)
   - Nested Action Items within expanded groups

![Label weight](navigation/label-weight-6938-101349.png)

### Expandable Item

When using an accordion within the sidebar, it is recommended to use the “extra-small” variant with the icon positioned on the left (expandable).

![Expandable Item](navigation/expandable-item-6938-101827.png)

## Sidebar Menu: Behaviour

### Collapsable Sidebar

When triggered, the collapse/expand button allows users to toggle the Sidebar between expanded and collapsed states.

#### Collapsable Sidebar with icons

In Sidebars where **all** top-level categories use icons, the collapsed state includes the following:

1. **Top-Level Action Items** These are displayed as vertically stacked items and retain both their icon and label.
1. **Divider Line** Visual dividers remain to help separate groups and maintain structure.

The following elements are not displayed in the collapsed state:

1. **Group Titles**
1. **Expandable Item**

![Collapsable Sidebar with icons](navigation/collapsable-sidebar-with-icons-6938-102248.png)

#### Collapsable Sidebar without icons

1. When sidebars either:
   1. **lack icons**, or
   1. **use icons inconsistently**,
1. the collapsed state appears **empty**, showing only the expand/collapse button.

**Note:** This happens even if just one top-level category is missing an icon.

![Collapsable Sidebar without icons](navigation/collapsable-sidebar-without-icons-7389-36869.png)

### Scroll behaviour

Sidebars and their corresponding header elements remain fixed and always visible — they do not disappear when scrolling.

![Scroll behaviour](navigation/scroll-behaviour-6938-104404.png)

## Sidebar Menu: Accessibility

### Focus Order

1. **Action Items** Arranged vertically, so focus moves from top to bottom through the list of Action Items
1. **Collapse Button** The collapse/expand button is included in the focus order and can be reached using Tab

![Focus Order](navigation/focus-order-7446-43588.png)

### Keyboard Navigation

Users can navigate through focusable elements in the header using the keyboard:

- to move forward to the next focusable element by pressing **“Tab”**
- to move backward to the previous element by pressing **“Shift + Tab”**
- to navigate to a page by pressing **“Enter”**

![Keyboard Navigation](navigation/keyboard-navigation-7446-43601.png)

## Sidebar Menu: Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

### STIHL Service Communication (SSC)

Internal tool for quickly finding spare parts and relevant information for STIHL products, primarily used by official dealers and customer service teams.

The sidebar provides fast access to categories and search functions, supporting a high-frequency workflow.

![STIHL Service Communication (SSC)](navigation/stihl-service-communication-ssc-7700-45147.png)

### Connected Portal

A logged-in user portal designed to navigate between tools and manage STIHL products. The sidebar supports quick orientation and task switching.

![Connected Portal](navigation/connected-portal-7700-45292.png)

## Sidebar Navigation Mobile & Tablet: Overview

**Recommended for:** Portals, dashboards, or tools with many sections **Must have:** Top Bar, Sidebar **Optional:** Nav Bar, Utility Menu

On mobile and tablet breakpoints (s and m), elements from the **Top Bar**, such as Search, Cart, and Account, are relocated into the Mobile Menu, or opened as dialogs depending on interaction type and use case.

The **Nav Bar** and **Sidebar Menu** transition from click-based overlays to a tap-based drilldown pattern inside the **Mobile Menu**.

Since the **Top Bar**, **Nav Bar**, **Sidebar Menu** and **Utility Menu** no longer appear as full, fixed-position components. Instead, their content is broken down into individual functional units referred to as:

- **Top Bar Items** (e.g., logo, search, tools)
- **Nav Bar Items** (e.g., category links or top-level navigation)
- **Sidebar Menu Items** (e.g., subcategory links or secondary level navigation)
- **Utility Menu Items** (e.g., login, language, app switcher)

The following sections illustrate how each item behaves and repositions in the responsive layout, even when their original container is no longer fully visible.

Full **Mobile Menu** documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Sidebar Navigation Mobile & Tablet: Overview](navigation/sidebar-navigation-mobile-tablet-overview-7401-59621.png)

### Sidebar Navigation Variants

#### Top Bar + Nav Bar (Optional) + Sidebar (Drilldown / expandable)

#### Top Bar Items + Nav Bar Items (Optional) + Sidebar Menu Items This is the standard version of the Sidebar Menu.

On mobile screens, the Sidebar Menu is replaced with a drilldown navigation pattern, showing one level at a time to provide a touch-friendly and focused user experience.

![Top Bar Items + Nav Bar Items (Optional) + Sidebar Menu Items This is the standard version of the Sidebar Menu.](navigation/top-bar-items-nav-bar-items-optional-sidebar-menu-items-this-7401-59653.png)

1. **Top Bar Items + Nav Bar Items (Optional) + Sidebar Menu Items + Utility Menu Items** This is the fully featured version, enhanced with a Utility Menu.

On mobile and tablet devices, **Utility Menu Items** do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case. [Go to Utility Menu →](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

![Top Bar Items + Nav Bar Items (Optional) + Sidebar Menu Items This is the standard version of the Sidebar Menu.](navigation/top-bar-items-nav-bar-items-optional-sidebar-menu-items-this-7401-59702.png)

#### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Header](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-33832)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

#### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Sidebar Menu Mobile & Tablet: Behavior

### Responsiveness

#### Top Bar Items + Sidebar Menu Items + Utility Menu Items (Optional) – List Variation

**Applicable for:**

- Maximum of 2 Top Bar Items and / or
- Maximum of 2 Sidebar navigation levels

The Sidebar Menu Navigation is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** The two Top Bar Items displayed in the desktop version are also visible on tablet and mobile devices.
1. **Sidebar Menu Items** The Sidebar Menu is not displayed on tablet and mobile breakpoints. Instead, its content is integrated into the **Mobile Menu (4)**, which is presented as a list — mirroring the desktop Sidebar structure.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Top Bar Items + Sidebar Menu Items + Utility Menu Items (Optional) – List Variation](navigation/top-bar-items-sidebar-menu-items-utility-menu-items-optional-7391-38046.png)

#### Top Bar Items + Sidebar Menu Items + Utility Menu Items (Optional) – Drilldown Variation

**Applicable for:**

- More than 2 Top Bar items and / or
- More than 2 Sidebar navigation levels

The Sidebar Menu Navigation is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** Not all Top Bar Items displayed in the desktop version are visible on tablet and mobile devices. Only the most relevant items remain visible **(1a)**, while lower-priority items are moved into the **Mobile Menu (4)** and become accessible when the menu is opened **(1b)**. Each product team defines which items stay visible at each breakpoint based on user needs and space constraints.
1. **Sidebar Menu Items** The Sidebar is not shown on tablet and mobile breakpoints. Its contents are integrated into the **Mobile Menu (4)** and accessed via **drilldown navigation (5)**. The top-level Sidebar Items convert to a **second-level navigation (2a)**. When tapped, they trigger a drilldown to the **third-level navigation (2b)**, which is presented as a list — mirroring the desktop Sidebar structure.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Top Bar Items + Sidebar Menu Items + Utility Menu Items (Optional) – Drilldown Variation](navigation/top-bar-items-sidebar-menu-items-utility-menu-items-optional-7391-41543.png)

#### Top Bar Items + Nav Bar Items + Sidebar Menu Items + Utility Menu Items (Optional)

**Applicable for:**

- All variations that feature a Nav Bar

The Sidebar Menu Navigation is fully responsive. At smaller breakpoints (m and s), several components adapt in behavior or relocate to maintain usability and clarity.

1. **Top Bar Items** Not all Top Bar Items displayed in the desktop version are visible on tablet and mobile devices. Only the most relevant items remain visible **(1a)**, while lower-priority items are moved into the **Mobile Menu (4)** and become accessible when the menu is opened **(1b)**. Each product team defines which items stay visible at each breakpoint based on user needs and space constraints.
1. **Nav Bar Items** The Nav Bar Items are displayed only on desktop. On **breakpoint** **s** and **m** the Nav Bar Items move into the **Mobile Menu (4)** and become accessible when the menu is opened.
1. **Sidebar Menu Items** The Sidebar is not shown on tablet and mobile breakpoints. Its contents are integrated into the **Mobile Menu (4)** and accessed via **drilldown navigation (5)**. Tapping a relevant **Nav Bar item (2)** triggers the drilldown to **third-level navigation (3a)**, which is displayed as a list — mirroring the structure of the desktop Sidebar.
1. **Utility Menu Items** On mobile and tablet devices, Utility Menu Items do not open as popovers. Instead, they either open as dialogs (e.g., for language selection) or redirect to a full page (e.g., for login or profile), depending on the use case.

The **Mobile Menu (4)** can be accessed by tapping the **Menu Action Item (4a)**. Detailed documentation is available [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557).

![Top Bar Items + Nav Bar Items + Sidebar Menu Items + Utility Menu Items (Optional)](navigation/top-bar-items-nav-bar-items-sidebar-menu-items-utility-menu--7391-43896.png)

## Action Item

**Overview:**

- The Action Item is a versatile navigation component used across various parts of the interface to trigger actions or guide users through the application. It can behave as either a link (navigating to a page) or a button (opening menus or dialogs), depending on the use case.
- Common use cases:
   - **Action Item used inTop Bar:** for global tools like Login, Wishlist, or Language Selector
   - **Action Item used in Dropdown Menu, Mega Menu, and Mobile Menu:** for accessing nested navigation
   - **Action Item used in Sidebar Menu** for structured, hierarchical navigation within applications
- Key features:
   - Supports both link and button behavior depending on context
   - Can display active states to reflect the user’s current location
   - Allows indentation for nested or hierarchical navigation structures
   - Consistent styling and spacing across platforms for clarity and usability
   - Optional indicators include icons, chevrons, badges, or count indicators where needed

> **Development Status:** In code, this component appears under Buttons as “Action Button” and under Links as “Action Link.” In Figma, it is maintained as a single element called Action Item to keep things simple, as the visual differences between the button and link variants are minimal. Splitting them into two separate design components isn’t necessary.

![Action Item](navigation/action-item-6307-72264.png)

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-buttons-action-button--documentation)

### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Mega Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-87264)

[Dropdown Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-85690)

[Sidebar Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-79899)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

[Motion Design](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Action Item: Formatting and Construction

### Anatomy

The Action Item component comes in two main variants:

1. **Horizontal**
1. **Vertical**

While both share a similar structure, they serve different use cases and include slight variations in composition.

![Anatomy](navigation/anatomy-7366-48734.png)

#### Horizontal Variant

The horizontal variant is commonly used in **menus and sidebars (expanded)**. It includes the following elements:

1. **Label** Can appear in bold or regular weight.
1. **Leading element (optional)** Can be an icon or an image.
1. **Chevron (conditional)** A chevron icon should be used to indicate a menu or drill-down action.
1. **Number indicator (optional)** Can be minimized or used to display a number (e.g. unread count).

![Horizontal Variant](navigation/horizontal-variant-7313-34144.png)

#### Vertical Variant

The vertical variant is typically used in the **top bar or the collapsed view of a sidebar**. It includes the following elements:

1. **Label** One style only (no bold/regular variations).
1. **Leading element (required)** Icon only (images are not supported).
1. **Chevron (conditional)** A chevron icon should be used to indicate a menu or drill-down action.
1. **Number indicator (optional)** Can be be used minimized or to display a number.

![Vertical Variant](navigation/vertical-variant-7362-35025.png)

### Alignment

#### Indent

The **horizontal Action Item** supports an indented variant that shifts the component to the right, visually indicating nested or subordinate items in a menu or list.

Use indentation only when representing a clear **content hierarchy**:

1. **No Indent** Use for standalone pages with no hierarchical relationship.
1. **Indent** Use when grouping related pages under a shared parent (e.g., dashboards or multi-level tools).

![Indent](navigation/indent-7317-34865.png)

#### Figma Component Handling

In the current Figma setup, the text box displaying the file name is set to **“Hug Content”** by default. If the layout exceeds the component boundary, the layout must be **manually adjusted** by switching the text box to **“Fill Container”** to allow for proper overflow handling.

![Figma Component Handling](navigation/figma-component-handling-7376-40138.png)

## Action Item: Content and Assets

### Maximum character for labels

To maintain clarity and consistency across layouts, label text should follow these character count guidelines:

- **Horizontal Variant:** Aim to keep label text **between 20–25 characters** whenever possible. This ensures readability while accommodating various menu and sidebar layouts.
- **Vertical Variant:** Maximum label length is **20 characters**. This helps optimize space within the Top Bar and the collapsed Sidebar view.

![Maximum character for labels](navigation/maximum-character-for-labels-7362-33347.png)

### Overflow is not permitted

**Overflow must not occur** in Action Items. Label text must fit within the component’s layout without causing clipping, wrapping, or horizontal scrolling.

![Overflow is not permitted](navigation/overflow-is-not-permitted-7376-38507.png)

### Chevron Icon Usage

When the Action Item functions as a button that triggers a Utility Menu, a chevron icon should be included to clearly indicate this behavior.

![Chevron Icon Usage](navigation/chevron-icon-usage-7362-33373.png)

### Chevron Direction

The direction of the chevron icon indicates the type of interaction:

1. **Chevron Down** Used in **Vertical Action Items** (e.g., Top Bar), to indicate that clicking will open a Dropdown Menu.
1. **Chevron Right** Used in **Horizontal Action Items** (e.g., Mega Menu, Mobile Menu), such as in Mega Menus, to indicate a drill-down into a second-level menu or sub-navigation.

**Tip:** Always align chevron direction with the navigation pattern to ensure intuitive user behavior.

![Chevron Direction](navigation/chevron-direction-7376-46450.png)

## Action Item: Examples

### Dropdown Usage (Top Bar & Utility Menu)

In the STIHL Webshop, both Action Item variants are used to support different navigation contexts:

1. **Vertical Action Items** Located in the Top Bar, they provide quick access to high-priority user tools and navigation points — such as Wishlist, Cart, or Login. This layout supports compact design and icon-first orientation for smaller viewports.
1. **Horizontal Action Items** Found inside the Utility Menu, these items allow deeper navigation within categories. Their layout includes optional icons, labels, and chevrons to indicate further interaction.

![Dropdown Usage (Top Bar & Utility Menu)](navigation/dropdown-usage-top-bar-utility-menu-7374-36307.png)

### Sidebar

In the Connected mockup, Action Items are integrated into the Sidebar to create a clear, structured navigation system. This demonstrates how the Horizontal variant can be used effectively to reflect hierarchy and interaction within a sidebar layout.

![Sidebar](navigation/sidebar-7374-36347.png)

## Text Component

**Overview:**

- The Text component provides styled typographic elements used to structure and label navigation content. It helps create clear visual groupings and improve hierarchy within menus and sidebars.
- The Text component is available in three predefined styles:
   - **Main Title:** A prominent label used for top-level sections
   - **Group Title:** A mid-level label for grouped Action Items
   - **Text Plain:** A smaller, neutral style for general informational or descriptive text

> **Development Status:** This component currently exists only in Figma and has not yet been implemented as a specific component for navigation elements in code.

![Text Component](navigation/text-component-6307-72399.png)

### Related elements

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7158-32869)

[Mega Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-87264)

[Sidebar Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-79899)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Mobile Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-64557)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Text Component: Formatting and Construction

### Anatomy

#### Elements

The Text Component comes in three variants, each serving a different hierarchical or informational purpose:

1. **Main Title** A prominent label used to define top-level sections.
1. **Group Title** A mid-level label used to group related items.
1. **Text** A smaller, neutral-style label used for general information or descriptions.

![Elements](navigation/elements-7376-42279.png)

#### Padding

The Text Component includes consistent padding on all sides, aligned with the spacing of Action Items to ensure visual harmony across navigational components.

![Padding](navigation/padding-7376-44164.png)

## Text Component: Content and Assets

### Avoid Line Break

**Line break should be avoided** to maintain a clean and readable layout. If the text exceeds the available space, it will wrap to the next line rather than being truncated. **Recommendation:** Keep text concise to preserve structure and visual clarity within navigation components.

![Avoid Line Break](navigation/avoid-line-break-7376-44351.png)

## Text Component: Examples

### Dropdown / Utility menu

1. **Group Title Variant** The Group Title variant, combined with a divider, is used to organize content into clearly defined sections.
1. **Text Variant** The Text variant is used to display contextual details — such as the current version of the app.

![Dropdown / Utility menu](navigation/dropdown-utility-menu-7376-45148.png)

### Sidebar

In the STIHL Connected mockup, the **Group Title (1)** is used to organize different sections of the navigation.

![Sidebar](navigation/sidebar-7376-45154.png)

### Mega Menu

In the Mega Menu, the **Main Title (1)** is used to indicate the current category or top-level section the user is viewing.

This helps users orient themselves within the broader information architecture.

![Mega Menu](navigation/mega-menu-7376-45509.png)

## Mobile Menu

**Overview:**

- The Mobile Menu is accessed by tapping the “burger” icon (three horizontal lines) commonly found in the top right corner of the screen.
- Its primary function is to offer a space-efficient and intuitive way to access navigation elements on smaller devices.
- The menu can include both Action Items (e.g., Login) and Button Nav Items.
- There are two main variants:
   - **Drilldown Menu:** Navigates users deeper into nested levels, showing one level at a time.
   - **List Menu:** Allows users to expand or collapse submenus while staying on the same view.
- The Mobile Menu is based on the [Drawer component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=16282-9317) from the Core Component Library and inherits its defined guidelines and behaviours

> **Development Status:** This pattern currently exists only in Figma and is not implemented as a standalone component in code. In development, it can be built by using the existing Drawer component, featuring a customizable container for navigation elements such as Action Items.

![Mobile Menu](navigation/mobile-menu-6263-59296.png)

### Related elements

[Top Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6576-38939)

[Nav Bar](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-59828)

[Mega Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-87264)

[Dropdown Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-85690)

[Sidebar Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-79899)

[Action Item](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-73372)

[Text Component](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6583-74332)

[Button Nav](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=34553-28432&t=3sTzEA7VPrbAfAzB-4)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Mobile Menu: Formatting and Construction

### Anatomy

#### Variants

The Mobile Menu supports two distinct variants, each suited to different navigation structures:

1. **Drilldown Variant** This version reveals secondary navigation layers by "drilling down" into the next view. When a top-level item is tapped, the menu transitions to a new screen showing the sub-navigation.
1. **List Variant** This version displays secondary navigation layers using accordions directly beneath the parent item.

> **Note:** The two variants can be used independently or together to accommodate more complex navigation structures. (See details below.)

![Variants](navigation/variants-7408-38652.png)

#### Drilldown Variant – Elements

The Drilldown version of the Mobile Burger Menu includes the following elements:

1. **Close Button** Allows users to exit the menu and return to the main content.
1. **Button Nav** Represents top-level navigation options within the menu.
1. **Action Item (Top Bar)** Elements that are shown in the Top Bar on desktop.
1. **Back Button** Enables users to navigate back to the previous level in the menu hierarchy.
1. **Text (Main Title Variant)** Used to label sections clearly and provide structure within the drilldown flow.
1. **Action Item** They can link to pages or open a 3rd level drilldown.

![Drilldown Variant – Elements](navigation/drilldown-variant-elements-7408-38663.png)

#### List Variant – Elements

The List Variant of the Mobile Burger Menu displays expandable sections using accordions, making it suitable for both **first-level and secondary-level** navigation.

Included Elements:

1. **Close Button** Allows users to exit the menu and return to the main content.
1. **Text (Group Title and Main Title Variant)** Used to label sections within the menu and organize related items.
1. **Accordion** Expandable container that reveal grouped Action Items upon interaction.
1. **Action Items** Interactive elements that lead to pages or perform actions.
1. **Dividers** Provide visual spacing and distinction between sections.
1. **Back Button** (If used on a secondary layer) Allows users to navigate back to the previous menu level.

![List Variant – Elements](navigation/list-variant-elements-7408-38680.png)

#### Combined Drilldown and List Variant

This approach blends both variants — for example, using Drilldown at the first level and List at the second.

![Combined Drilldown and List Variant](navigation/combined-drilldown-and-list-variant-7827-42668.png)

### Sizing

#### Min. & Max. Size

Although the Mobile Menu is built on the core Drawer component, its minimum and maximum widths have been customized to better support navigation and interaction patterns across different screen sizes.

1. **On breakpoint s** The menu spans the full width of the viewport, **minus a 32px safe zone**, up to a **maximum width of 328px**. This approach maximizes available screen space while preserving space for essential system UI elements.
1. **On breakpoint m** The menu has a **fixed width of 328px** for both its minimum and maximum values, ensuring a consistent and well-structured layout on tablets.

![Min. & Max. Size](navigation/min-max-size-8004-42312.png)

## Mobile Menu: Content and Assets – Drilldown

### Alignment and overflow

When both Nav Bar and Top Bar elements are included in the Drilldown Variant of the Mobile Menu, they are positioned as follows:

1. **Nav Bar Buttons** Positioned at the top of the drawer.
1. **Top Bar Action Items** Positioned at the bottom of the drawer.
1. **Spacing and Overflow Handling**
   1. A **minimum vertical spacing of 40px** is maintained between the two groups.
   1. If content exceeds the screen height, this **spacing is reduced as needed**, and the menu becomes scrollable to accommodate **overflow**.

![Alignment and overflow](navigation/alignment-and-overflow-7408-39983.png)

### Chevrons / Drilldowns

To indicate that a menu item leads to a deeper navigation level via drilldown, use a **right-pointing chevron**. This visually signals that selecting the item will transition the user to a sub-level within the menu.

![Chevrons / Drilldowns](navigation/chevrons-drilldowns-7408-40850.png)

### Back Button

When the user navigates to a secondary or deeper level within the drilldown menu, a **Back Button (1)** appears in the drawer header.

This button allows users to return to the previous level in the navigation hierarchy.

It’s important to use a clear, descriptive label — rather than a generic “Back” — so users always understand where they’re going.

![Back Button](navigation/back-button-7408-41024.png)

## Mobile Menu: Examples

### STIHL Webshop

An example of how a Mega Navigation is adapted for mobile. Detailed breakdown of the behavior can be found in the [Mega Menu Documentation](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6924-85777)

![STIHL Webshop](navigation/stihl-webshop-7408-40310.png)

### STIHL Corporate

An example of how a Dropdown Navigation is adapted for mobile. Detailed breakdown of the behavior can be found in the [Dropdown Menu Documentation](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6924-87854)

![STIHL Corporate](navigation/stihl-corporate-7430-42921.png)

### STIHL Connected

An example of how a Sidebar Navigation is adapted for mobile. Detailed breakdown of the behavior can be found in the [Sidedar Menu Documentation](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=6938-104456)

![STIHL Connected](navigation/stihl-connected-7430-43207.png)
