variants = [
    'banana',
    'blueberry',
    'bubblegum',
    'cocoa',
    'grape',
    'latte',
    'lime',
    'mint',
    'orange',
    'slate',
    'strawberry',
]

sass_command = [
    sass,
    '@INPUT@',
    '@OUTPUT@'
]

foreach variant : variants
    variant_project_name = meson.project_name() + '.' + variant

    variant_target = custom_target(
        variant_project_name,
        input : 'variants' / variant + '.scss',
        output : variant + '.css',
        command : sass_command,
        build_by_default: true
    )

    variant_dark_target = custom_target(
        variant_project_name + '-dark',
        input : 'variants' / variant + '-dark.scss',
        output : variant + '-dark.css',
        command : sass_command,
        build_by_default: true
    )

    dest_theme_dir = get_option('datadir') / 'themes' / variant_project_name

    meson.add_install_script (install_exec,
        variant_target.full_path(),
        dest_theme_dir / 'gtk-4.0' / 'gtk.css'
    )

    meson.add_install_script (install_exec,
        variant_dark_target.full_path(),
        dest_theme_dir / 'gtk-4.0' / 'gtk-dark.css'
    )

    install_subdir([
        'assets',
    ], install_dir: dest_theme_dir / 'gtk-4.0' )
endforeach
