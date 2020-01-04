# The GTK Stylesheet for elementary OS

[![Bountysource](https://www.bountysource.com/badge/tracker?tracker_id=45189256)](https://www.bountysource.com/trackers/45189256-elementary-stylesheet)

An original Gtk.CSS stylesheet designed specifically for [elementary OS](https://elementary.io) and its desktop environment: Pantheon. **Since Gtk.CSS has changed quite a bit, this stylesheet only supports GTK >= 3.22**

This stylesheet is licensed openly under the terms of the [GNU General Public License](https://github.com/elementary/stylesheet/blob/master/COPYING). Redistributing, forking, remixing, etc. are encouraged!

If you feel the desire to compensate the designers who maintain this stylesheet for your usage, [please see this page](https://elementary.io/get-involved#funding) and thank you!

## Application Agnostic

Special fixes for GNOME apps (Nautilus, GNOME Control Center, GNOME Shell, etc) or other desktop environments will not be implemented. The aim of style classes should be to be generic across applications. If an application needs a unique style,  it should be bundled with that application.

## Installation & Testing

Run `meson` to configure the build environment. To install, use `ninja install`.

    meson build --prefix=/usr
    cd build
    sudo ninja install
    
Apps may need to be restarted or the system stylesheet will need to be
changed for your changes to take effect.

You can also test changes live with GTK Inspector. Make sure you have GTK
development libraries installed, then enable the inspector shortcut:

    apt install libgtk-3-dev
    gsettings set org.gtk.Settings.Debug enable-inspector-keybinding true
    
Open an app you wish to test your changes on. Open GTK Inspector with the
keyboard shortcut Shift + Ctrl + D, then navigate to the tab "Custom CSS".
Your changes here will take immediate effect on the focused app.

We use [stylelint](http://stylelint.io/) for CSS linting. For testing locally:
* You will need `npm` installed.
* Run `npm install` to grab stylelint. You will only need to do this once.
* Run `npm test` and it will lint all the CSS files.
