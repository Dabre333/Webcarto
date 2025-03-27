var wms_layers = [];

var lyr_Basemap_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Basemap<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Basemap_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-170163.984349, 1371224.358273, -159626.628491, 1381829.518000]
        })
    });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batis_3 = new ol.format.GeoJSON();
var features_Batis_3 = format_Batis_3.readFeatures(json_Batis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batis_3.addFeatures(features_Batis_3);
var lyr_Batis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batis_3, 
                style: style_Batis_3,
                popuplayertitle: 'Batis',
                interactive: true,
                title: '<img src="styles/legend/Batis_3.png" /> Batis'
            });
var format_Zonepastorale_4 = new ol.format.GeoJSON();
var features_Zonepastorale_4 = format_Zonepastorale_4.readFeatures(json_Zonepastorale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonepastorale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonepastorale_4.addFeatures(features_Zonepastorale_4);
var lyr_Zonepastorale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonepastorale_4, 
                style: style_Zonepastorale_4,
                popuplayertitle: 'Zone pastorale',
                interactive: true,
                title: '<img src="styles/legend/Zonepastorale_4.png" /> Zone pastorale'
            });
var format_Voirie_5 = new ol.format.GeoJSON();
var features_Voirie_5 = format_Voirie_5.readFeatures(json_Voirie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voirie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voirie_5.addFeatures(features_Voirie_5);
var lyr_Voirie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voirie_5, 
                style: style_Voirie_5,
                popuplayertitle: 'Voirie',
                interactive: true,
                title: '<img src="styles/legend/Voirie_5.png" /> Voirie'
            });
var format_Pistesaccs_6 = new ol.format.GeoJSON();
var features_Pistesaccs_6 = format_Pistesaccs_6.readFeatures(json_Pistesaccs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pistesaccs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistesaccs_6.addFeatures(features_Pistesaccs_6);
var lyr_Pistesaccs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pistesaccs_6, 
                style: style_Pistesaccs_6,
                popuplayertitle: 'Pistes accès',
                interactive: true,
                title: '<img src="styles/legend/Pistesaccs_6.png" /> Pistes accès'
            });
var format_Infrastructuralepastorale_7 = new ol.format.GeoJSON();
var features_Infrastructuralepastorale_7 = format_Infrastructuralepastorale_7.readFeatures(json_Infrastructuralepastorale_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructuralepastorale_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructuralepastorale_7.addFeatures(features_Infrastructuralepastorale_7);
var lyr_Infrastructuralepastorale_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructuralepastorale_7, 
                style: style_Infrastructuralepastorale_7,
                popuplayertitle: 'Infrastructurale pastorale',
                interactive: true,
    title: 'Infrastructurale pastorale<br />\
    <img src="styles/legend/Infrastructuralepastorale_7_0.png" /> <br />' });

lyr_Basemap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Batis_3.setVisible(true);lyr_Zonepastorale_4.setVisible(true);lyr_Voirie_5.setVisible(true);lyr_Pistesaccs_6.setVisible(true);lyr_Infrastructuralepastorale_7.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_GoogleHybrid_1,lyr_OSMStandard_2,lyr_Batis_3,lyr_Zonepastorale_4,lyr_Voirie_5,lyr_Pistesaccs_6,lyr_Infrastructuralepastorale_7];
lyr_Batis_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Zonepastorale_4.set('fieldAliases', {'id': 'id', 'Villages': 'Villages Limitrophes', 'Balises': 'Nombre de Balise', 'Périmètr': 'Périmètre', 'Superficie': 'Superficié ( hectare)', });
lyr_Voirie_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Pistesaccs_6.set('fieldAliases', {'id': 'id', 'Longueur': 'Longueur', 'Balises': 'Nombre de Balise ', });
lyr_Infrastructuralepastorale_7.set('fieldAliases', {'id': 'id', 'Année': 'Année de réalisation', 'Fonction': 'Fonctionnalité ', 'Coord X': 'Coordonnées X', 'Coord Y': 'Coordonnées Y', 'Partenaire': 'Partenaire', 'Ex COGES': 'COGES', 'Débit': 'Débit', 'Photos': 'Photos', 'Région': 'Région', 'Province': 'Province', 'Commune': 'Commune', 'Type': 'Type infrastructure', });
lyr_Batis_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Zonepastorale_4.set('fieldImages', {'id': 'TextEdit', 'Villages': 'ValueMap', 'Balises': 'TextEdit', 'Périmètr': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Voirie_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Pistesaccs_6.set('fieldImages', {'id': 'TextEdit', 'Longueur': 'TextEdit', 'Balises': 'TextEdit', });
lyr_Infrastructuralepastorale_7.set('fieldImages', {'id': 'TextEdit', 'Année': 'DateTime', 'Fonction': 'ValueMap', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'Partenaire': 'TextEdit', 'Ex COGES': 'ValueMap', 'Débit': 'TextEdit', 'Photos': 'ExternalResource', 'Région': 'TextEdit', 'Province': 'TextEdit', 'Commune': 'ValueMap', 'Type': 'ValueMap', });
lyr_Batis_3.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Zonepastorale_4.set('fieldLabels', {'id': 'no label', 'Villages': 'inline label - visible with data', 'Balises': 'inline label - visible with data', 'Périmètr': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', });
lyr_Voirie_5.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Pistesaccs_6.set('fieldLabels', {'id': 'no label', 'Longueur': 'inline label - visible with data', 'Balises': 'inline label - visible with data', });
lyr_Infrastructuralepastorale_7.set('fieldLabels', {'id': 'no label', 'Année': 'inline label - visible with data', 'Fonction': 'inline label - visible with data', 'Coord X': 'inline label - visible with data', 'Coord Y': 'inline label - visible with data', 'Partenaire': 'inline label - visible with data', 'Ex COGES': 'inline label - visible with data', 'Débit': 'inline label - visible with data', 'Photos': 'inline label - visible with data', 'Région': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'Commune': 'inline label - visible with data', 'Type': 'no label', });
lyr_Infrastructuralepastorale_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});