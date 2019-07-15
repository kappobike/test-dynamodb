
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
    id: "id-artista"
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
  listAlbums{
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
    albumArtistId: "id-artista"
    year: 2019
    duration: "01:21:20"
  })
  {
    id
  }
}

mutation updateAlbum{
  updateAlbum(input:{
    id:  "id-album"
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

### Códigos de prueba para realizar consultas

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
      eq: "id-artista"
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

### Códigos de prueba para eliminar datos

mutation delAlbum{
  deleteAlbum(input:{
    id: "id-album"
  })
 	{
    album_name
  }
}

mutation delArtist{
  deleteArtist(input:{
    id: "id-artista"
  })
 	{
    artist_name
  }
}