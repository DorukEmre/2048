2048 puzzle game built using JavaScript. The game features a 4x4 grid where players merge tiles with the same numbers to achieve the 2048 tile.

  - Responsive design: tiles resized according to window size
  - Uses keyboard arrow keys for tile movement
  - Built and served using Docker and Nginx for easy deployment

#

Build and run the Docker container using the provided Makefile:
``` bash
make 
make build
```
This will start an Nginx server that serves the index.html and JavaScript files at http://localhost:8080/
