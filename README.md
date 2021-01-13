# inkdrop-autocopy-title

![demo](https://raw.githubusercontent.com/yudai1202/inkdrop-autocopy-title/media/demo.gif)

## Overview

Automatically sync title and `#` level heading(e.g.`# Heading1`) when notes are saved.

## Installation

Install with ipm

```shell
ipm install autocopy-title
```

## Usage

if title was empty and the body of note was start with header 1(`# something`),
the header 1 was copy to title when saving.

if no header 1 in the body of note and tile was entered, then the title was inserted
into the first line of body as header 1.

if header 1 or title was already existed, then not synced.

## Changelog

see [CHANGELOG.md](https://github.com/yudai1202/inkdrop-autocopy-title/blob/main/CHANGELOG.md)

## License

MIT
