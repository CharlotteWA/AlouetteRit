var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_planchesSemaine1_1 = new ol.format.GeoJSON();
var features_planchesSemaine1_1 = format_planchesSemaine1_1.readFeatures(json_planchesSemaine1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_planchesSemaine1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_planchesSemaine1_1.addFeatures(features_planchesSemaine1_1);
var lyr_planchesSemaine1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_planchesSemaine1_1, 
                style: style_planchesSemaine1_1,
                interactive: true,
    title: 'planches Semaine 1<br />\
    <img src="styles/legend/planchesSemaine1_1_0.png" /> 0<br />\
    <img src="styles/legend/planchesSemaine1_1_1.png" /> Aillet<br />\
    <img src="styles/legend/planchesSemaine1_1_2.png" /> Aromates<br />\
    <img src="styles/legend/planchesSemaine1_1_3.png" /> Aromates;Talus méditerrannéen<br />\
    <img src="styles/legend/planchesSemaine1_1_4.png" /> Bande fleurie<br />\
    <img src="styles/legend/planchesSemaine1_1_5.png" /> Betteraves<br />\
    <img src="styles/legend/planchesSemaine1_1_6.png" /> Blettes<br />\
    <img src="styles/legend/planchesSemaine1_1_7.png" /> Carottes hiver<br />\
    <img src="styles/legend/planchesSemaine1_1_8.png" /> Chou pointu<br />\
    <img src="styles/legend/planchesSemaine1_1_9.png" /> Choux cabus<br />\
    <img src="styles/legend/planchesSemaine1_1_10.png" /> Choux milan<br />\
    <img src="styles/legend/planchesSemaine1_1_11.png" /> Choux pontoise<br />\
    <img src="styles/legend/planchesSemaine1_1_12.png" /> Ciboule<br />\
    <img src="styles/legend/planchesSemaine1_1_13.png" /> Engrais verts<br />\
    <img src="styles/legend/planchesSemaine1_1_14.png" /> Epinards<br />\
    <img src="styles/legend/planchesSemaine1_1_15.png" /> Fenouil de merde<br />\
    <img src="styles/legend/planchesSemaine1_1_16.png" /> Fleurs comestibles<br />\
    <img src="styles/legend/planchesSemaine1_1_17.png" /> Jeunes pousses<br />\
    <img src="styles/legend/planchesSemaine1_1_18.png" /> Kale mix<br />\
    <img src="styles/legend/planchesSemaine1_1_19.png" /> Kale noir<br />\
    <img src="styles/legend/planchesSemaine1_1_20.png" /> Kale rouge<br />\
    <img src="styles/legend/planchesSemaine1_1_21.png" /> Kale vert<br />\
    <img src="styles/legend/planchesSemaine1_1_22.png" /> Navet boule d\'or<br />\
    <img src="styles/legend/planchesSemaine1_1_23.png" /> Navet collet violet<br />\
    <img src="styles/legend/planchesSemaine1_1_24.png" /> Navet marteaux<br />\
    <img src="styles/legend/planchesSemaine1_1_25.png" /> Navets<br />\
    <img src="styles/legend/planchesSemaine1_1_26.png" /> Occultation<br />\
    <img src="styles/legend/planchesSemaine1_1_27.png" /> Oignons bottes blancs<br />\
    <img src="styles/legend/planchesSemaine1_1_28.png" /> Oignons bottes rossa<br />\
    <img src="styles/legend/planchesSemaine1_1_29.png" /> Pakchoi<br />\
    <img src="styles/legend/planchesSemaine1_1_30.png" /> Planches expérimentales<br />\
    <img src="styles/legend/planchesSemaine1_1_31.png" /> Poireaux automne<br />\
    <img src="styles/legend/planchesSemaine1_1_32.png" /> Poireaux hiver<br />\
    <img src="styles/legend/planchesSemaine1_1_33.png" /> Radis rave<br />\
    <img src="styles/legend/planchesSemaine1_1_34.png" /> Rhubarbe;Fraises,Maïs<br />\
    <img src="styles/legend/planchesSemaine1_1_35.png" /> Salades<br />\
    <img src="styles/legend/planchesSemaine1_1_36.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_planchesSemaine1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_planchesSemaine1_1];
lyr_planchesSemaine1_1.set('fieldAliases', {'nom_jardin': 'nom_jardin', 'ord_planch': 'ord_planch', 'culture_s1': 'culture_s1', 'culture_s2': 'culture_s2', 'culture_s3': 'culture_s3', 'culture_s4': 'culture_s4', 'culture_s5': 'culture_s5', 'culture_s6': 'culture_s6', 'culture_s7': 'culture_s7', 'culture_s8': 'culture_s8', 'culture_s9': 'culture_s9', 'culture_s10': 'culture_s10', 'culture_s11': 'culture_s11', 'culture_s12': 'culture_s12', 'culture_s13': 'culture_s13', 'culture_s14': 'culture_s14', 'culture_s15': 'culture_s15', 'culture_s16': 'culture_s16', 'culture_s17': 'culture_s17', 'culture_s18': 'culture_s18', 'culture_s19': 'culture_s19', 'culture_s20': 'culture_s20', 'culture_s21': 'culture_s21', 'culture_s22': 'culture_s22', 'culture_s23': 'culture_s23', 'culture_s24': 'culture_s24', 'culture_s25': 'culture_s25', 'culture_s26': 'culture_s26', 'culture_s27': 'culture_s27', 'culture_s28': 'culture_s28', 'culture_s29': 'culture_s29', 'culture_s30': 'culture_s30', 'culture_s31': 'culture_s31', 'culture_s32': 'culture_s32', 'culture_s33': 'culture_s33', 'culture_s34': 'culture_s34', 'culture_s35': 'culture_s35', 'culture_s36': 'culture_s36', 'culture_s37': 'culture_s37', 'culture_s38': 'culture_s38', 'culture_s39': 'culture_s39', 'culture_s40': 'culture_s40', 'culture_s41': 'culture_s41', 'culture_s42': 'culture_s42', 'culture_s43': 'culture_s43', 'culture_s44': 'culture_s44', 'culture_s45': 'culture_s45', 'culture_s46': 'culture_s46', 'culture_s47': 'culture_s47', 'culture_s48': 'culture_s48', 'culture_s49': 'culture_s49', 'culture_s50': 'culture_s50', 'culture_s51': 'culture_s51', 'culture_s52': 'culture_s52', 'nom_planch': 'nom_planch', });
lyr_planchesSemaine1_1.set('fieldImages', {'nom_jardin': 'TextEdit', 'ord_planch': 'TextEdit', 'culture_s1': 'TextEdit', 'culture_s2': 'TextEdit', 'culture_s3': 'TextEdit', 'culture_s4': 'TextEdit', 'culture_s5': 'TextEdit', 'culture_s6': 'TextEdit', 'culture_s7': 'TextEdit', 'culture_s8': 'TextEdit', 'culture_s9': 'TextEdit', 'culture_s10': 'TextEdit', 'culture_s11': 'TextEdit', 'culture_s12': 'TextEdit', 'culture_s13': 'TextEdit', 'culture_s14': 'TextEdit', 'culture_s15': 'TextEdit', 'culture_s16': 'TextEdit', 'culture_s17': 'TextEdit', 'culture_s18': 'TextEdit', 'culture_s19': 'TextEdit', 'culture_s20': 'TextEdit', 'culture_s21': 'TextEdit', 'culture_s22': 'TextEdit', 'culture_s23': 'TextEdit', 'culture_s24': 'TextEdit', 'culture_s25': 'TextEdit', 'culture_s26': 'TextEdit', 'culture_s27': 'TextEdit', 'culture_s28': 'TextEdit', 'culture_s29': 'TextEdit', 'culture_s30': 'TextEdit', 'culture_s31': 'TextEdit', 'culture_s32': 'TextEdit', 'culture_s33': 'TextEdit', 'culture_s34': 'TextEdit', 'culture_s35': 'TextEdit', 'culture_s36': 'TextEdit', 'culture_s37': 'TextEdit', 'culture_s38': 'TextEdit', 'culture_s39': 'TextEdit', 'culture_s40': 'TextEdit', 'culture_s41': 'TextEdit', 'culture_s42': 'TextEdit', 'culture_s43': 'TextEdit', 'culture_s44': 'TextEdit', 'culture_s45': 'TextEdit', 'culture_s46': 'TextEdit', 'culture_s47': 'TextEdit', 'culture_s48': 'TextEdit', 'culture_s49': 'TextEdit', 'culture_s50': 'TextEdit', 'culture_s51': 'TextEdit', 'culture_s52': 'TextEdit', 'nom_planch': 'TextEdit', });
lyr_planchesSemaine1_1.set('fieldLabels', {'nom_jardin': 'no label', 'ord_planch': 'no label', 'culture_s1': 'inline label', 'culture_s2': 'no label', 'culture_s3': 'no label', 'culture_s4': 'no label', 'culture_s5': 'no label', 'culture_s6': 'no label', 'culture_s7': 'no label', 'culture_s8': 'no label', 'culture_s9': 'no label', 'culture_s10': 'no label', 'culture_s11': 'no label', 'culture_s12': 'no label', 'culture_s13': 'no label', 'culture_s14': 'no label', 'culture_s15': 'no label', 'culture_s16': 'no label', 'culture_s17': 'no label', 'culture_s18': 'no label', 'culture_s19': 'no label', 'culture_s20': 'no label', 'culture_s21': 'no label', 'culture_s22': 'no label', 'culture_s23': 'no label', 'culture_s24': 'no label', 'culture_s25': 'no label', 'culture_s26': 'no label', 'culture_s27': 'no label', 'culture_s28': 'no label', 'culture_s29': 'no label', 'culture_s30': 'no label', 'culture_s31': 'no label', 'culture_s32': 'no label', 'culture_s33': 'no label', 'culture_s34': 'no label', 'culture_s35': 'no label', 'culture_s36': 'no label', 'culture_s37': 'no label', 'culture_s38': 'no label', 'culture_s39': 'no label', 'culture_s40': 'no label', 'culture_s41': 'no label', 'culture_s42': 'no label', 'culture_s43': 'no label', 'culture_s44': 'no label', 'culture_s45': 'no label', 'culture_s46': 'no label', 'culture_s47': 'no label', 'culture_s48': 'no label', 'culture_s49': 'no label', 'culture_s50': 'no label', 'culture_s51': 'no label', 'culture_s52': 'no label', 'nom_planch': 'header label', });
lyr_planchesSemaine1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});