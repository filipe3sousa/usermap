import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {

  @Input() items: any[];
  options: Object;

  constructor(
    private router: Router
  ) {}

  loadMapOptions() {

    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 10, minZoom:1 })
      ],
      zoom: 5,
      center: null
    };

  }

  onMapReady(map: L.Map) {

    let markerArray = [];

    this.items.forEach( item => {
      let coords = item.coords;
      markerArray.push(L.marker([ coords.lat, coords.lng ], {
        icon: L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      })
      .bindTooltip(item.name)
      .on('click', () => this.gotoUser(item.id)))
    });


    //Center and zoom the map considering a group of markers (and a single marker also)
    let group = L.featureGroup(markerArray).addTo(map);
    map.fitBounds(group.getBounds());

    //Disable dragging the map if it is out of bounds
    let southWest = L.latLng(-89.98155760646617, -180),
        northEast = L.latLng(89.99346179538875, 180),
        bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);
    map.on('drag', () => map.panInsideBounds(bounds, { animate: false }));

  }

  gotoUser(id: number): void {
    let link = ['/user', id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.loadMapOptions();
  }

}
