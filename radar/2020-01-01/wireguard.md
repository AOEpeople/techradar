---
title:      "WireGuard"
ring:       adopt
quadrant:   "platforms-and-aoe-services"
tags:       [cloud]
---

The WireGuard application was selected based on its small footprint and its high level of cryptographic capabilities, thus allowing our developers to easily and securely connect to the Metagora infrastructure.

WireGuard creates a new network interface on your system with the assigned private IP address, allowing the system to be able to route traffic within the IP ranges defined in the Peer configuration of AllowedIPs. This methodology provides for a connection-less protocol, which means you do not specifically have to start/stop a VPN connection. Once WireGuard is installed and the tunnel (the new, all of the connectivity is handled for you making it relatively seamless to connect to our production environments.

Other VPN protocols/apps such as OpenVPN or IPSec, while quite useful, generally only allow a point to point connection, i.e. from your PC to one outside server. With WireGuard and its connection-less protocol, you can put in an entire range of IP addresses in the configuration, and can connect to any of them permitted by the Network Administrator.

For more information on the WireGuard open sourced application, please have a look at https://www.wireguard.com

WireGuard is an open-source, modern, and high-performance Virtual Private Network (VPN) protocol and software implementation that aims to provide secure, fast, and efficient network communication. It was designed with simplicity and minimalism in mind while maintaining strong security principles. WireGuard has gained popularity for its performance and ease of configuration compared to older VPN protocols like OpenVPN and IPsec.

Key features and characteristics of WireGuard include:

1. **Security**: WireGuard uses state-of-the-art cryptographic protocols to ensure the confidentiality, integrity, and authenticity of data transmitted over the VPN. It employs modern cryptography, including the Noise protocol framework, which is known for its security properties.

2. **Performance**: WireGuard is designed to be lightweight and efficient, resulting in faster connection speeds and lower resource usage compared to many other VPN solutions. Its simplicity contributes to reduced overhead.

3. **Simplicity**: WireGuard's design philosophy emphasizes simplicity and ease of use. This makes it easier to set up and configure, even for non-experts, compared to some other VPN protocols that can have complex configurations.

4. **Cross-Platform**: WireGuard is available on various operating systems, including Linux, Windows, macOS, Android, and iOS. This cross-platform compatibility makes it versatile for a wide range of devices and use cases.

5. **Secure Key Exchange**: WireGuard uses a secure and efficient key exchange process during the initial setup, ensuring that both parties can establish a secure connection without exposing sensitive information.

6. **Dynamic Routing**: WireGuard can adapt to changing network conditions and routes traffic efficiently. It can work well with mobile devices and roaming clients.

7. **Minimal Attack Surface**: The design of WireGuard aims to minimize the attack surface by keeping the codebase small and focused, which can contribute to better security.

8. **Transparency**: WireGuard's codebase is open source and audited by the security community, which helps ensure its trustworthiness.

