**E-commerce APIs**
This repo contains APIs for product inventory management. Admin can add products, update quantity, delete products and view all products.

**How to use this repo?**
1. Clone the repo or download the source code and extract files
2. **_src_** primary source code for models, controllers & routes
3. **_src_** can contain multiple **_features_** and inside each feature following directory structure is maintained
   **_models_** - contains schema files and repository files
   **_controllers_** - contains controller files
   **_routes_** - contains routes
4. **_src/utils_** contains helper functions
5. Environment Variables used
    - **DB_URL**: MongoDB server URI
    - **SERVER_PORT**: Listening port for express server
6. Open terminal and navigate to project root directory.
7. Make sure Node.js (v16.x and above) is installed. You can confirm by running **_node -version_**
8. Also mongoDB should be up and running
9. To install all dependency packages, run **_npm install_**
10. Start the server: **_node server.js_**
11. Open a web browser and access the application with application url: _http://localhost:SERVER_PORT/_
12. Demo application can be viewed here: 
