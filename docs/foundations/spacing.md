---
id: spacing
title: Spacing Styles
category: foundation
keywords:
  - spacing
  - tokens
  - padding
  - margin
  - gap
figmaFile: Grid & Spacing
figmaProject: 01. Fundamentals
figmaFileKey: JyyYtoCYbtJrzqHs38OXSQ
figmaNodeId: 1:1253
figmaVersion: "2315997626726619921"
figmaVersionLabel: DS-1185 Docu | Global | Add Connected Contact to the disclaimer of Sidebar Grid
figmaVersionCreatedAt: 2026-02-02T16:02:45Z
syncedAt: 2026-11-05T21:31:47.586Z
sourceUrl: https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ?node-id=1-1253
---

# Spacing Styles

## Spacing overview

Spacing refers to distance between elements within a layout, also known as whitespace.

Consistent spacings are essential for organizing content, establishing a clear visual hierarchy, and guiding users effectively, all while ensuring a cohesive experience across digital products.

### Spacing system

Our spacing system uses 8px as a base unit - meaning that each spacing value is a multiple of this base unit. The defined spacings range from 0px to 160px, allowing for maximum flexibility.

![Spacing system](spacing/spacing-system-2-2086.png)

_Figure: A horizontal ruler on a light blue band with a long tick every 8px and shorter ticks between them, labelled 0, 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 72px, 80px, 88px, 96px and 104px, showing that spacing values are multiples of the 8px base unit._

## Spacing: Token System

Tokens contain raw design values and embed design intent, helping to create a consistent and cohesive system.

### Spacing token layers

We categorize spacing tokens into four layers, starting with general numerical values and progressing to component-specific references:

**Values** refer to a raw pixel unit.

**Core Tokens** store the raw pixel units.

**Semantic Tokens** reference core tokens. The name suggests the token’s general intent.

**Component Tokens** define the specific context of use, allowing for more precise references. ⚠️ For now we don’t use component tokens.

![Spacing token layers](spacing/spacing-token-layers-2-1975.png)

_Figure: Four stacked boxes with a downward purple arrow labelled specificity, meaning specificity increases from top to bottom. Each box is linked by a line to an example: Values is 8px, Core Tokens is spacing-8, Semantic Tokens is spacing-dynamic-m, and Component Tokens, shown in a lighter greyed style because they are not used for now, is padding-between-buttons._

### Spacing token syntax structure

Our general token syntax structure combines three main areas. Relevant for spacings are the following:

**Namspace** levels combine any of the following: system, theme or domain.

**Type** refers to the property such as “spacing”.

**Modifier** refers to variants and scales.

![Spacing token syntax structure](spacing/spacing-token-syntax-structure-2-2012.png)

_Figure: Diagram of the token syntax with three column groups: Namespace (system, i.e. name, acronym; (theme), i.e. subbrand; (domain), i.e. web, app), Type (category, i.e. background, content, border; property, i.e. spacing; concept, i.e. feedback, interaction) and Modifiers (variant, i.e. primary, dynamic; state, i.e. hover, disabled; scale, i.e. numbers, t-shirt sizes; mode, i.e. ondark, onorange). The legend marks basic parts as bold, optional parts in parentheses and parts not relevant for spacing as greyed out, so category, concept, state and mode are greyed. Below, the example token $ds-subbrand-web-spacing-dynamic-m is annotated: system is ds, theme is subbrand, domain is web, property is spacing, variant is dynamic and scale is m._

### Variables handover

The Figma plugin “variables2json” is used to export the Figma variables to a json file.

![Variables handover](spacing/variables-handover-2-2071.png)

_Figure: Screenshot of the Figma plugin "variables2json" on a dark panel with the tabs Variables (active), Composites and Settings. Below a toolbar with expand and collapse icons and a list/JSON view toggle, the collapsed groups are Colors with 82 items, Numbers with 0 items, Strings with 0 items and Booleans with 0 items._

## Spacing: Core Tokens

Core tokens correspond directly to raw pixel values, with each token’s name indicating its specific pixel value. For example, a token named spacing-2 represents a spacing of 2 pixels.

These tokens are intended as static spacings that stay consistent across all screen sizes.

> Use only the provided tokens and avoid any other spacing values.

> The new spacing tokens ‘spacing-0’ and ‘spacing-56’ have not been added to the Figma components yet.

![Spacing: Core Tokens](spacing/spacing-core-tokens-2-1913.png)

_Figure: Table of the spacing core tokens with the columns Name, Value and Example, where each example is a light blue square of the token's pixel size. The rows are spacing-0 (0px), spacing-2 (2px), spacing-4 (4px), spacing-6 (6px), spacing-8 (8px), spacing-12 (12px), spacing-16 (16px), spacing-20 (20px), spacing-24 (24px), spacing-32 (32px), spacing-40 (40px), spacing-48 (48px), spacing-56 (56px), spacing-64 (64px), spacing-80 (80px), spacing-96 (96px), spacing-128 (128px) and spacing-160 (160px), with spacing-0 showing no square._

### Contribute

Contribute to improving these variables by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Spacing: Semantic Tokens

Semantic tokens are based on core tokens, with names that indicate their intended purpose.

In our system, these tokens provide dynamic spacings that adapt according to breakpoints.

> Use only the provided tokens and avoid any other spacing values.

> These spacing tokens have not been added to the Figma components yet.

![Spacing: Semantic Tokens](spacing/spacing-semantic-tokens-2-1944.png)

_Figure: Table of the semantic spacing tokens with one column per breakpoint (Breakpoint S: 320px, Breakpoint M: 768px, Breakpoint L: 1024px, Breakpoint XL: 1536px, Breakpoint XXL: 1668px), each cell showing a square and the core token it links to. spacing-dynamic-xs maps to spacing-16, spacing-24, spacing-24, spacing-32, spacing-32; spacing-dynamic-s to spacing-24, spacing-32, spacing-32, spacing-40, spacing-40; spacing-dynamic-m to spacing-32, spacing-40, spacing-40, spacing-48, spacing-48; spacing-dynamic-l to spacing-40, spacing-48, spacing-48, spacing-56, spacing-56; spacing-dynamic-xl to spacing-56, spacing-64, spacing-64, spacing-80, spacing-80; spacing-dynamic-xxl to spacing-80, spacing-96, spacing-96, spacing-128, spacing-128. A yellow warning box at the right says the breakpoint XXL isn't included in Figma Variables because the current license permits a maximum of four modes, and asks to reach out if this breakpoint is used more frequently than the others._

### Contribute

Contribute to improving these variables by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Spacing usage

### Core Tokens (Static spacings)

These tokens are intended as static spacings that stay consistent across all screen sizes. Different scenarios require different spacings to achieve optimal results. We can break them down in roughly three usage ranges:

**Small**

**(**

spacing-2

**-**

spacing-8

**)**

Used for small and compact elements:

- Padding within smaller components (i.e. small buttons)
- Vertical and horizontal spacing between elements inside a component (i.e. between labels and elements)

![Core Tokens (Static spacings)](spacing/core-tokens-static-spacings-2-5166.png)

_Figure: Three small components with light purple overlays marking static core spacings: a Button with the overlay on its top and bottom padding, a Checkbox Label with the overlay on the gap between the checkbox and its label, and an input with a Label and the hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit." with overlays on the gap between label and hint and on the gap between hint and input field._

**Medium**

**(**

spacing-12

**-**

spacing-24

**)**

Used for larger and less dense elements:

- Padding within bigger components and modules (i.e. toasts)
- Vertical and horizontal spacing between elements inside a component or pattern (i.e. fieldsets)

![Core Tokens (Static spacings)](spacing/core-tokens-static-spacings-2-5190.png)

_Figure: Examples of medium core spacings (spacing-12 to spacing-24) shown as purple overlays: on the left a toast with an info icon, the text "All files lorem ipsum" and a close icon, with the overlay on its padding around the content; on the right two stacked inputs, each with a Label, with the overlay on the vertical gap between the first input and the second label._

**Large**

**(**

spacing-32

**-**

spacing-160

**)**

Used for the largest elements and layout:

- Space between elements inside a bigger pattern or on a page (i.e. between modules and buttons)

![Core Tokens (Static spacings)](spacing/core-tokens-static-spacings-2-5213.png)

_Figure: Wireframe of a page with two stacked entries, each made of an image placeholder next to a heading and text lines, followed by a centered dark button. A purple overlay marks the large core spacing (spacing-32 to spacing-160) between the second entry and the button._

### Semantic Tokens (Dynamic spacings)

These tokens are intended as dynamic spacings that adapt to the breakpoint they’re used in.

They are mainly used for spacings between elements in a layout (i.e. between modules) and for padding within components and patterns (i.e. dialogs)

![Semantic Tokens (Dynamic spacings)](spacing/semantic-tokens-dynamic-spacings-2-5245.png)

_Figure: Two examples of dynamic semantic spacings shown as teal overlays. On the left a page wireframe has teal bars between its content blocks and above the footer area. On the right a dialog has a teal overlay as padding around its content, which is a heading "Lorem ipsum dolor sit amet consectetur. In bibendum diam nulla suspendisse dictumst laoreet ut.", a close icon and two buttons, a dark "Add service" and an outlined "Cancel"._

**Horizontal spacing watchout**

Bigger modules within the grid typically inherit horizontal spacing from the predefined gutter, which utilizes the following token:

spacing-dynamic-xs

By default, when modules stack on smaller screens, horizontal spacings shift to vertical, with dynamic spacings still in effect.

**(1)** Example: 24px horizontal spacing (dynamic) on small desktop screens shifts to 16px vertical spacing (dynamic) on mobile screens.

It’s essential to remember that horizontal and vertical spacings are perceived differently, so dynamic spacings may not always work effectively for both orientations. When horizontal spacing shifts to vertical, a static spacing token can be used in place of the dynamic one.

**(2)** Example: 24px horizontal spacing (dynamic) on small desktop screens shifts to 24px vertical spacing (static) on mobile screens.

![Semantic Tokens (Dynamic spacings)](spacing/semantic-tokens-dynamic-spacings-2-5279.png)

_Figure: Two rows, each with a desktop wireframe and a narrow mobile wireframe, and a legend at the right: Core Tokens (Static spacings) in purple labelled "Core Spacing" and Semantic Tokens (Dynamic spacings) in teal labelled "Dynamic Spacing". Callout 1: two images with captions side by side separated by a vertical teal gutter labelled spacing-dynamic-xs (24px) on desktop, which becomes a horizontal teal gap labelled spacing-dynamic-xs (16px) between the stacked images on mobile. Callout 2: an image next to a text block separated by a vertical teal gutter labelled spacing-dynamic-xs (24px) on desktop, while on mobile the stacked image and text are separated by a purple gap labelled spacing-24 (24px), a static core token._

### Inspection of variables for developers

Ensure you use the appropriate spacing variables in your designs so developers can view the correct specifications during inspection **(1)**.

- For developers with a [Design or Dev Mode seat](https://help.figma.com/hc/en-us/articles/360039960434-Manage-seats-in-Figma), spacing specs are displayed directly when selecting an element **(2)**.
- For developers with a Viewer seat, spacing specs appear in the right-side panel **(3)**.

![Inspection of variables for developers](spacing/inspection-of-variables-for-developers-166-3459.png)

_Figure: Three callouts on inspecting spacing variables. Callout 1: the Figma variable picker listing spacing-160 (160), margin (16) and the spacing-dynamic variables xs (16), s (24, selected), m (32), l (40) and xl (56), next to the Auto layout panel with direction gap 16 and padding fields 24 and 32. Callout 2: a Heading with a close icon in Dev Mode, with the padding and gap spacings drawn as blue hatched areas and labelled lines directly on the selected element. Callout 3: a Figma browser window with the header-dialog component selected and its right-side panel with its Padding and Gap section enlarged at the right to show Top spacing-dynamic/m, Right spacing-dynamic/s, Bottom spacing-dynamic/m, Left spacing-dynamic/s and Gap spacing-16._

## Spacing: Web usage example

### Example with spacers

> The modules shown below are for visual representation only and are not intended as finalized modules.

![Example with spacers](spacing/example-with-spacers-2-2240.png)

_Figure: Five longer page layouts of the example page, labelled Breakpoint S: 320px, Breakpoint M: 768px, Breakpoint L: 1024px, Breakpoint XL: 1536px and Breakpoint XXL: 1668px, with a legend at the top for Core Tokens (Static spacings) in purple (Core Spacing) and Semantic Tokens (Dynamic spacings) in teal (Dynamic Spacing). Each page has an orange STIHL logo, a gray image with a TITLE COMPONENT box, HEADING 2, HEADING 3 and HEADING 4 text sections with a Button, a fieldset of labelled inputs with a Button, gray image-and-text modules and rows of image cards with Button links, a gray LOREM IPSUM banner with a Button, and a footer of Heading 4 link columns. The spacings are overlaid and labelled, for example spacing-dynamic-xl, spacing-dynamic-xs, spacing-24 and spacing-16; the page is a single column at S, with side-by-side modules, four-column card rows and footer columns on the wider breakpoints._

### Example without spacers

> The modules shown below are for visual representation only and are not intended as finalized modules.

![Example without spacers](spacing/example-without-spacers-2-3441.png)

_Figure: Shows logo (type=deafult, logos=main); title (title text=Protection making security, size=xl, viewport=mobile); spacer (type=dynamic token, direction=vertical); spacer (type=core token, direction=vertical); button (button text=Button, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=filled, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); input-medium (system feedback, state=enabled, invalid=false); button (button text=Button, variant=ghost, state=enabled, size=medium, icon position=right, hide label=off, flush alignment=on); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=right, hide label=off, flush alignment=on); link-default (label=Link Default, variant=neutral, state=enabled, icon position=none); title (title text=Protection making security, size=xl, viewport=desktop). Measurements: 56px, 16px, 24px, 80px, 32px, 40px, 8px, 64px, 96px, 48px, 120px. Text in the figure: "Breakpoint S: 320px", "Breakpoint M: 768px", "Breakpoint L: 1024px", "Breakpoint XL: 1536px", "Breakpoint: 1668px", "Protection making security", "ƒ", "Infrastructure voluptate elit amet ex ecosystem", "Lorem ipsum dolor sit amet consectetur. Eget sollicitudin tellus id arcu soll...", "Button", "Modeling in tempor aute lorem sint management", "Nulla insights scalability minim nisi strategy", "Gotham artificial", "Fieldset Legend Default Style", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauri...", "Label", "big artificial", "Analytics scalability making training infrastructure", "Big sint efficiency dolore amet", "Innovation velit support", "Insights mollit esse", "Efficiency excepteur quis", "Heading 4", "Link Default"._

## Spacing: Basic web template Dev

> This template is just a reference for code

![Spacing: Basic web template Dev](spacing/spacing-basic-web-template-dev-2-4618.png)

_Figure: Five page layouts of the same basic web template side by side, labelled Breakpoint S: 320px, Breakpoint M: 768px, Breakpoint L: 1024px, Breakpoint XL: 1536px and Breakpoint XXL: 1668px, with core spacings overlaid in purple and dynamic spacings in teal. Each page has an orange STIHL logo, a gray image with a white TITLE COMPONENT box, then a teal spacing-dynamic-xl gap, a HEADING 2 with two text paragraphs separated by spacing-16 and a spacing-24 gap above a dark Button, a teal spacing-dynamic-l gap, a gray image and a teal spacing-dynamic-xxl gap, a second HEADING 2 with a Fieldset Legend and hint text and a stack of five labelled inputs separated by spacing-24 with a spacing-32 gap above a dark Button, another teal spacing-dynamic-xxl gap, and a gray footer between teal spacing-dynamic-l gaps with Heading 4 link columns (Link Default) spaced by spacing-16 and spacing-8 and separated by vertical spacing-dynamic-xs gaps. The footer has two columns per row at S and four columns at M and wider, and the content column gets wider on the larger breakpoints._
