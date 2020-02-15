let
  # Look here for information about how to generate `nixpkgs-version.json`.
  #  → https://nixos.wiki/wiki/FAQ/Pinning_Nixpkgs
  pinnedVersion = builtins.fromJSON (builtins.readFile ./.nixpkgs-version.json);
  pinnedPkgs = import (builtins.fetchGit {
    inherit (pinnedVersion) url rev;

    ref = "nixos-unstable";
  }) { };

  # This allows overriding pkgs by passing `--arg pkgs ...`
in { pkgs ? pinnedPkgs }:

with pkgs;

mkShell {
  buildInputs = [
    # put packages here.
    yarn
    nodePackages.dockerfile-language-server-nodejs
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.vscode-css-languageserver-bin
  ];
}
