# vscode devcontainer

[Official vscode documentation](https://code.visualstudio.com/docs/remote/containers)

## Introduction

`vscode` allows development environments to be defined through the combination of a configuration file, `devcontainer.json`, and development containers. The main development container contains any assets that typically belong to a development workstation (e.g., `PHP` executable for `IntelliSense` and `vscode` plugin assets). Integration with the development container is managed through `vscode's` `Remote - Containers` plugin. `Docker Desktop` is recommended (Windows / Mac) as a container runtime for ease of use.

## Features

- Apache HTTP Server
- PHP
- PHP Debugging Support through `Xdebug`
- MySQL Database

## Included vscode Plugins

- See `devcontainer.json` for included `vscode` plugins.

These features are "zero configuration" or close to it (DB schemas must be executed manually). Simply load the workspace in vscode `Remote - Containers` and the services will start. They will stop upon `vscode` exiting.