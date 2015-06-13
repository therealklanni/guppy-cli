# guppy-cli

> Install git-hooks for use with [git-guppy](https://github.com/therealklanni/git-guppy).

Special git-hooks that invoke git-guppy can be installed using the commandline utility or by requiring guppy-cli as a dependency and calling the provided methods.

## Commandline Usage

Install with `npm install -g guppy-cli`

```
Usage: guppy <hookname>|all [-d <path>]

Commands:
  hookname  Install a git-hook by name, for a list, see --hooks
  all       Install all available git-hooks (use caution)

Options:
  -d, --dest  Destination path for git-hook (default: ./.git/hooks/)
  --hooks     Print a complete list of git-hooks
  -h, --help  Show help
  --version   Show version number

Examples:
  guppy pre-commit
  guppy pre-commit -d some/where
  guppy all
```

Existing git-hooks will be backed up the first time. If a backup already exists, it will not be overwritten. The extension `.guppy` will be appended to the filename of existing git-hooks when backing up.

## Pre-packaged installers

For convenience, each type of git-hook has an installer package.

Install any package as a dev-dependency to install the associated git-hook automatically.

```
npm install --save-dev <package>
```

- [guppy-applypatch-msg](https://github.com/therealklanni/guppy-applypatch-msg)
- [guppy-commit-msg](https://github.com/therealklanni/guppy-commit-msg)
- [guppy-post-applypatch](https://github.com/therealklanni/guppy-post-applypatch)
- [guppy-post-checkout](https://github.com/therealklanni/guppy-post-checkout)
- [guppy-post-commit](https://github.com/therealklanni/guppy-post-commit)
- [guppy-post-merge](https://github.com/therealklanni/guppy-post-merge)
- [guppy-post-receive](https://github.com/therealklanni/guppy-post-receive)
- [guppy-post-rewrite](https://github.com/therealklanni/guppy-post-rewrite)
- [guppy-post-update](https://github.com/therealklanni/guppy-post-update)
- [guppy-pre-applypatch](https://github.com/therealklanni/guppy-pre-applypatch)
- [guppy-pre-auto-gc](https://github.com/therealklanni/guppy-pre-auto-gc)
- [guppy-pre-commit](https://github.com/therealklanni/guppy-pre-commit)
- [guppy-pre-push](https://github.com/therealklanni/guppy-pre-push)
- [guppy-pre-rebase](https://github.com/therealklanni/guppy-pre-rebase)
- [guppy-pre-receive](https://github.com/therealklanni/guppy-pre-receive)
- [guppy-prepare-commit-msg](https://github.com/therealklanni/guppy-prepare-commit-msg)
- [guppy-update](https://github.com/therealklanni/guppy-update)

## Dependency Usage

To use guppy-cli as a dependency, install with:

```
npm install --save guppy-cli
```

Available methods:

- gup.install(*hookname*, *destination*, *callback(err, result)*) - Install the named hook to *destination*.
- gup.installAll(*destination*, *callback(err)*) - Install all hooks to *destination*.
