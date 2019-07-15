
### Códigos de prueba para tabla Artist
mutation addArtist {
  createArtist(input: {
    artist_name: "Pink Floyd"
  })
  {
    id
  }
}

mutation updateArtist{
  updateArtist(input:{
    id: "da853929-464b-4b76-814c-41fb6883e228"
    country: "UK"
  })
  {
    artist_name
    country
  }
}

query Artists {
  listArtists{
    items {
      createdAt
      id
      artist_name
      country
      albums{
        items{
          id
          album_name
          year
          duration
        }
      }
      updatedAt
    }
  }
}

### Códigos de prueba para tabla Album
query Albums{
  listAlbums(sortDirection: ASC){
    items{
      createdAt
      id
      album_name     
      year
      duration
      artist{
        artist_name
      }
      updatedAt
    }
  }
}

mutation addAlbum{
  createAlbum(input:{
    album_name: "Album of the artist"
    albumArtistId: "id de artista ingresado"
    year: 2019
    duration: "01:21:20"
  })
  {
    id
  }
}

mutation updateAlbum{
  updateAlbum(input:{
    id:  "11dd3c7f-f378-4c02-b251-c944126fbbca"
    duration: "00:42:59"
  })
  {
    	id
      album_name     
      year
      duration
      artist{
        artist_name
      }
  }
}

query findArtistByName{
  listArtists
  (filter:{
    artist_name: {
      eq: "Pink Floyd"
    }
  })
  {
    items{
      id
      artist_name
    }
  }
}

query findAlbums{
  listAlbums
  (filter:{
    albumArtistId: {
      eq: "7a67a807-5a58-46c3-950e-7257cfa60c96"
    }
  }
  )
  {
    items{
      id
      album_name
      year
    }
  }
}

mutation delAlbum{
  deleteAlbum(input:{
    id: "bbf185d7-1d6f-46c5-8591-e00e1e8503e7"
  })
 	{
    album_name
  }
}

mutation delArtist{
  deleteArtist(input:{
    id: "a60525f6-2158-40b8-a183-e77c90fd2771"
  })
 	{
    artist_name
  }
}