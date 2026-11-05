---
id: card
title: Card
category: component
importNames:
  - DSLinkCard
  - DSActionCard
  - DSActionCardGroup
package: "@stihl-design-system/components"
keywords:
  - card
  - link card
  - action card
  - product card
  - selectable card
  - tile
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 26075:11591
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:21:06.684Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11591
---

# Card

## Card Types by Primary Interaction

Cards are flexible containers used to group related content, media, and actions within a structured and visually distinct layout. They help users scan, browse, compare, and interact with content across different experiences.

The STIHL Design System provides four Card types based on their primary interaction. Choose the Card type according to what users primarily need to do.

Each Card type has a defined interaction model. Interactive elements must support this model and must not create conflicting or nested interactions.

![Card Types by Primary Interaction](card/card-types-by-primary-interaction-47366-8396.png)

_Figure: A "link-card-vertical" component from the STIHL Design System, which is used to group related content and media. This card type includes a "Promo Flag" at the top, a media area with a placeholder image, a heading labeled "Charging and energy management in the STIHL AP system," a description starting with "Benefit now from the expertise of our experts," metadata labeled "Metadata," and three "Flag" elements in the footer. The card has medium padding and content sizing set to "hug._

**Link Card: Navigation**

**“I go somewhere.”**

**Usage:** Use when interacting with the Card should lead to another page or destination.

**Interaction:** The entire Card is a single navigation target. Additional independent interactive elements are not supported.

[Go to Link Card →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25977)

![Card Types by Primary Interaction](card/card-types-by-primary-interaction-47366-8402.png)

_Figure: A Link Card component from the STIHL Design System, specifically the "action-card-vertical" variant. This card includes a "Promo Flag" at the top, a media slot with an image, a title "Charging and energy management in the STIHL AP system," a description, metadata section with "Flag" labels, two "Button" elements, and an "Accordion copy" section at the bottom. The card is designed for navigation, where the entire card acts as a single link to another page or destination. The layout has medium padding and content sizing set to "hug._

**Action Card: Explicit actions**

**“I do something.”**

**Usage:** Use when users perform one or more explicit actions within the Card. **Interaction:** Actions are primarily provided through interactive elements within the Card, such as Buttons or Accordions. The Card may additionally provide navigation when required.

[Go to Action Card →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25978)

![Card Types by Primary Interaction](card/card-types-by-primary-interaction-47366-8408.png)

_Figure: An Action Card component variant named selectable-card-vertical. This card includes a checkbox control, content sizing set to hug, medium padding, and a media slot. The card features a promo flag, a title "Charging and energy management in the STIHL AP system," a description, metadata section, and three flags labeled "Flag." The layout is vertical with interactive elements such as buttons or accordions for explicit user actions._

**Selectable Card — Selection**

**“I choose an option.”**

**Usage:** Use when users need more context than a standard Radio Button or Checkbox provides to make a selection. **Interaction:** The entire Card is a single selection target. The Control represents the Card itself. Additional independent interactive elements are not supported.

[Go to Selectable Card →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=63836-30133)

![Card Types by Primary Interaction](card/card-types-by-primary-interaction-47366-8418.png)

_Figure: A Selectable Card component from the STIHL Design System, specifically a product-card in grid view with content sizing set to hug. This card includes elements such as "Promo Flag", "Productname", "3.5", "(80)", "Categorie", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", and "Compare". The entire card is interactive, serving as a single selection target, and does not support additional independent interactive elements._

**Product Card — Product exploration**

**“I explore and act on a product.”**

**Usage:** Use when users need to access product details and perform product-specific actions directly from the Card. **Interaction:** The Card provides navigation to the Product Detail Page and supports independent product-specific actions such as Add to Cart, Add to Favorites, or Compare.

[Go to Product Card →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25979)

**Controls as Independent Interactions**

A Checkbox may be used as an independent interaction within Card types that support it. In this case, the Checkbox performs its own action and does not make the Card selectable.

Radio Buttons are not supported as independent interactions within other Card types.

**General Usage**

**Use Cards when:**

- Grouping related information or actions.
- Previewing content or products in collections, lists, or dashboards.
- Users need quick access to key information or actions.
- Supporting responsive and adaptable layouts.

**Do not use Cards:**

- For long-form content or full-page experiences.
- When Lists or Tables communicate the information more efficiently.
- For complex forms, modal dialogs, or multi-step workflows.

**Best Practices**

- Keep content concise and focused
- Choose the card type based on the primary interaction
- Prioritize readability and scannability
- Avoid overcrowding cards with too many actions or visual elements
- Maintain consistent spacing, surfaces, and interaction patterns across card collections

## Touchscreen Device Considerations

Cards should remain easy to use across touch-enabled devices.

### No Hover States

Hover interactions are not available on touch devices.

Ensure that all essential information and actions remain accessible without hover.

### Larger Touch Targets

Interactive elements should provide sufficiently large touch targets to support accurate and comfortable interaction.

Follow platform-specific accessibility guidelines where applicable.

### Reduced Interaction Complexity

Prioritize primary actions and essential information.

Avoid interaction patterns that require precise pointer control or multiple interaction steps.

### Simplified Secondary Actions

Consider reducing, consolidating, or hiding secondary actions when screen space is limited.

Prioritize the most relevant action for the current user task.

### Avoid Swipe Conflicts

Swipe interactions within card content must not conflict with parent container gestures.

This is particularly important when Link Cards are placed inside carousels.

See [Carousel](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524).

![Avoid Swipe Conflicts](card/avoid-swipe-conflicts-57309-24474.png)

_Figure: Two layouts of the link-card component: one for mobile in a vertical orientation and one for tablet in a horizontal orientation. Each card includes a media area, heading copy "Charging and energy management in the STIHL AP system," description copy, metadata, footer, and flags. The cards have medium padding and content sizing set to hug. The text "Avoid Swipe Conflicts" indicates that swipe interactions within the card content should not conflict with gestures of the parent container, especially when cards are inside carousels._

This section provides general touchscreen principles only.

Additional guidance related to layouts, sizing, responsiveness, interactions, and card-specific behavior is documented throughout the following Card Foundations and component pages.

## Layout 1/3

### Layout Contexts

Cards can be used across different layout contexts depending on content type, user intent, and available space.

The appropriate layout should be selected based on the user’s primary goal, such as browsing, comparing, managing, or acting on content.

Some card variants may support only a subset of the available layout contexts or define additional context-specific behavior. Refer to the respective component documentation for supported layouts and component-specific guidance.

#### Standalone

Used when a single card requires focused attention.

**Best suited for:**

- featured content
- high-priority information
- isolated tasks or actions

![Standalone](card/standalone-56949-32326.png)

_Figure: A standalone card component in two different layouts, one for a desktop and one for a mobile device. The card includes a placeholder for an image with an aspect ratio of 4:3, labeled as "image" and "media-area". This variant is used to highlight a single card that requires focused attention, suitable for featured content, high-priority information, or isolated tasks or actions._

#### Grid

The primary layout for displaying multiple cards in a structured collection.

**Grid layouts support:**

- scanning
- comparison
- efficient use of available space

**Best suited for:**

- content collections
- dashboards
- product listings
- overview pages

![Grid](card/grid-56949-32331.png)

_Figure: A grid layout of card components, each containing a media-area with a 4:3 aspect ratio. The grid layout is shown on both a desktop and a mobile device, demonstrating how multiple cards are arranged in a structured collection. The layout supports scanning, comparison, and efficient use of available space, making it suitable for content collections, dashboards, product listings, and overview pages._

#### Carousel

Suitable for exploratory, inspirational, or promotional experiences.

Carousels support horizontal browsing and allow users to discover content without displaying all items simultaneously.

**Best suited for:**

- recommendations
- featured content
- promotional collections

![Carousel](card/carousel-56949-32336.png)

_Figure: A carousel component with a layout of four cards, each containing a media-area with a 4:3 aspect ratio. There are two round buttons, one in a disabled state and the other in an enabled state, both of small size and filled variant. The scrollmarker labeled 6=false indicates the absence of a scroll marker. The carousel is designed for horizontal browsing, allowing users to explore content without displaying all items at once._

#### List

Suitable when additional horizontal space is available and higher information density is required.

**List layouts prioritize:**

- readability
- comparison
- structured information

**Best suited for:**

- search results
- comparison-oriented experiences
- information-rich collections

![List](card/list-56949-32341.png)

_Figure: A List variant of the Card component in a UI design system, shown in both desktop and mobile layouts. The cards include a media-area with a 4:3 aspect ratio. This layout is used when additional horizontal space is available and higher information density is required, prioritizing readability, comparison, and structured information._

## Sizing 1/3

### Resizing Behaviour

This section describes how cards adapt to different layouts and container sizes.

Orientation switching is defined separately in [Responsive Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57026-35041).

Some card variants may define additional resizing rules for specific content areas, media elements, or view types. Refer to the respective component documentation for component-specific resizing behavior.

#### Card Width Behavior

Applies to all card variants unless stated otherwise.

- Cards fill the width of their container by default.
- Width can be user-defined when cards are used outside a grid.
- When placed in a grid, cards fill the space evenly.

![Card Width Behavior](card/card-width-behavior-57629-18929.png)

_Figure: Card width behavior in two sections. Under "Vertical Orientation", a single card on its own spans the full width marked "Fill to container (standard) or User Defined (width)", and four cards placed alongside each other in a grid each span one column marked "Fill", together covering the "Container width". Under "Horizontal Orientation", a single card with media on the left and content on the right also fills the container or a user defined width, and a grid of two horizontal cards per row each marked "Fill" together spans the "Container width"._

#### Card Height Behavior

Applies to all card variants unless stated otherwise.

- Card height hugs content by default.
- Height can be user-defined if required by the layout.
- If user-defined, the internal content fills the available vertical space.
- Here you can find more informatiom about [Figma Content Sizing](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-23351).

![Card Height Behavior](card/card-height-behavior-57629-19271.png)

_Figure: Card height behavior in two sections. Under "Vertical Orientation", the card on its own (Hug) is as tall as its content, marked "Hug to content"; the card on its own (Fill) has a "User Defined" height with a "Fill" gap between the text block and the footer; in a grid of four cards the row height is shared and the content of shorter cards is marked "Fill" to stretch. Under "Horizontal Orientation", the same applies: the card on its own (Hug) is "Hug to content", the card on its own (Fill) has a "User Defined" height with a "Fill" gap, and in a grid of two rows of two cards the content marked "Fill" stretches to the row height._

## Responsive Behavior

Most Card variants support a predefined responsive model that determines when the card switches between Vertical and Horizontal orientations.

This responsive model serves as a recommended default and may be adapted to specific implementation requirements.

Some card variants may define their own responsive behavior and therefore do not use the shared orientation-switching model. Refer to the respective component documentation for component-specific responsive rules.

In code, this behavior is achieved by using [container queries](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/templates-cards-link-card-responsive--documentation).

### Orientation Changes

Orientation changes are determined by the available Card width and the defined sizing constraints.

- The card switches orientation when it reaches its defined minimum or maximum width constraints.
- Orientation changes are **independent** of viewport breakpoints.
- Orientation changes are **independent** of content length.

![Orientation Changes](card/orientation-changes-57176-28915.png)

_Figure: Orientation changes for a Card component in the STIHL Design System, showing both vertical and horizontal layouts. The measurements indicate the minimum and maximum width constraints for switching orientations: "Link Card Vertical Minimum width: 134px" and "Link Card Vertical Maximum width: 719px" for the vertical orientation, and "Link Card Horizontal Content Orientation: Vertical Minimum width: 688px" and "Link Card Horizontal Content Orientation: Vertical Minimum width: 859px" for the horizontal orientation. The figure demonstrates how the card's orientation changes based on its width, independent of viewport breakpoints or content length..._

## Content & Assets

**Heading Styles**

The default heading style is Headline M. Other heading styles may be used when appropriate.

![Content & Assets](card/content-assets-66560-37174.png)

_Figure: The link-card-vertical component with varying heading styles labeled as headline s, headline m (default), headline l, and headline xl. Each card contains the same text: "Charging and energy management in the STIHL AP system" as the heading and "Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances." as the description. The cards have medium padding and content sizing set to hug._

**Don’t use uppercase, as it reduces readability and scannability.**

![Content & Assets](card/content-assets-66560-37239.png)

_Figure: A vertical card component labeled as selectable-card-vertical with a checkbox control, content sizing set to hug, medium padding, and a media slot. The card contains an image with the text "Our recommended service", a heading "STIHL Pro Servicing", a description "Ensures safety compliance, preventive parts replacement, and thorough cleaning", and three buttons labeled "Flag". The board is marked as a "Don't" example because it uses uppercase text, which reduces readability and scannability._

**Graphic Area Sizes**

A Graphic Area is provided as a placeholder for logos, icons, or illustrations (i.e. png, svg, jpeg).

The Graphic Area always uses a 1:1 aspect ratio.

Two size options are currently available:

- **32px × 32px**
- **48px × 48px**

Additional sizes may be introduced if required by specific use cases.

![Content & Assets](card/content-assets-66560-37291.png)

_Figure: A "link-card-vertical" component with two different sizes of a Graphic Area, which is a placeholder for images. The measurements 32px and 48px refer to the dimensions of the Graphic Area, both of which use a 1:1 aspect ratio. The component includes a heading titled "Charging and energy management in the STIHL AP system" and a description starting with "Benefit now from the expertise of our experts"._

**Flag Elements**

The predefined slot configurations include the following Flag areas:

1. **Promo Flag**
1. **Top Flags**
1. **Bottom Flags**.

For usage guidelines, limitations, and behavior, see the [Flag component documentation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=19511-2443).

![Content & Assets](card/content-assets-66560-37472.png)

_Figure: Two orientations of an action card component: Vertical Orientation and Horizontal Orientation. The numbered callouts point to specific areas within these orientations: callout 1 highlights the Promo Flag area, callout 2 indicates the Top Flags area, and callout 3 marks the Bottom Flags area. The figure demonstrates how the Flag Elements, including the Promo Flag, Top Flags, and Bottom Flags, are positioned within the action card for both vertical and horizontal layouts._

**Image Aspect Ratio**

Cards with a Media Slot use defined image proportions to ensure consistent presentation across Card types.

These ratios are optimized for common layout scenarios and visual balance. Custom ratios are supported but should be used with care.

**Vertical Orientation**

- **16:9** Lower visual emphasis: Emphasizes card content over visuals.
- **4:3** Balanced visual emphasis and content proportions. Visual and content have equal emphasis.
- **3:4** Higher visual emphasis: Strong visual emphasis with reduced content space.

**Horizontal Orientation**

- **3:4** Lower visual emphasis: Suitable when content is the primary focus and the card needs to grow vertically.
- **1:1** Balanced visual emphasis and content proportions: Visual and content have equal emphasis.
- **4:3** Higher visual emphasis: Strong visual emphasis with reduced content space.

**Custom Ratios** Custom image aspect ratios can be used when needed. Be aware that non-standard ratios may scale differently across breakpoints and card sizes and can impact visual consistency.

[Product Cards](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25979) use component-specific image proportions.

![Content & Assets](card/content-assets-66560-37612.png)

_Figure: Different variants of the Card component with a Media Slot, illustrating various aspect ratios for both vertical and horizontal orientations. The measurements 16:9, 4:3, 3:4, and 1:1 refer to the aspect ratios of the images within the cards, indicating how much visual emphasis is placed on the image versus the content. The vertical orientation cards include ratios 16:9, 4:3, and 3:4, while the horizontal orientation cards include ratios 3:4 and 1:1. Each card contains a title "Charging and energy management in the STIHL AP system," descriptive text, and two buttons labeled "Button._

**Text Overflow**

As a general guideline:

- Headings and descriptions should not exceed three lines
- Metadata should not exceed two lines

Figma components are configured accordingly and truncate content that exceeds these limits.

**Exceptions**

Specific card variants or layouts may define different limits based on their content requirements. When necessary, line limits may be adjusted through the component’s Type settings.

![Content & Assets](card/content-assets-66560-37760.png)

_Figure: Two variants of an action card component: a vertical layout labeled with annotation-circle number 1 and a horizontal layout labeled with annotation-circle number 2. The vertical layout demonstrates text overflow with a heading truncated to three lines and metadata truncated to two lines, as indicated by the "Figma Sidebar" settings. The horizontal layout shows a full view of the content without truncation. The text examples illustrate proper text sizing and wrapping within the specified limits for headings, descriptions, and metadata._

**Don’t mix different content structures within a group of related Cards.** Keep the same types of content in a consistent order and position to support scanning and comparison.

![Content & Assets](card/content-assets-66439-54667.png)

_Figure: Five link-card-vertical components arranged horizontally, each with different content structures and layouts. Each card has a heading "Charging and energy management in the STIHL AP system" and a description starting with "Benefit now from the expertise of our experts...". The cards vary in their inclusion of a media area, graphic area, flags, description, metadata, and footer. The example is marked as a "Don't" because it mixes different content structures within a group of related cards, which is inconsistent and can hinder scanning and comparison._

## Surfaces 1/2

### Surface Variants

Surface Variants only affect the visual appearance of the Card and do not change its structure, behavior, or interaction model. All Cards support two surface variants:

#### Outlined (default)

The card container displays an outline. Recommended for most layouts, as it integrates well in grids and avoids visual overload in dense environments.

![Outlined (default)](card/outlined-default-57166-24569.png)

_Figure: Two variants of a card component: link-card-vertical and link-card-horizontal, both in the outlined state. Each card includes a graphic area, heading, description, metadata, footer, and flags, with medium padding and content sizing set to hug. The link-card-vertical has a vertical content orientation, while the link-card-horizontal has a vertical content orientation with the graphic area positioned to the left. The text "Promo Flag" is shown in both cards. The circled callouts highlight areas where additional details or flags are located._

#### Elevated

The card container displays a shadow. May be used to visually highlight specific cards or increase separation from the background.

Elevation **is not** an indicator of interactivity.

![Elevated](card/elevated-57166-24630.png)

_Figure: Two variants of a card component in an elevated state, which includes a shadow to visually highlight the cards. The first card is a vertical link-card with a heading "Charging and energy management in the STIHL AP system," a description, metadata, and flags. The second card is a horizontal link-card with the same heading and description, also including metadata and flags. Both cards have a medium padding and content sizing set to hug. The text "Promo Flag" is shown on both cards._

## Surfaces 2/2

### Page Backgrounds

Cards can be placed on different page background colors depending on the desired level of visual separation.

**Guideline:** When displaying large card collections or content-dense cards, a secondary background can improve contrast and scannability. Alternatively, reduce the number of cards per row to improve readability.

#### Primary Background

By default, cards should be placed on background-color / primary.

![Primary Background](card/primary-background-57309-21214.png)

_Figure: Two variants of a card component in the STIHL Design System: link-card-vertical and link-card-horizontal. Both variants include a media area, heading, description, flags, metadata, and footer. The link-card-vertical variant is shown in a horizontal layout with medium padding and content sizing set to hug, while the link-card-horizontal variant is shown in a vertical layout with the same padding and content sizing. The text "Primary Background" indicates that by default, cards should be placed on a background color labeled as primary._

#### Secondary Background

background-color / secondary may be used to increase visual separation between cards and surrounding content.

![Secondary Background](card/secondary-background-57309-22319.png)

_Figure: Two variants of a card component in the STIHL Design System: link-card-vertical and link-card-horizontal. Both variants use a secondary background to increase visual separation between cards and surrounding content. The link-card-vertical variant shows cards arranged in a vertical orientation with a medium padding and content sizing set to hug. The link-card-horizontal variant shows cards arranged in a horizontal orientation, also with medium padding and content sizing set to hug, and includes a vertical content orientation. Each card contains a media area, heading, description, flags, metadata, and a footer..._

## Layout 2/3

### Orientation

**Orientation variants**

Cards support two orientations: **Vertical** and **Horizontal**.

1. **Vertical Orientation (Default)** Slots are stacked vertically. Recommended for:
   - grids and collections
   - browsing-focused layouts
   - limited horizontal space
1. **Horizontal Orientation**
- Slots are arranged horizontally. Recommended for:
   - list layouts
   - content-heavy cards
   - layouts with extended text content or multiple actions

Cards provide a predefined responsive behavior that determines when it switches between vertical and horizontal orientations based on available space.

See [Responsive behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57026-35041) for responsive layout rules.

![Orientation](card/orientation-66560-35291.png)

_Figure: Two orientation variants of a Card component: Vertical Orientation (Default) and Horizontal Orientation. Callout 1 points to the Vertical Orientation, where slots are stacked vertically, and callout 2 points to the Horizontal Orientation, where slots are arranged horizontally. Each orientation includes a Media Slot, Header Slot, Footer Slot, and Supplementary Slot. The Figma Component Panel shows the component names xx-card-vertical and xx-card-horizontal, with settings for padding and content sizing._

**Horizontal Orientation Variants**

The horizontal orientation supports two layout variants.

1. **Vertical Content**
   - Media Slot placed on the left.
   - Header Slot and Footer Slot stacked vertically on the right.
   - Supplementary Slot placed below.
1. **Horizontal Content**
   - Media Slot, Header Slot, and Footer Slot placed side by side
      - Header Slot and Footer Slot are aligned to a container grid.
      - Default distribution: Header Slot 2/3, Footer Slot 1/3.
      - Slot width distribution can be customized by the user.

> Further customization in Figma requires **detaching** the component.

- Supplementary Slot placed below

![Orientation](card/orientation-66560-35321.png)

_Figure: Two orientation variants of the Card component in the STIHL Design System: Vertical Content and Horizontal Content. Callout 1 points to the Vertical Content variant, where the Media Slot is on the left, the Header Slot and Footer Slot are stacked vertically on the right, and the Supplementary Slot is below. Callout 2 points to the Horizontal Content variant, where the Media Slot, Header Slot, and Footer Slot are placed side by side, with the Header Slot taking up 2/3 of the container grid and the Footer Slot taking up 1/3, and the Supplementary Slot is below. The Figma Component Panel shows settings for padding, alignment, and content orientation for each variant._

## Sizing 2/3

### Figma: Content Sizing

In Figma, the Content Sizing property defines how a Card adapts its height to its content and layout context. Choose Hug or Fill depending on how the Card is used.

In code, this behavior is handled automatically when Cards are placed in a Grid. Cards adapt to the available height, and the Footer remains aligned to the bottom when the Card is taller than its content.

**Hug**

The card height is determined by its content.

- Content defines the overall height
- No elements stretch to fill available space
- Card height varies depending on content length

**Use when:**

- Cards appear in feeds or flowing layouts
- Visual alignment between cards is not required
- Cards are displayed individually

![Figma: Content Sizing](card/figma-content-sizing-57309-23431.png)

_Figure: Two orientations of a Card component: Vertical Orientation and Horizontal Orientation. It shows how the Content Sizing property in Figma affects the Card's height, with options for "hug" and "fill." The "hug" setting makes the card height determined by its content, while "fill" adapts the card to the available height. The figure includes examples of link-card-vertical and link-card-horizontal components with specified properties such as padding, content sizing, and content orientation. The Figma Component Panel indicates settings like padding and content sizing._

**Fill**

The card stretches to fill the available vertical space defined by its container.

- Content expands to occupy remaining space
- Header is anchored to the top, footer to the bottom
- Card height is consistent across items

**Use when:**

- Cards are displayed in grids or structured collections
- Visual alignment across cards is important
- Equal heights improve readability and comparison

![Figma: Content Sizing](card/figma-content-sizing-57309-23770.png)

_Figure: The Card component in the STIHL Design System, demonstrating both vertical and horizontal orientations. It shows how the card stretches to fill the available vertical space defined by its container, with the header anchored to the top and the footer to the bottom. The figure includes examples of content sizing set to "fill," ensuring consistent card height across items, which is useful for grids or structured collections to improve visual alignment, readability, and comparison. The Figma Component Panel indicates settings like padding set to "medium" and content sizing set to "fill," with an option for content orientation set to "vertical._

## Layout 3/3

### Padding

Cards support two defined padding options to adapt to different content densities and layout contexts. Use the same padding consistently across related Cards:

1. **Medium (default)** For content-rich or editorial layouts
1. **Small** For compact layouts such as dashboards or dense grids.

Individual Card types may restrict the available padding options when a consistent layout is required for their specific use case. For example, the Product Card uses a fixed padding configuration to maintain consistent product presentation and comparability across Cards.

Component-specific restrictions are documented on the respective Card page.

![Padding](card/padding-66560-36325.png)

_Figure: Two padding variants for card components in a UI design system: Medium (default) and Small. Callout 1 points to the Medium padding variant, which has a bottom padding of 24px, while callout 2 points to the Small padding variant, which has a bottom padding of 16px. The 32px measurement refers to the bottom padding of the Medium horizontal card. These padding options are used to adapt to different content densities and layout contexts, such as content-rich layouts for Medium and compact layouts like dashboards for Small._

## Sizing 3/3

### Size Constraints

Cards use recommended **minimum** and **maximum width**s per orientation to ensure readability, usability, and visual consistency. These values define shared design boundaries rather than fixed component dimensions.

Individual Card types may apply more restrictive size constraints based on their specific use case. Component-specific exceptions are documented on the respective component page.

Size constraints can inform responsive behavior, while the rules for orientation changes, wrapping, and other responsive adaptations are defined separately. See [Responsive Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57026-35041) for details.

#### Vertical Orientation

- **Minimum width:** 134px
- **Maximum width:** 719px

> **Important:** The minimum width should only be used for minimal card variants with up to two content elements. Content-dependent recommendations (supported elements and minimum combinations) are defined in [Amount of Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-8357).

![Vertical Orientation](card/vertical-orientation-66680-42184.png)

_Figure: The vertical orientation of a card component in a UI design system, specifically the action-card-vertical variant. The minimum width of 134px is for minimal card variants with up to two content elements, while the maximum width is 719px. The figure shows two examples: one with a small padding and hug content sizing, and another with medium padding and hug content sizing, both including a media slot and supplementary slot._

#### Horizontal Orientation — Content Vertical

(Media left, content stacked)

- **Minimum width:** 292px
- **Maximum width:** 1435px

> **Important:** The minimum width should only be used for minimal card variants with up to two content elements. Content-dependent rules (supported elements and minimum combinations) are defined in [Amount of Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-8357).

![Horizontal Orientation — Content Vertical](card/horizontal-orientation-content-vertical-66680-42207.png)

_Figure: Two variants of a card component with horizontal orientation and vertical content layout. The minimum width of 292px is for minimal card variants with up to two content elements, while the maximum width is 1435px. The first card has a small padding and includes an image, text labeled "Management," and a "Button." The second card has a medium padding and includes an image, a heading "Charging and energy management in the STIHL AP system," a subheading starting with "Benefit now from the expertise of our experts," two buttons labeled "Button," and an accordion element labeled "Accordion copy._

#### Horizontal Orientation — Content Horizontal

(Media, Header, and Footer aligned horizontally)

- **Minimum width:** 450px
- **Maximum width:** 1435px

> **Important:** The minimum width should only be used for minimal card variants with up to three content elements. Content-dependent rules (supported elements and minimum combinations) are defined in [Amount of Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-8357).

![Horizontal Orientation — Content Horizontal](card/horizontal-orientation-content-horizontal-66680-42230.png)

_Figure: Two variants of the "action-card-horizontal" component with a horizontal content orientation. The minimum width of 450px applies to minimal card variants with up to three content elements, while the maximum width is 1435px. The first card has small padding and includes a header with text and a button, while the second card has medium padding, includes an image, header text, metadata, two buttons, and an accordion._

## Link Card

A **Link Card** is a fully clickable card that navigates users to a single destination. It serves as a clear entry point to related content or pages and does not support internal interactive controls.

**Key Characteristics**

- Single interactive target: the entire card is clickable and focusable
- Optional visual link indicator: decorative affordance only, non-interactive (default is without indicator)
- Flexible layout: supports vertical and horizontal orientations
- Flexible media: supports multiple image aspect ratios
- Structured layout: predefined content areas (e.g. image, headline, text, metadata) can be included or omitted as needed

**Use a Link Card when**

- the entire card should navigate to a single destination
- previewing related content, articles, categories, or landing pages
- users need a clear and simple navigation pattern
- browsing collections, grids, or teaser layouts

**Do not use a Link Card when**

- multiple actions are required → use an **Action Card**
- the link destination is a poduct detail page → use a **Product Card**
- content is informational only and not meant for navigation
- users need to compare many attributes → use **Tables** or **Lists**

**Link Card Vertical**

**content sizing: hug**

**content sizing: fill**

**padding: medium**

**padding: small**

**Link Card Horizontal**

**padding: medium**

**content sizing: hug**

**content sizing: fill**

**content orientation:**

**vertical**

**content orientation: horizontal (with footer)**

**content orientation: horizontal (without footer)**

**padding: small**

**content orientation:**

**vertical**

**content orientation: horizontal (with footer)**

**content orientation: horizontal (without footer)**

**Building Blocks**

**focus**

### Decorative Link

### Media Area: Vertical

### Media Area: Horizontal

### Graphic Area

**aspect ratio: 16:9**

**aspect ratio: 4:3**

**filled**

**aspect ratio: 4:3**

**ghost**

**aspect ratio: 1:1**

**aspect ratio: 3:4**

**aspect ratio: 3:4**

### Card Surface (Variant)

**outlined**

**elevated**

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-cards-link-card--documentation)

### Related elements

[Action Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-6210)

[Product Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=50728-9936)

[Skeleton](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=49465-7294)

[Table → 🗓️ Coming soon](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11792)

[List → 🗓️ Coming soon](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=51015-14934)

[Carousel](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

1. **Card (Container)** The outer wrapper that defines layout, visual styling (elevation, radius), and interactive states.
1. **Media Area** Optional top section for visual content.
   1. **Flag: Promo highlight** For marketing or promotional messages (e.g. New, Promo, Sale). See [Foundation: Flag elements ](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-37466)for further information.
   1. **Media Content** Images, video, or other media.
1. **Header** Content area below the media.
   1. **Graphic Area** Placeholder for logos, icons or illsutrations.
   1. **Heading** Primary heading (required accessible label).
   1. **Description** Optional supporting text.
   1. **Heading Icon** Optional chevron icon indicating navigation. Use only in reduced card variants.
1. **Footer** Bottom section.
   1. **Metadata** Author, date, reading time, etc.
   1. **Flags** Categories, attributes, or status indicators. See [Foundation: Flag elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-37466) for further information.
   1. **Decorative Link** Optional visual link indicator; use sparingly.

![Anatomy](card/anatomy-44431-13650.png)

_Figure: The anatomy of a Card component in both vertical and horizontal orientations. Each numbered callout points to specific parts of the card: 1 points to the Card Container, 2 points to the Media Area, 3 points to the Header, and 4 points to the Footer. The vertical orientation includes detailed annotations for the Promo Flag, Media Content, Graphic Area, Heading, Description, Metadata, and Decorative Link, while the horizontal orientation shows a similar structure but laid out horizontally._

### Layout

**Orientation**

Link Cards follow the shared Card orientation and layout principles. See [Foundations: Layout](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-34684).

**Vertical Orientation**

Vertical is the default orientation for Link Cards. The fixed content areas are stacked vertically.

The Footer can be toggled off when it is not required.

![Layout](card/layout-44431-13753.png)

_Figure: The vertical orientation layout of a Link Card component named link-card-vertical. This layout stacks the fixed content areas vertically, including a Media Area, Header, and Footer, with medium padding and content sizing set to hug. The Figma Component Panel shows the component's properties, including options to toggle the Footer on or off._

**Horizontal Orientation Variants**

Link Cards use fixed content areas and support the following configurations:

1. **Vertical Content** The Media Area is placed on the left, with Header and Footer stacked vertically on the right.
1. **Horizontal Content (with Footer)** Media Area, Header, and Footer are placed side by side. The Header occupies 2/3 and the Footer 1/3 of the content area.
1. **Horizontal Content (without Footer)** The Footer is removed and the Header uses the available content area.

> **Info:** In code the behavior can be achieved by using [container queries](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/templates-cards-link-card-responsive--documentation).

![Layout](card/layout-44898-28733.png)

_Figure: Three layout variants of a Link Card component in a UI design system. Each numbered callout points to a different content orientation: 1 indicates Vertical Content orientation where the Media Area is on the left and the Header and Footer are stacked vertically on the right, 2 shows Horizontal Content orientation with Footer where Media Area, Header, and Footer are side by side with specific width ratios, and 3 depicts Horizontal Content orientation without Footer where the Footer is removed and the Header uses the full available content area. The Figma Component Panel shows the content orientation options: vertical, horizontal with footer, and horizontal without footer._

### Size Constraints

Link Cards follow the shared Card size constraints.

See [Foundation: Size Constraints](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66680-42433) for guidance.

### Resizing Behavior

Link Cards use the shared Card Resizing Behavior model.

See [Foundations: Resizing Behaviour](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57629-18329) for guidance.

## Content and Assets

### Amount of Elements

#### Maximum Number of Elements

A Link Card should not exceed the following elements:

- Promo Flag (Highlight variant, one flag permitted)
- Media Area (i.e. images or video)
- Graphic Area (svg, png, jpeg)
- Heading (required)
- Description
- Metadata (up to two lines)
- Flags (up to six)
- Decorative Link

> **Accessibility note:** The Heading is mandatory, as it serves as the accessible label for screen readers. All other elements are optional.

![Maximum Number of Elements](card/maximum-number-of-elements-44615-15227.png)

_Figure: Two variants of a Link Card component: one with a vertical orientation and the other with a horizontal orientation. Each card includes a Promo Flag, Media Area, Graphic Area, Heading, Description, Metadata, Flags, and a Decorative Link. The vertical orientation card is laid out with elements stacked vertically, while the horizontal orientation card arranges elements side by side. The Heading is mandatory for accessibility, serving as the label for screen readers. The cards demonstrate the maximum number of elements allowed, including up to six Flags and two lines of Metadata._

#### Minimum 2 Elements required

A Link Card must contain at least two elements:

- Heading (required)
- One additional element of choice

> **Accessibility note:** The Heading is mandatory, as it serves as the accessible label for screen readers. All other elements are optional.

![Minimum 2 Elements required](card/minimum-2-elements-required-44964-12860.png)

_Figure: Various layouts of a Link Card component from the STIHL Design System, each containing a heading and at least one additional element. The elements include media area, graphic area, description, heading icon, metadata, flags, and decorative link. Each card has medium padding and content sizing set to hug, with content orientation being vertical in some horizontal layouts. The heading is mandatory for accessibility, serving as the label for screen readers, while other elements are optional._

### Elements

**Shared elements**

The Link Card follows the shared Card guidelines for the following elements and content behavior:

- Heading Styles
- Graphic Area Sizes
- Image Aspect Ratio
- Text Overflow

See [Foundations: Content & Assets](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-36566) for details.

**Flag Elements**

The Link Card component provides two Flag areas:

1. **Promo Flag**
1. **Bottom Flags**

A Top Flag area is not supported, as Link Card use cases do not require the additional flag flexibility provided by the Action Card.

For shared usage guidelines, limitations, and behavior, see [Foundations: Flag Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-37466).

![Elements](card/elements-54975-18248.png)

_Figure: Two variants of the Link Card component: Vertical Orientation and Horizontal Orientation. Each card includes a Promo Flag at the top, a media area, heading text, description text, metadata, and footer with flags. The numbered callouts point to the Promo Flag areas (number 1) and the bottom flags (number 2) in both orientations. The cards follow shared guidelines for heading styles, graphic area sizes, image aspect ratio, and text overflow._

**Heading Icon**

A Heading Icon (chevron) may be displayed to indicate navigation.

Use only in cards with:

1. **Heading only**
1. **Heading + Image**

Intended for short headings in cards leading to i.e. categories or overview pages.

![Elements](card/elements-48813-9929.png)

_Figure: Two variants of a link-card component with a heading icon, specifically a chevron, indicating navigation. Callout 1 points to a vertical link-card with a heading only, while callout 2 points to both a vertical and a horizontal link-card that include a heading, image, and additional content. The heading icon is used to signify that these cards lead to categories or overview pages._

**Decorative Link**

The Decorative Link is an optional visual indicator used to emphasize that a card is clickable. By **default**, cards **do not include** a Decorative Link.

**Use a Decorative Link when:**

- The card’s clickability is not immediately obvious
- The card contains varied content and the Link needs stronger emphasis
- You want increased visual prominence (e.g. marketing or promotional content)
- The link leads to a deeper page or indicates navigation “away” from the current context

The Decorative Link is available in two style variants: **Ghost** and **Filled**.

- **Ghost (default):** Use in most cases. Always pair with an icon to reinforce clickability.
- **Filled:** Use sparingly, reserved for high-priority or especially important links.

![Elements](card/elements-44961-12404.png)

_Figure: Various styles of a Decorative Link component used in a UI design system. It shows different combinations of variants (filled and ghost), sizes (medium and small), and icon positions (none, left, right). Each button is labeled with its specific configuration, such as "filled medium" for a filled variant with a medium size and no icon, or "ghost small" for a ghost variant with a small size and an icon on the right._

## Behavior & Usage

### Interactivity

Link Cards are interactive by default, as their primary purpose is navigation. They behave like a Link and therefore inherit the following states:

- **Enabled** Default interactive state.
- **Hover / Pressed** Visual feedback when a user hovers over or clicks the card.
- **Focus** Indicates the card is currently focused.

Link Cards do not support a disabled state. If navigation is unavailable, do not render the card.

Link Cards support both **Outlined** and **Elevated** surface variants. Surface variants only affect the visual appearance of the card and do not change its interaction behavior or available states.

![Interactivity](card/interactivity-44431-13715.png)

_Figure: Link Cards in both vertical and horizontal orientations, showcasing their interactive states: enabled, hover/pressed, and focus. It includes outlined and elevated surface variants, with each card featuring a graphic area, heading, description, metadata, and footer. The cards are interactive by default, with visual feedback for hover/pressed and focus states, and support both outlined and elevated appearances. The padding is medium, and content sizing is set to hug. The cursor type is pointer, indicating that the cards are clickable for navigation._

### Usage in Context

Link Cards support all shared Card Layout Contexts.

**Supported layouts:** - Standalone - Grid - Carousel - List

Link Cards are most commonly used in Grid layouts for content discovery and navigation. See [Foundations: Layout Context](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=56949-32316) for guidance.

### Responsive Behavior

Link Cards use the shared Card Responsive Behavior model.

Orientation changes are based on available width and follow the rules defined in [Foundations: Responsive Behaviour](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57026-35041).

## Accessiblity

### Heading = Accessible Label

The Heading is **mandatory** for every Link Card. It provides the accessible name used by screen readers and must clearly describe the card’s destination.

**Guidelines:**

- Headings must be descriptive and meaningful out of context.
- Avoid generic Headings such as “Learn more” or “Read more” without additional context.
- Do not rely on descriptions, metadata, or icons to communicate the primary meaning of the card.

**If a card does not have a clear Heading, it is not accessible.**

![Heading = Accessible Label](card/heading-accessible-label-44615-15160.png)

_Figure: A Link Card component variant named link-card-vertical. It includes a mandatory Accessible Label as the Heading, which is "Charging and energy management in the STIHL AP system." The component has a description that reads, "Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances." The card has medium padding and content sizing set to hug. The Heading provides a clear and descriptive name for screen readers, ensuring the card is accessible._

### Interaction Principle

A Link Card represents a single, primary navigation action. The entire card links to one destination.

The Decorative Link is a visual affordance that reinforces the card’s navigational behavior. It helps users recognize that the card is clickable and leads to another destination.

**Use the Decorative Link when:**

- The card’s clickability may not be immediately obvious.
- Cards appear in dense layouts with many surrounding UI elements.
- Additional visual guidance helps users identify navigation opportunities.

**Do not use the Decorative Link when:**

- The card’s interactive nature is already clear through context, layout, or visual treatment.
- It competes with other visual elements or creates unnecessary visual noise.

The Decorative Link is purely visual and is not an interactive element. The entire card remains the single interactive target.

**Guidelines**

- Do not place additional Links or Buttons inside a Link Card.
- One Link Card should communicate one intent and lead to one destination.
- Use the Decorative Link consistently within a collection or layout.

![Interaction Principle](card/interaction-principle-44615-15179.png)

_Figure: Two variants of a Link Card component: one in vertical orientation and the other in horizontal orientation. Both variants include a Promo Flag, media area, heading titled "Charging and energy management in the STIHL AP system," a description, metadata with flags, a decorative link, and a footer. The decorative link is visually indicated with a pointer cursor, reinforcing that the entire card is clickable and navigates to another destination. The horizontal variant has medium padding, content sizing set to hug, and content orientation set to vertical. The decorative link is used to enhance the recognition of the card's clickability..._

### Keyboard Navigation

Link Cards must be fully operable using a keyboard.

- The card must be reachable via keyboard navigation
- The entire card represents a single focusable element
- Pressing Enter activates the card and navigates to its destination

**Best Practice** Do not place additional focusable elements inside a Link Card. All content within the card belongs to a single navigation target.

![Keyboard Navigation](card/keyboard-navigation-56651-18034.png)

_Figure: Two variants of a link-card component: vertical orientation and horizontal orientation. Each card includes a promo flag, heading, description, metadata with flags, a decorative link, and a media area. The cards are designed to be fully operable using a keyboard, meaning the entire card is a single focusable element that navigates to its destination when Enter is pressed. The padding is medium, and the content sizing is set to hug the content. The best practice is to avoid placing additional focusable elements inside a link card, ensuring all content within the card belongs to a single navigation target._

## Examples

> The use case examples shown feature the new Link Card concept and do not reflect the current state of the product.

### Corporate STIHL Journal

A grid of Link Cards used to surface editorial articles and navigate to individual journal entries.

![Corporate STIHL Journal](card/corporate-stihl-journal-44615-15304.png)

_Figure: A grid of Link Card Vertical components used in the Corporate STIHL Journal to showcase editorial articles. Each Link Card Vertical includes a media area, description, footer, and has medium padding with content sizing set to either hug or fill. The layout features a top-bar in the grid variant with two areas and a nav-bar in the main variant, both at the xl breakpoint. The text elements include headings, descriptions, and flags within each card, with navigation options like "Search Site," "Contact," and "English" in the top-bar._

### STIHL Career — Job Listings

A list of Link Cards presenting job openings where each card links to the respective job detail page.

![STIHL Career — Job Listings](card/stihl-career-job-listings-44974-29810.png)

_Figure: A section of the STIHL Career page titled "Stellenangebote" featuring a list of job openings presented as Link Cards. Each Link Card is a horizontal component with a heading, description, flags, footer, medium padding, content sizing set to hug, and a horizontal content orientation with a footer. The top of the page includes a top-bar in the grid variant for the main breakpoint without the brand add-on, and a nav-bar in the main variant for the main breakpoint. The cards include job titles such as "Praktikum Group Compliance Management" and locations like "Waiblingen" and "Dieburg._

## Action Card

An **Action Card** is a slot-based container that combines content and one or more explicit user actions within a structured layout. By default, the card itself is not interactive and does not act as a navigation element. It enables focused interactions through clearly defined internal controls.

**Key Characteristics**

- No card-level interaction by default: interaction primarily occurs through internal controls; Card-level navigation may be added for specific patterns.
- Internal interactions only: interactive elements inside the card (e.g. buttons, accordions) are focusable and actionable
- At least one action required: the card must contain a minimum of one interactive element
- Flexible layout: supports vertical and horizontal orientations
- Flexible media: supports multiple image aspect ratios
- Slot-based structure: supports up to four configurable slots (Media, Header, Footer, Supplementary)

**Use an Action Card when:**

- Users need to perform one or more actions directly within the card.
- The primary interaction is completing a task rather than navigation.
- Multiple interactive elements are required.
- Contextual information and related actions should be grouped within the same container.

**Do not use an Action Card when:**

- The card serves navigation only and links to a single destination → use a **Link Card**
- The primary interaction is selecting one card among others → use a **Selectable Card**
- Users need to compare many attributes → use **Tables** or **Lists**

**Action Card Vertical**

**content sizing: hug**

**content sizing: fill**

**padding: medium**

**padding: small**

**Action Card Horizontal**

**padding: medium**

**content sizing: hug**

**content sizing: fill**

**content orientation:**

**vertical**

**content orientation: horizontal (with footer)**

**padding: small**

**content orientation:**

**vertical**

**content orientation: horizontal (with footer)**

**Building Blocks**

**focus**

### Media Slot

### Header Slot

### Footer Slot

### Supplementary Slot

**Vertical**

**Horizontal**

**aspect ratio: 16:9**

**aspect ratio: 3:4**

**aspect ratio: 4:3**

**aspect ratio: 1:1**

**aspect ratio: 3:4**

### Footer Slot - Actions

### Graphic Area

**aspect ratio: 4:3**

### Card Surface (Variant)

**outlined**

**elevated**

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-cards-action-card--documentation)

### Related elements

[Link Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=43951-17695)

[Product Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=50728-9936)

[Skeleton](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=49465-7294)

[Table → 🗓️ Coming soon](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11792)

[List → 🗓️ Coming soon](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=51015-14934)

[Carousel](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

**Card Structure**

The **Action Card** is built on a slot-based structure, which defines fixed areas of the card that establish layout, accessibility, and interaction rules.

In Figma, each card variant is delivered pre-filled with recommended content structure representing the most common and validated use cases. Designers can adapt or replace these as needed, while the underlying slot structure remains consistent.

1. **Card (Container)** The outer wrapper that contains all slots and defines layout properties such as padding, border, elevation, and corner radius.
1. **Media Slot (Optional)** Reserved area for visual or decorative content.
   1. **Promo Flag** Highlights marketing or promotional messages (e.g. New, Promo, Sale).
   1. **Media Content** Images, video, or other visual media.
1. **Header Slot** Primary content area of the card. This slot cannot be hidden because it contains the card Heading, which is required for accessibility.
   1. **Top Flags** Categories, attributes, or status indicators.
   1. **Graphic Area** Placeholder for logos, icons or illsutrations
   1. **Heading** Primary heading and required accessible label.
   1. **Description** Optional supporting text.
1. **Footer Slot** Area for interactive elements. This slot cannot be hidden because it contains the card’s actions.
   1. **Metadata** Author, date, reading time, etc.
   1. **Bottom Flags** Categories, attributes, or status indicators.
   1. **Buttons** Primary actions (i.e. Save, Delete).
1. **Supplementary Slot** Additional area for secondary or expandable content.
   1. **Accordion** Reveals additional or advanced information on demand.

> **Note:** The Figma slot feature will be integrated once the functionality is out of [beta](https://help.figma.com/hc/en-us/articles/38231200344599-Use-slots-to-build-flexible-components-in-Figma).

![Anatomy](card/anatomy-56725-21257.png)

_Figure: The anatomy of an Action Card component in both vertical and horizontal orientations, detailing its slot-based structure. Each numbered callout points to specific slots within the card: 1 points to the entire Card container, 2 points to the Media Slot, 3 points to the Header Slot, 4 points to the Footer Slot, and 5 points to the Supplementary Slot. The figure shows the recommended content structure for each slot, including elements like the Promo Flag, Header Slot content, Footer Slot content, and Accordion copy._

### Layout

Action Cards follow the shared Layout guidelines.

See [Foundations: Layout](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=56949-32316) for guidance.

### Size Constraints

Action Cards follow the shared Card size constraints.

See [Foundations: Size Constraints](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66680-42433) for guidance.

### Resizing Behavior

Action Cards use the shared Card Resizing Behavior model.

See [Foundations: Resizing Behaviour](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57629-18329) for guidance.

## Content and Assets

### Amount of Elements

#### Maximum Number of Elements

There is **no defined maximum** number of elements for Action Cards.

However, avoid overcrowding the card to ensure it remains scannable, easy to understand, and adaptable to smaller screens and constrained layouts.

![Maximum Number of Elements](card/maximum-number-of-elements-47366-8361.png)

_Figure: Two variants of an Action Card component: one with a vertical orientation and the other with a horizontal orientation. Both variants include a supplementary slot, a media slot, medium padding, and content sizing set to hug. The vertical orientation has content arranged in a column, while the horizontal orientation arranges content in a row with vertical content orientation. The text elements include a "Promo Flag," a title "Charging and energy management in the STIHL AP system," descriptive text, "Metadata," "Flag," "Button," and "Accordion copy." The documentation advises against overcrowding the card to maintain scannability and adaptability to smaller screens._

#### Minimum Number of Elements

An Action Card must contain at least two elements:

- Heading (required)
- At least one action element (e.g. a Button)

> **Accessibility note:** The Heading is mandatory, as it serves as the accessible label for screen readers. All other elements are optional.

![Minimum Number of Elements](card/minimum-number-of-elements-47366-8368.png)

_Figure: An action-card-vertical component with padding set to medium and content sizing set to hug. It includes a heading that reads "Charging and energy management in the STIHL AP system" and a button labeled "Button text." The heading is mandatory for accessibility, serving as the label for screen readers, while the button is an example of an action element._

### Slot Elements

**Shared elements**

The Action Card follows the shared Card guidelines for the following elements and content behavior:

- Heading Styles
- Flag Elements
- Graphic Area Sizes
- Image Aspect Ratio
- Text Overflow

See [Foundations: Content & Assets](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-36566) for details.

**Button Group**

The **Footer Slot** fill pattern includes a Button Group consisting of two buttons: one primary and one secondary.

**Layout options:**

- **Non-stretch (default)**
   - Buttons keep their intrinsic width
   - Buttons wrap when horizontal space is insufficient
   - If buttons do not fit side by side, they stack vertically
- **Stretch**
   - Buttons fill the available width
   - Supports horizontal and vertical orientation
   - In both orientations, both buttons expand to the full available width

This configuration allows flexible layouts while giving designers control over balance and emphasis.

> This section will be updated once the main Button Group component is finalized.

![Slot Elements](card/slot-elements-48944-13201.png)

_Figure: Various layouts of an Action Card component, specifically the "action-card-vertical" and "action-card-horizontal" variants. It illustrates two main layout options: "Non-stretch (default)" and "Stretch," each showing different configurations of buttons within the card's footer slot. The cards include elements such as headings, flag elements, graphic areas, and text overflow, with buttons that either wrap or stretch based on available space. The "Non-stretch" layout shows buttons keeping their intrinsic width and wrapping when space is insufficient, while the "Stretch" layout shows buttons stretching to fill available space..._

**Accordion**

The **Supplementary Slot** fill pattern includes the Accordion component.

When expanded, the Action Card container grows vertically to accommodate the Accordion content.

If the main focus is expanding/collapsing information → use an **Expandable Card (out of scope)**

![Slot Elements](card/slot-elements-48944-13226.png)

_Figure: Two variants of an action card component: one with vertical orientation and one with horizontal orientation. Both variants include a supplementary slot, a media slot, medium padding, and content sizing set to hug. The vertical orientation shows the action card with an accordion component that expands vertically to reveal additional content when activated. The horizontal orientation shows the action card with an accordion component that expands to the right to reveal additional content. The text "Charging and energy management in the STIHL AP system" is used as an example title, and "Button text" and "Button" are placeholders for action buttons..._

### Custom Slot Content

Action Card slots are pre-filled with component instances. These instances can be swapped with any other component (including user-created components) without detaching the card.

This allows designers to incorporate custom designs for use cases not covered by the predefined content structure. When doing so, ensure that cards remain scannable, not overloaded, and aligned with STIHL design guidelines.

**Allowed Interactive Elements** The Action Card supports interactive elements such as:

- Button
- Link
- Switch
- Checkbox
- Accordion
- Popover

> Note: The slot feature will be integrated once Figma’s Slots functionality is out of beta.

![Custom Slot Content](card/custom-slot-content-57292-24205.png)

_Figure: Two variants of an Action Card component: "Vertical Orientation" and "Horizontal Orientation." Each variant includes a header slot with a heading copy "Charging and energy management in the STIHL AP system," a description copy "Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-performance appliances," a graphic area, and flags at the top. Both variants have a supplementary slot, media slot, medium padding, and content sizing set to hug. The vertical orientation has content orientation set to horizontal, while the horizontal orientation has it set to vertical..._

## Behavior & Usage

### Interactivity

**Default behavior: non-interactive** By default, Action Cards are not interactive. Interaction occurs only through internal elements (e.g. buttons or accordions). The card container itself does not respond to hover, press, or focus states. For certain pattern a full card link can be added (i.e. for Product Cards).

![Interactivity](card/interactivity-49138-47624.png)

_Figure: Two variants of an Action Card component: "action-card-vertical" and "action-card-horizontal". Both variants include a supplementary slot, media slot, medium padding, and content sizing set to hug. The vertical orientation stacks elements vertically, while the horizontal orientation arranges elements side by side with content oriented vertically. The text "Charging and energy management in the STIHL AP system" and "Benefit now from the expertise of our experts - because you deserve advice an..." is shown within both card variants. Each card contains interactive elements such as "Button" and "Accordion copy". By default, the cards are non-interactive..._

### Usage in Context

Action Cards support all shared Card Layout Contexts.

**Supported layouts:** - Standalone - Grid - Carousel - List

Action Cards are most commonly used in Grid layouts for action-driven collections and task-oriented experiences. See [Foundations: Layout Contexts](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=56949-32316) for guidance.

### Responsive Behavior

Action Cards use the shared Card Responsive Behavior model.

Orientation changes are based on available width and follow the rules defined in [Foundations: Responsive Behaviour](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57026-35041).

## Accessiblity

### Heading = Accessible Label

The Heading is **mandatory** for every Action Card. It identifies the Card and provides the context for its actions.

**Guidelines:**

- Headings must be descriptive and meaningful out of context.
- Avoid generic headings such as “Learn more” or “Read more” without additional context.
- Do not rely on descriptions, metadata, or icons to communicate the primary meaning of the card.

**If a card does not have a clear Heading, it is not accessible.**

![Heading = Accessible Label](card/heading-accessible-label-47366-8349.png)

_Figure: An Action Card component, specifically the action-card-vertical variant. This card includes a media slot at the top with medium padding and content sizing set to hug. The Accessible Label, which is mandatory, is shown as "Charging and energy management in the STIHL AP system." Below the heading, there is additional descriptive text and a button labeled "Continue with this Action." The Heading identifies the card and provides context for its actions, ensuring it is descriptive and meaningful out of context._

### Keyboard Navigation

Action Cards must be fully operable using a keyboard.

- Interactive elements must remain independently focusable.
- Focus order should follow the visual reading order.
- Users must be able to access all actions using keyboard navigation.
- The Action Card container itself must not receive focus (as long as the full card doesn’t feature a link).

![Keyboard Navigation](card/keyboard-navigation-56821-19622.png)

_Figure: An action-card-vertical component with a vertical layout, featuring a supplementary slot, a media slot, medium padding, and content sizing set to hug. The card includes a title "Charging and energy management in the STIHL AP system", a description "Benefit now from the expertise of our experts - because you deserve advice and service just as much as high-perf...", two buttons labeled "Button", and an accordion element labeled "Accordion copy". The figure emphasizes that action cards must be fully operable using a keyboard, with interactive elements independently focusable and following the visual reading order..._

## Examples

> The use case examples shown feature the new Action Card concept and do not reflect the current state of the product.

### My STIHL Website Product Details Page

![My STIHL Website Product Details Page](card/my-stihl-website-product-details-page-54975-19134.png)

_Figure: A Card component on the My STIHL Website Product Details Page. It includes three product price cards with different availability statuses: "Available now," "In stock within 2-3 weeks," and "Out of stock." Each price card shows a price and an orange arrow button. Below the price cards, there is a section for scheduling service appointments and a list of service protocols with PDF icons and creation dates. The service appointment section includes a photo of a technician, a description, a next service date, and two buttons labeled "Make an appointment" and "Set or change reminder." The service protocols section lists two protocols with titles and creation dates._

## Selectable Card

A **Selectable Card** is an input component based on the structure of the **Action Card** that represents a selectable option within a group.

Unlike the Action Card:

- The entire Card is the interaction target and acts as a selectable option.
- No additional interactive elements such as Buttons or Accordions are supported.

The control property determines whether the Card uses Radio or Checkbox semantics. Selectable Cards are always used within a **Selectable Card Group**.

**Key characteristics**

- Two control types:
   - **Radio** for single-select
   - **Checkbox** for multi-select.
- Context-rich options: Supporting content such as descriptions, images, icons, or metadata can help users evaluate and distinguish options.
- Group-based usage: Selectable Cards always belong to a Selectable Card Group, which defines how the available options work together.

**When to use**

- options require more context or visual support than standard Radio Buttons or Checkboxes provide
- users need to evaluate or compare information before making a selection
- supporting content helps users distinguish between available options

Selectable Card – Control type: Radio

- plan or pricing selection
- product variant selection
- shipping method selection
- configuration or mode selection
- quizzes or single-choice questions

Selectable Card – Control type: Checkbox

- feature or add-on selection
- preference or interest selection
- product selection

**When not to use**

- options only require short labels → use Radio Buttons or Checkboxes
- choosing from a large number of options → consider a Select / Dropdown / Combobox
- switching between views or modes → use Tabs (navigate between related content views) / Segmented Control (switch between mutually exclusive modes/states)
- navigating to a destination → use a Link Card
- a control represents a separate or secondary interaction within an otherwise interactive Card → use the appropriate Card type with a separate Checkbox
- controlling a single on/off setting → use a Switch

![Selectable Card](card/selectable-card-64762-37015.png)

_Figure: Various layouts and states of a Selectable Card component from the STIHL Design System. It shows cards with and without a media slot, different content sizing options (hug and fill), and two control types (checkbox and radio). The figure illustrates padding variations (medium and small) and demonstrates how the entire card acts as an interaction target, with no additional interactive elements like buttons or accordions. Each card structure includes a footer slot and is shown in an enabled, unselected, and valid state. The "Promo Flag" and "Charging and energy management in the STIHL AP system" text are used as examples within the cards._

![Selectable Card](card/selectable-card-64762-37030.png)

_Figure: Various layouts and states of a "Selectable Card Horizontal" component from the STIHL Design System. It shows cards with different content orientations (vertical and horizontal with footer), padding sizes (medium and small), content sizing (hug and fill), and control types (checkbox and radio). Each card includes a media slot, a promo flag, a title, a description, metadata, and flags, illustrating how these elements are arranged based on the specified parameters._

![Selectable Card](card/selectable-card-64762-37057.png)

_Figure: Various configurations and states of a "Selectable Card" component from the STIHL Design System. It includes different aspect ratios for images such as 16:9, 4:3, and 1:1, and shows components like the "graphic-area," "flag," "card-surface," "media-slot," and "building-element-radio." Each layout demonstrates how these elements are arranged within the card, including header and footer slots, and different states like enabled, hover, disabled, and invalid for the radio control. The measurements refer to the size of graphic areas and aspect ratios of image placeholders. The figure also highlights the use of flags with labels like "Flag" and "Promo Flag," and their respective colors._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-cards-action-card--documentation#selectable-card)

### Related elements

Selectable Card Group

[Checkbox](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

[Link Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25977)

[Action Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25978)

### Out of scope

- Embedded Actions other than the select functionality
- Expandable / accordion behavior
- Navigation behavior
- Mixed interaction patterns

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

**Card Structure**

The Selectable Card combines a Control with supporting content within a single interactive Card.

Available content may vary depending on the use case, while the Control and Heading are always required.

1. **Card Container (Required)** The outer wrapper that defines the layout, visual styling, and interactive states. The entire Card acts as the selection target.
1. **Control Indicator (Required)** Radio Button or Checkbox that communicates the control type.
   1. **Radio Button** Used when only one option can be selected within a group.
   1. **Checkbox** Used when multiple options can be selected independently.
1. **Media Slot (Optional)** Reserved area for visual or decorative content.
   1. **Promo Flag** Highlights marketing or promotional messages (e.g. New, Promo, Sale).
   1. **Media Content** Images.
1. **Header Slot (Required)** Primary content area of the Card. This slot cannot be hidden because it contains the Card Heading, which is required for accessibility.
   1. **Top Flags (Optional)** Categories, attributes, or status indicators.
   1. **Graphic Area (Optional)** Placeholder for an icon, logo, or illustration that supports identification or understanding of the option.
   1. **Heading (Required)** Primary text that identifies the selectable option.
   1. **Description (Optional)** Supporting text that provides additional context about the option.
1. **Footer Slot (Optional)** Area for supporting information that helps users evaluate or distinguish the option.
   1. **Metadata** Author, date, reading time, etc.
   1. **Bottom Flags** Categories, attributes, or status indicators.

![Anatomy](card/anatomy-66439-55402.png)

_Figure: The anatomy of a Selectable Card component in both vertical and horizontal orientations, detailing its structure and various slots. The numbered callouts point to specific parts of the card: 1 indicates the Card Container, 2 points to the Control Indicator, 3 highlights the Media Slot, 4 refers to the Header Slot, and 5 indicates the Footer Slot. The figure also shows different states and content sizing options, such as the checkbox selection control and the hug content sizing, with medium padding and a media slot included._

#### Don’t modify Figma properties labeled “⛔️ Internal (do not modify)

These properties are exposed by nested instances and are required for the component to work correctly.

Use the corresponding configurable properties provided on the main component instead.

![Don’t modify Figma properties labeled “⛔️ Internal (do not modify)](card/don-t-modify-figma-properties-labeled-internal-do-not-modify-67169-48192.png)

_Figure: The Figma property panel of the Selectable Card Component, specifically the selectable-card-xx variant. It shows various configurable properties such as control type, content sizing, padding, and media slot, as well as internal properties labeled "⛔️ Internal (do not modify)" which should not be altered. The example is marked as a "Don't" because it demonstrates properties that are internally managed and should not be modified to ensure the component functions correctly._

### Layout

Selectable Cards follow the shared Layout guidelines.

See [Foundations: Layout](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=56949-32316) for guidance.

### Sizing & Constraints

Selectable Cards follow the shared sizing and resizing principles defined in [Foundations: Sizing](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57629-18329).

**Minimum Width — Vertical Orientation**

The default minimum width for Vertical Selectable Cards is **186 px**. This width is used by the Selectable Card Group for its standard responsive behavior.

The shared minimum width defined in [Foundations: Size Constraints](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66680-42433) can be applied explicitly for more compact layouts. Use the reduced minimum width only for Cards without images, as the Control would cover too much of the image at smaller widths. Card content must also remain concise and readable.

See [Selectable Card Group: Responsive Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-54745) for group-specific responsive behavior.

![Sizing & Constraints](card/sizing-constraints-66439-55734.png)

_Figure: Two vertical selectable cards, one with a media slot and one without. The default minimum width for the vertical selectable card with a media slot is 186 pixels, while the global minimum width for cards without images is 134 pixels. The reduced minimum width should only be used for cards without images to prevent the selection control from covering too much of the image._

### Resizing Behavior

Selectable Cards use the shared Card Resizing Behavior model.

See [Foundations: Resizing Behaviour](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57629-18329) for guidance.

See Selectable [Card Group: Responsive Behavior](https://www.figma.com/design/85WZPFzg47eXkktIfwvDiq?node-id=64125-22452) for group-specific wrapping and orientation changes.

## Content and Assets

### Amount of Elements

#### Minimum Number of Elements

A Selectable Card must contain at least three elements:

1. **Control** (required)
1. **Heading** (required)
1. **At least one additional element** (required, such as an Image, Description, Graphic Area, or Metadata)

The Control and Heading are always present. The additional element provides the context that helps users understand, distinguish, or evaluate the available options.

![Minimum Number of Elements](card/minimum-number-of-elements-66439-55199.png)

_Figure: Two variants of a Selectable Card component in a vertical layout. The first card includes a checkbox control, a heading, and description text, while the second card includes a checkbox control, a heading, and an image. Callout 1 points at the checkbox control, callout 2 points at the heading, and callout 3 points at the additional element, which is either description text or an image. The cards demonstrate the minimum number of elements required for a Selectable Card, which are a control, a heading, and at least one additional element to provide context._

**Don’t use a Selectable Card when options only require a Heading. Use standard Radio Buttons or Checkboxes instead.**

![Minimum Number of Elements](card/minimum-number-of-elements-66439-55209.png)

_Figure: A "Don't" example of using a Selectable Card when options only require a Heading. Instead, it suggests using standard Radio Buttons or Checkboxes. The figure includes a Selectable Card with a checkbox and a Radio Button labeled "Radio Label". The text "use a radio button instead" indicates the recommended alternative._

#### Additional Content

Include additional content only when it helps users understand, distinguish, or evaluate the available options.

Additional content may include:

1. **Description**
1. **Media Content**
1. **Promo Flags**
1. **Graphic Area**
1. **Metadata or supporting information**

There is no defined maximum number of elements. Avoid adding content that does not contribute to the selection decision. If an option requires extensive information to understand, consider whether a Selectable Card is still the appropriate pattern.

![Additional Content](card/additional-content-66439-55219.png)

_Figure: A vertical variant of a selectable card component with a checkbox control and medium padding. The numbered callouts point to the following elements: 1 refers to the main content area with a title and description, 2 points to the media slot containing an image placeholder, 3 indicates a promo flag in the top right corner, 4 highlights the title and description text, and 5 points to the metadata section at the bottom with flags. The card includes additional content such as a description, media content, a promo flag, a graphic area, and metadata to help users understand, distinguish, or evaluate the available options._

**Do use a consistent content structure across Selectable Cards within the same group where possible.**

Similar types of information should be presented in the same position and order to support scanning and comparison.

![Additional Content](card/additional-content-66439-55226.png)

_Figure: Three selectable-card-vertical components with a checkbox selection control, medium padding, and a media slot. Each card has a consistent structure: a title, a description, and a price note. The cards are laid out horizontally, demonstrating a "Do" example of maintaining a consistent content structure across selectable cards within the same group to support scanning and comparison. The first card is highlighted with an "Our recommended service" label._

### Heading

The Heading identifies the selectable option and is required for every Selectable Card. It should clearly distinguish the option from others within the same Selectable Card Group.

Keep Headings concise, specific, and easy to scan. Avoid relying on supporting content such as descriptions, images, or metadata to communicate the primary meaning of the option.

See [Foundations: Heading](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-37167) for further guidance.

![Heading](card/heading-66439-55239.png)

_Figure: Three instances of the selectable-card-vertical component, each with a checkbox control, hug content sizing, medium padding, and a media slot. Each card has a Heading that identifies the selectable option: "Pickup," "Delivery," and "Shipping." The cards include additional text such as "Ready in: 2 hours," "Free," "No dealer available," "Arrives by: Thu, May 24," and "Shipping: $50." The first card is highlighted with a bold border, indicating it is selected._

### Description

The Description provides optional supporting information that helps users understand, distinguish, or evaluate the selectable option.

Keep descriptions concise and focused on information that is relevant to the selection decision. Avoid repeating information already communicated by the Heading or adding details that are not necessary to evaluate the option.

![Description](card/description-66439-55263.png)

_Figure: Two variants of a selectable card component: one with a vertical orientation and the other with a horizontal orientation. Each card includes a checkbox for selection control, a promo flag, a heading titled "Charging and energy management in the STIHL AP system," a description providing additional information, metadata, and three flag labels. The vertical orientation has content sizing set to hug and medium padding, while the horizontal orientation has content sizing set to hug, medium padding, and a vertical content orientation._

### Media & Graphic Content

Media and graphic content are optional and should only be used when they help users identify, distinguish, or evaluate the selectable option.

#### Image

Images can provide additional visual context when appearance is relevant to the selection decision.

Use images consistently within the same Selectable Card Group. Avoid mixing Cards with and without images within the same group, as this can reduce visual consistency and comparability.

In Vertical Orientation, using an image changes the Card layout and the position of the Control.

Images follow the shared Card image proportions and resizing behavior. See [Foundations: Image Aspect Ratio](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66560-37606).

![Image](card/image-66439-55302.png)

_Figure: A vertical orientation selectable-card-group with four selectable cards, each containing an image, text, and a radio button for selection control. Each card includes a title and description, with the images following shared card image proportions. The group is labeled "sägen und schneiden (6)" at the top. The text next to the figure advises consistent use of images within the same selectable card group and notes that mixing cards with and without images can reduce visual consistency and comparability._

### Interactive Content

Selection must remain the sole interaction within a Selectable Card. The Control represents the Card itself and can be a Radio Button or Checkbox, depending on the Group’s control type.

For interaction models and supported interactive content across Card types, see [Foundations: Card Types by primary Interaction](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-8389).

**Don’t use a Switch in place of a Control.** A Switch represents an on/off state and is a different interaction pattern; it does not represent selecting an option.

When the Card itself is the option and no other interactions are needed, use a Selectable Card with Radio or Checkbox behavior.

When a Card contains additional actions and users need to independently select an item, for example to add it to a comparison or list, use an Action Card with a Checkbox. The Checkbox is a separate action and does not make the Card a Selectable Card. Radio Buttons are not supported in this pattern, as they represent selection between mutually exclusive options within a group.

![Interactive Content](card/interactive-content-66439-55376.png)

_Figure: Correct and incorrect usage of interactive content within cards in a UI design system. The "Don't" example shows a card-surface with an outlined variant and enabled state, containing a switch labeled "Label" which is incorrect because a switch should not be used in place of a control for selection. Instead, the correct usage is shown with a selectable-card-vertical using a radio button or checkbox for selection, and an action card with a checkbox labeled "Checkbox Label". The layout includes a media slot with a 16:9 aspect ratio, a header slot with descriptive text and heading, and a card-button-group..._

## Behavior & Usage

### Interactivity

The entire Selectable Card acts as a single selection target. Clicking or tapping anywhere on the Card changes its selection state.

The Card’s selection behavior is determined by the control type and configuration of its Selectable Card Group.

For Radio and Checkbox selection rules, see [Selectable Card Group: Control Type](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-54684).

![Interactivity](card/interactivity-66439-55915.png)

_Figure: Two variants of a vertical Selectable Card component: one with a Radio selection control and the other with a Checkbox selection control. Both cards have a "Promo Flag" at the top, an image placeholder, a title "Charging and energy management in the STIHL AP system," a description starting with "Benefit now from the expertise of our experts," and a section labeled "Metadata" with tags labeled "Flag." The cards have medium padding and the content size is set to hug the content. The cursor type is pointer, indicating interactivity. The entire card acts as a single selection target, changing its selection state when clicked or tapped._

### States

Selectable Cards communicate both their current interaction state and selection state. The same state model applies to Radio and Checkbox variants.

**Enabled** The Card is available for selection and is not currently selected.

**Hover / Pressed** Provides visual feedback when the Card is hovered with a pointer or pressed.

**Focus** Indicates that the Card has keyboard focus. Focus must remain visually distinguishable from the selected state.

**Disabled** The Card is unavailable for selection and cannot be interacted with.

**Enabled + Invalid** Indicates that the option is available for selection and is part of a Group with a validation error.

**Hover/Pressed + Invalid** Provides interaction feedback while communicating the Group’s invalid state.

**Focus + Invalid** Indicates that the Card has keyboard focus while communicating the Group’s invalid state. Both focus and invalid states must remain perceivable.

**Selected + Enabled** Indicates that the option represented by the Card is currently selected.

**Selected + Hover / Pressed** Provides interaction feedback while maintaining the selected state.

**Selected + Focus** Indicates that a selected Card currently has keyboard focus. Both selection and focus must remain perceivable.

**Selected + Disabled** Indicates a selected option that is currently disabled.

**Selected + Enabled + Invalid** Maintains the selected state while communicating the group’s invalid state.

**Selected + Hover / Pressed + Invalid** Provides interaction feedback while maintaining the selected state and communicating the Group’s invalid state.

**Selected + Focus + Invalid** Indicates that a selected Card has keyboard focus while communicating the Group’s invalid state. Selection, focus, and invalid states must remain perceivable.

> Validation is managed at group level. See [here](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-54715) for validation behavior and requirements.

![States](card/states-66439-55932.png)

_Figure: Selectable-card-vertical components with a checkbox selection control, medium padding, and a media slot, illustrating various states and variants. The cards are shown in outlined and elevated styles across different states such as enabled, hover/pressed, focus, disabled, and enabled + invalid. Each state demonstrates how the card appears when selected, hovered, focused, or invalid, with visual distinctions to indicate interaction availability and selection status. The text and layout remain consistent across states, with variations in border, background color, and focus indicators to convey interactivity and selection clearly._

### Usage in Context

Selectable Cards are used as part of a Selectable Card Group and should not be used as standalone elements.

See [Selectable Card Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=64762-38158) for further guidance.

### Responsive Behavior

The responsive behavior of individual Selectable Cards follows the shared Card responsive principles and is based on the available container space rather than viewport breakpoints.

See [Selectable Card Group: Responsive Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-54745) for group-specific behavior.

## Accessibility

### Semantics

Selectable Cards preserve the semantics and state of their underlying Control Type:

- **Radio:** Uses native Radio Button semantics.
- **Checkbox:** Uses native Checkbox semantics.

The Card presentation and Card-level interaction target must not change or replace the expected semantics of the underlying control.

![Semantics](card/semantics-66439-55846.png)

_Figure: Two variants of a Card component: one with a radio button and another with a checkbox. Each card has a label "Charging and energy management in the STIHL AP system" and additional text describing benefits. The radio button card includes a "Radio Label" and the checkbox card includes a "Checkbox Label." The radio button and checkbox preserve their native semantics and states, ensuring that the card presentation does not alter the expected behavior of these controls._

### Accessible Name

Each Selectable Card must have an accessible name that clearly identifies the selectable option.

The Heading provides the accessible name for the underlying Radio Button or Checkbox and must therefore always be present.

Supporting content such as the Description, Media Content, Graphic Area, or Metadata should not replace the Heading as the accessible name.

The accessible name should remain concise and distinguish the option from other Selectable Cards within the same group.

Group-level labeling is defined separately. See [Selectable Card Group: Legend](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-55017).

![Accessible Name](card/accessible-name-66439-55867.png)

_Figure: Three selectable-card-vertical components, each with a checkbox selection control, medium padding, and a media slot. Each card includes a heading, description, and price information. The headings are "STIHL Pro Servicing," "STIHL Servicing," and "STIHL Check," which serve as the accessible names for the underlying checkboxes. The first card has an additional label "Our recommended service." The content sizing is set to hug, meaning the content determines the size of the card._

### Focus

Selectable Cards must provide a clearly visible focus indicator when they receive keyboard focus.

#### Visible Focus

The focus indicator applies to the Card as a whole, making it clear which selectable option currently has keyboard focus.

Focus must remain visible across all Card states, including when the Card is selected or invalid.

![Visible Focus](card/visible-focus-66439-55879.png)

_Figure: A selectable-card-vertical component with visible focus. The Card has a checkbox for selection control, medium padding, and includes a media slot at the top. The focus indicator highlights the entire Card, indicating which option currently has keyboard focus. The text "Focus" at the top signifies the focus state, and the Card includes content such as "STIHL Check" and "Price on request". The focus must remain visible in all states, including when the Card is selected or invalid._

#### Focus vs. Selected

Focus and selection communicate different states and must remain visually distinguishable. A selected Card may also receive focus, but the selected styling must not replace or obscure the focus indicator.

Keyboard navigation and focus movement between Selectable Cards are defined at group level. See [Selectable Card Group: Keyboard Navigation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-55086).

![Focus vs. Selected](card/focus-vs-selected-66439-55886.png)

_Figure: Two variants of a selectable-card-vertical component, illustrating the "Focus" and "Selected + Focus" states. The "Focus" variant shows a card with a focus indicator, while the "Selected + Focus" variant shows a card with both a selection indicator and a focus indicator. The cards have a medium padding, hug content sizing, and include a media slot. The text next to the figure explains that focus and selection communicate different states and must remain visually distinguishable, with the selected styling not replacing or obscuring the focus indicator._

### Touch Target

The entire Selectable Card acts as the touch target, not only the visible Control.

For general touchscreen guidance, see [Foundations: Touchscreen Device Considerations](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=56949-28389).

![Touch Target](card/touch-target-66439-55897.png)

_Figure: A vertical selectable card component from the STIHL Design System. The entire card acts as the touch target, not just the visible checkbox control. The card includes a title "STIHL Servicing", a description "Includes checking device functionality, replacing parts, and cleaning", and a price note "Price on request". The card has a media slot with an image at the top, medium padding, and content sizing set to hug._

## Selectable Card Group

A **Selectable Card Group** organizes related Selectable Cards into a single selection field. It defines how the Cards work together, including their selection model, layout, keyboard interaction, and validation.

The control property determines whether the group uses [**Radio**](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728) or [**Checkbox**](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316) behavior, while the orientation property determines whether Cards are arranged horizontally or vertically.

**Key characteristics**

- Radio or Checkbox: Supports single-select Radio groups and multi-select Checkbox groups. All Cards within a group use the same control type.
- Manageable option sets: Best suited to a limited number of options that users can easily scan and compare.
- Flexible layout: Cards can be arranged horizontally or vertically and adapt to the available container space.
- Group-level behavior: Selection rules, keyboard interaction, and validation are managed at group level.
- Group-level accessibility: The group establishes the relationship between its options, including group semantics, labeling, and error association.

**Relationship to Selectable Cards**

- **Selectable Cards** represent an individual option and define its content, structure, interaction, and visual states.
- **Selectable Card Group** defines how multiple Selectable Cards are arranged and behave together.
- A **Selectable Card** is always used within a Selectable Card Group.

![Selectable Card Group](card/selectable-card-group-64762-38167.png)

_Figure: A Selectable Card Group component, showcasing both horizontal and vertical orientations with radio and checkbox controls. It displays various states such as valid and invalid, and includes elements like system feedback messages and promo flags. The measurements refer to properties like content sizing, padding, and the presence of media slots. Each card variant is labeled with specific attributes such as control type, content sizing, padding, and content orientation._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-cards-action-card-group--documentation)

### Related elements

Selectable Card

[Checkbox Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1017-2316)

[Radio Group](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=860-2728)

[Fieldset](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=8-154)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

**Group Structure**

The Selectable Card Group combines related Selectable Cards into a single selection field. It provides the structure required to identify the group, present supporting guidance, and communicate validation feedback.

1. **Legend (Required)** Identifies the purpose of the Selectable Card Group and provides shared context for its options. The Legend may be visually hidden when the context is already clear, but must always remain accessible to screen readers.
1. **Info Button (Optional)** Opens a popover with additional information.
1. **Hint (Optional)** Supporting text that provides additional instructions or information relevant to making a selection.
1. **System Feedback (Optional)** Validation feedback displayed when the current selection does not meet the group’s requirements.
1. **Selectable Cards (Required)** Set of two or more related Selectable Cards that represent the available options. All Cards within the group use the same control type. The structure, content, and states of individual Cards are defined by the Selectable Card component.

![Anatomy](card/anatomy-66439-54413.png)

_Figure: The anatomy of a Selectable Card Group component in a horizontal layout, highlighting its structure and various elements. Callout 1 points to the legend labeled "Selectable Card Group Legend," which identifies the group's purpose. Callout 2 points to the optional info button, which opens additional information. Callout 3 indicates the hint text, providing supporting guidance. Callout 4 shows the system feedback message area, and callout 5 points to the individual selectable cards within the group, each containing a promo flag, title, description, metadata, and flags. The group includes four selectable cards with radio buttons for selection, and the group is marked as invalid._

### Layout

**Orientation**

The Selectable Card Group supports two orientations: Horizontal and Vertical. The selected orientation determines how Selectable Cards are arranged within the group and which Card orientation is used.

1. **Horizontal** Selectable Cards are arranged side by side. The Horizontal Group orientation uses Vertical Selectable Cards to support comparison across options. The Horizontal orientation is structurally comparable to the [Radio Group with Image](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=41031-16492).
1. **Vertical** Selectable Cards are arranged one below another. The Vertical Group orientation uses Horizontal Selectable Cards to make efficient use of the available horizontal space.

Responsive changes to the arrangement and Card orientation are defined under [Responsive Behavior](https://www.figma.com/design/85WZPFzg47eXkktIfwvDiq?node-id=64125-22452).

![Layout](card/layout-66439-54431.png)

_Figure: Two orientations for the Selectable Card Group component: Horizontal and Vertical. In the Horizontal orientation, Selectable Cards are arranged side by side, each using a Vertical layout to support comparison. In the Vertical orientation, Selectable Cards are stacked one below the other, each using a Horizontal layout. Both orientations use radio buttons for selection control and include a legend and hint text labeled "Selectable Card Group Legend" and "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." respectively. Each card contains an image, title, description, metadata, and flags._

### Sizing & Constraints

**Group Width**

The Selectable Card Group adapts to the available width of its parent container **(1)**. Selectable Cards distribute evenly within a row and fill the available space while respecting their defined minimum **(2)** and maximum **(3)** widths.

When Cards reach their maximum width, they stop growing and remain left-aligned within the Group.

See [Selectable Card: Sizing & Constraints](https://www.figma.com/design/85WZPFzg47eXkktIfwvDiq?node-id=63836-30335) for Card-specific minimum and maximum widths.

![Sizing & Constraints](card/sizing-constraints-66439-54458.png)

_Figure: The sizing and constraints of a Selectable Card Group component, demonstrating how it adapts to the width of its parent container. Callout 1 points to the Selectable Card Group evenly distributing within a row and filling the available space. Callout 2 shows the cards respecting their defined minimum width of 186px, while callout 3 indicates the cards reaching their maximum width of 719px and remaining left-aligned within the group. The labels "fill", "container width", "fill (max.719px)", and "fill (min.186px)" refer to the flexible sizing constraints of the cards within the group._

## Behavior & Usage

### Control Types

The Selectable Card Group defines how selection works across its Cards. The control type determines the selection behavior, and all Cards within a Group use the same control type.

A Group contains at least two Cards and has no defined maximum. For larger sets of options, vertical orientation is recommended for easier scanning.

**Radio (single selection)**

- Only one Card can be selected at a time.
- Selecting another Card replaces the current selection.
- A selected Card can't be deselected by clicking it again. To change the selection, select a different Card.
- A Group can start with one Card preselected or with no selection.

**Checkbox (multiple selection)**

- Each Card can be selected and deselected independently.
- Selecting one Card doesn't affect the other Cards.
- Any number of Cards can be selected, including none.
- The Group can define a minimum or maximum number of selections.

Selection requirements and related error handling are defined under [Validation](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=66439-54715).

![Control Types](card/control-types-66439-54694.png)

_Figure: Two variants of the Selectable Card Group component: Radio and Checkbox. Each variant shows four cards in a horizontal layout, with the Radio variant allowing single selection and the Checkbox variant allowing multiple selections. The Radio variant has one card selected, indicated by an orange dot, while the Checkbox variant has three cards selected, indicated by checkmarks. Each card contains the text "Charging and energy management in the STIHL AP system" and a hint text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauris turpis magna. Quisque ut mi rhoncus eget." The legend text "Selectable Card Group Legend" is shown above the cards._

### Validation

Validation is handled at the Selectable Card Group level. When the selection does not meet the defined requirements, the Group and its Selectable Cards enter an invalid state and a single Error Message is displayed below the Cards.

**Radio** A Radio Group can be required. It becomes invalid when no option is selected.

**Checkbox** A Checkbox Group can define minimum or maximum selection requirements. It becomes invalid when these requirements are not met.

The Error Message should clearly communicate how to resolve the error, for example:

- “Select an option.”
- “Select at least 2 options.”
- “Select no more than 3 options.”

Individual Selectable Cards do not display separate validation messages.

Validation timing follows the behavior of the surrounding form. Once the selection meets the defined requirements, the invalid state and Error Message are removed.

![Validation](card/validation-66439-54725.png)

_Figure: Two variants of a selectable-card-group component: one using radio buttons and the other using checkboxes, both in an invalid state with a horizontal orientation. The radio group is labeled "Radio" and indicates an error message "Select an option" because no option is selected. The checkbox group is labeled "Checkbox" and shows an error message "Select no more than 3 options" because the selection exceeds the defined maximum. Each card within the groups has a title "Charging and energy management in the STIHL AP system" and a subtitle "Benefit now from the expertise of our experts - because you deserve advice an..."..._

### Responsive Behavior

#### Orientation

The Selectable Card Group adapts to the available container space rather than viewport breakpoints.

**Horizontal Orientation** Selectable Cards are arranged side by side and distribute evenly across the available container width.

When there is not enough space to maintain the default minimum Card width, Cards wrap onto additional rows one by one as needed.

**Vertical Orientation** Selectable Cards are stacked vertically and use the Horizontal Card. When the available container width becomes too narrow for the Horizontal Card, all Cards within the Group switch to the Vertical Card.

In Figma, this change from Horizontal to Vertical Card does not happen automatically and must be applied manually when designing for narrower container sizes.

Responsive changes apply consistently across the Group.

See [Selectable Card: Sizing & Constraints](https://www.figma.com/design/85WZPFzg47eXkktIfwvDiq?node-id=63836-30335) for Card-specific minimum and maximum widths.

![Orientation](card/orientation-66439-54759.png)

_Figure: The Selectable Card Group component in both horizontal and vertical orientations. In the horizontal orientation, cards are arranged side by side and wrap to additional rows when space is insufficient. In the vertical orientation, cards are stacked vertically and switch to a vertical layout when the container width is too narrow. The component includes a legend labeled "Selectable Card Group Legend" and a hint text starting with "Lorem ipsum dolor sit amet". The selection control is a radio button, and the component is shown in a valid state._

#### Figma: Maintaining Card Size When Wrapping

> For Horizontal Orientation, the component includes two **📐 Layout Helper**s in Figma by default. They ensure that Cards maintain the correct size when wrapping. The Layout Helpers are located within the Slot and can be accessed through the Layers panel. They are not available in the component’s Properties panel. Use **📐 Layout Helper** 1 **+ 📐 Layout Helpe**r 2 when two Card positions remain empty. U**se 📐 Layout Help**er 1 when one Card position remains empty. When using more than four Cards, add additional Layout Helpers as needed.

![Figma: Maintaining Card Size When Wrapping](card/figma-maintaining-card-size-when-wrapping-66439-54809.png)

_Figure: A "selectable-card-group" component in a horizontal orientation with a legend titled "Selectable Card Group Legend" and a hint text. Callout 1 points to the first group of cards with two layout helpers visible, while callout 2 points to another group of cards with one layout helper visible. The layout helpers, labeled "📐 layout helper 1" and "📐 layout helper 2," ensure that cards maintain their size when wrapping, especially when card positions remain empty._

#### Spacing

The gaps between Cards in Horizontal Group orientation use dynamic spacing tokens. Unlike the Group’s responsive layout behavior, which responds to the available container width, spacing values are determined by the active Variable Mode.

Ensure that the appropriate Variable Mode is applied to your design.

[See all Spacing Guidelines →](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=2-1934&t=ZxWmeoCh3JbSEpcm-4)

![Spacing](card/spacing-66439-54841.png)

_Figure: A selectable-card-group component in a horizontal orientation, showing its layout at two different breakpoints: Breakpoint XL and Breakpoint M. The cards are spaced dynamically based on the active Variable Mode, not the container width. Each card includes a radio button for selection, a title "Charging and energy management in the STIHL AP system", and a description starting with "Benefit now from the expertise of our experts - because you deserve advice an...". The legend above the cards reads "Selectable Card Group Legend" and includes a hint text starting with "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc amet mauri..."._

### Placement

The Selectable Card Group is ideally placed within the appropriate Grid Content Areas:

1. **Main** Used for spacious layouts that take advantage of the full grid width.
1. **Narrow Left and Narrow Center** Typically used to keep layouts more compact and visually restrained.
1. **Two Thirds** Commonly used when a [Stepper](https://www.figma.com/design/85WZPFzg47eXkktIfwvDiq?node-id=26075-10497) is positioned to the left or right of the main content.

[See all Grid Guidelines →](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid---Spacing-%F0%9F%A7%AE?node-id=1-857&t=ZxWmeoCh3JbSEpcm-4)

![Placement](card/placement-66439-54867.png)

_Figure: The placement of the Selectable Card Group component within different Grid Content Areas. Callout 1 points to the Main area, which is used for spacious layouts. Callout 2 points to the Narrow Left area, which is used for more compact layouts. Callout 3 points to the Two Thirds area, commonly used when a Stepper is positioned to the left or right of the main content._

## Accessibility

### Legend

The Selectable Card Group must always have an accessible Legend that identifies the purpose of the selection field and provides shared context for its options.

**All Selectable Cards within the Group must be programmatically associated with this Legend.**

The Legend should be visible by default. It may be visually hidden when displaying it would be redundant or unnecessary in the given context, but it must remain programmatically available to screen readers.

Each Selectable Card retains its own accessible name through its Heading.

![Legend](card/legend-66439-55024.png)

_Figure: Two variants of a selectable-card-group component with a legend labeled "Delivery Method." The first variant shows the legend as visible by default, while the second variant shows the legend hidden but still accessible to screen readers. Each card within the group represents different delivery options: "Pickup," "Delivery," and "Shipping," each with its own details and selection control via radio buttons. The legend provides context for the selection field and is programmatically associated with all selectable cards._

**Do provide a Legend that clearly describes what users are selecting.**

![Legend](card/legend-66439-55054.png)

_Figure: A selectable-card-group component with a horizontal orientation and radio buttons for selection control. It includes a legend labeled "Delivery Method" and three cards: "Pickup" with details "Ready in: 2 hours" and "Free," "Delivery" with the note "No dealer available," and "Shipping" with details "Arrives by: Thu, May 24" and "Shipping: $50." This example is marked as a "Do" because it provides a clear legend that describes what users are selecting._

**Don’t remove the Legend from the accessibility tree when hiding it visually.**

![Legend](card/legend-66439-55070.png)

_Figure: A "selectable-card-group" component with the legend "Delivery Method" and a hint text. It includes three selectable cards labeled "Pickup," "Delivery," and "Shipping," each with specific details such as "Ready in: 2 hours," "No dealer available," and "Arrives by: Thu, May 24." The board is marked as a "Don't" example, indicating that the legend should not be removed from the accessibility tree when hiding it visually._

### Keyboard Navigation

Keyboard interaction follows the expected behavior of the underlying Radio Buttons and Checkboxes. Navigation differs depending on the control type.

**Radio**

Tab moves focus into and out of the Radio Group rather than between individual Radio Selectable Cards.

- Arrow keys move focus between Radio Selectable Cards and automatically select the focused option.
- Moving to another option replaces the previous selection.

![Keyboard Navigation](card/keyboard-navigation-66439-55095.png)

_Figure: The keyboard navigation for the selectable-card-vertical component in the STIHL Design System, which uses checkboxes for selection control, hugs content sizing, has medium padding, and includes a media slot. It shows three Radio Selectable Cards with the focus moving between them using the arrow left or arrow right keys, automatically selecting the focused option. The text describes how navigation works, specifying that arrow keys move focus between cards and replace the previous selection._

**Checkbox**

Each Checkbox Selectable Card is an individual Tab stop.

- Tab moves focus between Checkbox Selectable Cards.
- Space toggles the selection state of the focused Card.
- Arrow keys do not navigate between Checkbox Selectable Cards.

![Keyboard Navigation](card/keyboard-navigation-66439-55115.png)

_Figure: Three Checkbox Selectable Cards in a horizontal layout, each representing a selectable-card-vertical component with a checkbox selection control, medium padding, and a media slot. The cards are labeled "Charging and energy management in the STIHL AP system" and include additional text and flags. The first card is highlighted to indicate it is focused. The text explains that the Tab key moves focus between the cards, and the Space key toggles the selection state of the focused card. Arrow keys do not navigate between the cards._

## Examples

> The use case examples shown feature the new Selectable Card concept and do not reflect the current state of the product.

### STIHL Website

Delivery selection during the checkout process (Radio).

![STIHL Website](card/stihl-website-66439-55139.png)

_Figure: A selectable-card-group component for choosing a delivery method during the checkout process on the STIHL Website. This component includes three radio buttons labeled "Pickup," "Delivery," and "Shipping," arranged horizontally. The "Pickup" option is selected and indicates it is ready in 2 hours for free, while the "Delivery" option is unavailable, and the "Shipping" option arrives by Thursday, May 24, with a cost of $50._

### STIHL App

Service package selection for STIHL tools (Radio).

![STIHL App](card/stihl-app-66439-55144.png)

_Figure: Three vertical selectable cards labeled "STIHL Servicing," "STIHL Check," and "STIHL Pro Servicing," each with a checkbox for selection. Each card includes an image, a title, a brief description, and a "Price on request" button. The card for "STIHL Pro Servicing" has an additional label "Our recommended service." The cards have medium padding and content sizing that hugs the content._

### STIHL.de

Tool selection during battery advisor steps (Checkbox).

![STIHL.de](card/stihl-de-66439-55155.png)

_Figure: A vertical stepper component with a selectable-card-group labeled "1 Gerätekategorien" and a hint text asking users to select all relevant tool categories. The selectable-card-group includes three cards with radio buttons for selection, each representing different types of tools such as "MSA Motorsägen," "HLA Heckenschneider," and "HSA Heckenscheren." The numbered callouts on the right side, labeled "1" through "6," point to placeholder labels with an optional hint, indicating where additional labels and hints can be added._

## Product Card

The **Product Card** is a predefined pattern built on top of the **Action Card**. It reuses the same slot-based structure but provides pre-filled content and layout conventions optimized for product-related use cases.

**Unlike the default Action Card, the Product Card is interactive by default** and acts as a navigation element while still supporting additional internal actions.

This pattern is designed for scenarios where users explore product information and perform related actions, such as adding a product to favorites or adding it to the cart.

The Product Card supports both **Grid** and **List View** layouts, adapting to different user needs:

- **Grid View** = browsing
- **List View** = comparing

**Key Characteristics**

- Card-level interaction: the card container is clickable and focusable and typically navigates to a product detail page
- Additional internal actions: secondary actions (e.g. Add to favorites, Add to cart) remain interactive within the card
- Defined media behavior: supports a predefined image aspect ratio optimized for product imagery
- Slot-based structure: based on the Action Card with three slots (Media, Header, Footer)

**Use the Product Card when** Use this pattern when users need to explore product information and perform related actions, such as browsing or comparing products.

**When not to use a Product Card** Use another card type if the primary interaction is not to explore product information.

**Product Card: Grid View**

**content sizing: hug**

**content sizing: fill**

**Product Card: List View**

**media query: 1435 - 766px**

**content sizing: fill**

**content sizing: hug**

**media query: 765 - 540px**

**content sizing: hug**

**content sizing: fill**

**media query: 539 - 420px**

**content sizing: hug**

**content sizing: fill**

**media query: 539 - 420px**

**content sizing: hug**

**content sizing: fill**

**Building Blocks**

**focus**

### Product Card: Grid View

**Media Slot**

**Header Slot**

**Footer Slot**

**Top Button**

### Product Card: List View

**Media Slot**

**Header Slot**

**Footer Slot**

**Buttom Button**

### General

**Battery Logos**

**Rating**

**Status**

**Card Surface (Variant)**

**outlined**

**elevated**

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/templates-cards-product-card-in-grid--documentation)

### Related elements

[Link Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=43951-17695)

[Action Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=47366-6210)

[Skeleton](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=49465-7294)

[Carousel](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

Available elements and their positioning vary between Grid View and List View.

**Grid View**

1. **Media Slot**
   1. **Media Type: Image (i) or Carousel (ii)**
   1. **Battery Logo**
   1. **Add-to-Favorite Button**
1. **Header Slot**
   1. **Promo Flag**
   1. **Product Name**
   1. **Rating**
   1. **Product Category**
   1. **Description**
   1. **Status**
1. **Footer Slot**
   1. **Price Information**
   1. **Add-to-Cart Button**
   1. **Compare Checkbox**

![Anatomy](card/anatomy-54990-20630.png)

_Figure: The anatomy of a product card component in Grid View, illustrating the available elements and their positioning. The numbered callouts indicate specific areas: 1 points to the Media Slot, which can be an Image (i) or Carousel (ii), 2 points to the Product Information section including Promo Flag, Productname, Rating, Product Category, Description, and Status, and 3 points to the Footer Slot containing Price Information, Add-to-Cart Button, and Compare Checkbox. The annotations highlight different parts of the card, showing how elements are positioned within the Grid View layout._

**List view**

1. **Media Slot**
   1. **Image**
   1. **Battery Logo**
1. **Header Slot**
   1. **Promo Flag**
   1. **Product Name**
   1. **Rating**
   1. **Product Category**
   1. **Description**
1. **Footer Slot**
   1. **Price Information**
   1. **Status**
   1. **Add-to-Cart Button**
   1. **Add-to-Favorite Button**
   1. **Compare Checkbox**

![Anatomy](card/anatomy-55180-25794.png)

_Figure: A product card in list view layout from the STIHL Design System. The numbered callouts indicate specific elements within the card: 1a points to the Media Slot containing an Image and a Battery Logo, 1b points to the Header Slot, 2 points to the Promo Flag, 2a points to the Product Name, 2b points to the Rating, 2c points to the Product Category, 2d points to the Description, 2e points to the Footer Slot, 3 points to the Price Information, 3a points to the Status, 3b points to the Add-to-Cart Button, 3c points to the Add-to-Favorite Button, 3d points to the Compare Checkbox, and 3e points to the Compare Checkbox label..._

### View types

The Product Card supports multiple view types depending on the browsing and decision-making context.

**Grid View**

Optimized for browsing and exploratory experiences.

- Strong emphasis on product imagery
- Reduced information density
- Supports quick scanning across multiple products
- Best suited for inspiration-driven browsing

**Common use cases:**

- Category pages (PLP)
- Related products
- Campaign and landing pages

**Selection Guidance:** Prefer Grid View when visual browsing and product discovery are the primary goals.

![View types](card/view-types-54990-20687.png)

_Figure: The Product Card component in a grid view layout, showing both desktop and mobile variants. The grid view emphasizes product imagery with reduced information density, including elements like Promo Flag, Productname, rating, Categorie, a short description, availability status, price including VAT, and a Compare checkbox. The grid view is optimized for browsing and exploratory experiences, supporting quick scanning across multiple products._

**List view**

Optimized for comparison and decision-making.

- Increased information density
- Provides structured product information (e.g. specifications and attributes)
- Uses smaller product imagery to prioritize content density
- Supports side-by-side evaluation of products
- Best suited for products that require more consideration before selection

**Common use cases:**

- Search results pages
- Comparison-oriented product listings
- Specification-heavy product categories

**Selection Guidance:** Prefer List View when users need to evaluate specifications, compare products, or make informed purchase decisions.

![View types](card/view-types-55161-21932.png)

_Figure: The product-card component in list view, showing two different layouts: one for desktop and one for mobile. The desktop layout is optimized for a container query between 1435px and 766px with content sizing set to fill, while the mobile layout is for a container query between 419px and 272px with content sizing set to hug. Each card includes elements such as "Promo Flag," "Productname," rating, "Categorie," description, price, availability status, "Add to cart" button, and a "Compare" checkbox. The list view is designed to increase information density, support side-by-side evaluation, and is best suited for detailed product comparison and decision-making._

### Sizing & Constraints

The Product Card defines recommended **minimum** and **maximum** widths per View Type to ensure readability and visual consistency. These values define sizing boundaries rather than fixed component dimensions.

Size constraints can inform responsive behavior, while view-specific responsive adaptations are defined separately under [Responsive Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=54990-22424).

#### Grid View

- **Minimum width:** 148px
- **Maximum width:** 719px

![Grid View](card/grid-view-54990-20824.png)

_Figure: A product-card component in a grid view layout, showing both minimum and maximum width constraints. The minimum width of 148px refers to the smallest size the card can be resized to while maintaining functionality, and the maximum width of 719px refers to the largest size the card can be resized to. The card includes elements such as "Promo Flag", "Productname", rating "3.5 (80)", "Categorie", "Short description of the product", "Available now", price "11.199,00 € incl. VAT", and a "Compare" checkbox._

#### List View

- **Minimum width:** 227px
- **Maximum width:** 1435px

![List View](card/list-view-54990-20846.png)

_Figure: The "product-card" component in a "list view" variant, showing two different width states. The minimum width of 272px and the maximum width of 1435px refer to the container sizes for this component. The component includes elements such as "Promo Flag", "Productname", rating "3.5 (80)", "Categorie", description text, price "11.199,00 € incl. VAT", availability status "Available now", and action buttons "Add" or "Add to cart"._

#### Height Guidance

Product Cards should maintain a consistent visual rhythm while supporting their intended use case.

1. **Grid View**
   - Supports larger card heights to emphasize product imagery and visual exploration
   - Height may vary based on content and image proportions
   - Consistent heights are recommended within a collection
1. **List View**
   - Prefers compact heights to maximize information density
   - Supports efficient comparison and evaluation
   - Consistent heights are recommended within a collection

![Height Guidance](card/height-guidance-54990-20903.png)

_Figure: Two layouts for Product Cards: Grid View and List View. Callout 1 points to the Grid View, which shows cards with larger heights to emphasize product imagery, and callout 2 points to the List View, which shows cards with compact heights to maximize information density. Both views illustrate consistent heights within their respective collections, with the Grid View supporting varied heights based on content and image proportions, and the List View preferring consistent heights for efficient comparison._

### Resizing Behavior

Product Cards follow the shared Card resizing principles where applicable, but define view-specific resizing behavior for product imagery and layout.

See [Foundations: Resizing Behavior](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57629-18329) for the shared Card behavior.

#### Card Width Behavior

Applies to all card variants unless stated otherwise.

- Cards fill the width of their container by default.
- Width can be user-defined when cards are used outside a grid or list.
- When placed in a grid or list, cards fill the space evenly.

![Card Width Behavior](card/card-width-behavior-54990-21065.png)

_Figure: The width behavior of a card component in different layouts, specifically grid view and list view. The card component shown is in the outlined variant and enabled state, featuring a media slot with an image, a button labeled "Add to cart" in the highlight variant and small size, and a favorites icon in the enabled and unselected state. The measurements labeled "Fill" indicate the width of each card within its container, while "Container width" refers to the total width of the container holding the cards. When a card is on its own, it can either fill the container width or have a user-defined width. When placed in a grid or list, cards evenly fill the available space._

#### Card Height Behavior

Applies to all card variants unless stated otherwise.

- Card height hugs content by default.
- Height can be user-defined if required by the layout.
- If user-defined, the internal content fills the available vertical space.

![Card Height Behavior](card/card-height-behavior-54990-21452.png)

_Figure: The height behavior of a card component in different layouts and states. The card component, in an outlined variant and enabled state, demonstrates how its height can either hug its content or be user-defined to fill available vertical space. The figure compares cards on their own and cards placed alongside other cards in both grid view and list view, showing how the height adjusts based on the layout and content._

**Image Sizes and Behavior**

Image behavior differs depending on whether the Product Card is displayed in Grid View or List View:

1. **Grid View**
   - Images maintain their defined aspect ratio and scale proportionally to fill the available Card width. A consistent image size is used across responsive ranges. This approach emphasizes visual consistency and supports inspiration-driven browsing.
1. **List View**
   - Images use defined dimensions that adapt to the available layout width to support information density and comparison.
   - Supported image sizes: Large → 765px – 540px Medium → 539px – 420px Small → 419px – 272px This approach prioritizes structured comparison and efficient use of horizontal space.

![Card Height Behavior](card/card-height-behavior-54990-22574.png)

_Figure: Two layouts, Grid View and List View, for a product card component, detailing how images behave in each. Callout 1 points to the Grid View, where images maintain a locked aspect ratio and scale proportionally to fill the card width. Callout 2 points to the List View, where images have fixed dimensions that adapt to the layout width, with supported sizes labeled as large, medium, and small, each with specific pixel ranges._

## Content and Assets

### Amount of Elements

#### Maximum Number of Elements

There is no defined maximum number of elements for Product Cards.

However, cards should remain:

- scannable
- easy to understand
- adaptable to smaller screens and constrained layouts

The example shown on the right illustrates a recommended content density for Product Cards and can be used as a reference when composing card content.

![Maximum Number of Elements](card/maximum-number-of-elements-54990-22500.png)

_Figure: Two variants of a Product Card component: "Grid View" and "List View". The "Grid View" shows a compact layout with essential details, while the "List View" provides a more detailed layout with additional information. Both views include elements such as "Promo Flag", "Productname", rating "3.5 (80)", "Categorie", "Short description of the product", availability status "Available now", "Set Price" with original and discounted prices, a "Compare" checkbox, and an "Add to cart" button. The example illustrates a recommended content density for maintaining scannability, ease of understanding, and adaptability to smaller screens._

#### Minimum Number of Elements

There is no defined minimum number of elements for Product Cards.

**Required**: - Product Name (Heading) - Price Information - Description (List View only) **Strongly Recommended:** - Rating - Status

![Minimum Number of Elements](card/minimum-number-of-elements-54990-22507.png)

_Figure: Two variants of a Product Card component: "Grid View" and "List View." The "Grid View" shows a product image, product name, rating, status, and price. The "List View" includes all of these elements plus a description. The measurements refer to the container query range for the list view and the content sizing for both views. The text provides examples of required and strongly recommended elements for the Product Card component._

### Elements

**Media Type: Image vs. Carousel**

The Grid View supports two media types within the Media Slot:

1. **Image** (default)
1. **Carousel** (Configuration: Single-Item — Navigation Controls Hidden, Scrollmarker Overlay)

See [Carousel](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524) for detailed component documentation, interaction behavior, and accessibility requirements.

**When to use an Image**

Use an image when a single product image is sufficient to distinguish the product from others in the same collection or when only one product image is available.

**When to use a Carousel**

Use a Carousel when multiple images provide additional value and help users better understand the product before navigating to the Product Detail Page.

**Typical use cases for Carousels include:**

- showing the product from different angles
- highlighting important product features or details
- providing additional context through in-use or lifestyle imagery
- supporting closer inspection of the product (interacting with the Carousel must not trigger the card-level interaction.)

![Elements](card/elements-54990-22517.png)

_Figure: A Grid View layout of a product card component with two media types: Image and Carousel. Callout 1 points to a product card displaying a single Image, while callout 2 points to a product card displaying a Carousel with multiple images. Each product card includes the product name, rating, availability status, and price labeled as "11.199,00 €"._

**List View**

The List View supports images only.

This view is optimized for product comparison and decision-making, where structured specifications and textual information take priority over visual exploration.

![Elements](card/elements-62140-17233.png)

_Figure: A comparison between two layouts of a product card component: "List View" and "Carousel". The numbered callout 1 points at the "List View" layout, which supports images only and is optimized for product comparison and decision-making. The numbered callout 2 points at the "Carousel" layout, which is crossed out to indicate it is not supported. The "List View" layout includes elements such as "Productname", rating "3.5 (80)", "Categorie", description text starting with "Lorem ipsum dolor sit amet consectetur.", price "11.199,00 € incl. VAT", availability status "Available now", "Add to cart" button, and a "Compare" checkbox._

**Do use the same media type within the same set of cards.**

![Elements](card/elements-62140-18172.png)

_Figure: A grid layout of product cards in a UI design system, demonstrating two different content sizing variants: "hug" and "fill". Each card includes elements such as product name, rating, description, availability, and price. The example marked as a "Do" indicates that within the same set of cards, the same media type should be used, ensuring consistency in visual presentation. The cards display various states such as "Offer", "New", and availability statuses like "Available now" and "In stock within 2–3 weeks"._

**Don’t mix different media types within the same set of cards.**

![Elements](card/elements-62140-18182.png)

_Figure: A grid layout of product cards, illustrating two different content sizing variants: "hug" and "fill." The "Don't" example shows a mix of different media types within the same set of cards, which is incorrect because it leads to inconsistent presentation. Each card contains elements such as product name, rating, description, availability, and price, with specific cards labeled as "Offer," "New," or having special notes like "In stock within 2–3 weeks" or "In-store only._

**Media Content: Sizes**

1. The Product Card image container uses a fixed 4:3 aspect ratio and is optimized for the current STIHL product image assets. It supports horizontal, vertical, and square image formats within a consistent layout structure.
1. Due to varying product proportions and source image formats, the perceived visual size of products may differ between cards.
1. To maintain a balanced and visually consistent presentation across collections and grids, product imagery should be aligned and art-directed so products appear proportionally similar when displayed next to each other.

![Elements](card/elements-55243-29329.png)

_Figure: The layout and optimization of a Product Card image container within a UI design system. The image container uses a fixed 4:3 aspect ratio, as indicated by the label "Image Format: 4:3". Callout 1 points to a placeholder image demonstrating this aspect ratio. Callout 2 shows current product assets in their original formats, including horizontal, vertical, and square images. Callout 3 demonstrates balanced visuals where product imagery is aligned and art-directed to appear proportionally similar, ensuring a consistent presentation across collections and grids._

**Battery Logos**

Battery logos indicate the battery system associated with a product.

Up to two battery logos may be displayed within the Media Slot and are always positioned in the top-left corner of the card.

![Elements](card/elements-61290-16722.png)

_Figure: Product-card components in both grid view and list view layouts, illustrating different states based on the presence of battery logos: no logo, one logo, and two logos. The grid view shows content sizing set to hug, while the list view shows content sizing set to fill within a container query range of 1435 to 766 pixels. Each card includes elements such as Promo Flag, Productname, rating, Categorie, Short description of the product, availability status, price including VAT, a Compare checkbox, and an Add to cart button. Battery logos, when present, are positioned in the top-left corner of the card within the Media Slot._

**Add-to-Favorites Button**

The Add-to-Favorites button is optional and allows users to save products to a favorites or wishlist collection for later consideration.

This feature can support product discovery and increase conversion potential by enabling users to revisit products at a later point in time.

![Elements](card/elements-55002-26533.png)

_Figure: Two layouts, Grid View and List View, of a product-card component. Each product-card includes elements such as a Promo Flag, Productname, rating, Categorie, a Short description of the product, availability status, price including VAT, a Compare checkbox, and an Add-to-Favorites button. The Add-to-Favorites button is shown in two states: selected: false and selected: true. The measurements refer to the container query sizes for the List View, specifically 1435 - 766px, and content sizing set to hug._

**Max. Content**

**Default Rule**

- Don't use text-based content (e.g. Product Names or Descriptions) that exceeds three lines.
- Content exceeding this limit should be truncated
- This helps maintain:
   - scannability
   - consistent card heights
   - visual balance

**Exception: List View Description**

- List View descriptions may contain up six bullet points
- This variant is optimized for:
   - detailed product information
   - structured comparison
   - decision-making support

![Elements](card/elements-55002-27538.png)

_Figure: Two variants of a product-card component: "Grid View" and "List View." The "Grid View" shows a product card with content limited to three lines for both the product name and description to maintain scannability and consistent card heights. The "List View" allows for a description with up to six bullet points to support detailed product information and structured comparison. The text "Max. Content Default Rule" advises against using text-based content that exceeds three lines, except for the "List View Description," which can have up to six bullet points._

**Naming and category**

Product Name and Category information can be structured in different ways within the Product Card:

**Option 1**

- Use the Product Name slot for the product name only
- Use the Category slot for the product category

**Option 2**

- Combine product name and category within the Product Name slot
- Omit the dedicated Category slot

The chosen approach should be defined by the respective product team based on content and business requirements.

Regardless of the approach, naming and category structures must remain:

- consistent across the product range
- predictable for users
- aligned within the same view or collection

![Elements](card/elements-55193-27720.png)

_Figure: Two variants of a product card component in a grid view layout. Callout 1 points to a product card where the product name "MS 261 C-M" is separate from the category "Chainsaw." Callout 2 points to a product card where the product name "MS 261 C-M Chainsaw" combines both the product name and category. Each card includes details such as rating "3.5 (80)", description "Powerful for chopping firewood", availability "Available now", price "11.199,00 € incl. VAT", and an option to "Compare"._

**Rating**

Ratings can support user trust and positively influence conversion by helping users evaluate products more quickly.

If the rating element is being used, it must always be displayed, even when no ratings are available yet.

![Elements](card/elements-55002-26547.png)

_Figure: A product-card component in grid view with two variants: one where rated is false and one where rated is true. The card includes elements such as "Productname," "Categorie," "Short description of the product," "Available now," price "11.199,00 € incl. VAT," and a "Compare" option. The rating section shows "0.0 (0)" for rated false and "3.5 (80)" for rated true, demonstrating how ratings can be displayed to support user trust and influence conversion._

**Description: List View**

The List View description adapts its content structure based on the defined media query ranges to balance information density and readability.

Media query changes are independent of the Product Card's responsive breakpoints and are applied based on the available layout width.

1. **Media Query: 1192px – 766px Key specs as bullet list**
   - Description is displayed as a structured list of key specifications
   - Supports detailed comparison and product evaluation
1. **Media Query: 765px – 272px Key specs condensed**
   - Description becomes condensed to reduce vertical space usage

**Best Practice**

- Prioritize the most relevant product attributes first
- Keep descriptions concise and easy to scan
- Avoid long paragraphs or excessive technical detail within the card layout

![Elements](card/elements-55296-37837.png)

_Figure: Two variants of a product-card component in list view, illustrating changes based on media query ranges. The first variant, for a media query range of 1192px to 766px, shows key specs as a bullet list with detailed descriptions. The second variant, for a media query range of 765px to 272px, condenses the key specs to reduce vertical space usage. Each product-card includes elements such as "Productname," rating, "Categorie," description, price, availability status, "Add to cart" button, and a "Compare" checkbox._

**Status**

Product Cards support different types of product availability and status information, including:

- Available
- Out of stock
- Coming soon
- In-store only

**Naming** The status labels listed above are proposals and should be defined and aligned by the respective product teams.

**Best Practice** When a product is marked as ”Out of stock” or “In stock soon”, it is recommended to provide an specified button (e.g. “Notify me”) that allows users to receive updates once the product becomes available again. The Notify Me action should replace the Add-to-Cart action, as the product is not currently available for purchase.

![Elements](card/elements-55002-26554.png)

_Figure: A grid layout of product cards, each representing different product availability statuses: "Available", "Out of stock", "In stock soon", and "In store only". Each card includes elements such as "Productname", rating, category, short description, price, and a "Compare" checkbox. The status labels indicate the product's availability, with recommendations to include a "Notify me" button for "Out of stock" or "In stock soon" products to allow users to receive updates._

**Button Text: List View**

In List View, the Add-to-Cart button uses both an icon and a text label due to the increased available space. Unlike Grid View, the button is not displayed as an icon-only button.

To prevent buttons from becoming visually compressed on smaller screen sizes, the button label shortens depending on media queries.

**Example:**

- “Add to cart” → “Add”

**Content Guidelines**

- Button labels should remain short, clear, and easy to understand
- Maximum character count:
   - Long label: **18 characters**
   - Short label: **10 characters**

![Elements](card/elements-55002-27988.png)

_Figure: A product card component in list view, showing two different button text labels based on screen size. The longer label "Add to cart" is used when the screen width is between 765 and 540 pixels, with a maximum of 18 characters. For narrower screens, the label shortens to "Add," with a maximum of 10 characters, to prevent visual compression. The example illustrates how the button text adapts to different screen sizes to maintain clarity and usability._

**Price variations**

Different price-related elements are available to support flexible pricing scenarios and regional requirements.

To ensure a consistent user experience across STIHL platforms, the positioning and styling of price elements should remain consistent throughout all Product Card implementations.

Price Information should be displayed whenever pricing is available.

Supported Price Elements:

1. **Set List Indicator**
   - Only used when displaying a set or bundle of products
1. **Price**
   1. **Default**
      - Standard product price
   1. **Discounted Price**
      - Reduced or promotional price
1. **VAT Information (optional)**
   - Displayed depending on regional regulations and market requirements
1. **Strike-through Price**
   - Displays the original price before discount
   - Must always be used in combination with a discounted price
1. **Savings Information (optional)**
   - Indicates the amount or percentage saved compared to the original price

![Elements](card/elements-55002-27739.png)

_Figure: Two product-card components in a grid view layout with different price-related elements. Callout 1 points to the product name, callout 2a points to the set price, callout 2b points to the original price, callout 3 points to the save amount and percentage, callout 4 points to the VAT information, and callout 5 points to the discounted price. The components illustrate price variations, including set price, discounted price, and VAT information, to support flexible pricing scenarios and maintain a consistent user experience across STIHL platforms._

**Compare Checkbox**

The compare checkbox allows users to select Product Cards for product comparison.

> The Design System only provides the selection mechanism within the Product Card itself. Comparison flows, layouts, and visualization patterns shown after selection are out of scope and are not covered by the Design System.

**Best Practice**

Don\`t implement the comparison functionality on mobile devices, if avoidable.

Due to limited screen space, comparing multiple products on smaller viewports can become difficult and reduce usability.

![Elements](card/elements-55002-27270.png)

_Figure: A product-card component in a grid view layout with two variants: one where the compare checkbox is unselected (Selected = false) and one where it is selected (Selected = true). The product-card includes elements such as "Productname", rating "3.5 (80)", "Categorie", "Short description of the product", availability status "Available now", price "11.199,00 € incl. VAT", and a compare checkbox labeled "Compare". The best practice advises against implementing the comparison functionality on mobile devices due to limited screen space, which can reduce usability._

## Behavior & Usage

### Interactivity

Product Cards provide Card-level navigation to the Product Detail Page (PDP) by default. In addition, they may contain independent product-specific actions, such as:

1. **Add to Cart**
1. **Add to Favorites**
1. **Compare**

These actions must remain independent from the Card-level navigation. Interacting with them must perform their respective action without navigating to the PDP.

Product Cards do not support a disabled state. If the Product Detail Page is unavailable, the Product Card should not be rendered.

See Foundations: Interaction & Interactive Content for the interaction models across Card types.

![Interactivity](card/interactivity-55272-30240.png)

_Figure: A Product Card component in a grid view layout with content sizing set to "hug." The numbered callouts point to specific elements on the card: Callout 1 points to the "Promo Flag," Callout 2 points to the "Productname" and "Categorie," and Callout 3 points to the "Short description of the product." The card includes interactive elements such as "Add to Cart," "Add to Favorites," and "Compare," which perform actions without navigating to the Product Detail Page. The card also displays the price "11.199,00 € incl. VAT" and the availability status "Available now._

### Usage in Context

Product Cards support different View Types depending on the selected Layout Context and user goal.

Product Cards can be used across different layout contexts depending on the browsing and decision-making experience.

1. **Standalone**
   - Used to highlight individual products in isolated contexts, such as landing pages, promotional sections, or recommendation areas.
   - Supported View Types
      - Grid View
      - List View
1. **Grid**
   - The primary layout for product discovery and browsing.
   - Common Use Cases
      - Product listings
      - Category pages (PLP)
      - Recommendation sections
   - Supported View Type
      - Grid View
1. **Carousel**
   - Suitable for promotional or recommendation-based product collections that support horizontal exploration.
   - Common Use Cases
      - Featured products
      - Recommendations
   - Supported View Type
      - Grid View

1. **List**
   - Used when users need to compare products and evaluate additional product information.
   - Common Use Cases
      - Search results
      - Comparison-oriented product listings
      - Specification-heavy product categories
   - Supported View Type
      - List View

**Layout Considerations**

- Grid and Carousel layouts prioritize browsing and discovery
- List layouts prioritize comparison and evaluation
- On smaller viewports, List View adapts its content structure to maintain readability and information density

![Usage in Context](card/usage-in-context-54990-22034.png)

_Figure: Different layout contexts for Product Cards in the STIHL Design System, including Standalone, Grid, and Carousel views. Each numbered callout points to examples of these views: 1 points to the Standalone view, 2 points to the Grid view, 3 points to the Carousel view, and 4 points to the List view. The components shown include card surfaces, media slots, round indicators, buttons, and favorites icons, each in various states and sizes. The layouts demonstrate how Product Cards can be used in different browsing and decision-making experiences._

### Responsive behavior

Product Cards use a Product Card–specific responsive model that differs from the shared Card Responsive Behavior.

**Grid View:** visual consistency across breakpoints. **List View:** information density and comparison efficiency.

**Grid View**

- Scales responsively within the available grid layout
- Maintains the defined minimum and maximum widths
- Product imagery and content scale proportionally within the available space

![Responsive behavior](card/responsive-behavior-54990-22427.png)

_Figure: The responsive behavior of the product-card component in both grid view and list view across different breakpoints: Breakpoint XL, Breakpoint L, Breakpoint M, and Breakpoint S. Each breakpoint demonstrates how the product-card scales responsively within the available grid layout, maintaining defined minimum and maximum widths, and ensuring product imagery and content scale proportionally. The product-card includes elements such as the Promo Flag, Productname, model number (e.g., 3.5), customer rating (e.g., (80)), Categorie, Short description of the product, availability status (Available now), price (e.g., 11.199,00 € incl. VAT), and a Compare option._

**List View**

The List View adapts its layout based on the available width.

Media queries control the positioning and alignment of elements:

- **1435px – 766px**
   - Image and content are displayed side by side
   - Supports structured comparison and information density
- **765px – 272px**
   - Content is condensed and repositioned to optimize the available space
   - Supports readability on smaller viewports

**Image Sizes and spacings** Image sizes and spacings adjust based on media queries to optimize layout density and readability.

- 765px – 540px
- 539px – 420px
- 419px – 272px

![Responsive behavior](card/responsive-behavior-55296-38098.png)

_Figure: The responsive behavior of the product-card component in list view, showing different layouts based on screen width. Each measurement refers to the viewport width in pixels, indicating how the layout adapts within specific ranges: 1435px – 766px, 765px – 540px, 539px – 420px, and 419px – 272px. The figure demonstrates how the image and content are displayed side by side or stacked depending on the available width, optimizing for both structured comparison and readability on smaller viewports._

## Accessiblity

### Product Name = Accessible Label

The Product Name is **mandatory** for every Product Card. It provides the accessible name used by screen readers and must clearly describe the card’s destination.

**If a Product Card does not have a clear Product Name, it is not accessible.**

![Product Name = Accessible Label](card/product-name-accessible-label-55296-40755.png)

_Figure: A product-card in grid view layout with content sizing set to fill. The product-card includes a "Promo Flag", the Product Name "MSA 300 ohne Akku und Ladegerät", a rating of "3.5" out of 5 with "80" reviews, a "Categorie" label, a "Short description of the product", an "In-store only" label, and a price of "11.199,00 € incl. VAT". The Product Name is mandatory and serves as the accessible label for screen readers, ensuring the card’s destination is clearly described._

### Keyboard Navigation

- Product Cards must be fully keyboard accessible.
- Secondary actions must remain independently focusable.
- Activating a secondary action must not trigger the card-level navigation.
- Focus order should follow the visual reading order.

The embedded Carousel follows the accessibility requirements defined by the [Carousel component](https://www.figma.com/design/cO9fSvIKm0Xg1rAbopGBnL/DS-1468-%7C-Docu-%7C-Global-%7C-Carousel?node-id=62524-14305&t=dJ2EU1hufjWjcsSQ-4).

![Keyboard Navigation](card/keyboard-navigation-57285-25731.png)

_Figure: A product-card component in a grid view layout with two variants, illustrating keyboard navigation. Each variant shows the same product-card with elements such as "Promo Flag", "Productname", "3.5", "(80)", "Categorie", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", and "Compare". The callouts indicate the focusable areas, including the heart icon, rating stars, price, and compare button, demonstrating the focus order and accessibility requirements for secondary actions._

## Examples

> The use case examples shown feature the new Action Card concept and do not reflect the current state of the product.

### STIHL Website

Product Cards in a grid on a Product Overview Page.

![STIHL Website](card/stihl-website-54990-20583.png)

_Figure: A grid layout of product cards on a STIHL Website Product Overview Page, showing two variants of the product-card component: one with content sizing set to "hug" and another with content sizing set to "fill". Each card includes details such as product name (e.g., "MS 261 C-M"), rating (e.g., "3.5 (80)"), product type (e.g., "Chainsaw"), description, availability status (e.g., "Available now"), price (e.g., "11.199,00 € incl. VAT"), and special offers (e.g., "Save 50,00 € (14%)"). Some cards have additional labels like "Offer", "New", or "In-store only"._

### STIHL Website

iMow Product Cards in a list with detailed specs.

![STIHL Website](card/stihl-website-55296-40861.png)

_Figure: A list view of product cards for STIHL iMOW lawn mower robots on the STIHL website. Each product card includes details such as the product name, rating, price, availability, and specifications. The layout is designed for a container query between 1435 and 766 pixels, with content sizing set to hug the container. The product cards shown are for iMOW® 4, iMOW® 3, and iMOW® 6, each with varying specifications and prices._
