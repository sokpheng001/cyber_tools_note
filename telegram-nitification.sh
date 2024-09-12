#!/bin/bash

# Replace with your bot token and chat ID
BOT_TOKEN="7466088315:AAGlHbRbhhwmxlHGaiyu5K_oQtmsMsvlXCA"
CHAT_ID="1945250068"

# Construct the message
MESSAGE="Build successful: $JOB_NAME $BUILD_NUMBER"

# Send the message

curl -s -X POST https://api.telegram.org/bot$BOT_TOKEN/sendMessage -d chat_id=$CHAT_ID -d text="$MESSAGE"