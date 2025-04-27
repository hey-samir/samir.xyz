run = "npm run dev"
language = "nodejs"
entrypoint = "run.sh"
onBoot = "chmod +x run.sh"
hidden = ["node_modules", ".next"]

[env]
PATH = "/home/runner/$REPL_SLUG/node_modules/.bin:/home/runner/$REPL_SLUG/.config/npm/node_global/bin"

[packager]
language = "nodejs"

[packager.features]
packageSearch = true
guessImports = true

[languages.javascript]
pattern = "**/*.{js,jsx,ts,tsx}"

[languages.javascript.languageServer]
start = [ "typescript-language-server", "--stdio" ]

[languages.html]
pattern = "**/*.html"

[languages.css]
pattern = "**/*.css"

[deployment]
build = ["npm", "run", "build"]
deploymentTarget = "cloudrun"
ignorePorts = false
run = ["node", ".next/standalone/server.js"]