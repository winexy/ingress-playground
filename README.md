Example

```sh
# Configure docker env inside minikube
eval $(minikube docker-env)

# Build docker image
docker build -t minikube-app .

# Uses docker images and create deployment
kubectl apply -f deployment.yml

# Exposes service to <ip>:3030
kubectl apply -f service.yml

kubectl service minikube-app --url
```