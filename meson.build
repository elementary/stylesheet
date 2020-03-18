project(
    'io.elementary.stylesheet',
    version: '6.0.0'
)

i18n = import('i18n')
sass = find_program('sass')

infiles = files(
    'src/gtk.scss',
    'src/gtk-dark.scss'
)

outfiles = [
    'gtk.css',
    'gtk-dark.css',
]

custom_target(
    meson.project_name() + '.blueberry',
    input : infiles,
    output : outfiles,
    command : [sass,
        join_paths(meson.source_root(), 'src', 'gtk.scss:gtk.css'),
        join_paths(meson.source_root(), 'src', 'gtk-dark.scss:gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.blueberry', 'gtk-3.0')
)

subdir('data')
subdir('po')
