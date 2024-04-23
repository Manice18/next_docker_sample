## Steps for using with Docker:

- `docker build -t next_docker_test .`
- `docker run -p 3000:3000 next_docker_test` : Runs the nextjs image in a container with port 3000

## Steps to deploy to any VPS with ghcr:

- Name the image with the prefix: ghcr.io/<repo_name>/<image_name>:<version number>
- `docker build -t ghcr.io/manice18/next_docker_test:latest .`
- `docker login ghcr`
- `docker push ghcr.io/manice18/next_docker_test:latest`
