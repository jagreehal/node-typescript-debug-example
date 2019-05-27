[![Build Status](https://travis-ci.org/jagreehal/node-typescript-debug-example.svg?branch=master)](https://travis-ci.org/jagreehal/node-typescript-debug-example)

# Example showing how to debug typescript in production

[![Greenkeeper badge](https://badges.greenkeeper.io/jagreehal/node-typescript-debug-example.svg)](https://greenkeeper.io/)

## mounting volumes

````bash
minikube mount ./dist:/mounted-app-dist
```bash
````

## set up minikube

eval $(minikube docker-env)

## run

```
npm run docker.build
npm run kube.deploy
npm run kube.service
npm run kube.launch
```
