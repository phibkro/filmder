{
  description = "filmder — TMDB-backed movie browser (Vite + React)";

  inputs = {
    lab.url = "github:phibkro/homelab";
    nixpkgs.follows = "lab/nixpkgs";
  };

  outputs =
    { lab, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        # claude-code is unfree; allow for the dev shell.
        config.allowUnfree = true;
      };
    in
    {
      devShells.${system}.default = lab.lib.mkDevShell pkgs {
        modules = [
          "ts"
          "nodejs"
          "claude-code"
        ];
      };
    };
}
