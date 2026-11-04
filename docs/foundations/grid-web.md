---
id: grid-web
title: "Grid Styles: Web"
category: foundation
keywords:
  - grid
  - layout
  - columns
  - breakpoints
  - content placement
  - web
figmaFile: Grid & Spacing
figmaProject: 01. Fundamentals
figmaFileKey: JyyYtoCYbtJrzqHs38OXSQ
figmaNodeId: 1:132
figmaVersion: "2315997626726619921"
figmaVersionLabel: DS-1185 Docu | Global | Add Connected Contact to the disclaimer of Sidebar Grid
figmaVersionCreatedAt: 2026-02-02T16:02:45Z
syncedAt: 2026-11-04T14:14:00.985Z
sourceUrl: https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ?node-id=1-132
---

# Grid Styles: Web

## Grid Web

Overview

- There are two grid types:
   - A center-aligned grid (without Sidebar Menu)
   - A grid with Sidebar Menu (see below)
- The grid expands with the viewport and stops growing beyond 1536px.
- Content areas define where modules and content can be placed within the grid.
- Each module must define its own maximum text width.

![Grid Web](grid-web/grid-web-1-236.png)

_Figure: The Grid Web layout system with four breakpoints: Breakpoint S, Breakpoint M, Breakpoint L, and Breakpoint XL. Each breakpoint specifies the most used screen size, the range of screen sizes it applies to, the usage context, gutter width, margin, and number of columns. Breakpoint S is for mobile devices with a most used screen size of 360px, a range of 320-767px, a gutter of 16px, a margin of 24px, and 8 columns. Breakpoint M is for tablets with a most used screen size of 768px, a range of 768-1023px, a gutter of 24px, a margin of 36px, and 12 columns. Breakpoint L is for small desktops with a most used screen size of 1024px, a range of 1024-1535px, a gutter of 24px, a margin of 50px..._

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Margins** Margins separate the grid from the left and right edges. Their widths change depending on the breakpoint.
1. **Columns** Columns define the areas where the content will be placed. The column widths change with the size of the grid. The number of columns are affected by the breakpoint.
1. **Gutters** Gutters are fixed spaces between columns which help to separate the content. Their widths are fixed within each breakpoint range.
1. **Sidebar closed** Space for a main sidebar that has been closed. The width of the closed sidebar is fixed.
1. **Sidebar open** Space for a main sidebar that is open. The width of the open sidebar is fixed

![Anatomy](grid-web/anatomy-1-623.png)

_Figure: The layout of a grid system with various components and their measurements. Callout 1 points to the margin on the left edge of the grid, callout 2 points to a column, callout 3 points to a gutter, callout 4 points to a closed sidebar, and callout 5 points to an open sidebar. Margins separate the grid from the edges and change with breakpoints, columns define content areas and vary in width, gutters are fixed spaces between columns, and sidebars have fixed widths when open or closed._

### Grid types

#### Web Grid

The default grid for all use cases, providing a responsive, center-aligned layout that expands up to 1536px.

![Web Grid](grid-web/web-grid-1-680.png)

_Figure: The Web Grid, which is a responsive, center-aligned layout used for all use cases in the STIHL Design System. This grid expands up to 1536 pixels in width and features alternating pink and white vertical stripes to visually represent the grid columns. The pink stripes indicate the column boundaries, while the white stripes represent the column content areas._

#### Web Grid Sidebar

Used only in combination with a Sidebar Menu, this responsive grid reserves space for a left-aligned sidebar while following the same margins and gutters as the Web Grid.

![Web Grid Sidebar](grid-web/web-grid-sidebar-1-702.png)

_Figure: The Web Grid Sidebar layout, which is used in conjunction with a Sidebar Menu. This layout reserves space for a left-aligned sidebar and maintains consistent margins and gutters as specified in the Web Grid. The image shows a light blue area representing the sidebar space, followed by a series of alternating pink and white vertical stripes indicating the main content area._

### ⚠️ Avoiding decimal pixel values

**Margins and Gutters** The Web Grid Sidebar uses the same margins and gutters as the Web Grid, with one exception:

- **Figma:** Right margin is set to 58px (L) and 72px (XL) to avoid decimal column widths, since Figma does not support stretching columns with Sidebar Menus.
- **Code:** Right margin will be set to the intended 50px (L) and 64px (XL).

![⚠️ Avoiding decimal pixel values](grid-web/avoiding-decimal-pixel-values-1-723.png)

_Figure: A web grid layout with a sidebar, highlighting the use of margins and gutters. The measurement labeled 50px refers to the intended right margin in the code for the large (L) variant. The text "58px (instead of 50px)" indicates that in Figma, the right margin is set to 58px to avoid decimal column widths, which Figma does not support when stretching columns with sidebar menus._

### Responsive behavior

#### Responsive columns, fixed margins and gutters

The grid adapts fluidly to the viewport: margins and gutters stay fixed at defined breakpoints, while columns expand to fill the available space.

![Responsive columns, fixed margins and gutters](grid-web/responsive-columns-fixed-margins-and-gutters-1-778.png)

_Figure: A responsive grid layout for web design. It shows columns that expand to fill the available space while margins and gutters remain fixed at defined breakpoints. The grid includes six columns with consistent margins and gutters between them, all within a container that adjusts fluidly to the viewport size._

#### Grid widths

1. **Web Grid** Expands with the viewport up to a maximum width of 1408px
1. **Web Grid Sidebar** Expands to the full viewport width

![Grid widths](grid-web/grid-widths-1-810.png)

_Figure: Two grid layouts for a web design system. Callout 1 points to a grid with a maximum width of 1408px, indicating that it expands with the viewport up to this limit. Callout 2 points to a grid that expands to the full viewport width._

## Grid Web: Content Placement

### Content areas

These areas define how content and modules can be placed within the grid:

1. **Full** Spans the entire screen width. Commonly used for top bars, footers, or full-bleed sections.
1. **Extended** Spans the full width of the screen but stops expanding beyond 1920px. Ideal for visually prominent elements such as hero sections or wide teasers.
1. **Main** Aligns with the central grid columns, excluding outer margins. Typically used for core content like teasers.
1. **Halves, thirds and quarters** Divides the grid into proportional segments, allowing for flexible layouts of content like teasers.
1. **Narrow** Uses a limited number of columns to constrain content width. Enhances readability for elements such as text blocks, accordions, forms, and images by reducing horizontal eye movement.

![Content areas](grid-web/content-areas-1-866.png)

_Figure: The layout of content areas within a grid system across four breakpoints: Breakpoint S, Breakpoint M, Breakpoint L, and Breakpoint XL. Each breakpoint specifies different screen sizes, with Breakpoint S ranging from a minimum of 320px to a maximum of 767px, Breakpoint M from 768px to 1023px, Breakpoint L from 1024px to 1535px, and Breakpoint XL starting at 1536px and shown at an example size of 2560px. The content areas include Full, Extended, Main, halves, thirds, and quarters, demonstrating how content can be arranged within these grid constraints._

### Text behavior within the gird / content areas

To maintain optimal readability, text should not exceed 80 characters per line. It is recommended to set **the maximum text width to 34em**, which corresponds to 34 times the used font size. This maximum width should be defined within each module.

[Further Guidelines: Typography and Text width →](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515)

[Further reading on Baymard Insitute →](https://baymard.com/blog/line-length-readability)

![Text behavior within the gird / content areas](grid-web/text-behavior-within-the-gird-content-areas-3568-16519.png)

_Figure: Text behavior within grid content areas, showing a block of text with a maximum width of 34em based on the font size. The measurement of 34em refers to the recommended maximum text width to ensure optimal readability, which corresponds to 34 times the used font size. The text within the figure demonstrates how text should be laid out to not exceed 80 characters per line._

#### Maximum Width within Content Areas

When text elements are placed inside Content Areas, the following rules apply:

1. **If the container width is smaller than the calculated max text width** → the container width is used.
1. **If the container width is larger than the calculated max text width** → the text is capped at its maximum allowed width.

This ensures text always respects both layout constraints and optimal readability, whether it's in a card, column, or larger content block.

[Further Guidelines: Typography and Text width →](https://www.figma.com/design/pQUiJaNuWrGzPaeMrEHf6N/DS-1117-Design-%7C-34em?node-id=2645-515)

![Maximum Width within Content Areas](grid-web/maximum-width-within-content-areas-3568-16534.png)

_Figure: The application of maximum text width within content areas for two different viewport widths: 1024px and 1440px. Callout 1 points to a viewport of 1024px where the container width is smaller than the maximum text width, so the container width is used. Callout 2 points to a viewport of 1440px where the container width is larger than the maximum text width, so the text is capped at its maximum allowed width to ensure optimal readability._

## Grid Web: Content Placement Examples

### Disclaimer

The screens and UI elements presented in this documentation serve as examples to illustrate how various modules could behave within different content areas.

This documentation is intended for reference purposes only and should not be considered a definitive representation of the final product.

**Breakpoint S**

**Breakpoint M**

**Breakpoint L**

**Breakpoint XL**

**Min. 320px**

**Most used 360px**

**Max. 767px**

**Min. 768px / most used size**

**Max. 1023px**

**Min. 1024px / most used size**

**Max. 1535px**

**Min. 1536px**

**Example 1920px**

**Example 2560px**

**Example 3242px**

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**big artificial**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**Innovation velit support**

**Big sint efficiency dolore amet**

**Infrastructure voluptate elit amet ex ecosystem**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

**Dynamic Spacing**

**big artificial**

**48px**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**120px**

**Profi Akkuberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**Ketten- und Schienenberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**STIHL Schneidwerkzeugberater**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices.

**120px**

**big artificial**

**48px**

**Analytics scalability making training infrastructure**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**48px**

**Der Beste seiner Klasse: STIHL AP 500 S**

Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu sollicitudin id egestas sed tincidunt. Amet pulvinar tellus lacus vehicula sit ultrices. Eu leo sit duis blandit. Volutpat amet amet augue ipsum eu felis sit. Cursus sit odio porttitor convallis venenatis faucibus neque massa porttitor.

**120px**

**Innovation velit support**

**56px**

**Big sint efficiency dolore amet**

**48px**

**120px**

**Infrastructure voluptate elit amet ex ecosystem**

**Dynamic Spacing**

**Dynamic Spacing**

Lorem ipsum dolor sit amet consectetur. Consequat facilisis mi dignissim feugiat dictumst aliquam porttitor nunc. Duis risus consequat consequat vitae ut sed at. Hac et et egestas sit. Egestas nulla sed vitae sit nunc blandit felis nunc tristique. Venenatis nibh ultrices mi et placerat massa quam lobortis maecenas.

Pellentesque varius parturient purus condimentum pellentesque odio nunc velit senectus. Augue tempor risus a nulla tellus rhoncus. Convallis ullamcorper fermentum dolor ultrices quam dui ullamcorper. Ut fames ut varius quis eget viverra a. Purus consequat quis integer amet semper habitasse. At fusce tincidunt pulvinar nunc ipsum gravida. A aliquet eu imperdiet eu id amet.

Nunc phasellus viverra vulputate magna euismod bibendum. Et tincidunt tortor laoreet feugiat sed hac lacus nisl. Sit pellentesque proin nibh amet felis. Id libero at mollis neque est faucibus ut vel. Mattis viverra orci semper aliquet donec sapien et. Urna pharetra et laoreet tortor at cras ornare diam orci.

**Dynamic Spacing**

Fieldset Legend Default Style

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget.

## Grid Web Sidebar

- Overview
   - There are two grid types:
      - A center-aligned grid (without Sidebar Menu)
      - A grid with Sidebar Menu
   - The Grid Web Sidebar is always used in combination with the Sidebar Menu.
   - The grid expands with the viewport, using the same margins and gutters as the regular Web Grid.
   - It provides space for a left-aligned Sidebar Menu, which can be open or collapsed.

[→ See the Sidebar Menu component](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=6583-79899&t=HHn6c4dcDRzZzOMP-4)

![Grid Web Sidebar](grid-web/grid-web-sidebar-1-346.png)

_Figure: The Grid Web Sidebar, highlighting two grid types: a center-aligned grid and a grid with a Sidebar Menu. It details four breakpoints (S, M, L, XL) with specific measurements for gutters, margins, and columns, indicating their usage contexts such as mobile, tablet, and desktop. The callout explains the difference in the right margin between Figma and code, noting that in Figma, the right margin with the Sidebar Menu open is 220px, while in code, it is 256px. The warning notification indicates that there are steps to keep the column sizes and gutters consistent across different breakpoints._

### Contribute

Contribute to improving these styles by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Grid Web Sidebar: Content Placement

### Content Areas

#### No content areas for Web Grid Sidebar

The Web Grid Sidebar **does not** define fixed content areas, since its use cases differ from the standard Web Grid. In combination with Sidebar Menus, layouts are often more complex—supporting dashboards, tables, and information-dense screens. Defining rigid content areas here would reduce flexibility without adding real value.

Instead, the Web Grid Sidebar allows content to be placed more freely.

An emerging pattern in this context is the Split View (see below for details).

> **Disclaimer** There aren’t many use cases available at the moment, so we’re working with some assumptions. Once the Grid has been tested by different teams and we’ve gathered feedback on their experience and satisfaction, we’ll evaluate whether adjustments are needed (e.g., margin and gutter widths). If **your project** includes a sidebar layout, please reach out to the Design System Team to check whether there has been recent progress or existing solutions. Some teams, e.g. Connected Web Portal, have already explored and tested sidebar implementations, and we encourage sharing experiences and insights to ensure the Grid continues to evolve based on collective feedback and real use cases. **Please note** that the use case examples shown here incorporate the new navigation concept and do not reflect the product’s current state.

![No content areas for Web Grid Sidebar](grid-web/no-content-areas-for-web-grid-sidebar-3493-8254.png)

_Figure: A UI design system with a top-bar in the full variant for the xl breakpoint, including a brand add-on and one numbered area. The sidebar-menu is expandable and does not have overflow. The layout includes a sidebar with various menu items such as "Fleet Management", "Equipment", "Connected Hub", "Energy Evaluation", "Organization", "Contact", and "Legal Information". The main content area shows a detailed view of an equipment item with a map, condition status, and runtime information. The sidebar-menu includes items like "Connected", "STIHL World", and "MM" at the top. The design allows for flexible content placement without predefined content areas..._

### Split View

#### Concept

Split View is a layout pattern that divides the screen into two areas:

1. **Primary area** for navigation or selection (e.g., a list or table)
1. **Secondary area** for displaying details of the selected item.

This pattern is especially useful for dashboards, data-heavy screens, and workflows where users need to browse and view details side by side.

![Concept](grid-web/concept-3493-8367.png)

_Figure: The Split View layout pattern, which divides the screen into two areas: a primary area for navigation or selection on the left and a secondary area for displaying details of the selected item on the right. Callout 1 points to the sidebar-menu\_expandable component, which includes options like Fleet Management, Organization, and Contact. Callout 2 points to the detailed view area showing information about an item labeled "001 PLACEHOLDER" with its condition, location, and maintenance details. The top-bar component is in the full variant with a brand add-on and includes the text "Connected" and "STIHL World"._

#### Split View in the Web Grid Sidebar

There are two ways to create a Split View inside a layout:

1. **Within the grid**
   - Columns are divided between the primary and secondary areas (e.g., 4 columns for the primary area, 12 for the secondary).
   - These columns scale dynamically at different breakpoints, since they are set to stretch.
1. **Through panes**
   - Instead of columns, the layout is divided into two areas while maintaining margins and gutters.
   - One area (e.g., the left pane) can be fixed and remain the same across all breakpoints, while the secondary area expands with the viewport.
   - Panes are not provided as a separate grid. For more information, see the [Material Design Guidelines](https://m3.material.io/foundations/layout/applying-layout/pane-layouts).

![Split View in the Web Grid Sidebar](grid-web/split-view-in-the-web-grid-sidebar-3497-8037.png)

_Figure: Two ways to create a Split View in a web grid sidebar using the STIHL Design System. The first callout shows a layout where both the primary and secondary areas are dynamic, scaling with different breakpoints. The second callout depicts a layout where the primary area is fixed and the secondary area is dynamic, expanding with the viewport. The components include a top-bar with a full variant, a brand add-on, and one numbered area, along with a sidebar-menu\_expandable without overflow. The annotations highlight the differences in how the grid columns and panes are divided and scaled._

## Grid Web Sidebar: Content Placement Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**STIHL Service Communication (SSC)**

Internal tool for quickly finding spare parts and relevant information for STIHL products, primarily used by official dealers and customer service teams.

The sidebar provides fast access to categories and search functions, supporting a high-frequency workflow.

![Grid Web Sidebar: Content Placement Examples](grid-web/grid-web-sidebar-content-placement-examples-3526-10591.png)

_Figure: A web interface of the STIHL Service Communication tool, featuring a sidebar with various action items and a main content area. The sidebar includes components like action-item labels such as Parts Lists, Documents, Repair Times, Service Packages, and Special Tools, each with specific states and indicators. The top-bar includes a search function and navigation links like Catalogue, Bar & Chain Finders, Utilities, and Support News. The main content area shows a grid of assemblies for the MS 180 product, with categories like Muffler, Rewind Starter, and Carburetor. The layout is designed for quick access to categories and search functions, supporting a high-frequency workflow._

**Connected Portal**

A logged-in user portal designed to navigate between tools and manage STIHL products. The sidebar supports quick orientation and task switching.

![Grid Web Sidebar: Content Placement Examples](grid-web/grid-web-sidebar-content-placement-examples-3526-10736.png)

_Figure: A web interface of the Connected Portal, featuring a top-bar with the variant full, breakpoint xl, and a brand add-on. The sidebar-menu\_expandable is shown without overflow, containing navigation items such as Fleet Management, Equipment, Connected Hub, and Energy Evaluation. The sidebar supports quick orientation and task switching, with sections like Organization, Teams, Employees, and settings for organization and maintenance. The main content area lists equipment details including nickname, model, category, drive, and serial number._
