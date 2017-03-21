This is VLC's main website, it runs refinery for the backend and is currently deployed to heroku 

* https://dashboard.heroku.com/apps/vlc-web
* https://devcenter.heroku.com/articles/using-the-cli

The image/file storage for refinery is handled via S3. There is a single application key defined which is configured via the heroku cli (aka toolbelt). To configure this you need the cli installed and logged in, then you can set the appropriate variables as so:

```bash
heroku config:set --app vlc-web S3_KEY=foo S3_SECRET=blah
```
