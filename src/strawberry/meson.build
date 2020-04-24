strawberry_files = files(
    'strawberry.scss',
    'strawberry-dark.scss'
)

custom_target(
    meson.project_name() + '.strawberry',
    input : strawberry_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'strawberry.scss:src/strawberry/gtk.css'),
        join_paths(meson.current_source_dir(), 'strawberry-dark.scss:src/strawberry/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.strawberry', 'gtk-3.0')
)
