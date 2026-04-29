# Assignment 2

## Network Topology

| VM   | Role              | IP Address      |
|------|-------------------|-----------------|
| VM1  | Docker App Host   | 192.168.123.10  |
| VM2  | Nginx Reverse Proxy | 192.168.123.20 |

- **Subnet:** 192.168.123.0/24  
- **Adapter:** VirtualBox Host-Only  
- **OS:** Debian Trixie 13  

---

## Part 1 — Manual Setup

### VM1 Static IP Configuration
Set using NetworkManager (nmcli) on Debian Trixie:
```bash
sudo nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses 192.168.123.10/24 \
  ipv4.gateway 192.168.123.1 \
  ipv4.dns "8.8.8.8,1.1.1.1"
```

### VM2 Static IP Configuration
```bash
sudo nmcli connection modify "Wired connection 1" \
  ipv4.method manual \
  ipv4.addresses 192.168.123.20/24 \
  ipv4.gateway 192.168.123.1 \
  ipv4.dns "8.8.8.8,1.1.1.1"
```

---

## VM Communication Evidence

### VM1 → VM2 Ping Result
PING 192.168.123.20 56(84) bytes of data.
64 bytes from 192.168.123.20: icmp_seq=1 ttl=64 time=0.658 ms
64 bytes from 192.168.123.20: icmp_seq=2 ttl=64 time=0.253 ms
64 bytes from 192.168.123.20: icmp_seq=3 ttl=64 time=0.269 ms
3 packets transmitted, 3 received, 0% packet loss
<img width="734" height="676" alt="VM-1" src="https://github.com/user-attachments/assets/d9968a39-6f2f-4ef7-8a9d-13b316041601" />

### VM2 → VM1 Ping Result
PING 192.168.123.10 56(84) bytes of data.
64 bytes from 192.168.123.10: icmp_seq=1 ttl=64 time=0.658 ms
64 bytes from 192.168.123.10: icmp_seq=2 ttl=64 time=0.253 ms
64 bytes from 192.168.123.10: icmp_seq=3 ttl=64 time=0.269 ms
3 packets transmitted, 3 received, 0% packet loss
<img width="614" height="675" alt="VM-2" src="https://github.com/user-attachments/assets/b2c41885-5ec3-44f3-b084-cb9f472a05e5" />

