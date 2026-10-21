# Stash Image Folder Fork

Stash UI plugin that adds a button for opening the parent folder of the current image or scene.

## Installation

The easiest way is to add the plugin source to Stash:

    In Stash, go to Settings → Plugins.

    Under Available Plugins, click Add Source.

    Enter a name (for example Collapsible Plugin and Scraper Settings) and the source URL:

    https://snow19172.github.io/snow19172-stash-plugins/main/index.yml

    Confirm, then tick Collapsible Plugin Settings in the list of available plugins and click Install.

    Hard-reload the page (Ctrl+F5) to ensure the JavaScript is loaded.

The plugin requires the **CommunityScripts UI Library**.

## Manual Installation

For a manual installation, copy `imagefolder-fork.js` and `imagefolder-fork.yml` into a plugin directory and keep them together. Alternatively, clone the repository from that directory:

```sh
git clone https://github.com/snow19172/snow19172-stash-plugins.git
```

Reload Stash after installing or updating the plugin.

## Usage

On an image or scene page, use the folder button in the toolbar. It opens the corresponding Stash image or scene list filtered to the parent directory of the file.

The button is only shown when Stash provides a file path for the image or scene. The plugin supports both local paths and paths returned with a `file://` prefix, and works with any Stash host URL because navigation uses relative links.

## Plugin Files

- `imagefolder-fork.yml` defines the plugin and its CommunityScripts UI Library dependency.
- `imagefolder-fork.js` queries Stash's GraphQL API for the current file path and adds the parent-folder button to image and scene toolbars.

## Changelog

- Updated image and scene GraphQL queries to retrieve each file's `parent_folder` directly.
- Replaced the standalone userscript with a Stash UI plugin that adds parent-folder navigation to image and scene toolbars using Stash's GraphQL API.
- Removed the unused userscript and parent-folder SVG asset.
- Updated the installation documentation to cover manual installation and cloning the repository, since the plugin is not available in the Stash plugin repository.

#Copy of https://git.feederbox.cc/smegmarip/stash-image-folder
#No longer available but was a mirrored of https://github.com/smegmarip/stash-image-folder.git
