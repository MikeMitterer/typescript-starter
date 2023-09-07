#!/usr/bin/env bash
#------------------------------------------------------------------------------
# Config for updateDevTemplates.sh
# created by updateDevTemplates.sh on Fr  1 Sep 2023 12:06:02 CEST
#------------------------------------------------------------------------------

# Folder mit den Templates
BASE_FOLDER="../.."
# BASE_FOLDER="${DEV_LOCAL}/DevTypeScript/Templates"

# Names des Template-Folders
# TEMPLATE_FOLDER=".templates"

# Der "Key" ist das Source-File und der "Value" ist das Remote-File
# FILES_TO_COPY["jest.config.js"]="jest.config.js"
# FILES_TO_COPY["jest.config.js"]=""

FILES_TO_COPY[".eslintrc.cjs"]=""
FILES_TO_COPY[".npmignore"]=""
FILES_TO_COPY[".gitignore"]=""

FILES_TO_COPY["babel.config.js"]=""
FILES_TO_COPY["postcss.config.js"]=""
FILES_TO_COPY["prettier.config.js"]=""

FILES_TO_COPY["jest.config.lib.js"]="jest.config.js"
FILES_TO_COPY["jest-puppeteer.config.js"]=""

FILES_TO_COPY["tsconfig.json"]=""
FILES_TO_COPY["tsconfig.lib.json"]=""

FILES_TO_COPY["webpack.node.js"]=""
FILES_TO_COPY["webpack.ts.js"]=""
FILES_TO_COPY["webpack.web.js"]=""

# Die Files werden nur kopiert wenn sie noch nicht existieren
# FILES_TO_UPDATE["static/config.lenovo.js"]="config.js"
FILES_TO_UPDATE["webpack.web.local.js"]=""

# Wird mit
#     echo "${GH_ORG_MM}" > .gitorg
#     echo "${GH_ORG_MOBIAD}" > .gitorg
#     echo "${GH_ORG_WZE}" > .gitorg
#     echo "${GH_ORG_MANGO_LILA}" > .gitorg
# erstellt.
# Default ist GH_ORG_MM
FILES_TO_UPDATE[".gitorg"]=""
