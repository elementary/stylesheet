project('io.elementary.stylesheet')

variants = [
    'elementary',
    'elementary-high-contrast',
    'elementary-slate'
]

foreach v : variants
    install_subdir(
        v,
        install_dir: join_paths(get_option('datadir'), 'themes')
    )
endforeach
