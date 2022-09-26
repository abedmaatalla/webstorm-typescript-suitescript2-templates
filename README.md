## Overview ##

This project contains opinionated file templates that can be used by
[NetSuite](http://www.netsuite.com/portal/platform/developer.shtml)
developers who use the [WebStorm IDE](https://www.jetbrains.com/webstorm/) to
generate SuiteScript 2.0 TypeScript templates.

## Install ##

1. [Download the zip](https://github.com/abedmaatalla/webstorm-typescript-suitescript2-templates/archive/refs/heads/main.zip)
   of the source
1. Extract the archive
1. Close all instances of WebStorm.
1. Open both the `2.0` folders of the extracted archive.
1. Copy the files on `fileTemplates` folder to:
    1. Windows
        * `~/.WebStorm[Version Number]/config/` for WebStorm earlier than 2020.1
        * `%AppData%/Roaming/JetBrains/WebStorm[Version Number]/` for WebStorm after and including 2020.1
    2. Mac
        * `~/Library/Application\ Support/JetBrains/WebStorm[Version Number]/fileTemplates`
1. Launch (or restart) WebStorm

To prevent a known but undetermined error when generating template files:

1. Open WebStorm and go to _Settings_ > _Editor_ > _File and Code Templates_
1. Uncheck _Reformat according to style_ for all "TS.SS2 *" templates

## Usage ##

SuiteScript templates can be used just like any other
[WebStorm file template](https://www.jetbrains.com/help/webstorm/11.0/file-and-code-templates.html).
Just click _File_ > _New_ and select the "TS.SS2 *" script type you'd like to insert.

For script types with multiple entry-point handlers, you will be prompted for
which functions you'd like to generate in the template. Simply put a `y` in the
box for each function you'd like to generate. You don't need to put anything in
for the functions you don't want.

## Recommended plugins ##

I recommend also using the [Global File Template Variables](https://plugins.jetbrains.com/plugin/8008?pr=webStorm)
plugin to define the `author`, `email`, and `organization` variables for all
templates.
