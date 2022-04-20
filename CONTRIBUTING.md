# Contributing

## Padding, Margins, and Border Radii

The base grid unit should be 3px. Sometimes widgets with borders will be "off by one" to align visually.

Border radii should increase as they nest where reasonable. For example button radii is 3px to nest neatly into 6px radii windows, popovers, and OSDs.

## Levels and Dark Style Theory

Widget backgrounds are styled according to "level" or "elevation". Elements gets darker the further away they are in interaction hierarchy. For example, buttons are lightest and containers like sidebars are darkest. Widgets in dark style should follow this same progression from lightest in front to darkest in back, and not simply be inverted.

## A11y

* Colors should pass WCAG AA contrast requirements
* Where possible, use the `rem()` function so that padding, margins, etc scale when users' adjust text size in system settings

## Focus, Hover, Backdrop, etc

Accent should be used to indicate the current area of focus. When selected, but not focused, use nuetral highlights.

Focused widgets should be highlighted with a ring where possible.

Backdrop states should use nuetral color and reduced depth. Contrast can be reduced in some cases, but be mindful of WCAG requirements even for backdrop elements.

## Testing Changes

Apps may need to be restarted or the system stylesheet may need to be changed before installed changes take effect.

You can also test changes live with Gtk Inspector. Make sure you have Gtk development libraries installed, then enable the inspector shortcut:

```bash
    apt install libgtk-3-dev libgtk-4-dev
    gsettings set org.gtk.Settings.Debug enable-inspector-keybinding true
    gsettings set org.gtk.gtk4.Settings.Debug enable-inspector-keybinding true
```

Open an app you wish to test your changes on. Open Gtk Inspector with the keyboard shortcut Shift + Ctrl + D, then navigate to the tab "Custom CSS" in Gtk3 or "CSS in Gtk4. Your changes here will take immediate effect on the focused app. In Gtk4 you may have to toggle the "pause" button in the top left before changes take effect.

## Proposing Changes

Changes should be tested against the following apps to avoid breakage:
* Gtk Demo
* Gtk Widget Factory
* Granite Demo

Avoid hardcoding palette colors where possible. `accent_color` should be used for any hightlights or selection states that should adapt to users' color preferences. Use semantic variables like `warning_color` where possible since these are contrast checked for dark and light styles.

Please provide before and after screenshots of your change where applicable
