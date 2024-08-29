# Command in Linux for 
**<a style="color:red; font-size:15px"><u>Note</u>: each command has its own option/switch.</a>**
1. **ls** : List directory contents: ``` ls <directory name>```  
            Example: ```ls src ```
2. **cd** : Change directory: ``` cd <directory name>```  
            Example: ```cd src ```
3. **pwd**: Print working directory:  ``` pwd```    
4. **grep**: Search for patterns in files: ```grep "pattern" file.txt ```
5. **find**: Search for files in a directory hierarchy: ```find [path] [expression] ```  
Example: ``` find /home/ -name Documents ```
6. **ps**: Report process status: ``` ps ```
7. **top**: Display and update sorted information about processes
8. **chmod**: Change file permissions
9. **chown**: Change file owner and group
10. **sudo**: Execute a command as another user (typically root)
11. **systemctl**: Control the systemd system and service manager
12. **journalctl**: Query the systemd journal
13. **ufw**: Uncomplicated Firewall (frontend for iptables)
14. **useradd/userdel**: Add or delete user accounts
15. **passwd**: Change user password
16. **lsof**: List open files
17. **who**: Show who is logged on
18. **last**: Show listing of last logged in users
19. **history**: Command line history
20. **cat**: Concatenate files and print on the standard output
21. **wc**: wc (word count) is a command-line utility in Linux that is used to 
            count the number of lines, words, and characters in a file or standard input.
------------------------------------------------------------------------------
# <a href="https://www.freecodecamp.org/news/linux-terminal-piping-and-redirection-guide/">```pipe```</a> command on Linux
A pipe in Linux is a way to connect the output of one command to the input of another. It's like creating a conveyor belt for data between commands.
``` bash
command1 | command2 | command3 | ... | commandN
```
**Why Ethical Hackers Use Pipes**:

1. Efficiency: Pipes allow hackers to chain multiple commands together, performing complex tasks in a single line. This saves time and effort.
2. Flexibility: Pipes offer a lot of flexibility in how data can be processed and manipulated. Hackers can use them to filter, sort, and analyze data in various ways.
3. Automation: Pipes can be used to automate repetitive tasks, making hacking more efficient and less error-prone.
4. Data Extraction: Hackers can use pipes to extract specific information from systems or files, which can be valuable for their investigations.
5. Stealth: Pipes can help hackers to remain undetected, as they can perform actions without creating visible files or traces on the system.  

**Common Usage of pipe command on Linux**  

