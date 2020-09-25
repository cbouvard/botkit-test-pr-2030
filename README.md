# Scope

This project is for testing the PR related to the [issue #2030](https://github.com/howdyai/botkit/issues/2030) of Botkit.

# Setup & run

Clone this project in the same folder that the modified Botkit repo.

```shell
% ls | grep botkit
botkit
botkit-test-pr-2030
```

Run the project:

```shell
npm start
```

And open the Bot Framework emulator with the endpoint http://localhost:3000/api/messages.

# Test cases

## Check user ID with bot.reply

Type "hello" in the Bot Framework emulator, and check logs in console.

Before:

```
✅ Message received "hello" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message sent "Hey!" with user faac9320-6627-4873-b784-d21cfd5e5765
```

After:

```
✅ Message received "hello" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message sent "Hey!" with user faac9320-6627-4873-b784-d21cfd5e5765
```


## Check user ID with convo.say/convo.ask

Type "pizza" in the Bot Framework emulator, and check logs in console.

Before:

```
✅ Message received "pizza" with user faac9320-6627-4873-b784-d21cfd5e5765
❌ Message sent "It smells good... 🍕🍕🍕" without user
❌ Message sent "What kind of pizza do you want?" without user
✅ Message received "Peperoni" with user faac9320-6627-4873-b784-d21cfd5e5765
❌ Message sent "You choose: Peperoni" without user
```

After:

```
✅ Message received "pizza" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message sent "It smells good... 🍕🍕🍕" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message sent "What kind of pizza do you want?" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message received "Quattro Formaggi" with user faac9320-6627-4873-b784-d21cfd5e5765
✅ Message sent "You choose: Quattro Formaggi" with user faac9320-6627-4873-b784-d21cfd5e5765
```
