#!/bin/sh
# get action
ACTION=$1
DIR=`pwd`

appName="cst"

# help
usage() {
  echo "Usage: ./deploy.sh {start|stop|restart}"
  exit 1;
}

get_pid() {

    EXIST=$(ps axu | grep $1 | grep  $DIR |awk '{print $2}');
    if [ $EXIST ]; then
      echo $EXIST
    fi
}
# start app
start() {
  pid=`get_pid`

  if [ ! -z $pid ]; then
    echo 'server is already running'
  else
    pm2 start server.js  --node-args="--harmony-generators" --name $appName
    echo 'server is running'
  fi
}





# stop app
stop() {
  pid=`get_pid `
  if [ -z $pid ]; then
    echo 'server not running'
  else
    echo "server is stopping ..."
    kill -15 $pid
    pm2 delete $appName
    echo "server stopped !"
  fi
}

restart() {
  stop
  sleep 0.5
  git pull
  npm install
  echo =====
  start
}

case "$ACTION" in
  start)
    start
  ;;
  stop)
    stop
  ;;
  restart)
    restart
  ;;
  *)
    usage
  ;;
esac