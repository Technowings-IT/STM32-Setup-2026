# STM32F746G-DISCO — Getting Started Guide

An offline, beginner-friendly guide to STM32 development on the **STM32F746G-DISCO** board, using the 2026 stable ST toolchain: **STM32CubeIDE 2.1.0**, **STM32CubeMX 6.17.0**, **TouchGFX 4.26.1**, classic **HAL1**.

### 📖 Live guide → https://technowings-it.github.io/STM32-Setup-2026/

## What's inside
- **Introduction** — Software stack (TouchGFX / CubeMX / CubeIDE and how they hand off) · Board overview (STM32F746G-DISCO tour with hand-drawn diagrams)
- **Setup** — Install & verify: all three tools, drivers, and confirming the board on Windows
- **Workflow** — TouchGFX-first flow & structure: the optimal loop, generated folder tree, and who owns which files
- **3 hands-on demos (TouchGFX-first)** — D1 First screen (TouchGFX only) · D2 Interactive UI (widget + backend) · D3 Screen↔hardware (full round-trip: LED, button, UART)
- **Reference** — Troubleshooting & glossary: fixes for common errors and a beginner term list

## View locally
Just open `index.html` in any browser. Fully offline — no build step, no server, no internet needed.

## Tech
Static HTML / CSS / JS with hand-authored SVG diagrams. Zero dependencies. Claude-style theme (warm dark default + cream light), serif headings, with a toggle. Deployed via GitHub Pages.
