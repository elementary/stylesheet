grape_files = files(
    'grape.scss',
    'grape-dark.scss'
)

custom_target(
    meson.project_name() + '.grape',
    input : grape_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'grape.scss:src/grape/gtk.css'),
        join_paths(meson.current_source_dir(), 'grape-dark.scss:src/grape/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.grape', 'gtk-3.0')
)
