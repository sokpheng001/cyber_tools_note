# Network Scanning

1. Nmap
    -  **Nmap** (“Network Mapper”) is an open source tool for 
        networkexplorationand security auditing. It was designed to rapidly scan large networks,although it works fine against single hosts. Nmap uses raw IP packetsin novel ways to determine what hosts are available on the network,what services (application name and version) those hosts are offering,what operating systems (and OS versions) they are running, what type ofpacket filters/firewalls are in use, and dozens of othercharacteristics.

        - **Usage**
            ```bash
            sudo nmap <options>
            ```
            - Example: Discovering hosts in a network: 
                    ```sudo nmap -sn <ip/subnetmask>```
                ```bash
                sudo nmap -sn 192.168.0.0/24
                ```