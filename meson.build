project(
    'io.elementary.stylesheet',
    version: '8.2.0'
)

i18n = import('i18n')
sass = find_program('sassc')

install_exec = meson.current_source_dir() / 'meson' / 'install-to-dir.py'

outfiles = [
    'gtk.css',
    'gtk-dark.css',
]

subdir('data')
subdir('po')
subdir('src')
