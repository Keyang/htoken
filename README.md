# HOTP Google Authenticator Cli 

Command line tool for HOTP google authenticator in node.js with AES256 encryption protecting your secret keys.

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

* Then setup a password to protect your secret key. You can leave the password empty so the configuration file will not be encrypted.

Once you get setup successfully, run again

```
htoken
```


You will get your dynamic passcode. (If you have password setup, you need type your password first.)

You can find your configuration file at $HOME/.htoken.json

##Sync
You need to sync with server for first time use. If the tool is out of sync for some reason, you have to sync with server again.

##Reset
To reset everything, just simply remove $HOME/.htoken.json file (or $USERPROFILE\\.htoken.json file for Windows).


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



