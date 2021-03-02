# Stylesheet

The GTK Stylesheet for elementary OS

## Installation

You'll need the following dependencies:
* meson
* sassc

Run `meson` to configure the build environment. To install, use `ninja install`.

    meson build --prefix=/usr
    cd build
    ninja install

Run `ninja clean` before building the stylesheets a second time. Otherwise the already built stylesheets will not be overriden.

    ninja clean
    ninja install

## Hacking

Apps may need to be restarted or the system stylesheet will need to be changed for your changes to take effect.

You can also test changes live with Gtk Inspector. Make sure you have Gtk development libraries installed, then enable the inspector shortcut:

    apt install libgtk-3-dev
    gsettings set org.gtk.Settings.Debug enable-inspector-keybinding true

Open an app you wish to test your changes on. Open Gtk Inspector with the keyboard shortcut Shift + Ctrl + D, then navigate to the tab "Custom CSS". Your changes here will take immediate effect on the focused app.
