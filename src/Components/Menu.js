import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList className='imglist' sx={{ width: 1200, height: 400 }} cols={4} rowHeight={300} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/550x/33/2a/be/332abe02e0fcc2c15e6b1f08515368ca.jpg',
    title: 'Kaneki',
  },
  {
    img: 'https://hips.hearstapps.com/hmg-prod/images/demon-slayer-1657889450.jpeg',
    title: 'Kimetsu',
  },
  {
    img: 'https://www.mundodeportivo.com/alfabeta/hero/2023/07/aprende-como-ver-los-animes-de-hellsing-en-orden.jpg?width=1200',
    title: 'Hellsing',
  },
  {
    img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=3840x',
    title: 'One Piece',
  },
  {
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/3GCU4ASWIFFNZHYKH44MRY2G2Q.jpg',
    title: 'Dragon ball',
  },
  {
    img: 'https://1.bp.blogspot.com/-dvct7iwtsYQ/X5tT_5ZPJJI/AAAAAAAApO8/KJ65_PLgy6EHrs_oHh1oTMQy7cwaOUJAACLcBGAsYHQ/s0/Episodios-Kiseiju-Parasyte-Orden-Cronologico-Relleno.png',
    title: 'Parasyte',
  },
  {
    img: 'https://i.pinimg.com/1200x/ce/11/6f/ce116ff49cd841cbbaade7a4a62f14d5.jpg',
    title: 'Shigatsu',
  },
  {
    img: 'https://www.todofondos.net/wp-content/uploads/1440x900-Imagen-Eren-Jaeger-Attack-on-Titan-Shingeki-no-Kyojin-Wallpaper-HD.jpg',
    title: 'Shingeki',
  },
  {
    img: 'https://www.coliseugeek.com.br/wp-content/uploads/2023/01/bb034-clickwallpapers-naruto-shippuden-img1.jpg',
    title: 'Naruto',
  },
  {
    img: 'https://p4.wallpaperbetter.com/wallpaper/259/163/824/jujutsu-kaisen-anime-tv-series-hd-wallpaper-preview.jpg',
    title: 'Jujutsu',
  },
  {
    img: 'https://images6.alphacoders.com/127/1274344.jpg',
    title: 'Chain Saw',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/964/926/569/steinsgate-wallpaper-preview.jpg',
    title: 'Steins',
  },
];