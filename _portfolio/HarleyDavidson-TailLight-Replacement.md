---
title: Harley Davidson V-Rod Muslce Tail Light Replacement
category: Automotive
date: 2026-08-12
tech: LED · 1-Layer
image: assets/projects/harley_davidson_tail_light/PCB001-altium_screencap.png
specs:
  - label: Brand
    value: Harley Davidson V-Rod Muscle (VRSCF)
  - label: Part Number
    value: 69391-09
  - label: Compatible Models
    value: 2009–2017
  - label: Compliance
    value: NZTA, Vehicle Lighting 2004
  - label: Year
    value: "2026"
---


Harley VRSCF Muscle Vrod Tail Light Lamp: 69391-09 replacement project completed for:  
<img src="https://www.google.com/s2/favicons?domain=houseofcustom.co.nz&sz=16" style="width:14px;height:14px;vertical-align:middle;margin-right:2px;"><a href="https://www.houseofcustom.co.nz/">House of Customs</a>


## Overview:

A common failure on harley davidson's OEM's tails lights is the FPC connection breaking off.

<figure>
  <img src="{{ 'assets/projects/harley_davidson_tail_light/highlighting_the_torn_fpc_connection.png' | relative_url }}" 
       alt="OEM FPC Design">
</figure>


A replacement LED board was designed to slot into the existing housing. The design was improved upon with more secure and higher gauge cables so that they can be soldered into existing wiring for a much more secure & reliable connection.

Replacememt tail light's running vs brake light brightness increase:
<video autoplay loop muted playsinline style="width: 100%; height: 500px; object-fit: cover;">
  <source src="{{ 'assets/projects/harley_davidson_tail_light/blinking_tail_light.mp4' | relative_url }}" type="video/mp4">
</video>

Meets all performance requirements of NZTA's In-service [WoF & CoF](https://vehicleinspection.nzta.govt.nz/virms/in-service-wof-and-cof/motorcycles/lighting/stop-lamps) and conforms to requirements at of [NZTA's Vehicle Lighting 2004.pdf](https://www.nzta.govt.nz/assets/resources/rules/docs/vehicle-lighting-2004.pdf)

## Hardware design:

LED string with current control circuits. A single LED string is used for the running and brake light. A switching circuit controls the brightness of the LED's depending on the whether running or brake leaver is applied.

## Firmware:

No firmware required for this project, All switching and current control handled in hardware.

## Mechanical:

Design is a drop in replace and requires original OEM plastic for mounting and assembly.
