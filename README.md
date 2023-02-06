# columnpaste README

This is a column copy/paste extension.

## Features

This extension has only one feature: copy multiline column then paste into multiline.

You can use column mode to select multiline and then paste the content into these lines.

ctrl+alt+v "column paste"

![feature](screen.gif)

## How to Use:

Select multiline content and press ctrl+c to copy, then select one line or multiline with column mode and press ctrl+alt+v to paste.

### 0.0.8
fix an issue in new version 1.75.0 as the vscode team add a guard for insertSnippet([this issue](https://github.com/john-guo/columnpaste/issues/9)). Thanks to [Scorg](https://github.com/Scorg).

### 0.0.7
fix an issue that if a text contains '$' that the vscode will treat it as a variable then it cannot be paste successfully(see [this issue](https://github.com/john-guo/columnpaste/issues/6)). Thanks to [Draught3d](https://github.com/Draught3d).


### 0.0.6
add a new paste command(ctrl+shfit+v) for vertial alignment. Thanks to [icetbr](https://github.com/icetbr) 

### 0.0.4
add a description

### 0.0.3
fix some bug see changelog

### 0.0.2
change readme

### 0.0.1

Initial release of columnpaste

**Enjoy!**
