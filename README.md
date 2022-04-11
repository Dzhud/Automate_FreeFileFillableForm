# Automate_FreeFileFillableForm
Chrome browser extension that auto populates IRS form 8949 (Short and Long term forms) fields. Another level of automation is form selection. After the completion of a particular form, the next one is automatically loaded and filled.

# The Process
1) You pick an initial Form 8949 Page 1 (or 2) manually (for the first time)
2) You click the Copy 1A (or appropriate button) on the extension's UI. Form fields get automatically filled
3) 5 seconds after number 2 action is completed script automatically clicks the button to add new form (either form A or B). 2 seconds later, Form 8949 A or B form is selected, as determined by the button initially pressed.
4) You get asked if you're sure you want to add another copy of an existing form.
5) Script automates 'Yes, Add Another Button' click.
6) New form is loaded
7) Click the appropriate button to autocomplete fields and the cycle continues.

If for some reason (internet lag or browser's) the page is static, click the appropriate button again.


![image](https://user-images.githubusercontent.com/17687761/162730728-ca21ce42-c3c2-4086-a383-b99606c4cedf.png)
