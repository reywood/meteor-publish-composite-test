Meteor site for testing the [publish-composite](https://github.com/englue/meteor-publish-composite) meteorite package

---------------------------------------

To clone and set up for the first time:

```sh
$ git clone https://github.com/englue/meteor-publish-composite-test.git
$ cd meteor-publish-composite-test
$ git submodule update --init --recursive packages/publish-composite
$ cd packages/publish-composite
```

To simply run the app and see if everything looks kosher:

```sh
$ mrt
```

To run package tests, execute:

```sh
$ mrt test-packages publish-composite
```

Then browse to <http://localhost:3000/>.
