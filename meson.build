project(
    'io.elementary.stylesheet',
    version: '5.4.2'
)

i18n = import('i18n')

install_subdir(
    'elementary',
    install_dir: join_paths(get_option('datadir'), 'themes')
)

# NOTE: This is needed unless/until Plank natively supports a -dark variant
# and switching to it based on a system-wide dark style preference
install_data(
    join_paths ('elementary', 'plank', 'dock-dark.theme'),
    install_dir: join_paths(
        get_option('datadir'),
        'plank',
        'themes',
        'elementary-dark',
    ),
    rename: 'dock.theme',
)

subdir('data')
