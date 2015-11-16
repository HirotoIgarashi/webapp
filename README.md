# webapp
spaをjavascriptとnodeで構築する。nodeの管理をnaveを利用することにする。

## Node.jsとnpmのアンインストール
この後でnaveを利用してnode.jsとnpmをインストールするため、
既に開発環境にnodeがインストールされている場合に実行する。
nodeがインストールされている場合は必要ない。

```
$ sudo npm uninstall npm
$ cd ${Node.jsのソースコードを展開したディレクトリ}
$ sudo make uninstall0
```

## naveのインストール
```
$ sudo apt-get install build-essential libssl-dev git-core
$ sudo apt-get install curl
$ mkdir nodejs
$ git clone http://github.com/isaacs/nave.git
$ cd nave
$ ./nave.sh install latest
```

```
$ ./nave.sh use latest
$ node -v
```

## start
node app.js
