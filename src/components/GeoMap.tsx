import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, Users } from 'lucide-react';

// Sample tenant and investor locations
const tenants = [
  { name: 'TechCorp Investments', lng: -74.006, lat: 40.7128 }, // New York
  { name: 'FinanceGroup Capital', lng: -0.1276, lat: 51.5074 }, // London
  { name: 'StartupHub Ventures', lng: -122.4194, lat: 37.7749 }, // San Francisco
  { name: 'GrowthVentures LLC', lng: 139.6917, lat: 35.6895 }, // Tokyo
  { name: 'InvestPro Partners', lng: 2.3522, lat: 48.8566 }, // Paris
  { name: 'NextGen Funding', lng: -43.1729, lat: -22.9068 }, // Rio
];

const investors = [
  { lng: -118.2437, lat: 34.0522 }, // Los Angeles
  { lng: -87.6298, lat: 41.8781 }, // Chicago
  { lng: 13.4050, lat: 52.5200 }, // Berlin
  { lng: 121.4737, lat: 31.2304 }, // Shanghai
  { lng: 151.2093, lat: -33.8688 }, // Sydney
  { lng: -79.3832, lat: 43.6532 }, // Toronto
  { lng: 12.4964, lat: 41.9028 }, // Rome
  { lng: 18.0686, lat: 59.3293 }, // Stockholm
];

export const GeoMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || isInitialized) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 1.5,
      center: [20, 20],
      projection: 'globe' as any,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add tenant markers
      tenants.forEach((tenant) => {
        const el = document.createElement('div');
        el.className = 'w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform';
        el.innerHTML = '<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>';
        
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="font-medium">${tenant.name}</div><div class="text-sm text-muted-foreground">Tenant</div>`);

        new mapboxgl.Marker(el)
          .setLngLat([tenant.lng, tenant.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add investor markers
      investors.forEach((investor) => {
        const el = document.createElement('div');
        el.className = 'w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform';
        el.innerHTML = '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
        
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="font-medium">Investor</div><div class="text-sm text-muted-foreground">Active</div>`);

        new mapboxgl.Marker(el)
          .setLngLat([investor.lng, investor.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    setIsInitialized(true);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, isInitialized]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Global Distribution</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isInitialized && (
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="Enter your Mapbox token from mapbox.com"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Get your token from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
          </div>
        )}
        <div ref={mapContainer} className="h-[500px] rounded-lg" />
        <div className="flex gap-6 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">Tenants ({tenants.length})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span className="text-sm text-muted-foreground">Investors ({investors.length})</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
