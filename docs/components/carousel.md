---
id: carousel
title: Carousel
category: component
importNames:
  - DSCarousel
package: "@stihl-design-system/components"
keywords:
  - carousel
  - slider
  - slideshow
  - gallery
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 26075:11524
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T21:32:41.459Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26075-11524
---

# Carousel

## Carousel

**Definition:**

- A carousel is an interactive UI pattern that sequentially displays multiple pieces of content

**Characteristics**

- Displays content sequentially within a limited viewport
- Supports user-controlled navigation
- One or multiple items visible depending on the variant
- Provides multiple navigation methods depending on device and configuration
- Supports touch and keyboard interaction

The Carousel is available in two variants:

**Single-Item Carousel – Variant**

- One item visible per page
- Storytelling & media focused

**Multi-Item Carousel – Variant**

- Multiple items visible per page
- Browsing & discovery focused

**When to use**

**Single-Item Carousel – Variant → Storytelling / Promotion** When content is to be presented sequentially.

- Stage / Hero content
- Banners
- Image / media carousel
- Marketing messages
   - Campaigns
   - Promotions

**Multi-Item Carousel – Variant → Content Browsing** When users are supposed to browse through several similar pieces of content.

- Content teasers
   - Article lists
- Product lists
- Recommendations
- Related content
- Feature overviews / Tools

- Limited Space: When the layout area is limited, but multiple pieces of content exist. (Mobile interfaces, cards within a container)

**When not to use**

- Critical information
- Primary conversion elements
- Comparable content (use Grid/List)
- Image galleries (see Related patterns)

![Carousel](carousel/carousel-60750-43799.png)

_Figure: Shows carousel building block (slot: visible items=\[object Object\], scrollmarker position=outside, navigation control position=outside); carousel building block (slot: visible items=\[object Object\], scrollmarker position=outside); left nav control (chevron=left, state=disabled, variant=filled); right nav control (chevron=right, state=enabled, variant=filled); scrollmarker (6=false); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=xl); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=m); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "Carousel", "Single-Item", "❖ Placeholder Item", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4", "❖ PlaceholderItem 3", "❖ PlaceholderItem 4", "Scrollmarker position: outside, navigation control position: outside", "Scrollmarker position: inside, navigation control position: inside", "Breakpoint: XL", "Breakpoint: L", "Scrollmarker position: outside", "Scrollmarker position: inside", "Breakpoint: M", "Breakpoint: S", "Multi-Item"._

![Carousel](carousel/carousel-60750-43802.png)

_Figure: Shows round (variant=filled, state=enabled, size=small); round (variant=filled, state=hover / pressed, size=small); round (variant=filled, state=focus, size=small); round (variant=filled, state=disabled, size=small); round (variant=filled, state=disabled focus, size=small); scrollmarker building element (dot 3 (optional), variant=ghost); scrollmarker building element (background=ghost, active slide=first); 1 (state=active); 2 (state=enabled); 3 (state=enabled); 4 (state=enabled); 5 (state=enabled). Text in the figure: "Building Elements Carousel", "Navigation control", "Scrollmarker", "Scrollmarker element: Standard Dot", "Scrollmarker element: Overflow Dot", "enabled", "hover/pressed", "focus", "disabled", "disabled focus", "\< 6", "\> 6", "on background:", "light", "dark", "Filled", "hover", "active", "Inverse", "Ghost", "active hover", "active focus", "Single item building block", "❖ Placeholder Item"._

### Further guidelines

[Storybook documentation](https://release-1-0-0-rc-52--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-carousel--documentation)

### Related components and patterns

**Gallery** A gallery is a layout pattern for the structured presentation of multiple visual elements (e.g., images or videos) where all content is visible and directly accessible at the same time – in contrast to a carousel, which displays content sequentially.

### Related elements

[Product Card](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25979)

[Round Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-4016)

### Out of scope

- Autoplay
- Infinite carousel
- Vertical carousel
- Gallery pattern

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Touchscreen Device Considerations

Carousels should remain easy to use across touch-enabled devices and support intuitive, gesture-based navigation. Touch interactions should feel natural, responsive, and never interfere with the user’s ability to browse content.

### Primary Interaction

**Swipe gestures** are the primary navigation method on touch devices and should provide a smooth, direct, and predictable browsing experience.

Users should be able to interrupt, reverse, or continue swipe gestures at any time without unexpected behavior.

![Primary Interaction](carousel/primary-interaction-61435-1861.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "❖ Placeholder Item"._

### Secondary Navigation

Secondary navigation methods improve discoverability and provide alternative ways to navigate through the Carousel.

**Tap Zones**

- Provide an alternative navigation method for touch interaction.
- Navigate to the previous or next page depending on the activated zone.
- Complement swipe gestures rather than replace them.

**Scrollmarker**

- Indicate the user’s current position within the Carousel.
- Allow direct navigation to a specific page.
- Improve discoverability by making additional content visible.

![Secondary Navigation](carousel/secondary-navigation-62581-20534.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "Tap Zones", "Scrollmarker", "❖ Placeholder Item"._

### Touch Experience

#### Large Touch Targets

Interactive elements such as tap zones and Scrollmarkers should provide sufficiently large touch targets to support comfortable and accurate interaction. The visible size of an element may be smaller than its interactive touch target.

![Large Touch Targets](carousel/large-touch-targets-62581-20508.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Measurements: 48px, 24px. Text in the figure: "Tap Zones", "Scrollmarker", "❖ Placeholder Item"._

#### Clear Navigation Feedback

Users should always be able to understand:

- Their current position
- Wether additional content is available
- How to navigate

This can be achieved through Scrollmarkers and Peek.

![Clear Navigation Feedback](carousel/clear-navigation-feedback-62581-20768.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s); carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "Only Scrollmarker", "Peek + Scrollmarker", "❖ Placeholder Item", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4"._

#### Avoid gesture conflicts

Horizontal swipe interactions should not interfere with vertical page scrolling. Users should always be able to continue scrolling the page naturally.

![Avoid gesture conflicts](carousel/avoid-gesture-conflicts-62581-20794.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "❖ Placeholder Item"._

#### No Hover States

Hover interactions are not available on touch devices.

Ensure that all essential information and actions remain accessible without hover.

> This section describes general touchscreen design principles. Detailed guidance on layouts, responsive behavior, component behavior, motion, and accessibility is documented in the corresponding sections throughout this documentation.

## Formatting and Construction 1/4

### Anatomy

The Carousel consists of two variants: Single-Item and Multi-Item. Both share the same foundational elements but differ in layout, content, and interaction patterns.

#### Single-Item Variant

**Usage:** one item at the center

**Desktop**

1. **Container**
1. **Viewport**
1. **Track**
   1. **one item visible**
   1. **n items hidden** (1-4 items recommended)
1. **Navigation Controls**
   1. **Previous**
   1. **Next**
1. **Scrollmarker**

See [Element Details – Shared Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=61435-1965) for a detailed description of each element.

![Single-Item Variant](carousel/single-item-variant-60833-7849.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); annotation-circle (number=3b, type=center, color=blue); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=4a, type=top, color=blue); annotation-circle (number=4b, type=top, color=blue); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=5, type=left, color=blue). Callouts 1, 2, 3, 5. Text in the figure: "Item 1", "3a", "Item 2 (hidden)", "Item 2", "3b", "4a", "4b"._

**Mobile**

1. **Container**
1. **Viewport**
1. **Track**
   1. **one item visible**
   1. **n items hidden** (1-4 items recommended)
1. **Scrollmarker**
1. **Tap zones** (for touch devices)
   1. **Previous**
   1. **Next**

See [Element Details – Shared Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=61435-1965) for a detailed description of each element.

![Single-Item Variant](carousel/single-item-variant-62581-18823.png)

_Figure: Shows annotation-circle (number=4, type=left, color=blue); annotation-circle (number=3, type=bottom, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3b, type=center, color=blue). Callouts 1, 2, 3, 4. Text in the figure: "Item 1", "3a", "5a", "5b", "Item 2 (hidden)", "Item 3 (hidden)", "3b"._

#### Multi-Item Variant

**Usage:** multiple items can be viewed simultaneously

**Desktop**

1. **Container**
1. **Viewport**
1. **Track**
   1. **n items visible** (2-4 items recommended)
   1. **n items hidden** (depending on amount of items in the viewport. Users should not need more than 1–2 rotations to see all items.)
1. **Navigation Controls** (touch devices optional, desktop recommended)
   1. **Previous**
   1. **Next**
1. **Scrollmarker**

See [Element Details – Shared Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=61435-1965) for a detailed description of each element.

![Multi-Item Variant](carousel/multi-item-variant-62039-21422.png)

_Figure: Shows annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); annotation-circle (number=3b, type=center, color=blue); annotation-circle (number=4a, type=top, color=blue); annotation-circle (number=4b, type=top, color=blue); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=5, type=left, color=blue). Callouts 1, 2, 3, 5. Text in the figure: "Item 1", "Item 2", "Item 3", "Item 4", "3b", "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)", "Item 9 (hidden)", "4a", "4b"._

**Mobile**

1. **Container**
1. **Viewport**
1. **Track**
   1. **n items visible** (2-4 items recommended)
   1. **n items hidden** (depending on amount of items in the viewport. Users should not need more than 1–2 rotations to see all items.)
   1. **Peek** (optional, touch devices recommended)
1. **Tap zones** (touch devices recommended)
   1. **Previous**
   1. **Next**
1. **Scrollmarker**

See [Element Details – Shared Elements](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=61435-1965) for a detailed description of each element.

![Multi-Item Variant](carousel/multi-item-variant-62581-18965.png)

_Figure: Shows carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s); annotation-circle (number=3b, type=center, color=blue); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3, type=bottom, color=blue); annotation-circle (number=5, type=left, color=blue). Callouts 1, 2, 3, 5. Text in the figure: "Item 1", "3a", "4a", "4b", "Item 2 (hidden)", "Item 3 (hidden)", "Item 4 (hidden)", "Item 5 (hidden)", "3b"._

## Content and Assets 1/2

### Single-Item Variant

The Single-Item Carousel is designed to present one primary piece of content per page. It supports rich, visually engaging content while keeping the user’s attention focused on a single message.

#### Item content

The Item supports rich and flexible content. It may contain:

- Images
- Media
- Content blocks
- Complex layouts

![Item content](carousel/item-content-61435-1726.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Win a Trip to Canada, Range Rover, and More!", "As a thank you for registering your products, we’re giving you the chance to...", "Participate now"._

**Do use one clear primary message per Item.**

Each Item should communicate a single idea or call to action to help users quickly understand the content.

![Item content](carousel/item-content-61435-1736.png)

_Figure: Do example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Win a Trip to Canada, Range Rover, and More!", "As a thank you for registering your products, we’re giving you the chance to...", "Participate now"._

**Don’t combine multiple competing messages within a single Item.**

Avoid competing call to action as they reduce clarity and make the content more difficult to scan.

![Item content](carousel/item-content-61435-1746.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Win a Trip to Canada, Range Rover, and More!", "As a thank you for registering your products, we’re giving you the chance to...", "Participate now", "Find out more"._

#### Recommended amount of pages

A Single-Item Carousel should:

- Display 1–5 pages.
- Keep the total number of pages low to reduce navigation effort.
- Ensure users can reach all content without excessive navigation.

If additional pages are required, the Scrollmarker provides an optimized overflow variant for Carousels with more than 6 pages.

![Recommended amount of pages](carousel/recommended-amount-of-pages-62641-98804.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Default (for less than 6 pages)", "❖ Placeholder Item", "Overflow (for more than 6 pages)"._

#### Content consistency

Keep the overall visual structure consistent across all Items.

Consistent layouts help users focus on the changing content rather than adapting to changing compositions.

![Content consistency](carousel/content-consistency-61653-2312.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel building block (slot: visible items=\[object Object\], scrollmarker position=outside, navigation control position=outside). Text in the figure: "Win a Trip to Canada, Range Rover, and More!", "As a thank you for registering your products, we’re giving you the chance to...", "Participate now", "Lorem ipsum dolor", "Lorem ipsum dolor sit amet consectetur. Arcu a dictumst ligula sit id vel fer...", "Lorem ipsum"._

## Supported configurations

> **Implementation Note** The Carousel component exposes additional configuration options through its API. While many combinations are technically possible, the Design System defines and supports only the configurations documented on this page. Configurations outside these recommendations have no defined spacing, alignment, or positioning and are not reviewed for design consistency or accessibility. If your product requires a configuration that is not documented here, contact the Design System team. New configurations can be added when validated by a product use case. Go [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4) for contact options.

The Carousel supports a wide range of navigation and Scrollmarker configurations. These configurations are based on validated product use cases and should be preferred over custom combinations.

Configurations in Code can be viewed [here](https://release-1-0-0-rc-52--63440bbb95889041542a5ba3.chromatic.com/iframe.html?args=&viewMode=story&id=templates-carousel--vrt).

### Configuration: Single-Item – Navigation Controls Outside, Scrollmarker Outside

Optimized for presenting one primary piece of content with persistent navigation.

#### Specifications

**Variant**

Single-Item

**Navigation Control Variant**

Filled

**Navigation Control Position**

Outside (XL-L) Hidden (M-S)

**Scrollmarker Variant**

Ghost

**Scrollmarker Position**

Outside

**Tap Zones**

False (Pointer) True (Touch)

**Drag**

True (Pointer) False (Touch)

**Swipe**

False (Pointer) True (Touch)

**Peek**

No

**Items per View**

1

**Items per Navigation Step**

1

**Placement**

Main Content Area

**Layout**

Grid

**Responsive:** Navigation Controls are visible from breakpoint L and hidden below L.

![Specifications](carousel/specifications-61695-2340.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "XL-L", "M-S", "Item 1", "main"._

#### Example

My STIHL

**Recommended for**

- Hero stages
- Campaigns
- Promotions
- Marketing messages

![Example](carousel/example-61435-2092.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "XL-L", "M-S", "Win a Trip to Canada, Range Rover, and More!", "As a thank you for registering your products, we’re giving you the chance to...", "Participate now", "win a trip to canada, range rover, and more!"._

### Configuration: Single-Item – Navigation Controls Inside, Scrollmarker Inside

Optimized for presenting one primary piece of content with persistent navigation.

#### Specifications

**Variant**

Single-Item

**Navigation Control Variant**

Inverse

**Navigation Control Position**

Inside (XL-L) Hidden (M-S)

**Scrollmarker Variant**

Inverse

**Scrollmarker Position**

Inside

**Tap Zones**

False (Pointer) True (Touch)

**Drag**

True (Pointer) False (Touch)

**Swipe**

False (Pointer) True (Touch)

**Peek**

No

**Items per View**

1

**Items per Navigation Step**

1

**Placement**

Main Content Area

**Layout**

Grid

**Responsive:** Navigation Controls are visible from breakpoint L and hidden below L.

![Specifications](carousel/specifications-62565-16968.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "XL-L", "M-S", "Item 1", "main"._

#### Example

Image Carousel

**Recommended for**

- Image based Carousels with reduced elements

![Example](carousel/example-62565-16979.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "XL-L", "M-S"._

### Configuration: Multi-Item – Navigation Controls Outside, Scrollmarker Outside

Optimized for presenting multiple related Items that users can browse, compare, and discover.

#### Specifications

**Variant**

Multi-Item

**Navigation Control Variant**

Filled

**Navigation Control Position**

Outside (XL-L) Hidden (M-S)

**Scrollmarker Variant**

Ghost

**Scrollmarker Position**

Outside

**Drag**

True (Pointer) False (Touch)

**Swipe**

False (Pointer) True (Touch)

**Peek**

Responsive

**Items per View**

Configurable per breakpoint

**Items per Navigation Step**

Configurable

**Placement**

Main Content Area (XL-L) Extended Content Area (M-S)

**Layout**

Grid Main (XL-L) Grid Extended (M-S)

**Responsive:** Navigation Controls are visible from breakpoint L and hidden below L. Peek is enabled for the supported smaller-breakpoint configuration.

![Specifications](carousel/specifications-61695-2715.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "XL-L", "M-S", "Item 1", "Item 2", "Item 3", "Item 4", "Extended", "main"._

#### Example

My STIHL

**Recommended for**

- Product categories
- Product recommendations
- Related products
- Inspirational content collections

![Example](carousel/example-61695-2748.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "XL-L", "M-S", "IPX 5", "IPX 5 Certificated & Reliable Starts down to -20°C", "AS System", "Battery-operated machines are ideal for small household", "AI Range", "AI machines handle all your small garden tasks"._

### Configuration: Single-Item Embedded – Navigation Controls Hidden, Scrollmarker Inside

Optimized for presenting a single piece of media within another component or layout while minimizing visual distraction.

#### Specifications

**Variant**

Single-Item

**Navigation Control Position**

Hidden

**Scrollmarker Variant**

Filled Inverse

**Scrollmarker Position**

Inside

**Drag**

True (Pointer) False (Touch)

**Swipe**

False (Pointer) True (Touch)

**Peek**

No

**Items per View**

1

**Items per Navigation Step**

1

**Placement**

Defined by parent component / layout (e.g. Product Card; visit the [Figma component](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=57309-25979) or [Storybook](https://release-1-0-0-rc-52--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/templates-cards-product-card-in-grid--documentation) for more details)

**Layout**

Flex

![Specifications](carousel/specifications-61695-2600.png)

_Figure: Shows product-card: grid view (content sizing=hug). Text in the figure: "XL-L", "M-S", "Productname", "3.5", "(80)", "Categorie", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "Compare"._

#### Example

STIHL.de: Product Grid

**Recommended for**

- Product image galleries
- Media within Product Cards

![Example](carousel/example-61695-2633.png)

_Figure: Shows product-card: grid view (content sizing=hug); product-card: grid view (content sizing=fill). Text in the figure: "XL-L", "M-S", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "MSA 300 without battery and charger", "MS 162", "Lawn mower", "incl. VAT", "Lorem ipsum dolor sit amet consectetur. At senectus mauris interdum nibh cras.", "Brush cutter", "Socks STRIPES 3-pack Black / White / Grey", "Socks", "Set Price"._

## Responsive Layout

### Responsive Behaviour

The following tables summarize how each supported Carousel configuration adapts across breakpoints. Interaction methods may additionally vary depending on the user's input method.

#### Configuration: Single-Item — Navigation Controls Outside, Scrollmarker Outside

**XL - L**

**M - S**

**Navigation Controls**

Visible, position outside

Hidden

**Scrollmarker**

Outside

**Items per view**

1

**Peek**

No

![Configuration: Single-Item — Navigation Controls Outside, Scrollmarker Outside](carousel/configuration-single-item-navigation-controls-outside-scroll-61435-2196.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "XL-L", "M-S", "Item 1"._

#### Configuration: Single-Item — Navigation Controls Inside, Scrollmarker Inside

**XL - L**

**M - S**

**Navigation Controls**

Visible, position inside

Hidden

**Scrollmarker**

Inside

**Items per view**

1

**Peek**

No

![Configuration: Single-Item — Navigation Controls Inside, Scrollmarker Inside](carousel/configuration-single-item-navigation-controls-inside-scrollm-62565-18667.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "XL-L", "M-S", "Item 1"._

#### Configuration: Multi-Item — Navigation Controls Outside, Scrollmarker Outside

**XL - L**

**M - S**

**Navigation Control**

Visible, position outside

Hidden

**Scrollmarker Position**

Outside

**Items per View**

Breakpoint-dependent

**Peek**

No

Yes

> The number of Items per View can be configured independently for each breakpoint. The number of Hidden Items adapts automatically based on the total number of Items.

![Configuration: Multi-Item — Navigation Controls Outside, Scrollmarker Outside](carousel/configuration-multi-item-navigation-controls-outside-scrollm-61767-3041.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "XL-L", "M-S", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4"._

#### Configuration: Single-Item Embedded — Navigation Controls Hidden, Scrollmarker Inside

**X - L**

**M - S**

**Navigation Controls**

Hidden

**Scrollmarker**

Inside

**Items per view**

1

**Peek**

No

![Configuration: Single-Item Embedded — Navigation Controls Hidden, Scrollmarker Inside](carousel/configuration-single-item-embedded-navigation-controls-hidde-61767-2955.png)

_Figure: Shows product-card: grid view (content sizing=hug). Text in the figure: "XL-L", "M-S", "Productname", "3.5", "(80)", "Categorie", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "Compare"._

### Sizing

The Carousel adapts to the available layout while maintaining consistent proportions and usability across breakpoints. The following recommendations define the supported sizing behavior for each variant.

#### Multi-Item

**Width**

- The number of visible Items can adapt per breakpoint.
- Item width is calculated automatically based on the number of visible Items.
- Items evenly divide the available Viewport width.
- Spacing between Items follows the breakpoint-specific spacing tokens.

**Item sizing**

- Item dimensions are defined by the embedded component (e.g. Card or Media Tile).
- All visible Items should use consistent dimensions within the same Carousel.

![Multi-Item](carousel/multi-item-61818-3150.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=xl); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=m); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "XL", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4", "L", "M", "❖ PlaceholderItem 3", "❖ PlaceholderItem 4", "S"._

#### Minimum Width

The minimum supported Carousel width is 176px. Carousels are not supported below this width, as the available space is insufficient to provide a usable browsing experience.

![Minimum Width](carousel/minimum-width-61435-2249.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Measurements: 176px._

## Behavior

The Carousel supports multiple navigation methods to provide a consistent browsing experience across pointer and touch input. Available navigation methods depend on the selected configuration and input method.

### Navigation Methods

#### Page-based navigation

1. **Single-Item:**
- Displays one Item per page.
- Each navigation step moves exactly one page.

1. **Multi-Item:**
- Displays multiple Items per page.
- Each navigation step moves one complete page.

Page-based navigation is the default. Item-based is configurable but not the standard approach.

![Page-based navigation](carousel/page-based-navigation-62753-23460.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Page", "Item 1", "Item 2", "Item 3", "Item 4"._

#### Navigation Controls

- Navigate sequentially to the previous or next page.
- Become disabled at the beginning and end of the Carousel (they are still focusable).

![Navigation Controls](carousel/navigation-controls-62753-23487.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Item 1", "Item 2", "Item 3"._

#### Scrollmarker

- Indicate the current page.
- Allow direct navigation to a specific page.

![Scrollmarker](carousel/scrollmarker-62753-23501.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); scrollmarker (6=true). Text in the figure: "Item 1", "Item 2", "Go to Page 6", "Go to Page 3", "Go to next page (Page 2)"._

#### Drag

- Allows users to navigate by dragging the Carousel horizontally with pointer input.
- Moves to the previous or next page based on the drag direction.

![Drag](carousel/drag-62939-27758.png)

_Figure: Shows carousel building block (slot: visible items=\[object Object\], scrollmarker position=outside, navigation control position=outside). Text in the figure: "Item 1", "Item 2", "Item 3"._

Please find the navigation behavior with touch input [here](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=61435-1831).

### End Behaviour

- Carousels do not loop infinitely.
- Navigation stops at the first and last page.
- Navigation Controls become disabled when no further content is available (they are still focusable).

![End Behaviour](carousel/end-behaviour-62753-23523.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l)._

### Consistency

**Do use one navigation style consistently throughout a Carousel.**

![Consistency](carousel/consistency-62753-23534.png)

_Figure: Do example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Page 2", "Page 3", "❖ Placeholder Item"._

**Don’t switch Navigation Control and Scrollmarker placement within the same Carousel.**

![Consistency](carousel/consistency-62753-23547.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Page 2", "Page 3", "❖ Placeholder Item"._

### Nested swipe behaviour

**Don’t use nested Carousels or place Carousels inside horizontally swipeable containers.**

Nested swipe behavior is discouraged because it's technically unstable and can cause issues, particularly on mobile devices. As a result, it's not supported by the Design System.

![Nested swipe behaviour](carousel/nested-swipe-behaviour-62753-23563.png)

_Figure: Don't example. Shows carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "Promo Flag", "Productname", "3.5", "(80)", "Categorie", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "Compare", "❖ Placeholder Item 3", "❖ Placeholder Item 4"._

## Motion

The Carousel uses motion to communicate navigation while maintaining orientation and visual continuity. Transitions should feel smooth, predictable, and never distract from the content.

### Motion Specifications

- **Transition:** Slide
- **Duration:** 700ms
- **Easing:** Ease Out – cubic-bezier (0, 0, 0.5, 1)

### Motion Principles

- Motion should not cause layout shifts.
- The visible layout remains stable throughout the transition.
- Only the Track moves; surrounding UI elements remain fixed.
- By default, the Track transitions one page at a time.

### Drag Motion

- During dragging, the Track follows the pointer movement directly.
- When the drag is released, the Track settles on the appropriate page.
- The settling transition uses the defined Carousel easing.
- Surrounding UI elements remain fixed during the interaction.

![Drag Motion](carousel/drag-motion-61435-1960.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Measurements: 700ms. Text in the figure: "Item 1"._

## Accessibility

### Keyboard Interaction

The Carousel must be fully operable using a keyboard. Users must be able to navigate, operate, and exit the Carousel without requiring a pointing device.

#### Keyboard requirements

- All visible interactive elements within the Carousel are keyboard accessible, including Navigation Controls, Scrollmarkers, and interactive elements within visible Items.
- All keyboard-accessible elements provide a visible focus indicator.
- Interactive elements expose an appropriate accessible name, role, and value.
- Keyboard focus never moves to hidden Items.
- Navigating between pages must not move keyboard focus automatically.

![Keyboard requirements](carousel/keyboard-requirements-62524-14316.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

### Screen Reader Support

The Carousel must fully support Screen Readers using a keyboard. Users must be able to navigate, operate, and exit the Carousel with the Screen Readers support.

#### Carousel Semantics

The Carousel must be exposed as a landmark region using appropriate ARIA semantics.

#### Accessible Name

The Carousel must announce the accessible name of the currently focused Item or interactive element.

#### Position Information

The Carousel must announce the current page and position (for example, “Item 2 of 5” or “Items 1 – 4 of 12”).

#### Accessible Interactive Content

The Carousel must allow the user to access the interactive content within the Items (i.e. buttons).

![Accessible Interactive Content](carousel/accessible-interactive-content-62524-14322.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4", "“Items 1 – 4 of 12”"._

### Focus Order

#### General principles

- Maintain a logical and predictable keyboard focus order.
- Do not move keyboard focus automatically when the Carousel changes pages.
- Only interactive elements within visible Carousel items may receive keyboard focus.
- Hidden Carousel items must not be keyboard accessible or exposed to assistive technologies.
- After activating a Carousel control, keep focus on the activated control until the user moves it.

#### Configuration with Navigation Controls

1. **Visible Item(s)**
   1. Tab moves to the next Items / interactive elements inside the visible Items, in reading order
   1. Tab moves to Previous Navigation Control from the last visible interactive element.

![Configuration with Navigation Controls](carousel/configuration-with-navigation-controls-62524-14825.png)

_Figure: Shows annotation-circle (number=1a, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); annotation-circle (number=1b, type=center, color=blue); annotation-circle (number=1c, type=center, color=blue). Text in the figure: "1a", "Move to the next focusable Item:", "Tab", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower", "1b", "Move to Previous Navigation Control:", "1c"._

1. **Previous Navigation Control**
   1. Enter moves to the previous page while retaining focus on the control.
   1. Arrow Left / Right moves to the previous / next pages
   1. Tab moves to the Next Navigation Control

![Configuration with Navigation Controls](carousel/configuration-with-navigation-controls-62646-100836.png)

_Figure: Shows annotation-circle (number=2a, type=center, color=blue); annotation-circle (number=2b, type=center, color=blue); annotation-circle (number=2c, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "2a", "Move to Previous Page:", "Enter", "2b", "Move to Next / Previous Pages:", "Arrow left", "or", "Arrow right", "2c", "Move to Next Navigation Control:", "Tab", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

1. **Next Navigation Control**
   1. Enter moves to the next page while retaining focus on the control.
   1. Arrow Left / Right moves to the previous / next pages
   1. Tab moves to the Scrollmarker

![Configuration with Navigation Controls](carousel/configuration-with-navigation-controls-62646-101704.png)

_Figure: Shows annotation-circle (number=3a, type=center, color=blue); annotation-circle (number=3b, type=center, color=blue); annotation-circle (number=3c, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "3a", "Move to Next Page:", "Enter", "3b", "Move to Next / Previous Pages:", "Arrow left", "or", "Arrow right", "3c", "Move to Scrollmarker:", "Tab", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

1. **Scrollmarker**
   1. Arrow Left / Right moves to Next / Previous Pages and move focus to the new active marker.
   1. Tab after using the arrow keys moves focus into the first visible Item / interactive element of the first visible Item
   1. Tab without having used the arrow keys leaves the Carousel.

![Configuration with Navigation Controls](carousel/configuration-with-navigation-controls-62646-101937.png)

_Figure: Shows annotation-circle (number=4a, type=center, color=blue); annotation-circle (number=4b, type=center, color=blue); annotation-circle (number=4c, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); 1 (state=enabled); 3 (state=enabled). Text in the figure: "4a", "Move to Next / Previous Pages:", "Arrow left", "or", "Arrow right", "4b", "Move to next focusable Item:", "Tab", "4c", "Leave Carousel:", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

#### Configuration without Navigation Controls

1. **Visible Item(s)**
   1. Tab moves to the next Items / interactive elements inside the visible Items, in reading order
   1. Tab moves to the Scrollmarker from the last visible interactive element.

![Configuration without Navigation Controls](carousel/configuration-without-navigation-controls-62646-102180.png)

_Figure: Shows annotation-circle (number=1a, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); scrollmarker (6=false); annotation-circle (number=1b, type=center, color=blue). Text in the figure: "1a", "Move to the next focusable Item:", "Tab", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower", "1b", "Move to Scrollmarker:"._

1. **Scrollmarker**
   1. Arrow Left / Right moves to Next / Previous Pages and move focus to the new active marker.
   1. Tab after using the arrow keys moves focus into the first interactive element of the active item
   1. Tab without having used the arrow keys leaves the Carousel.

![Configuration without Navigation Controls](carousel/configuration-without-navigation-controls-62646-103102.png)

_Figure: Shows annotation-circle (number=4a, type=center, color=blue); annotation-circle (number=4b, type=center, color=blue); annotation-circle (number=4c, type=center, color=blue); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); 1 (state=enabled); 3 (state=enabled). Text in the figure: "4a", "Move to Next / Previous Pages:", "Arrow left", "or", "Arrow right", "4b", "Move to next focusable Item:", "Tab", "4c", "Leave Carousel:", "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

**Don’t make hidden Items reachable using keyboard navigation or expose them to assistive technologies.**

![Configuration without Navigation Controls](carousel/configuration-without-navigation-controls-62524-14393.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); scrollmarker (6=false). Text in the figure: "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

### Motion

#### Reduce motion

Respect the user’s operating system Reduce Motion preference by minimizing or disabling animated transitions.

## Content and Assets 2/2

### Multi-Item Variant

The Multi-Item Carousel is designed to present a collection of related content. It supports repeatable Item structures that enable efficient browsing and comparison.

#### Item content

The Item supports compact, repeatable content. It may contain:

- Cards
- Media tiles
- Compact content blocks

![Item content](carousel/item-content-61435-1775.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Interview with Dr Michael Prochaska", "Dr Michael Prochaska, Member of the Executive Board for Human Resources and L...", "People and Stories", "Interview", "One lab for all", "Electromagnetic compatibility (EMC) tests are carried out on all STIHL applia...", "Backstage", "Background Story", "Charging and energy management in the STIHL AP system", "The STIHL chain factory in Switzerland: manufacturer of all chains for STIHL...", "Corporate Development"._

#### Recommended amount of Items

A Multi-Item Carousel should:

- Display 2–4 visible Items per page.
- Keep the total number of pages low to reduce navigation effort.

If additional pages are required, the Scrollmarker provides an optimized overflow variant for Carousels with more than 6 pages.

![Recommended amount of Items](carousel/recommended-amount-of-items-61435-1806.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Default (for less than 6 pages)", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4", "Overflow (for more than 6 pages)"._

#### Content consistency

Keep the overall visual structure consistent across all Items.

Consistent layouts help users focus on the changing content rather than adapting to changing compositions.

![Content consistency](carousel/content-consistency-62489-12106.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "MS 261 C-M", "3.5", "(80)", "Chainsaw", "Short description of the product", "Available now", "11.199,00 €", "incl. VAT", "MSA 300 without battery and charger", "Brush cutter", "In-store only", "MS 162", "Lawn mower"._

## Formatting and Construction 2/4

### Element details – Shared elements

The following elements form the shared foundation of both the Single-Item and Multi-Item Carousel variants. Their structure and behavior remain consistent across all recommended configurations.

#### Container

The container is the outermost wrapper of the Carousel. The container:

- defines the Carousel’s overall layout and boundaries.
- determines its placement within the surrounding page or grid.
- positions navigation elements either outside the viewport or inside as overlays.
- manages responsive behavior across different screen sizes.

![Container](carousel/container-61435-1979.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l); left nav control (chevron=left, state=disabled, variant=filled); right nav control (chevron=right, state=enabled, variant=filled); scrollmarker (6=false). Text in the figure: "Single-Item variant", "Multi-Item variant", "Desktop (XL)", "Item 1", "Item 2", "Item 3", "Item 4", "Desktop (L)"._

#### Viewport

The viewport defines the visible area of the Carousel. The viewport:

- clips content outside the visible area (overflow: hidden).
- determines how many items are visible at a time.
- serves as the reference area for content movement.

![Viewport](carousel/viewport-62064-22158.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Single-Item variant", "Item 1", "Item 2 (hidden)", "Item 2", "Multi-Item variant", "Item 3", "Item 4", "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)", "Item 9 (hidden)", "Item 10 (hidden)"._

#### Track

The track contains all items and moves within the viewport. The track:

- contains all items.
- manages their horizontal arrangement.
- controls the current position of the visible content.
- moves in response to user navigation, either through the Navigation Controls or via drag. Find more information under [Navigation Methods](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=62753-23447)

![Track](carousel/track-62064-22400.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Single-Item variant", "Item 2 (hidden)", "Item 2", "Item 3 (hidden)", "Multi-Item variant", "Item 1 (hidden)", "Item 3", "Item 4", "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)"._

#### Navigation Controls

The Navigation Controls provide sequential navigation through the Carousel. The Navigation Controls:

- are based on the Round Button component and inherit its appearance, states, behavior, and accessibility.
- use chevron icons to indicate the navigation direction.

**Variants**

1. **Filled** (Default for navigation controls positioned outside the Viewport) Used when Navigation Controls are positioned outside the viewport.
1. **Inverse** (Default for inside placement) Used when Navigation Controls are overlaid on media, imagery or dark canvas.

> Filled Inverse is currently based on the dark theme and subject to change as part of the future dark mode concept.

![Navigation Controls](carousel/navigation-controls-61435-2013.png)

_Figure: Shows navigation control (chevron=left, state=enabled, variant=filled); navigation control (chevron=right, state=enabled, variant=filled); navigation control (chevron=left, state=hover / pressed, variant=filled); navigation control (chevron=right, state=hover / pressed, variant=filled); navigation control (chevron=left, state=focus, variant=filled); navigation control (chevron=right, state=focus, variant=filled); navigation control (chevron=left, state=disabled, variant=filled); navigation control (chevron=right, state=disabled, variant=filled); navigation control (chevron=left, state=disabled focus, variant=filled); navigation control (chevron=right, state=disabled focus, variant=filled); annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue). Callouts 1, 2. Text in the figure: "enabled", "hover/pressed", "focus", "disabled", "disabled focus", "Filled", "Inverse"._

#### Don’t mix Navigation Control variants within the same Carousel.

Use either Filled or Filled Inverse consistently. Navigation Control variants should remain the same throughout the Carousel and must not change during navigation.

![Don’t mix Navigation Control variants within the same Carousel.](carousel/don-t-mix-navigation-control-variants-within-the-same-carous-61435-2019.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Page 2", "Page 3"._

#### Scrollmarker

The Scrollmarker indicates the current page within the Carousel and provides direct navigation. The Scrollmarker:

- indicates the user’s current page within the Carousel.
- allows users to navigate directly to a specific page.
- is clickable and keyboard focusable.
- supports Enabled, Hover, Focus, and Active states.
- not more than 5 rotations are recommended, but if needed an Overflow indicator can be used to indicate that more than than five pages are available.

**Variants**

1. **Ghost** (Default for placement below the Viewport) Used when the Scrollmarker is positioned outside the Viewport.
1. **Filled Inverse** (Default for inside placement and on dark canvas) Used when the Scrollmarker is positioned inside.
1. **Filled** (Special cases) Recommended on brighter images and light canvas that require additional contrast. Can also be used when the Carousel is placed on a colored background to improve visibility.

> **Temporary Color Token Definition** As an interim solution, the Scrollmarker colors are defined using Core Tokens. These will be migrated to Semantic Tokens as part of the future Dark Mode concept.

![Scrollmarker](carousel/scrollmarker-61435-2032.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); scrollmarker building element (dot 3 (optional), variant=ghost); scrollmarker building element (background=ghost, active slide=first); scrollmarker building element (background=ghost, active slide=middle); scrollmarker building element (background=ghost, active slide=last); annotation-circle (number=2, type=center, color=blue); scrollmarker building element (dot 3 (optional), variant=filled); scrollmarker building element (background=filled, active slide=first); scrollmarker building element (background=filled, active slide=middle); scrollmarker building element (background=filled, active slide=last); annotation-circle (number=3, type=center, color=blue); scrollmarker building element (dot 3 (optional), variant=inverse). Callouts 1, 2, 3. Text in the figure: "Ghost", "Filled", "Inverse", "Overflow"._

#### Tap Zones

The Tap Zones provide additional touch interaction areas for sequential navigation. They:

- are invisible touch targets positioned on the left and right sides of the Carousel.
- allow users to navigate to the previous or next page by tapping either side of the Carousel.
- are intended for touch devices only.
- complement swipe gestures as an alternative navigation method.
- are not keyboard focusable and are not announced by assistive technologies.

![Tap Zones](carousel/tap-zones-61435-2043.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=m). Text in the figure: "❖ Placeholder Item"._

## Figma Implementation Notes

> The Figma component represents the recommended Carousel configurations. Some responsive behaviors cannot be automated in Figma and require manual adjustment when configuring the component. These adjustments represent the Figma components and should not be interpreted as limitations of the code component. The following notes describe these implementation-specific limitations.

### Peek requires manual adjustment

Peek is part of the supported Multi-Item configuration on smaller breakpoints. In Figma, its placement must currently be adjusted manually to represent the intended responsive layout.

![Peek requires manual adjustment](carousel/peek-requires-manual-adjustment-62524-12709.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=s); carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s). Measurements: 450px, 288px, 136px. Text in the figure: "Carousel is set to hug to grow in height depending on content", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4", "Promo Flag", "Charging and energy management in the STIHL AP system", "Benefit now from the expertise of our experts - because you deserve advice an...", "Metadata", "Flag", "When changing the width of the carousel or when adding/deleting items, the it...", "The width of the item within the peek needs to be set automatically to the sa..."._

### In Figma, Peek is represented using an overlay rather than clipping the Track.

This is a Figma-specific implementation technique and does not define the implementation behavior of the code component.

![In Figma, Peek is represented using an overlay rather than clipping the Track.](carousel/in-figma-peek-is-represented-using-an-overlay-rather-than-cl-62524-12755.png)

_Figure: Shows carousel (slot: visible items=\[object Object\], slot: peek=\[object Object\], variant=multi item, breakpoint=s); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=s). Text in the figure: "Overlay added to component for display purposes", "Overflow of peek not visible on component itself", "❖ Placeholder Item 1", "❖ Placeholder Item 2", "Overflow is hidden when component is placed inside an artboard", "❖ Placeholder Item 3", "❖ Placeholder Item 4"._

## Formatting and Construction 3/4

### Element details – Single-Item Variant

The following element details are specific to the Single-Item Carousel variant.

#### Item

The Item represents the primary content of the Single-Item Carousel. The Item:

- is displayed as one item per page.
- occupies the full width of the Viewport.
- supports complex content such as images, media, content blocks, or promotional layouts.

![Item](carousel/item-61435-2265.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Item 1", "Item 2 (hidden)", "Item 2", "Viewport width"._

**Do keep all Items the same height.**

Using a consistent Item height prevents layout shifts during navigation and creates a stable, predictable browsing experience.

![Item](carousel/item-61435-2275.png)

_Figure: Do example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Item 2", "Item 1"._

**Don’t mix Items with different heights.**

Items with varying heights cause layout shifts, reduce visual consistency, and disrupt the browsing experience.

![Item](carousel/item-61435-2285.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l). Text in the figure: "Item 2", "Item 1"._

#### Item Aspect Ratio

Aspect ratios can be used flexibly.

**Recommended aspect ratios**

- Desktop: 16:9
- Tablet: 4:3, 3:2, 16:9
- Mobile: 3:4, 1:1, 16:9

![Item Aspect Ratio](carousel/item-aspect-ratio-61435-2233.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=m); carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=s). Text in the figure: "Desktop", "Tablet", "Mobile", "16:9", "4:3", "1:1", "3:2"._

**Don’t use aspect ratios that push the Carousel content or Scrollmarkers below the fold.**

![Item Aspect Ratio](carousel/item-aspect-ratio-61818-3135.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=single item, breakpoint=l)._

## Formatting and Construction 4/4

### Element details – Multi-Item Variant

The following element details are specific to the Multi-Item Carousel variant.

#### Item

The Item represents the primary content of the Multi-Item Carousel. The Item:

- is displayed together with other Items within the Viewport.
- supports repeatable content such as cards, media tiles, or similar compact content blocks.
- is displayed in configurable numbers across breakpoints.
- is arranged to evenly fill the available Viewport width.

![Item](carousel/item-61435-2304.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Item 1", "Item 2", "Item 3", "Item 4", "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)", "Item 9 (hidden)", "1/x Viewport width"._

**Do keep all Items the same height.**

Using a consistent Item height prevents layout shifts during navigation and creates a stable, predictable browsing experience.

![Item](carousel/item-61435-2314.png)

_Figure: Do example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)", "Item 9 (hidden)", "Item 1", "Item 2", "Item 3", "Item 4"._

**Don’t mix Items with different heights.**

Items with varying heights cause layout shifts, reduce visual consistency, and disrupt the browsing experience.

![Item](carousel/item-61435-2324.png)

_Figure: Don't example. Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=l). Text in the figure: "Item 5 (hidden)", "Item 6 (hidden)", "Item 7 (hidden)", "Item 8 (hidden)", "Item 9 (hidden)", "Item 1", "Item 2", "Item 3", "Item 4"._

#### Peek

The Peek provides an affordance that indicates additional content is available and encourages horizontal browsing. The Peek:

- partially reveals the next Item at the right edge of the Viewport and encourages users to continue browsing.
- is primarily used on touch devices.
- adapts to the configured Item width and layout.
- should occupy approximately 10% of the Container width.

![Peek](carousel/peek-61435-2335.png)

_Figure: Shows carousel (slot: peek=\[object Object\], slot: visible items=\[object Object\], variant=multi item, breakpoint=s). Measurements: 10%. Text in the figure: "❖ Placeholder Item 1", "❖ Placeholder Item 2", "❖ Placeholder Item 3", "❖ Placeholder Item 4"._
