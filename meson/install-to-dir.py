#!/usr/bin/env python3

import os
import shutil
import sys
from pathlib import Path

source_file = sys.argv[1]
dest_file = sys.argv[2]
destdir = os.environ.get('DESTDIR', '/')
prefix = os.environ.get('MESON_INSTALL_PREFIX', '/usr/local')

dest_prefixed_file = Path(os.path.join(destdir, prefix, dest_file))
dest_prefixed_file.parent.mkdir(parents=True, exist_ok=True)
print ('Installing ' + source_file + ' to ' + dest_file)
shutil.copy2(source_file, dest_prefixed_file)
