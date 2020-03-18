project(
    'io.elementary.stylesheet',
    version: '6.0.0'
)

i18n = import('i18n')
sass = find_program('sass')

infiles = files(
    'src/gtk.scss'
)

outfile = 'gtk.css'

custom_target(
    meson.project_name() + '.blueberry',
    input : infiles,
    output : outfile,
    command : [sass, '@INPUT@', '@OUTPUT@'],
    install : true,
    install_dir : join_paths(get_option('datadir'), 'themes', 'io.elementary.blueberry', 'gtk-3.0')
)

subdir('data')
subdir('po')
