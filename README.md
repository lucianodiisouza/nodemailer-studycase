# nodemailer-studycase
Basic sending mails with nodemailer (i will come back in this at future...)

Send mails with NodeJS is very simple, we can use just nodemailer lib and more nothing to do this `hard` task, <br>
- first we need to install nodemailer using `yarn add nodemailer` to any node project.<br>
- call nodemailer using const / require method
- create an variable called transporter to transport data between the email servers
- inside transporter variable we need to call `createTransport` method extended from nodemailer import statement, defining the type of service, smtp port, smtp address and auth data passing user and password,
- calling the transporter variable we have a method called sendmail() that will container all email data: from, to, subject, text and a html version of this text to send.
- use try/catch method to handle the results returned from this method call.

Enjoy!
