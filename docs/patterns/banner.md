---
id: banner
title: Banner
category: pattern
importNames:
  - DSBanner
package: "@stihl-design-system/components"
keywords:
  - banner
  - announcement
  - page level message
figmaFile: Web Pattern Library
figmaProject: 03. Platform Libraries
figmaFileKey: Ie2r0R9QwjEc7O3nrFbXhV
figmaNodeId: 7171:9055
figmaVersion: "2370898144407684143"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-06-30T14:44:46Z
syncedAt: 2026-11-04T14:52:34.467Z
sourceUrl: https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=7171-9055
---

# Banner

## Banner

- Used to highlight marketing content such as promotions, campaigns, events, or key service messages
- Designed to draw attention without interrupting the user experience
- Intended for temporary, non-critical information
- Not used for system status updates or warnings (use notifications for that purpose)
- Helps engage users with timely and relevant content

![Banner](banner/banner-7171-10866.png)

_Figure: Shows link-default (label=Promo Banner Link, variant=neutral, state=enabled, icon position=right); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=This is a button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "content: promo", "content: placeholder", "content: USPs", "variant: default", "viewport: XL", "close-button: true", "Promo Banner Link", "❖ Placeholder", "Text Element", "close-button: false", "viewport: L", "viewport: M", "viewport: S", "variant:secondary", "variant:highlight"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-notification--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

[Decision tree](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26738-47603)

### Related elements

[Navigation](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV?node-id=5381-18)

Top bar

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=7251-8)

[Link](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=26711-8034)

[Button](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=162-126)

[Iconography](https://www.figma.com/design/U218NNP4OsipaHOtv5flns/Iconography-%E2%9E%A1%EF%B8%8F?m=auto)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Elements

The Promo Banner consists of two main parts:

1. **Container:** Holds content such as text, links, or buttons.
1. **Close Button (optional):** Allows users to dismiss the banner.

![Elements](banner/elements-7171-11173.png)

_Figure: Shows banner (variant=secondary, viewport=m, content=placeholder, close-button=false); annotation-circle (number=1, type=left, color=blue); banner (variant=secondary, viewport=m, content=promo, close-button=true); annotation-circle (number=2, type=right, color=blue). Callouts 1, 2. Text in the figure: "❖ Placeholder", "Promo Banner Link"._

#### Variants

There are three main variants:

1. **Default:** Primary variant for general use.
1. **Secondary:** Less prominent; suitable when used alongside another banner.
1. **Highlight:** Most attention-grabbing; use sparingly for critical messages.

![Variants](banner/variants-7171-11184.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=true); annotation-circle (number=1, type=left, color=blue); banner (variant=secondary, viewport=m, content=promo, close-button=true); annotation-circle (number=2, type=left, color=blue); banner (variant=highlight, viewport=m, content=promo, close-button=true); annotation-circle (number=3, type=left, color=blue). Callouts 1, 2, 3. Text in the figure: "Promo Banner Link"._

### Alignment & Placement

The Promo Banner is positioned **above the top bar** and spans the **full width of the viewport**.

![Alignment & Placement](banner/alignment-placement-7171-11198.png)

_Figure: Shows banner (variant=default, viewport=xl, content=promo, close-button=true); top-bar (variant=main, breakpoint=xl, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl). Text in the figure: "Full", "Promo Banner Link", "This is a Platform name", "Search Site", "Label", "Button nav"._

#### Content Alignment

On **viewports XL, L, M, content is centered (1)** within the banner. **On viewport S, it is left-aligned (2)** to make better use of available space.

![Content Alignment](banner/content-alignment-7171-11212.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=true); annotation-circle (number=1, type=left, color=blue); banner (variant=default, viewport=s, content=promo, close-button=true); annotation-circle (number=2, type=left, color=blue). Callouts 1, 2. Text in the figure: "center", "Promo Banner Link", "left"._

### Sizing

#### Height

The banner has a **maximum height of 48px on XL, L, and M viewports (1)**. On **viewport S**, height adjusts **dynamically based on the content (2)**. More information about max. character count and max lines can be found in content documentation.

![Height](banner/height-7171-11229.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=true); banner (variant=default, viewport=s, content=promo, close-button=true). Measurements: 48px. Text in the figure: "Longer Promo Banner Copy Lorem ipsum dolor sit amet", "dynamic"._

## Content and Assets

### Maximum Character

The maximum character count should not exceed **65 characters**. Depending on the amount of elements and combination of icons this value might vary.

![Maximum Character](banner/maximum-character-7171-11253.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=true). Text in the figure: "Longer Banner Copy Lorem ipsum dolor sit amet, consectetur lorem", "Longer Banner Copy", "Lorem ipsum dolor sit", "amet consectetur lorem"._

### Overflow

1. On **XL, L, and M viewports**, banner content remains on a **single line (no overflow)**.
1. On **S viewports, overflow is allowed** and the banner will expand in height, but is limited to a **maximum of two lines of text**.

![Overflow](banner/overflow-7171-11260.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=true); annotation-circle (number=1, type=left, color=blue); banner (variant=default, viewport=s, content=promo, close-button=true); annotation-circle (number=2, type=left, color=blue). Callouts 1, 2. Text in the figure: "Longer Promo Banner Copy Lorem ip sum dolor sit amet, consectetur"._

### Pairing

A **maximum of two banners** can be displayed at the same time:

**1x Default (1) or Highlight Banner (2)** Used to present key information with an action or link (e.g. a promotion or campaign).

**1x Secondary Banner (3)** Used for supporting or general information (e.g. USPs or delivery conditions).

> **Important:** Banners can increase cognitive load for users. Use them sparingly and only when necessary.

![Pairing](banner/pairing-7171-11272.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); banner (variant=default, viewport=xl, content=promo, close-button=true); top-bar (variant=main, breakpoint=xl, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl); annotation-circle (number=3, type=left, color=blue); annotation-circle (number=2, type=top, color=blue); banner (variant=highlight, viewport=xl, content=promo, close-button=false). Callouts 1, 2, 3. Text in the figure: "Promo Banner Link", "Text Element", "This is a Platform name", "Search Site", "Label", "Button nav"._

#### Combinations

Do not combine the Default and Highlight variants.

![Combinations](banner/combinations-7171-11291.png)

_Figure: Don't example. Shows banner (variant=highlight, viewport=xl, content=promo, close-button=false); banner (variant=default, viewport=xl, content=promo, close-button=true); top-bar (variant=main, breakpoint=xl, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl). Text in the figure: "Promo Banner Link", "This is a Platform name", "Search Site", "Label", "Button nav"._

#### Actions and hierachy

Avoid including multiple actions per banner. Focus on a single, clear call to action.

![Actions and hierachy](banner/actions-and-hierachy-7171-11304.png)

_Figure: Don't example. Shows link-default (label=Link to the Promotion, variant=neutral, state=enabled, icon position=right); link-default (label=Link to the participate Raffel, variant=neutral, state=enabled, icon position=right); link-default (label=Copy Code: STIHL25 for free shipping, variant=neutral, state=enabled, icon position=right); button (button text=This is a button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); top-bar (variant=main, breakpoint=xl, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl). Text in the figure: "Link to the Promotion", "Link to the participate Raffel", "Copy Code: STIHL25 for free shipping", "This is a Platform name", "Search Site", "Label", "Button nav"._

### Pattern

In the Figma component, we provide two **commonly used content patterns for banners: Promotion and USPs.**

#### Promo

As the name suggests, this template is designed for promotions, campaigns, or events. It includes:

An **icon (1),** paired with a **link component (2)** that directs users to the promotional content.

![Promo](banner/promo-7171-11335.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); banner (variant=default, viewport=m, content=promo, close-button=true); banner (variant=highlight, viewport=m, content=promo, close-button=true); annotation-circle (number=1, type=bottom, color=blue); annotation-circle (number=2, type=bottom, color=blue). Callouts 1, 2. Text in the figure: "Only this week free delivery", "Up to 40% off all Chainsaw models"._

#### USPs

The USP (Unique Selling Proposition) pattern uses the Secondary banner variant. It can contain **up to three text elements with icons** to visually support the content.

This pattern is most often used to communicate USPs or other non-essential or supporting information.

![USPs](banner/usps-7171-11348.png)

_Figure: Text in the figure: "Versandkostenfreie ab 49€", "Lieferung oder Abholung vor Ort", "30 Tage Rückgaberecht"._

#### Status

Don’t display status messages (e.g. success, error, or warning) in the Promotion Banner. Use the Notification component instead, as it is already optimized with the correct ARIA roles and is properly interpreted by assistive technologies.

> **Note:** An optimized Information variant for specific use cases with documentation will be added in the future.

![Status](banner/status-7171-11355.png)

_Figure: Shows notification (close button, type=warning, icon=True); top-bar (variant=main, breakpoint=xl, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl). Text in the figure: "Important Safety Notice We are recalling selected items due to a material def...", "This is a Platform name", "Search Site", "Label", "Button nav"._

## Behavior

### General

#### Dismissibility

**Banners should be dismissible** to reduce visual noise and allow users to focus on relevant content. This is especially important for temporary or repeating information like promotions.

![Dismissibility](banner/dismissibility-7171-11370.png)

_Figure: Shows banner (variant=default, viewport=l, content=promo, close-button=true). Text in the figure: "Only this week free delivery"._

#### Focus order

In a promo banner, the focus order should **start with the first interactive element in the banner (1) followed by the next interactive element (2) in this case the close button**. The text itself is not focusable but must be accessible to screen readers.

![Focus order](banner/focus-order-7171-11376.png)

_Figure: Shows annotation-circle (number=1, type=top, color=blue); annotation-circle (number=2, type=top, color=blue); banner (variant=default, viewport=l, content=promo, close-button=true). Callouts 1, 2. Text in the figure: "Only this week free delivery"._

#### Status

If a **Notification is used in the banner area to display a status message**, no Promotional Banner should be shown at the same time. This ensures clarity and avoids competing messages.

![Status](banner/status-7171-11384.png)

_Figure: Don't example. Shows notification (close button, type=warning, icon=True); banner (variant=highlight, viewport=l, content=promo, close-button=false); top-bar (variant=main, breakpoint=l, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=l). Text in the figure: "Important Safety Notice We are recalling selected items due to a material def...", "Promo Banner Link", "This is a Platform name", "Search Site", "Label", "Button nav"._

### Viewport behavior

#### Primary or Highlight banner

When a Default or Highlight banner is used alone, it remains visible across all viewports.

![Primary or Highlight banner](banner/primary-or-highlight-banner-7171-11399.png)

_Figure: Shows banner (variant=highlight, viewport=l, content=promo, close-button=true); top-bar (variant=main, breakpoint=l, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=l); banner (variant=highlight, viewport=s, content=promo, close-button=true); top-bar (variant=main, breakpoint=s, logo add-on=true, number areas=2). Text in the figure: "Promo Banner Link", "This is a Platform name", "Search Site", "Label", "Button nav"._

#### Secondary Banner

When using the secondary banner alone or in combination with another banner:

1. The Default/Highlight banner stays **visible on all viewports**.
1. The Secondary banner is **hidden on small viewports (S)** to optimize space.

![Secondary Banner](banner/secondary-banner-7171-11411.png)

_Figure: Shows banner (variant=highlight, viewport=l, content=promo, close-button=true); top-bar (variant=main, breakpoint=l, logo add-on=true, number areas=2); nav-bar (variant=main, breakpoint=l); annotation-circle (number=1, type=left, color=blue); banner (variant=highlight, viewport=s, content=promo, close-button=true); top-bar (variant=main, breakpoint=s, logo add-on=true, number areas=2); annotation-circle (number=2, type=left, color=blue). Callouts 1, 2. Text in the figure: "Promo Banner Link", "Text Element", "This is a Platform name", "Search Site", "Label", "Button nav"._

### Scroll behavior

1. **Default (Start)** On initial loading of the page the banner is visible.
1. **Start scrolling down** The banner is hidden and only the top bar is visible.
1. **Start scrolling back up** The banner stays hidden and only the top bar and nav bar are visible.
1. **Back to top** Only when reaching the top of the page the banner is shown again.

![Scroll behavior](banner/scroll-behavior-7171-11432.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); annotation-circle (number=2, type=center, color=blue); annotation-circle (number=3, type=center, color=blue); annotation-circle (number=4, type=center, color=blue). Callouts 1, 2, 3, 4. Text in the figure: "Banner", "Top Bar", "Nav Bar"._

## Usage Guidelines

### Functionality & Priority

Components are chosen based on their level of urgency:

1. **Dialog** Highest urgency. Requires explicit user action before continuing. → [See Dialog](https://www.figma.com/design/JNhJDymoWR1o9rQIZ5nhYU?node-id=14115-4051)

1. **Notification / Toast** Draws attention but does not block usage. Useful for immediate or transient feedback. → [See Notification](https://www.figma.com/design/JNhJDymoWR1o9rQIZ5nhYU?node-id=7251-8) → [See Toast](https://www.figma.com/design/JNhJDymoWR1o9rQIZ5nhYU?node-id=8844-4923)

1. **Banner** Persistent but non-blocking. Ideal for supporting information, promotions, or optional actions. → [See Banner](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?node-id=7171-9055)

![Functionality & Priority](banner/functionality-priority-9902-2911.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); header-dialog (heading, close button, viewport=desktop); footer-dialog (first button, second button, third button, viewport=desktop, direction=horizontal, primary position=left); annotation-circle (number=3, type=center, color=blue); notification (action, close button, type=info, icon=True); toast (text=All files lorem ipsum, icon, type=info); banner (variant=default, viewport=m, content=promo, close-button=true). Callouts 1, 3. Text in the figure: "Heading", "❖ Placeholder", "Button", "This is a notification message that guides the user.", "All files lorem ipsum", "Promo Banner Link"._

### Use Cases

#### System / Mandatory

- **System feedback (success, error)** → Notification / Toast
- **Cookies / Privacy notices** → Banner (if navigation can continue without consent) → Dialog (if explicit consent is required before continuing)
- **Urgent notifications (downtime, outages, maintenance)** → Notification (when only informing) → Dialog (when user actions are blocked)
- **Critical announcements (recalls, legal or policy changes)** → Notification (when only informing) → Dialog (when user actions are blocked)

![System / Mandatory](banner/system-mandatory-9902-2929.png)

_Figure: Shows header-dialog (heading, viewport=desktop); content-placeholder (type=text, format=none); footer-dialog (first button, third button, viewport=desktop, direction=horizontal, primary position=left); notification (close button, type=info, icon=True); toast (text=Settings have been saved., icon, type=success); notification (type=warning, icon=True). Text in the figure: "Cookies help us improve your experience.", "By clicking “Accept all,” you agree to the use of cookies as described in our...", "Accept all", "Manage preferences", "The system will be unavailable on Monday, October 20, from 2:00 PM to 4:00 PM.", "Settings have been saved.", "Recall notice: Product XY has been recalled. Please visit www.example.com for..."._

#### Marketing / Engagement

- **Sales & promotions** → Banner
- **Seasonal campaigns** → Banner
- **USPs / Value propositions** → Banner (for general positioning) → Notification (when contextually relevant, e.g., delivery info next to cart price)
- **Newsletter sign-up / Loyalty programs / Referrals** → Banner

![Marketing / Engagement](banner/marketing-engagement-9902-2943.png)

_Figure: Shows banner (variant=default, viewport=m, content=promo, close-button=false); banner (variant=highlight, viewport=m, content=promo, close-button=false). Text in the figure: "Join our Newsletter", "Up to 40% off all Chainsaw models", "Versandkostenfreie ab 49€", "Lieferung oder Abholung vor Ort", "30 Tage Rückgaberecht"._

#### Informational

- **Product / feature updates (non-critical)** → Banner
- **Tips, nudges, reminders** → Banner

![Informational](banner/informational-9902-2951.png)

_Figure: Shows banner (variant=secondary, viewport=m, content=promo, close-button=false). Text in the figure: "We’ve just rolled out something new! Check out the latest updates and improve..."._

## Examples

> The use case examples shown feature the new navigation concept and do not reflect the current state of the product.

**E-Shop**

Banner focused on promotions, campaigns and USPs

![Examples](banner/examples-7171-11487.png)

_Figure: Shows banner (variant=default, viewport=xl, content=promo, close-button=true); banner (variant=secondary, viewport=xl, content=usps, close-button=false); top-bar (grid variant=main, breakpoint=xl, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=xl); flag (label=Offer, color=promo: highlight); button (button text=To the Offer, variant=highlight, state=enabled, size=medium, icon position=none, hide label=off, flush alignment=off). Text in the figure: "Up to 40% off all Chainsaw models", "Free shipping on orders over €49", "Delivery or local pickup available", "30-day return policy", "Search Site", "Contact", "Dealer", "Wishlist", "3", "Cart", "STIHL World", "Login", "Products", "Accessories", "Professionals", "Advice", "Support", "outdoor time. Chainsaws from STIHL.", "Quality and Ease of Use", "Offer", "MS 180", "399,00 €", "from €399.00\*", "To the Offer"._
