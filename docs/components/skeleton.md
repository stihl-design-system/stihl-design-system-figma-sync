---
id: skeleton
title: Skeleton
category: component
importNames:
  - DSSkeleton
package: "@stihl-design-system/components"
keywords:
  - skeleton
  - loading placeholder
  - shimmer
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 49465:7294
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:49:04.639Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=49465-7294
---

# Skeleton

## Skeleton

**Overview** A Skeleton is a visual placeholder that mimics the structure of upcoming content while data is loading. It helps maintain layout stability and reduces perceived loading time.

- Uses subtle animation (e.g. shimmer)
- Appears only briefly and is repressable
- Non-interactive and not focusable
- Fully responsive, matching the layout of final content

**When to use** Use Skeletons when:

- The final layout is known (e.g. cards, lists, table rows)
- Content loading takes noticeable time (recommended from \>500 ms)
- Layout shifts must be avoided
- Users should understand where content will appear

Typical scenarios: Content pages, dashboards, feeds, tables, detail views

**When not to use** Do not use Skeletons when:

- Loading time is very short (risk of flicker): \<500ms
- The final layout is unknown or unpredictable
- A user action is in progress or pending (e.g. save, submit)

**Use cases**

- Content cards (news, products, articles)
- Table rows with fixed structure
- Detail pages (header, meta, body)
- Dashboards with widgets
- Lists and feeds (mobile and desktop)

### Related components and patterns

**Component**

**Description**

**Spinner**

Spinners are used for actions or unknown charge levels. (Save, Submit, Upload, Payment)

**Progress Bar**

A progress bar is used when progress is measurable. (Upload, Installing, Update)

![Related components and patterns](skeleton/related-components-and-patterns-49465-11325.png)

_Figure: Text in the figure: "single line", "multi line", "rectangle", "circle"._

![Related components and patterns](skeleton/related-components-and-patterns-49465-12146.png)

_Figure: Shows helper-spacer (line width=80%). Text in the figure: "building elements", ".helper-last-line"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-skeleton--documentation)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Global Rules

Skeletons must match the final layout exactly.

- Same dimensions (width and height)
- Same spacing tokens
- Same radius tokens
- Same grid and layout structure
- No layout shift when content replaces the skeleton

![Global Rules](skeleton/global-rules-51293-4572.png)

_Figure: Shows skeleton (line 04 (default), line 03 (optional), variant=rectangle); skeleton (variant=multi line); helper-multi-line\_depricated (last line, line 02, line 01); skeleton (line 04 (default), line 03 (optional), variant=single line); action-card-vertical (supplementary slot, media slot, padding=medium, alignment=hug); annotation-circle (number=3, type=center, color=blue). Callouts 3. Text in the figure: "Brand Flag", "Charging and energy management in the STIHL AP system", "Benefit now from the expertise of our experts - because you deserve advice an...", "Metadata", "Flag", "Button", "Summary of the accordion content"._

### Anatomy

#### Building elements

Skeletons are built from three main primitives:

1. **Line** Simulates text content.
   1. **Single Line:** represents one line of text
   1. **Multi Line:** represents multiple lines of text
1. **Rectangle** Simulates rectangular containers or surfaces.
1. **Circle** Simulates circular elements.

![Building elements](skeleton/building-elements-49577-12878.png)

_Figure: Shows annotation-circle (number=1a, type=left, color=blue); skeleton (line 04 (default), line 03 (optional), variant=single line); annotation-circle (number=1b, type=left, color=blue); skeleton (line 03 (optional), line 04 (default), variant=multi line); skeleton (line 04 (default), line 03 (optional), variant=rectangle); annotation-circle (number=2, type=left, color=blue); annotation-circle (number=3, type=left, color=blue); skeleton (line 03 (optional), line 04 (default), variant=circle). Callouts 2, 3. Text in the figure: "1a", "1b"._

### Variants

#### Single Line

Represents a single line of text.

**Sizing**

- Width: matches the source element
- Height: equals the typography line-height token

**Style**

- Corner radius: radius-xs

**Use cases**

- Headline (single line)
- Text (single line)
- Label
- Meta text
- Table cell (single line)
- List title (single line)

![Single Line](skeleton/single-line-51285-13391.png)

_Figure: Shows extension-line (type=outside-right); skeleton (line 04 (default), line 03 (optional), variant=single line); extension-line (type=outside-bottom). Measurements: 38px, 160px, 24px, 304px. Text in the figure: "Headline (single line)", "Layout", "Skeleton", "Headline", "Text (single line)", "The quick brown fox jumps over the lazy dog"._

#### Multi Line (Text Skeleton Pattern)

Represents multiple lines of text.

**Behavior**

- Number of lines should match the original content

> **Figma only information** Maximum: 10 lines (Figma component constraint) Last line is shorter to indicate paragraph structure

**Sizing**

- Total height matches the original text container
- Lines are evenly distributed within the container
- Gap between lines: 4px (token)
- Last line width: default 80%

**Style**

- Corner radius: radius-xs

> **Calculation (Code)** skeleton line height = font size x font line height - gap-spacing-token **Example:** font size**:** 16px line height: 1.5 gap spacing token: 4px skeleton line height height = 16 x 1.5 - 4 = 20px

**Use cases**

- Headline (multi line)
- Paragraph text
- Description
- Teaser text
- Multi-line table content
- Card body text

![Multi Line (Text Skeleton Pattern)](skeleton/multi-line-text-skeleton-pattern-51285-13537.png)

_Figure: Shows extension-line (type=outside-right); skeleton (line 03 (optional), line 04 (default), variant=multi line); extension-line (type=outside-bottom); extension-line (type=outside-left); skeleton (variant=multi line). Measurements: 96px, 370px, 20px, 64px. Text in the figure: "Text Paragraph", "Layout", "Skeleton", "The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, cons...", "Multiline Headline + Text Paragraph", "This is a multiline headline."._

#### Rectangle

Represents rectangular containers and surfaces. **Sizing:**

- Width: matches source element
- Height: matches source element

**Style:**

- Inherits corner radius from source element

**When to use Rectangle instead of Line** Use Rect when the original content:

- is a surface or area
- has padding
- represents a container
- is not plain text

**Use cases**

- Images / media areas
- Buttons
- Cards
- Accordion items
- Table cell backgrounds
- Icon containers (if not circular)

![Rectangle](skeleton/rectangle-51285-14531.png)

_Figure: Shows content-placeholder (type=image, format=4:3); extension-line (type=outside-right); skeleton (line 04 (default), line 03 (optional), variant=rectangle); extension-line (type=outside-bottom); button (button text=Button, variant=filled, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off); extension-line (type=outside-left); accordion-single (state=enabled, size=small, expansion-indicator=right, expanded=false, flush=false). Measurements: 180px, 240px, 48px, 95px, 40px, 338px. Text in the figure: "Image", "Layout", "Skeleton", "Button", "Accordion", "Summary of the accordion content"._

#### Circle

Represents circular shapes.

**Sizing**

- Width = Height (1:1 ratio)
- Matches size of source element

**Use Cases**

- Avatar
- Round button

![Circle](skeleton/circle-51285-14726.png)

_Figure: Shows avatar-building-block (variant=initials); extension-line (type=outside-right); skeleton (line 03 (optional), line 04 (default), variant=circle); round (variant=filled, state=enabled, size=small). Measurements: 40px, 32px. Text in the figure: "Avatar", "Button round", "MM"._

### Level of detail

Skeletons can represent different levels of fidelity.

1. **Low detail** One Rectangle represents the entire component
1. **High detail** Internal elements are replaced with corresponding primitives (Line, Rectangle, Circle)

**Example (Card)**

- Low detail: one Rectangle **(1)**
- High detail: primitves within container Rectangle (image) + Multi Line (title) + Multi Line (description) + Line (meta) + Rectangles (flags) + Rectangles (buttons) + Rectangle (accordion)

![Level of detail](skeleton/level-of-detail-51285-14809.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); action-card-vertical (supplementary slot, media slot, padding=medium, alignment=hug); skeleton (line 04 (default), line 03 (optional), variant=rectangle); skeleton (variant=multi line); helper-multi-line\_depricated (last line, line 02, line 01); skeleton (line 04 (default), line 03 (optional), variant=single line). Callouts 1, 2. Text in the figure: "Card component layout", "Skeleton / low detail", "Skeleton / high detail", "Brand Flag", "Charging and energy management in the STIHL AP system", "Benefit now from the expertise of our experts - because you deserve advice an...", "Metadata", "Flag", "Button", "Summary of the accordion content"._

### Responsiveness, Layout & Alignment

Skeletons follow the same layout behavior as the final content shouldn’t create layout shift when content replaces the skeleton.

- Same responsive behavior across breakpoints
- Same grid structure and alignment
- Same wrapping and flow behavior
- Skeleton count reflects expected content amount (e.g. lists)

![Responsiveness, Layout & Alignment](skeleton/responsiveness-layout-alignment-49577-16681.png)

_Figure: Shows flag (icon, label=befristet, color=status: info); flag (icon, label=Waiblingen, color=status: info); flag (icon, label=Forschung & Entwicklung, color=status: info); skeleton (line 04 (default), line 03 (optional), variant=single line); skeleton (line 04 (default), line 03 (optional), variant=rectangle); link-card-horizontal (flags, heading copy=Praktikum Group Compliance Management, description copy=Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances., footer, padding=medium, content sizing=hug, content orientation=vertical). Text in the figure: "Praktikum Group Compliance Management", "befristet", "Waiblingen", "Forschung & Entwicklung"._

## Behavior

### Loading Behavior

Skeletons define how content is revealed during loading.

Content should be displayed progressively as it becomes available. This improves perceived performance and helps users understand the structure of the content early.

If progressive loading is not possible, content can be revealed all at once once loading is complete.

![Loading Behavior](skeleton/loading-behavior-50331-10659.png)

_Figure: Shows top-bar\_logo (internal (do not modify) 🖥️ breakpoint=⛔️ internal (do not modify): m - xl); action-item (label=Contact, state=enabled, stacking=vertical, leading-element=icon, chevron=false, label-weight=regular, indent=false); action-item (label=English, state=enabled, stacking=vertical, leading-element=icon, chevron=true, label-weight=regular, indent=false). Measurements: 75%, 100%, 25%, 50%, 5%, 43%. Text in the figure: "Skeleton", "Partial Skeleton, partial layout", "Full Layout", "Contact", "English", "Products", "Management", "Organisation", "Fleet Overview", "Product", "User", "Location", "Status", "Fuel Level", "MS 881", "H. Zimmermann", "Affalterbach", "OK", "FS 460", "G. Schmidt", "Schorndorf", "BR 800", "W. Fischer", "Fellbach"._

## Animation

> **Animation examples shown in documentation are for demonstration only.** • Not intended for direct use in UI layouts • Use the defined motion specs instead

### Background Shimmer

Skeleton animation is optional but recommended.

A subtle shimmer effect helps indicate loading activity and reduces perceived waiting time.

- Used to communicate ongoing loading
- Keeps motion subtle and non-distracting
- Can be disabled via user settings (accessibility)
- Fallback: static skeleton (no animation)

![Background Shimmer](skeleton/background-shimmer-50929-11427.png)

_Figure: Shows helper-container-background-on-light (frame=start); helper-container-background-dark (frame=start). Text in the figure: "light mode", "dark mode"._

### Motion Specs

**Animation type:** move: from left or right **Duration:** 1600ms

> **Note:** Duration 1600 ms is not implemented as a token yet

**Delay:** 250ms **Easing:** motion-functional-ease-in-out

[Open prototype](https://www.figma.com/proto/qXldpLO6gxHJNLdcXIPxYt/branch/Mvz7H9IStbWkId9a2uXOv4/Core-Components-%F0%9F%92%A0?page-id=49465%3A7294&node-id=50929-11370&viewport=-2364%2C132%2C0.41&t=vNQCKS1SR3Fl22XG-1&scaling=min-zoom&content-scaling=fixed)

[Motion basics](https://www.figma.com/design/UYHZEckQObDvLuuRoMP8ps/Styles-%F0%9F%AA%AD?node-id=1-148&t=yE71yt0nET5AxjOI-1)

![Motion Specs](skeleton/motion-specs-50929-11688.png)

_Figure: Shows helper-gradient-light (mode=on light)._

### Gradient Specs

The shimmer is created using a moving gradient overlay. **Light mode**

- Stop 1: 0% → grey/ultra-light, 0% opacity
- Stop 2: 80% → grey/ultra-light, 100% opacity
- Stop 3: 100% → grey/ultra-light, 0% opacity

**Dark mode**

- Stop 1: 0% → grey/dark, 0% opacity
- Stop 2: 80% → grey/dark, 100% opacity
- Stop 3: 100% → grey/dark, 0% opacity

> **Note** The core tokens are a placeholder until the semantic token is released

> **Implementation Notes** • Gradient values are not exposed as tokens • They define behavior, not reusable design elements

![Gradient Specs](skeleton/gradient-specs-51324-4863.png)

![Gradient Specs](skeleton/gradient-specs-50929-13443.png)

_Figure: Shows helper-gradient-light (mode=on light); helper-gradient-dark (mode=on dark). Text in the figure: "Motion building elements", "helper-container-background-light", "helper-gradient-light", "frame: start", "frame: end", "helper-container-background-dark", "helper-gradient-dark"._

## Accessibility

### Screen Reader & Interaction

Skeletons are non-interactive and not focusable.

The skeleton is purely decorative and renders with aria-hidden="true".

![Screen Reader & Interaction](skeleton/screen-reader-interaction-50894-5616.png)

_Figure: Don't example. Shows skeleton (variant=multi line); cursor (type=pointer); skeleton (line 03 (optional), line 04 (default), variant=multi line)._

### Loading Status

The Skeleton does not communicate loading status themselves.

It is purely decorative and renders with aria-hidden="true".

If you need to convey loading state to screen reader users, pair it with an aria-live region or use the [Spinner](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26-3) component.

![Loading Status](skeleton/loading-status-50300-2470.png)

_Figure: Text in the figure: "“loading content”"._

### Motion

Animation must respect user accessibility preferences:

- Support reduced motion settings
- Disable or reduce animation when prefers-reduced-motion is active
- Fallback: static skeleton (no animation)

![Motion](skeleton/motion-50894-5724.png)

_Figure: Shows helper-gradient-light (mode=on light). Text in the figure: "default motion (with gradient)", "static version (without gradient)"._

## Examples

> The use case examples shown feature the new Skeleton and do not reflect the current state of the product.

**Corporate and Careers** Journal page

![Examples](skeleton/examples-51345-5241.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); skeleton (line 04 (default), line 03 (optional), variant=rectangle); skeleton (line 04 (default), line 03 (optional), variant=single line); skeleton (line 03 (optional), variant=multi line); skeleton (line 03 (optional), line 04 (default), variant=multi line). Text in the figure: "Search Site", "Contact", "English", "About STIHL", "Sustainability", "Careers", "STIHL Journal", "Press"._

![Examples](skeleton/examples-51345-5562.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); link-card-vertical (description copy=Dr Michael Prochaska, Member of the Executive Board for Human Resources and Legal Affairs, talked with us about challenges HR is currently facing worldwide, how these changes are being tackled and which foundations remain unchanged despite everything., heading copy=Interview with Dr Michael Prochaska, flags, media area, description, footer, padding=medium, content sizing=hug); link-card-vertical (description copy=Electromagnetic compatibility (EMC) tests are carried out on all STIHL appliances before they are launched on the market as part of the approval process. In our, heading copy=One lab for all, flags, media area, description, footer, padding=medium, content sizing=fill); link-card-vertical (description copy=Electromagnetic compatibility (EMC) tests are carried out on all STIHL appliances before they are launched on the market as part of the approval process. In our, heading copy=Charging and energy management in the STIHL AP system, flags, media area, description, footer, padding=medium, content sizing=fill); link-card-vertical (description copy=The STIHL chain factory in Switzerland: manufacturer of all chains for STIHL chainsaws and more than 30 different hedge trimmer blades for over 50 years. . This, heading copy=Charging and energy management in the STIHL AP system, flags, media area, description, footer, padding=medium, content sizing=fill). Text in the figure: "Search Site", "Contact", "English", "About STIHL", "Sustainability", "Careers", "STIHL Journal", "Press", "Interview with Dr Michael Prochaska", "Dr Michael Prochaska, Member of the Executive Board for Human Resources and L...", "People and Stories", "Interview", "One lab for all", "Electromagnetic compatibility (EMC) tests are carried out on all STIHL applia...", "Backstage", "Background Story", "Charging and energy management in the STIHL AP system", "The STIHL chain factory in Switzerland: manufacturer of all chains for STIHL...", "Corporate Development"._

**Corporate and Careers** Job listing

![Examples](skeleton/examples-50819-37018.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); link-card-horizontal (heading copy=Praktikum Group Compliance Management, description copy=Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances., flags, footer, padding=medium, content sizing=hug, content orientation=horizontal (with footer)); link-card-horizontal (heading copy=Abschlussarbeit Datengetriebene Analyse und KI-gestützte Bewertung  von Prüfstands-Messdaten, description copy=Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances., flags, footer, padding=medium, content sizing=hug, content orientation=horizontal (with footer)); link-card-horizontal (heading copy=Praktikum Forschung Werkstofftechnik - Chemielabor, description copy=Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances., flags, footer, padding=medium, content sizing=hug, content orientation=horizontal (with footer)); link-card-horizontal (heading copy=Praktikum Optimieren von physikalischen Modellen für Lithium-Ionen-Zellen, description copy=Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances., flags, footer, padding=medium, content sizing=hug, content orientation=horizontal (with footer)). Text in the figure: "Search Site", "Contact", "English", "About STIHL", "Sustainability", "Careers", "STIHL Journal", "Press", "Stellenangebote ƒ", "Praktikum Group Compliance Management", "befristet", "Waiblingen", "Forschung & Entwicklung", "Abschlussarbeit Datengetriebene Analyse und KI-gestützte Bewertung von Prüfst...", "Auf Anfrage", "Praktikum Forschung Werkstofftechnik - Chemielabor", "Dieburg", "Marketing & Vertrieb PR", "Praktikum Optimieren von physikalischen Modellen für Lithium-Ionen-Zellen"._

![Examples](skeleton/examples-50819-37644.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); skeleton (line 04 (default), line 03 (optional), variant=single line); skeleton (line 04 (default), line 03 (optional), variant=rectangle); skeleton (variant=multi line). Text in the figure: "Search Site", "Contact", "English", "About STIHL", "Sustainability", "Careers", "STIHL Journal", "Press", "Stellenangebote ƒ"._
