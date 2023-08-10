<p align="center">
  <a href="https://github.com/inferrinizzard/spotify-web-api">
    <img src="assets/logo.svg" height="100">
  </a>

  <h3 align="center">spotify-web-api</h3>

  <p align="center">
    An isomorphic TypeScript wrapper for Spotify's Web API
    <br />
    <a href="https://inferrinizzard.github.io/spotify-web-api/"><strong>View the docs »</strong></a>
    <br />
    <p align="center">
      <img alt="npm" src="https://badgen.net/npm/v/spotify-web-api"/>
      <img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/spotify-web-api">
      <img alt="license" src="https://badgen.net/github/license/inferrinizzard/spotify-web-api">
    </p>
    <p align="center">
      <img alt="Master Workflow" src="https://github.com/inferrinizzard/spotify-web-api/workflows/Master%20Workflow/badge.svg"/>
      <img alt="codecov" src="https://codecov.io/gh/inferrinizzard/spotify-web-api/branch/master/graph/badge.svg"/>
      <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </p>
  </p>
</p>

## Installation

### yarn

```sh
yarn add spotify-web-api
```

### npm

```sh
npm install spotify-web-api
```

## Basic Example

```typescript
import { SpotifyWebApi } from 'spotify-web-api';

const spotify = new SpotifyWebApi({ accessToken: '<YOUR_ACCESS_TOKEN_HERE>' });

const { artists } = await spotify.albums.getAlbum('1uzfGk9vxMXfaZ2avqwxod');

console.log(artists.map(artist => artist.name));
// Array [ "Against All Logic" ]
```
