// Import settings from settings file.
import settings from './settings.js';
const baseUrl = settings.baseUrl;
const folder = settings.folder;

const pannellumViewer = {
  "default": {
    // Set default first scene.
    "firstScene": "hallway",
    // Set a fallback url for when pannellum/WebGL renderer is not supported.
    "fallback": "fallback.html",
    // Set the basepath to the folder from settings.js.
    "basePath": folder + "/",
    // Additional settings, see https://pannellum.org/documentation/reference/.
    "sceneFadeDuration": 1000,
    "compass": false,
    "autoLoad": true,
  },
  "scenes": {
    "hallway": {
      "type": "equirectangular",
        "panorama": "Hallway.webp",
        // "hotSpotDebug": true,
        "title": "VU virtual lab",
        "hotSpots": [
          {
            "type": "scene",
            "pitch": -20,
            "yaw": 166,
            "text": "Naar KB-283",
            "sceneId": "KB-283-1"
          },
          {
            "type": "scene",
            "pitch": -8,
            "yaw": -96,
            "text": "Naar de weegkamer",
            "sceneId": "weegkamer"
          },
          {
            "type": "scene",
            "pitch": 1.5,
            "yaw": 89,
            "text": "Naar de garderobe",
            "sceneId": "cloakroom"
          },
      ]
    },
    "weegkamer": {
      "type": "equirectangular",
      "panorama": "Weegkamer.webp",
      // "hotSpotDebug": true,
      "title": "Weegkamer",
      "hotSpots": [
        {
          "type": "scene",
          "pitch": -2.5,
          "yaw": 80,
          "text": "Naar KB-283a",
          "sceneId": "KB-283a-2"
        },
        {
          "type": "scene",
          "pitch": -1,
          "yaw": 35.5,
          "text": "Naar de gang",
          "sceneId": "hallway"
        },
      ]
    },
    "cloakroom": {
      "type": "equirectangular",
      "panorama": "Cloakroom.webp",
      // "hotSpotDebug": true,
      "title": "Garderobe",
      "hotSpots": [
        {
          "type": "scene",
          "pitch": -12,
          "yaw": 174,
          "text": "Naar de gang",
          "sceneId": "hallway"
        },
      ]
    },
    // KB-283
    "KB-283-1": {
      "type": "equirectangular",
        "panorama": "KB-283-1.webp",
        // "hotSpotDebug": true,
        "title": "KB-283",
        "hotSpots": [
          // Zelfde labzaal
          {
            "type": "scene",
            "pitch": -8.5,
            "yaw": 7,
            "text": "Verplaats",
            "sceneId": "KB-283-2"
          },
          {
            "type": "scene",
            "pitch": -8.5,
            "yaw": -130,
            "text": "Verplaats",
            "sceneId": "KB-283-3"
          },
          // Verlaat labzaal
          {
            "type": "scene",
            "pitch": -4.5,
            "yaw": 102,
            "text": "Naar de gang",
            "sceneId": "hallway"
          },
          {
            "type": "scene",
            "pitch": -5,
            "yaw": -31.5,
            "text": "Naar KB-283a",
            "sceneId": "KB-283a-1"
          },
      ]
    },
    "KB-283-2": {
      "type": "equirectangular",
      "panorama": "KB-283-2-closed.webp",
      // "hotSpotDebug": true,
      "title": "KB-283",
      "hotSpots": [
        // Zelfde labzaal
        {
          "type": "scene",
          "pitch": -11,
          "yaw": -173,
          "text": "Verplaats",
          "sceneId": "KB-283-1"
        },
        {
          "type": "scene",
          "pitch": -5,
          "yaw": -150,
          "text": "Verplaats",
          "sceneId": "KB-283-3"
        },
        // Verlaat lab
        {
          "type": "scene",
          "pitch": -6.5,
          "yaw": -60,
          "text": "Naar KB-283a",
          "sceneId": "KB-283a-1"
        },
        {
          "type": "scene",
          "pitch": -5,
          "yaw": 136,
          "text": "Naar de gang",
          "sceneId": "hallway"
        },
      ]
    },
    "KB-283-3": {
      "type": "equirectangular",
      "panorama": "KB-283-3.webp",
      // "hotSpotDebug": true,
      "title": "KB-283",
      "hotSpots": [
        // Zelfde labzaal
        {
          "type": "scene",
          "pitch": -14,
          "yaw": 50,
          "text": "Verplaats",
          "sceneId": "KB-283-1"
        },
        {
          "type": "scene",
          "pitch": -2.5,
          "yaw": 26,
          "text": "Verplaats",
          "sceneId": "KB-283-2"
        },
        // Verlaat lab
        {
          "type": "scene",
          "pitch": -3.5,
          "yaw": -1,
          "text": "Naar KB-283a",
          "sceneId": "KB-283a-1"
        },
        {
          "type": "scene",
          "pitch": 0.5,
          "yaw": 83,
          "text": "Naar de gang",
          "sceneId": "hallway"
        },
      ]
    },
    // KB-283a
    "KB-283a-1": {
      "type": "equirectangular",
      "panorama": "KB-283a-1.webp",
      // "hotSpotDebug": true,
      "title": "KB-283a",
      "hotSpots": [
        // Zelfde labzaal
        {
          "type": "scene",
          "pitch": -5.5,
          "yaw": -37,
          "text": "Verplaats",
          "sceneId": "KB-283a-2"
        },
        {
          "type": "scene",
          "pitch": -30,
          "yaw": -103,
          "text": "Verplaats",
          "sceneId": "KB-283a-3"
        },
        // Verlaat lab
        {
          "type": "scene",
          "pitch": -3,
          "yaw": -2.5,
          "text": "Naar KB-283",
          "sceneId": "KB-283-3"
        },
      ]
    },
    "KB-283a-2": {
      "type": "equirectangular",
      "panorama": "KB-283a-2.webp",
      // "hotSpotDebug": true,
      "title": "KB-283a",
      "hotSpots": [
        // Zelfde labzaal
        {
          "type": "scene",
          "pitch": -3,
          "yaw": -2.5,
          "text": "Verplaats",
          "sceneId": "KB-283a-1"
        },
        {
          "type": "scene",
          "pitch": -3,
          "yaw": 22,
          "text": "Verplaats",
          "sceneId": "KB-283a-3"
        },
        // Verlaat lab
        {
          "type": "scene",
          "pitch": -8,
          "yaw": 114,
          "text": "Naar de weegkamer",
          "sceneId": "weegkamer"
        },
      ]
    },
    "KB-283a-3": {
      "type": "equirectangular",
      "panorama": "KB-283a-3.webp",
      // "hotSpotDebug": true,
      "title": "KB-283a",
      "hotSpots": [
        // Zelfde labzaal
        {
          "type": "scene",
          "pitch": -35,
          "yaw": -96.5,
          "text": "Verplaats",
          "sceneId": "KB-283a-1"
        },
        {
          "type": "scene",
          "pitch": -6,
          "yaw": 168,
          "text": "Verplaats",
          "sceneId": "KB-283a-2"
        },
        // Verlaat lab
        {
          "type": "scene",
          "pitch": -5,
          "yaw": -164,
          "text": "Naar KB-283",
          "sceneId": "KB-283-1"
        },
        {
          "type": "scene",
          "pitch": -3.5,
          "yaw": 135,
          "text": "Naar de weegkamer",
          "sceneId": "weegkamer"
        },
      ]
    },
  }
}

export default pannellumViewer;