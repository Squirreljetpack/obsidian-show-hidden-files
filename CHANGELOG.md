# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-06-13

### Added
- **Nested Hidden Files Support**: Hidden files and folders inside subdirectories are now correctly discovered and shown.
- **Ignored Hidden Globs**: Support for glob patterns (e.g., `**/node_modules/*`, `.git/**`) to filter hidden files. One pattern per line.
- **Dynamic Config Ignoring**: The vault's configuration folder (e.g., `.obsidian`) is now part of the default ignored globs and can be unhidden by the user.
- **Recursive Scanning**: Improved startup discovery of hidden files deep in the vault structure.

### Changed
- **Consolidated Settings**: Replaced "Ignored Hidden Paths" with the more powerful "Ignored Hidden Globs" setting.
- Improved path normalization for better cross-platform compatibility.
- Settings tab UI updated with more descriptive labels and placeholder examples.

## [1.0.3] - 2026-04-15

### Fixed
- Passed full Obsidian ESLint audit for better code quality and security.
- Improved error handling in file discovery.
