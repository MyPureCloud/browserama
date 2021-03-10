const { execSync } = require('child_process');

/* copy template to build */
execSync('cp template/index.html out/');

/* copy build to docs (for github) */
execSync('rm -rf docs/');
execSync('mkdir docs');
execSync('cp -r out/ docs/');
