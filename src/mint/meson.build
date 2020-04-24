mint_files = files(
    'mint.scss',
    'mint-dark.scss'
)

custom_target(
    meson.project_name() + '.mint',
    input : mint_files,
    output : outfiles,
    command : [sass,
        join_paths(meson.current_source_dir(), 'mint.scss:src/mint/gtk.css'),
        join_paths(meson.current_source_dir(), 'mint-dark.scss:src/mint/gtk-dark.css')
    ],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', meson.project_name() + '.mint', 'gtk-3.0')
)
