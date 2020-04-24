lime_files = files(
    'lime.scss',
    'lime-dark.scss'
)

custom_target(
    meson.project_name() + '.lime',
    input : lime_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'lime.scss:src/lime/gtk.css'),
        join_paths(meson.current_source_dir(), 'lime-dark.scss:src/lime/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.lime', 'gtk-3.0')
)
