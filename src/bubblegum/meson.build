bubblegum_files = files(
    'bubblegum.scss',
    'bubblegum-dark.scss'
)

custom_target(
    meson.project_name() + '.bubblegum',
    input : bubblegum_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'bubblegum.scss:src/bubblegum/gtk.css'),
        join_paths(meson.current_source_dir(), 'bubblegum-dark.scss:src/bubblegum/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.bubblegum', 'gtk-3.0')
)
