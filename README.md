<h1 align="center">
  <a href="https://www.reddit.com/r/iamverysmart/">
    <img src="LOL.png" alt="ZeroIQcaptcha">
  </a>
</h1>

# IQ Captcha Buster
A userscript that automatically solves IQ captchas for https://iqcaptcha.us.to

[IQCaptcha Github](https://github.com/ballerburg9005/IQcaptcha)

# Requirements
- Bash >4.0+
- Imagemagick >7.0+
- Qalculate
- A server with PHP
- Tampermonkey

# Install
```bash
git clone https://github.com/644/iqcaptcha-buster/
```

Add the files to your server, and change the paths in iq-solve.php.

Then [click here to install the userscript](https://raw.githubusercontent.com/644/iqcaptcha-buster/main/iqcaptcha.user.js).

And finally in the tampermonkey dashboard, modify the url to the iq-solve.php location in the IQCaptchaBuster userscript.

You may also need to create empty tmp.jpg, ans.txt and formula.txt files.
```bash
touch tmp.jpg ans.txt formula.txt
```

Next time you encounter an IQ captcha, it will prompt you for the equation and apostrophe count. Just enter, for example
```
4x^2+5x+8:3
```
Then it will attempt to solve and prompt you to retry. Just click cancel if it solved successfully. Later versions may use tesseract to extract the equation from the IQ Captcha, so no human input is necessary. You can test it's working by trying the one on https://iqcaptcha.us.to

# Example
![Example](https://raw.githubusercontent.com/644/iqcaptcha-buster/main/example.gif)

# License
MIT
