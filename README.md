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
- Imagemagick
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

Next time you encounter an IQ captcha, it should automatically enter the solution when you click the checkbox. You can test it's working by trying the one on https://iqcaptcha.us.to

# Example
![Example](https://raw.githubusercontent.com/644/iqcaptcha-buster/main/example.gif)

# License
MIT
