Meteor site for testing the [publish-composite](https://github.com/englue/meteor-publish-composite) meteorite package

---------------------------------------

To clone and set up for the first time:

```sh
$ npm install -g meteorite
$ cd /path/to/my/working/dir
$ git clone https://github.com/englue/meteor-publish-composite.git
$ ln -s meteor-publish-composite mrt\:publish-composite
$ cd /path/to/my/working/dir
$ git clone https://github.com/reywood/meteor-publish-composite-test.git
$ cd meteor-publish-composite-test
$ mrt link-package /path/to/my/working/dir/mrt\:publish-composite
$ meteor add mrt:publish-composite
```

To simply run the app and see if everything looks kosher:

```sh
$ meteor
```

To run package tests, execute:

```sh
$ meteor test-packages mrt:publish-composite
```

Then browse to <http://localhost:3000/>.
