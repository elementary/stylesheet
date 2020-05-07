variants = [
    'banana',
    'blueberry',
    'bubblegum',
    'grape',
    'lime',
    'mint',
    'orange',
    'strawberry',
]

sass_command = [
    sass,
    '@INPUT@',
    '@OUTPUT@'
]

foreach variant : variants
    variant_target = custom_target(
        meson.project_name() + '.' + variant,
        input : 'variants' / variant + '.scss',
        output : variant + '.css',
        command : sass_command,
        build_by_default: true
    )
    variant_dark_target = custom_target(
        meson.project_name() + '.' + variant + '-dark',
        input : 'variants' / variant + '-dark.scss',
        output : variant + '-dark.css',
        command : sass_command,
        build_by_default: true
    )
    dest_theme_dir = get_option('datadir') / 'themes' / meson.project_name() + '.' + variant / 'gtk-3.0'
    meson.add_install_script (install_exec,
        variant_target.full_path(),
        dest_theme_dir / 'gtk.css'
    )
    meson.add_install_script (install_exec,
        variant_dark_target.full_path(),
        dest_theme_dir / 'gtk-dark.css'
    )
    install_data(
        ['plank/dock.theme', 'plank/dock-dark.theme'],
        install_dir: join_paths(
            get_option('datadir'),
            'themes',
            meson.project_name() + '.' + variant
        ),
        rename: ['plank/dock.theme', 'plank-dark/dock.theme']
    )
endforeach
