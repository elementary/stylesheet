blueberry_files = files(
    'blueberry.scss',
    'blueberry-dark.scss'
)

custom_target(
    meson.project_name() + '.blueberry',
    input : blueberry_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'blueberry.scss:src/blueberry/gtk.css'),
        join_paths(meson.current_source_dir(), 'blueberry-dark.scss:src/blueberry/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.blueberry', 'gtk-3.0')
)
