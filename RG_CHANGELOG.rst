RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `verawood-rg.1`

[Unreleased]
************

Added:
======
* add custom fonts loading from rg-branding-plugin (TEA-289)
* a separate logo for Authn via ``STUDIO_LOGO_URL``, falling back to ``LOGO_WHITE_URL`` (TEA-310)
* Sync the active Paragon theme variant from the shared cross-origin ``theme-variant`` cookie (ENG-63)

Removed:
========
* codecov CI action — the fork has no codecov project, so the step failed every run (VERA-6)
