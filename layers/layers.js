ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.976949, 10.710787, 18.650636, 24.056643]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RgionsduNiger_1 = new ol.format.GeoJSON();
var features_RgionsduNiger_1 = format_RgionsduNiger_1.readFeatures(json_RgionsduNiger_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RgionsduNiger_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RgionsduNiger_1.addFeatures(features_RgionsduNiger_1);
var lyr_RgionsduNiger_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RgionsduNiger_1, 
                style: style_RgionsduNiger_1,
                popuplayertitle: 'Régions du Niger',
                interactive: true,
    title: 'Régions du Niger<br />\
    <img src="styles/legend/RgionsduNiger_1_0.png" /> Agadez<br />\
    <img src="styles/legend/RgionsduNiger_1_1.png" /> Diffa<br />\
    <img src="styles/legend/RgionsduNiger_1_2.png" /> Dosso<br />\
    <img src="styles/legend/RgionsduNiger_1_3.png" /> Maradi<br />\
    <img src="styles/legend/RgionsduNiger_1_4.png" /> Niamey<br />\
    <img src="styles/legend/RgionsduNiger_1_5.png" /> Tahoua<br />\
    <img src="styles/legend/RgionsduNiger_1_6.png" /> Tillabéri<br />\
    <img src="styles/legend/RgionsduNiger_1_7.png" /> Zinder<br />\
    <img src="styles/legend/RgionsduNiger_1_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_RgionsduNiger_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RgionsduNiger_1];
lyr_RgionsduNiger_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'adm_01': 'adm_01', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'rowcacode1': 'rowcacode1', 'NOMREG': 'NOMREG', 'ISO3': 'ISO3', 'ISO2': 'ISO2', 'NAT_INCID': 'NAT_INCID', });
lyr_RgionsduNiger_1.set('fieldImages', {'OBJECTID': '', 'adm_01': '', 'Shape_Leng': '', 'Shape_Area': '', 'rowcacode1': '', 'NOMREG': '', 'ISO3': '', 'ISO2': '', 'NAT_INCID': '', });
lyr_RgionsduNiger_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'adm_01': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'rowcacode1': 'hidden field', 'NOMREG': 'inline label - always visible', 'ISO3': 'hidden field', 'ISO2': 'hidden field', 'NAT_INCID': 'hidden field', });
lyr_RgionsduNiger_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});