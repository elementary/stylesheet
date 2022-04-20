# Stylesheet
[![Translation status](https://l10n.elementary.io/widgets/desktop/-/stylesheet-extra/svg-badge.svg)](https://l10n.elementary.io/engage/desktop/)

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
