<script>
import tt from '@tomtom-international/web-sdk-maps'
export default {
    props:[
        'lon',
        'lat'
    ],
    data(){
        return{
            
        }
    },
    methods:{
        getLocation(){
            const coordinates = [this.lon, this.lat]
            const map = tt.map({
                key: 'z9ITZYm8elo1w49sBk24ssyqYdIyD1lG',
                container: 'map',
                center: coordinates,
                zoom: 15,
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());

            const marker = new tt.Marker().setLngLat(coordinates).addTo(map)
            const popupOffsets = {
            top: [0, 0],
            bottom: [0, -70],
            "bottom-right": [0, -70],
            "bottom-left": [0, -70],
            left: [25, -35],
            right: [-25, -35],
            }
            const popup = new tt.Popup({ offset: popupOffsets }).setHTML(
            "Ecco dove ci troviamo"
            )
            marker.setPopup(popup).togglePopup()
        },
    },
    mounted(){
        this.getLocation()
    }
}
</script>
<template>
    <div class="map-wrapper container-fluid">
        <div class="row">
            <div class="col-12">
                <div id='map' class='map'></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .map-wrapper{

        margin: 5rem 0;
        .map{
            height: 250px;
        }
    }
</style>
