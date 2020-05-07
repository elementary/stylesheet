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

foreach variant : variants
    variant_input = files(
        join_paths('variants', variant + '.scss'),
        join_paths('variants', variant + '-dark.scss'),
    )

    # variant_output = [
    #     variant + '/gtk.css',
    #     variant + '/gtk-dark.css',
    # ]

    # custom_target(
    #     meson.project_name() + '.' + variant,
    #     input : variant_input,
    #     # output : variant_output,
    #     output : outfiles,
    #     command : [sass,
    #         join_paths(
    #             meson.current_source_dir(),
    #             '@INPUT0@:src/variants/' +  variant + '/gtk.css'
    #         ),
    #         join_paths(
    #             meson.current_source_dir(),
    #             '@INPUT1@:src/variants/' +  variant + '/gtk-dark.css'
    #         )
    #     ],
    #     install : true,
    #     install_dir : join_paths(
    #         get_option('datadir'),
    #         'themes',
    #         meson.project_name() + '.' + variant, 'gtk-3.0'
    #     )
    # )

    compile = generator(
        sass,
        output: ['variants/@BASENAME@/gtk.css', 'variants/@BASENAME@/gtk-dark.css'],
        arguments: ['@INPUT@:@OUTPUT@'],
    )
endforeach
