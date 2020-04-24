orange_files = files(
    'orange.scss',
    'orange-dark.scss'
)

custom_target(
    meson.project_name() + '.orange',
    input : orange_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'orange.scss:src/orange/gtk.css'),
        join_paths(meson.current_source_dir(), 'orange-dark.scss:src/orange/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.orange', 'gtk-3.0')
)
