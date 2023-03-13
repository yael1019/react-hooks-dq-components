import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const albumArr = albums.map(albumObj => {
    return (
      <AlbumCard
        key={ albumObj.id }
        name={ albumObj.name }
        image={ albumObj.image }
        genre={ albumObj.genre }
      />
    )
  })
  return (
    <section className="albums">
      { albumArr }
    </section>
  );
}

export default AlbumList;
