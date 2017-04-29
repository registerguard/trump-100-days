# grunt-starter

My personal starting point for Grunt projects.

I'm still learning so this changes a lot.

## Getting started

```
git clone git@github.com:robertdenton/grunt-starter.git
...
cd grunt-starter
npm install
...
grunt dev      # generate dev files
grunt watch    # Grunt will watch dev files and re-generate on save
grunt prod     # generate production files
grunt push     # will push to s3 *** IF *** aws-keys.json file is added
```

### aws-keys.json

```json
{
  "AWSAccessKeyId": "XXXXXXXXXXXXXXXXXXXX",
  "AWSSecretKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}

```

## Major components

* [Grunt](https://gruntjs.com/)
* [Sass](http://sass-lang.com/install)