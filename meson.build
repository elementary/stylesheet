project(
    'io.elementary.stylesheet',
    version: '5.2.4'
)

variants = [
    'elementary',
    'elementary-slate'
]

foreach v : variants
    install_subdir(
        v,
        install_dir: join_paths(get_option('datadir'), 'themes')
    )
endforeach

