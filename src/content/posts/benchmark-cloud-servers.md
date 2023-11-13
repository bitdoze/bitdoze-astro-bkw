---
date: 2022-09-15T00:00:00Z
title: "How to Benchmark Cloud Servers (VPS)"
description: "Let's see how we can Benchmark a VPS and see exactly of what is capable off"
image: "../../assets/images/benchmark_vps.jpeg"
categories: ["vps"]
authors: ["Dragos"]
tags: ["linux"]
canonical: https://www.bitdoze.com/benchmark-cloud-servers/
---

In case you want to use a cloud server for your projects then you should benchmark them to have an idea of what they have to offer. There are a lot of cloud providers out there and the best way to see if the performance is good on a server is to run a test. A good one that you can try is [Hetzner](https://go.bitdoze.com/hetzner), it has decent prices and good performance, in this article we are going to benchmark one of their servers, for more details check this [Hetzner Review](https://www.wpdoze.com/hetzner-cloud-review/).

## What a Good Benchmark Should Check

A good benchmark should take a look on below:

- **Disk Speeds** > These days you have HDD, SSD, or NVME so the speeds may vary from a couple of MB on second to GB. A good VPS should have from hundreds of MB to GB write/read speed.
- **Network Speeds** > in case you are hosting internet-facing applications these speeds are very important the fastest the better, as you need to see the connections with the different data centers.
- **CPU** > The CPU plays a major role and it needs to be tested to see how fast it is. These days relevant tests are the [Geekbench](https://www.geekbench.com/) ones.

## What Tool to Use to Benchmark Al

[Yabs.sh](https://github.com/masonr/yet-another-bench-script) it’s a small tool that can help you benchmark all of these with a run. This will work on all servers Ubuntu or RedHat and you don’t need to install it to run. For benchmarks to start you just need to run:

    curl -sL yabs.sh | bash

This uses curl to fetch it and run it so you need curl on your VPS (this should be there by default in most distros)

**Benchmark Output**

    # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
    #              Yet-Another-Bench-Script              #
    #                     v2022-08-20                    #
    # https://github.com/masonr/yet-another-bench-script #
    # ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

    Wed Aug 31 12:14:29 PM UTC 2022

    Basic System Information:
    ---------------------------------
    Uptime     : 6 days, 5 hours, 18 minutes
    Processor  : AMD EPYC Processor
    CPU cores  : 3 @ 2445.404 MHz
    AES-NI     : ✔ Enabled
    VM-x/AMD-V : ❌ Disabled
    RAM        : 3.7 GiB
    Swap       : 2.0 GiB
    Disk       : 75.0 GiB
    Distro     : Ubuntu 22.04.1 LTS
    Kernel     : 5.15.0-46-generic

    fio Disk Speed Tests (Mixed R/W 50/50):
    ---------------------------------
    Block Size | 4k            (IOPS) | 64k           (IOPS)
      ------   | ---            ----  | ----           ----
    Read       | 113.01 MB/s  (28.2k) | 1.39 GB/s    (21.7k)
    Write      | 113.31 MB/s  (28.3k) | 1.39 GB/s    (21.8k)
    Total      | 226.32 MB/s  (56.5k) | 2.79 GB/s    (43.6k)
       |                      |
    Block Size | 512k          (IOPS) | 1m            (IOPS)
      ------   | ---            ----  | ----           ----
    Read       | 2.07 GB/s     (4.0k) | 2.72 GB/s     (2.6k)
    Write      | 2.18 GB/s     (4.2k) | 2.90 GB/s     (2.8k)
    Total      | 4.26 GB/s     (8.3k) | 5.62 GB/s     (5.4k)

    iperf3 Network Speed Tests (IPv4):
    ---------------------------------
    Provider        | Location (Link)           | Send Speed      | Recv Speed
            |                           |                 |
    Clouvider       | London, UK (10G)          | 1.08 Gbits/sec  | 2.38 Gbits/sec
    Online.net      | Paris, FR (10G)           | 2.84 Gbits/sec  | 2.34 Gbits/sec
    Hybula          | The Netherlands (40G)     | 2.05 Gbits/sec  | 2.11 Gbits/sec
    Uztelecom       | Tashkent, UZ (10G)        | 1.07 Gbits/sec  | 948 Mbits/sec
    Clouvider       | NYC, NY, US (10G)         | 8.47 Gbits/sec  | 8.09 Gbits/sec
    Clouvider       | Dallas, TX, US (10G)      | 4.23 Gbits/sec  | 5.35 Gbits/sec
    Clouvider       | Los Angeles, CA, US (10G) | 2.32 Gbits/sec  | 3.35 Gbits/sec

    iperf3 Network Speed Tests (IPv6):
    ---------------------------------
    Provider        | Location (Link)           | Send Speed      | Recv Speed
            |                           |                 |
    Clouvider       | London, UK (10G)          | 1.99 Gbits/sec  | 2.39 Gbits/sec
    Online.net      | Paris, FR (10G)           | 2.96 Gbits/sec  | 2.41 Gbits/sec
    Hybula          | The Netherlands (40G)     | 1.97 Gbits/sec  | 2.06 Gbits/sec
    Uztelecom       | Tashkent, UZ (10G)        | 1.25 Gbits/sec  | 1.05 Gbits/sec
    Clouvider       | NYC, NY, US (10G)         | 8.46 Gbits/sec  | 7.40 Gbits/sec
    Clouvider       | Dallas, TX, US (10G)      | 4.31 Gbits/sec  | 4.80 Gbits/sec
    Clouvider       | Los Angeles, CA, US (10G) | 3.15 Gbits/sec  | 3.38 Gbits/sec

    Geekbench 5 Benchmark Test:
    ---------------------------------
    Test            | Value
            |
    Single Core     | 924
    Multi Core      | 2582
    Full Test       | https://browser.geekbench.com/v5/cpu/16984496

In the output above you see that you have all the 3 major things benchmarked and Hetzner does a very nice job for the price point, you pay for a VPS server.
