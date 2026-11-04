---
id: popover
title: Popover
category: component
importNames:
  - DSPopover
package: "@stihl-design-system/components"
keywords:
  - popover
  - flyout
  - contextual overlay
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 35223:10505
figmaVersion: "2418018269838839666"
figmaVersionLabel: "DS-1543 Design | Global | Slots: Accordion"
figmaVersionCreatedAt: 2026-11-04T14:25:56Z
syncedAt: 2026-11-04T14:47:36.432Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=35223-10505
---

# Popover

## Formatting and Construction

### Anatomy

1. **Popover** The Popover is a container that can display a variety of elements, such as text, buttons, images, action items, or lists.
1. **Triggering element** A Popover is always activated by a triggering element (not included in the Figma Popover component itself). The trigger must be a button or a button variant (for example, an action item or a navigation button).
1. **Scroll bar (optional)** When content overflows, a scrollbar appears to keep the component compact and navigable.

![Anatomy](popover/anatomy-37096-1950.png)

_Figure: Shows popover (overflow, arrow=true, arrow placement=below, arrow alignment=center, color=white); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=3, type=right, color=blue); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); annotation-circle (number=2, type=right, color=blue). Callouts 1, 2, 3. Text in the figure: "❖ Placeholder"._

### Variants

The Popover is available in two main variants:

1. **With Arrow:** To provide additional, non-critical information or actions without navigating away from the current context.
1. **Without Arrow:** Optimized for Dropdown and Navigational Menus containing lists of items, with adjusted margins and padding to maximize space efficiency.

![Variants](popover/variants-37241-1456.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); popover (arrow=false, arrow placement=none, arrow alignment=none, color=white); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=left, color=blue). Callouts 1, 2. Text in the figure: "❖ Placeholder"._

#### Color

Popovers are available in different color options depending on their style:

1. **Popover with arrow:** available in **white** and **grey**
1. **Popover without arrow:** available in **white only**

![Color](popover/color-37335-2036.png)

_Figure: Shows annotation-circle (number=1, type=center, color=blue); popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); annotation-circle (number=2, type=center, color=blue); popover (arrow=false, arrow placement=none, arrow alignment=none, color=white); popover (arrow=true, arrow placement=below, arrow alignment=center, color=grey). Callouts 1, 2. Text in the figure: "❖ Placeholder"._

### Placement

#### Popover Placement (without Arrow)

This variant is mainly used for Dropdown Menus.

In this case, the Popover can **only be positioned below** the triggering element, **aligned either to the start (left) or end (right)** of the triggering button.

![Popover Placement (without Arrow)](popover/popover-placement-without-arrow-37221-2038.png)

_Figure: Shows dropdown-menu (alignment=left, expanded=true); dropdown-menu (alignment=right, expanded=true). Text in the figure: "below-start (left)", "below-end (right)", "Label"._

#### Popover Placement (with Arrow)

This variant can be placed relative to the triggering element in four directions:

- **above (default)** triggering element
- **below** triggering element
- **right** of triggering element
- **left** of triggering element

![Popover Placement (with Arrow)](popover/popover-placement-with-arrow-37096-1975.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); popover (arrow=true, arrow placement=right, arrow alignment=center, color=white); popover (arrow=true, arrow placement=left, arrow alignment=center, color=white); popover (arrow=true, arrow placement=above, arrow alignment=center, color=white). Text in the figure: "above (default)", "❖ Placeholder", "left", "right", "below"._

#### Arrow Alignment

In addition to the placement (see above), the Popover Arrow can be aligned with the triggering element in three ways:

- **start**
- **center (default)**
- **end**

![Arrow Alignment](popover/arrow-alignment-37322-1574.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=start, color=white); popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); popover (arrow=true, arrow placement=below, arrow alignment=end, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); popover (arrow=true, arrow placement=right, arrow alignment=start, color=white); popover (arrow=true, arrow placement=left, arrow alignment=start, color=white); popover (arrow=true, arrow placement=right, arrow alignment=center, color=white); popover (arrow=true, arrow placement=left, arrow alignment=center, color=white); popover (arrow=true, arrow placement=right, arrow alignment=end, color=white); popover (arrow=true, arrow placement=left, arrow alignment=end, color=white); popover (arrow=true, arrow placement=above, arrow alignment=start, color=white); popover (arrow=true, arrow placement=above, arrow alignment=center, color=white). Text in the figure: "Arrow placement: below", "Arrow alignment: start", "Alignment: center (default)", "Alignment: end", "❖ Placeholder", "Arrow placement: right", "Arrow placement: left", "Arrow alignment: center (default)", "Arrow alignment: end", "Arrow placement: above"._

#### Distance

The default distance between the Popover and the triggering element is **6px**.

![Distance](popover/distance-37096-1981.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); popover (Property 1=Default); popover (arrow=false, arrow placement=none, arrow alignment=none, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Measurements: 6px. Text in the figure: "❖ Placeholder", "Label"._

#### Edge cases:

If the preferred placement (for example, above-center) would cause the Popover to extend outside the viewport, it should automatically reposition to remain fully visible (e.g. above-end). The Popover must stay aligned with the triggering element while adjusting its position.

![Edge cases:](popover/edge-cases-37096-1991.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); popover (arrow=true, arrow placement=below, arrow alignment=end, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "Position: above Alignment: center", "Position: above Alignment: end", "❖ Placeholder", "Viewport edge"._

### Sizing

#### Maximum width

The width of the Popover is dynamic and adjusts based on the content inside.

However, to maintain consistency and usability, the following constraints apply:

- **Minimum width:** 200px
- **Maximum width:** 540px

These limits ensure the pop-over remains readable and visually balanced, regardless of content length.

![Maximum width](popover/maximum-width-37096-1961.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white). Text in the figure: "❖ Placeholder", "min. 200px", "max. 540px"._

### Motion

#### Appear

**Animation type:** fade in **Duration:** 250ms **Easing:** motion-functional-ease-out

![Appear](popover/appear-37096-2006.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); cursor (type=pointer). Text in the figure: "❖ Placeholder", "on click", "fade-in, 250ms"._

#### Disappear

**Animation type:** fade out **Duration:** 250ms **Easing:** motion-functional-ease-in

![Disappear](popover/disappear-37096-2018.png)

_Figure: Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); cursor (type=pointer). Text in the figure: "❖ Placeholder", "on click again/ or outside the element", "fade-out, 250ms"._

## Content and Assets

### Varaible content

A Popover can contain a variety of elements, such as text, buttons, images, action items, or lists.

![Varaible content](popover/varaible-content-37335-3295.png)

_Figure: Shows placeholder: text + image; button (button text=View Guide, variant=filled, state=enabled, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "Need more details?", "Learn how to configure this feature step by step. The guide includes setup in...", "View Guide"._

### Maximum height

The height of the Popover is determined by its content. However, to ensure proper display and avoid visual overflow, the following rule applies:

There must be a minimum distance of 48px between the bottom of the pop-over and the bottom/top edge of the screen.

If the content exceeds the available space, the Popover becomes scrollable, preventing it from extending beyond the visible area.

![Maximum height](popover/maximum-height-37335-3303.png)

_Figure: Shows anchor element (state=hover /pressed, breakpoint=l + xl, icon=right); action-item (label=Label, state=enabled, stacking=horizontal, leading-element=none, chevron=false, label-weight=regular, indent=false). Text in the figure: "Label", "min. 48px"._

### Don’t use for long text and content

Popovers have no max height and content can overflow, but they should stay brief and focused.

For larger amounts of information use a separate page.

![Don’t use for long text and content](popover/don-t-use-for-long-text-and-content-37344-9139.png)

_Figure: Don't example. Shows placeholder: text + image; button (button text=Label, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "General Terms and Conditions for Orders", "1. Scope and Contractual Partner 1.1 These General Terms and Conditions (here..."._

## Behavior & Usage

### Only buttons trigger popovers

A Popover must always be triggered by a button or a button variant.

![Only buttons trigger popovers](popover/only-buttons-trigger-popovers-37335-3219.png)

_Figure: Do example. Shows popover (overflow, arrow=true, arrow placement=below, arrow alignment=center, color=white); button-nav (state=hover /pressed, breakpoint=l + xl, icon=right); popover (arrow=false, arrow placement=none, arrow alignment=none, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "❖ Placeholder", "Example: button-nav", "Label", "Example: button small (label-hidden)"._

Applying a Popover to **links or non-interactive elements (such as div, span, or p)** interferes with expected functionality and **makes the component inaccessible to keyboard and screen reader users.**

![Only buttons trigger popovers](popover/only-buttons-trigger-popovers-37813-2553.png)

_Figure: Don't example. Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); cursor (type=pointer). Text in the figure: "❖ Placeholder", "Headline", "Copy text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur..."._

### Triggers and dismissal

A Popover is triggered when:

- The user **clicking button or taps** (or button variant)

It is dismissed when:

- The user **clicks or taps the button again**
- The user **clicks or taps another element**
- The user **clicks or taps outside the Popover**

**Keyboard navigation** and accessibility-specific behavior are described in the **Accessibility section** of this documentation.

> Since Popovers support several dismissal methods, adding a manual close button (like an “X” in the top-right corner) is optional, not required.

![Triggers and dismissal](popover/triggers-and-dismissal-37335-3243.png)

_Figure: Shows button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); cursor (type=pointer); popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); button (button text=Next, variant=filled, state=hover / pressed, size=small, icon position=right, hide label=off, flush alignment=off). Text in the figure: "click/tab to open", "❖ Placeholder", "click/tap outside close", "Next", "click/tap again to close", "click/tap other element"._

### Usecases

#### Additional non critical content

Popovers are best used for additional, non-critical content. They can provide supporting information, actions, or controls without disrupting the main task flow.

![Additional non critical content](popover/additional-non-critical-content-37335-3262.png)

_Figure: Shows placeholder: text + image; button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off). Text in the figure: "You can find the model designation on the housing of your brushcutter. The de...", "Model Designation"._

### Alternatives for Popovers

Because popovers hide additional information and are only visible on interaction, consider carefully before using one. Ask yourself:

- Is the information essential for the user to complete their task?
- Could the interface be made clearer without a popover?
- Would it be better to show the information directly on the page by default?
- Is the information long or complex, making a different component more suitable?

**Alternative should be:**

#### Persistent Content

Popovers should not be used in forms to provide essential instructions, since they are only visible on interaction (e.g., clicking an info icon).

Instead, present critical information as persistent content, such as hint text for an input field.

![Persistent Content](popover/persistent-content-37344-9591.png)

_Figure: Don't example. Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); input-password (ℹ️ info-button, input, system feedback, size=medium, state=enabled, invalid=false); cursor (type=pointer). Text in the figure: "Use at least 8 characters, including one uppercase letter, one number, and on...", "Password", "\*\*\*\*\*\*\*\*"._

![Persistent Content](popover/persistent-content-37344-9586.png)

_Figure: Do example. Shows input-password (input, system feedback, hint, size=medium, state=enabled, invalid=false). Text in the figure: "Password", "Use at least 8 characters, including one uppercase letter, one number, and on...", "\*\*\*\*\*\*\*\*"._

#### Expandable sections and accordions

When additional information is tied to a specific item (e.g., extra details in a list), do not hide it inside a Popover.

Instead, use expandable sections or accordions, which keep the information discoverable and accessible.

![Expandable sections and accordions](popover/expandable-sections-and-accordions-37344-9644.png)

_Figure: Don't example. Shows popover (arrow=true, arrow placement=below, arrow alignment=center, color=white); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); button (button text=Button, variant=ghost, state=enabled, size=small, icon position=none, hide label=on, flush alignment=off); cursor (type=pointer). Text in the figure: "The devices produce only minimal vibrations, which reduces muscle fatigue. Th...", "Battery advantages for employees", "Battery advantages for companies", "Battery advantages for the environment or customers"._

![Expandable sections and accordions](popover/expandable-sections-and-accordions-37344-9639.png)

_Figure: Do example. Shows accordion-group (size=medium, flush=false, expansion indicator=right). Text in the figure: "Battery advantages for employees", "The devices produce only minimal vibrations, which reduces muscle fatigue. Th...", "Battery advantages for companies", "Battery advantages for the environment or customers"._

#### Mobile

Don’t use popovers on mobile. They’re hard to position on small screens, often cover important content, and their anchored placement makes them less discoverable or easy to miss. (A common use case on desktop is Utility Menus, such as for language selection.)

Do open the same content in a dialog on mobile. A centered dialog ensures clarity and readability, improves discoverability by taking the foreground, and helps users complete tasks without distraction.

![Mobile](popover/mobile-37972-2553.png)

_Figure: Don't example. Shows action-item (label=English, state=active, stacking=vertical, leading-element=icon, chevron=true, label-weight=regular, indent=false); input-search (submit button, input, system feedback, hint, size=input-search-small, state=enabled, invalid=false); divider (Direction=horizontal); text (viewport=desktop, variant=group title); action-item (label=Global / English, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Español, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Français, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Portugals, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Deutschland / Deutsch, state=active, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Argentina / Español, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false). Text in the figure: "English", "Input", "Global Sites", "Global / English", "Global / Español", "Global / Français", "Global / Portugals", "Local Sites", "Deutschland / Deutsch", "Argentina / Español"._

![Mobile](popover/mobile-37972-2561.png)

_Figure: Do example. Shows header-dialog (heading, close button, viewport=mobile); input-search (submit button, input, system feedback, hint, size=input-search-small, state=enabled, invalid=false); divider (Direction=horizontal); text (viewport=desktop, variant=group title); action-item (label=Global / English, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Español, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Français, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Global / Portugals, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Deutschland / Deutsch, state=active, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false); action-item (label=Argentina / Español, state=enabled, leading-element=none, stacking=horizontal, chevron=false, label-weight=normal, indent=false). Text in the figure: "Language", "Input", "Global Sites", "Global / English", "Global / Español", "Global / Français", "Global / Portugals", "Local Sites", "Deutschland / Deutsch", "Argentina / Español"._

## Accessiblity

### Focus order

When opened with the keyboard, focus moves to the **first focusable element** in the Popover.

From there, it follows a logical **top-to-bottom**, **left-to-right** sequence.

![Focus order](popover/focus-order-37344-11649.png)

_Figure: Shows dropdown\_menu\_container (overflow=false); placeholder: text + image; button (button text=View Guide, variant=filled, state=focus, size=small, icon position=none, hide label=off, flush alignment=off); button (button text=Contact Support, variant=ghost, state=focus, size=small, icon position=none, hide label=off, flush alignment=off); annotation-circle (number=1, type=left, color=blue); annotation-circle (number=2, type=left, color=blue); annotation-circle (number=3, type=left, color=blue); annotation-circle (number=4, type=left, color=blue); annotation-circle (number=5, type=left, color=blue); annotation-circle (number=1, type=bottom, color=blue); annotation-circle (number=2, type=bottom, color=blue); annotation-circle (number=6, type=left, color=blue). Callouts 1, 2, 3, 4, 5, 6, 7. Text in the figure: "Example: dropdown menu", "Example: additional information", "STIHL sustainability strategy", "Education and people", "Economic sustainability", "Social engagement", "Climate strategy", "Environmental protection", "STIHL and the rainforest", "Need more details?", "Learn how to configure this feature step by step. The guide includes setup in...", "View Guide", "Contact Support"._

### Keyboard navigation

Users can interact with the Popover using the following keyboard actions:

- **Open** the Popover by pressing **“Space”** or **“Enter”** on the trigger button.
- **Close** the Popover by pressing **“Esc”**, or by moving focus away from the Popover.
- **Navigate forward** to the next focusable element with **“Tab”**.
- **Navigate backward** to the previous focusable element with “**Shift + Tab”**.

![Keyboard navigation](popover/keyboard-navigation-37574-3158.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=l, brand add-on=false, number areas=2); nav-bar (variant=main, breakpoint=l); dropdown\_menu\_container (overflow=false). Text in the figure: "Space", "Enter", "Open Popover with:", "or", "Search Site", "Contact", "Dealer", "Wishlist", "3", "Cart", "STIHL World", "Login", "Products", "Accessories", "Professionals", "Advice", "Support", "Esc", "Close Popover with:", "Sawing and cutting", "Mowing and planting", "Cleaning and clearing", "Garden size", "Offers and promotions"._

## Examples

### Utility Menu

Built on the Popover component the Utility Menu offers quick access to essential functions, user tools, and system-level actions — such as login, language selection, and other key options. More information regarding the Utility Menu can be found [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?m=auto&node-id=7158-33065&t=x1babMLUtlLvUiUI-1).

![Utility Menu](popover/utility-menu-37344-11739.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=l, brand add-on=false, number areas=2); utility\_menu\_container (overflow=false). Text in the figure: "Search Site", "Contact", "Dealer", "Wishlist", "3", "Cart", "STIHL World", "Login", "STIHL Website", "MY STIHL", "STIHL Connected", "iMOW® Web App", "Product Advisor", "All Services & Apps"._

### Dropdown Menu

Built on the Popover component the Dropdown Menu provides quick access to nested navigation items. Displaying a linear list of Action Items, triggered by clicking a Button Nav in the Nav Bar. It is designed to support a single level of navigation More information can be found [here](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?m=auto&node-id=6263-62113&t=x1babMLUtlLvUiUI-1).

![Dropdown Menu](popover/dropdown-menu-37363-2614.png)

_Figure: Shows top-bar (grid variant=main, breakpoint=xl, brand add-on=true, number areas=2); nav-bar (variant=main, breakpoint=xl); title (title text=Welcome to STIHL, size=xl, viewport=desktop); dropdown\_menu\_container (overflow=false). Text in the figure: "Corporate", "Search Site", "Contact", "English", "About STIHL", "Sustainability", "Careers", "STIHL Journal", "Press", "Welcome to STIHL", "ƒ", "STIHL sustainability strategy", "Education and people", "Economic sustainability", "Social engagement", "Climate strategy", "Environmental protection", "STIHL and the rainforest"._

### Additional info

In the case of STIHL advisors, the Popover is used to provide users with additional guidance on where to find product-specific information, such as the machine or product number.

![Additional info](popover/additional-info-37344-11750.png)

_Figure: Shows text (alert banner=false); button (button text=Button, variant=ghost, state=hover / pressed, size=small, icon position=none, hide label=on, flush alignment=off); input (system feedback, hint=Nummer ohne  Leerzeichen und Bindestriche eintragen, input=Input, hint, label=9-stellige Maschinennummer, size=medium, state=enabled, invalid=false). Text in the figure: "1.", "Geräteauswahl", "2.", "Vegetation", "3.", "hindernisse", "4.", "Empfehlungen", "5.", "überprüfung", "Neustart", "1. Produktauswahl", "Welchen STIHL Freischneider besitzen Sie?", "Modellbezeichnung", "FS 94", "Schneidwerkzeug berater für Freischneider ƒ", "Bei STIHL FS94 finden Sie die Maschinennummer in der Regel an der in den Abbi...", "Welche Maschinennummer weist Ihr Freischneider auf?", "Das von Ihnen angegebene Modell gibt es in unterschiedlichen Ausführungsvaria...", "Wo finde ich die Maschinennummer?", "9-stellige Maschinennummer", "Nummer ohne Leerzeichen und Bindestriche eintragen"._

## Popover

- A Popover is triggered by a button.
- It can contain text, lists, images, or interactive elements.
- Popovers are best suited for short, non-critical information or lightweight interactions without leaving the current context.
- Triggered on click or tap.

![Popover](popover/popover-37096-1912.png)

_Figure: Text in the figure: "❖ Placeholder", "arrow: false", "color: white", "arrow: true", "arrow alignment: start", "arrow alignment: center", "arrow alignment: end", "arrow placement: below", "arrow placement: above", "arrow placement: left", "arrow placement: right", "color: grey"._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-notification--documentation&globals=backgrounds.name:!undefined;backgrounds.value:!undefined)

[Decision tree](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=26738-47603)

### Similar components

**Component**

**Trigger**

**Placement**

**Content**

**Intention**

**Tooltip**

Hover or focus of an interactive element

In proximity to the triggering element, non-modal

Text only

Provide short, contextual information or clarify unlabeled controls

**Popover**

Click or tap of an interactive element

In proximity to the triggering button, non-modal

Text, icon, image and interactive elements

Provide additional information or quick actions without leaving the current context

**Dialog**

Triggered by the system in response to user interaction

Center of the screen, with backdrop, modal

Text, icon, image and interactive elements

Confirm important actions, guide users through complex tasks, or temporarily block interaction to focus attention

**Toast**

Triggered by the system in response to user interaction

Bottom of the screen, non-modal

Text, icon, and optional dismiss button

Provide brief, lightweight feedback on user actions such as error or success.

**Notification**

Triggered by the system in response to events or interactions

Within the content area of the page, in relation to relevant elements

Text, icon, links and buttons

Deliver important updates or status messages that may require user attention or follow-up

### Related elements

[Tooltip](https://www.figma.com/design/HovZmjHiwxguawTWTO6ibS/DS-1085-Design-%7C-Web-%7C-Tootlip?node-id=36194-1244)

[Utility Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?m=auto&node-id=7158-32869&t=JVVkPuiySoyYbdTa-1)

[Dropdown Menu](https://www.figma.com/design/Ie2r0R9QwjEc7O3nrFbXhV/Web-Pattern-Library?m=auto&node-id=6583-85690&t=JVVkPuiySoyYbdTa-1)

[Dialog](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=14115-4051)

[Toast](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=8844-4923)

[Notification](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt/Core-Components-%F0%9F%92%A0?node-id=7251-8)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).
