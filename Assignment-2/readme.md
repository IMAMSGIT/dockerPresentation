Step 1 — Download Ubuntu Server 24.04 ISO
Get it from: https://ubuntu.com/download/server
(You'll need this ISO file to install on each VM)

Step 2 — Create VM1 in VirtualBox

Open VirtualBox → Click New
Set:

Name: vm1
Type: Linux
Version: Ubuntu 24.04 (64-bit)

RAM: at least 1024 MB (2048 recommended)
Hard disk: at least 10 GB
Attach the Ubuntu ISO → Settings → Storage → attach ISO
Start VM → go through Ubuntu Server installation

Step 3 — Set Static IP (192.168.123.x)
During or after Ubuntu install, assign:

VM1 → 192.168.123.10
VM2 → 192.168.123.20
VM3 → 192.168.123.30
VM4 → 192.168.123.40

Step 4 — Clone VM1 to create VM2, VM3, VM4
Instead of installing Ubuntu 4 times, install once on VM1 then clone it:

Right click VM1 in VirtualBox → Clone
Choose Full Clone
Rename as vm2, vm3, vm4
Then just change the IP address on each clone
