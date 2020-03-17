project(
    'io.elementary.stylesheet',
    version: '6.0.0'
)

i18n = import('i18n')
sass = find_program('sass')

run_command('mkdir', join_paths (meson.build_root(), 'gtk-3.0'))

run_command(
    sass,
    'src/gtk.scss',
    join_paths (meson.build_root(), 'gtk-3.0', 'gtk.css')
)

install_subdir(
    join_paths (meson.build_root(), 'gtk-3.0'),
    install_dir: join_paths(get_option('datadir'), 'themes', 'io.elementary.blueberry')
)

subdir('data')
subdir('po')
