# sb-build(1) - Build assets for a javascipt project

## SYNOPSIS

  sb-build [-l, --log-level <level>] [-h,--help] [-q,--quiet] [-V,--version]
           [<sub-command> [<args...>]] [help <sub-command>]

## DESCRIPTION

  Potentially build all or one of the following through sub-binaries:
    * CSS - see sb-build-css(1)
    * JavaScript - see sb-build-js(1)
    * Language Files - see sb-build-lang(1)
    * Unit Tests - see sb-build-test(1)
    * Documenation - see sb-build-docs(1)
    * All - see sb-build-all(1)

  By default if no command is passed in `sb-build` will be run as if it was
  passed `all`.

## OPTIONS

  -l, --log-level <level>
    The level of log messages that you want to see. Can be fatal, error,
    warn, info, verbose, or debug. Defaults to info.

  -h, --help
    View the help information for this binary

  -V, --version
    View the version of this binary

  -q, --quiet
    Do not log any messages to stdout or stderr

  [<sub-command> [<args...>]]
    The sub-command to run or get help for. Can be css, js, lang, docs, test, or all.
    Defaults to all if nothing is passed in. [<args....>] will be passed along to sub command.

  help <sub-command>
    Get help for a sub-command, this is an alias for running `sb-build <sub-command> --help`.

## EXAMPLES

  Build js assets - see sb-build-js(1) for info on [<args...>]

    sb-build js [<args...>]

  Build css assets - see sb-build-css(1) for info on [<args...>]

    sb-build css [<args...>]

  Build language assets - see sb-build-lang(1) for info on [<args...>]

    sb-build lang [<args...>]

  Build documenation assets - see sb-build-docs(1) for info on [<args...>]

    sb-build docs [<args...>]

  Build unit test assets - see sb-build-test(1) for info on [<args...>]

    sb-build test [<args...>]

  Build all avialable assets - see sb-build-all(1) for info on [<args...>]

    sb-build all [<args...>]

  Get help for a command

    sb-build help js
    sb-build help docs
    sb-build all --help
    sb-build css --help

  Get the current version of spellbook

    sb-build -V
    sb-build --version

  Get help for this binary

    sb-build --help
    sb-build -h

  Set the log level for this binary

    sb-build -l info
    sb-build -l fatal
    sb-build --log-level debug
    sb-build --log-level error

  Dont output anything

    sb-build -q
    sb-build -quiet

## ENVIRONMENT VARIABLES

  SB_LOG_LEVEL
    The log level to use for all videojs-spellbook binaries

## SEE ALSO

  sb-build-all(1), sb-build-js(1), sb-build-css(1), sb-build-lang(1),
  sb-build-test(1), sb-build-docs(1)

## EXIT

  0 - all commands succeeded
  1 - one or more sub-command failed

## Spellbook

  Part of the sb(1) suite
