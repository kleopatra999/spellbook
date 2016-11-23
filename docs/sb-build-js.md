# sb-build-js(1) - Build javascipt assets project

## SYNOPSIS

  sb-build-js [-l, --log-level <level>] [-h,--help] [-q,--quiet] [-V,--version]
              [<sub-command> [<args...>]] [help <sub-command>]

## DESCRIPTION

  Potentially build all or one of the following
    * browser javascript - see sb-build-js-css(1)
    * node javascript (for npm) - see sb-build-js-node(1)
    * all - see sb-build-js-all(1)

  By default if no command is passed in `sb-build-js` will be run as if it was
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
    The sub-command to run or get help for. Can be browser, node, or all.
    Defaults to all if nothing is passed in. [<args....>] will be passed along to sub command.

  help <sub-command>
    Get help for a sub-command, this is an alias for running `sb-build-js <sub-command> --help`.

## EXAMPLES

  Build browser assets - see sb-build-js-browser(1) for info on [<args...>]

    sb-build-js browser [<args...>]

  Build nodejs assets - see sb-build-js-node(1) for info on [<args...>]

    sb-build-js node [<args...>]

  Build all assets - see sb-build-js-all(1) for info on [<args...>]

    sb-build-js all [<args...>]

  Get help for a command

    sb-build-js help node
    sb-build-js help browser
    sb-build-js all --help

  Get the current version of spellbook

    sb-build-js -V
    sb-build-js --version

  Get help for this binary

    sb-build-js --help
    sb-build-js -h

  Set the log level for this binary

    sb-build-js -l info
    sb-build-js -l fatal
    sb-build-js --log-level debug
    sb-build-js --log-level error

  Dont output anything

    sb-build-js -q
    sb-build-js -quiet

## ENVIRONMENT VARIABLES

  SB_LOG_LEVEL
    The log level to use for all videojs-spellbook binaries

## SEE ALSO

  sb-build-js-all(1), sb-build-js-node(1), sb-build-js-browser(1)

## EXIT

  0 - all commands succeeded
  1 - one or more sub-command failed

## Spellbook

  Part of the sb(1) suite
