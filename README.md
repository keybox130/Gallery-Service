# Vacation Rental - Image Gallery
> This is the Gallery Component of a Vacation rental booking website.

> It is lovingly crafted by Emmanuel Mota using the following:
- Javascript
- React
- Node JS
- Axios
- Mongo DB
- Mongoose
- Styled Components
>It is deployed using:
- Amazon AWS EC2
- Docker



## Related Projects

  - https://github.com/keybox130

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

>  To use this service:
- npm install -g webpack
- npm install
- npm run seed
- npm run seedList
- npm run react-dev
- npm run start

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
```sh
- Node 6.13.0
- axios
- body-parser
- Express
- mongoose
- nodemon
- react
- react-dom
- styled-components
```
## API

> GET /gallery/stays/:stayid  Example: /gallery/stays/1

Returns:
[
    {
        "_id": "5f83df6beb92851ce958618f",
        "room_id": 100,
        "list": "",
        "title": "Charming Craftsman East Sac/Midtown Apartment",
        "rating": 3.6,
        "rating_count": 249,
        "super_host": false,
        "location": "Corona de Tucson, California, United States",
        "photos": [
            {
                "_id": "5f83df6beb92851ce9586190",
                "id": 1,
                "photo_url": "https://imagesfec.s3.amazonaws.com/airbnb/2/f677abc9-50b6-48d9-95d0-f0010042.jpg",
                "description": "The Cob House is in a very private setting all your own. Bring a camp stove and an ice chest and make your meals on the picnic table there."
            }
        ],
        "__v": 0
    }
]


### Installing Dependencies

From within the root directory:

```sh
- npm install
```

