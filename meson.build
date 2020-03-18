project(
    'io.elementary.stylesheet',
    version: '6.0.0'
)

i18n = import('i18n')
sass = find_program('sass')

blueberry_files = files(
    'src/blueberry.scss',
    'src/blueberry-dark.scss'
)

outfiles = [
    'gtk.css',
    'gtk-dark.css',
]

custom_target(
    meson.project_name() + '.blueberry',
    input : blueberry_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.source_root(), 'src', 'blueberry.scss:gtk.css'),
        join_paths(meson.source_root(), 'src', 'blueberry-dark.scss:gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.blueberry', 'gtk-3.0')
)

subdir('data')
subdir('po')
