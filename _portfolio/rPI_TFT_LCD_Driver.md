---
title: Raspberry Pi LCD HAT — KOE FPC Display Interface
category: PCB Design
date: 2022-10-17
tech: RPi HAT · DPI · 2-layer
image: #/assets/projects/rPI_LCD_Hat/rPI_KOE_LCD_Board.png
specs:
  - label: Form factor
    value: Raspberry Pi HAT
  - label: Layers
    value: 2-layer
  - label: Display interface
    value: DPI (RGB parallel)
  - label: FPC connector
    value: 50-pin KOE
  - label: Backlight IC
    value: AL3066 (3-ch, 600mA)
  - label: Touch controller
    value: RMI4 (Synaptics)
---

A Raspberry Pi DPI HAT designed to breathe new life into scavenged LCD panels!
This board, uses the KOE 50-pin FPC connector. 
Rather than discarding LCD displays from salvaged devices, this board provides a clean hardware
interface to drive them directly from a Raspberry Pi.

## Display Interface — DPI

DPI uses the Pi's GPIO bank as a parallel RGB interface, routing pixel
data directly from the GPU without any intermediate bridge IC. It's a relativity 
simple interface, with it's greatest draw back being how many pins it consumes.

The LCD panel is configured in `config.txt` to match the neccessary timing parameters.
Horizontal and vertical sync, pixel clock, and blanking intervals are tuned per panel,
allowing different salvaged displays to be driven by swapping the overlay configuration 
without hardware changes.

<a href="{{ '/assets/projects/rPI_LCD_Hat/config.txt' | relative_url }}"
   class="download-btn" download>↓ Download config.txt</a>

While this board could potentially be used for other display's as is, the pinouts
for each displays FPC are usually unique. Therefore this board typically requires a
few tweaks to be compatible with different type of DPI displays.

## Backlight — AL3066 3-Channel Boost Converter

The AL3066 is a 3-channel constant-current boost converter designed
specifically for LED backlight driving. Each channel sources up to 200mA,
giving 600mA total across the three strings — sufficient for the multi-string
backlight arrays found in typical salvaged industrial and consumer LCD panels.

Brightness is controlled via a PWM signal from a Pi GPIO feeding the AL3066's
DIM pin, allowing software brightness control through standard Linux backlight
interfaces without any additional hardware.

## Touch Interface — Synaptics RMI4 over I2C

The touchscreen controller is a Synaptics RMI4-compatible device,
interfaced over I2C. Rather than using the Pi's dedicated hardware
I2C pins — which conflict with the DPI pin allocation — the I2C bus is
hardwired to a pair of spare GPIOs and driven using the `i2c-gpio` bit-bang 
kernel driver.

Checkout my blog post for getting the synaptics RMI4 driver setup:
[→ Bit-banging I2C for the RMI4 driver]({{ '/rPi-RMI4-bitbang-I2C-driver/' | relative_url }})

## Mechanical

The board follows the Raspberry Pi Zero HAT mechanical specification — 65 × 56mm
PCB outline, four M2.5 mounting holes and a 40-pin GPIO stackthrough header.
