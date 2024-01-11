import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({
    iconUrl: '/images/marker-icon.png',
    iconSize: [30, 40]
}
)
const polylineMillenium: [number, number][] = [
    [49.26600989210573, -123.07896554519427],
    [49.26270699005528, -123.06924723169949],
    [49.25900800052694, -123.04540146053458],
    [49.2609488966721, -123.0329019316995],
    [49.26510699699736, -123.0135923586894],
    [49.26650668871007, -123.00156448752429],
    [49.26492731013559, -122.98207214334937],
    [49.259290997917226, -122.96403208936958],
    [49.25475403054117, -122.93911562985488],
    [49.253636251196916, -122.91808125868995],
    [49.24868187801119, -122.89694127403013],
    [49.26142659921526, -122.88994750470943],
    [49.27812196131284, -122.84599791635867],
    [49.277384958369744, -122.82817927402866],
    [49.27403607050732, -122.80006304519377],
    [49.28047435788541, -122.79392743169842],
    [49.285775140520826, -122.79155682985316]


]

const polylineExpo: [number, number][][] = [
    [
        [49.28599396366165, -123.11158294639667],
        [49.2856090621515, -123.12006882770248],
        [49.28278894175284, -123.11649137354516],
        [49.27973545680173, -123.10972245820446],
        [49.27336097277526, -123.10030708703975],
        [49.2626999885081, -123.06919358704029],
        [49.24841123954451, -123.05591730238153],
        [49.24431434223232, -123.0452989293705],
        [49.23853428615931, -123.03174707354671],
        [49.22991270805735, -123.01272617539352],
        [49.22600294737, -123.00390491748897],
        [49.22021422311431, -122.98849495981786],
        [49.21243051039295, -122.9591665021467],
        [49.20004067579647, -122.94906395981849],
        [49.20164824737942, -122.91256462913276],
        [49.204993005298284, -122.90609854447563],
        [49.22483920999866, -122.88940687331055],
        [49.23342200283205, -122.88289458865296],
        [49.24857682481122, -122.89695200214508],
        [49.25357322562928, -122.91808125796635]],
    [
        [49.28599396366165, -123.11158294639667],
        [49.2856090621515, -123.12006882770248],
        [49.28278894175284, -123.11649137354516],
        [49.27973545680173, -123.10972245820446],
        [49.27336097277526, -123.10030708703975],
        [49.2626999885081, -123.06919358704029],
        [49.24841123954451, -123.05591730238153],
        [49.24431434223232, -123.0452989293705],
        [49.23853428615931, -123.03174707354671],
        [49.22991270805735, -123.01272617539352],
        [49.22600294737, -123.00390491748897],
        [49.22021422311431, -122.98849495981786],
        [49.21243051039295, -122.9591665021467],
        [49.20004067579647, -122.94906395981849],
        [49.20164824737942, -122.91256462913276],
        [49.204993005298284, -122.90609854447563],
        [49.20460393606729, -122.87429560214707],
        [49.19907854067583, -122.85070678865428],
        [49.18969288579984, -122.84795290214767],
        [49.18291700308392, -122.84471147146219]
    ]

]

const blueOptions = { color: 'blue' }
const yellowOptions = { color: 'red' }
const fillBlueOptions = { color: 'blue ' }

const Map = () => {

    return (

        <MapContainer

            style={{ height: "100vh" }}
            center={[49.25080623544618, -123.00183562333072]} zoom={13.4} scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/jennydmcm/leaflet-canada-line"> By Jenny McMahon </a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            Expo Line
            <Marker position={[49.28599396366165, -123.11158294639667]} icon={icon}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.2856090621515, -123.12006882770248]} icon={icon}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>
            <Marker position={[49.28278894175284, -123.11649137354516]} icon={icon}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>
            <Marker position={[49.27973545680173, -123.10972245820446]} icon={icon}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>
            <Marker position={[49.27336097277526, -123.10030708703975]} icon={icon}>
                <Popup>
                    Main Street-Science world Station
                </Popup>
            </Marker>
            <Marker position={[49.2626999885081, -123.06919358704029]} icon={icon}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>
            <Marker position={[49.24841123954451, -123.05591730238153]} icon={icon}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>
            <Marker position={[49.24431434223232, -123.0452989293705]} icon={icon}>
                <Popup>
                    29th Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.23853428615931, -123.03174707354671]} icon={icon}>
                <Popup>
                    Joyce-collingwood Station
                </Popup>
            </Marker>
            <Marker position={[49.22991270805735, -123.01272617539352]} icon={icon}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>
            <Marker position={[49.22600294737, -123.00390491748897]} icon={icon}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>
            <Marker position={[49.22021422311431, -122.98849495981786]} icon={icon}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>
            <Marker position={[49.21243051039295, -122.9591665021467]} icon={icon}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>
            <Marker position={[49.20004067579647, -122.94906395981849]} icon={icon}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>
            <Marker position={[49.20164824737942, -122.91256462913276]} icon={icon}>
                <Popup>
                    New Westminister Station
                </Popup>
            </Marker>
            <Marker position={[49.20460393606729, -122.87429560214707]} icon={icon}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>
            <Marker position={[49.19907854067583, -122.85070678865428]} icon={icon}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>
            <Marker position={[49.18969288579984, -122.84795290214767]} icon={icon}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>
            <Marker position={[49.18291700308392, -122.84471147146219]} icon={icon}>
                <Popup>
                    King George Station
                </Popup>
            </Marker>
            <Marker position={[49.22483920999866, -122.88940687331055]} icon={icon}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>
            <Marker position={[49.23342200283205, -122.88289458865296]} icon={icon}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>
            <Marker position={[49.24857682481122, -122.89695200214508]} icon={icon}>
                <Popup>
                    Lougheed Town Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.25357322562928, -122.91808125796635]} icon={icon}>
                <Popup>
                    Production way-university Station
                </Popup>
            </Marker>
            <Polyline pathOptions={blueOptions} positions={polylineExpo}></Polyline>
            <Polyline pathOptions={yellowOptions} positions={polylineMillenium}></Polyline>
            <Marker position={[49.26600989210573, -123.07896554519427]} icon={icon}>

                Millenium Line
                <Popup>
                    VCC-Clark Station
                </Popup>
            </Marker>
            <Marker position={[49.25900800052694, -123.04540146053458]} icon={icon}>
                <Popup>
                    Renfrew
                </Popup>
            </Marker>
            <Marker position={[49.2609488966721, -123.0329019316995]} icon={icon}>
                <Popup>
                    Rupert
                </Popup>
            </Marker>
            <Marker position={[49.26510699699736, -123.0135923586894]} icon={icon}>
                <Popup>
                    Gilmore
                </Popup>
            </Marker>
            <Marker position={[49.26650668871007, -123.00156448752429]} icon={icon}>
                <Popup>
                    Brentwood Town Centre
                </Popup>
            </Marker>
            <Marker position={[49.26492731013559, -122.98207214334937]} icon={icon}>
                <Popup>
                    Holdom
                </Popup>
            </Marker>
            <Marker position={[49.259290997917226, -122.96403208936958]} icon={icon}>
                <Popup>
                    Sperling-Burnaby Lake
                </Popup>
            </Marker>
            <Marker position={[49.25475403054117, -122.93911562985488]} icon={icon}>
                <Popup>
                    Lake City Way
                </Popup>
            </Marker>
            <Marker position={[49.24868187801119, -122.89694127403013]} icon={icon}>
                <Popup>
                    Lougheed Town Centre                </Popup>
            </Marker>
            <Marker position={[49.26142659921526, -122.88994750470943]} icon={icon}>
                <Popup>
                    Burquitlam                </Popup>
            </Marker>
            <Marker position={[49.27812196131284, -122.84599791635867]} icon={icon}>
                <Popup>
                    Moody Centre                </Popup>
            </Marker>
            <Marker position={[49.277384958369744, -122.82817927402866]} icon={icon}>
                <Popup>
                    Inlet Centre                </Popup>
            </Marker>
            <Marker position={[49.27403607050732, -122.80006304519377]} icon={icon}>
                <Popup>
                    Coquitlam Centre                </Popup>
            </Marker>
            <Marker position={[49.28047435788541, -122.79392743169842]} icon={icon}>
                <Popup>
                    Lincoln            </Popup>
            </Marker>
            <Marker position={[49.285775140520826, -122.79155682985316]} icon={icon}>
                <Popup>
                    Lafarge Lake-Douglas               </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;