Meteor site for testing the [publish-composite](https://github.com/englue/meteor-publish-composite) meteorite package

---------------------------------------

To clone and set up for the first time:

```sh
$ cd /path/to/my/working/dir
$ git clone https://github.com/englue/meteor-publish-composite.git
$ git clone https://github.com/reywood/meteor-publish-composite-test.git
$ cd meteor-publish-composite-test/packages
$ ln -s ../../meteor-publish-composite reywood\:publish-composite
$ meteor add reywood:publish-composite
```

To simply run the app and see if everything looks kosher:

```sh
$ meteor
```

To run package tests, execute:

```sh
$ make test
```

Then browse to <http://localhost:3000/>.
