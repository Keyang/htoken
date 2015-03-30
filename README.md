# HOTP Google Authenticator Cli 

Command line for HOTP google authenticator in node.js

# Usage

```
npm install -g htoken
```
then run

```
htoken
```

You will be asked to provide following information:

* The oauth link. It should be something like: 

```
otpauth://hotp/LABEL?secret=<secret key>&counter=<init counter>
```

* Passcode length is by defaul 6.

Once you get setup successfully, run again

```
htoken
```

You will get your dynamic passcode.

You can find your configuration file at $HOME/.htoken.json

##Sync
You need to sync with server for first time use. If the tool is out of sync for some reason, you have to sync with server again.


# Use As Node.JS Lib

```
npm install htoken
```

and in project files:

```
var htoken=require("htoken");
htoken.hotp(secretKey,counter,passCodeLength);
//code will be returned.
```



