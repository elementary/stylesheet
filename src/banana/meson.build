banana_files = files(
    'banana.scss',
    'banana-dark.scss'
)

custom_target(
    meson.project_name() + '.banana',
    input : banana_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'banana.scss:src/banana/gtk.css'),
        join_paths(meson.current_source_dir(), 'banana-dark.scss:src/banana/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.banana', 'gtk-3.0')
)
