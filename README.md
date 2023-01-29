<details>
  <summary>Contents</summary>
  <ul>
    <li><a href="#yoga-api">Yoga API</a></li>
    <li><a href="#how-can-i-use-this-api">How can I use this API?</a></li>
    <li><a href="#categories">Categories</a></li>
    <li><a href="#poses">Poses</a></li>
    <li><a href="#installation">Installation</a></li>
  </ul>
</details>

# Yoga API 🧘‍♀️

Serving yoga categories and poses upon HTTP request. Currently, 12 categories and 48 postures can be found. If your response looks different, it is normal. This is a work in progress and modifications will be made.

After Heroku policy changes around November 2022, the main APIs providing data about yoga stopped working. I am plugging data from some of those projects into this one creating new endpoints. This API is hosted on [Render](https://render.com/).

Credits to those developers: [rebeccaestes](https://github.com/rebeccaestes/yoga_api) - [cc-smith](https://github.com/cc-smith/yoga-poses) - [chrisman](https://github.com/Stuwert/yoga-builder)

## How can I use this API?

**Request base URL:**

```
https://yoga-api-nzy4.onrender.com/api/yoga
```

**Response :**

```
HTTP 200 OK
Content-Type: application/json

{
    "baseURL": "https://yoga-api-nzy4.onrender.com/api/yoga/",
    "categories": "https://yoga-api-nzy4.onrender.com/api/yoga/:categories/",
    "category": "https://yoga-api-nzy4.onrender.com/api/yoga/category/:categoryName/",
    "poses": "https://yoga-api-nzy4.onrender.com/api/yoga/:poses/",
    "posture": "https://yoga-api-nzy4.onrender.com/api/yoga/pose/:poseName/"
}

```

The base URL is the root of the URL. If you ever make a request and you get back a 404 NOT FOUND response, then check the base URL first.

## Categories

### **Endpoints**

- `/categories/` -- get all categories
- `/category/:categoryName/` -- get specific category

**Example categories request:**

```
https://yoga-api-nzy4.onrender.com/api/yoga/categories/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

{
    "items": [
        {
            "id": 1,
            "name": "Core Yoga Poses",
            "short_name": "core_yoga_poses",
            "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose",
            "yoga_poses": [
                {
                    "id": 1,
                    "sanskrit_name": "Navasana",
                    "english_name": "Boat",
                }
            ]
        },
        {
            "id": 2,
            "name": "Seated Yoga Poses",
            "short_name": "seated_yoga_poses",
            "description": "Stay supple in your yoga practice with twisting asanas",
            "yoga_poses": [
                {
                    "id": 1,
                    "sanskrit_name": "Navasana",
                    "english_name": "Boat",
                }
            ]
        }
    ]
}

```

**Example category request:**

```
https://yoga-api-nzy4.onrender.com/api/yoga/category/core yoga poses
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

{
    "id": 1,
    "name": "Core Yoga Poses",
    "short_name": "core_yoga_poses",
    "description": "Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.",
    "yoga_poses": [
        {
            "id": 1,
            "sanskrit_name": "Navasana",
            "english_name": "Boat"
        },
        {
            "id": 2,
            "sanskrit_name": "Ardha Navasana",
            "english_name": "Half-Boat"
        },
        {
            "id": 7,
            "sanskrit_name": "Marjaryasana",
            "english_name": "Cat"
        }
    ]
}
```

**Example category not found:**

```
HTTP/1.0 400 Bad request
Content-Type: application/json
{
    "message": "category not found"
}
```

## Poses

### **Endpoints**

- `/poses/` -- get all poses
- `/poses/:poseName?` -- get specific pose

**Example poses request:**

```
https://yoga-api-nzy4.onrender.com/api/yoga/poses/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

{
    "items": [
        {
            "id": 1,
            "sanskrit_name": "Navasana",
            "english_name": "Boat",
            "yoga_categories": []

        },
        {
            "id": 2,
            "sanskrit_name": "Ardha Navasana",
            "english_name": "Half-Boat",
            "yoga_categories": []
        }
    ]
}
```

**Example pose request:**

```
https://yoga-api-nzy4.onrender.com/api/poses/boat/
```

**Example response:**

```
HTTP/1.0 200 OK
Content-Type: application/json

{
    "id": 1,
    "sanskrit_name": "Navasana",
    "english_name": "Boat",
    "yoga_categories": []
}
```

**Example response not found:**

```
HTTP/1.0 400 Bad request
Content-Type: application/json
{
    "message": "pose not found"
}
```

## Installation

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/yoga-api.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm start
    yarn start
```

## Contributing

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and submit a pull request with a description
