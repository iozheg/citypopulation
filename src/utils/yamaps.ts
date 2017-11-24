
declare var ymaps: any;

export class YaMaps{
    map: any;

    constructor(htmlElementId: string){
        this.map = new ymaps.Map(htmlElementId, {
            center: [55.76, 37.64], 
            zoom: 7
        });
    }

    setMark(){
        let city = 'Тюмень';
        let geocode = ymaps.geocode(city);
        geocode.then((res:any) => {
            let coords = res.geoObjects.get(0).geometry.getCoordinates();
            this.map.geoObjects.add(
                new ymaps.Placemark(
                    coords,
                    {hintContent: city}
                )
            );
            this.map.setCenter(coords);
        });
    }
}