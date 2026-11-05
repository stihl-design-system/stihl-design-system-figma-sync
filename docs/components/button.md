---
id: button
title: Button
category: component
importNames:
  - DSButton
  - DSButtonRound
  - DSFloatingActionButton
package: "@stihl-design-system/components"
keywords:
  - button
  - round button
  - fab
  - floating action button
  - cta
figmaFile: Core Components
figmaProject: 02. Core Components
figmaFileKey: qXldpLO6gxHJNLdcXIPxYt
figmaNodeId: 162:126
figmaVersion: "2418039224414387070"
figmaVersionLabel: Components published
figmaVersionCreatedAt: 2026-11-04T15:50:17Z
syncedAt: 2026-11-05T19:19:44.788Z
sourceUrl: https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=162-126
---

# Button

## Button

![Button](button/button-168-3988.png)

_Figure: Various states and variants of a button component in both light and dark themes. It includes button variants such as highlight, filled, outline, ghost (default), ghost (flush), and utility, each shown in states like enabled, hover/pressed, focus, disabled, disabled focus, and loading. Each button example illustrates different icon positions (none, left, right), label hiding options, and flush alignment settings. The figure provides a comprehensive visual guide to the button component's appearance and behavior across different conditions and themes._

## Overview

### Definition

A button is a clickable element to initialize an action or to highlight the user journey.

### When to use

Use buttons to perform an action, i.e.:

- submit a form
- trigger an element to appear or disappear
- edit an element
- etc.

### When not to use

Do not use buttons for hierarchical navigation, or when you want to link to other pages or external resources.

In this case you should use Standalone links, Inline links or links that look like buttons.

**Links that look like a button**

There are instances when a link needs to be styled as a button because of its emphasis on the page.

In this case keep in mind that there is no disabled and loading state, since they are links.

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-button--documentation)

## Formatting

### Anatomy

1. **Container**
1. **Button label**
1. **Icon Left / Right** (Optional)

![Anatomy](button/anatomy-1881-8630.png)

_Figure: The anatomy of a Button component in the STIHL Design System. The button is of the highlight variant, enabled state, medium size, and has an icon position on the left. Callout 1 points to the Icon Left, callout 2 points to the Container, and callout 3 points to the Icon Right. The Button label is centered within the Container. The icons on the left and right are optional elements of the button's layout._

### Variants

Use button variants to define visual emphasis, action hierarchy, and context.

1. **Highlight** Use for the most important action on a page or within a user flow. This variant should be used sparingly and only when an action needs to stand out above all others. Example: Add to Cart
1. **Filled:** Use as the default button style when no other variant is specified. Filled buttons provide clear emphasis and are suitable for standard primary actions. Example: Submit, continue, save.
1. **Outline:** Use for secondary actions that need to remain visible without competing with the primary action. Outline buttons are often used next to Filled or Highlight buttons to establish hierarchy. Example: Cancel (next to Save), Back (next to Continue).
1. **Ghost:** Use for low-emphasis actions or secondary actions in layouts where the button has enough visual breathing room. Ghost buttons work well in standalone UI areas such as teaser or banner where the action can remain visually subtle. Example: View all.
1. **Utility:** Use for supporting actions in dense UI layouts, such as checkout flows or data tables. It provides more visual emphasis than a Ghost Button, but remains less prominent than a Highlight Button. Examples: Edit, Change.

![Variants](button/variants-1881-8266.png)

_Figure: Five button variants: Highlight, Filled, Outline, Ghost, and Utility. Each button is in an enabled state, medium size, with no icon, visible label, and standard alignment except for the Utility button which has flush alignment. The numbered callouts point to each button variant in order from left to right: 1 points to the Highlight button, 2 to the Filled button, 3 to the Outline button, 4 to the Ghost button, and 5 to the Utility button._

### Size

Two sizes have been defined for buttons:

1. **Medium:** That’s the size that should be used by default.
1. **Small:** This size can be used when
   - there is not enough vertical space to use the default button
   - there are too many small elementes and the default button would feel too massive
   - a Ghost button is paired vertically with another button variant

For **Ghost Buttons** with **flush functionality** the height stays the same, but the right and left padding changes to negative for both **default (3)** and **small (4)**.

For **Ghost Accent Buttons** the height is smaller, the button is flush and has no padding. Gaps and icon sizes are also different for both **default (5)** and **small (6)**.

![Size](button/size-1881-8664.png)

_Figure: The size specifications for buttons in the STIHL Design System, detailing two sizes: medium and small. Each numbered callout points to a specific button variant and size: 1 points to a medium-sized highlight button with 24px top padding, 8px bottom padding, and 48px width, 2 points to a small-sized highlight button with 16px top padding, 8px bottom padding, and 32px width, 3 points to a medium-sized ghost flush button with -12px left and right padding, 4 points to a small-sized ghost flush button with -8px left and right padding, 5 points to a medium-sized ghost accent flush button with -4px left and right padding... Measurements in the figure: 20px, 10px._

### Icon

Buttons can be feature an icon to clarify an action and to highlight a button. They are always placed left or right of the text label.

The text label can be hidden. Icon only buttons should only be used for functions where text labels are not needed to define the function e.g. modal close or paginations buttons.

![Icon](button/icon-1881-8732.png)

_Figure: Three buttons, all of the filled variant, enabled state, and medium size. The first button has the text "Download" with an icon on the left, the second button has the text "See all products" with an icon on the right, and the third button is an icon-only button without a visible text label. The buttons demonstrate how icons can be placed to the left or right of the text label, or used alone for specific functions like closing a modal._

### Icon Placement

Icons can freely be placed in front of or after the label .

1. In most cases **a left position** is preferred, due to reading direction.
1. Exceptions can be made if a specific use case needs a **right position** (e.g ghost buttons in teasers often have a right icon).

![Icon Placement](button/icon-placement-1881-6421.png)

_Figure: Three ghost buttons of medium size, each with different icon placements. Callout 1 points to a button labeled "Anchor Link" with an icon on the left, and callout 2 points to a button labeled "Teaser Button" with an icon on the right. The text mentions that icons are typically placed to the left due to reading direction, but exceptions like the "Teaser Button" can have the icon on the right for specific use cases._

## Pairings and alignment

### Pairings

#### Hierarchies

**Always follow hierarchy semantics** when pairing buttons:

1. Highlight + Filled / Outline / Ghost
1. Filled + Outline / Ghost
1. Outline + Ghost

In case a hierarchy is not relevant, use a Outline oder Ghost button.

![Hierarchies](button/hierarchies-1908-6502.png)

_Figure: The hierarchies of button components in a UI design system, specifying how different button variants should be paired. It displays three numbered callouts: the first callout points to combinations of Highlight with Filled, Outline, or Ghost buttons; the second callout points to combinations of Filled with Outline or Ghost buttons; the third callout points to a combination of Outline with Ghost button. Each button is shown in an enabled state and medium size, with the Ghost variant including a right-aligned icon. The layout demonstrates correct pairing semantics to indicate hierarchy, ensuring that in cases where hierarchy is not relevant, an Outline or Ghost button should be used._

#### Horizontal pairing

When pairing buttons horizontally keep the following in mind:

1. All buttons should have the same height.
1. The buttons widths should grow with its content. Different rules can apply for mobile.
1. In case 3 actions occur, limit them to two button types or use a segmented button.
1. Make sure all icons are either left or right, not a combination of both.

![Horizontal pairing](button/horizontal-pairing-1883-9804.png)

_Figure: Guidelines for horizontally pairing buttons in a UI design system. Each numbered callout demonstrates different scenarios: 1 shows two buttons, "Filled" and "Outline," with the same height of 48px, 2 shows buttons with varying widths based on content length labeled "y" and "x," 3 displays three buttons where two are "Outline" and one is "Filled," and 4 shows buttons with icons positioned consistently to the right. The measurements indicate that all buttons should have the same height, and their widths should adjust according to the content._

#### Vertical pairing

When pairing buttons **vertically** keep the following in mind:

1. A mix of small and default size buttons is allowed.
1. Buttons should generally have the same widths. They adapt to the button with the longest content. Different rules can apply for mobile. An exception applies to Ghost buttons with **flush alignment** - they don’t adapt (see more information below).
1. In case 3 actions occur, limit them to two button types or use a segmented button.
1. Make sure all icons are either left or right, not a combination of both.

![Vertical pairing](button/vertical-pairing-1912-6921.png)

_Figure: Vertical pairing of buttons in a UI design system, showing different button variants and sizes. The measurements 48px and 32px refer to the heights of the medium and small buttons, respectively. Callout 1 points to a pair of buttons with different heights but equal widths, callout 2 shows buttons adapting to the longest content width, callout 3 demonstrates three vertically aligned buttons with equal widths, and callout 4 illustrates buttons with icons aligned to the right. The examples show correct button pairing by maintaining consistent widths and icon positions._

#### Spacing

**Spacing:** between or to the next element should be minimal 16px, in order to optimize for mobile usability.

![Spacing](button/spacing-1883-9823.png)

_Figure: Two buttons with different variants: a filled button and an outline button. The spacing between these buttons is labeled as 16px, indicating the minimum spacing required between or to the next element to optimize for mobile usability. The buttons are arranged horizontally and vertically, each maintaining a 16px gap from the adjacent button._

### Alignment

#### Flush alignment for ghost buttons

When aligning ghost buttons with other elements to the left or right, it’s advised to apply the **flush alignment (1).** That way the elements are visually aligned. The flush functionality doesn’t exist for the other buttons, it’s exclusive for the ghost button.

For center alignment the default ghost button setting can be used **(2)**.

![Flush alignment for ghost buttons](button/flush-alignment-for-ghost-buttons-1923-7483.png)

_Figure: Two layouts of buttons, including a filled button and ghost buttons. Callout 1 points to a layout where a ghost button labeled "Ghost flush" is aligned flush with a filled button labeled "Filled: Long content" to the left, demonstrating flush alignment for ghost buttons. Callout 2 points to a layout where a ghost button labeled "Ghost default" is centered below a filled button labeled "Filled: Long content," showing the default alignment for ghost buttons. The flush alignment is exclusive to ghost buttons and is used for visual alignment with other elements._

#### Align buttons with the content

As a general rule make sure that the buttons are aligned with the content within a layout: left, center or right.

![Align buttons with the content](button/align-buttons-with-the-content-1912-7076.png)

_Figure: Four examples of button alignment within a layout. Each example shows a button aligned differently: left, center, and right. The buttons are aligned with the content within a card-like layout, demonstrating proper alignment practices for UI design._

#### Dialog or forms: align the primary button on the left

In case the button is located in a dialog or underneath a form, place the primary button on the left, aligned with the input fields.

A secondary buttons would appear on the right or, if there is not enough space, underneath.

[Text Input Guidelines→](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=1591-2)

![Dialog or forms: align the primary button on the left](button/dialog-or-forms-align-the-primary-button-on-the-left-1883-9885.png)

_Figure: A dialog or form layout with a primary button aligned to the left. The primary button is positioned next to a secondary button, which is on the right. The primary button is aligned with the input fields within the form._

#### Flow or process: align the primary button on the right

For flows of multiple screens, place the primary button on the right, to imply the user about the next step.

A secondary buttons appears on the left.

**Sidenote:** for mobile purposes this guideline might not apply. Make sure to test the usability for your product.

![Flow or process: align the primary button on the right](button/flow-or-process-align-the-primary-button-on-the-right-1883-9903.png)

_Figure: Two screens illustrating the layout of buttons in a UI design system. Each screen shows a primary button aligned to the right and a secondary button aligned to the left. The text explains that for multi-screen flows, the primary button should be on the right to indicate the next step, with a secondary button on the left. It also notes that this guideline may not apply to mobile and suggests usability testing for mobile products._

**In case an iFrame is build into the webpage:** the buttons are aligned to the content elements and their grid. A good example therefore are the digital advisors.

[Grid Styles→](https://www.figma.com/design/JyyYtoCYbtJrzqHs38OXSQ/Grid-%26-Spacing-%F0%9F%A7%AE?node-id=1-132)

![Flow or process: align the primary button on the right](button/flow-or-process-align-the-primary-button-on-the-right-1883-9956.png)

_Figure: The layout of buttons within an iFrame on a webpage, focusing on the alignment of the primary button to the right. The buttons are aligned according to the content elements and their grid, as exemplified by digital advisors. The callouts indicate different button states and their positions relative to the grid._

#### Mobile: primary action at the top

It is recommended to lead with the primary button first on mobile devices, even if the semantic order in the code is different on desktop.

![Mobile: primary action at the top](button/mobile-primary-action-at-the-top-1883-9997.png)

_Figure: A mobile layout with two buttons: a primary action button labeled "Continue" and a secondary button labeled "Back". The "Continue" button is of the highlight variant, enabled state, medium size, and has no icon. The "Back" button is of the ghost variant, enabled state, medium size, with an icon positioned to the left. The primary action button is positioned at the top, followed by the secondary button below it._

## Foreground and background combinations

### Plain colours

Buttons should only be used on plain backgrounds as following:

#### Light mode

![Light mode](button/light-mode-1883-10642.png)

_Figure: Various button variants in light mode against different background colors: white background, grey background, and orange background. The button variants shown are Highlight, Filled, Outline, Ghost, and Utility, all in an enabled state and medium size. Each button is labeled with its respective variant name, and the layout demonstrates how these buttons appear against contrasting backgrounds._

#### Dark mode

![Dark mode](button/dark-mode-12704-2147.png)

_Figure: Buttons in dark mode against three different backgrounds: grey deep background, grey dark background, and orange background. It includes five button variants: Highlight, Filled, Outline, Ghost, and Utility, all shown in the enabled state and medium size. Each button variant is labeled with its respective text: Highlight, Filled, Outline, Ghost, and Utility._

### Images and other backgrounds

Button placement on images and not plain coloured backgrounds should be avoided. In exception, use buttons as following:

#### Light mode

![Light mode](button/light-mode-12704-2122.png)

_Figure: Two buttons in light mode with an image background. The first button has the text "Highlight", is of the highlight variant, is enabled, is of medium size, has no icon, does not hide the label, and is not flush aligned. The second button has the text "Filled", is of the filled variant, is enabled, is of medium size, has no icon, does not hide the label, and is not flush aligned._

#### Dark mode

![Dark mode](button/dark-mode-1883-10667.png)

_Figure: Two buttons in dark mode with an image background. One button is labeled "Highlight" with the variant highlight, and the other is labeled "Filled" with the variant filled. Both buttons are enabled, medium in size, have no icons, do not hide their labels, and do not have flush alignment._

## Usage

### Ghost vs. Utility Button

Both variants are low-emphasis button styles. The difference is the surrounding context and the amount of visual emphasis needed.

#### Ghost

Use the **Ghost Button** for standalone elements or spacious layouts where the button has enough visual breathing room to be noticed. It is often used together with other button variants to create hierarchy without adding too much visual weight.

**Common use cases:**

- Banners
- Teasers
- Popovers
- Cards

![Ghost](button/ghost-55888-36280.png)

_Figure: A Ghost Button variant within a UI design system, specifically in a popover layout. The Ghost Button labeled "Create Account" is shown alongside a filled button labeled "Log in." The layout includes various action items such as "Contact," "Dealer," "Wishlist," and "Cart," each with an icon and in an enabled state. A vertical divider separates these items from a utility menu aligned to the right, which includes an active anchor element labeled "Login" with a chevron icon. The Ghost Button is used to create visual hierarchy without adding too much weight, suitable for spacious layouts like banners, teasers, popovers, and cards._

![Ghost](button/ghost-55977-33497.png)

_Figure: A ghost button component with the text "Button" and an icon positioned to the right, in an enabled state and medium size. The layout includes vertical spacers with measurements of 40px and 24px, and a 16px measurement likely indicating the button's padding or margin. The text "Insights mollit esse" and "Efficiency excepteur quis" are headers and body text accompanying the button, illustrating its use within a content block._

#### Utility Button

Use the **Utility Button** inside dense or information-heavy UI layouts, where supporting actions need more visual emphasis than a Ghost Button, but should remain less prominent than a Highlight Button.

The accent color improves visibility and discoverability without turning the action into the main call to action.

**Common use cases:**

- Forms
- Checkout flows
- Data tables
- Inline editing

![Utility Button](button/utility-button-56400-3759.png)

_Figure: Two Utility Buttons in a small size, both in an enabled state, with text labels "Change online seller" and "Change adress," respectively. Each button has an icon positioned to the right, the label is visible, and the buttons are aligned flush. The Utility Button is designed for dense or information-heavy UI layouts to provide more visual emphasis than a Ghost Button but less than a Highlight Button._

## Content

### Labels

**Do:**

- Clear and concise: use labels like "Save Changes" or "Discard Changes".
- Action-Oriented: Use verbs to describe the action, making it clear what will happen when the button is clicked.

![Labels](button/labels-16187-3974.png)

_Figure: A dialog component with a header and a footer, shown in a desktop viewport. The header contains the text "Are you sure you want to discard your changes?" and a close button. The footer includes two horizontally aligned buttons: "Discard changes" and "Return to editing," with "Discard changes" in the primary position on the left. The example is marked as a "Do" because it uses clear, concise, and action-oriented labels such as "Discard changes" and "Return to editing._

**Don’t**

Avoid generic terms like "Yes" or "No".

![Labels](button/labels-16187-3987.png)

_Figure: A dialog component with a header-dialog containing the text "Are you sure you want to discard your changes?" and a close button, and a footer-dialog with two buttons labeled "Yes" and "No" arranged horizontally. The example is marked as a "Don't" because it uses generic terms like "Yes" or "No", which should be avoided. The primary button position is on the left._

#### Sentence case

In some cases the label is a sentence - capitalize the first letter and use lower case for the rest.

**Exception**: words that have to be written with a capitalized letter, like names **(1)** or nouns in German **(2)**.

![Sentence case](button/sentence-case-1883-9719.png)

_Figure: Two buttons, both of the filled variant, enabled state, medium size, and without icons. The first button has the text "Go to Timbersports page" and is labeled with callout 1, demonstrating sentence case with a proper noun. The second button has the text "Jetzt Dokument herunterladen" and is labeled with callout 2, showing sentence case in German where nouns are capitalized._

#### Maximum character

The button should not break into two lines. To achieve this the we recommend:

1. A maximum of **18 characters** for button without icon
1. A maximum of **16 characters** for button with icon

For longer application the use of Ghost Buttons is recommended.

![Maximum character](button/maximum-character-1881-6403.png)

_Figure: Two buttons of the filled variant in the enabled state and medium size. Callout 1 points to a button with 18 characters of text and no icon, while callout 2 points to a button with 16 characters of text and an icon positioned to the right. The measurements refer to the maximum number of characters recommended for buttons to prevent them from breaking into two lines._

#### Overflow

Although its not recommended, overflow can occur. [In this case use ghost buttons if possible.](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=168-3943) The icon is aligned centered to the text. The text should not overflow in more than two lines.

![Overflow](button/overflow-1881-6413.png)

_Figure: Two ghost buttons with the text "Example of a button with two lines." Both buttons are in the enabled state and medium size. One button has the icon positioned to the right of the text, while the other has the icon to the left. The text is aligned centered to the icon and does not exceed two lines. The buttons demonstrate how to handle text overflow in a UI design system, emphasizing the use of ghost buttons when overflow occurs._

## Behavior

### System feedback

After interacting with a button: offer system feedback close to the button.

![System feedback](button/system-feedback-1881-6372.png)

_Figure: A "button" labeled "Continue" with the variant "filled," state "enabled," size "medium," and no icon. Near the button, there is feedback text stating "Some required fields are left empty." The example is marked as a "Do" example, indicating that providing system feedback close to the button is the correct approach._

### Toast notification

After interacting with a button: in some cases, consider system feedback to the user through a toast notification.

[Toast notification →](https://www.figma.com/design/qXldpLO6gxHJNLdcXIPxYt?node-id=8844-4923)

![Toast notification](button/toast-notification-1881-6387.png)

_Figure: A toast notification component with the text "All files lorem ipsum" and a success icon, indicating a successful action. This toast notification is marked as a "Do" example, suggesting it is a correct implementation. The layout includes a green checkmark icon on the left, the text in the center, and a close button on the right._

## Button Round

![Button Round](button/button-round-168-4061.png)

_Figure: The Button Round component in both light and dark variants, displaying different states: enabled, hover / pressed, focus, disabled, disabled focus, and loading. Each variant shows two styles, highlight and filled, across these states. The layout is organized in a grid format, with rows representing the styles and columns representing the states._

## Overview

A round button is a clickable element to initialize an action or to highlight the user journey.

### When to use

Round buttons should be used sparingly.

The **Highlight** **Round Button** is currently only used for the Product Card in the STIHL web shop.

The **Filled Round Button** is currently only used for the for the refresh action in the iMOW support portal and the old version of the load more button in on STIHL.de.

**If possible don’t use the buttons in any other cases.**

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-button-round--documentation)

## Formatting

### Anatomy

1. **Container**
1. **Icon**

![Anatomy](button/anatomy-1932-8054.png)

_Figure: The anatomy of a round button component in the STIHL Design System. Callout 1 points to the Container, and callout 2 points to the Icon. The button is in the highlight variant, enabled state, and small size._

### Variants

Use different variants for different emphasis on the buttons.

1. **Highlight**
1. **Filled**

![Variants](button/variants-1932-8064.png)

_Figure: Two small round button variants from the STIHL Design System: a highlight variant and a filled variant, both in the enabled state. Callout 1 points to the highlight variant, and callout 2 points to the filled variant. These variants are used to convey different levels of emphasis on buttons._

### Size

Two sizes have been defined for round buttons:

1. **Medium:** That’s the size that should be used by default.
1. **Small:** This size can be used when
   - there is not enough vertical space to use the default button
   - there are too many small elementes and the default button would feel too massive

![Size](button/size-50728-9838.png)

_Figure: Two sizes of round buttons in the highlight variant and enabled state: a medium size button and a small size button. The measurement of 12px and 40px refers to the height and width of the medium size button, respectively, while 8px and 32px refer to the height and width of the small size button, respectively. Callout 1 points to the medium size button, and callout 2 points to the small size button._

## Foreground and background combinations

### Plain colours

Round buttons should only be used on plain backgrounds as following:

#### Light mode

![Light mode](button/light-mode-1943-11505.png)

_Figure: Two round buttons in light mode, each in a different variant and state, against white and grey backgrounds. The first button is of variant highlight, state enabled, and size small, while the second button is of variant filled, state enabled, and size small. The text labels "white background" and "grey background" indicate the different background colors used in the layout._

#### Dark mode

![Dark mode](button/dark-mode-1943-11545.png)

_Figure: Two round button variants, one highlighted and one filled, both in the enabled state and small size, against three different backgrounds: grey deep background, grey dark background, and orange background. Each background showcases the buttons' visibility and contrast. The text labels identify the background colors used in the dark mode examples._

### Images and other backgrounds

Round button placement on images and not plain coloured backgrounds should be avoided. In exception, use buttons as following:

#### Light mode

![Light mode](button/light-mode-12983-4279.png)

_Figure: Two round buttons in light mode with an image background. The first button is of variant highlight, state enabled, and size small, and the second button is of variant filled, state enabled, and size small. The text "image background" indicates that the buttons are placed over a background image._

#### Dark mode

![Dark mode](button/dark-mode-12983-4300.png)

_Figure: Two round buttons in dark mode with an image background. One button is of variant highlight, state enabled, and size small, and the other is of variant filled, state enabled, and size small. The buttons are placed over a blurred image background labeled "image background"._

## Floating Action Button

![Floating Action Button](button/floating-action-button-168-5140.png)

_Figure: The Floating Action Button component in both light and dark variants, showing different states: enabled, hover/pressed, focus, disabled, disabled focus, and loading. It includes two sizes: default and small. Each state is visually represented for both light and dark themes, illustrating how the button appears under various conditions._

## Overview

An FAB (Floating Action Buttons) is a clickable element to initialize an action, which is laying over other content.

### When to use

A FAB is used when a certain action needs to be available at all time. It sticks to the screen and is placed on top of other content and therefore always accessible.

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-floating-action-button--documentation)

## Formatting

### Anatomy

1. **Container**
1. **Icon**

![Anatomy](button/anatomy-1943-11787.png)

_Figure: The anatomy of a fab-light button component in the enabled state and medium size. Callout 1 points to the Container, and callout 2 points to the Icon. The layout shows the Icon positioned within the Container._

### Size

Two sizes have been defined for FABs:

1. **Medium:** That size is the default option and mainly used when the FAB is hovering all content.
1. **Small:** This size is mainly used when the FAB belongs to a certain module (i.e. the menu drawer of the sidebar navigation).

![Size](button/size-1943-12094.png)

_Figure: Two sizes of a Floating Action Button (FAB) component labeled as fab-light in the enabled state. Callout 1 points to the medium size FAB with a measurement of 56px, which is the default size used when the FAB hovers over all content. Callout 2 points to the small size FAB with a measurement of 32px, used when the FAB belongs to a specific module, such as a menu drawer in the sidebar navigation._

## Colour combinations

### Background colours

FABs can be on **all** **backgrounds** as shown below:

#### Light mode

![Light mode](button/light-mode-1943-11932.png)

_Figure: The fab-light component in the light mode with two states: enabled and two sizes: medium and small. The components are shown against four different backgrounds: white background, grey ultra-light background, image background, and orange background. Each background features both the medium and small fab-light components._

#### Dark mode

![Dark mode](button/dark-mode-1943-12013.png)

_Figure: The fab-dark component in enabled states and two sizes, medium and small, against four different backgrounds: grey deep background, grey dark background, image background, and orange background. The layout shows two buttons in each background scenario, with the medium-sized button positioned above the small-sized button. The figure illustrates how the fab-dark component appears in various dark mode environments._

## Button Nav

Overview:

- ButtonNav is a navigation-specific variant of the standard Button component. It is designed to deliver a consistent and adaptive user experience within primary navigation areas.
- Common use cases:
   - Nav Bar
   - Mobile Menu
- Key Features:
   - Inherits core behavior and styling from the base Button component
   - Intended exclusively for use in navigation layouts
   - Responsive typography: Font size automatically adjusts based on viewport size
   - Can function as either a link or a button
      - When used as a button, it displays a chevron icon to indicate that it triggers a Dropdown Menu or Mega Menu

![Button Nav](button/button-nav-34553-28439.png)

_Figure: The Button Nav component, a navigation-specific variant of the standard Button component, in various states: enabled, hover/pressed, focus, and disabled. It illustrates the component's appearance across two viewport sizes: XL/L and M/S, with icon positions labeled as none, left, and right. Each cell in the grid shows how the Button Nav looks in different states and configurations, demonstrating responsive typography and icon placement._

### Further guidelines

[Storybook documentation](https://main--63440bbb95889041542a5ba3.chromatic.com/?path=/docs/components-buttons-button--documentation#navigation)

### Related elements

[Header](https://www.figma.com/design/DNB69TwlN0FaaVg7yVsYu4?node-id=6338-35399)

[Nav Bar](https://www.figma.com/design/DNB69TwlN0FaaVg7yVsYu4?node-id=6338-35848)

[Mobile Menu](https://www.figma.com/design/DNB69TwlN0FaaVg7yVsYu4?node-id=6338-36288)

### Contribute

Contribute to improving this component by sharing your feedback, asking questions, or suggesting features [here](https://www.figma.com/design/lLmw7PfIdKjFG4uT3B2Hyj/Onboarding-%F0%9F%93%96?node-id=446-868&t=zKmRu4kAkxMeRDmK-4).

## Formatting and Construction

### Anatomy

#### Elements

1. **Button Label**
1. **Icon Right** (Conditional) An icon may be placed on the right side of the label, depending on the navigation action. For example, a chevron icon may indicate a dropdown. See the Icon Usage section for more details.
1. **Icon Left** (Optional) A left-aligned icon can be used to visually support the label, depending on the context and use case.

![Elements](button/elements-35507-13816.png)

_Figure: A Button component with two variants, each labeled "Button nav". Both buttons are in an enabled state and are designed for large (l) and extra-large (xl) breakpoints. Callout 1 points to the Button Label in both variants. Callout 2 indicates the Icon Right, which is conditional and shown as a chevron icon, suggesting a navigation action like a dropdown. Callout 3 points to the Icon Left, which is optional and positioned to visually support the label depending on the context._

#### Viewport Varaiant

Two sizes are defined for the navigation variant of the Button, based on breakpoints:

1. **Breakpoints l & xl:** Size is optimized to create visual hierarchy in relation to other navigation elements.
1. **Breakpoints s & m:** Used when navigation items move into the Mobile Menu. Size is adjusted to maintain hierarchy and improve tap targets for touch interaction.

![Viewport Varaiant](button/viewport-varaiant-35507-13827.png)

_Figure: The Viewport Variant of the Button component in the navigation style, showing two different sizes based on breakpoints. Callout number 1 points at the Button nav in the enabled state for breakpoints l & xl, optimized for visual hierarchy. Callout number 2 points at the Button nav in the enabled state for breakpoints s & m, adjusted for touch interaction and maintaining hierarchy within the Mobile Menu._

### States

Since this button is intended exclusively for navigation elements, it does not include all the states of the default button component. Supported states include:

1. **Enabled**
1. **Hover/Pressed**
1. **Focus**
1. **Disabled**

Navigation items should never be shown in a **disabled state**. If loading is required (e.g. for page transitions), use a **loading indicator on the page**, not within the button itself.

![States](button/states-35507-13837.png)

_Figure: A button-nav component in three different states: enabled, hover/pressed, and focus. Each numbered callout points to a specific state of the button-nav: callout 1 indicates the enabled state, callout 2 indicates the hover/pressed state, and callout 3 indicates the focus state. The buttons are shown for the l + xl breakpoints and do not include an icon._

## Content and Assets

### Icon Usage

#### Icon Right

Right-aligned icons are used to clarify the action triggered by the nav item. The following icons may be applied:

1. **Chevron Up / Down** Used when the button triggers a Dropdown Menu:
   - Default state: Chevron Down
   - When expanded: switches to Chevron Up
1. **Chevron Right** Used when the button is displayed inside a Mobile Menu to indicate a drilldown navigation.
1. **External Link Icon** Used when the Button Nav functions as a link and links to an external page.

![Icon Right](button/icon-right-35507-13854.png)

_Figure: Three variants of the Button Nav component with right-aligned icons. Callout 1 points to a Button Nav with a Chevron Down icon, indicating the default state for a Dropdown Menu. Callout 2 points to a Button Nav with a Chevron Right icon, used for drilldown navigation in a Mobile Menu. Callout 3 points to a Button Nav with an External Link icon, signifying a link to an external page. The Button Nav in callout 1 is shown for larger breakpoints labeled l + xl, while the Button Nav in callout 2 is shown for smaller breakpoints labeled s + m._

#### Icon Left

A left-aligned icon can be added before the label to support visual scanning and clarify the item's purpose.

- Use only when it adds meaningful context.
- Use sparingly, and don’t combining it with a right icon to reduce visual clutter.

![Icon Left](button/icon-left-35507-13865.png)

_Figure: A button-nav component in the enabled state and for the l + xl breakpoints, featuring an icon aligned to the left of the label "Settings". The icon is used to support visual scanning and clarify the button's purpose. The text advises using the left-aligned icon sparingly and only when it provides meaningful context, and not to combine it with a right icon to avoid visual clutter._

## Usage

### Nav Bar

The primary use of the Button Nav variant is within the Nav Bar, as part of the overall navigation pattern.

[Go to Nav Bar →](https://www.figma.com/design/dDZiDou9UpPtHIF2bXkLKL?node-id=6583-59828)

![Nav Bar](button/nav-bar-35507-13876.png)

_Figure: A Nav Bar component with a main variant for a large viewport. It includes a top-bar with two areas: one for the STIHL logo and another for a search bar labeled "Search Site." Below the top-bar, there are eight "Button nav" components arranged horizontally for navigation. Additionally, there are five icons labeled "Label" placed to the right of the search bar._
